import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GameController, PaintBrush, Lightning, Bank, Code, Pulse } from '@phosphor-icons/react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Experiences', path: '/experiences', icon: GameController },
    { name: 'Ecosystem', path: '/ecosystem', icon: Lightning },
    { name: 'Creators', path: '/creators', icon: PaintBrush },
    { name: 'Foundation', path: '/foundation', icon: Bank },
    { name: 'Developers', path: 'https://aethexdev.com', external: true, icon: Code }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(40px) saturate(180%)',
        borderBottom: '1px solid rgba(0, 255, 255, 0.3)',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), 0 0 60px rgba(255, 0, 255, 0.1), inset 0 1px 0 rgba(0, 255, 255, 0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 255, 0.1) 1px, rgba(0, 255, 255, 0.1) 2px)',
        }}
      />
      
      {/* Moving scanline */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 1), rgba(255, 0, 255, 0.8), rgba(0, 255, 255, 1), transparent)',
          boxShadow: '0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(255, 0, 255, 0.8)'
        }}
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Data stream particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-16"
            style={{
              left: `${10 + i * 20}%`,
              background: 'linear-gradient(180deg, transparent, rgba(0, 255, 255, 0.8), rgba(255, 0, 255, 0.6), transparent)',
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
            }}
            animate={{ y: ['-100%', '100vh'] }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Neon border trail */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ffff 20%, #ff00ff 50%, #00ffff 80%, transparent)',
          boxShadow: '0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(255, 0, 255, 0.8)'
        }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Top highlight */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.6), transparent)',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 z-10">
            <motion.div
              className="relative w-12 h-12 flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                border: '2px solid',
                borderImage: 'linear-gradient(135deg, #00ffff, #ff00ff) 1',
                boxShadow: `
                  0 0 30px rgba(0, 255, 255, 0.6),
                  0 0 60px rgba(255, 0, 255, 0.4),
                  inset 0 0 30px rgba(0, 255, 255, 0.2),
                  inset 0 0 10px rgba(255, 0, 255, 0.3)
                `,
                position: 'relative'
              }}
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated corner highlights */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(45deg, transparent 40%, rgba(0, 255, 255, 0.4) 50%, transparent 60%)',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <span 
                className="relative font-bold text-2xl z-10"
                style={{ 
                  fontFamily: 'Electrolize, sans-serif',
                  color: '#00ffff',
                  textShadow: `
                    0 0 10px rgba(0, 255, 255, 1),
                    0 0 20px rgba(0, 255, 255, 0.8),
                    0 0 30px rgba(255, 0, 255, 0.6)
                  `,
                  filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.8))'
                }}
              >
                Æ
              </span>
            </motion.div>
            <div className="flex flex-col">
              <span 
                className="text-2xl font-bold transition-colors leading-none tracking-wider"
                style={{ 
                  fontFamily: 'Electrolize, sans-serif',
                  color: '#00ffff',
                  textShadow: `
                    0 0 10px rgba(0, 255, 255, 0.8),
                    0 0 20px rgba(0, 255, 255, 0.5),
                    0 0 30px rgba(255, 0, 255, 0.3)
                  `,
                  filter: 'drop-shadow(0 0 3px rgba(0, 255, 255, 0.6))'
                }}
              >
                AETHEX
              </span>
              <span 
                className="text-xs font-semibold leading-none mt-1 tracking-widest"
                style={{ 
                  fontFamily: 'Source Code Pro, monospace',
                  color: '#ff00ff',
                  textShadow: `
                    0 0 10px rgba(255, 0, 255, 1),
                    0 0 20px rgba(255, 0, 255, 0.6)
                  `,
                  filter: 'drop-shadow(0 0 3px rgba(255, 0, 255, 0.8))'
                }}
              >
                PROTOCOL
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 relative z-10">
            {navLinks.map((link) => {
              const isActive = !link.external && location.pathname === link.path;
              const Icon = link.icon;
              return link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener nSource Code Pro, monospace',
                    letterSpacing: '0.05em',
                    fontWeight: isActive ? '600' : '400',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                    border: isActive ? '1px solid #00ffff' : '1px solid rgba(0, 255, 255, 0.3)',
                    background: isActive ? 'rgba(0, 255, 255, 0.15)' : 'rgba(0, 255, 255, 0.05)',
                    textShadow: isActive ? '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.6)' : 'none',
                    boxShadow: isActive ? '0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2)' : 'inset 0 0 10px rgba(0, 255, 255, 0.1)
                    letterSpacing: '0.05em',
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                    border: '1px solid rgba(0, 255, 255, 0.2)',
                    background: 'rgba(0, 255, 255, 0.03)'
                  }}
                >5)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), inset 0 0 10px rgba(0, 255, 255, 0.3)'
                    }}
                  />
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1"
                      style={{ 
                        background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
                        boxShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(255, 0, 255, 0.6
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-xs font-medium transition-all relative group flex items-center gap-2"
                  style={{ 
                    color: isActive ? '#00ffff' : '#a0a0a0',
                    textDecoration: 'none',
                    fontFamily: 'Source Code Pro, monospace',
                    letterSpacing: '0.05em',
                    fontWeight: isActive ? '600' : '400',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                    border: isActive ? '1px solid #00ffff' : '1px solid rgba(0, 255, 255, 0.3)',
                    background: isActive ? 'rgba(0, 255, 255, 0.15)' : 'rgba(0, 255, 255, 0.05)',
                    textShadow: isActive ? '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.6)' : 'none',
                    boxShadow: isActive ? '0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2)' : 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                  }}
              style={{
                fontFamily: 'Source Code Pro, monospace',
                fontWeight: '600',
                background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.05))',
                border: '1px solid rgba(0, 255, 0, 0.5)',
                clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
                color: '#00ff00',
                letterSpacing: '0.1em',
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 10px rgba(0, 255, 0, 0.1)',
                textShadow: '0 0 10px rgba(0, 255, 0, 0.8)e inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ 
                      background: 'rgba(0, 255, 255, 0.1)',
                      boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                    }}
                  />
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-0.5 left-0 right-0 h-px"
                      style={linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))',
                border: '2px solid #ff00ff',
                color: '#ff00ff',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                fontFamily: 'Source Code Pro, monospace',
                letterSpacing: '0.15em',
                fontWeight: '700',
                textShadow: '0 0 10px rgba(255, 0, 255, 1), 0 0 20px rgba(255, 0, 255, 0.6)',
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.4), inset 0 0 10px rgba(255, 0, 255, 0.2)',
                cursor: 'pointer'
              }}
              whileHover={{ 
                boxShadow: '0 0 40px rgba(255, 0, 255, 0.8), inset 0 0 20px rgba(255, 0, 255, 0.4
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 relative z-10">
            {/* Tech status */}
            <div 
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono"
              style={{
                background: 'rgba(0, 255, 0, 0.05)',
                border: '1px solid rgba(0, 255, 0, 0.3)',
                clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
                color: '#00ff00',
                letterSpacing: '0.05em'3), rgba(255, 0, 255, 0.3))',
                  border: '2px solid #00ffff',
                  color: '#00ffff',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  fontFamily: 'Source Code Pro, monospace',
                  letterSpacing: '0.15em',
                  fontWeight: '700',
                  textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.6)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.2

            <motion.button
              onClick={() => window.open('https://aethex.app', '_blank')}
              className="px-4 py-2 text-xs font-bold relative overflow-hidden"
              style={{
                background: 'rgba(255, 0, 255, 0.1)',
                border: '1px solid #ff00ff',
                color: '#ff00ff',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                textShadow: '0 0 10px rgba(255, 0, 255, 0.8)',
                cursor: 'pointer'
              }}
              whileHover={{ 
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.6), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              LAUNCH APP
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/passport" 
                className="px-4 py-2 text-xs font-bold relative overflow-hidden block"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))',
                  border: '1px solid #00ffff',
                  color: '#00ffff',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
                  textDecoration: 'none'
                }}
              >
                INITIALIZE →
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 transition-colors relative z-10"
            style={{ 
              color: '#00ffff',
              border: '1px solid rgba(0, 255, 255, 0.3)'
            }}
            onClick={() => setMobileMenuOpen(! mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(40px) saturate(180%)',
              borderColor: 'rgba(0, 255, 255, 0.3)',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), inset 0 10px 20px rgba(0, 255, 255, 0.1)'
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link) => {
                const isActive = !link.external && location.pathname === link.path;
                const Icon = link.icon;
                return link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-medium transition-colors flex items-center gap-3"
                    style={{ 
                      color: '#a0a0a0',
                      textDecoration: 'none',
                      backgroundColor: 'rgba(0, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                      fontFamily: 'Source Code Pro, monospace',
                      letterSpacing: '0.05em',
                      boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={16} weight="duotone" />
                    {link.name.toUpperCase()}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-sm font-medium transition-colors flex items-center gap-3"
                    style={{ 
                      color: isActive ? '#00ffff' : '#a0a0a0',
                      textDecoration: 'none',
                      backgroundColor: isActive ? 'rgba(0, 255, 255, 0.15)' : 'rgba(0, 255, 255, 0.05)',
                      border: isActive ? '1px solid #00ffff' : '1px solid rgba(0, 255, 255, 0.3)',
                      fontFamily: 'Source Code Pro, monospace',
                      letterSpacing: '0.05em',
                      fontWeight: isActive ? '600' : '400',
                      textShadow: isActive ? '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.6)' : 'none',
                      boxShadow: isActive ? '0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2)' : 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={16} weight={isActive ? 'fill' : 'duotone'} />
                    {link.name.toUpperCase()}
                  </Link>
                );
              })}
              
              <div className="pt-4 space-y-2 border-t" style={{ borderColor: 'rgba(0, 255, 255, 0.2)' }}>
                <motion.button
                  onClick={() => {
                    window.open('https://aethex.app', '_blank');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-sm font-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))',
                    border: '2px solid #ff00ff',
                    color: '#ff00ff',
                    fontFamily: 'Source Code Pro, monospace',
                    letterSpacing: '0.15em',
                    fontWeight: '700',
                    cursor: 'pointer',
                    textShadow: '0 0 10px rgba(255, 0, 255, 1), 0 0 20px rgba(255, 0, 255, 0.6)',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.4), inset 0 0 10px rgba(255, 0, 255, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  LAUNCH APP
                </motion.button>
                <Link 
                  to="/passport"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    className="w-full px-4 py-3 text-sm font-bold text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.3))',
                      border: '2px solid #00ffff',
                      color: '#00ffff',
                      fontFamily: 'Source Code Pro, monospace',
                      letterSpacing: '0.15em',
                      fontWeight: '700',
                      textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.6)',
                      boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    INITIALIZE →
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
