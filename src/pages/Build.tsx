import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, ArrowRight } from '@phosphor-icons/react';

const Build: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pb-24 overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        {/* Scanline */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            🛠️
          </motion.div>
          <motion.h1 
            className="text-6xl font-bold mb-6 uppercase"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em',
              textShadow: '0 0 40px rgba(0, 255, 255, 0.8)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build on AeThex
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Whether you're a creator building experiences or a developer integrating the protocol, AeThex powers your vision.
          </motion.p>
        </div>
      </section>

      {/* Split Paths */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Creators Path */}
            <motion.div
              className="relative p-8"
              style={{
                background: 'rgba(255, 0, 255, 0.05)',
                border: '2px solid rgba(255, 0, 255, 0.3)',
                backdropFilter: 'blur(40px)',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: '0 0 40px rgba(255, 0, 255, 0.2), inset 0 0 20px rgba(255, 0, 255, 0.1)'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Palette size={48} weight="duotone" style={{ color: '#ff00ff' }} />
                <h2 
                  className="text-3xl font-bold uppercase"
                  style={{
                    color: '#ff00ff',
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.1em',
                    textShadow: '0 0 20px rgba(255, 0, 255, 0.8)'
                  }}
                >
                  For Creators
                </h2>
              </div>
              
              <p 
                className="text-lg mb-8"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                Build games and experiences with no-code tools, sell assets on the marketplace, and earn from your creativity.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: '🛠️', title: 'No-Code Builder', desc: 'Drag-and-drop interface with built-in AeThex integration' },
                  { icon: '🎨', title: 'Asset Marketplace', desc: 'Sell 3D models, textures, sounds, and game logic' },
                  { icon: '📊', title: 'Analytics Dashboard', desc: 'Track engagement, revenue, and performance' },
                  { icon: '💰', title: 'Revenue Share', desc: 'Earn 85% of sales with instant settlements' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-3 p-4"
                    style={{
                      background: 'rgba(255, 0, 255, 0.05)',
                      border: '1px solid rgba(255, 0, 255, 0.2)',
                      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 
                        className="font-bold mb-1 uppercase"
                        style={{
                          color: '#ffffff',
                          fontFamily: 'Electrolize, sans-serif',
                          fontSize: '0.875rem',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        style={{
                          color: '#808080',
                          fontFamily: 'Source Code Pro, monospace',
                          fontSize: '0.75rem'
                        }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="w-full py-4 px-6 font-bold uppercase flex items-center justify-center gap-2"
                style={{
                  background: 'rgba(255, 0, 255, 0.2)',
                  border: '2px solid #ff00ff',
                  color: '#ff00ff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.1em',
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                  boxShadow: '0 0 30px rgba(255, 0, 255, 0.4), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                  textShadow: '0 0 10px rgba(255, 0, 255, 1)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 40px rgba(255, 0, 255, 0.6), inset 0 0 30px rgba(255, 0, 255, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://creator.aethex.app', '_blank')}
              >
                Launch Creator Portal
                <ArrowRight size={20} weight="bold" />
              </motion.button>
            </motion.div>

            {/* Developers Path */}
            <motion.div
              className="relative p-8"
              style={{
                background: 'rgba(0, 255, 255, 0.05)',
                border: '2px solid rgba(0, 255, 255, 0.3)',
                backdropFilter: 'blur(40px)',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)'
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Code size={48} weight="duotone" style={{ color: '#00ffff' }} />
                <h2 
                  className="text-3xl font-bold uppercase"
                  style={{
                    color: '#00ffff',
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.1em',
                    textShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
                  }}
                >
                  For Developers
                </h2>
              </div>
              
              <p 
                className="text-lg mb-8"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                Integrate AeThex protocol into your games with powerful SDKs, REST APIs, and real-time infrastructure.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: '🔌', title: 'Cross-Platform SDKs', desc: 'Unity, Unreal, Roblox, Godot, Web, and Mobile' },
                  { icon: '⚡', title: 'REST & GraphQL APIs', desc: 'Complete HTTP API with WebSocket real-time events' },
                  { icon: '📚', title: 'Full Documentation', desc: 'Code samples, guides, and interactive playground' },
                  { icon: '🚀', title: 'Instant Deployment', desc: 'Deploy in minutes with free starter tier' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-3 p-4"
                    style={{
                      background: 'rgba(0, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 255, 255, 0.2)',
                      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 
                        className="font-bold mb-1 uppercase"
                        style={{
                          color: '#ffffff',
                          fontFamily: 'Electrolize, sans-serif',
                          fontSize: '0.875rem',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        style={{
                          color: '#808080',
                          fontFamily: 'Source Code Pro, monospace',
                          fontSize: '0.75rem'
                        }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="w-full py-4 px-6 font-bold uppercase flex items-center justify-center gap-2"
                style={{
                  background: 'rgba(0, 255, 255, 0.2)',
                  border: '2px solid #00ffff',
                  color: '#00ffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.1em',
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                  textShadow: '0 0 10px rgba(0, 255, 255, 1)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 40px rgba(0, 255, 255, 0.6), inset 0 0 30px rgba(0, 255, 255, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://aethex.dev', '_blank')}
              >
                View Documentation
                <ArrowRight size={20} weight="bold" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Quick Start Guide - Shared */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get Started in 3 Steps
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Sign up for a free account using your email or Web3 wallet.',
                color: '#00ffff'
              },
              {
                step: '02',
                title: 'Choose Your Path',
                description: 'Select creator tools for no-code building or developer APIs for custom integration.',
                color: '#00ff00'
              },
              {
                step: '03',
                title: 'Launch & Earn',
                description: 'Deploy your experience or integration and start earning from day one.',
                color: '#ff00ff'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="p-6 text-center"
                style={{
                  background: 'rgba(0, 255, 255, 0.02)',
                  border: `1px solid ${item.color}40`,
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  boxShadow: `inset 0 0 20px ${item.color}10`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{
                    color: item.color,
                    fontFamily: 'Source Code Pro, monospace',
                    textShadow: `0 0 20px ${item.color}`
                  }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-bold mb-3 uppercase"
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: '0.875rem'
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Build;
