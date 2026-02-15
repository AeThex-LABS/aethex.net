import React, { useState } from 'react';

const ApiDocs: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState('auth');
  const [isLoading, setIsLoading] = useState(false);

  const apis = [
    { id: 'auth', name: 'Authentication', icon: '🔐', endpoint: '/api/auth' },
    { id: 'profile', name: 'User Profile', icon: '👤', endpoint: '/api/profile' },
    { id: 'games', name: 'Game Library', icon: '🎮', endpoint: '/api/games' },
    { id: 'achievements', name: 'Achievements', icon: '🏆', endpoint: '/api/achievements' },
    { id: 'friends', name: 'Social Graph', icon: '👥', endpoint: '/api/friends' },
    { id: 'marketplace', name: 'Marketplace', icon: '🛒', endpoint: '/api/marketplace' }
  ];

  const codeExamples: Record<string, string> = {
    auth: `// Authenticate with AeThex Passport
import { AeThexClient } from '@aethex/sdk';

const client = new AeThexClient({
  apiKey: process.env.AETHEX_API_KEY
});

// Sign in with OAuth
const { token, user } = await client.auth.signIn({
  provider: 'google',
  redirectUri: 'https://yourgame.com/callback'
});`,
    
    profile: `// Fetch user profile
const profile = await client.profile.get(userId);

// Update profile
await client.profile.update({
  displayName: 'ProGamer2024',
  avatar: 'https://cdn.aethex.net/avatars/...'
});`,
    
    games: `// Get user's game library
const library = await client.games.getLibrary();

// Launch a game
const session = await client.games.launch(gameId);`,
    
    achievements: `// Get achievements for a game
const achievements = await client.achievements.list(gameId);

// Unlock achievement
await client.achievements.unlock({
  gameId: 'game-123',
  achievementId: 'first-win'
});`,
    
    friends: `// Get friends list
const friends = await client.friends.list();

// Send friend request
await client.friends.sendRequest(targetUserId);`,
    
    marketplace: `// Browse marketplace
const items = await client.marketplace.search({
  category: 'skins',
  game: 'game-123'
});`
  };

  const handleApiSelect = (apiId: string) => {
    setIsLoading(true);
    setSelectedApi(apiId);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <section style={{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      padding: '6rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }} id="docs">
      {/* Dot Pattern Background */}
      <div className="dot-pattern" style={{
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
            color: 'var(--color-corp-blue)'
          }}>
            ⚡ Developer APIs
          </div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, var(--text-primary), var(--color-corp-blue))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Powerful APIs for Developers
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Build amazing experiences with our comprehensive SDK
          </p>

          <a 
            href="https://aethexdev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              textDecoration: 'none'
            }}
          >
            Full Documentation →
          </a>
        </div>


        {/* API Explorer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {/* Sidebar */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {apis.map((api) => (
              <button
                key={api.id}
                onClick={() => handleApiSelect(api.id)}
                className="card"
                style={{
                  padding: '1rem',
                  textAlign: 'left',
                  border: selectedApi === api.id 
                    ? '2px solid var(--color-corp-blue)' 
                    : '1px solid var(--border-primary)',
                  backgroundColor: selectedApi === api.id 
                    ? 'var(--bg-secondary)' 
                    : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{api.icon}</span>
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: selectedApi === api.id 
                      ? 'var(--color-corp-blue)' 
                      : 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {api.name}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    color: 'var(--text-secondary)'
                  }}>
                    {api.endpoint}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="card" style={{
            padding: '0',
            overflow: 'hidden'
          }}>
            {/* Code Header */}
            <div style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ff5f56'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ffbd2e'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#27c93f'
                }} />
              </div>
              
              <span style={{
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                color: 'var(--text-secondary)'
              }}>
                example.ts
              </span>

              <button 
                className="btn-secondary"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem'
                }}
              >
                📋 Copy
              </button>
            </div>

            {/* Code Content */}
            {isLoading ? (
              <div style={{ padding: '2rem' }}>
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text" style={{ width: '80%' }} />
                <div className="skeleton skeleton-text" style={{ width: '90%' }} />
                <div className="skeleton skeleton-text" style={{ width: '70%' }} />
              </div>
            ) : (
              <pre style={{
                padding: '2rem',
                margin: 0,
                backgroundColor: '#1a1b26',
                color: '#a9b1d6',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                overflowX: 'auto',
                fontFamily: 'monospace'
              }}>
                <code>{codeExamples[selectedApi]}</code>
              </pre>
            )}

            {/* Bottom Info */}
            <div style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderTop: '1px solid var(--border-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              <span>📦 npm install @aethex/sdk</span>
              <span>⚡ TypeScript supported</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { label: 'API Endpoints', value: '50+', icon: '🔌' },
            { label: 'Uptime', value: '99.99%', icon: '⚡' },
            { label: 'Response Time', value: '<50ms', icon: '🚀' },
            { label: 'Rate Limit', value: '10k/min', icon: '📊' }
          ].map((stat, index) => (
            <div
              key={index}
              className="card hover-lift"
              style={{
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: 'var(--color-corp-blue)',
                marginBottom: '0.25rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiDocs;