import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Lightning } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function CommercialHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-primary/30 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Lightning className="text-primary" weight="fill" size={20} />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cross-Platform Gaming Infrastructure</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Enterprise API for
            <br />
            <span className="gradient-text inline-block">
              Real-Time Game Sync
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Build cross-platform games faster with our battle-tested state synchronization APIs. 
            Trusted by studios managing millions of players.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary via-neon-purple to-accent hover:opacity-90 shadow-2xl shadow-primary/30 font-semibold">
                Start Free Trial
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 glass border-2 border-white/10 hover:border-primary/50 font-semibold" asChild>
                <Link to="/docs">View Documentation</Link>
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium text-muted-foreground">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium text-muted-foreground">Sub-100ms Latency</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium text-muted-foreground">SOC 2 Certified</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="bg-card border border-border rounded-lg p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">Quick Start Example</span>
              </div>
              <pre className="text-left text-sm overflow-x-auto">
                <code className="text-accent font-mono">
{`// Initialize AeThex SDK
const aethex = new AeThex({
  apiKey: 'your-api-key',
  projectId: 'your-project-id'
});

// Sync player state across platforms
await aethex.sync.setState('player-123', {
  position: { x: 100, y: 50 },
  health: 100,
  inventory: ['sword', 'shield']
});

// Listen for updates from other platforms
aethex.sync.onUpdate('player-123', (state) => {
  console.log('State updated:', state);
});`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
