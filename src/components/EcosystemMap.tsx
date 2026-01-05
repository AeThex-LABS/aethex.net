import React from 'react';

const EcosystemMap: React.FC = () => {
  const nodes = [
    { name: 'Roblox Games', position: 'top-1/4 left-1/4', color: 'bg-blue-500' },
    { name: 'Unity Games', position: 'top-1/4 right-1/4', color: 'bg-purple-500' },
    { name: 'Web Apps', position: 'bottom-1/4 left-1/4', color: 'bg-green-500' },
    { name: 'Mobile', position: 'bottom-1/4 right-1/4', color: 'bg-orange-500' },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            The Connected Ecosystem
          </h2>
          <p className="text-xl text-slate-400">
            Your identity and progress flow seamlessly across all platforms
          </p>
        </div>

        {/* Interactive Map Visualization */}
        <div className="relative aspect-video bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden backdrop-blur">
          {/* Center node - AeThex Passport */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-white to-slate-300 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <div className="text-center">
                  <div className="text-3xl mb-1">🎫</div>
                  <div className="text-xs font-bold text-slate-900">AeThex<br/>Passport</div>
                </div>
              </div>
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
            </div>
          </div>

          {/* Connected nodes */}
          {nodes.map((node, i) => (
            <div key={i} className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2`}>
              <div className="relative">
                <div className={`w-20 h-20 ${node.color} rounded-full flex items-center justify-center shadow-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}>
                  <span className="text-xs font-semibold text-white text-center px-2">{node.name}</span>
                </div>
                {/* Connection line to center */}
                <svg className="absolute top-1/2 left-1/2 w-screen h-screen pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
                  <line x1="50%" y1="50%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-3">🔐</div>
            <h3 className="text-lg font-semibold mb-2">One Identity</h3>
            <p className="text-sm text-slate-400">
              Single account works everywhere in the ecosystem
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Persistent Progress</h3>
            <p className="text-sm text-slate-400">
              Achievements, inventory, and stats follow you
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Sync</h3>
            <p className="text-sm text-slate-400">
              Changes in one game instantly reflect everywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemMap;
