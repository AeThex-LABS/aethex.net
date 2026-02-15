import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'

export function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <Card className="p-8 prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">Last updated: January 6, 2026</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using AeThex services, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
            <p className="text-muted-foreground mb-4">
              You must follow any policies made available to you within the Services.
              You may use our Services only as permitted by law.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Account Responsibilities</h2>
            <p className="text-muted-foreground">
              You are responsible for safeguarding your account and for all activities
              that occur under your account.
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
