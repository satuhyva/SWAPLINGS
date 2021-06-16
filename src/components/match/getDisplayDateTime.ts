export const getDisplayDateTime = (dateTime: string): string => {
    const date = new Date(parseInt(dateTime))
    const [month, day, year, hours, minutes] = [
        date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(),
    ]
    const today = new Date()
    const [todayMonth, todayDay, todayYear] = [today.getMonth(), today.getDate(), today.getFullYear()]
    const isToday = month === todayMonth && day === todayDay && year === todayYear
    const time = `${hours}.${minutes < 10 ? '0' + minutes : minutes}`
    if (isToday) return `Today ${time}`
    else return `${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]} ${day}.${month}.${year} ${hours}.${minutes} ${time}`
}

