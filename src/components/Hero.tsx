import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{
      backgroundColor: '#000000',
      paddingTop: '80px'
    }}>
      {/* Cyberpunk background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neon gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
          animation: 'gradient-shift 10s ease infinite',
          backgroundSize: '200% 200%'
        }} />
      </div>

      {/* Data stream particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-12"
            style={{
              left: `${10 + Math.random() * 80}%`,
              background: 'linear-gradient(180deg, transparent, rgba(0, 255, 255, 0.6), transparent)',
              boxShadow: '0 0 8px rgba(0, 255, 255, 0.6)'
            }}
            animate={{
              y: ['-100%', '100vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full">
              <motion.div 
                className="h-2 w-2 rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider" style={{
                color: '#00ffff',
                fontFamily: 'Source Code Pro, monospace',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.6)'
              }}>
                Unified Gaming Identity
              </span>
            </div>
          </motion.div>

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          >
            <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span style={{ 
                color: '#ffffff',
                fontFamily: 'Electrolize, sans-serif'
              }}>
                One Identity.<br />
              </span>
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #00ff00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 3s ease infinite',
                  fontFamily: 'Electrolize, sans-serif'
                }}
              >
                Infinite Worlds.
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="mx-auto mb-12 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed"
            style={{ 
              color: '#b0b0b0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your unified identity across the gaming multiverse. One account, infinite experiences.
            Progress, achievements, and items that travel with you everywhere.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mb-20 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="https://aethex.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
              style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download AeThex OS
            </a>
            <Link to="/passport" style={{ textDecoration: 'none' }}>
              <button className="btn-secondary flex items-center gap-2">
                Create Passport
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </motion.div>

          {/* Live Stats */}
          <motion.div 
            className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: '128K+', label: 'Active Players', progress: 80 },
              { value: '47', label: 'Connected Games', progress: 60 },
              { value: '2.4M+', label: 'Items Owned', progress: 100 }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card"
                whileHover={{ y: -5, boxShadow: 'var(--shadow-glow)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-2 text-3xl sm:text-4xl font-bold" style={{ 
                  color: '#00ffff',
                  fontFamily: 'Electrolize, sans-serif',
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
                }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider" style={{ 
                  color: '#808080',
                  fontFamily: 'Source Code Pro, monospace'
                }}>
                  {stat.label}
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden" style={{ 
                  backgroundColor: '#0f0f0f',
                  border: '1px solid rgba(0, 255, 255, 0.2)'
                }}>
                  <motion.div 
                    className="h-full"
                    style={{
                      background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                      boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.progress}%` }}
                    transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
