import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  return (
    <nav className="glass-panel sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold transition-colors" style={{ color: `rgb(var(--text-primary))` }}>
              AeThex
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/experiences" className="text-sm transition-colors hover:text-blue-500" style={{ color: `rgb(var(--text-secondary))` }}>
              Experiences
            </Link>
            <Link to="/ecosystem" className="text-sm transition-colors hover:text-blue-500" style={{ color: `rgb(var(--text-secondary))` }}>
              Ecosystem
            </Link>
            <Link to="/creators" className="text-sm transition-colors hover:text-blue-500" style={{ color: `rgb(var(--text-secondary))` }}>
              Creators
            </Link>
            <Link to="/foundation" className="text-sm transition-colors hover:text-blue-500" style={{ color: `rgb(var(--text-secondary))` }}>
              Foundation
            </Link>
            <a href="https://aethex.cloud" className="text-sm transition-colors hover:text-blue-500" style={{ color: `rgb(var(--text-secondary))` }}>
              Developers
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/passport" className="hidden md:block text-sm transition-colors hover:text-blue-500" style={{ color: `rgb(var(--text-secondary))` }}>
              Sign In
            </Link>
            <Link to="/passport" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
              Get Passport
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
