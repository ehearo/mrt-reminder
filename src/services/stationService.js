// 路線資料配置
const LINE_STATIONS = {
    'blue': {
        name: '板南線',
        color: '#0070BD',
        stations: []
    },
    'red': {
        name: '淡水信義線',
        color: '#E3002C',
        stations: []
    },
    'green': {
        name: '松山新店線',
        color: '#008659',
        stations: []
    },
    'orange': {
        name: '中和新蘆線',
        color: '#F8B61C',
        stations: []
    },
    '': {
        name: '',
        color: '',
        stations: []
    }
};
/**
 * 解析站點代碼和路線的對應關係
 */
export function getLineFromStationCode(code) {
    if (code.startsWith('R')) {
        return 'red'; // 淡水信義線
    }
    else if (code.startsWith('BL')) {
        return 'blue'; // 板南線
    }
    else if (code.startsWith('G')) {
        return 'green'; // 松山新店線
    }
    else if (code.startsWith('O')) {
        return 'orange'; // 中和新蘆線
    }
    return '';
}
/**
 * 載入站點資料
 */
async function loadStationData() {
    try {
        const stationModules = import.meta.glob('../Stations/*.json', { eager: true });
        for (const [path, module] of Object.entries(stationModules)) {
            const station = module.default;
            const line = getLineFromStationCode(station.StationCode);
            if (line && LINE_STATIONS[line]) {
                LINE_STATIONS[line].stations.push(station);
            }
        }
        // 對每條路線的站點進行排序
        for (const line of Object.values(LINE_STATIONS)) {
            line.stations.sort((a, b) => {
                const getNumber = (code) => parseInt(code.match(/\d+/)?.[0] || '0');
                return getNumber(a.StationCode) - getNumber(b.StationCode);
            });
        }
    }
    catch (error) {
        console.error('Error loading station data:', error);
    }
}
// 初始化載入站點資料
loadStationData();
/**
 * 獲取所有可用路線
 */
export function getAvailableLines() {
    return Object.entries(LINE_STATIONS)
        .filter(([id]) => id !== '')
        .map(([id, line]) => ({
        id: id,
        name: line.name,
        color: line.color
    }));
}
/**
 * 根據路線獲取站點時刻表
 */
export async function fetchStationTimetable(line = '') {
    if (!line) {
        return Object.values(LINE_STATIONS).flatMap(l => l.stations);
    }
    return LINE_STATIONS[line]?.stations || [];
}
/**
 * 獲取指定站點的下一班列車資訊
 */
export function getNextTrains(stationCode) {
    const line = getLineFromStationCode(stationCode);
    const station = LINE_STATIONS[line]?.stations.find(s => s.StationCode === stationCode);
    if (!station)
        return [];
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const trains = [];
    for (const timetable of station.Timetables) {
        for (const schedule of timetable.Schedule) {
            if (!isOperatingTime(schedule))
                continue;
            for (const departure of schedule.Departures) {
                if (departure.Time > currentTime) {
                    trains.push({
                        Dst: departure.Dst,
                        Time: departure.Time,
                        arrivalTime: calculateArrivalTime(departure.Time),
                        destination: departure.Dst
                    });
                }
            }
        }
    }
    return trains
        .sort((a, b) => a.Time.localeCompare(b.Time))
        .slice(0, 3);
}
/**
 * 計算到站時間
 */
function calculateArrivalTime(time) {
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const arrival = new Date();
    arrival.setHours(hours, minutes, 0);
    if (arrival < now) {
        arrival.setDate(arrival.getDate() + 1);
    }
    const diffMinutes = Math.floor((arrival.getTime() - now.getTime()) / 60000);
    if (diffMinutes <= 0)
        return '即將到站';
    if (diffMinutes < 60)
        return `${diffMinutes}分鐘`;
    const hours_diff = Math.floor(diffMinutes / 60);
    const minutes_diff = diffMinutes % 60;
    return `${hours_diff}小時${minutes_diff}分鐘`;
}
/**
 * 檢查是否為營運時間
 */
function isOperatingTime(schedule) {
    const now = new Date();
    const today = now.getDay().toString();
    return schedule.Days.includes(today);
}
//# sourceMappingURL=stationService.js.map