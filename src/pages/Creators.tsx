import React from 'react';

const Creators: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎨</div>
          <h1 className="text-6xl font-bold mb-6">
            Creator Portal
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Build experiences, sell assets, and monetize your creativity in the AeThex ecosystem.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Creator Tools
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No-Code Builder</h3>
              <p className="text-slate-600 mb-6">
                Create games and experiences without writing code. Drag-and-drop interface with AeThex integration built-in.
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                Start Building →
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Asset Marketplace</h3>
              <p className="text-slate-600 mb-6">
                Sell 3D models, textures, sound effects, and game logic to other creators. Earn on every sale.
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                Browse Marketplace →
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Analytics Dashboard</h3>
              <p className="text-slate-600 mb-6">
                Track player engagement, revenue, and performance across all your experiences in one place.
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                View Analytics →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Multiple Ways to Earn
              </h2>
              <ul className="space-y-4">
                {[
                  { title: 'In-Game Purchases', desc: '70% revenue share on all transactions' },
                  { title: 'Subscriptions', desc: 'Recurring revenue from premium features' },
                  { title: 'Asset Sales', desc: 'Sell your creations in the marketplace' },
                  { title: 'Sponsorships', desc: 'Partner with brands for integrated content' },
                  { title: 'Tips & Donations', desc: 'Direct support from your community' }
                ].map((item) => (
                  <li key={item.title} className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Creator Success Stories</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-slate-600 mb-2">
                    "I made $15K in my first month selling custom avatars in the marketplace."
                  </p>
                  <p className="text-xs text-slate-500">— Sarah K., 3D Artist</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-slate-600 mb-2">
                    "The no-code builder let me prototype my game in 2 days instead of 2 months."
                  </p>
                  <p className="text-xs text-slate-500">— Marcus T., Game Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of creators building the future of gaming.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-semibold text-lg">
            Get Creator Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default Creators;
