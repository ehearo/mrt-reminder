// 定義路線類型
export type MetroLine = 'red' | 'blue' | 'green' | 'orange' | ''

// 定義時刻表
export interface Timetable {
    Direction: string
    Schedule: Schedule[]
}

// 定義班次時刻
export interface Schedule {
    Days: string[]
    Departures: Departure[]
}

// 定義發車時間
export interface Departure {
    Time: string
    Dst: string
}

// 定義站點資訊
export interface Station {
    StationCode: string;    // 站點代碼，如 BL01, G01
    StationName: string;    // 站點名稱
    Timetables: Timetable[];  // 時刻表
    LineColor?: string;     // 路線顏色
    LineName?: string;      // 路線名稱
}

// 定義路線資訊（對外）
export interface LineInfo {
    id: MetroLine;     // 路線 ID
    name: string;      // 路線名稱
    color: string;     // 路線顏色
}

// 定義路線站點資訊（內部使用）
export interface LineStation {
    name: string;      // 路線名稱
    color: string;     // 路線顏色
    stations: Station[]; // 站點列表
}

// 定義列車資訊
export interface TrainInfo {
    Dst: string;       // 終點站
    Time: string;      // 發車時間
    arrivalTime: string; // 到站時間（計算後的人性化顯示）
    destination: string; // 目的地
} 