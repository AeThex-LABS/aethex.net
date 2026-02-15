import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useKV } from '@github/spark/hooks'
import { PlatformNode } from './PlatformNode'
import { SyncParticle } from './SyncParticle'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Play, Pause, ArrowsClockwise } from '@phosphor-icons/react'
import { INITIAL_PLATFORMS } from '@/lib/constants'
import type { Platform, GameState, SyncPacket } from '@/lib/types'

export function StateVisualizer() {
  const [platforms, setPlatforms] = useState<Platform[]>(INITIAL_PLATFORMS)
  const [gameState, setGameState] = useKV<GameState>('visualizer-state', {
    playerPosition: { x: 100, y: 200 },
    score: 0,
    inventory: ['sword', 'shield'],
    lastUpdate: Date.now()
  })
  const [isPlaying, setIsPlaying] = useState(true)
  const [syncPackets, setSyncPackets] = useState<SyncPacket[]>([])
  const [activeSyncs, setActiveSyncs] = useState<Set<string>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 })
  
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }
    
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setGameState((current) => {
        if (!current) return {
          playerPosition: { x: 100, y: 200 },
          score: 0,
          inventory: ['sword', 'shield'],
          lastUpdate: Date.now()
        }
        
        return {
          ...current,
          score: current.score + Math.floor(Math.random() * 10),
          playerPosition: {
            x: current.playerPosition.x + (Math.random() - 0.5) * 20,
            y: current.playerPosition.y + (Math.random() - 0.5) * 20
          },
          lastUpdate: Date.now()
        }
      })
    }, 2000)
    
    return () => clearInterval(interval)
  }, [isPlaying, setGameState])
  
  useEffect(() => {
    const activePlatforms = platforms.filter(p => p.active)
    if (activePlatforms.length < 2) return
    
    const from = activePlatforms[Math.floor(Math.random() * activePlatforms.length)]
    const remaining = activePlatforms.filter(p => p.id !== from.id)
    const to = remaining[Math.floor(Math.random() * remaining.length)]
    
    const packet: SyncPacket = {
      id: `${Date.now()}-${Math.random()}`,
      from: from.id,
      to: to.id,
      data: { ...gameState },
      timestamp: Date.now(),
      progress: 0
    }
    
    setSyncPackets(prev => [...prev, packet])
    setActiveSyncs(prev => new Set([...prev, from.id, to.id]))
    
    setTimeout(() => {
      setActiveSyncs(prev => {
        const next = new Set(prev)
        next.delete(from.id)
        next.delete(to.id)
        return next
      })
    }, 800)
  }, [gameState, platforms])
  
  const handlePacketComplete = (id: string) => {
    setSyncPackets(prev => prev.filter(p => p.id !== id))
  }
  
  const togglePlatform = (platformId: string) => {
    setPlatforms(prev =>
      prev.map(p => p.id === platformId ? { ...p, active: !p.active } : p)
    )
  }
  
  const resetState = () => {
    setGameState({
      playerPosition: { x: 100, y: 200 },
      score: 0,
      inventory: ['sword', 'shield'],
      lastUpdate: Date.now()
    })
  }
  
  return (
    <section id="visualizer" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Live State Synchronization
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Watch game state propagate in real-time across multiple platforms with sub-20ms latency
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8 glass border border-white/10">
              <div
                ref={containerRef}
                className="relative w-full bg-background/50 rounded-xl overflow-hidden border border-white/5"
                style={{ height: '600px' }}
              >
                {platforms.map(platform => (
                  <PlatformNode
                    key={platform.id}
                    platform={platform}
                    isActive={platform.active}
                    isSyncing={activeSyncs.has(platform.id)}
                    containerSize={containerSize}
                    onClick={() => togglePlatform(platform.id)}
                  />
                ))}
                
                {syncPackets.map(packet => (
                  <SyncParticle
                    key={packet.id}
                    packet={packet}
                    platforms={platforms}
                    containerSize={containerSize}
                    onComplete={handlePacketComplete}
                  />
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="gap-2 font-semibold"
                    variant={isPlaying ? 'secondary' : 'default'}
                    size="lg"
                  >
                    {isPlaying ? <Pause weight="fill" /> : <Play weight="fill" />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={resetState} variant="outline" className="gap-2 font-semibold" size="lg">
                    <ArrowsClockwise weight="bold" />
                    Reset
                  </Button>
                </motion.div>
                
                <div className="ml-auto px-4 py-2 rounded-lg glass text-sm font-medium">
                  {platforms.filter(p => p.active).length} / {platforms.length} platforms active
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 lg:p-8 glass border border-white/10">
              <h3 className="text-xl font-bold mb-6">Game State</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Score: {gameState?.score ?? 0}
                  </label>
                  <Slider
                    value={[gameState?.score ?? 0]}
                    onValueChange={([score]) =>
                      setGameState((current) => {
                        if (!current) return {
                          playerPosition: { x: 100, y: 200 },
                          score,
                          inventory: ['sword', 'shield'],
                          lastUpdate: Date.now()
                        }
                        return { ...current, score, lastUpdate: Date.now() }
                      })
                    }
                    max={10000}
                    step={10}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Position X: {Math.round(gameState?.playerPosition?.x ?? 100)}
                  </label>
                  <Slider
                    value={[gameState?.playerPosition?.x ?? 100]}
                    onValueChange={([x]) =>
                      setGameState((current) => {
                        if (!current) return {
                          playerPosition: { x, y: 200 },
                          score: 0,
                          inventory: ['sword', 'shield'],
                          lastUpdate: Date.now()
                        }
                        return {
                          ...current,
                          playerPosition: { ...current.playerPosition, x },
                          lastUpdate: Date.now()
                        }
                      })
                    }
                    max={500}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Position Y: {Math.round(gameState?.playerPosition?.y ?? 200)}
                  </label>
                  <Slider
                    value={[gameState?.playerPosition?.y ?? 200]}
                    onValueChange={([y]) =>
                      setGameState((current) => {
                        if (!current) return {
                          playerPosition: { x: 100, y },
                          score: 0,
                          inventory: ['sword', 'shield'],
                          lastUpdate: Date.now()
                        }
                        return {
                          ...current,
                          playerPosition: { ...current.playerPosition, y },
                          lastUpdate: Date.now()
                        }
                      })
                    }
                    max={500}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Inventory</label>
                  <div className="flex flex-wrap gap-2">
                    {(gameState?.inventory ?? []).map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <h3 className="text-lg font-semibold mb-4">Sync Metrics</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Latency</span>
                  <span className="text-sm font-semibold text-accent">12ms</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Packets/sec</span>
                  <span className="text-sm font-semibold text-neon-blue">
                    {syncPackets.length * 2}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Throughput</span>
                  <span className="text-sm font-semibold text-neon-purple">2.4 MB/s</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Uptime</span>
                  <span className="text-sm font-semibold text-gameforge-green">99.99%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
