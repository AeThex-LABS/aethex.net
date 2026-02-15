import { useEffect, useState } from 'react'
import { Clock } from '@phosphor-icons/react'
import { formatLocalTime } from '@/lib/timezone'

interface TimezoneLegendProps {
  developers: any[]
}

interface TimezoneCity {
  name: string
  lng: number
  timezone: string
}

const MAJOR_TIMEZONES: TimezoneCity[] = [
  { name: 'San Francisco', lng: -122.4194, timezone: 'PST/PDT' },
  { name: 'New York', lng: -74.0060, timezone: 'EST/EDT' },
  { name: 'London', lng: -0.1278, timezone: 'GMT/BST' },
  { name: 'Berlin', lng: 13.4050, timezone: 'CET/CEST' },
  { name: 'Dubai', lng: 55.2708, timezone: 'GST' },
  { name: 'Singapore', lng: 103.8198, timezone: 'SGT' },
  { name: 'Tokyo', lng: 139.6917, timezone: 'JST' },
  { name: 'Sydney', lng: 151.2093, timezone: 'AEDT/AEST' },
]

export function TimezoneLegend({ developers }: TimezoneLegendProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getLocalTimeForLng = (lng: number): Date => {
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

  return (
    <div className="bg-background border-2 border-foreground p-4">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-foreground" weight="bold" />
        <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
          Global Time Zones
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {MAJOR_TIMEZONES.map((city) => {
          const localTime = getLocalTimeForLng(city.lng)
          const hours = localTime.getUTCHours()
          const isNight = hours < 6 || hours >= 21
          const isMorning = hours >= 6 && hours < 12
          const isAfternoon = hours >= 12 && hours < 17
          
          return (
            <div key={city.name} className="space-y-1">
              <div className="flex items-center gap-1.5">
                <div 
                  className={`w-1.5 h-1.5 rounded-full ${
                    isNight ? 'bg-[#3B82F6]' : 
                    isMorning ? 'bg-[#FBBF24]' : 
                    isAfternoon ? 'bg-[#EF4444]' : 
                    'bg-[#A855F7]'
                  }`}
                />
                <div className="text-xs font-bold font-mono text-foreground">
                  {city.name}
                </div>
              </div>
              <div className="text-base font-bold font-mono text-foreground tracking-tight pl-2.5">
                {formatLocalTime(localTime)}
              </div>
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider pl-2.5">
                {city.timezone}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
