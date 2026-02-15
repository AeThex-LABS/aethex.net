import { motion } from 'framer-motion'
import { Sparkle, Trophy } from '@phosphor-icons/react'

export function ShowcaseHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Trophy size={28} weight="fill" className="text-accent" />
          <span className="gradient-text font-bold uppercase tracking-wider text-sm">
            Customer Success Stories
          </span>
          <Trophy size={28} weight="fill" className="text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight gradient-text"
        >
          Trusted by Game Studios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          See how leading game studios and developers are building cross-platform experiences with AeThex's infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <div className="flex items-center gap-2.5 px-5 py-3 glass rounded-xl border border-white/10">
            <Sparkle size={22} weight="fill" className="text-primary" />
            <span className="text-sm font-semibold">Join These Industry Leaders</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
