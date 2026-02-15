import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Rocket, Sword, SunHorizon, GameController } from '@phosphor-icons/react';
import { Section } from '../ui';

const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      title: 'Hide and Seek Extreme',
      description: 'The classic game reimagined with persistent abilities and cross-platform play',
      image: Target,
      players: '2.3K',
      platform: 'Roblox',
      status: 'Beta',
      color: 'var(--accent-blue)'
    },
    {
      title: 'Cosmic Traders',
      description: 'Build your trading empire across the universe with real-time economy',
      image: Rocket,
      players: '1.8K',
      platform: 'UEFN',
      status: 'Beta',
      color: 'var(--accent-purple)'
    },
    {
      title: 'The Foundation Arena',
      description: 'Competitive battles where your victories shape governance power',
      image: Sword,
      players: 'TBA',
      platform: 'Web',
      status: 'In Development',
      color: 'var(--accent-pink)'
    },
    {
      title: 'Project Horizon',
      description: 'Open-world exploration with persistent discovery achievements',
      image: SunHorizon,
      players: 'TBA',
      platform: 'Multi',
      status: 'Coming Q3 2026',
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
      y: 0
    }
  };

  return (
    <Section variant="secondary">
      {/* Clean background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 70%)'
        }} />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span 
              className="text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-2"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-primary)',
                color: 'var(--accent-purple)'
              }}
            >
              <GameController size={14} weight="duotone" />
              EARLY ACCESS
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured Experiences
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Play our early beta games on Roblox and Fortnite
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
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="h-full overflow-hidden rounded-xl backdrop-blur-xl border transition-all duration-300 hover:border-opacity-50" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                {/* Image placeholder */}
                <div 
                  className="aspect-video flex items-center justify-center relative overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}20 0%, ${exp.color}10 100%)`
                  }}
                >
                  <div className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50" style={{
                    background: `radial-gradient(circle at center, ${exp.color}40, transparent 70%)`
                  }} />
                  <exp.image size={64} weight="duotone" className="relative z-10" style={{ color: exp.color }} />
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
    </Section>
  );
};

export default FeaturedExperiences;
