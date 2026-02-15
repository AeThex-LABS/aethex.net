import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Lightbulb, 
  GameController, 
  Briefcase, 
  ShieldCheck, 
  GitBranch, 
  Cube,
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react'

const arms = [
  {
    id: 'labs',
    name: 'Labs',
    icon: Lightbulb,
    color: 'oklch(0.80 0.15 85)',
    tagline: 'Innovation Through Experimentation',
    description: 'AeThex Labs is our innovation incubator where cutting-edge ideas are transformed into production-ready tools and technologies. We push boundaries, experiment with emerging tech, and rapidly prototype solutions that define the future of development.',
    features: [
      {
        title: 'Rapid Prototyping',
        description: 'Turn concepts into working prototypes in days, not months. Our streamlined process accelerates innovation cycles.'
      },
      {
        title: 'Research & Development',
        description: 'Dedicated R&D teams exploring AI/ML, blockchain, WebAssembly, edge computing, and next-gen frameworks.'
      },
      {
        title: 'Experimental APIs',
        description: 'Early access to experimental features and APIs before they reach production. Shape the future of our platform.'
      },
      {
        title: 'Innovation Grants',
        description: 'Funding and resources for promising projects from our community. We invest in bold ideas.'
      }
    ],
    offerings: [
      'Beta Feature Access',
      'Weekly Tech Talks',
      'Experimental SDKs',
      'Research Collaboration',
      'Innovation Workshops',
      'Early Adopter Program'
    ],
    use_cases: [
      'Test bleeding-edge AI models before they hit production',
      'Prototype cross-platform features with experimental SDKs',
      'Access quantum computing research projects',
      'Collaborate on WebGPU graphics experiments'
    ]
  },
  {
    id: 'gameforge',
    name: 'GameForge',
    icon: GameController,
    color: 'oklch(0.65 0.20 145)',
    tagline: 'Build Games That Play Everywhere',
    description: 'GameForge provides a complete suite of tools and infrastructure for game developers building cross-platform experiences. From indie developers to AAA studios, we handle the complex infrastructure so you can focus on creating incredible gameplay.',
    features: [
      {
        title: 'Cross-Platform Sync',
        description: 'Real-time game state synchronization across Web, Mobile, Console, and PC with sub-20ms latency.'
      },
      {
        title: 'Matchmaking Engine',
        description: 'Intelligent matchmaking system with skill-based ranking, region awareness, and anti-cheat integration.'
      },
      {
        title: 'Cloud Save System',
        description: 'Automatic save synchronization across devices with conflict resolution and version history.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Real-time player metrics, retention analysis, monetization insights, and performance monitoring.'
      }
    ],
    offerings: [
      'Unity & Unreal Plugins',
      'Multiplayer Infrastructure',
      'Player Authentication',
      'Leaderboard System',
      'Achievement Framework',
      'In-Game Economy Tools'
    ],
    use_cases: [
      'Launch cross-platform multiplayer with one codebase',
      'Sync player progress seamlessly between mobile and console',
      'Run live ops events without client updates',
      'Scale from 100 to 1M players without infrastructure changes'
    ]
  },
  {
    id: 'corp',
    name: 'Corp',
    icon: Briefcase,
    color: 'oklch(0.60 0.20 250)',
    tagline: 'Enterprise-Grade Solutions',
    description: 'AeThex Corp delivers enterprise solutions for organizations requiring scalable, secure, and compliant infrastructure. We provide white-label options, custom integrations, and dedicated support for businesses building mission-critical applications.',
    features: [
      {
        title: 'White-Label Platform',
        description: 'Fully customizable infrastructure with your branding. Complete control over user experience and deployment.'
      },
      {
        title: 'SLA Guarantees',
        description: '99.99% uptime guarantee with dedicated support teams, priority bug fixes, and 24/7 monitoring.'
      },
      {
        title: 'Compliance & Security',
        description: 'SOC 2, GDPR, HIPAA, and ISO 27001 compliant infrastructure with end-to-end encryption.'
      },
      {
        title: 'Custom Integrations',
        description: 'Seamless integration with existing enterprise systems including SAP, Salesforce, and custom APIs.'
      }
    ],
    offerings: [
      'Dedicated Infrastructure',
      'Priority Support (24/7)',
      'Custom Contract Terms',
      'Private Cloud Options',
      'Advanced Analytics',
      'Training & Onboarding'
    ],
    use_cases: [
      'Deploy secure multi-tenant applications for Fortune 500 clients',
      'Build compliant healthcare platforms with HIPAA requirements',
      'Scale financial services apps with audit trails',
      'Create white-labeled platforms for agency clients'
    ]
  },
  {
    id: 'foundation',
    name: 'Foundation',
    icon: ShieldCheck,
    color: 'oklch(0.62 0.24 25)',
    tagline: 'Identity & Digital Passports',
    description: 'AeThex Foundation manages digital identity, authentication, and verifiable credentials across the AeThex ecosystem. We provide secure, portable identity solutions that work seamlessly across all platforms and services.',
    features: [
      {
        title: 'Universal Identity',
        description: 'Single sign-on across all AeThex services and partner platforms. One identity, infinite possibilities.'
      },
      {
        title: 'Digital Passports',
        description: 'Verifiable credentials for creators and developers. Showcase your work, skills, and achievements.'
      },
      {
        title: 'Decentralized Auth',
        description: 'Self-sovereign identity with blockchain verification. You own your data, always.'
      },
      {
        title: 'Privacy Controls',
        description: 'Granular privacy settings with selective disclosure. Share only what you choose to share.'
      }
    ],
    offerings: [
      'Creator Passports (*.aethex.me)',
      'Project Passports (*.aethex.space)',
      'OAuth Integration',
      'WebAuthn Support',
      'Biometric Auth',
      'Multi-Factor Auth'
    ],
    use_cases: [
      'Verify creator credentials across platforms',
      'Authenticate users without passwords using WebAuthn',
      'Build reputation systems with verifiable achievements',
      'Create portable profiles that work everywhere'
    ]
  },
  {
    id: 'devlink',
    name: 'Dev-Link',
    icon: GitBranch,
    color: 'oklch(0.68 0.16 205)',
    tagline: 'Connect, Collaborate, Create',
    description: 'Dev-Link is the collaboration hub for developers and creators. Share code, collaborate on projects, find mentors, and connect with the AeThex community. It\'s where ideas meet execution.',
    features: [
      {
        title: 'Code Collaboration',
        description: 'Real-time collaborative coding with live cursors, voice chat, and integrated version control.'
      },
      {
        title: 'Mentorship Network',
        description: 'Connect with experienced developers for guidance, code reviews, and career advice.'
      },
      {
        title: 'Project Showcase',
        description: 'Share your work with the community, get feedback, and attract collaborators or clients.'
      },
      {
        title: 'Resource Library',
        description: 'Curated tutorials, templates, and boilerplates. Learn from the best, share your knowledge.'
      }
    ],
    offerings: [
      'Team Workspaces',
      'Code Review Tools',
      'Live Pair Programming',
      'Community Forums',
      'Job Board',
      'Hackathon Platform'
    ],
    use_cases: [
      'Find a mentor to guide your first game development project',
      'Collaborate with designers in real-time on UI prototypes',
      'Share open-source libraries with the community',
      'Participate in monthly hackathons with prizes'
    ]
  },
  {
    id: 'nexus',
    name: 'Nexus',
    icon: Cube,
    color: 'oklch(0.68 0.22 295)',
    tagline: 'The Core Infrastructure',
    description: 'Nexus is the central nervous system of AeThex - our core infrastructure platform that powers everything. It handles data synchronization, real-time communication, edge computing, and distributed systems at massive scale.',
    features: [
      {
        title: 'Global Edge Network',
        description: '200+ edge locations worldwide ensuring sub-20ms latency anywhere on the planet.'
      },
      {
        title: 'Real-Time Sync Engine',
        description: 'Conflict-free replicated data types (CRDTs) for seamless multi-device synchronization.'
      },
      {
        title: 'Auto-Scaling',
        description: 'Intelligent scaling that automatically adapts to traffic patterns. Pay only for what you use.'
      },
      {
        title: 'Developer API',
        description: 'Powerful GraphQL and REST APIs with comprehensive documentation and client libraries.'
      }
    ],
    offerings: [
      'Real-Time Database',
      'WebSocket Infrastructure',
      'CDN & Asset Delivery',
      'Serverless Functions',
      'Event Streaming',
      'Message Queues'
    ],
    use_cases: [
      'Build collaborative editors with real-time sync',
      'Deploy globally distributed APIs with automatic failover',
      'Stream millions of events per second with low latency',
      'Create serverless backends without managing infrastructure'
    ]
  }
]

