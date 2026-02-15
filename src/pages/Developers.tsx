import React from 'react';
import { motion } from 'framer-motion';
import DevelopersPreview from '../components/DevelopersPreview';

const Developers: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <DevelopersPreview />
      
      {/* Integration Steps */}
      <section className="relative pb-24 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center uppercase"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start Building in Minutes
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Get API Key',
                description: 'Sign up for a free developer account and generate your API credentials instantly.',
                color: '#00ffff'
              },
              {
                step: '02',
                title: 'Install SDK',
                description: 'Choose your platform (Unity, Unreal, Roblox, Web) and install the SDK via package manager.',
                color: '#00ff00'
              },
              {
                step: '03',
                title: 'Ship & Scale',
                description: 'Deploy your integration and start serving players across platforms. Monitor usage in real-time.',
                color: '#ff00ff'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="p-6 text-center"
                style={{
                  background: 'rgba(0, 255, 255, 0.02)',
                  border: `1px solid ${item.color}40`,
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  boxShadow: `inset 0 0 20px ${item.color}10`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{
                    color: item.color,
                    fontFamily: 'Source Code Pro, monospace',
                    textShadow: `0 0 20px ${item.color}`
                  }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-bold mb-3 uppercase"
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: '0.875rem'
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center uppercase"
            style={{
              color: '#ffffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Developer Resources
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'API Reference', icon: '📖', desc: 'Complete REST & GraphQL docs', link: 'https://aethex.dev/api' },
              { title: 'SDK Downloads', icon: '📦', desc: 'Unity, Unreal, Roblox, Web', link: 'https://aethex.dev/sdks' },
              { title: 'Code Examples', icon: '💻', desc: 'Sample projects & tutorials', link: 'https://aethex.dev/examples' },
              { title: 'Developer Forum', icon: '💬', desc: 'Community support & Q&A', link: 'https://aethex.dev/forum' }
            ].map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 text-center block"
                style={{
                  background: 'rgba(0, 255, 255, 0.03)',
                  border: '1px solid rgba(0, 255, 255, 0.2)',
                  backdropFilter: 'blur(40px)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  textDecoration: 'none'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  borderColor: 'rgba(0, 255, 255, 0.6)',
                  backgroundColor: 'rgba(0, 255, 255, 0.05)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)'
                }}
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3
                  className="text-lg font-bold mb-2 uppercase"
                  style={{
                    color: '#00ffff',
                    fontFamily: 'Electrolize, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  {resource.title}
                </h3>
                <p
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace',
                    fontSize: '0.875rem'
                  }}
                >
                  {resource.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #00ff00)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            READY TO INTEGRATE?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Visit the developer portal for complete documentation, API references, SDK downloads, and community support.
          </motion.p>
          <motion.a
            href="https://aethex.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #00ff00)',
              color: '#000000',
              fontFamily: 'Source Code Pro, monospace',
              letterSpacing: '0.15em',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              border: '1px solid #00ffff',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              textDecoration: 'none'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit aethex.dev
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Developers;
