import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function CareersPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">Careers at AeThex</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Join our team and help build the future of gaming infrastructure.
          </p>
          <div className="grid gap-6">
            {['Senior Backend Engineer', 'Frontend Developer', 'DevOps Engineer'].map((role, i) => (
              <Card key={i} className="p-6 hover-lift cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{role}</h3>
                  <Badge>Remote</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  We're looking for talented individuals to join our growing team.
                </p>
                <span className="text-sm text-primary">Apply now →</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
