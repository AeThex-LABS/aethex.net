import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors">
              AeThex
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/experiences" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Experiences
            </Link>
            <Link to="/ecosystem" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Ecosystem
            </Link>
            <Link to="/creators" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Creators
            </Link>
            <Link to="/foundation" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Foundation
            </Link>
            <a href="https://aethex.cloud" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Developers
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/passport" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Sign In
            </Link>
            <Link to="/passport" className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold">
              Get Passport
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
