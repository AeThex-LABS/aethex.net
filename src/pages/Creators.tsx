import React from 'react';
import { motion } from 'framer-motion';

const Creators: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pb-24 overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Scanline */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 255, 0.1) 2px, rgba(255, 0, 255, 0.1) 4px)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            🎨
          </motion.div>
          <motion.h1 
            className="text-6xl font-bold mb-6 uppercase"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em',
              textShadow: '0 0 40px rgba(255, 0, 255, 0.8)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creator Portal
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
            Build experiences, sell assets, and monetize your creativity in the AeThex ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Tools */}
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
            Creator Tools
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛠️',
                title: 'No-Code Builder',
                desc: 'Create games and experiences without writing code. Drag-and-drop interface with AeThex integration built-in.',
                cta: 'Start Building',
                color: '#ff00ff'
              },
              {
                icon: '🎨',
                title: 'Asset Marketplace',
                desc: 'Sell 3D models, textures, sound effects, and game logic to other creators. Earn on every sale.',
                cta: 'Browse Marketplace',
                color: '#00ffff'
              },
              {
                icon: '📊',
                title: 'Analytics Dashboard',
                desc: 'Track player engagement, revenue, and performance across all your experiences in one place.',
                cta: 'View Analytics',
                color: '#00ff00'
              }
            ].map((tool, index) => (
              <motion.div 
                key={tool.title}
                className="p-8"
                style={{
                  background: 'rgba(255, 0, 255, 0.02)',
                  border: `1px solid ${tool.color}40`,
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  boxShadow: `inset 0 0 20px ${tool.color}10`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  borderColor: `${tool.color}`,
                  boxShadow: `0 0 30px ${tool.color}40, inset 0 0 30px ${tool.color}20`
                }}
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 
                  className="text-2xl font-bold mb-3 uppercase"
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  {tool.title}
                </h3>
                <p 
                  className="mb-6"
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: '0.875rem'
                  }}
                >
                  {tool.desc}
                </p>
                <button 
                  className="font-medium text-sm uppercase"
                  style={{
                    color: tool.color,
                    fontFamily: 'Source Code Pro, monospace',
                    letterSpacing: '0.1em',
                    textShadow: `0 0 10px ${tool.color}`
                  }}
                >
                  {tool.cta} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="relative py-20">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-4xl font-bold mb-6 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.1em'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Multiple Ways to Earn
              </motion.h2>
              <ul className="space-y-4">
                {[
                  { title: 'In-Game Purchases', desc: '70% revenue share on all transactions', color: '#00ff00' },
                  { title: 'Subscriptions', desc: 'Recurring revenue from premium features', color: '#00ffff' },
                  { title: 'Asset Sales', desc: 'Sell your creations in the marketplace', color: '#ff00ff' },
                  { title: 'Sponsorships', desc: 'Partner with brands for integrated content', color: '#00ff00' },
                  { title: 'Tips & Donations', desc: 'Direct support from your community', color: '#00ffff' }
                ].map((item, index) => (
                  <motion.li 
                    key={item.title}
                    className="flex items-start p-4"
                    style={{
                      background: `${item.color}05`,
                      border: `1px solid ${item.color}30`,
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <svg 
                      className="w-6 h-6 mr-3 mt-0.5 shrink-0" 
                      style={{ color: item.color }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 
                        className="font-semibold mb-1"
                        style={{
                          color: '#ffffff',
                          fontFamily: 'Electrolize, sans-serif',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-sm"
                        style={{
                          color: '#a0a0a0',
                          fontFamily: 'Source Code Pro, monospace'
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              className="p-8"
              style={{
                background: 'rgba(0, 255, 0, 0.03)',
                border: '1px solid rgba(0, 255, 0, 0.3)',
                backdropFilter: 'blur(40px)',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: 'inset 0 0 40px rgba(0, 255, 0, 0.05)'
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#00ff00',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em',
                  textShadow: '0 0 20px rgba(0, 255, 0, 0.8)'
                }}
              >
                Creator Success Stories
              </h3>
              <div className="space-y-4">
                {[
                  { quote: 'I made $15K in my first month selling custom avatars in the marketplace.', author: 'Sarah K., 3D Artist' },
                  { quote: 'The no-code builder let me prototype my game in 2 days instead of 2 months.', author: 'Marcus T., Game Designer' }
                ].map((story, index) => (
                  <motion.div 
                    key={index}
                    className="p-4"
                    style={{
                      background: 'rgba(0, 255, 0, 0.05)',
                      border: '1px solid rgba(0, 255, 0, 0.2)',
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <p 
                      className="text-sm mb-2"
                      style={{
                        color: '#a0a0a0',
                        fontFamily: 'Source Code Pro, monospace'
                      }}
                    >
                      "{story.quote}"
                    </p>
                    <p 
                      className="text-xs"
                      style={{
                        color: '#00ff00',
                        fontFamily: 'Source Code Pro, monospace'
                      }}
                    >
                      — {story.author}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #ff00ff, #00ffff, #00ff00)',
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
            READY TO START CREATING?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            style={{
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of creators building the future of gaming.
          </motion.p>
          <motion.button 
            className="px-8 py-4 text-sm font-bold uppercase"
            style={{
              background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
              color: '#000000',
              fontFamily: 'Source Code Pro, monospace',
              letterSpacing: '0.15em',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              border: '1px solid #ff00ff',
              boxShadow: '0 0 30px rgba(255, 0, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Creator Access
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Creators;
