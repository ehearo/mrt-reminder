export const calculateCountdown = (arrivalTime: string): string => {
    const now = new Date();
    const [arrivalHours, arrivalMinutes] = arrivalTime.split(':').map(Number);
    const arrival = new Date();
    arrival.setHours(arrivalHours, arrivalMinutes, 0);

    // 如果時間已過，考慮是否為隔天的班次
    if (arrival < now) {
        arrival.setDate(arrival.getDate() + 1);
    }

    const diffMs = arrival.getTime() - now.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins <= 0) return '即將到站';
    if (diffMins < 60) return `${diffMins}分鐘`;
    
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return mins > 0 ? `${hours}小時${mins}分鐘` : `${hours}小時`;
} 