import React from 'react';

const PassportCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-6">🎫</div>
        <h2 className="text-5xl font-bold mb-6">
          Get Your AeThex Passport
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          One account to rule them all. Create your Passport and start building 
          your cross-platform identity today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur"
          />
          <button className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-100 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Create Passport
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free forever
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No credit card
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Instant access
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Own your data
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassportCTA;