export function ArmsDocumentation() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore the AeThex Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six specialized divisions working together to provide everything you need to build the future
          </p>
        </motion.div>

        <Tabs defaultValue="labs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 h-auto">
            {arms.map((arm) => {
              const Icon = arm.icon
              return (
                <TabsTrigger 
                  key={arm.id} 
                  value={arm.id}
                  className="flex flex-col gap-1 py-3 data-[state=active]:bg-card"
                >
                  <Icon size={24} weight="fill" style={{ color: arm.color }} />
                  <span className="text-xs md:text-sm">{arm.name}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {arms.map((arm) => {
            const Icon = arm.icon
            return (
              <TabsContent key={arm.id} value={arm.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card 
                    className="p-8 md:p-12 border-border relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to bottom right, var(--color-card), var(--color-card), ${arm.color}08)`
                    }}
                  >
                    <div 
                      className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]"
                      style={{
                        background: `${arm.color}1a`
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div 
                          className="p-4 rounded-xl border"
                          style={{
                            backgroundColor: `${arm.color}33`,
                            borderColor: `${arm.color}4d`
                          }}
                        >
                          <Icon size={32} weight="fill" style={{ color: arm.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold mb-2">{arm.name}</h3>
                          <p className="text-lg font-medium mb-4" style={{ color: arm.color }}>{arm.tagline}</p>
                          <p className="text-muted-foreground leading-relaxed">{arm.description}</p>
                        </div>
                      </div>

                      <Separator className="my-8" />

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <CheckCircle weight="fill" style={{ color: arm.color }} />
                            Key Features
                          </h4>
                          <div className="space-y-4">
                            {arm.features.map((feature, idx) => (
                              <div key={idx} className="p-4 rounded-lg bg-background/50 border border-border">
                                <h5 className="font-semibold mb-1">{feature.title}</h5>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                              <Cube weight="fill" style={{ color: arm.color }} />
                              What's Included
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {arm.offerings.map((offering, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="outline"
                                  className="text-foreground"
                                  style={{
                                    backgroundColor: `${arm.color}1a`,
                                    borderColor: `${arm.color}4d`
                                  }}
                                >
                                  {offering}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                              <ArrowRight weight="fill" style={{ color: arm.color }} />
                              Use Cases
                            </h4>
                            <ul className="space-y-3">
                              {arm.use_cases.map((useCase, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <div 
                                    className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: arm.color }}
                                  />
                                  <span className="text-muted-foreground">{useCase}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <motion.a
                            href={`/arms/${arm.id}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-6 py-3 border text-foreground rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                            style={{
                              backgroundColor: `${arm.color}33`,
                              borderColor: `${arm.color}4d`
                            }}
                          >
                            Learn More About {arm.name}
                            <ArrowRight weight="bold" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
