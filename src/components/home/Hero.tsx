import React from 'react';
import { GameController, LockKey, Lightning } from '@phosphor-icons/react';
import { Button, Badge, Section } from '../ui';

const Hero: React.FC = () => {
  return (
    <Section variant="primary" fullHeight>
      {/* Clean gradient background like live site */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Grid pattern overlay for depth */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Subtle blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center">
          {/* Clean badge like live site */}
          <div 
            className="mb-8 flex justify-center animate-fade-in"
            style={{ animationDelay: '0s' }}
          >
            <Badge 
              variant="gradient" 
              pulse={true}
              className="transition-transform hover:scale-105"
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Early Access • Q2 2026
              </span>
            </Badge>
          </div>

          {/* Hero Title - clean and bold */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              <span style={{ color: 'var(--text-primary)' }}>
                One Identity.
                <br />
              </span>
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #14b8a6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Infinite Worlds.
              </span>
            </h1>
          </div>

          {/* Description */}
          <p 
            className="mx-auto mb-12 max-w-3xl text-xl md:text-2xl leading-relaxed animate-fade-in"
            style={{ color: 'var(--text-secondary)', animationDelay: '0.4s' }}
          >
            Your unified identity across the gaming multiverse. One account, infinite experiences.
            <br />
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              Progress, achievements, and items that travel with you everywhere.
            </span>
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              as="anchor"
              href="https://aethex.app"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Join Early Access
            </Button>
            
            <Button
              as="link"
              to="/passport"
              variant="secondary"
              size="lg"
            >
              Create Passport
            </Button>
          </div>

          {/* Clean stats badges like live site */}
          <div 
            className="flex flex-wrap items-center justify-center gap-8 text-sm animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            {[
              { label: '12K+ Early Adopters' },
              { label: '8 Games in Beta' },
              { label: 'Q2 2026 Launch' }
            ].map((stat, i) => (
              <Badge
                key={stat.label}
                variant="pill"
                pulse={true}
                className="animate-fade-in"
                style={{
                  animationDelay: `${0.8 + i * 0.1}s`,
                  color: 'var(--text-secondary)'
                }}
              >
                {stat.label}
              </Badge>
            ))}
          </div>

          {/* Feature highlights */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            {[
              {
                icon: GameController,
                title: 'Cross-Platform Gaming',
                description: 'Play on Roblox, Fortnite, Core, and web seamlessly'
              },
              {
                icon: LockKey,
                title: 'Own Your Identity',
                description: 'Self-sovereign digital passport with verified credentials'
              },
              {
                icon: Lightning,
                title: 'Real-Time Sync',
                description: 'Sub-20ms state synchronization across all platforms'
              }
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--glass-border)',
                  animationDelay: `${1 + i * 0.1}s`
                }}
              >
                <div className="mb-4">
                  <feature.icon size={40} weight="duotone" style={{ color: 'var(--accent-purple)' }} />
                </div>
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
