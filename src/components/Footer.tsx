import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'Experiences', to: '/experiences' },
      { label: 'Passport', to: '/passport' },
      { label: 'Ecosystem', to: '/ecosystem' },
      { label: 'Creators', to: '/creators' }
    ],
    developers: [
      { label: 'Documentation', to: 'https://aethex.dev', external: true },
      { label: 'API Reference', to: 'https://aethex.dev/api', external: true },
      { label: 'SDKs & Tools', to: 'https://aethex.dev/sdks', external: true },
      { label: 'Status', to: '/status' }
    ],
    company: [
      { label: 'Foundation', to: '/foundation' },
      { label: 'Developers', to: '/developers' },
      { label: 'Contact', to: 'mailto:hello@aethex.net', external: true }
    ],
    community: [
      { label: 'Discord', to: '#', external: true },
      { label: 'Twitter', to: '#', external: true },
      { label: 'GitHub', to: '#', external: true }
    ]
  };

  return (
    <footer 
      className="relative overflow-hidden border-t"
      style={{ 
        backgroundColor: '#000000',
        borderColor: 'rgba(0, 255, 255, 0.3)',
        boxShadow: '0 -2px 40px rgba(0, 255, 255, 0.1)'
      }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 flex items-center justify-center font-bold text-xl"
                style={{
                  background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                  color: '#000000',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
                }}
              >
                <span>Æ</span>
              </div>
              <h3 
                className="text-2xl font-bold uppercase"
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.1em'
                }}
              >
                AeThex
              </h3>
            </div>
            
            <p 
              className="text-sm leading-relaxed mb-6"
              style={{ 
                color: '#a0a0a0',
                fontFamily: 'Source Code Pro, monospace'
              }}
            >
              Where the Universe Meets You.
              <br />
              One identity. Infinite worlds.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z', href: '#' },
                { icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z', href: '#' },
                { icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', href: '#' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 255, 255, 0.05)',
                    color: '#00ffff',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (colIndex + 1) }}
            >
              <h4 
                className="text-xs font-semibold mb-4 uppercase tracking-wider"
                style={{ 
                  color: '#00ffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.15em'
                }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('http') || link.to.startsWith('mailto:') ? (
                      <a 
                        href={link.to}
                        target={link.to.startsWith('http') ? '_blank' : undefined}
                        rel={link.to.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm transition-colors inline-flex items-center gap-1 group"
                        style={{ 
                          color: '#a0a0a0',
                          fontFamily: 'Source Code Pro, monospace'
                        }}
                      >
                        <span className="group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                        {link.to.startsWith('http') && link.to !== 'mailto:hello@aethex.net' && (
                          <span className="text-xs" style={{ color: '#00ffff' }}>→</span>
                        )}
                      </a>
                    ) : (
                      <Link 
                        to={link.to}
                        className="text-sm transition-colors hover:text-white"
                        style={{ 
                          color: '#a0a0a0',
                          fontFamily: 'Source Code Pro, monospace'
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4"
          style={{ 
            borderTop: '1px solid rgba(0, 255, 255, 0.2)',
            color: '#a0a0a0',
            fontFamily: 'Source Code Pro, monospace'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© 2026 AeThex. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <p>Made with <span style={{ color: '#ff00ff' }}>❤️</span> for the multiverse</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
