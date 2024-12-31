import type { MetroLine, Station, LineInfo, LineStation, TrainInfo } from '@/types/metro'

// 路線資料配置
const LINE_STATIONS: Record<MetroLine, LineStation> = {
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
}

/**
 * 解析站點代碼和路線的對應關係
 */
export function getLineFromStationCode(code: string): MetroLine {
    if (code.startsWith('R')) {
        return 'red'      // 淡水信義線
    } else if (code.startsWith('BL')) {
        return 'blue'     // 板南線
    } else if (code.startsWith('G')) {
        return 'green'    // 松山新店線
    } else if (code.startsWith('O')) {
        return 'orange'   // 中和新蘆線
    }
    return ''
}

/**
 * 載入站點資料
 */
async function loadStationData() {
    try {
        const stationModules = import.meta.glob<{ default: Station }>('../api-data/Stations/*.json', { eager: true });
        
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
                const getNumber = (code: string) => parseInt(code.match(/\d+/)?.[0] || '0');
                return getNumber(a.StationCode) - getNumber(b.StationCode);
            });
        }
    } catch (error) {
        console.error('Error loading station data:', error);
    }
}

// 初始化載入站點資料
loadStationData();

/**
 * 獲取所有可用路線
 */
export function getAvailableLines(): LineInfo[] {
    return Object.entries(LINE_STATIONS)
        .filter(([id]) => id !== '')
        .map(([id, line]) => ({
            id: id as MetroLine,
            name: line.name,
            color: line.color
        }));
}

/**
 * 根據路線獲取站點時刻表
 */
export async function fetchStationTimetable(line: MetroLine): Promise<Station[]> {
    const lineInfo = LINE_STATIONS[line]
    if (!lineInfo) return []
    
    return lineInfo.stations.map(station => ({
        ...station,
        LineColor: lineInfo.color,
        LineName: lineInfo.name
    }))
}

/**
 * 獲取指定站點的下一班列車資訊
 */
export function getNextTrains(stationCode: string): TrainInfo[] {
    const line = getLineFromStationCode(stationCode);
    const station = LINE_STATIONS[line]?.stations.find(s => s.StationCode === stationCode);
    
    if (!station?.Timetables) return [];

    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const trains: TrainInfo[] = [];

    for (const timetable of station.Timetables) {
        // 獲取當前時段的時刻表
        const validSchedules = timetable.Schedule.filter(schedule => isOperatingTime(schedule));
        
        for (const schedule of validSchedules) {
            const departures = schedule.Departures.filter(dep => dep.Time > currentTime);
            for (const departure of departures) {
                trains.push({
                    Dst: departure.Dst,
                    Time: departure.Time,
                    arrivalTime: calculateArrivalTime(departure.Time),
                    destination: departure.Dst
                });
            }
        }
    }

    // 排序並只返回最近的 3 班車
    return trains
        .sort((a, b) => a.Time.localeCompare(b.Time))
        .slice(0, 3);
}

/**
 * 計算到站時間
 */
function calculateArrivalTime(time: string): string {
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const arrival = new Date(now);  // 創建新的日期對象
    arrival.setHours(hours, minutes, 0);

    // 如果時間已過，假設是明天的班次
    if (arrival < now) {
        arrival.setDate(arrival.getDate() + 1);
    }

    const diffMinutes = Math.floor((arrival.getTime() - now.getTime()) / 60000);
    
    if (diffMinutes <= 1) return '即將到站';
    if (diffMinutes < 60) return `${diffMinutes}分鐘`;
    
    const hours_diff = Math.floor(diffMinutes / 60);
    const minutes_diff = diffMinutes % 60;
    return minutes_diff > 0 
        ? `${hours_diff}小時${minutes_diff}分鐘`
        : `${hours_diff}小時`;
}

/**
 * 檢查是否為營運時間
 */
function isOperatingTime(schedule: Station['Timetables'][0]['Schedule'][0]): boolean {
    const now = new Date();
    const dayNum = now.getDay();
    // 將週日的 0 轉換為 "7"，其他日期保持不變
    const today = dayNum === 0 ? "7" : dayNum.toString();
    return schedule.Days.includes(today);
} 

// 根據站點代碼獲取路線顏色
export function getLineColorByStation(stationCode: string): string {
    // 從所有路線中找到包含該站點的路線
    for (const [_, lineInfo] of Object.entries(LINE_STATIONS)) {
        if (lineInfo.stations.some(s => s.StationCode === stationCode)) {
            return lineInfo.color
        }
    }
    return '#000000'
}

// 獲取所有站點
export async function getAllStations(): Promise<Station[]> {
    // 從所有路線中獲取所有站點，並保留路線資訊
    const allStations = Object.entries(LINE_STATIONS).flatMap(([_, lineInfo]) => 
        lineInfo.stations.map(station => ({
            ...station,
            LineColor: lineInfo.color,
            LineName: lineInfo.name
        }))
    )
    
    // 按站點名稱和代碼排序
    return allStations.sort((a, b) => {
        const nameCompare = a.StationName.localeCompare(b.StationName)
        if (nameCompare !== 0) return nameCompare
        return a.StationCode.localeCompare(b.StationCode)
    })
}
