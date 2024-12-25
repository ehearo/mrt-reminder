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
//# sourceMappingURL=metro.js.map