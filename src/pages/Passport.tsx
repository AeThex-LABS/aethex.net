import React from 'react';

const Passport: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">🎫</div>
          <h1 className="text-6xl font-bold mb-6">
            AeThex Passport
          </h1>
          <p className="text-2xl text-slate-300 mb-12">
            One identity across the entire multiverse.<br />
            Your progress, achievements, and assets follow you everywhere.
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Your Passport</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Choose your handle"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-lg"
            >
              Create Passport
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Already have a Passport? <a href="#" className="text-white hover:underline">Sign in</a>
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl mb-3">🔐</div>
            <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
            <p className="text-sm text-slate-400">
              Your data is encrypted and you control who sees what
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-lg font-semibold mb-2">Universal</h3>
            <p className="text-sm text-slate-400">
              Works across Roblox, Unity, Web, and mobile platforms
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💎</div>
            <h3 className="text-lg font-semibold mb-2">You Own It</h3>
            <p className="text-sm text-slate-400">
              Your achievements and items are truly yours
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6">What You Get</h3>
          <ul className="space-y-4">
            {[
              'Unified player profile across all AeThex games',
              'Persistent inventory and achievements',
              'Cross-platform progression tracking',
              'Governance voting power in the Foundation',
              'Early access to new experiences',
              'Creator tools and asset marketplace access',
              'Community badges and recognition',
              'Priority support and updates'
            ].map((benefit) => (
              <li key={benefit} className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Passport;
