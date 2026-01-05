import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center animate-[fadeIn_0.6s_ease-out]">
            <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider" style={{
                color: 'var(--accent-primary)'
              }}>
                Where the Universe Meets You
              </span>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-[fadeIn_0.8s_ease-out]" style={{
            color: 'var(--text-primary)'
          }}>
            One Identity.<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Infinite Worlds.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl animate-[fadeIn_1s_ease-out]" style={{
            color: 'var(--text-secondary)'
          }}>
            Your progress, achievements, and identity persist across every experience 
            in the AeThex ecosystem. Play anywhere. Own everywhere.
          </p>

          {/* CTA Buttons */}
          <div className="mb-20 flex flex-wrap justify-center gap-4 animate-[fadeIn_1.2s_ease-out]">
            <Link to="/passport">
              <button className="btn-primary flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Create Your Passport
              </button>
            </Link>
            <Link to="/experiences">
              <button className="btn-secondary flex items-center gap-2">
                Explore Experiences
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Live Stats */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-6 animate-[fadeIn_1.4s_ease-out]">
            <div className="card">
              <div className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                128K+
              </div>
              <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                Active Players
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>

            <div className="card">
              <div className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                47
              </div>
              <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                Connected Games
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="h-full w-3/5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
              </div>
            </div>

            <div className="card">
              <div className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                2.4M+
              </div>
              <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                Items Owned
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
