import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Complex layered background */}
      <div className="absolute inset-0 bg-[hsl(var(--background))]">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(59,130,246,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(168,85,247,0.3) 2%, transparent 0%)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full animate-glow-pulse">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-blue-300">
                Where the Universe Meets You
              </span>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="mb-8 font-mono text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-tight">
            <span className="text-glow-primary bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              One Identity.<br />
              Infinite Worlds.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Your progress, achievements, and identity persist across every experience 
            in the AeThex ecosystem. Play anywhere. Own everywhere.
          </p>

          {/* CTA Buttons */}
          <div className="mb-20 flex flex-wrap justify-center gap-4">
            <Link to="/passport">
              <button className="btn-glow group relative overflow-hidden rounded-lg bg-blue-600 px-8 py-4 font-mono uppercase tracking-wider text-white transition-all hover:bg-blue-500">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Create Your Passport
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Link>
            <Link to="/experiences">
              <button className="glass-panel-strong group rounded-lg px-8 py-4 font-mono uppercase tracking-wider text-white transition-all hover:border-blue-500/40">
                <span className="flex items-center gap-2">
                  Explore Experiences
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* Live Stats */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="cyber-card cyber-card-interactive p-6">
              <div className="mb-2 text-4xl font-bold text-white">
                <span className="text-glow-primary">128K+</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                Active Players
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>
            </div>

            <div className="cyber-card cyber-card-interactive p-6">
              <div className="mb-2 text-4xl font-bold text-white">
                <span className="text-glow-primary">47</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                Connected Games
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/5 bg-gradient-to-r from-green-500 to-blue-500" />
              </div>
            </div>

            <div className="cyber-card cyber-card-interactive p-6">
              <div className="mb-2 text-4xl font-bold text-white">
                <span className="text-glow-primary">2.4M+</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                Items Owned
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
