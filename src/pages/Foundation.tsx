import React from 'react';
import FoundationPreview from '../components/FoundationPreview';

const Foundation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <FoundationPreview />
      
      {/* Additional Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Want to Get Involved?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            The Foundation has its own dedicated platform for governance, proposals, and community decision-making.
          </p>
          <a
            href="https://aethex.foundation"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-semibold text-lg"
          >
            Visit aethex.foundation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Foundation;
