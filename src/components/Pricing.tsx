import React from 'react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For prototypes and early-stage development',
    features: [
      '100K API requests/month',
      '10K active players',
      'Cross-platform state sync',
      'Community support',
      '99.9% uptime SLA',
      'Rate limit: 100 req/min',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$299',
    description: 'For production games and studios',
    features: [
      '5M API requests/month',
      '100K active players',
      'Real-time WebSocket events',
      'Priority support (24h response)',
      '99.95% uptime SLA',
      'Rate limit: 1000 req/min',
      'Custom data retention',
      'Multiple environments',
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large studios with custom requirements',
    features: [
      'Unlimited API requests',
      'Unlimited active players',
      'Dedicated infrastructure',
      '24/7 phone & Slack support',
      '99.99% uptime SLA',
      'Custom rate limits',
      'Multi-region deployment',
      'SLA guarantees',
      'Dedicated account manager',
      'Custom contract terms',
    ],
    cta: 'Contact Sales',
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Scale with predictable costs. No hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-lg border ${
                tier.popular
                  ? 'border-gray-900 ring-2 ring-gray-900'
                  : 'border-gray-200'
              } p-8 relative`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded text-xs font-medium font-mono">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-gray-600 ml-2">/month</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                  tier.popular
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm mb-4">
            All plans include: Cross-platform APIs • Unified player identity • Real-time sync • Analytics dashboard
          </p>
          <a href="#" className="text-gray-900 font-medium hover:underline text-sm">
            Compare all features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
