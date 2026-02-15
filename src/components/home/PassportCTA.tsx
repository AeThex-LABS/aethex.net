import React from 'react';
import { motion } from 'framer-motion';
import { IdentificationCard, Check } from '@phosphor-icons/react';
import { Button, Section } from '../ui';

const PassportCTA: React.FC = () => {
  return (
    <Section variant="secondary">
      {/* Clean gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2), transparent 70%)'
          }}
        />
      </div>
      
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 border-2 border-purple-500/10 rounded-full animate-pulse" />
        <div className="absolute w-[500px] h-[500px] border-2 border-blue-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[600px] h-[600px] border-2 border-teal-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <IdentificationCard size={64} weight="duotone" style={{ color: 'var(--accent-purple)' }} />
          </div>
        </motion.div>

        <motion.h2 
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Get Your{' '}
          <span style={{ 
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            AeThex Passport
          </span>
        </motion.h2>

        <motion.p 
          className="text-xl mb-10 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          One account to rule them all. Create your Passport and start building 
          your cross-platform identity today.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-lg focus:outline-none focus:ring-2 backdrop-blur"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
            }}
          />
          <Button
            as="link"
            to="/passport"
            variant="primary"
          >
            Create Passport
          </Button>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
          style={{ color: 'var(--text-tertiary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
        >
          {[
            { icon: '✓', text: 'Free forever' },
            { icon: '✓', text: 'No credit card' },
            { icon: '✓', text: 'Instant access' },
            { icon: '✓', text: 'Own your data' }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: 'var(--accent-teal)',
                  color: 'var(--bg-primary)'
                }}
              >
                <Check size={12} weight="bold" />
              </div>
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default PassportCTA;
