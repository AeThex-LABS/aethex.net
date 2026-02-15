import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GameController, PaintBrush, Package, Bank, LockKey, ChartBar, Lightning, MapTrifold } from '@phosphor-icons/react';
import { Section } from '../ui';

interface Node {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
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
      icon: GameController,
      description: 'Play across connected experiences',
      link: '/experiences',
      position: 'top-1/4 left-1/4', 
      color: '#3b82f6' 
    },
    { 
      id: 'studio',
      name: 'Creator Studio', 
      icon: PaintBrush,
      description: 'Build your own experiences',
      link: 'https://aethex.studio',
      position: 'top-1/4 right-1/4', 
      color: '#eab308' 
    },
    { 
      id: 'locker',
      name: 'Universal Locker', 
      icon: Package,
      description: 'Your items across all games',
      link: 'https://aethex.locker',
      position: 'bottom-1/4 left-1/4', 
      color: '#14b8a6' 
    },
    { 
      id: 'foundation',
      name: 'Foundation', 
      icon: Bank,
      description: 'Community governance',
      link: '/foundation',
      position: 'bottom-1/4 right-1/4', 
      color: '#ef4444' 
    },
  ];

  const isExternal = (link: string) => link.startsWith('http');

  return (
    <Section variant="primary">
      {/* Clean background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), transparent 70%)'
        }} />
      </div>
      
      {/* Animated connection lines background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ecosystem-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(139, 92, 246, 0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecosystem-grid)" />
        </svg>
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
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <span 
              className="text-sm font-mono uppercase tracking-wider flex items-center gap-2"
              style={{ color: 'var(--accent-purple)' }}
            >
              <MapTrifold size={16} weight="duotone" />
              Ecosystem Map
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Everything Connects
          </h2>
          
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Your identity and progress flow seamlessly across all platforms
          </p>
        </motion.div>

        {/* Interactive Map Visualization */}
        <motion.div 
          className="relative aspect-video rounded-2xl overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-primary)'
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
                    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                    boxShadow: hoveredNode === 'passport' ? '0 0 40px rgba(139, 92, 246, 0.6)' : '0 0 20px rgba(139, 92, 246, 0.3)'
                  }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-1">🌐</div>
                    <div className="text-xs font-bold text-white">AeThex<br/>Passport</div>
                  </div>
                </div>
                {/* Pulsing rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ border: '2px solid rgba(139, 92, 246, 0.3)' }}
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
                    <node.icon size={32} weight="duotone" color="white" />
                  </div>
                  
                  {/* Label */}
                  <div 
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-center"
                    style={{ 
                      color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                      opacity: isHovered ? 1 : 0.7
                    }}
                  >
                    {node.name}
                  </div>

                  {/* Description on hover */}
                  {isHovered && (
                    <motion.div
                      className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg whitespace-nowrap text-xs"
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        border: '1px solid var(--border-primary)',
                        color: 'var(--text-secondary)',
                        boxShadow: 'var(--shadow-lg)'
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
            { icon: LockKey, title: 'One Identity', description: 'Single account works everywhere in the ecosystem' },
            { icon: ChartBar, title: 'Persistent Progress', description: 'Achievements, inventory, and stats follow you' },
            { icon: Lightning, title: 'Real-Time Sync', description: 'Changes in one game instantly reflect everywhere' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center mb-3">
                <feature.icon size={40} weight="duotone" style={{ color: 'var(--accent-purple)' }} />
              </div>
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default EcosystemMap;