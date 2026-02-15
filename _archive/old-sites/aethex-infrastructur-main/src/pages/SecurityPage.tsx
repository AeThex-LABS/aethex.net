import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { ShieldCheck, Lock, Eye, Lightning } from '@phosphor-icons/react'

export function SecurityPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">Security at AeThex</h1>
          <p className="text-xl text-muted-foreground mb-12">
            We take security seriously. Here's how we protect your data.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <ShieldCheck size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOC 2 Certified</h3>
              <p className="text-muted-foreground">
                We maintain SOC 2 Type II certification to ensure the highest security standards.
              </p>
            </Card>
            <Card className="p-6">
              <Lock size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Encryption</h3>
              <p className="text-muted-foreground">
                All data is encrypted in transit and at rest using industry-standard protocols.
              </p>
            </Card>
            <Card className="p-6">
              <Eye size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regular Audits</h3>
              <p className="text-muted-foreground">
                We conduct regular security audits and penetration testing.
              </p>
            </Card>
            <Card className="p-6">
              <Lightning size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                24/7 monitoring and instant alerts for any suspicious activity.
              </p>
            </Card>
          </div>
          <Card className="p-8 mt-8">
            <h3 className="text-xl font-semibold mb-4">Report a Vulnerability</h3>
            <p className="text-muted-foreground">
              Found a security issue? Please report it to: <a href="mailto:security@aethex.net" className="text-primary">security@aethex.net</a>
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
