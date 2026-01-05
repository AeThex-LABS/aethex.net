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
      color: 'var(--accent-blue)'
    },
    {
      title: 'Cosmic Traders',
      description: 'Build your trading empire across the universe with real-time economy',
      image: '🚀',
      players: '32K',
      platform: 'Unity',
      status: 'Live',
      color: 'var(--accent-purple)'
    },
    {
      title: 'The Foundation Arena',
      description: 'Competitive battles where your victories shape governance power',
      image: '⚔️',
      players: '28K',
      platform: 'Web',
      status: 'Live',
      color: 'var(--accent-pink)'
    },
    {
      title: 'Project Horizon',
      description: 'Open-world exploration with persistent discovery achievements',
      image: '🌅',
      players: 'TBA',
      platform: 'Multi',
      status: 'Coming Soon',
      color: 'var(--accent-teal)'
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Subtle cosmic gradient overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, var(--accent-purple), transparent 70%)'
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
            background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue), var(--accent-teal))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 8s ease infinite'
          }}>
            Featured Experiences
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
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
              <div className="glass-panel h-full overflow-hidden group cursor-pointer">
                {/* Image placeholder with emoji and cosmic gradient */}
                <div 
                  className="aspect-video flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}, var(--bg-tertiary))`
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
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${exp.color}, transparent 70%)`
                    }}
                  />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: exp.status === 'Live' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                        color: exp.status === 'Live' ? '#22c55e' : 'var(--accent-blue)',
                        border: `1px solid ${exp.status === 'Live' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                      }}
                    >
                      {exp.status}
                    </span>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
                      {exp.platform}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-lg font-bold mb-2 transition-colors"
                    style={{ 
                      color: 'var(--text-primary)'
                    }}
                  >
                    {exp.title}
                  </h3>
                  
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span style={{ color: exp.color }}>{exp.players}</span>
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
