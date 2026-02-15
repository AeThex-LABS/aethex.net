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
      color: '#00ffff',
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
      color: '#ff00ff',
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
      color: '#00ff00',
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ffff 2px, #00ffff 4px)'
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
            Choose Your Path
          </h2>
          <p className="text-xl" style={{ 
            color: '#a0a0a0',
            fontFamily: 'Source Code Pro, monospace'
          }}>
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
                className="relative h-full p-8 group"
                style={{
                  background: 'rgba(0, 255, 255, 0.02)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Neon glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 40px ${path.color}, 0 0 80px ${path.color}80`,
                    border: `1px solid ${path.color}`,
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
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
                  
                  <h3 className="text-3xl font-bold mb-3" style={{ 
                    color: '#ffffff',
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.05em'
                  }}>
                    {path.title}
                  </h3>
                  
                  <p className="mb-6 leading-relaxed" style={{ 
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}>
                    {path.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 grow">
                    {path.features.map((feature, i) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start text-sm"
                        style={{ 
                          color: '#a0a0a0',
                          fontFamily: 'Source Code Pro, monospace'
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <svg 
                          className="w-5 h-5 mr-2 mt-0.5 shrink-0" 
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
                      className="w-full py-3 px-6 font-bold text-xs text-center uppercase transition-all relative overflow-hidden group/btn"
                      style={{
                        background: path.color === '#00ffff' ? 'linear-gradient(135deg, #00ffff, #00ffff)' : path.color === '#ff00ff' ? 'linear-gradient(135deg, #ff00ff, #ff00ff)' : 'linear-gradient(135deg, #00ff00, #00ff00)',
                        color: '#000000',
                        fontFamily: 'Source Code Pro, monospace',
                        letterSpacing: '0.15em',
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                        border: `1px solid ${path.color}`,
                        boxShadow: `0 0 20px ${path.color}80, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                        textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      <span className="relative z-10">{path.cta.toUpperCase()} →</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      to={path.link}
                      className="w-full py-3 px-6 font-bold text-xs text-center uppercase transition-all relative overflow-hidden group/btn"
                      style={{
                        background: `linear-gradient(135deg, ${path.color}, ${path.color})`,
                        color: '#000000',
                        fontFamily: 'Source Code Pro, monospace',
                        letterSpacing: '0.15em',
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                        border: `1px solid ${path.color}`,
                        boxShadow: `0 0 20px ${path.color}80, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                        textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      <span className="relative z-10">{path.cta.toUpperCase()} →</span>
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
