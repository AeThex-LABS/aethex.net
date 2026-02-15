import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  GameController, 
  CheckCircle,
  ArrowRight,
  DeviceMobile,
  Desktop,
  Globe,
  Lightning,
  ChartLine,
  Users,
  Trophy,
  Cloud
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function GameForgePage() {
  const armColor = 'oklch(0.65 0.20 145)'

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div 
          className="absolute top-0 left-0 w-full h-[600px] opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${armColor}40, transparent 50%)`
          }}
        />
        
        <div className="relative z-10">
          <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowRight className="rotate-180" size={16} />
              Back to Overview
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: `${armColor}33`,
                    borderColor: `${armColor}4d`
                  }}
                >
                  <GameController size={48} weight="fill" style={{ color: armColor }} />
                </div>
                <div>
                  <Badge 
                    className="mb-3"
                    style={{
                      backgroundColor: `${armColor}33`,
                      borderColor: `${armColor}4d`,
                      color: armColor
                    }}
                  >
                    Gaming Infrastructure
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold">GameForge</h1>
                  <p className="text-2xl mt-2" style={{ color: armColor }}>Build Games That Play Everywhere</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                GameForge provides a complete suite of tools and infrastructure for game developers building cross-platform experiences. From indie developers to AAA studios, we handle the complex infrastructure so you can focus on creating incredible gameplay.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card">
                <Lightning size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Cross-Platform Sync</h3>
                <p className="text-muted-foreground">
                  Real-time game state synchronization across Web, Mobile, Console, and PC with sub-20ms latency. Players can seamlessly switch between devices without losing progress.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Users size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Matchmaking Engine</h3>
                <p className="text-muted-foreground">
                  Intelligent matchmaking system with skill-based ranking, region awareness, and anti-cheat integration. Create fair, competitive experiences at any scale.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Cloud size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Cloud Save System</h3>
                <p className="text-muted-foreground">
                  Automatic save synchronization across devices with conflict resolution and version history. Never lose player progress again.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <ChartLine size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Real-time player metrics, retention analysis, monetization insights, and performance monitoring. Make data-driven decisions.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Deploy Across All Platforms</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center bg-card/50 border-border">
                <Globe size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-1">Web</h4>
                <p className="text-xs text-muted-foreground">WebGL, WebGPU</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <DeviceMobile size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-1">Mobile</h4>
                <p className="text-xs text-muted-foreground">iOS, Android</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <GameController size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-1">Console</h4>
                <p className="text-xs text-muted-foreground">PlayStation, Xbox, Switch</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <Desktop size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-1">Desktop</h4>
                <p className="text-xs text-muted-foreground">Windows, macOS, Linux</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <div className="space-y-3">
                  {[
                    'Unity & Unreal Plugins',
                    'Multiplayer Infrastructure',
                    'Player Authentication',
                    'Leaderboard System',
                    'Achievement Framework',
                    'In-Game Economy Tools',
                    'Voice Chat Integration',
                    'Anti-Cheat Protection'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle weight="fill" style={{ color: armColor }} size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Real-World Use Cases</h2>
                <div className="space-y-4">
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Launch cross-platform multiplayer with one codebase and reach players on every major platform
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Sync player progress seamlessly between mobile and console versions of your game
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Run live ops events without client updates using server-side configuration
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Scale from 100 to 1M players without infrastructure changes or downtime
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Card 
              className="p-12 text-center border-border"
              style={{
                background: `linear-gradient(135deg, ${armColor}1a, var(--color-card))`
              }}
            >
              <Trophy size={48} style={{ color: armColor }} weight="fill" className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Start Building Your Game</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of developers using GameForge to build cross-platform multiplayer experiences. Get started with our free tier and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  style={{
                    backgroundColor: armColor,
                    color: 'var(--color-background)'
                  }}
                  className="font-semibold"
                >
                  Get Started Free
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  View Documentation
                </Button>
              </div>
            </Card>
          </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
