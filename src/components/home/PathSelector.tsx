import React from 'react';
import { GameController, PaintBrush, Lightning } from '@phosphor-icons/react';
import { Button, Card, Section } from '../ui';

const PathSelector: React.FC = () => {
  const paths = [
    {
      title: 'Play',
      description: 'Discover experiences across the AeThex ecosystem',
      icon: GameController,
      features: [
        'One account, all games',
        'Persistent progress',
        'Cross-platform achievements',
        'Universal inventory'
      ],
      cta: 'Browse Games',
      color: 'var(--accent-blue)',
      link: '/games'
    },
    {
      title: 'Create',
      description: 'Build experiences and join the creator community',
      icon: PaintBrush,
      features: [
        'No-code creator tools',
        'Asset marketplace',
        'Community showcases',
        'Creator monetization'
      ],
      cta: 'Start Creating',
      color: 'var(--accent-purple)',
      link: 'https://aethex.studio',
      external: true
    },
    {
      title: 'Build',
      description: 'Integrate AeThex infrastructure into your game',
      icon: Lightning,
      features: [
        'Cross-platform APIs',
        'Unified player identity',
        'Real-time state sync',
        'Enterprise infrastructure'
      ],
      cta: 'View Developer Docs',
      color: 'var(--accent-teal)',
      link: 'https://aethex.cloud',
      external: true
    },
  ];

  return (
    <Section variant="primary">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 70%)'
        }} />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16 animate-fade-in"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ 
            color: 'var(--text-primary)'
          }}>
            Choose Your Path
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Whether you're here to play, create, or build — we've got you covered
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-8"
        >
          {paths.map((path, index) => (
            <div
              key={path.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card
                variant="glass"
                className="h-full relative group overflow-hidden"
                hover={true}
              >
                {/* Accent color bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                  style={{ 
                    background: `linear-gradient(90deg, ${path.color}, ${path.color}80)`,
                    boxShadow: `0 0 20px ${path.color}40`
                  }}
                />
                
                <div className="relative flex flex-col h-full pt-6">
                  <div className="mb-4">
                    <path.icon size={48} weight="duotone" style={{ color: path.color }} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {path.title}
                  </h3>
                  
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {path.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {path.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-start text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <svg 
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: path.color }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {path.external ? (
                    <Button
                      as="anchor"
                      href={path.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-full"
                      style={{ borderColor: path.color }}
                    >
                      {path.cta} →
                    </Button>
                  ) : (
                    <Button
                      as="link"
                      to={path.link}
                      variant="outline"
                      className="w-full"
                      style={{ borderColor: path.color }}
                    >
                      {path.cta} →
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PathSelector;
