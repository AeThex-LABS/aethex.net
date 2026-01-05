import React from 'react';
import EcosystemMap from '../components/EcosystemMap';

const Ecosystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-slate-900 mb-6">
            The AeThex Ecosystem
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            A connected universe of platforms, each serving a different purpose in the multiverse.
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <EcosystemMap />

      {/* Domains Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            The AeThex Network
          </h2>
          
          {/* Consumer & Discovery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Consumer & Discovery
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">aethex.net</h4>
                <p className="text-slate-600 mb-4">
                  <strong>The Gateway</strong> - Consumer portal for players and creators
                </p>
                <span className="inline-block text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">Current Site</span>
              </div>
            </div>
          </div>

          {/* Infrastructure & Development */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Infrastructure & Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">☁️</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.cloud</h4>
                <p className="text-slate-600 text-sm mb-4">
                  B2B SaaS APIs & infrastructure sales
                </p>
                <a href="https://aethex.cloud" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.inc</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Enterprise solutions & contracts
                </p>
                <a href="https://aethex.inc" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">👨‍💻</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.dev</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Developer portal & technical documentation
                </p>
                <a href="https://aethex.dev" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.tech</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Integration guides & SDK documentation
                </p>
                <a href="https://aethex.tech" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>
            </div>
          </div>

          {/* Governance & Philosophy */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Governance & Philosophy
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.foundation</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Community governance - The Soul, The Foundation
                </p>
                <a href="https://aethex.foundation" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">ℹ️</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.info</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Vision, lore, mythology, corporate info, investor relations, press, careers
                </p>
                <a href="https://aethex.info" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🔗</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.network</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Ecosystem connections & interoperability showcase
                </p>
                <a href="https://aethex.network" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>
            </div>
          </div>

          {/* Creator & Community Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Creator & Community Tools
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🧪</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.studio</h4>
                <p className="text-slate-600 text-sm mb-4">
                  The Labs - Experimental features & innovation hub
                </p>
                <a href="https://aethex.studio" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.app</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Mobile/desktop AeThex Passport client
                </p>
                <a href="https://aethex.app" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.space</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Community spaces, forums, social hub
                </p>
                <a href="https://aethex.space" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🔐</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.locker</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Asset storage & inventory management
                </p>
                <a href="https://aethex.locker" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>
            </div>
          </div>

          {/* Utility & Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Utility & Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">👤</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.me</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Personal profile pages (user.aethex.me)
                </p>
                <a href="https://aethex.me" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Visit →
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">❓</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.sbs</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Purpose TBD
                </p>
                <span className="text-slate-400 text-xs">Coming Soon</span>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">aethex.site</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Purpose TBD - potentially redirect to aethex.net
                </p>
                <span className="text-slate-400 text-xs">Coming Soon</span>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">📝</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">waitlist.aethex</h4>
                <p className="text-slate-600 text-sm mb-4">
                  Centralized waitlist for all AeThex products
                </p>
                <a href="https://waitlist.aethex" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Join Waitlist →
                </a>
              </div>
            </div>
          </div>

          {/* Monitoring & Status */}
          <div className="mb-0">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              Monitoring & Status
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">status.aethex.net</h4>
                <p className="text-slate-600 text-sm mb-4">
                  System status dashboard
                </p>
                <a href="/status" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View Status →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
