import React from 'react';

const FoundationPreview: React.FC = () => {
  return (
    <section className="bg-white py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                THE FOUNDATION
              </span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Built by the Community,<br />
              For the Community
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              AeThex is governed by those who use it. The Foundation gives 
              players, creators, and developers a voice in shaping the future 
              of the ecosystem.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Vote on ecosystem decisions',
                'Propose new features and games',
                'Transparent governance process',
                'Community-driven development'
              ].map((item) => (
                <li key={item} className="flex items-start text-slate-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://aethex.foundation" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-semibold">
              Learn About the Foundation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Active Proposals</h3>
              <div className="space-y-4">
                {[
                  { title: 'Cross-game achievement system', votes: '89%', status: 'Active' },
                  { title: 'New creator revenue model', votes: '76%', status: 'Active' },
                  { title: 'Mobile app development', votes: '92%', status: 'Passed' }
                ].map((proposal) => (
                  <div key={proposal.title} className="bg-white/10 rounded-lg p-4 backdrop-blur">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm">{proposal.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        proposal.status === 'Passed' 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {proposal.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-blue-500 h-full rounded-full" 
                          style={{ width: proposal.votes }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono">{proposal.votes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationPreview;
