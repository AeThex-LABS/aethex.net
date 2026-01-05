import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      color: 'var(--accent-blue)',
      link: '/games'
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
      color: 'var(--accent-purple)',
      link: 'https://aethex.studio',
      external: true
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
      color: 'var(--accent-teal)',
      link: 'https://aethex.cloud',
      external: true
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--border-primary) 1px, transparent 1px), linear-gradient(90deg, var(--border-primary) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
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
            Choose Your Path
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Whether you're here to play, create, or build — we've got you covered
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {paths.map((path) => (
            <motion.div
              key={path.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="card relative h-full p-8 group"
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border-primary)',
                }}
              >
                {/* Animated cosmic border on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${path.color}, transparent)`,
                    filter: 'blur(20px)',
                    zIndex: -1
                  }}
                />
                
                <div className="relative flex flex-col h-full">
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {path.icon}
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {path.title}
                  </h3>
                  
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {path.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {path.features.map((feature, i) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <svg 
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: path.color }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {path.external ? (
                    <a
                      href={path.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all relative overflow-hidden group/btn"
                      style={{
                        background: `linear-gradient(135deg, ${path.color}, ${path.color})`,
                        color: 'white'
                      }}
                    >
                      <span className="relative z-10">{path.cta} →</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      to={path.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all relative overflow-hidden group/btn"
                      style={{
                        background: `linear-gradient(135deg, ${path.color}, ${path.color})`,
                        color: 'white'
                      }}
                    >
                      <span className="relative z-10">{path.cta} →</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PathSelector;
