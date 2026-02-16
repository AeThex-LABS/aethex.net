import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { House, GameController, Globe, Hammer, Pulse } from '@phosphor-icons/react';

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: House },
    { name: 'Experiences', path: '/experiences', icon: GameController },
    { name: 'Ecosystem', path: '/ecosystem', icon: Globe },
    { name: 'Build', path: '/build', icon: Hammer }
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

      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 h-16 xs:h-18 sm:h-20 3xl:h-22 4xl:h-24">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 xs:gap-3 sm:gap-4 z-10">
            <motion.div
              className="relative w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 3xl:w-14 3xl:h-14 4xl:w-16 4xl:h-16 flex items-center justify-center overflow-hidden"
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
                className="relative font-bold text-base xs:text-lg sm:text-xl md:text-2xl 3xl:text-3xl 4xl:text-4xl z-10"
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
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold transition-colors leading-none tracking-wider"
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
                className="text-[0.5rem] xs:text-[0.6rem] sm:text-xs md:text-xs lg:text-xs 3xl:text-sm 4xl:text-base font-semibold leading-none mt-0.5 xs:mt-1 tracking-widest"
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
          <div className="hidden lg:flex items-center gap-6 relative z-10 ml-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
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
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ 
                      background: 'rgba(0, 255, 255, 0.15)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), inset 0 0 10px rgba(0, 255, 255, 0.3)'
                    }}
                  />
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1"
                      style={{ 
                        background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
                        boxShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(255, 0, 255, 0.6)'
                      }}
                      layoutId="activeTab"
                    />
                  )}
                  <Icon size={16} weight={isActive ? 'fill' : 'duotone'} className="relative z-10" />
                  <span className="relative z-10">{link.name.toUpperCase()}</span>
                </Link>
              );
            })}
            
            <div 
              className="flex items-center gap-2 px-3 py-2 text-xs"
              style={{
                fontFamily: 'Source Code Pro, monospace',
                fontWeight: '600',
                background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.05))',
                border: '1px solid rgba(0, 255, 0, 0.5)',
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                color: '#00ff00',
                letterSpacing: '0.1em',
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 10px rgba(0, 255, 0, 0.1)',
                textShadow: '0 0 10px rgba(0, 255, 0, 0.8)'
              }}
            >
              <Pulse size={16} weight="fill" style={{ color: '#00ff00' }} />
              ONLINE | 38ms
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 3xl:gap-4 relative z-10">
            <motion.button
              onClick={() => window.open('https://aethex.app', '_blank')}
              className="px-3 py-2 text-xs font-bold relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))',
                border: '2px solid #ff00ff',
                color: '#ff00ff',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                fontFamily: 'Source Code Pro, monospace',
                letterSpacing: '0.15em',
                fontWeight: '700',
                textShadow: '0 0 10px rgba(255, 0, 255, 1), 0 0 20px rgba(255, 0, 255, 0.6)',
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.4), inset 0 0 10px rgba(255, 0, 255, 0.2)',
                cursor: 'pointer'
              }}
              whileHover={{ 
                boxShadow: '0 0 40px rgba(255, 0, 255, 0.8), inset 0 0 20px rgba(255, 0, 255, 0.4)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              LAUNCH APP
            </motion.button>
            <Link to="/passport" style={{ textDecoration: 'none' }}>
              <motion.div
                className="px-3 py-2 text-xs font-bold relative overflow-hidden block"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.3))',
                  border: '2px solid #00ffff',
                  color: '#00ffff',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  fontFamily: 'Source Code Pro, monospace',
                  letterSpacing: '0.15em',
                  fontWeight: '700',
                  textShadow: '0 0 10px rgba(0, 255, 255, 1), 0 0 20px rgba(0, 255, 255, 0.6)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.2)',
                  textDecoration: 'none'
                }}
                whileHover={{ 
                  boxShadow: '0 0 50px rgba(0, 255, 255, 1), inset 0 0 30px rgba(0, 255, 255, 0.4)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                INITIALIZE →
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1.5 xs:p-2 relative z-10"
            style={{ color: '#00ffff' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors"
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
