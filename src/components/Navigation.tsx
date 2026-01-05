import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Experiences', path: '/experiences' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Creators', path: '/creators' },
    { name: 'Foundation', path: '/foundation' },
    { name: 'Developers', path: 'https://aethexdev.com', external: true }
  ];

  return (
    <motion.nav 
      className="glass-panel sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        borderBottom: '1px solid var(--border-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            style={{ textDecoration: 'none' }}
          >
            <motion.div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-bold text-lg">Æ</span>
            </motion.div>
            <span 
              className="text-xl font-bold transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              AeThex
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors relative group"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  {link.name}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: 'var(--accent-purple)' }}
                  />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium transition-colors relative group"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  {link.name}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: 'var(--accent-purple)' }}
                  />
                </Link>
              )
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://aethex.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ 
                padding: '0.5rem 1.25rem',
                fontSize: '0.875rem',
                textDecoration: 'none'
              }}
            >
              Download OS
            </a>
            <Link 
              to="/passport" 
              className="btn-primary"
              style={{ 
                padding: '0.5rem 1.25rem',
                fontSize: '0.875rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>Get Passport</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--text-primary)' }}
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
            className="md:hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderTop: '1px solid var(--border-primary)'
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm font-medium"
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block py-2 text-sm font-medium"
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="https://aethex.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary block text-center"
                  style={{ 
                    padding: '0.75rem',
                    fontSize: '0.875rem',
                    textDecoration: 'none'
                  }}
                >
                  Download OS
                </a>
                <Link 
                  to="/passport" 
                  className="btn-primary block text-center"
                  style={{ 
                    padding: '0.75rem',
                    fontSize: '0.875rem',
                    textDecoration: 'none'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Passport
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
