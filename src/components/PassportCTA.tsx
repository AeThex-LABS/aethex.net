import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PassportCTA: React.FC = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--bg-primary), var(--bg-secondary), var(--bg-tertiary))'
      }}
    >
      {/* Animated cosmic background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, var(--accent-purple), transparent 50%), radial-gradient(circle at 80% 50%, var(--accent-blue), transparent 50%)',
            animation: 'pulse-glow 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? 'var(--accent-purple)' : i % 3 === 1 ? 'var(--accent-blue)' : 'var(--accent-teal)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-6xl mb-6"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🎫
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-5xl font-bold mb-6"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Get Your{' '}
          <span style={{ 
            background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue), var(--accent-teal))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 4s ease infinite'
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
          <Link
            to="/passport"
            className="btn-primary"
          >
            Create Passport
          </Link>
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
              <span 
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'var(--accent-teal)',
                  color: 'var(--bg-primary)'
                }}
              >
                {item.icon}
              </span>
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PassportCTA;
