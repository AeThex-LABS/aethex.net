import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ComprehensiveDocs } from '@/components/ComprehensiveDocs'
import { motion } from 'framer-motion'

export function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">API Documentation</h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl leading-relaxed">
              Complete reference for the AeThex API. Learn how to integrate cross-platform 
              gaming infrastructure into your applications.
            </p>
          </motion.div>

          <ComprehensiveDocs />
        </div>
      </main>

      <Footer />
    </div>
  )
}
