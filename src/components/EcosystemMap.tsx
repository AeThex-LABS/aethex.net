import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Node {
  id: string;
  name: string;
  icon: string;
  description: string;
  link: string;
  position: string;
  color: string;
}

const EcosystemMap: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: Node[] = [
    { 
      id: 'games',
      name: 'Games', 
      icon: '🎮',
      description: 'Play across connected experiences',
      link: '/experiences',
      position: 'top-1/4 left-1/4', 
      color: '#00ffff' 
    },
    { 
      id: 'studio',
      name: 'Creator Studio', 
      icon: '🎨',
      description: 'Build your own experiences',
      link: 'https://aethex.studio',
      position: 'top-1/4 right-1/4', 
      color: '#ff00ff' 
    },
    { 
      id: 'locker',
      name: 'Universal Locker', 
      icon: '🗃️',
      description: 'Your items across all games',
      link: 'https://aethex.locker',
      position: 'bottom-1/4 left-1/4', 
      color: '#00ff00' 
    },
    { 
      id: 'foundation',
      name: 'Foundation', 
      icon: '🏛️',
      description: 'Community governance',
      link: '/foundation',
      position: 'bottom-1/4 right-1/4', 
      color: '#ff00ff' 
    },
  ];

  const isExternal = (link: string) => link.startsWith('http');

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="inline-block px-4 py-2 mb-4"
            style={{
              backgroundColor: 'rgba(0, 255, 255, 0.05)',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
            }}
          >
            <span 
              className="text-sm font-mono uppercase tracking-wider"
              style={{ 
                color: '#00ffff',
                fontFamily: 'Source Code Pro, monospace',
                letterSpacing: '0.15em'
              }}
            >
              🗺️ ECOSYSTEM MAP
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ 
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            Everything Connects
          </h2>
          
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ 
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
          >
            Your identity and progress flow seamlessly across all platforms
          </p>
        </motion.div>

        {/* Interactive Map Visualization */}
        <motion.div 
          className="relative aspect-video overflow-hidden"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
            backdropFilter: 'blur(40px)',
            boxShadow: 'inset 0 0 40px rgba(0, 255, 255, 0.1)'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Center node - AeThex Passport */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/passport" style={{ textDecoration: 'none' }}>
              <motion.div 
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredNode('passport')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div 
                  className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                    boxShadow: hoveredNode === 'passport' ? '0 0 60px #00ffff, 0 0 90px #ff00ff' : '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)',
                    border: '2px solid #00ffff'
                  }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-1">🌐</div>
                    <div className="text-xs font-bold uppercase" style={{
                      color: '#000000',
                      fontFamily: 'Source Code Pro, monospace',
                      letterSpacing: '0.1em',
                      textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                    }}>AeThex<br/>Passport</div>
                  </div>
                </div>
                {/* Pulsing rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ border: '2px solid #00ffff' }}
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Connected nodes */}
          {nodes.map((node, i) => {
            const isHovered = hoveredNode === node.id || hoveredNode === 'passport';
            const NodeContent = (
              <motion.div
                key={node.id}
                className={`absolute ${node.position} transform -translate-x-1/2 -translate-y-1/2`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: node.color,
                      boxShadow: isHovered ? `0 0 30px ${node.color}80` : `0 0 15px ${node.color}40`,
                      opacity: isHovered ? 1 : 0.8
                    }}
                  >
                    <span className="text-2xl">{node.icon}</span>
                  </div>
                  
                  {/* Label */}
                  <div 
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold text-center uppercase"
                    style={{ 
                      color: isHovered ? '#ffffff' : '#a0a0a0',
                      opacity: isHovered ? 1 : 0.7,
                      fontFamily: 'Source Code Pro, monospace',
                      letterSpacing: '0.1em',
                      textShadow: isHovered ? `0 0 10px ${node.color}` : 'none'
                    }}
                  >
                    {node.name}
                  </div>

                  {/* Description on hover */}
                  {isHovered && (
                    <motion.div
                      className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2 px-3 py-2 whitespace-nowrap text-xs"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        border: `1px solid ${node.color}`,
                        color: '#ffffff',
                        boxShadow: `0 0 20px ${node.color}80`,
                        fontFamily: 'Source Code Pro, monospace',
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                      }}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {node.description}
                    </motion.div>
                  )}

                  {/* Connection line */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ 
                      transform: 'scale(3)', 
                      transformOrigin: 'center',
                      opacity: isHovered ? 0.6 : 0.3 
                    }}
                  >
                    <motion.line 
                      x1="50%" 
                      y1="50%" 
                      x2="50%" 
                      y2="50%" 
                      stroke={node.color}
                      strokeWidth={isHovered ? "3" : "2"}
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -10]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </svg>
                </motion.div>
              </motion.div>
            );

            return isExternal(node.link) ? (
              <a 
                key={node.id}
                href={node.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                {NodeContent}
              </a>
            ) : (
              <Link 
                key={node.id}
                to={node.link}
                style={{ textDecoration: 'none' }}
              >
                {NodeContent}
              </Link>
            );
          })}
        </motion.div>


        {/* Key Features */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: '🔐', title: 'One Identity', description: 'Single account works everywhere in the ecosystem' },
            { icon: '📊', title: 'Persistent Progress', description: 'Achievements, inventory, and stats follow you' },
            { icon: '⚡', title: 'Real-Time Sync', description: 'Changes in one game instantly reflect everywhere' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              style={{
                background: 'rgba(0, 255, 255, 0.02)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                backdropFilter: 'blur(40px)',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.05)'
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 
                className="text-lg font-bold mb-2 uppercase"
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm"
                style={{ 
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemMap;