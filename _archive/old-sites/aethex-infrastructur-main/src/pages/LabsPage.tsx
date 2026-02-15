import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Lightbulb, 
  CheckCircle,
  ArrowRight,
  Flask,
  Rocket,
  Lightning,
  Brain,
  ChartLine,
  Code,
  Users,
  Cube
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function LabsPage() {
  const armColor = 'oklch(0.80 0.15 85)'

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div 
          className="absolute top-0 left-0 w-full h-[600px] opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${armColor}40, transparent 50%)`
          }}
        />
        
        <div className="relative z-10">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowRight className="rotate-180" size={16} />
              Back to Overview
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: `${armColor}33`,
                    borderColor: `${armColor}4d`
                  }}
                >
                  <Lightbulb size={48} weight="fill" style={{ color: armColor }} />
                </div>
                <div>
                  <Badge 
                    className="mb-3"
                    style={{
                      backgroundColor: `${armColor}33`,
                      borderColor: `${armColor}4d`,
                      color: armColor
                    }}
                  >
                    Innovation Arm
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold">AeThex Labs</h1>
                  <p className="text-2xl mt-2" style={{ color: armColor }}>Innovation Through Experimentation</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                AeThex Labs is our innovation incubator where cutting-edge ideas are transformed into production-ready tools and technologies. We push boundaries, experiment with emerging tech, and rapidly prototype solutions that define the future of development.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What We're Building</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card">
                <Flask size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid Prototyping</h3>
                <p className="text-muted-foreground">
                  Turn concepts into working prototypes in days, not months. Our streamlined process accelerates innovation cycles with pre-built components, automated testing, and instant deployment pipelines.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Brain size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Research & Development</h3>
                <p className="text-muted-foreground">
                  Dedicated R&D teams exploring AI/ML, blockchain, WebAssembly, edge computing, and next-gen frameworks. We invest in tomorrow's technology today.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Code size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Experimental APIs</h3>
                <p className="text-muted-foreground">
                  Early access to experimental features and APIs before they reach production. Shape the future of our platform with direct feedback channels to our engineering teams.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Rocket size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation Grants</h3>
                <p className="text-muted-foreground">
                  Funding and resources for promising projects from our community. We invest in bold ideas that push the boundaries of what's possible.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Current Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-card/50 border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Lightning size={24} style={{ color: armColor }} weight="fill" />
                  <h4 className="font-bold">AI-Powered Development</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  LLM-assisted code generation, intelligent debugging, and automated testing frameworks that understand context.
                </p>
                <Badge variant="outline" style={{ backgroundColor: `${armColor}1a`, borderColor: `${armColor}4d` }}>
                  Active Research
                </Badge>
              </Card>

              <Card className="p-6 bg-card/50 border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Cube size={24} style={{ color: armColor }} weight="fill" />
                  <h4 className="font-bold">Edge Computing</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Pushing computation to the edge for sub-millisecond latency and reduced bandwidth requirements.
                </p>
                <Badge variant="outline" style={{ backgroundColor: `${armColor}1a`, borderColor: `${armColor}4d` }}>
                  Beta Phase
                </Badge>
              </Card>

              <Card className="p-6 bg-card/50 border-border">
                <div className="flex items-start gap-3 mb-3">
                  <ChartLine size={24} style={{ color: armColor }} weight="fill" />
                  <h4 className="font-bold">Quantum-Ready APIs</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Future-proofing infrastructure for quantum computing integration and post-quantum cryptography.
                </p>
                <Badge variant="outline" style={{ backgroundColor: `${armColor}1a`, borderColor: `${armColor}4d` }}>
                  Experimental
                </Badge>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <div className="space-y-3">
                  {[
                    'Beta Feature Access',
                    'Weekly Tech Talks',
                    'Experimental SDKs',
                    'Research Collaboration',
                    'Innovation Workshops',
                    'Early Adopter Program',
                    'Direct Engineering Access',
                    'Quarterly Innovation Summits'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle weight="fill" style={{ color: armColor }} size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Real-World Use Cases</h2>
                <div className="space-y-4">
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Test bleeding-edge AI models before they hit production to stay ahead of the competition
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Prototype cross-platform features with experimental SDKs and get feedback from our research team
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Access quantum computing research projects and prepare your infrastructure for the quantum era
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Collaborate on WebGPU graphics experiments and push the boundaries of browser-based rendering
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Card 
              className="p-12 text-center border-border"
              style={{
                background: `linear-gradient(135deg, ${armColor}1a, var(--color-card))`
              }}
            >
              <Users size={48} style={{ color: armColor }} weight="fill" className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Join the Innovation Community</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of shaping the future of development. Get early access to experimental features, collaborate with our research team, and help define tomorrow's tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  style={{
                    backgroundColor: armColor,
                    color: 'var(--color-background)'
                  }}
                  className="font-semibold"
                >
                  Apply for Labs Access
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  View Research Papers
                </Button>
              </div>
            </Card>
          </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
