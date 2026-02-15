import React from 'react';
import { motion } from 'framer-motion';

const DevelopersPreview: React.FC = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#000000', paddingTop: '80px' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span 
                className="text-xs font-mono px-3 py-1.5 uppercase"
                style={{
                  backgroundColor: 'rgba(0, 255, 255, 0.05)',
                  border: '1px solid #00ffff',
                  color: '#00ffff',
                  fontFamily: 'Source Code Pro, monospace',
                  letterSpacing: '0.15em',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                👨‍💻 DEVELOPER PORTAL
              </span>
            </div>
            
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ 
                color: '#ffffff',
                fontFamily: 'Electrolize, sans-serif',
                letterSpacing: '0.1em'
              }}
            >
              Build with AeThex,<br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #00ffff, #00ff00)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Ship Everywhere
              </span>
            </h2>
            
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ 
                color: '#a0a0a0',
                fontFamily: 'Source Code Pro, monospace'
              }}
            >
              Integrate AeThex Passport, Universal Locker, and cross-platform 
              APIs into your games. Comprehensive SDKs for Unity, Unreal, Roblox, 
              and Web.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Full-featured REST & GraphQL APIs',
                'SDKs for Unity, Unreal, Roblox, Web',
                'Real-time webhooks & events',
                'Detailed docs & code examples'
              ].map((item, index) => (
                <motion.li 
                  key={item}
                  className="flex items-start"
                  style={{ 
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <svg 
                    className="w-5 h-5 mr-3 mt-0.5 shrink-0" 
                    style={{ color: '#00ffff' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="https://aethex.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase"
              style={{
                background: 'rgba(0, 255, 255, 0.1)',
                border: '2px solid #00ffff',
                color: '#00ffff',
                fontFamily: 'Source Code Pro, monospace',
                letterSpacing: '0.15em',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.05)',
                textDecoration: 'none'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Documentation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="p-8"
              style={{
                background: 'rgba(0, 255, 255, 0.02)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                backdropFilter: 'blur(40px)',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: 'inset 0 0 40px rgba(0, 255, 255, 0.05)'
              }}
            >
              <h3 
                className="text-xl font-bold mb-6 uppercase"
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Popular APIs
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Passport Authentication', status: 'Stable', color: '#00ff00' },
                  { name: 'Universal Locker', status: 'Stable', color: '#00ff00' },
                  { name: 'Cross-Platform Progression', status: 'Stable', color: '#00ff00' },
                  { name: 'Achievements & Badges', status: 'Beta', color: '#00ffff' },
                  { name: 'Marketplace API', status: 'Beta', color: '#00ffff' }
                ].map((api, index) => (
                  <motion.div 
                    key={api.name}
                    className="flex justify-between items-center p-4"
                    style={{
                      background: 'rgba(0, 255, 255, 0.03)',
                      border: '1px solid rgba(0, 255, 255, 0.2)',
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      backgroundColor: 'rgba(0, 255, 255, 0.05)',
                      borderColor: 'rgba(0, 255, 255, 0.5)'
                    }}
                  >
                    <span 
                      className="font-mono text-sm"
                      style={{ 
                        color: '#ffffff',
                        fontFamily: 'Source Code Pro, monospace'
                      }}
                    >
                      {api.name}
                    </span>
                    <span 
                      className="text-xs font-bold px-2 py-1"
                      style={{
                        color: api.color,
                        backgroundColor: `${api.color}10`,
                        border: `1px solid ${api.color}40`,
                        fontFamily: 'Source Code Pro, monospace',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {api.status}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div 
                className="mt-6 p-4 text-sm"
                style={{
                  background: 'rgba(0, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  color: '#00ffff',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                <div className="flex items-start gap-2">
                  <span>💡</span>
                  <span>
                    Check out our <a href="https://aethex.dev/quickstart" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">quickstart guide</a> to integrate in minutes.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersPreview;
