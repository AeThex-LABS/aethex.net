import React, { useState } from 'react';

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: '🎮',
      title: 'Cross-Platform Play',
      description: 'Seamlessly play across all your devices with unified progression and friends lists',
      details: ['PC, Console, Mobile', 'Cloud Save Sync', 'Cross-Platform Parties'],
      color: 'var(--color-corp-blue)'
    },
    {
      icon: '🌐',
      title: 'Unified Identity',
      description: 'One account for all your gaming experiences in the AeThex ecosystem',
      details: ['Single Sign-On', 'Portable Achievements', 'Universal Profile'],
      color: 'var(--color-nexus-purple)'
    },
    {
      icon: '💎',
      title: 'True Ownership',
      description: 'Own your in-game items and characters with blockchain-backed ownership',
      details: ['NFT Integration', 'Cross-Game Items', 'Secure Trading'],
      color: 'var(--color-foundation-red)'
    },
    {
      icon: '🎨',
      title: 'Creator Economy',
      description: 'Build, monetize, and share your creations with millions of players',
      details: ['Revenue Sharing', 'Creator Tools', 'Marketplace Access'],
      color: 'var(--color-labs-yellow)'
    },
    {
      icon: '⚡',
      title: 'Instant Loading',
      description: 'Launch games in seconds with edge-optimized infrastructure',
      details: ['CDN-Powered', 'Zero Downloads', 'Sub-Second Latency'],
      color: 'var(--color-gameforge-green)'
    },
    {
      icon: '🛡️',
      title: 'Player-First Governance',
      description: 'Shape the future of the platform through transparent community voting',
      details: ['Community Proposals', 'On-Chain Voting', 'Treasury Oversight'],
      color: 'var(--color-ethos-pink)'
    }
  ];

  return (
    <section style={{ 
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Grid Background */}
      <div className="grid-background-animated" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.3
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '6rem 1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
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
            color: 'var(--accent-primary)'
          }}>
            ✨ Platform Features
          </div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, var(--text-primary), var(--accent-primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Built for the Next Generation
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Everything you need for the future of gaming, all in one place
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover-lift glow-border"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                padding: '2rem',
                borderColor: hoveredFeature === index ? feature.color : 'var(--border-primary)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem',
                border: `2px solid ${feature.color}`,
                boxShadow: hoveredFeature === index 
                  ? `0 0 30px ${feature.color}40` 
                  : 'none',
                transition: 'all 0.3s ease'
              }}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '0.75rem',
                color: hoveredFeature === index ? feature.color : 'var(--text-primary)',
                transition: 'color 0.3s ease'
              }}>
                {feature.title}
              </h3>

              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>

              {/* Details List */}
              <ul style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {feature.details.map((detail, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span style={{ color: feature.color }}>▸</span>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover Indicator */}
              {hoveredFeature === index && (
                <div style={{
                  marginTop: '1.5rem',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  backgroundColor: `${feature.color}10`,
                  border: `1px solid ${feature.color}40`,
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: feature.color,
                  textAlign: 'center'
                }}>
                  Learn More →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '1rem',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}>
            Ready to experience the future?
          </p>
          <button className="btn-primary" style={{
            padding: '1rem 2rem',
            fontSize: '1.125rem'
          }}>
            Get Your Passport →
          </button>
        </div>
      </div>
    </section>
  );
}
