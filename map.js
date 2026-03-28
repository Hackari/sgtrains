// Accurate coordinates sourced from OneMap / LTA open data (WGS84)
const MRT_MAP_DATA = {
    nsl: {
        color: '#d42e12',
        name: 'North South Line',
        stations: [
            { code: 'NS1',  name: 'Jurong East',      latlng: [1.33370, 103.74220] },
            { code: 'NS2',  name: 'Bukit Batok',       latlng: [1.34909, 103.74939] },
            { code: 'NS3',  name: 'Bukit Gombak',      latlng: [1.35843, 103.75180] },
            { code: 'NS4',  name: 'Choa Chu Kang',     latlng: [1.38545, 103.74444] },
            { code: 'NS5',  name: 'Yew Tee',           latlng: [1.39726, 103.74751] },
            { code: 'NS7',  name: 'Kranji',             latlng: [1.42522, 103.76195] },
            { code: 'NS8',  name: 'Marsiling',          latlng: [1.43244, 103.77416] },
            { code: 'NS9',  name: 'Woodlands',          latlng: [1.43699, 103.78635] },
            { code: 'NS10', name: 'Admiralty',          latlng: [1.44058, 103.80099] },
            { code: 'NS11', name: 'Sembawang',          latlng: [1.44930, 103.82007] },
            { code: 'NS12', name: 'Canberra',           latlng: [1.44308, 103.82975] },
            { code: 'NS13', name: 'Yishun',             latlng: [1.42942, 103.83533] },
            { code: 'NS14', name: 'Khatib',             latlng: [1.41735, 103.83299] },
            { code: 'NS15', name: 'Yio Chu Kang',       latlng: [1.38164, 103.84489] },
            { code: 'NS16', name: 'Ang Mo Kio',         latlng: [1.36993, 103.84956] },
            { code: 'NS17', name: 'Bishan',             latlng: [1.35116, 103.84838] },
            { code: 'NS18', name: 'Braddell',           latlng: [1.34034, 103.84703] },
            { code: 'NS19', name: 'Toa Payoh',          latlng: [1.33231, 103.84726] },
            { code: 'NS20', name: 'Novena',             latlng: [1.32039, 103.84375] },
            { code: 'NS21', name: 'Newton',             latlng: [1.31238, 103.83799] },
            { code: 'NS22', name: 'Orchard',            latlng: [1.30414, 103.83175] },
            { code: 'NS23', name: 'Somerset',           latlng: [1.30055, 103.83892] },
            { code: 'NS24', name: 'Dhoby Ghaut',        latlng: [1.29915, 103.84572] },
            { code: 'NS25', name: 'City Hall',          latlng: [1.29316, 103.85201] },
            { code: 'NS26', name: 'Raffles Place',      latlng: [1.28396, 103.85155] },
            { code: 'NS27', name: 'Marina Bay',         latlng: [1.27655, 103.85462] },
            { code: 'NS28', name: 'Marina South Pier',  latlng: [1.27083, 103.86343] }
        ]
    },
    ewl: {
        color: '#009645',
        name: 'East West Line',
        stations: [
            { code: 'EW33', name: 'Tuas Link',         latlng: [1.34009, 103.63680] },
            { code: 'EW32', name: 'Tuas West Road',    latlng: [1.33265, 103.64040] },
            { code: 'EW31', name: 'Tuas Crescent',     latlng: [1.32133, 103.64895] },
            { code: 'EW30', name: 'Gul Circle',        latlng: [1.31961, 103.66091] },
            { code: 'EW29', name: 'Joo Koon',          latlng: [1.32782, 103.67855] },
            { code: 'EW28', name: 'Pioneer',           latlng: [1.33683, 103.69700] },
            { code: 'EW27', name: 'Boon Lay',          latlng: [1.33880, 103.70608] },
            { code: 'EW26', name: 'Lakeside',          latlng: [1.34425, 103.72076] },
            { code: 'EW25', name: 'Chinese Garden',    latlng: [1.34248, 103.73234] },
            { code: 'EW24', name: 'Jurong East',       latlng: [1.33370, 103.74220] },
            { code: 'EW23', name: 'Clementi',          latlng: [1.31527, 103.76520] },
            { code: 'EW22', name: 'Dover',             latlng: [1.31136, 103.77863] },
            { code: 'EW21', name: 'Buona Vista',       latlng: [1.30709, 103.79003] },
            { code: 'EW20', name: 'Commonwealth',      latlng: [1.30250, 103.79818] },
            { code: 'EW19', name: 'Queenstown',        latlng: [1.29424, 103.80607] },
            { code: 'EW18', name: 'Redhill',           latlng: [1.28954, 103.81659] },
            { code: 'EW17', name: 'Tiong Bahru',       latlng: [1.28624, 103.82699] },
            { code: 'EW16', name: 'Outram Park',       latlng: [1.28013, 103.83938] },
            { code: 'EW15', name: 'Tanjong Pagar',     latlng: [1.27641, 103.84554] },
            { code: 'EW14', name: 'Raffles Place',     latlng: [1.28396, 103.85155] },
            { code: 'EW13', name: 'City Hall',         latlng: [1.29316, 103.85201] },
            { code: 'EW12', name: 'Bugis',             latlng: [1.30086, 103.85635] },
            { code: 'EW11', name: 'Lavender',          latlng: [1.30725, 103.86292] },
            { code: 'EW10', name: 'Kallang',           latlng: [1.31141, 103.87115] },
            { code: 'EW9',  name: 'Aljunied',          latlng: [1.31643, 103.88291] },
            { code: 'EW8',  name: 'Paya Lebar',        latlng: [1.31794, 103.89323] },
            { code: 'EW7',  name: 'Eunos',             latlng: [1.31960, 103.90321] },
            { code: 'EW6',  name: 'Kembangan',         latlng: [1.32095, 103.91320] },
            { code: 'EW5',  name: 'Bedok',             latlng: [1.32397, 103.93001] },
            { code: 'EW4',  name: 'Tanah Merah',       latlng: [1.32730, 103.94631] },
            { code: 'EW3',  name: 'Simei',             latlng: [1.34311, 103.95313] },
            { code: 'EW2',  name: 'Tampines',          latlng: [1.35481, 103.94543] },
            { code: 'EW1',  name: 'Pasir Ris',         latlng: [1.37299, 103.94923] },
            { code: 'CG1',  name: 'Expo',              latlng: [1.33524, 103.96150] },
            { code: 'CG2',  name: 'Changi Airport',    latlng: [1.35737, 103.98791] }
        ]
    },
    ccl: {
        color: '#fa9e0d',
        name: 'Circle Line',
        stations: [
            { code: 'CC1',  name: 'Dhoby Ghaut',       latlng: [1.29915, 103.84572] },
            { code: 'CC2',  name: 'Bras Basah',        latlng: [1.29654, 103.85029] },
            { code: 'CC3',  name: 'Esplanade',         latlng: [1.29361, 103.85548] },
            { code: 'CC4',  name: 'Promenade',         latlng: [1.29341, 103.86129] },
            { code: 'CC5',  name: 'Nicoll Highway',    latlng: [1.29985, 103.86325] },
            { code: 'CC6',  name: 'Stadium',           latlng: [1.30634, 103.87511] },
            { code: 'CC7',  name: 'Mountbatten',       latlng: [1.30634, 103.88254] },
            { code: 'CC8',  name: 'Dakota',            latlng: [1.30845, 103.88838] },
            { code: 'CC9',  name: 'Paya Lebar',        latlng: [1.31794, 103.89323] },
            { code: 'CC10', name: 'MacPherson',        latlng: [1.32644, 103.89015] },
            { code: 'CC11', name: 'Tai Seng',          latlng: [1.33539, 103.88787] },
            { code: 'CC12', name: 'Bartley',           latlng: [1.34250, 103.87960] },
            { code: 'CC13', name: 'Serangoon',         latlng: [1.34985, 103.87311] },
            { code: 'CC14', name: 'Lorong Chuan',      latlng: [1.35239, 103.86412] },
            { code: 'CC15', name: 'Bishan',            latlng: [1.35116, 103.84838] },
            { code: 'CC16', name: 'Marymount',         latlng: [1.34933, 103.83936] },
            { code: 'CC17', name: 'Caldecott',         latlng: [1.33747, 103.83916] },
            { code: 'CC19', name: 'Botanic Gardens',   latlng: [1.32256, 103.81533] },
            { code: 'CC20', name: 'Farrer Road',       latlng: [1.31723, 103.80783] },
            { code: 'CC21', name: 'Holland Village',   latlng: [1.31183, 103.79614] },
            { code: 'CC22', name: 'Buona Vista',       latlng: [1.30709, 103.79003] },
            { code: 'CC23', name: 'one-north',         latlng: [1.29924, 103.78712] },
            { code: 'CC24', name: 'Kent Ridge',        latlng: [1.29340, 103.78456] },
            { code: 'CC25', name: 'Haw Par Villa',     latlng: [1.28220, 103.78207] },
            { code: 'CC26', name: 'Pasir Panjang',     latlng: [1.27614, 103.79211] },
            { code: 'CC27', name: 'Labrador Park',     latlng: [1.27239, 103.80242] },
            { code: 'CC28', name: 'Telok Blangah',     latlng: [1.27057, 103.80935] },
            { code: 'CC29', name: 'HarbourFront',      latlng: [1.26527, 103.82003] },
            { code: 'CE1',  name: 'Bayfront',          latlng: [1.28187, 103.85908] },
            { code: 'CE2',  name: 'Marina Bay',        latlng: [1.27655, 103.85462] },
            { code: 'CC30', name: 'Keppel',            latlng: [1.26952, 103.83994], future: true },
            { code: 'CC31', name: 'Cantonment',        latlng: [1.27357, 103.84229], future: true },
            { code: 'CC32', name: 'Prince Edward Road', latlng: [1.27714, 103.84761], future: true }
        ]
    },
    nel: {
        color: '#9900aa',
        name: 'North East Line',
        stations: [
            { code: 'NE1',  name: 'HarbourFront',  latlng: [1.26527, 103.82003] },
            { code: 'NE3',  name: 'Outram Park',   latlng: [1.28013, 103.83938] },
            { code: 'NE4',  name: 'Chinatown',     latlng: [1.28447, 103.84446] },
            { code: 'NE5',  name: 'Clarke Quay',   latlng: [1.28838, 103.84638] },
            { code: 'NE6',  name: 'Dhoby Ghaut',   latlng: [1.29915, 103.84572] },
            { code: 'NE7',  name: 'Little India',  latlng: [1.30661, 103.84919] },
            { code: 'NE8',  name: 'Farrer Park',   latlng: [1.31220, 103.85428] },
            { code: 'NE9',  name: 'Boon Keng',     latlng: [1.31929, 103.86148] },
            { code: 'NE10', name: 'Potong Pasir',  latlng: [1.33148, 103.86869] },
            { code: 'NE11', name: 'Woodleigh',     latlng: [1.33935, 103.87069] },
            { code: 'NE12', name: 'Serangoon',     latlng: [1.34985, 103.87311] },
            { code: 'NE13', name: 'Kovan',         latlng: [1.35996, 103.88511] },
            { code: 'NE14', name: 'Hougang',       latlng: [1.37131, 103.89289] },
            { code: 'NE15', name: 'Buangkok',      latlng: [1.38309, 103.89294] },
            { code: 'NE16', name: 'Sengkang',      latlng: [1.39169, 103.89548] },
            { code: 'NE17', name: 'Punggol',       latlng: [1.40455, 103.90207] },
            { code: 'NE18', name: 'Punggol Coast', latlng: [1.41510, 103.91017] }
        ]
    },
    dtl: {
        color: '#005ec4',
        name: 'Downtown Line',
        stations: [
            { code: 'DT1',  name: 'Bukit Panjang',    latlng: [1.37842, 103.77617] },
            { code: 'DT2',  name: 'Cashew',           latlng: [1.36941, 103.78430] },
            { code: 'DT3',  name: 'Hillview',         latlng: [1.36218, 103.76768] },
            { code: 'DT4',  name: 'Hume',             latlng: [1.34992, 103.77130] },
            { code: 'DT5',  name: 'Beauty World',     latlng: [1.34122, 103.77579] },
            { code: 'DT6',  name: 'King Albert Park', latlng: [1.33516, 103.78328] },
            { code: 'DT7',  name: 'Sixth Avenue',     latlng: [1.33002, 103.79812] },
            { code: 'DT8',  name: 'Tan Kah Kee',      latlng: [1.32546, 103.80788] },
            { code: 'DT9',  name: 'Botanic Gardens',  latlng: [1.32256, 103.81533] },
            { code: 'DT10', name: 'Stevens',          latlng: [1.32003, 103.82540] },
            { code: 'DT11', name: 'Newton',           latlng: [1.31238, 103.83799] },
            { code: 'DT12', name: 'Little India',     latlng: [1.30661, 103.84919] },
            { code: 'DT13', name: 'Rochor',           latlng: [1.30376, 103.85289] },
            { code: 'DT14', name: 'Bugis',            latlng: [1.30086, 103.85635] },
            { code: 'DT15', name: 'Promenade',        latlng: [1.29341, 103.86129] },
            { code: 'DT16', name: 'Bayfront',         latlng: [1.28187, 103.85908] },
            { code: 'DT17', name: 'Downtown',         latlng: [1.27935, 103.85313] },
            { code: 'DT18', name: 'Telok Ayer',       latlng: [1.28166, 103.84798] },
            { code: 'DT19', name: 'Chinatown',        latlng: [1.28447, 103.84446] },
            { code: 'DT20', name: 'Fort Canning',     latlng: [1.29126, 103.84437] },
            { code: 'DT21', name: 'Bencoolen',        latlng: [1.29833, 103.84939] },
            { code: 'DT22', name: 'Jalan Besar',      latlng: [1.30580, 103.85593] },
            { code: 'DT23', name: 'Bendemeer',        latlng: [1.31364, 103.86352] },
            { code: 'DT24', name: 'Geylang Bahru',    latlng: [1.32133, 103.87148] },
            { code: 'DT25', name: 'Mattar',           latlng: [1.32573, 103.88257] },
            { code: 'DT26', name: 'MacPherson',       latlng: [1.32644, 103.89015] },
            { code: 'DT27', name: 'Ubi',              latlng: [1.32981, 103.89901] },
            { code: 'DT28', name: 'Kaki Bukit',       latlng: [1.33503, 103.90832] },
            { code: 'DT29', name: 'Bedok North',      latlng: [1.33413, 103.91930] },
            { code: 'DT30', name: 'Bedok Reservoir',  latlng: [1.33683, 103.93228] },
            { code: 'DT31', name: 'Tampines West',    latlng: [1.34549, 103.93855] },
            { code: 'DT32', name: 'Tampines',         latlng: [1.35481, 103.94543] },
            { code: 'DT33', name: 'Tampines East',    latlng: [1.35675, 103.95580] },
            { code: 'DT34', name: 'Upper Changi',     latlng: [1.34175, 103.96139] },
            { code: 'DT35', name: 'Expo',             latlng: [1.33524, 103.96150] },
            { code: 'DT36', name: 'Xilin',            latlng: [1.32620, 103.96720], future: true }
        ]
    },
    tel: {
        color: '#9d5b25',
        name: 'Thomson-East Coast Line',
        stations: [
            { code: 'TE1',  name: 'Woodlands North',    latlng: [1.44806, 103.82091] },
            { code: 'TE2',  name: 'Woodlands',          latlng: [1.43699, 103.78635] },
            { code: 'TE3',  name: 'Woodlands South',    latlng: [1.42559, 103.79872] },
            { code: 'TE4',  name: 'Springleaf',         latlng: [1.40182, 103.81654] },
            { code: 'TE5',  name: 'Lentor',             latlng: [1.39319, 103.83585] },
            { code: 'TE6',  name: 'Mayflower',          latlng: [1.37793, 103.83787] },
            { code: 'TE7',  name: 'Bright Hill',        latlng: [1.36706, 103.83618] },
            { code: 'TE8',  name: 'Upper Thomson',      latlng: [1.35559, 103.83260] },
            { code: 'TE9',  name: 'Caldecott',          latlng: [1.33747, 103.83916] },
            { code: 'TE11', name: 'Stevens',            latlng: [1.32003, 103.82540] },
            { code: 'TE12', name: 'Napier',             latlng: [1.30665, 103.81829] },
            { code: 'TE13', name: 'Orchard Boulevard',  latlng: [1.30382, 103.82336] },
            { code: 'TE14', name: 'Orchard',            latlng: [1.30414, 103.83175] },
            { code: 'TE15', name: 'Great World',        latlng: [1.29386, 103.83524] },
            { code: 'TE16', name: 'Havelock',           latlng: [1.28873, 103.83926] },
            { code: 'TE17', name: 'Outram Park',        latlng: [1.28013, 103.83938] },
            { code: 'TE18', name: 'Maxwell',            latlng: [1.27931, 103.84518] },
            { code: 'TE19', name: 'Shenton Way',        latlng: [1.27643, 103.84892] },
            { code: 'TE20', name: 'Marina Bay',         latlng: [1.27655, 103.85462] },
            { code: 'TE22', name: 'Gardens by the Bay', latlng: [1.28173, 103.86358] },
            { code: 'TE23', name: 'Tanjong Rhu',        latlng: [1.29926, 103.87149] },
            { code: 'TE24', name: 'Katong Park',        latlng: [1.29865, 103.88433] },
            { code: 'TE25', name: 'Tanjong Katong',     latlng: [1.29899, 103.89564] },
            { code: 'TE26', name: 'Marine Parade',      latlng: [1.30212, 103.90594] },
            { code: 'TE27', name: 'Marine Terrace',     latlng: [1.30700, 103.91349] },
            { code: 'TE28', name: 'Siglap',             latlng: [1.31060, 103.92531] },
            { code: 'TE29', name: 'Bayshore',           latlng: [1.31259, 103.94097] },
            { code: 'TE30', name: 'Bedok South',        latlng: [1.32130, 103.94156], future: true },
            { code: 'TE31', name: 'Sungei Bedok',       latlng: [1.32730, 103.94631], future: true },
            { code: 'TE32', name: "Founders' Memorial", latlng: [1.28950, 103.87190], future: true }
        ]
    }
};

