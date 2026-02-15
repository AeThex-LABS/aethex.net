import { motion } from 'framer-motion'
import { Lightning, Cube, ChartLine } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-primary/30 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Lightning className="text-primary" weight="fill" size={20} />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cross-Platform Infrastructure
            </span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Build the Future with{' '}
            <span className="gradient-text inline-block">
              AeThex
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Real-time game state synchronization across Web, Mobile, Console, and PC platforms.
            <br className="hidden sm:block" />
            <span className="text-foreground font-medium">See it in action below.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-4 bg-gradient-to-r from-primary via-neon-purple to-accent hover:opacity-90 text-white rounded-xl font-semibold text-lg shadow-2xl shadow-primary/30 transition-all w-full sm:w-auto"
              onClick={() => {
                document.getElementById('visualizer')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="flex items-center justify-center gap-2">
                View Live Demo
                <Lightning size={20} weight="fill" />
              </span>
            </motion.button>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/showcase"
                className="block px-8 py-4 glass border-2 border-white/10 hover:border-primary/50 text-foreground rounded-xl font-semibold text-lg transition-all"
              >
                Community Showcase
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <motion.div 
            className="p-8 rounded-2xl glass border border-white/10 card-hover group"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Lightning className="text-accent" size={28} weight="fill" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Sub-20ms Latency</h3>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Lightning-fast state synchronization optimized for real-time gameplay
            </p>
          </motion.div>
          
          <motion.div 
            className="p-8 rounded-2xl glass border border-white/10 card-hover group"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-blue/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Cube className="text-neon-blue" size={28} weight="fill" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Cross-Platform</h3>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Seamless synchronization across Web, Mobile, Console, and PC
            </p>
          </motion.div>
          
          <motion.div 
            className="p-8 rounded-2xl glass border border-white/10 card-hover group"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-purple/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ChartLine className="text-neon-purple" size={28} weight="fill" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Scalable Infrastructure</h3>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Built to handle millions of concurrent connections
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
