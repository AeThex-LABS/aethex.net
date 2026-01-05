import React, { useState } from 'react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: string;
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
    icon: '🚀'
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
    icon: '⭐'
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
    icon: '🏢'
  },
];

const Pricing: React.FC = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <section style={{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      padding: '6rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }} id="pricing">
      {/* Grid Background */}
      <div className="grid-background-animated" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.2
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-primary)',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'var(--color-gameforge-green)'
          }}>
            💎 Transparent Pricing
          </div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, var(--text-primary), var(--color-gameforge-green))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Scale with Predictable Costs
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            No hidden fees. Cancel anytime.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="card hover-lift glow-border"
              onMouseEnter={() => setHoveredTier(tier.name)}
              onMouseLeave={() => setHoveredTier(null)}
              style={{
                padding: '2rem',
                border: tier.popular
                  ? '2px solid var(--color-gameforge-green)'
                  : '1px solid var(--border-primary)',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {tier.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-gameforge-green)',
                  color: '#000',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)'
                }}>
                  MOST POPULAR
                </div>
              )}
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {tier.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: hoveredTier === tier.name ? 'var(--color-gameforge-green)' : 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  transition: 'color 0.3s ease'
                }}>
                  {tier.name}
                </h3>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: 'var(--text-primary)'
                  }}>
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span style={{
                      color: 'var(--text-secondary)',
                      marginLeft: '0.5rem'
                    }}>
                      /month
                    </span>
                  )}
                </div>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }}>
                  {tier.description}
                </p>
              </div>
              
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2rem',
                listStyle: 'none',
                padding: 0
              }}>
                {tier.features.map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span style={{
                      color: tier.popular ? 'var(--color-gameforge-green)' : 'var(--accent-primary)',
                      marginRight: '0.75rem',
                      fontSize: '1.25rem',
                      lineHeight: '1'
                    }}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={tier.popular ? 'btn-primary' : 'btn-secondary'}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '1rem',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)'
        }}>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            All plans include: Cross-platform APIs • Unified player identity • Real-time sync • Analytics dashboard
          </p>
          <a 
            href="#" 
            style={{
              color: 'var(--accent-primary)',
              fontWeight: '600',
              fontSize: '0.875rem',
              textDecoration: 'none'
            }}
          >
            Compare all features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
