import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'

export function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 hover-lift cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">Blog Post {i}</h3>
                <p className="text-muted-foreground mb-4">
                  Coming soon - Stay tuned for insights, tutorials, and updates from the AeThex team.
                </p>
                <span className="text-sm text-primary">Read more →</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
