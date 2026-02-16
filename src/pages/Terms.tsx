import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pb-20 overflow-hidden" style={{ paddingTop: '80px' }}>
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            height: '100%'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl font-bold mb-6 uppercase"
            style={{
              color: '#ff00ff',
              fontFamily: 'Electrolize, sans-serif',
              letterSpacing: '0.1em',
              textShadow: '0 0 40px rgba(255, 0, 255, 0.8)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Terms of Service
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
                Agreement to Terms
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                By accessing or using AeThex's platform, including websites, applications, APIs, and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
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
                Eligibility
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                You must be at least 13 years old to use our Services. If you are under 18, you must have parental or guardian consent. By using our Services, you represent and warrant that you meet these eligibility requirements.
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
                AeThex Passport
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}
                >
                  Your AeThex Passport is your unified identity across the multiverse. You are responsible for:
                </p>
                <ul
                  className="space-y-2 list-disc list-inside"
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}
                >
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Providing accurate and up-to-date information</li>
                </ul>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}
                >
                  We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
                </p>
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
                User Conduct
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                You agree NOT to:
              </p>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Distribute malware, viruses, or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Manipulate or exploit our Services for unfair advantage</li>
                <li>Create fake accounts or impersonate others</li>
                <li>Scrape, crawl, or data mine our platform without permission</li>
                <li>Infringe on intellectual property rights</li>
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
                Content & Intellectual Property
              </h2>
              <div className="space-y-4">
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: '#ff00ff',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    Our Content
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: '#a0a0a0',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    All content on AeThex, including designs, text, graphics, logos, code, and trademarks, is owned by AeThex or its licensors and protected by intellectual property laws. You may not copy, modify, or distribute our content without explicit permission.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: '#ff00ff',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    Your Content
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: '#a0a0a0',
                      fontFamily: 'Source Code Pro, monospace'
                    }}
                  >
                    You retain ownership of content you create or upload. By using our Services, you grant AeThex a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content as necessary to provide our Services.
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
                Virtual Items & Transactions
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                Virtual items, currencies, and NFTs purchased or earned through our Services:
              </p>
              <ul
                className="space-y-2 list-disc list-inside"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                <li>Have no real-world monetary value unless explicitly stated</li>
                <li>Cannot be exchanged for cash or refunded (except as required by law)</li>
                <li>May be modified, suspended, or terminated at our discretion</li>
                <li>Are subject to the terms of individual game developers</li>
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
                Third-Party Services
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                Our platform integrates with third-party games, applications, and services. We are not responsible for the content, privacy practices, or actions of third parties. Your use of third-party services is at your own risk and subject to their terms.
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
                Disclaimers & Limitation of Liability
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}
                >
                  OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: '#a0a0a0',
                    fontFamily: 'Source Code Pro, monospace'
                  }}
                >
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AETHEX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR SERVICES.
                </p>
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
                Governing Law & Disputes
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                These Terms are governed by the laws of [Jurisdiction]. Any disputes will be resolved through binding arbitration, except where prohibited by law.
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
                Changes to Terms
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#a0a0a0',
                  fontFamily: 'Source Code Pro, monospace'
                }}
              >
                We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or platform notification. Continued use of our Services after changes constitutes acceptance of the updated Terms.
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
                For questions about these Terms, contact us at:{' '}
                <a
                  href="mailto:legal@aethex.net"
                  style={{ color: '#ff00ff', textDecoration: 'underline' }}
                >
                  legal@aethex.net
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
