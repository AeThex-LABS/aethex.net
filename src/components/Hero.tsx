import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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
      backgroundColor: 'var(--bg-primary)'
    }}>
      {/* Video Background (placeholder for now - add your video URL) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Uncomment and add video source when ready:
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/path-to-your-cosmic-video.mp4" type="video/mp4" />
        </video>
        */}
        
        {/* Cosmic gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          animation: 'gradient-shift 10s ease infinite',
          backgroundSize: '200% 200%'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 w-full z-10">
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
                  background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                  boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
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
              <span className="font-mono text-xs uppercase tracking-wider" style={{
                color: 'var(--accent-purple)'
              }}>
                Unified Gaming Identity
              </span>
            </div>
          </motion.div>

          {/* Hero Title with parallax effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          >
            <h1 className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span style={{ color: 'var(--text-primary)' }}>
                One Identity.<br />
              </span>
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #14b8a6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 3s ease infinite'
                }}
              >
                Infinite Worlds.
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{ color: 'var(--text-secondary)' }}
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
            className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: '128K+', label: 'Active Players', progress: 80, gradient: 'from-purple-500 to-blue-500' },
              { value: '47', label: 'Connected Games', progress: 60, gradient: 'from-blue-500 to-teal-500' },
              { value: '2.4M+', label: 'Items Owned', progress: 100, gradient: 'from-teal-500 to-pink-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card"
                whileHover={{ y: -5, boxShadow: 'var(--shadow-glow)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-2 text-4xl font-bold font-mono" style={{ color: 'var(--text-primary)' }}>
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  {stat.label}
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full`}
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
