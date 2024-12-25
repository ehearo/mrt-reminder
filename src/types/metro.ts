// 定義路線類型
export type MetroLine = 'red' | 'blue' | 'green' | 'orange' | ''

// 定義站點資訊
export interface Station {
    StationCode: string;    // 站點代碼，如 BL01, G01
    StationName: string;    // 站點名稱
    Timetables: {
        Direction: string;   // 行駛方向
        EffectiveFrom: string; // 時刻表生效日期
        Schedule: {
            Days: string;    // 營運日，如 "1,2,3,4,5"
            Departures: {
                Dst: string; // 終點站
                Time: string;// 發車時間，如 "06:00"
            }[];
        }[];
    }[];
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
    Dst: string;      // 終點站
    Time: string;     // 發車時間
    arrivalTime: string; // 到站時間（計算後的人性化顯示）
    destination: string; // 目的地
} 