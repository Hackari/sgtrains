let targetStations = [];
let guessedStations = [];
let currentIndex = 0;
let isStrict = false;
let selectedLines = [];

const lineDataMap = {
    nsl: nslData,
    ewl: ewlData,
    ccl: cclData,
    nel: nelData,
    dtl: dtlData,
    tel: telData
};

const lineNames = {
    nsl: 'North South Line',
    ewl: 'East West Line',
    ccl: 'Circle Line',
    nel: 'North East Line',
    dtl: 'Downtown Line',
    tel: 'Thomson-East Coast Line'
};

const startBtn  = document.getElementById('startBtn');
const gameArea  = document.getElementById('gameArea');
const input     = document.getElementById('stationInput');
const giveUpBtn = document.getElementById('giveUpBtn');
const resetBtn  = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
    selectedLines = Array.from(document.querySelectorAll('.line-checkbox:checked')).map(cb => cb.value);
    if (selectedLines.length === 0) return alert('Select at least one line!');

    isStrict = document.getElementById('strictOrder').checked && selectedLines.length === 1;

    targetStations = [];
    selectedLines.forEach(line => {
        targetStations = targetStations.concat(lineDataMap[line]);
    });

    guessedStations = [];
    currentIndex = 0;
    document.querySelector('.setup-section').classList.add('hidden');
    gameArea.classList.remove('hidden');
    document.getElementById('total').innerText = targetStations.length;
    buildProgressBoards();
    updateStats();
    input.disabled = false;
    input.focus();
});

input.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();

    if (isStrict) {
        const target = targetStations[currentIndex];
        if (target && val === target.name.toLowerCase()) {
            guessedStations.push(target);
            currentIndex++;
            e.target.value = '';
            showFeedback('✓ Correct!');
            revealChip(target, 'guessed');
            markStationGuessed(target.code);
            panToStation(target.code);
        }
    } else {
        const foundIndex = targetStations.findIndex(
            s => s.name.toLowerCase() === val && !guessedStations.includes(s)
        );
        if (foundIndex !== -1) {
            const station = targetStations[foundIndex];
            guessedStations.push(station);
            e.target.value = '';
            showFeedback(`✓ ${station.name}`);
            revealChip(station, 'guessed');
            markStationGuessed(station.code);
            panToStation(station.code);
        }
    }

    updateStats();
    if (guessedStations.length === targetStations.length) {
        input.disabled = true;
        showCompletionBanner('🎉 All stations found!');
    }
});

function buildProgressBoards() {
    const container = document.getElementById('progressBoards');
    container.innerHTML = '';

    selectedLines.forEach(line => {
        const stations = lineDataMap[line];
        const board = document.createElement('div');
        board.className = `line-board ${line}`;
        board.dataset.line = line;

        const header = document.createElement('div');
        header.className = `line-board-header ${line}`;
        header.innerHTML = `<span>${lineNames[line]}</span><span class="line-progress">0 / ${stations.length}</span>`;
        board.appendChild(header);

        const body = document.createElement('div');
        body.className = 'line-board-body';

        stations.forEach(station => {
            const chip = document.createElement('span');
            chip.className = 'station-chip' + (station.future ? ' future' : '');
            chip.dataset.code = station.code;
            chip.dataset.name = station.name;
            chip.style.minWidth = Math.max(28, station.name.length * 5.5) + 'px';
            chip.textContent = station.name;
            body.appendChild(chip);
        });

        board.appendChild(body);
        container.appendChild(board);
    });
}

function revealChip(station, state) {
    const chip = document.querySelector(`.station-chip[data-code="${station.code}"]`);
    if (!chip) return;
    chip.classList.add(state);
    updateLineProgress(station);
}

function updateLineProgress(station) {
    const line = selectedLines.find(l => lineDataMap[l].some(s => s.code === station.code));
    if (!line) return;
    const total = lineDataMap[line].length;
    const guessed = guessedStations.filter(s => lineDataMap[line].includes(s)).length;
    const board = document.querySelector(`.line-board[data-line="${line}"]`);
    if (board) board.querySelector('.line-progress').textContent = `${guessed} / ${total}`;
}

function updateStats() {
    document.getElementById('score').innerText = guessedStations.length;
}

function showFeedback(msg) {
    const f = document.getElementById('feedback');
    f.innerText = msg;
    setTimeout(() => { if (f.innerText === msg) f.innerText = ''; }, 1500);
}

giveUpBtn.addEventListener('click', () => {
    const missed = targetStations.filter(s => !guessedStations.includes(s));
    missed.forEach(s => {
        revealChip(s, 'missed');
        markStationMissed(s.code);
    });
    input.disabled = true;
});

resetBtn.addEventListener('click', () => location.reload());
