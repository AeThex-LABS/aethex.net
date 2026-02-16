import React from 'react';
import { motion } from 'framer-motion';
import EcosystemMap from '../components/EcosystemMap';

const Ecosystem: React.FC = () => {
  const platforms = [
    {
      category: 'Consumer & Discovery',
      color: '#00ffff',
      items: [
        {
          icon: '🌐',
          name: 'aethex.net',
          description: 'The Gateway - Consumer portal for players and creators',
          badge: 'Current Site',
          link: null
        }
      ]
    },
    {
      category: 'Infrastructure & Development',
      color: '#ff00ff',
      items: [
        {
          icon: '☁️',
          name: 'aethex.cloud',
          description: 'B2B SaaS APIs & infrastructure sales platform',
          badge: 'Live',
          link: 'https://aethex.cloud'
        },
        {
          icon: '🏢',
          name: 'aethex.inc',
          description: 'Enterprise solutions & custom contract services',
          badge: 'Live',
          link: 'https://aethex.inc'
        },
        {
          icon: '👨‍💻',
          name: 'aethex.dev',
          description: 'Developer portal & technical documentation hub',
          badge: 'Live',
          link: 'https://aethex.dev'
        },
        {
          icon: '⚙️',
          name: 'aethex.tech',
          description: 'Integration guides & SDK documentation',
          badge: 'Live',
          link: 'https://aethex.tech'
        }
      ]
    },
    {
      category: 'Creator Tools',
      color: '#00ff00',
      items: [
        {
          icon: '🎨',
          name: 'aethex.studio',
          description: 'No-code creator platform for building experiences',
          badge: 'Beta',
          link: 'https://aethex.studio'
        },
        {
          icon: '🗃️',
          name: 'aethex.locker',
          description: 'Universal inventory & asset management',
          badge: 'Beta',
          link: 'https://aethex.locker'
        }
      ]
    },
    {
      category: 'Governance & Community',
      color: '#ff00ff',
      items: [
        {
          icon: '🏛️',
          name: 'aethex.foundation',
          description: 'DAO governance & community decision platform',
          badge: 'Live',
          link: 'https://aethex.foundation'
        }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pb-20 overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Grid background */}
        <div className="absolute inset-0 opacity-15">
          <div style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff, #00ff00)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            THE AETHEX ECOSYSTEM
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A connected universe of platforms, each serving a different purpose in the multiverse.
          </motion.p>
        </div>
      </section>

      {/* Interactive Map */}
      <EcosystemMap />

      {/* Platforms Overview */}
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
            The AeThex Network
          </motion.h2>

          <div className="space-y-16">
            {platforms.map((platform, categoryIndex) => (
              <div key={platform.category}>
                <motion.h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3 uppercase"
                  style={{
                    color: platform.color,
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.05em',
                    textShadow: `0 0 20px ${platform.color}`
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <div
                    style={{
                      height: '2px',
                      width: '48px',
                      background: platform.color,
                      boxShadow: `0 0 10px ${platform.color}`
                    }}
                  />
                  {platform.category}
                </motion.h3>

                <div className={`grid gap-6 ${platform.items.length === 1 ? 'md:grid-cols-1 max-w-2xl' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                  {platform.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      className="p-8 group"
                      style={{
                        background: 'rgba(0, 255, 255, 0.02)',
                        border: `1px solid ${platform.color}40`,
                        backdropFilter: 'blur(40px)',
                        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                        boxShadow: `inset 0 0 20px ${platform.color}10`,
                        cursor: item.link ? 'pointer' : 'default'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      whileHover={item.link ? { y: -5, scale: 1.02 } : {}}
                      onClick={() => item.link && window.open(item.link, '_blank')}
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{
                          color: '#ffffff',
                          fontFamily: 'Electrolize, sans-serif',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {item.name}
                      </h4>
                      <p
                        className="text-sm mb-4"
                        style={{
                          color: '#a0a0a0',
                          fontFamily: 'Source Code Pro, monospace'
                        }}
                      >
                        {item.description}
                      </p>
                      <span
                        className="inline-block text-xs font-bold px-2 py-1 uppercase"
                        style={{
                          backgroundColor: `${platform.color}20`,
                          color: platform.color,
                          border: `1px solid ${platform.color}`,
                          fontFamily: 'Source Code Pro, monospace',
                          letterSpacing: '0.1em',
                          boxShadow: `0 0 10px ${platform.color}40`
                        }}
                      >
                        {item.badge}
                      </span>
                      {item.link && (
                        <div className="mt-4 flex items-center gap-2" style={{ color: platform.color }}>
                          <span
                            className="text-sm font-bold uppercase"
                            style={{
                              fontFamily: 'Source Code Pro, monospace',
                              letterSpacing: '0.1em'
                            }}
                          >
                            Visit
                          </span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Governance Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background divider */}
        <div className="absolute inset-0">
          <div 
            className="h-px w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #ff00ff, transparent)',
              boxShadow: '0 0 20px #ff00ff',
              marginBottom: '80px'
            }}
          />
        </div>

        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16">
            <motion.h2
              className="text-5xl font-bold mb-6 uppercase"
              style={{
                background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Electrolize, sans-serif',
                letterSpacing: '0.1em'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AeThex Foundation
            </motion.h2>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-4"
              style={{
                color: '#a0a0a0',
                fontFamily: 'Source Code Pro, monospace'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Community-governed DAO that steers the protocol's future through transparent, decentralized decision-making.
            </motion.p>
          </motion.div>

          <motion.h3
            className="text-3xl font-bold mb-12 text-center uppercase"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How Governance Works
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Propose',
                description: 'Any Passport holder can submit proposals for ecosystem changes, new features, or funding allocations.',
                color: '#ff00ff'
              },
              {
                step: '02',
                title: 'Discuss',
                description: 'Community reviews proposals, debates merits, and suggests improvements through structured discussion.',
                color: '#00ffff'
              },
              {
                step: '03',
                title: 'Vote',
                description: 'Passport holders vote on proposals. Voting power scales with ecosystem participation and governance history.',
                color: '#00ff00'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="p-6 text-center"
                style={{
                  background: 'rgba(255, 0, 255, 0.02)',
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

          {/* CTA to Foundation */}
          <div className="text-center">
            <motion.a
              href="https://aethex.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase"
              style={{
                background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
                color: '#000000',
                fontFamily: 'Source Code Pro, monospace',
                letterSpacing: '0.15em',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                border: '1px solid #ff00ff',
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                textDecoration: 'none'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit aethex.foundation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
