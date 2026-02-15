import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      title: 'Hide and Seek Extreme',
      description: 'The classic game reimagined with persistent abilities and cross-platform play',
      image: '🎯',
      players: '45K',
      platform: 'Roblox',
      status: 'Live',
      color: '#00ffff'
    },
    {
      title: 'Cosmic Traders',
      description: 'Build your trading empire across the universe with real-time economy',
      image: '🚀',
      players: '32K',
      platform: 'Unity',
      status: 'Live',
      color: '#ff00ff'
    },
    {
      title: 'The Foundation Arena',
      description: 'Competitive battles where your victories shape governance power',
      image: '⚔️',
      players: '28K',
      platform: 'Web',
      status: 'Live',
      color: '#00ff00'
    },
    {
      title: 'Project Horizon',
      description: 'Open-world exploration with persistent discovery achievements',
      image: '🌅',
      players: 'TBA',
      platform: 'Multi',
      status: 'Coming Soon',
      color: '#00ffff'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4" style={{ 
            background: 'linear-gradient(135deg, #00ffff, #ff00ff, #00ff00)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 8s ease infinite',
            fontFamily: 'Electrolize, sans-serif',
            letterSpacing: '0.1em'
          }}>
            Featured Experiences
          </h2>
          <p className="text-xl" style={{ 
            color: '#a0a0a0',
            fontFamily: 'Source Code Pro, monospace'
          }}>
            Explore games built on the AeThex ecosystem
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="h-full overflow-hidden group cursor-pointer"
                style={{
                  background: 'rgba(0, 255, 255, 0.02)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image placeholder with emoji and neon gradient */}
                <div 
                  className="aspect-video flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}40, #000000)`
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {exp.image}
                  </motion.div>
                  
                  {/* Animated glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      boxShadow: `inset 0 0 60px ${exp.color}, 0 0 30px ${exp.color}`
                    }}
                  />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="text-xs font-bold px-2.5 py-1 uppercase"
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
                    <span className="text-xs font-mono" style={{ 
                      color: '#808080',
                      fontFamily: 'Source Code Pro, monospace'
                    }}>
                      {exp.platform}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-lg font-bold mb-2 transition-colors"
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
                  
                  <div className="flex items-center text-sm" style={{ 
                    color: '#808080',
                    fontFamily: 'Source Code Pro, monospace'
                  }}>
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span style={{ color: exp.color, textShadow: `0 0 10px ${exp.color}` }}>{exp.players}</span>
                    {exp.status === 'Live' && <span className="ml-1">playing</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/games"
            className="btn-primary inline-block"
          >
            View All Experiences →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
