import React from 'react';

const Experiences: React.FC = () => {
  const experiences = [
    {
      title: 'Hide and Seek Extreme',
      description: 'The classic game reimagined with persistent abilities and cross-platform play. Use your AeThex Passport to unlock unique seeker and hider classes.',
      image: '🎯',
      players: '45,283',
      platform: 'Roblox',
      status: 'Live',
      rating: 4.8,
      category: 'Action'
    },
    {
      title: 'Cosmic Traders',
      description: 'Build your trading empire across the universe. Real-time economy where your trades impact prices across all platforms.',
      image: '🚀',
      players: '32,156',
      platform: 'Unity',
      status: 'Live',
      rating: 4.6,
      category: 'Strategy'
    },
    {
      title: 'The Foundation Arena',
      description: 'Competitive battles where victories earn governance power. Fight to shape the future of AeThex.',
      image: '⚔️',
      players: '28,904',
      platform: 'Web',
      status: 'Live',
      rating: 4.7,
      category: 'PvP'
    },
    {
      title: 'Project Horizon',
      description: 'Open-world exploration with persistent discovery achievements. Uncover secrets across interconnected maps.',
      image: '🌅',
      players: 'Coming Soon',
      platform: 'Multi-Platform',
      status: 'Beta',
      rating: null,
      category: 'Adventure'
    },
    {
      title: 'Puzzle Nexus',
      description: 'Collaborative puzzle solving across platforms. Solutions discovered in one game unlock content in others.',
      image: '🧩',
      players: '19,432',
      platform: 'Web',
      status: 'Live',
      rating: 4.9,
      category: 'Puzzle'
    },
    {
      title: 'Rhythm Realms',
      description: 'Music-based gameplay where your rhythm skills translate to universal scores and achievements.',
      image: '🎵',
      players: '15,678',
      platform: 'Mobile',
      status: 'Live',
      rating: 4.5,
      category: 'Music'
    },
  ];

  const categories = ['All', 'Action', 'Strategy', 'PvP', 'Adventure', 'Puzzle', 'Music'];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Explore Experiences
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Discover games and apps built on AeThex. Your progress and identity persist across everything.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-100 transition-all font-semibold">
              Get Passport to Play
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-7xl">
                  {exp.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      exp.status === 'Live' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {exp.status}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{exp.platform}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-500">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {exp.players} {exp.status === 'Live' ? 'playing' : ''}
                    </div>
                    {exp.rating && (
                      <div className="flex items-center text-sm">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-slate-700 font-semibold">{exp.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
