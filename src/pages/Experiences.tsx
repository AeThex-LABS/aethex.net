import React from 'react';
import { motion } from 'framer-motion';
import FeaturedExperiences from '../components/FeaturedExperiences';

const Experiences: React.FC = () => {
  const allExperiences = [
    {
      title: 'Puzzle Nexus',
      description: 'Collaborative puzzle solving across platforms. Solutions discovered in one game unlock content in others.',
      image: '🧩',
      players: '19K',
      platform: 'Web',
      status: 'Live',
      color: '#00ffff'
    },
    {
      title: 'Rhythm Realms',
      description: 'Music-based gameplay where your rhythm skills translate to universal scores and achievements.',
      image: '🎵',
      players: '15K',
      platform: 'Mobile',
      status: 'Live',
      color: '#ff00ff'
    },
    {
      title: 'Neural Network',
      description: 'Hack your way through cyberspace. Your hacking skills persist across all network experiences.',
      image: '🔐',
      players: '22K',
      platform: 'PC',
      status: 'Live',
      color: '#00ff00'
    },
    {
      title: 'Void Runners',
      description: 'Parkour through neon cityscapes. Your best times and unlocked routes sync everywhere.',
      image: '🏃',
      players: '31K',
      platform: 'Multi',
      status: 'Live',
      color: '#00ffff'
    },
    {
      title: 'Data Breach',
      description: 'Competitive hacking tournaments where victories earn governance tokens and platform influence.',
      image: '💻',
      players: 'TBA',
      platform: 'Web',
      status: 'Coming Soon',
      color: '#ff00ff'
    },
    {
      title: 'Neon Racers',
      description: 'High-speed racing through cyberpunk streets. Your garage and upgrades follow you across platforms.',
      image: '🏎️',
      players: '27K',
      platform: 'Multi',
      status: 'Live',
      color: '#00ff00'
    },
  ];

  const categories = ['All', 'Action', 'Strategy', 'PvP', 'Adventure', 'Puzzle', 'Music'];

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden" style={{ backgroundColor: '#000000', paddingTop: '80px' }}>
        {/* Grid background */}
        <div className="absolute inset-0 opacity-15">
          <div style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff, #00ff00)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            EXPLORE EXPERIENCES
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ 
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover games and apps built on AeThex. Your progress and identity persist across everything.
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              className="px-6 py-3 text-xs font-bold uppercase"
              style={{
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                color: '#000000',
                fontFamily: 'Source Code Pro, monospace',
                letterSpacing: '0.15em',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                border: '1px solid #00ffff',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              Get Passport to Play
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences */}
      <FeaturedExperiences />

      {/* Filters */}
      <section className="relative py-6 border-b" style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        borderColor: 'rgba(0, 255, 255, 0.3)',
        backdropFilter: 'blur(40px)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-xs font-bold uppercase whitespace-nowrap"
                style={{
                  background: 'rgba(0, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  color: '#00ffff',
                  fontFamily: 'Source Code Pro, monospace',
                  letterSpacing: '0.1em',
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Experiences Grid */}
      <section className="relative py-12">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold mb-8"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            MORE EXPERIENCES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allExperiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="group cursor-pointer overflow-hidden"
                style={{
                  background: 'rgba(0, 255, 255, 0.02)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="aspect-video flex items-center justify-center text-7xl"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}40, #000000)`
                  }}
                >
                  {exp.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2 py-1 uppercase"
                      style={{
                        backgroundColor: exp.status === 'Live' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(0, 255, 255, 0.1)',
                        color: exp.status === 'Live' ? '#00ff00' : '#00ffff',
                        border: `1px solid ${exp.status === 'Live' ? '#00ff00' : '#00ffff'}`,
                        boxShadow: `0 0 10px ${exp.status === 'Live' ? '#00ff00' : '#00ffff'}40`,
                        fontFamily: 'Source Code Pro, monospace',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {exp.status}
                    </span>
                    <span className="text-xs" style={{ 
                      color: '#808080',
                      fontFamily: 'Source Code Pro, monospace'
                    }}>
                      {exp.platform}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{
                      color: '#ffffff',
                      fontFamily: 'Electrolize, sans-serif',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2" style={{ 
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}>
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center text-sm pt-4 border-t" style={{ 
                    color: '#808080',
                    borderColor: 'rgba(0, 255, 255, 0.2)',
                    fontFamily: 'Source Code Pro, monospace'
                  }}>
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span style={{ color: exp.color, textShadow: `0 0 10px ${exp.color}` }}>{exp.players}</span>
                    {exp.status === 'Live' && <span className="ml-1"> playing</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
