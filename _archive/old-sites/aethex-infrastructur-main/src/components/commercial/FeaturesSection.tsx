import { motion } from 'framer-motion'
import { Lightning, Code, Shield, ChartLine, Globe, ArrowsClockwise } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: ArrowsClockwise,
    title: 'Real-Time State Sync',
    description: 'Synchronize game state across all platforms in real-time with automatic conflict resolution and rollback support.',
    color: 'text-primary'
  },
  {
    icon: Code,
    title: 'Developer-First APIs',
    description: 'Clean, RESTful APIs with comprehensive SDKs for Unity, Unreal, Web, and mobile platforms. Get started in minutes.',
    color: 'text-accent'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and role-based access control to keep your player data secure.',
    color: 'text-gameforge-green'
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Deploy to 15+ regions worldwide with automatic routing to the nearest edge for sub-100ms latency.',
    color: 'text-devlink-cyan'
  },
  {
    icon: ChartLine,
    title: 'Analytics & Monitoring',
    description: 'Real-time dashboards, performance metrics, and alerting to keep your game infrastructure running smoothly.',
    color: 'text-labs-yellow'
  },
  {
    icon: Lightning,
    title: 'Blazing Fast Performance',
    description: 'Built on cutting-edge infrastructure to handle millions of concurrent players with 99.9% uptime SLA.',
    color: 'text-neon-purple'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Everything you need to build
              <br />
              <span className="gradient-text inline-block">
                cross-platform experiences
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Purpose-built infrastructure for game studios and developers who demand reliability, performance, and scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className=\"group\"
              >
                <Card className=\"p-8 h-full glass border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 card-hover\">
                  <div className=\"w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300\">\n                    <Icon className={feature.color} size={28} weight=\"duotone\" />
                  </div>
                  <h3 className=\"text-xl font-bold mb-3 text-foreground\">{feature.title}</h3>
                  <p className=\"text-muted-foreground/80 leading-relaxed\">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
