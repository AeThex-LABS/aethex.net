import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  CheckCircle, 
  TrendUp, 
  Users, 
  Lightning,
  Globe,
  ChartLine
} from '@phosphor-icons/react'

interface CaseStudy {
  id: string
  company: string
  logo: string
  industry: string
  tagline: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
    icon: any
  }[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
  technicalDetails: {
    title: string
    description: string
  }[]
  stats: {
    label: string
    value: string
  }[]
}

const caseStudies: Record<string, CaseStudy> = {
  'epic-quest-studios': {
    id: 'epic-quest-studios',
    company: 'Epic Quest Studios',
    logo: 'EQ',
    industry: 'MMO Gaming',
    tagline: 'How Epic Quest scaled to 10M concurrent players',
    challenge: 'Epic Quest Studios needed to synchronize complex game state across PC, console, and mobile platforms for their flagship MMO. Their existing solution couldn\'t handle the scale, leading to sync conflicts and player frustration.',
    solution: 'By implementing AeThex\'s state synchronization API, Epic Quest achieved real-time sync across all platforms with sub-50ms latency. The automatic conflict resolution and regional data centers ensured smooth gameplay worldwide.',
    results: [
      {
        metric: '99.99% Uptime',
        value: '2,400+ hours',
        description: 'Zero downtime during peak events',
        icon: CheckCircle
      },
      {
        metric: '85% Cost Reduction',
        value: '$500K saved',
        description: 'Compared to building in-house solution',
        icon: TrendUp
      },
      {
        metric: '10M Players',
        value: 'Concurrent',
        description: 'Peak concurrent players supported',
        icon: Users
      },
      {
        metric: '35ms Average',
        value: 'Latency',
        description: 'Global average sync latency',
        icon: Lightning
      }
    ],
    testimonial: {
      quote: 'AeThex transformed our infrastructure. We went from spending 60% of our engineering time on sync issues to focusing entirely on gameplay features. The ROI was immediate.',
      author: 'Sarah Chen',
      role: 'CTO, Epic Quest Studios'
    },
    technicalDetails: [
      {
        title: 'Multi-Platform State Sync',
        description: 'Seamlessly synchronized player inventory, progress, and achievements across PC (Steam), PlayStation 5, Xbox Series X, and iOS/Android devices.'
      },
      {
        title: 'Conflict Resolution',
        description: 'Implemented custom conflict resolution rules for edge cases where players made simultaneous changes on different devices.'
      },
      {
        title: 'Regional Data Centers',
        description: 'Utilized AeThex\'s global infrastructure with data centers in NA, EU, APAC, and SA for optimal latency worldwide.'
      },
      {
        title: 'Real-Time Analytics',
        description: 'Integrated analytics tracking to monitor player behavior patterns and identify potential sync issues before they impact users.'
      }
    ],
    stats: [
      { label: 'API Calls per Day', value: '2.5 Billion' },
      { label: 'Countries Served', value: '150+' },
      { label: 'Data Synced Daily', value: '50 TB' },
      { label: 'Integration Time', value: '2 Weeks' }
    ]
  },
  'indie-game-co': {
    id: 'indie-game-co',
    company: 'Indie Game Co',
    logo: 'IG',
    industry: 'Indie Gaming',
    tagline: 'From prototype to 1M users in 6 months',
    challenge: 'As a small indie studio with 3 developers, Indie Game Co needed enterprise-grade infrastructure without the enterprise overhead. They couldn\'t afford to build and maintain their own backend.',
    solution: 'AeThex\'s free tier got them started immediately, and they scaled seamlessly to Pro as their user base grew. The SDK integration took just days, allowing them to focus on game design.',
    results: [
      {
        metric: '1M Users',
        value: 'In 6 months',
        description: 'From launch to 1 million players',
        icon: Users
      },
      {
        metric: '3 Days',
        value: 'Integration',
        description: 'From signup to production deployment',
        icon: Lightning
      },
      {
        metric: '$0 Initial',
        value: 'Cost',
        description: 'Started on free tier',
        icon: TrendUp
      },
      {
        metric: '95% Rating',
        value: 'App Store',
        description: 'Thanks to seamless cross-platform sync',
        icon: CheckCircle
      }
    ],
    testimonial: {
      quote: 'As a tiny team, we needed to move fast. AeThex let us skip building infrastructure and go straight to making our game amazing. Best decision we made.',
      author: 'Alex Rivera',
      role: 'Founder & Lead Developer'
    },
    technicalDetails: [
      {
        title: 'Rapid Integration',
        description: 'Used JavaScript SDK with React Native for mobile and Electron for desktop. Single codebase, synchronized everywhere.'
      },
      {
        title: 'Progressive Scaling',
        description: 'Started on free tier (1M API calls/month), scaled to Pro as user base grew. Zero infrastructure changes required.'
      },
      {
        title: 'Player Progression',
        description: 'Synchronized unlocks, achievements, and in-game purchases across iOS and Android with real-time updates.'
      },
      {
        title: 'Offline Support',
        description: 'Leveraged AeThex\'s offline queue to handle spotty mobile connections and automatic sync when back online.'
      }
    ],
    stats: [
      { label: 'Development Team Size', value: '3 Developers' },
      { label: 'Time to Market', value: '4 Months' },
      { label: 'Infrastructure Cost Saved', value: '$200K+' },
      { label: 'Player Retention', value: '78%' }
    ]
  },
  'global-esports': {
    id: 'global-esports',
    company: 'Global eSports League',
    logo: 'GE',
    industry: 'eSports Platform',
    tagline: 'Powering live tournaments for 50M viewers',
    challenge: 'Global eSports needed real-time leaderboards, match stats, and player profiles synchronized across web, mobile, and in-arena displays for live tournaments with millions of concurrent viewers.',
    solution: 'AeThex\'s enterprise plan provided dedicated infrastructure, 99.99% SLA, and custom regional deployments. Real-time WebSocket connections ensured leaderboards updated instantly across all platforms.',
    results: [
      {
        metric: '50M Viewers',
        value: 'Concurrent',
        description: 'During championship finals',
        icon: Globe
      },
      {
        metric: '15ms Update',
        value: 'Latency',
        description: 'Leaderboard sync time',
        icon: Lightning
      },
      {
        metric: '100% Uptime',
        value: 'Live Events',
        description: 'Never missed a tournament',
        icon: CheckCircle
      },
      {
        metric: '200+ Events',
        value: 'Per Year',
        description: 'Global tournaments powered',
        icon: ChartLine
      }
    ],
    testimonial: {
      quote: 'When you have 50 million people watching live, there\'s no room for error. AeThex has been rock solid for 3 years. Their enterprise support is phenomenal.',
      author: 'Marcus Johnson',
      role: 'VP of Technology'
    },
    technicalDetails: [
      {
        title: 'Real-Time Leaderboards',
        description: 'Sub-second updates across web, mobile, and arena displays using WebSocket connections with automatic failover.'
      },
      {
        title: 'Global CDN Integration',
        description: 'Custom integration with their video streaming CDN to ensure stat updates synchronized with video feeds.'
      },
      {
        title: 'Dedicated Infrastructure',
        description: 'Enterprise plan includes dedicated database instances and priority routing for tournament traffic.'
      },
      {
        title: 'Custom SLA',
        description: '99.99% uptime guarantee with 24/7 dedicated support and < 15min response time for critical issues.'
      }
    ],
    stats: [
      { label: 'Tournament Events', value: '200+/year' },
      { label: 'Peak Concurrent Users', value: '50 Million' },
      { label: 'Data Points Tracked', value: '1 Billion+' },
      { label: 'Years Partnership', value: '3 Years' }
    ]
  }
}

