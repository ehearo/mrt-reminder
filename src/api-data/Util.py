def ConvertToMinute(time_str):
    """將時間字串轉換為分鐘數"""
    hours, minutes = map(int, time_str.split(':'))
    return hours * 60 + minutes 