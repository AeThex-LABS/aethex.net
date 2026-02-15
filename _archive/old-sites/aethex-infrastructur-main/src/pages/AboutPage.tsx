import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'

export function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">About AeThex</h1>
          <Card className="p-10 glass border border-white/10">
            <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
              AeThex is revolutionizing game development with our cutting-edge API infrastructure.
            </p>
            <p className="text-lg text-muted-foreground/90 leading-relaxed">
              Founded with the mission to simplify real-time game state synchronization,
              we provide developers with enterprise-grade tools to build the next generation
              of cross-platform gaming experiences.
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
