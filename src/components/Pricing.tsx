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
    description: 'Perfect for side projects and experimentation',
    features: [
      '100K API requests/month',
      '5GB bandwidth',
      'Community support',
      'Basic analytics',
      '99.9% uptime SLA',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For production applications and growing teams',
    features: [
      '1M API requests/month',
      '50GB bandwidth',
      'Priority support',
      'Advanced analytics',
      '99.95% uptime SLA',
      'Custom domains',
      'Team collaboration',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced requirements',
    features: [
      'Unlimited API requests',
      'Dedicated infrastructure',
      '24/7 phone support',
      'Custom analytics',
      '99.99% uptime SLA',
      'SSO & SAML',
      'SLA guarantees',
      'Dedicated account manager',
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
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-lg shadow-sm border ${
                tier.popular
                  ? 'border-gray-900 ring-2 ring-gray-900'
                  : 'border-gray-200'
              } p-8 relative`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
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
                <p className="text-gray-600">{tier.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
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
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
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
      </div>
    </section>
  );
};

export default Pricing;
