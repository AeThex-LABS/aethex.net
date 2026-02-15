import { Header } from '@/components/Header'
import { CommercialHero } from '@/components/commercial/CommercialHero'
import { FeaturesSection } from '@/components/commercial/FeaturesSection'
import { PricingSection } from '@/components/commercial/PricingSection'
import { SocialProofSection } from '@/components/commercial/SocialProofSection'
import { CTASection } from '@/components/commercial/CTASection'
import { Footer } from '@/components/Footer'

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <CommercialHero />
      <FeaturesSection />
      <SocialProofSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  )
}
