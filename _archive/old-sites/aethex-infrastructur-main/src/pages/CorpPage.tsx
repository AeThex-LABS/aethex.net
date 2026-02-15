import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Briefcase, 
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ChartBar,
  Headset,
  Lock,
  Building
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function CorpPage() {
  const armColor = 'oklch(0.60 0.20 250)'

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
                  <Briefcase size={48} weight="fill" style={{ color: armColor }} />
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
                    Enterprise Solutions
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold">AeThex Corp</h1>
                  <p className="text-2xl mt-2" style={{ color: armColor }}>Enterprise-Grade Solutions</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                AeThex Corp delivers enterprise solutions for organizations requiring scalable, secure, and compliant infrastructure. We provide white-label options, custom integrations, and dedicated support for businesses building mission-critical applications.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Enterprise Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card">
                <Building size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">White-Label Platform</h3>
                <p className="text-muted-foreground">
                  Fully customizable infrastructure with your branding. Complete control over user experience and deployment with dedicated instances.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <ShieldCheck size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">SLA Guarantees</h3>
                <p className="text-muted-foreground">
                  99.99% uptime guarantee with dedicated support teams, priority bug fixes, and 24/7 monitoring.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Lock size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Compliance & Security</h3>
                <p className="text-muted-foreground">
                  SOC 2, GDPR, HIPAA, and ISO 27001 compliant infrastructure with end-to-end encryption and audit trails.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <ChartBar size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Custom Integrations</h3>
                <p className="text-muted-foreground">
                  Seamless integration with existing enterprise systems including SAP, Salesforce, and custom APIs.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <div className="space-y-3">
                  {[
                    'Dedicated Infrastructure',
                    'Priority Support (24/7)',
                    'Custom Contract Terms',
                    'Private Cloud Options',
                    'Advanced Analytics',
                    'Training & Onboarding',
                    'Compliance Consulting',
                    'Dedicated Account Manager'
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
                      Deploy secure multi-tenant applications for Fortune 500 clients with complete data isolation
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Build compliant healthcare platforms with HIPAA requirements and audit trails
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Scale financial services apps with comprehensive audit trails and regulatory compliance
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Create white-labeled platforms for agency clients with custom branding and deployment
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <Card 
              className="p-12 text-center border-border"
              style={{
                background: `linear-gradient(135deg, ${armColor}1a, var(--color-card))`
              }}
            >
              <Headset size={48} style={{ color: armColor }} weight="fill" className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Talk to Our Enterprise Team</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your enterprise needs and create a custom solution that meets your requirements. Our team is ready to help you scale securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  style={{
                    backgroundColor: armColor,
                    color: 'white'
                  }}
                  className="font-semibold"
                >
                  Schedule a Demo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  Download Security Whitepaper
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
