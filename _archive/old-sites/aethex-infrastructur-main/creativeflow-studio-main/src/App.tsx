import { useState, useMemo, useEffect } from 'react'
import { Globe, MagnifyingGlass, Funnel, Sun, Moon, UserGear } from '@phosphor-icons/react'
import { Developer, Division, DIVISION_COLORS, DIVISION_NAMES } from '@/lib/types'
import { EarthGlobe } from '@/components/EarthGlobe'
import { DeveloperPanel } from '@/components/DeveloperPanel'
import { AdminPanel } from '@/components/AdminPanel'
import { TimezoneLegend } from '@/components/TimezoneLegend'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useDevelopers } from '@/hooks/use-developers'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const { developers, loading, error } = useDevelopers()
  const [selectedDeveloperId, setSelectedDeveloperId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDivisions, setActiveDivisions] = useState<Division[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  
  const devs = developers

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const selectedDeveloper = useMemo(
    () => devs.find(dev => dev.id === selectedDeveloperId) || null,
    [devs, selectedDeveloperId]
  )

  const filteredDevelopers = useMemo(() => {
    let result = devs

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(dev =>
        dev.name.toLowerCase().includes(query) ||
        dev.role.toLowerCase().includes(query) ||
        dev.division.toLowerCase().includes(query) ||
        dev.location.toLowerCase().includes(query) ||
        dev.skills.some(skill => skill.toLowerCase().includes(query))
      )
    }

    return result
  }, [devs, searchQuery])

  const handleDivisionToggle = (division: Division) => {
    setActiveDivisions(prev => 
      prev.includes(division)
        ? prev.filter(d => d !== division)
        : [...prev, division]
    )
  }

  const handleClearFilters = () => {
    setActiveDivisions([])
    setSearchQuery('')
  }

  const stats = useMemo(() => {
    const uniqueCountries = new Set(devs.map(d => d.location.split(',').pop()?.trim()))
    const divisionCounts = devs.reduce((acc, dev) => {
      acc[dev.division] = (acc[dev.division] || 0) + 1
      return acc
    }, {} as Record<Division, number>)

    const hours = currentTime.getUTCHours()
    const minutes = currentTime.getUTCMinutes()
    const sunLongitude = ((hours + minutes / 60) / 24) * 360 - 180
    const terminatorLongitude = sunLongitude + 90

    return {
      total: devs.length,
      countries: uniqueCountries.size,
      divisions: Object.keys(divisionCounts).length,
      divisionCounts,
      sunLongitude,
      terminatorLongitude
    }
  }, [devs, currentTime])

  if (showAdminPanel) {
    return <AdminPanel onClose={() => setShowAdminPanel(false)} />
  }

  return (
    <>
      <Toaster />
      <div className="relative w-screen h-screen overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground z-30" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground z-30" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground z-30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground z-30" />
      
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 49%, rgba(0, 0, 0, .03) 50%, rgba(0, 0, 0, .03) 51%, transparent 52%, transparent),
              linear-gradient(90deg, transparent 49%, rgba(0, 0, 0, .03) 50%, rgba(0, 0, 0, .03) 51%, transparent 52%, transparent)
            `,
            backgroundSize: '10px 10px'
          }}
        />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-foreground bg-background rounded-sm flex items-center justify-center">
              <Globe className="w-7 h-7 text-foreground" weight="regular" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-mono">
                AeThex <span className="relative">Global
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground" />
                </span>
              </h1>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">Developer Directory</p>
            </div>
          </div>
          <Button
            onClick={() => setShowAdminPanel(true)}
            variant="outline"
            size="icon"
            className="border-2 border-foreground bg-background hover:bg-foreground hover:text-background rounded-none transition-colors"
            title="Admin Panel"
          >
            <UserGear className="w-5 h-5" weight="regular" />
          </Button>
        </div>
      </div>

      <div className="absolute top-6 right-6 z-20">
        <div className="bg-background border-2 border-foreground p-4">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold font-mono text-foreground">{stats.total}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Developers</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold font-mono text-foreground">{stats.divisions}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Divisions</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold font-mono text-foreground">{stats.countries}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Countries</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-background border-2 border-foreground p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sun className="w-4 h-4 text-foreground" weight="fill" />
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Solar Time</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono">UTC</div>
              <div className="text-lg font-bold font-mono text-foreground">
                {currentTime.getUTCHours().toString().padStart(2, '0')}:
                {currentTime.getUTCMinutes().toString().padStart(2, '0')}:
                {currentTime.getUTCSeconds().toString().padStart(2, '0')}
              </div>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono flex items-center gap-1">
                <Moon className="w-3 h-3" weight="fill" />
                Line
              </div>
              <div className="text-sm font-bold font-mono text-foreground">
                {stats.terminatorLongitude.toFixed(1)}° E
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between gap-4">
        <div className="flex-1 max-w-md space-y-4">
          <div className="bg-background border-2 border-foreground p-4 space-y-4">
            <div className="relative">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search developers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-2 border-border font-mono rounded-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-mono">
                <Funnel className="w-4 h-4" />
                <span>Filter by Division</span>
                {activeDivisions.length > 0 && (
                  <button
                    onClick={handleClearFilters}
                    className="ml-auto text-foreground hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(DIVISION_COLORS) as Division[]).map(division => {
                  const isActive = activeDivisions.includes(division)
                  const count = stats.divisionCounts[division] || 0
                  return (
                    <Button
                      key={division}
                      variant="outline"
                      size="sm"
                      onClick={() => handleDivisionToggle(division)}
                      className={`transition-all border-2 rounded-none font-mono ${
                        isActive ? 'bg-foreground text-background' : 'bg-background text-foreground'
                      }`}
                      style={isActive ? {} : {
                        borderColor: DIVISION_COLORS[division]
                      }}
                    >
                      {DIVISION_NAMES[division]}
                      <Badge variant="secondary" className="ml-2 rounded-none border border-border font-mono">
                        {count}
                      </Badge>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          <TimezoneLegend developers={devs} />
        </div>

        {devs.length === 0 && !loading && (
          <div className="bg-background border-2 border-foreground p-4">
            <p className="text-sm text-muted-foreground font-mono">
              {error ? `Error: ${error}` : 'No developers found. Add some to see them on the globe!'}
            </p>
          </div>
        )}

        {loading && (
          <div className="bg-background border-2 border-foreground p-4">
            <p className="text-sm text-muted-foreground font-mono">
              Loading developers...
            </p>
          </div>
        )}
      </div>

      <div className="absolute inset-0 z-10">
        <EarthGlobe
          developers={filteredDevelopers}
          selectedDeveloperId={selectedDeveloperId}
          onDeveloperClick={setSelectedDeveloperId}
          filteredDivisions={activeDivisions}
        />
      </div>

      {selectedDeveloper && (
        <DeveloperPanel
          developer={selectedDeveloper}
          onClose={() => setSelectedDeveloperId(null)}
        />
      )}
    </div>
    </>
  )
}

export default App