// ── Leaflet map init ──────────────────────────────────────────────────
const map = L.map('map', {
    center: [1.352, 103.820],
    zoom: 12,
    zoomControl: true
});

// No-label tile layer (CartoDB dark matter no labels)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

const stationMarkers = {};

function makeIcon(color, state, isFuture) {
    // state: 'default' | 'guessed' | 'missed'
    const size = state === 'guessed' ? 14 : 10;
    const half = size / 2;
    let bg, border, shadow;

    if (state === 'guessed') {
        bg = color;
        border = 'white';
        shadow = `0 0 0 3px ${color}44`;
    } else if (state === 'missed') {
        bg = '#dc3545';
        border = 'white';
        shadow = 'none';
    } else {
        bg = isFuture ? '#fff' : '#fff';
        border = isFuture ? color + '88' : color;
        shadow = 'none';
    }

    const dash = isFuture && state === 'default'
        ? `border-style: dashed;`
        : '';

    return L.divIcon({
        className: '',
        html: `<div style="
            width:${size}px;height:${size}px;
            border-radius:50%;
            background:${bg};
            border:2.5px solid ${border};
            ${dash}
            box-shadow:${shadow};
            transition: all 0.2s;
        "></div>`,
        iconSize: [size, size],
        iconAnchor: [half, half]
    });
}

