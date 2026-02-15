import React from 'react';
import { motion } from 'framer-motion';
import { GameController, Lightning, Target, Globe, Cube } from '@phosphor-icons/react';

const TrustBar: React.FC = () => {
  const platforms = [
    { name: 'Roblox', icon: GameController },
    { name: 'Fortnite (UEFN)', icon: Lightning },
    { name: 'Core', icon: Target },
    { name: 'Web3', icon: Globe },
    { name: 'Unity', icon: Cube },
  ];

  return (
    <section 
      className="relative py-12 border-y"
      style={{ 
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p 
            className="text-sm font-semibold uppercase tracking-wider mb-8"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Platform Partners & Integrations
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                <platform.icon size={24} weight="duotone" style={{ color: 'var(--accent-purple)' }} />
                <span 
                  className="font-semibold text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-8 text-sm"
            style={{ color: 'var(--text-tertiary)' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>All Systems Operational</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border-primary" />
            <span className="hidden sm:inline">99.9% Uptime</span>
            <div className="hidden sm:block w-px h-4 bg-border-primary" />
            <span className="hidden sm:inline">SOC 2 Compliant</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
