import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ShieldCheck, 
  CheckCircle,
  ArrowRight,
  IdentificationCard,
  Fingerprint,
  Key,
  Lock,
  UserCircle
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function FoundationPage() {
  const armColor = 'oklch(0.62 0.24 25)'

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
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
              <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={18} weight="bold" />
              Back to Overview
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-start gap-6 mb-8">
                <div 
                  className="p-8 rounded-2xl border-2 glass"
                  style={{
                    backgroundColor: `${armColor}33`,
                    borderColor: `${armColor}4d`
                  }}
                >
                  <ShieldCheck size={56} weight="fill" style={{ color: armColor }} />
                </div>
                <div>
                  <Badge 
                    className="mb-4 px-4 py-1.5 text-sm font-semibold"
                    style={{
                      backgroundColor: `${armColor}33`,
                      borderColor: `${armColor}4d`,
                      color: armColor
                    }}
                  >
                    Identity Platform
                  </Badge>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">Foundation</h1>
                  <p className="text-2xl md:text-3xl font-semibold" style={{ color: armColor }}>Identity & Digital Passports</p>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed max-w-4xl">
                AeThex Foundation manages digital identity, authentication, and verifiable credentials across the AeThex ecosystem. We provide secure, portable identity solutions that work seamlessly across all platforms and services.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <Card className="p-8 glass border border-white/10 card-hover">
                <UserCircle size={40} style={{ color: armColor }} weight="fill" className="mb-6" />
                <h3 className="text-xl font-bold mb-3">Universal Identity</h3>
                <p className="text-muted-foreground/90 leading-relaxed">
                  Single sign-on across all AeThex services and partner platforms. One identity, infinite possibilities.
                </p>
              </Card>

              <Card className="p-8 glass border border-white/10 card-hover">
                <IdentificationCard size={40} style={{ color: armColor }} weight="fill" className="mb-6" />
                <h3 className="text-xl font-bold mb-3">Digital Passports</h3>
                <p className="text-muted-foreground/90 leading-relaxed">
                  Verifiable credentials for creators and developers. Showcase your work, skills, and achievements across the web.
                </p>
              </Card>

              <Card className="p-8 glass border border-white/10 card-hover">
                <Lock size={40} style={{ color: armColor }} weight="fill" className="mb-6" />
                <h3 className="text-xl font-bold mb-2">Decentralized Auth</h3>
                <p className="text-muted-foreground">
                  Self-sovereign identity with blockchain verification. You own your data, always.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Key size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Privacy Controls</h3>
                <p className="text-muted-foreground">
                  Granular privacy settings with selective disclosure. Share only what you choose to share.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Passport Types</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-8 bg-card/50 border-border">
                <Badge className="mb-4" style={{ backgroundColor: `${armColor}33`, borderColor: `${armColor}4d`, color: armColor }}>
                  *.aethex.me
                </Badge>
                <h4 className="text-2xl font-bold mb-3">Creator Passports</h4>
                <p className="text-muted-foreground mb-4">
                  Your personal digital identity showcasing your portfolio, achievements, and verified credentials. Share your work with the world.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle weight="fill" style={{ color: armColor }} size={16} />
                    <span>Custom domain (yourname.aethex.me)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle weight="fill" style={{ color: armColor }} size={16} />
                    <span>Verified credentials & badges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle weight="fill" style={{ color: armColor }} size={16} />
                    <span>Portfolio showcase</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card/50 border-border">
                <Badge className="mb-4" style={{ backgroundColor: `${armColor}33`, borderColor: `${armColor}4d`, color: armColor }}>
                  *.aethex.space
                </Badge>
                <h4 className="text-2xl font-bold mb-3">Project Passports</h4>
                <p className="text-muted-foreground mb-4">
                  Dedicated identity for your projects with team management, analytics, and deployment tracking. Professional project presence.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle weight="fill" style={{ color: armColor }} size={16} />
                    <span>Project domain (project.aethex.space)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle weight="fill" style={{ color: armColor }} size={16} />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle weight="fill" style={{ color: armColor }} size={16} />
                    <span>Analytics & insights</span>
                  </li>
                </ul>
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
                    'Creator Passports (*.aethex.me)',
                    'Project Passports (*.aethex.space)',
                    'OAuth Integration',
                    'WebAuthn Support',
                    'Biometric Auth',
                    'Multi-Factor Auth',
                    'SSO Integration',
                    'API Access'
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
                      Verify creator credentials across platforms with blockchain-backed proof of work
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Authenticate users without passwords using WebAuthn and biometric authentication
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Build reputation systems with verifiable achievements and skill endorsements
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Create portable profiles that work everywhere with OAuth and SSO integration
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
              <Fingerprint size={48} style={{ color: armColor }} weight="fill" className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Claim Your Digital Identity</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create your creator passport and project identities. Own your digital presence across the AeThex ecosystem and beyond.
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
                  Create Your Passport
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  Learn About Identity
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
