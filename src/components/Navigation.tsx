import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">AeThex</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Docs
            </a>
            <a href="#status" className="text-gray-600 hover:text-gray-900 transition-colors">
              Status
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
