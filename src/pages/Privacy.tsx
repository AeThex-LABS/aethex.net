import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pb-20 overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl font-bold mb-6 uppercase"
            style={{
              color: '#00ffff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em',
              textShadow: '0 0 40px rgba(0, 255, 255, 0.8)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-sm mb-8"
            style={{
              color: '#a0a0a0',
              fontFamily: 'Source Code Pro, monospace'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last Updated: February 15, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Introduction
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                AeThex ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, including our websites, applications, and services (collectively, the "Services").
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: '#00ffff',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    Account Information
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: '#a0a0a0',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    When you create an AeThex Passport, we collect information such as your username, email address, wallet address, and profile information you choose to provide.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: '#00ffff',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    Usage Data
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: '#a0a0a0',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    We automatically collect information about your interactions with our Services, including pages visited, features used, time spent, transaction history, and technical data like IP address, browser type, and device information.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: '#00ffff',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    Blockchain Data
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: '#a0a0a0',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    When you use blockchain features, we may access public blockchain data associated with your wallet address, including transaction history, NFT ownership, and smart contract interactions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                How We Use Your Information
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related notifications</li>
                <li>Personalize your experience across the AeThex ecosystem</li>
                <li>Communicate with you about updates, security alerts, and support</li>
                <li>Detect, prevent, and address fraud, security issues, and illegal activities</li>
                <li>Analyze usage patterns to improve platform performance</li>
                <li>Comply with legal obligations and enforce our Terms of Service</li>
              </ul>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Data Sharing & Disclosure
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                We do not sell your personal information. We may share your data only in the following circumstances:
              </p>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                <li>With your explicit consent</li>
                <li>With service providers who assist in operating our platform</li>
                <li>With game developers when you use their experiences (as configured by you)</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect the rights, property, or safety of AeThex, our users, or the public</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Your Rights & Choices
              </h2>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                <li><strong style={{ color: '#00ffff' }}>Access:</strong> Request a copy of your personal data</li>
                <li><strong style={{ color: '#00ffff' }}>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong style={{ color: '#00ffff' }}>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong style={{ color: '#00ffff' }}>Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong style={{ color: '#00ffff' }}>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Data Security
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Electrolize, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Contact Us
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                For questions about this Privacy Policy or to exercise your rights, contact us at:{' '}
                <a
                  href="mailto:privacy@aethex.net"
                  style={{ color: '#00ffff', textDecoration: 'underline' }}
                >
                  privacy@aethex.net
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
