import { useState, useEffect } from 'react'
import { X, MapPin, Briefcase, EnvelopeSimple, Clock } from '@phosphor-icons/react'
import { Developer, DIVISION_COLORS, DIVISION_NAMES } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { getLocalTimeForCoordinates, getTimezoneOffset, formatLocalTime, getTimeOfDay } from '@/lib/timezone'

interface DeveloperPanelProps {
  developer: Developer | null
  onClose: () => void
}

export function DeveloperPanel({ developer, onClose }: DeveloperPanelProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!developer) return null

  const divisionColor = DIVISION_COLORS[developer.division]
  const localTime = getLocalTimeForCoordinates(developer.coordinates.lng)
  const timezoneOffset = getTimezoneOffset(developer.coordinates.lng)
  const timeOfDay = getTimeOfDay(localTime)

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-[480px] z-50 animate-in slide-in-from-right duration-300">
      <Card className="h-full rounded-none border-l-2 border-foreground bg-background flex flex-col">
        <div className="p-6 border-b-2 border-foreground flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-3 h-3 border-2"
              style={{ borderColor: divisionColor }}
            />
            <h2 className="text-lg font-semibold tracking-tight font-mono uppercase">Developer Profile</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-muted border-2 border-transparent hover:border-foreground rounded-none">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div 
                className="w-20 h-20 border-2 flex items-center justify-center text-3xl font-bold font-mono"
                style={{ borderColor: divisionColor, color: divisionColor }}
              >
                {developer.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold tracking-tight font-mono mb-1">{developer.name}</h3>
                <p className="text-muted-foreground font-mono text-sm">{developer.role}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Briefcase className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <Badge 
                  variant="outline" 
                  className="rounded-none border-2 font-mono uppercase tracking-wider"
                  style={{ 
                    borderColor: divisionColor, 
                    color: divisionColor,
                    backgroundColor: 'transparent'
                  }}
                >
                  {DIVISION_NAMES[developer.division]}
                </Badge>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-foreground font-mono">{developer.location}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1 tracking-wider">
                    {developer.coordinates.lat.toFixed(4)}°, {developer.coordinates.lng.toFixed(4)}°
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" weight="bold" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-bold font-mono text-foreground tracking-tight">
                      {formatLocalTime(localTime)}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="rounded-none border border-border font-mono text-[10px] px-1.5 py-0.5"
                    >
                      {timezoneOffset}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono mt-1 tracking-wider capitalize">
                    Local Time • {timeOfDay}
                  </div>
                </div>
              </div>

              {developer.email && (
                <div className="flex items-center gap-3 text-sm">
                  <EnvelopeSimple className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <a 
                    href={`mailto:${developer.email}`}
                    className="text-foreground hover:underline font-mono"
                  >
                    {developer.email}
                  </a>
                </div>
              )}
            </div>

            <Separator className="bg-border h-0.5" />

            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-widest text-muted-foreground font-mono">
                About
              </h4>
              <p className="text-foreground leading-relaxed">{developer.bio}</p>
            </div>

            <Separator className="bg-border h-0.5" />

            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-widest text-muted-foreground font-mono">
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {developer.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="rounded-none border border-border font-mono">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="bg-border h-0.5" />

            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-widest text-muted-foreground font-mono">
                Current Projects
              </h4>
              <ul className="space-y-2">
                {developer.projects.map((project, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div 
                      className="w-2 h-2 border-2 mt-1.5 flex-shrink-0"
                      style={{ borderColor: divisionColor }}
                    />
                    <span className="text-foreground font-mono text-sm">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  )
}
