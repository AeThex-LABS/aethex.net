import { motion } from 'framer-motion'
import { CheckCircle, Lightning, Users, Shield } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for prototyping and small projects',
    features: [
      '1,000 API calls/month',
      'Up to 100 concurrent users',
      'Community support',
      'Basic state synchronization',
      '99.5% uptime SLA',
      'Standard documentation access'
    ],
    cta: 'Start Free',
    popular: false,
    color: 'muted'
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'For growing studios and production games',
    features: [
      '1,000,000 API calls/month',
      'Unlimited concurrent users',
      'Priority email support',
      'Advanced state sync & rollback',
      '99.9% uptime SLA',
      'Real-time analytics dashboard',
      'Multi-region deployment',
      'Custom webhooks'
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
    color: 'primary'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large studios with custom requirements',
    features: [
      'Unlimited API calls',
      'Unlimited concurrent users',
      '24/7 dedicated support',
      'Custom SLA & contracts',
      'Private cloud deployment',
      'Advanced security features',
      'Dedicated account manager',
      'Custom integrations',
      'Volume discounts available'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'accent'
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary px-4 py-2">
              <Lightning weight="fill" className="mr-2" size={18} />
              Simple, Transparent Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Scale as you grow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you need more. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`relative p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-primary/50 shadow-lg shadow-primary/10' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle weight="fill" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include access to our core APIs and documentation
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield weight="fill" className="text-primary" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Users weight="fill" className="text-primary" />
              <span>24/7 Global Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightning weight="fill" className="text-primary" />
              <span>Sub-100ms Latency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
