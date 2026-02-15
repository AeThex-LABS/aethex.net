export function getLocalTimeForCoordinates(lng: number): Date {
  const utcTime = new Date()
  const utcHours = utcTime.getUTCHours()
  const utcMinutes = utcTime.getUTCMinutes()
  const utcSeconds = utcTime.getUTCSeconds()
  
  const offsetHours = lng / 15
  
  let localHours = utcHours + offsetHours
  
  if (localHours >= 24) {
    localHours -= 24
  } else if (localHours < 0) {
    localHours += 24
  }
  
  const localTime = new Date()
  localTime.setUTCHours(Math.floor(localHours))
  localTime.setUTCMinutes(utcMinutes + (localHours % 1) * 60)
  localTime.setUTCSeconds(utcSeconds)
  
  return localTime
}

export function getTimezoneOffset(lng: number): string {
  const offsetHours = lng / 15
  const hours = Math.floor(Math.abs(offsetHours))
  const minutes = Math.round((Math.abs(offsetHours) % 1) * 60)
  
  const sign = offsetHours >= 0 ? '+' : '-'
  const hoursStr = hours.toString().padStart(2, '0')
  const minutesStr = minutes.toString().padStart(2, '0')
  
  return `UTC${sign}${hoursStr}:${minutesStr}`
}

export function formatLocalTime(date: Date): string {
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')
  const seconds = date.getUTCSeconds().toString().padStart(2, '0')
  
  return `${hours}:${minutes}:${seconds}`
}

export function getTimeOfDay(date: Date): 'morning' | 'afternoon' | 'evening' | 'night' {
  const hours = date.getUTCHours()
  
  if (hours >= 6 && hours < 12) return 'morning'
  if (hours >= 12 && hours < 17) return 'afternoon'
  if (hours >= 17 && hours < 21) return 'evening'
  return 'night'
}

export function getTimeOfDayIcon(timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night'): string {
  switch (timeOfDay) {
    case 'morning': return '🌅'
    case 'afternoon': return '☀️'
    case 'evening': return '🌆'
    case 'night': return '🌙'
  }
}
