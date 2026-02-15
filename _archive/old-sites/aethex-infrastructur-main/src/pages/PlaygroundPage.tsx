import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ApiPlayground } from '@/components/ApiPlayground'
import { motion } from 'framer-motion'

export function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ApiPlayground />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
