import { motion } from 'framer-motion'
import { Users, Rocket, Globe, TrendUp } from '@phosphor-icons/react'

const stats = [
  {
    icon: Rocket,
    value: '247',
    label: 'Projects Built',
    color: 'oklch(0.62 0.24 286)'
  },
  {
    icon: Users,
    value: '1,450+',
    label: 'Active Builders',
    color: 'oklch(0.71 0.14 210)'
  },
  {
    icon: Globe,
    value: '89',
    label: 'Countries',
    color: 'oklch(0.78 0.19 295)'
  },
  {
    icon: TrendUp,
    value: '12M+',
    label: 'API Requests/Day',
    color: 'oklch(0.65 0.20 145)'
  }
]

export function ShowcaseStats() {
  return (
    <section className="py-16 px-6 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-background/50 border border-border">
                    <Icon size={24} weight="fill" style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
