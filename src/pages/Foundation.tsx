import React from 'react';
import { motion } from 'framer-motion';
import FoundationPreview from '../components/FoundationPreview';

const Foundation: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <FoundationPreview />
      
      {/* How Governance Works */}
      <section className="relative pb-24 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
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
            How Governance Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
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
            WANT TO GET INVOLVED?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Foundation has its own dedicated platform for governance, proposals, and community decision-making.
          </motion.p>
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
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit aethex.foundation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Foundation;
