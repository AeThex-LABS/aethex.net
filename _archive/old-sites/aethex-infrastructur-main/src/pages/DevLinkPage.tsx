import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  GitBranch, 
  CheckCircle,
  ArrowRight,
  Users,
  Code,
  Chats,
  BookOpen,
  VideoCamera,
  Trophy
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export function DevLinkPage() {
  const armColor = 'oklch(0.68 0.16 205)'

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground pt-20">
        <div 
          className="absolute top-0 left-0 w-full h-[600px] opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${armColor}40, transparent 50%)`
          }}
        />
        
        <div className="relative z-10">
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowRight className="rotate-180" size={16} />
              Back to Overview
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: `${armColor}33`,
                    borderColor: `${armColor}4d`
                  }}
                >
                  <GitBranch size={48} weight="fill" style={{ color: armColor }} />
                </div>
                <div>
                  <Badge 
                    className="mb-3"
                    style={{
                      backgroundColor: `${armColor}33`,
                      borderColor: `${armColor}4d`,
                      color: armColor
                    }}
                  >
                    Collaboration Hub
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold">Dev-Link</h1>
                  <p className="text-2xl mt-2" style={{ color: armColor }}>Connect, Collaborate, Create</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                Dev-Link is the collaboration hub for developers and creators. Share code, collaborate on projects, find mentors, and connect with the AeThex community. It's where ideas meet execution.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-card">
                <Code size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Code Collaboration</h3>
                <p className="text-muted-foreground">
                  Real-time collaborative coding with live cursors, voice chat, and integrated version control. Pair program with teammates anywhere.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Users size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Mentorship Network</h3>
                <p className="text-muted-foreground">
                  Connect with experienced developers for guidance, code reviews, and career advice. Learn from the best in the industry.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Trophy size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Project Showcase</h3>
                <p className="text-muted-foreground">
                  Share your work with the community, get feedback, and attract collaborators or clients. Build your reputation.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <BookOpen size={32} style={{ color: armColor }} weight="fill" className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Resource Library</h3>
                <p className="text-muted-foreground">
                  Curated tutorials, templates, and boilerplates. Learn from the best, share your knowledge with the community.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Collaboration Tools</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center bg-card/50 border-border">
                <Chats size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-2">Team Chat</h4>
                <p className="text-sm text-muted-foreground">
                  Voice, video, and text communication with screen sharing and code snippets
                </p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <VideoCamera size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-2">Live Sessions</h4>
                <p className="text-sm text-muted-foreground">
                  Host live coding sessions, workshops, and community events with streaming
                </p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border">
                <Code size={40} style={{ color: armColor }} weight="fill" className="mx-auto mb-3" />
                <h4 className="font-bold mb-2">Code Reviews</h4>
                <p className="text-sm text-muted-foreground">
                  Get expert code reviews with inline comments and suggestions
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <div className="space-y-3">
                  {[
                    'Team Workspaces',
                    'Code Review Tools',
                    'Live Pair Programming',
                    'Community Forums',
                    'Job Board',
                    'Hackathon Platform',
                    'Video Calls & Screen Share',
                    'Project Management'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle weight="fill" style={{ color: armColor }} size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Real-World Use Cases</h2>
                <div className="space-y-4">
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Find a mentor to guide your first game development project with 1-on-1 sessions
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Collaborate with designers in real-time on UI prototypes with live feedback
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Share open-source libraries with the community and get contributions
                    </p>
                  </Card>
                  <Card className="p-4 bg-card border-border">
                    <p className="text-sm">
                      Participate in monthly hackathons with prizes and connect with teammates
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Card 
              className="p-12 text-center border-border"
              style={{
                background: `linear-gradient(135deg, ${armColor}1a, var(--color-card))`
              }}
            >
              <Users size={48} style={{ color: armColor }} weight="fill" className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Join the Developer Community</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with thousands of developers, share your projects, find collaborators, and grow your skills. The community is waiting for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  style={{
                    backgroundColor: armColor,
                    color: 'white'
                  }}
                  className="font-semibold"
                >
                  Join Dev-Link
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  Browse Projects
                </Button>
              </div>
            </Card>
          </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