// Draw all lines
Object.entries(MRT_MAP_DATA).forEach(([lineKey, lineData]) => {
    const mainStations = lineData.stations.filter(s => {
        if (lineKey === 'ewl') return !['CG1','CG2'].includes(s.code);
        if (lineKey === 'ccl') return !['CE1','CE2','CC30','CC31','CC32'].includes(s.code);
        if (lineKey === 'nel') return true;
        return true;
    });

    const mainCoords = mainStations.map(s => s.latlng);

    // Separate future from operational for line styling
    const opCoords = mainStations.filter(s => !s.future).map(s => s.latlng);
    const futureStations = mainStations.filter(s => s.future);

    L.polyline(opCoords, { color: lineData.color, weight: 4, opacity: 0.9 }).addTo(map);

    if (futureStations.length > 0) {
        // Attach future extension to last operational station
        const lastOp = mainStations.filter(s => !s.future).at(-1);
        if (lastOp) {
            const futureCoords = [lastOp.latlng, ...futureStations.map(s => s.latlng)];
            L.polyline(futureCoords, { color: lineData.color, weight: 3, opacity: 0.45, dashArray: '7 5' }).addTo(map);
        }
    }

    // EWL Changi branch
    if (lineKey === 'ewl') {
        const tm = lineData.stations.find(s => s.code === 'EW4').latlng;
        const branch = lineData.stations.filter(s => ['CG1','CG2'].includes(s.code));
        L.polyline([tm, ...branch.map(s => s.latlng)], { color: lineData.color, weight: 4, opacity: 0.9 }).addTo(map);
        branch.forEach(s => addMarker(lineKey, lineData, s));
    }

    // CCL spur CE + stage 6
    if (lineKey === 'ccl') {
        const pr = lineData.stations.find(s => s.code === 'CC4').latlng;
        const spur = lineData.stations.filter(s => ['CE1','CE2'].includes(s.code));
        L.polyline([pr, ...spur.map(s => s.latlng)], { color: lineData.color, weight: 4, opacity: 0.9 }).addTo(map);
        spur.forEach(s => addMarker(lineKey, lineData, s));

        // CCL6 closing loop: HarbourFront → Keppel → Cantonment → Prince Edward Road → Marina Bay
        const hbf = lineData.stations.find(s => s.code === 'CC29').latlng;
        const cc6 = lineData.stations.filter(s => ['CC30','CC31','CC32'].includes(s.code));
        const mb = lineData.stations.find(s => s.code === 'CE2').latlng;
        L.polyline([hbf, ...cc6.map(s => s.latlng), mb], { color: lineData.color, weight: 3, opacity: 0.45, dashArray: '7 5' }).addTo(map);
        cc6.forEach(s => addMarker(lineKey, lineData, s));
    }

    mainStations.forEach(s => {
        if (lineKey === 'ewl' && ['CG1','CG2'].includes(s.code)) return;
        if (lineKey === 'ccl' && ['CE1','CE2','CC30','CC31','CC32'].includes(s.code)) return;
        addMarker(lineKey, lineData, s);
    });
});