export function CaseStudyPage() {
  const { id } = useParams<{ id: string }>()
  const caseStudy = id ? caseStudies[id] : null

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Link to="/showcase">
              <Button>Back to Showcase</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/showcase">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft size={16} className="mr-2" />
              Back to Showcase
            </Button>
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
                {caseStudy.logo}
              </div>
              <div className="flex-1">
                <Badge className="mb-3">{caseStudy.industry}</Badge>
                <h1 className="text-4xl font-bold mb-4">{caseStudy.company}</h1>
                <p className="text-xl text-muted-foreground">{caseStudy.tagline}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {caseStudy.stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <Separator className="mb-12" />

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => {
                  const Icon = result.icon
                  return (
                    <Card key={index} className="p-6">
                      <Icon size={32} className="text-primary mb-3" weight="duotone" />
                      <div className="text-3xl font-bold mb-1">{result.metric}</div>
                      <div className="text-xl text-primary mb-2">{result.value}</div>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Testimonial */}
            <Card className="p-8 mb-12 bg-primary/5 border-primary/20">
              <div className="text-2xl font-serif italic mb-6 leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </div>
              <div>
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</div>
              </div>
            </Card>

            {/* Technical Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
              <div className="space-y-6">
                {caseStudy.technicalDetails.map((detail, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{detail.title}</h3>
                    <p className="text-muted-foreground">{detail.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="p-8 text-center border-primary/30 bg-primary/5">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Like {caseStudy.company}?</h3>
              <p className="text-muted-foreground mb-6">
                Start building with AeThex today. Free tier includes 1M API calls per month.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule a Demo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
