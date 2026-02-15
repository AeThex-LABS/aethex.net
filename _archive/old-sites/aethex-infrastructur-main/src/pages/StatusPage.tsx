import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Warning, XCircle, Clock } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const services = [
  { name: 'API Gateway', status: 'operational', uptime: '99.99%', latency: '45ms' },
  { name: 'State Synchronization', status: 'operational', uptime: '99.98%', latency: '52ms' },
  { name: 'Authentication Service', status: 'operational', uptime: '100%', latency: '38ms' },
  { name: 'Player Management', status: 'operational', uptime: '99.97%', latency: '41ms' },
  { name: 'Analytics Engine', status: 'operational', uptime: '99.95%', latency: '67ms' },
  { name: 'Webhook Delivery', status: 'operational', uptime: '99.96%', latency: '89ms' }
]

const regions = [
  { name: 'US East (Virginia)', status: 'operational', latency: '42ms' },
  { name: 'US West (Oregon)', status: 'operational', latency: '48ms' },
  { name: 'EU West (Ireland)', status: 'operational', latency: '39ms' },
  { name: 'EU Central (Frankfurt)', status: 'operational', latency: '41ms' },
  { name: 'Asia Pacific (Tokyo)', status: 'operational', latency: '51ms' },
  { name: 'Asia Pacific (Singapore)', status: 'operational', latency: '46ms' }
]

const incidents = [
  {
    date: 'Dec 15, 2024',
    title: 'Scheduled Maintenance - Database Upgrade',
    status: 'resolved',
    duration: '2 hours',
    description: 'Completed scheduled maintenance for database infrastructure upgrades.'
  },
  {
    date: 'Nov 28, 2024',
    title: 'Elevated API Latency',
    status: 'resolved',
    duration: '45 minutes',
    description: 'Brief period of elevated latency in US East region due to network congestion. Resolved by rerouting traffic.'
  },
  {
    date: 'Nov 10, 2024',
    title: 'Authentication Service Degradation',
    status: 'resolved',
    duration: '1 hour 20 minutes',
    description: 'Intermittent authentication failures resolved by scaling authentication service.'
  }
]

const StatusBadge = ({ status }: { status: string }) => {
  if (status === 'operational') {
    return (
      <Badge className="bg-gameforge-green/20 text-gameforge-green border-gameforge-green/30">
        <CheckCircle weight="fill" className="mr-1" size={14} />
        Operational
      </Badge>
    )
  }
  if (status === 'degraded') {
    return (
      <Badge className="bg-labs-yellow/20 text-labs-yellow border-labs-yellow/30">
        <Warning weight="fill" className="mr-1" size={14} />
        Degraded
      </Badge>
    )
  }
  if (status === 'outage') {
    return (
      <Badge className="bg-foundation-red/20 text-foundation-red border-foundation-red/30">
        <XCircle weight="fill" className="mr-1" size={14} />
        Outage
      </Badge>
    )
  }
  return (
    <Badge variant="outline">
      <Clock weight="fill" className="mr-1" size={14} />
      {status}
    </Badge>
  )
}

export function StatusPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">System Status</h1>
              <p className="text-xl text-muted-foreground">
                Real-time status and uptime information for AeThex services
              </p>
            </div>

            <div className="mb-12">
              <Card className="p-8 border-gameforge-green/30 bg-gameforge-green/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gameforge-green animate-pulse" />
                  <div>
                    <div className="text-2xl font-bold mb-1">All Systems Operational</div>
                    <div className="text-muted-foreground">All services are running smoothly</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Core Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <StatusBadge status={service.status} />
                          <div>
                            <div className="font-semibold">{service.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {service.uptime} uptime · {service.latency} avg latency
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Regional Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">{region.name}</div>
                        <StatusBadge status={region.status} />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Latency: {region.latency}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Incident History</h2>
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold mb-1">{incident.title}</div>
                          <div className="text-sm text-muted-foreground mb-2">
                            {incident.date} · Duration: {incident.duration}
                          </div>
                        </div>
                        <StatusBadge status={incident.status} />
                      </div>
                      <p className="text-sm text-muted-foreground">{incident.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
