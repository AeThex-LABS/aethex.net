import React from 'react';
import { motion } from 'framer-motion';

const FoundationPreview: React.FC = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="grid-background absolute inset-0 opacity-10" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)'
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
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  color: 'var(--color-foundation-red)'
                }}
              >
                🏛️ THE FOUNDATION
              </span>
            </div>
            
            <h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Built by the Community,<br />
              <span 
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #8b5cf6)',
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
              style={{ color: 'var(--text-secondary)' }}
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
                  style={{ color: 'var(--text-secondary)' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <svg 
                    className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--color-foundation-red)' }}
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
              className="btn-primary inline-flex items-center gap-2"
              style={{ textDecoration: 'none' }}
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
              className="glass-panel p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
                border: '1px solid var(--border-glow)'
              }}
            >
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Active Proposals
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Cross-game achievement system', votes: 89, status: 'Active', color: '#3b82f6' },
                  { title: 'New creator revenue model', votes: 76, status: 'Active', color: '#8b5cf6' },
                  { title: 'Mobile app development', votes: 92, status: 'Passed', color: '#22c55e' }
                ].map((proposal, index) => (
                  <motion.div 
                    key={proposal.title}
                    className="card"
                    style={{
                      backgroundColor: 'var(--bg-elevated)',
                      padding: '1rem'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 
                        className="font-semibold text-sm"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {proposal.title}
                      </h4>
                      <span 
                        className="text-xs px-2 py-1 rounded font-mono"
                        style={{
                          backgroundColor: `${proposal.color}20`,
                          color: proposal.color,
                          border: `1px solid ${proposal.color}40`
                        }}
                      >
                        {proposal.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div 
                        className="flex-1 rounded-full h-2 overflow-hidden"
                        style={{ backgroundColor: 'var(--bg-tertiary)' }}
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
                        style={{ color: 'var(--text-secondary)' }}
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
                style={{ borderTop: '1px solid var(--border-primary)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold font-mono mb-1"
                    style={{ color: 'var(--color-foundation-red)' }}
                  >
                    18
                  </div>
                  <div 
                    className="text-xs uppercase tracking-wider"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Active Proposals
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold font-mono mb-1"
                    style={{ color: 'var(--color-foundation-red)' }}
                  >
                    12.5K
                  </div>
                  <div 
                    className="text-xs uppercase tracking-wider"
                    style={{ color: 'var(--text-tertiary)' }}
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
