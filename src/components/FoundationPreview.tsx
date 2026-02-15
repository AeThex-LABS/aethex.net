import React from 'react';
import { motion } from 'framer-motion';

const FoundationPreview: React.FC = () => {
  return (
    <section 
      className="relative pb-24 overflow-hidden"
      style={{ backgroundColor: '#000000', paddingTop: '80px' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)'
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
                  backgroundColor: 'rgba(255, 0, 255, 0.05)',
                  border: '1px solid #ff00ff',
                  color: '#ff00ff',
                  fontFamily: 'Source Code Pro, monospace',
                  letterSpacing: '0.15em',
                  boxShadow: '0 0 15px rgba(255, 0, 255, 0.3)',
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                🏛️ THE FOUNDATION
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
              Built by the Community,<br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                For the Community
              </span>
            </h2>
            
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ 
                color: '#a0a0a0',
                fontFamily: 'Source Code Pro, monospace'
              }}
            >
              AeThex is governed by those who use it. The Foundation gives 
              players, creators, and developers a voice in shaping the future 
              of the ecosystem.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Vote on ecosystem decisions',
                'Propose new features and games',
                'Transparent governance process',
                'Community-driven development'
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
                    style={{ color: '#ff00ff' }}
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
              href="https://aethex.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase"
              style={{
                fontFamily: 'Source Code Pro, monospace',
                letterSpacing: '0.15em',
                textDecoration: 'none'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Foundation
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
                background: 'rgba(255, 0, 255, 0.02)',
                border: '1px solid rgba(255, 0, 255, 0.3)',
                backdropFilter: 'blur(40px)',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                boxShadow: 'inset 0 0 40px rgba(255, 0, 255, 0.05)'
              }}
            >
              <h3 
                className="text-2xl font-bold mb-6 uppercase"
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.1em'
                }}
              >
                Active Proposals
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Cross-game achievement system', votes: 89, status: 'Active', color: '#00ffff' },
                  { title: 'New creator revenue model', votes: 76, status: 'Active', color: '#ff00ff' },
                  { title: 'Mobile app development', votes: 92, status: 'Passed', color: '#00ff00' }
                ].map((proposal, index) => (
                  <motion.div 
                    key={proposal.title}
                    className="p-4"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(255, 0, 255, 0.2)',
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 
                        className="font-bold text-sm"
                        style={{ 
                          color: '#ffffff',
                          fontFamily: 'Source Code Pro, monospace'
                        }}
                      >
                        {proposal.title}
                      </h4>
                      <span 
                        className="text-xs px-2 py-1 font-mono uppercase"
                        style={{
                          backgroundColor: `${proposal.color}20`,
                          color: proposal.color,
                          border: `1px solid ${proposal.color}`,
                          boxShadow: `0 0 10px ${proposal.color}40`,
                          letterSpacing: '0.1em'
                        }}
                      >
                        {proposal.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div 
                        className="flex-1 rounded-full h-2 overflow-hidden"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ 
                            backgroundColor: proposal.color,
                            boxShadow: `0 0 10px ${proposal.color}40`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${proposal.votes}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <span 
                        className="text-xs font-mono"
                        style={{ 
                          color: '#a0a0a0',
                          fontFamily: 'Source Code Pro, monospace'
                        }}
                      >
                        {proposal.votes}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-6 pt-6"
                style={{ borderTop: '1px solid rgba(255, 0, 255, 0.3)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold font-mono mb-1"
                    style={{ 
                      color: '#ff00ff',
                      textShadow: '0 0 20px #ff00ff',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    18
                  </div>
                  <div 
                    className="text-xs uppercase tracking-wider"
                    style={{ 
                      color: '#808080',
                      fontFamily: 'Source Code Pro, monospace',
                      letterSpacing: '0.15em'
                    }}
                  >
                    Active Proposals
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold font-mono mb-1"
                    style={{ 
                      color: '#ff00ff',
                      textShadow: '0 0 20px #ff00ff',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    12.5K
                  </div>
                  <div 
                    className="text-xs uppercase tracking-wider"
                    style={{ 
                      color: '#808080',
                      fontFamily: 'Source Code Pro, monospace',
                      letterSpacing: '0.15em'
                    }}
                  >
                    Members
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundationPreview;
