import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Quotes } from '@phosphor-icons/react'

const testimonials = [
  {
    quote: "AeThex reduced our time-to-market by 6 months. Their state sync API just works, and the documentation is stellar.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Pixel Forge Studios",
    logo: "PF"
  },
  {
    quote: "We migrated from our homegrown solution to AeThex and immediately saw a 40% reduction in infrastructure costs. The uptime is incredible.",
    author: "Marcus Rodriguez",
    role: "Lead Engineer",
    company: "Quantum Games",
    logo: "QG"
  },
  {
    quote: "Supporting cross-platform multiplayer used to be a nightmare. AeThex made it trivial. Our players love the seamless experience.",
    author: "Emily Thompson",
    role: "VP of Engineering",
    company: "Nexus Interactive",
    logo: "NI"
  }
]

const customers = [
  { name: 'Pixel Forge', logo: 'PF' },
  { name: 'Quantum Games', logo: 'QG' },
  { name: 'Nexus Interactive', logo: 'NI' },
  { name: 'Storm Studios', logo: 'SS' },
  { name: 'Apex Gaming', logo: 'AG' },
  { name: 'Zenith Dev', logo: 'ZD' }
]

export function SocialProofSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary px-4 py-2">
              Trusted by Studios Worldwide
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Built for developers,
              <br />
              loved by CTOs
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-8 h-full glass border border-white/10 hover:border-primary/30 transition-all duration-300 card-hover">
                <Quotes className="text-primary mb-6" size={36} weight="fill" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">Trusted by game studios around the world</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {customers.map((customer) => (
              <div 
                key={customer.name}
                className="w-24 h-24 rounded-lg bg-card border border-border flex items-center justify-center font-bold text-xl text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                {customer.logo}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <div className="text-muted-foreground">Active Players Daily</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guaranteed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">&lt;100ms</div>
            <div className="text-muted-foreground">Average Latency</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
