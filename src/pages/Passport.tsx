import React from 'react';
import { motion } from 'framer-motion';
import PassportCTA from '../components/PassportCTA';

const Passport: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* PassportCTA Component */}
      <PassportCTA />

      {/* Benefits Section */}
      <section className="relative pb-24 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-15">
          <div style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center uppercase"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What You Get
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔐',
                title: 'One Identity',
                description: 'Single sign-on works across all AeThex experiences. Never create another account.',
                color: '#00ffff'
              },
              {
                icon: '📊',
                title: 'Persistent Progress',
                description: 'Your achievements, stats, and inventory sync across every platform in real-time.',
                color: '#ff00ff'
              },
              {
                icon: '🎯',
                title: 'Universal Achievements',
                description: 'Unlock system-wide achievements that span multiple games and platforms.',
                color: '#00ff00'
              },
              {
                icon: '🗃️',
                title: 'Cross-Platform Locker',
                description: 'Items and assets you own in one game can appear in others.',
                color: '#00ffff'
              },
              {
                icon: '🏛️',
                title: 'Governance Power',
                description: 'Passport holders can vote on proposals and shape the ecosystem.',
                color: '#ff00ff'
              },
              {
                icon: '🔒',
                title: 'Full Data Control',
                description: 'You own your data. Export, delete, or transfer it anytime.',
                color: '#00ff00'
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="p-6 group"
                style={{
                  background: 'rgba(0, 255, 255, 0.02)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3
                  className="text-xl font-bold mb-3 uppercase"
                  style={{
                    color: benefit.color,
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.05em',
                    textShadow: `0 0 20px ${benefit.color}`
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: '0.875rem'
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'rgba(0, 255, 255, 0.02)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center uppercase"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Create Your Passport',
                description: 'Sign up with email. No credit card required. Takes 30 seconds.',
                color: '#00ffff'
              },
              {
                step: '02',
                title: 'Link Your Platforms',
                description: 'Connect your existing game accounts (Roblox, Steam, etc.) to your Passport.',
                color: '#ff00ff'
              },
              {
                step: '03',
                title: 'Play Anything',
                description: 'Jump into any AeThex experience. Your Passport auto-signs you in.',
                color: '#00ff00'
              },
              {
                step: '04',
                title: 'Watch It Sync',
                description: 'Progress, items, and achievements automatically flow across games.',
                color: '#00ffff'
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="flex gap-6 p-6"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: `1px solid ${step.color}80`,
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  boxShadow: `inset 0 0 20px ${step.color}20`
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className="text-3xl font-bold"
                  style={{
                    color: step.color,
                    fontFamily: 'Source Code Pro, monospace',
                    textShadow: `0 0 20px ${step.color}`,
                    minWidth: '60px'
                  }}
                >
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      color: '#ffffff',
                      fontFamily: 'Electrolize, sans-serif',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: '#a0a0a0',
                      fontFamily: 'Source Code Pro, monospace',
                      fontSize: '0.875rem'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Passport;
