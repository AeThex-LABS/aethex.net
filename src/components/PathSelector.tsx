import React from 'react';

const PathSelector: React.FC = () => {
  const paths = [
    {
      title: 'Play',
      description: 'Discover experiences across the AeThex ecosystem',
      icon: '🎮',
      features: [
        'One account, all games',
        'Persistent progress',
        'Cross-platform achievements',
        'Universal inventory'
      ],
      cta: 'Browse Games',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Create',
      description: 'Build experiences and join the creator community',
      icon: '🎨',
      features: [
        'No-code creator tools',
        'Asset marketplace',
        'Community showcases',
        'Creator monetization'
      ],
      cta: 'Start Creating',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Build',
      description: 'Integrate AeThex infrastructure into your game',
      icon: '⚡',
      features: [
        'Cross-platform APIs',
        'Unified player identity',
        'Real-time state sync',
        'Enterprise infrastructure'
      ],
      cta: 'View Developer Docs',
      gradient: 'from-orange-500 to-red-500',
      external: 'https://aethex.cloud'
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-slate-600">
            Whether you're here to play, create, or build — we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paths.map((path) => (
            <div
              key={path.title}
              className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-xl"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
              
              <div className="relative">
                <div className="text-5xl mb-4">{path.icon}</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  {path.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {path.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {path.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-slate-700">
                      <svg className="w-5 h-5 text-slate-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r ${path.gradient} text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all`}>
                  {path.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathSelector;
