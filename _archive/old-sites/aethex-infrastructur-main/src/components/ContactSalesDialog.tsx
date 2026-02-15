import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { EnvelopeSimple, UserCircle, Buildings, ChatCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface ContactSalesProps {
  trigger?: React.ReactNode
}

export function ContactSalesDialog({ trigger }: ContactSalesProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    message: '',
    interest: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200))

    toast.success('Message sent successfully!', {
      description: 'Our sales team will contact you within 24 hours.'
    })

    setIsLoading(false)
    setOpen(false)

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      companySize: '',
      message: '',
      interest: ''
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Contact Sales</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contact Sales</DialogTitle>
          <DialogDescription>
            Interested in Enterprise? Fill out the form and our team will reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <div className="relative">
                <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Work Email *</Label>
              <div className="relative">
                <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <div className="relative">
              <Buildings className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="company"
                type="text"
                placeholder="Acme Gaming Studios"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size *</Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => handleChange('companySize', value)}
                required
              >
                <SelectTrigger id="companySize">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501-1000">501-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest">I'm interested in *</Label>
              <Select
                value={formData.interest}
                onValueChange={(value) => handleChange('interest', value)}
                required
              >
                <SelectTrigger id="interest">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enterprise-plan">Enterprise Plan</SelectItem>
                  <SelectItem value="custom-solution">Custom Solution</SelectItem>
                  <SelectItem value="api-demo">API Demo</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <div className="relative">
              <ChatCircle className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <Textarea
                id="message"
                placeholder="Tell us about your project and requirements..."
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="pl-10 min-h-[120px]"
                required
              />
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-sm">What happens next?</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Our sales team will review your request</li>
              <li>• We'll schedule a demo tailored to your needs</li>
              <li>• Get a custom quote based on your requirements</li>
              <li>• 30-day trial with full enterprise features</li>
            </ul>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <EnvelopeSimple className="mr-2" size={16} />
              </motion.div>
            ) : (
              <>
                <EnvelopeSimple className="mr-2" size={16} />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting this form, you agree to our{' '}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
