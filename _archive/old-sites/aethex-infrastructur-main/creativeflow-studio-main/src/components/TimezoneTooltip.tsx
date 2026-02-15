import { useEffect, useState } from 'react'
import { Developer, DIVISION_COLORS, DIVISION_NAMES } from '@/lib/types'
import { getLocalTimeForCoordinates, getTimezoneOffset, formatLocalTime, getTimeOfDay } from '@/lib/timezone'
import { Clock } from '@phosphor-icons/react'

interface TimezoneTooltipProps {
  developer: Developer
  position: { x: number; y: number }
}

export function TimezoneTooltip({ developer, position }: TimezoneTooltipProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const localTime = getLocalTimeForCoordinates(developer.coordinates.lng)
  const timezoneOffset = getTimezoneOffset(developer.coordinates.lng)
  const timeOfDay = getTimeOfDay(localTime)
  const divisionColor = DIVISION_COLORS[developer.division]

  return (
    <div
      className="absolute pointer-events-none z-40"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -120%)',
      }}
    >
      <div className="bg-background border-2 border-foreground px-4 py-3 shadow-lg min-w-[200px] animate-in fade-in-0 zoom-in-95 duration-200">
        <div className="flex items-center gap-2 mb-2">
          <div 
            className="w-2 h-2 border-2"
            style={{ borderColor: divisionColor }}
          />
          <div className="text-xs font-bold font-mono uppercase tracking-wider" style={{ color: divisionColor }}>
            {DIVISION_NAMES[developer.division]}
          </div>
        </div>
        
        <div className="text-base font-bold font-mono text-foreground mb-1">
          {developer.name}
        </div>
        
        <div className="text-xs text-muted-foreground font-mono mb-2">
          {developer.location}
        </div>
        
        <div className="h-px bg-border my-2" />
        
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-muted-foreground" weight="bold" />
          <div className="flex items-center gap-2">
            <div className="text-sm font-bold font-mono text-foreground">
              {formatLocalTime(localTime)}
            </div>
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              {timezoneOffset}
            </div>
          </div>
        </div>
        
        <div className="text-[10px] text-muted-foreground font-mono mt-1 capitalize tracking-wider">
          {timeOfDay}
        </div>
      </div>
    </div>
  )
}
