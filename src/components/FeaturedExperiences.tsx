import React from 'react';

const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      title: 'Hide and Seek Extreme',
      description: 'The classic game reimagined with persistent abilities and cross-platform play',
      image: '🎯',
      players: '45K',
      platform: 'Roblox',
      status: 'Live'
    },
    {
      title: 'Cosmic Traders',
      description: 'Build your trading empire across the universe with real-time economy',
      image: '🚀',
      players: '32K',
      platform: 'Unity',
      status: 'Live'
    },
    {
      title: 'The Foundation Arena',
      description: 'Competitive battles where your victories shape governance power',
      image: '⚔️',
      players: '28K',
      platform: 'Web',
      status: 'Live'
    },
    {
      title: 'Project Horizon',
      description: 'Open-world exploration with persistent discovery achievements',
      image: '🌅',
      players: 'TBA',
      platform: 'Multi',
      status: 'Coming Soon'
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Featured Experiences
          </h2>
          <p className="text-xl text-slate-600">
            Explore games built on the AeThex ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Image placeholder with emoji */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl">
                {exp.image}
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    exp.status === 'Live' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {exp.status}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{exp.platform}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {exp.description}
                </p>
                
                <div className="flex items-center text-sm text-slate-500">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {exp.players} {exp.status === 'Live' ? 'playing' : ''}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors font-semibold">
            View All Experiences →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
