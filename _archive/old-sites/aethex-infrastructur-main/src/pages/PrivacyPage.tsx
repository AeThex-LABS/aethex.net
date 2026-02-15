import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'

export function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <Card className="p-8 prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">Last updated: January 6, 2026</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Collection</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, including when you create an account,
              use our services, or communicate with us.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Usage</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to provide, maintain, and improve our services,
              and to protect AeThex and our users.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your data.
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
