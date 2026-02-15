import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function PressPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">Press Kit</h1>
          <Card className="p-8 mb-6">
            <h3 className="text-xl font-semibold mb-4">Brand Assets</h3>
            <p className="text-muted-foreground mb-6">
              Download our logos, brand guidelines, and press materials.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Download Logos</Button>
              <Button variant="outline">Brand Guidelines</Button>
              <Button variant="outline">Product Screenshots</Button>
              <Button variant="outline">Media Kit (ZIP)</Button>
            </div>
          </Card>
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Contact Press</h3>
            <p className="text-muted-foreground">
              For press inquiries, please contact: <a href="mailto:press@aethex.net" className="text-primary">press@aethex.net</a>
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
