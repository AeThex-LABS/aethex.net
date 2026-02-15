import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Rocket, Upload, GitBranch } from '@phosphor-icons/react'

export function ShowcaseCallToAction() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-5xl mx-auto">
        <Card className="p-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Rocket size={32} weight="fill" className="text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-purple to-accent">
              Share Your Creation
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Built something amazing with AeThex? Submit your project to our showcase and inspire the community. Get visibility, feedback, and connect with other builders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 glow-primary"
              >
                <Upload size={20} weight="fill" className="mr-2" />
                Submit Project
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                <GitBranch size={20} className="mr-2" />
                View Guidelines
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-accent">01</span>
                  Build with AeThex
                </h4>
                <p className="text-sm text-muted-foreground">
                  Use any of our arms to create your project
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-accent">02</span>
                  Document Your Work
                </h4>
                <p className="text-sm text-muted-foreground">
                  Add screenshots, demos, and descriptions
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-accent">03</span>
                  Share & Inspire
                </h4>
                <p className="text-sm text-muted-foreground">
                  Join our community showcase and get featured
                </p>
              </div>
            </div>
          </motion.div>
        </Card>
      </div>
    </section>
  )
}