function addMarker(lineKey, lineData, station) {
    const marker = L.marker(station.latlng, {
        icon: makeIcon(lineData.color, 'default', !!station.future),
        zIndexOffset: 100
    }).addTo(map);

    const suffix = station.future ? ' <span style="opacity:0.6;font-size:0.85em">(future)</span>' : '';
    marker.bindTooltip(`<b>${station.code}</b> ${station.name}${suffix}`, {
        permanent: false,
        direction: 'top',
        offset: [0, -8],
        className: 'mrt-tooltip'
    });

    stationMarkers[station.code] = { marker, lineKey, station, state: 'default' };
}

// ── Pulse animation injected once ────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
.mrt-pulse-ring {
    position: absolute;
    border-radius: 50%;
    animation: mrtPulse 0.8s ease-out forwards;
    pointer-events: none;
}
@keyframes mrtPulse {
    0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.9; }
    100% { transform: translate(-50%,-50%) scale(3.5); opacity: 0; }
}
.mrt-tooltip {
    font-size: 12px;
    padding: 4px 8px;
    background: rgba(20,20,20,0.85);
    color: #fff;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
}
.leaflet-tooltip-top.mrt-tooltip::before { border-top-color: rgba(20,20,20,0.85); }
#completion-banner {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: #1a1a2e;
    color: white;
    padding: 14px 28px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    animation: slideUp 0.4s ease;
    pointer-events: none;
}
@keyframes slideUp {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
`;
document.head.appendChild(style);

// ── Public API ────────────────────────────────────────────────────────
function markStationGuessed(code) {
    const entry = stationMarkers[code];
    if (!entry) return;
    const color = MRT_MAP_DATA[entry.lineKey].color;
    entry.marker.setIcon(makeIcon(color, 'guessed', !!entry.station.future));
    entry.marker.setZIndexOffset(300);
    entry.state = 'guessed';

    // Pulse ring
    const pos = map.latLngToContainerPoint(entry.station.latlng);
    const ring = document.createElement('div');
    ring.className = 'mrt-pulse-ring';
    ring.style.cssText = `left:${pos.x}px;top:${pos.y}px;width:14px;height:14px;border:3px solid ${color};`;
    document.getElementById('map').appendChild(ring);
    ring.addEventListener('animationend', () => ring.remove());
}

function markStationMissed(code) {
    const entry = stationMarkers[code];
    if (!entry) return;
    entry.marker.setIcon(makeIcon('#dc3545', 'missed', false));
    entry.state = 'missed';
}

function panToStation(code) {
    const entry = stationMarkers[code];
    if (!entry) return;
    map.panTo(entry.station.latlng, { animate: true, duration: 0.4 });
}

function showCompletionBanner(text) {
    const existing = document.getElementById('completion-banner');
    if (existing) existing.remove();
    const banner = document.createElement('div');
    banner.id = 'completion-banner';
    banner.textContent = text;
    document.getElementById('map').appendChild(banner);
}
