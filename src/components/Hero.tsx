import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Build faster with AeThex
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A powerful API platform for developers. Deploy, scale, and monitor your applications
          with enterprise-grade infrastructure.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Get Started
          </button>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            View Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
