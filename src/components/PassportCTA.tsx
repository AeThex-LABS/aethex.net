import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PassportCTA: React.FC = () => {
  return (
    <section 
      className="relative pb-24 overflow-hidden"
      style={{ backgroundColor: '#000000', paddingTop: '80px' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ffff 2px, #00ffff 4px)'
          }}
        />
      </div>

      {/* Data stream particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-20"
            style={{
              background: `linear-gradient(to bottom, transparent, ${i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#00ff00'}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: '-100px',
              boxShadow: `0 0 10px ${i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#00ff00'}`
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear'
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
          style={{ 
            color: '#ffffff',
            fontFamily: 'Electrolize, sans-serif',
            letterSpacing: '0.1em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Get Your{' '}
          <span style={{ 
            background: 'linear-gradient(135deg, #00ffff, #ff00ff, #00ff00)',
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
          style={{ 
            color: '#a0a0a0',
            fontFamily: 'Source Code Pro, monospace'
          }}
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
            className="px-6 py-4 focus:outline-none focus:ring-2 backdrop-blur text-xs"
            style={{
              background: 'rgba(0, 255, 255, 0.05)',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              color: '#ffffff',
              fontFamily: 'Source Code Pro, monospace',
              letterSpacing: '0.05em',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.1), 0 0 20px rgba(0, 255, 255, 0.2)'
            }}
          />
          <Link
            to="/passport"
            className="px-6 py-4 text-xs font-bold uppercase relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              color: '#000000',
              fontFamily: 'Source Code Pro, monospace',
              letterSpacing: '0.15em',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              border: '1px solid #00ffff',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            CREATE PASSPORT
          </Link>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
          style={{ 
            color: '#808080',
            fontFamily: 'Source Code Pro, monospace'
          }}
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
                  background: '#00ff00',
                  color: '#000000',
                  boxShadow: '0 0 15px rgba(0, 255, 0, 0.8)'
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
