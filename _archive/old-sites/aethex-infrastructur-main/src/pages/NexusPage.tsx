import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Cube, 
  CheckCircle,
  ArrowRight,
  Lightning,
  Globe,
  Database,
  CloudArrowUp,
  ChartLine,
  Gear
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function NexusPage() {
  const armColor = 'oklch(0.68 0.22 295)'

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
                  <Cube size={48} weight="fill" style={{ color: armColor }} />
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
                    Core Infrastructure
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold">Nexus</h1>
                  <p className="text-2xl mt-2" style={{ color: armColor }}>The Core Infrastructure</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                Nexus is the central nervous system of AeThex - our core infrastructure platform that powers everything. It handles data synchronization, real-time communication, edge computing, and distributed systems at massive scale.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card">
                <Globe size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Edge Network</h3>
                <p className="text-muted-foreground">
                  200+ edge locations worldwide ensuring sub-20ms latency anywhere on the planet. Your users are always close to the action.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Database size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-Time Sync Engine</h3>
                <p className="text-muted-foreground">
                  Conflict-free replicated data types (CRDTs) for seamless multi-device synchronization. No conflicts, ever.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <ChartLine size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Auto-Scaling</h3>
                <p className="text-muted-foreground">
                  Intelligent scaling that automatically adapts to traffic patterns. Pay only for what you use, scale to infinity.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Gear size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Developer API</h3>
                <p className="text-muted-foreground">
                  Powerful GraphQL and REST APIs with comprehensive documentation and client libraries for every platform.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Infrastructure Components</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center bg-card/50 border-border">
                <Lightning size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-2">Edge Compute</h4>
                <p className="text-sm text-muted-foreground">
                  Run code at the edge for lightning-fast response times with automatic geo-distribution
                </p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <Database size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-2">Distributed Storage</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-region storage with automatic replication and intelligent caching
                </p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <CloudArrowUp size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-2">Message Queue</h4>
                <p className="text-sm text-muted-foreground">
                  High-throughput message streaming with guaranteed delivery and ordering
                </p>
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
                    'Real-Time Database',
                    'WebSocket Infrastructure',
                    'CDN & Asset Delivery',
                    'Serverless Functions',
                    'Event Streaming',
                    'Message Queues',
                    'GraphQL API',
                    'Global Load Balancing'
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
                      Build collaborative editors with real-time sync and conflict-free merging
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Deploy globally distributed APIs with automatic failover and geo-routing
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Stream millions of events per second with low latency and high reliability
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Create serverless backends without managing infrastructure or worrying about scale
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center bg-card/50 border-border">
                <div className="text-4xl font-bold mb-2" style={{ color: armColor }}>
                  &lt;20ms
                </div>
                <p className="text-sm text-muted-foreground">Global Latency</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <div className="text-4xl font-bold mb-2" style={{ color: armColor }}>
                  99.99%
                </div>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <div className="text-4xl font-bold mb-2" style={{ color: armColor }}>
                  200+
                </div>
                <p className="text-sm text-muted-foreground">Edge Locations</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <div className="text-4xl font-bold mb-2" style={{ color: armColor }}>
                  10M+
                </div>
                <p className="text-sm text-muted-foreground">Requests/Second</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <Card 
              className="p-12 text-center border-border"
              style={{
                background: `linear-gradient(135deg, ${armColor}1a, var(--color-card))`
              }}
            >
              <Cube size={48} style={{ color: armColor }} weight="fill" className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Build on Nexus</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start building on the most powerful developer infrastructure. Deploy globally in minutes, scale automatically, and focus on what matters - your product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  style={{
                    backgroundColor: armColor,
                    color: 'white'
                  }}
                  className="font-semibold"
                >
                  Get API Access
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  View API Docs
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
