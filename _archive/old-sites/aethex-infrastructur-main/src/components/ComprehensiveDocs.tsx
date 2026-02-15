import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { 
  Book, 
  Lightning, 
  ShieldCheck, 
  Database, 
  ChartLine,
  Users,
  MagnifyingGlass,
  ArrowRight
} from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface DocSection {
  id: string
  title: string
  icon: any
  description: string
  subsections: {
    id: string
    title: string
    content: string
    codeExample?: string
  }[]
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Lightning,
    description: 'Quick start guides to get you up and running in minutes',
    subsections: [
      {
        id: 'installation',
        title: 'Installation',
        content: 'Install the AeThex SDK for your platform. We support JavaScript/Node.js, C#/Unity, Python, and more.',
        codeExample: `# npm
npm install @aethex/sdk

# yarn  
yarn add @aethex/sdk

# Unity Package Manager
Add package from git URL:
https://github.com/aethex/sdk-unity.git

# Python
pip install aethex-sdk`
      },
      {
        id: 'authentication',
        title: 'Authentication',
        content: 'All API requests require authentication using your API key. Include it in the Authorization header of your requests.',
        codeExample: `// JavaScript
const client = new AeThex({
  apiKey: 'aethex_live_abc123xyz...',
  projectId: 'proj_xyz789'
});

// The SDK automatically includes your API key
// in all requests`
      },
      {
        id: 'first-request',
        title: 'Your First Request',
        content: 'Make your first API call to sync player state across platforms.',
        codeExample: `// Sync player state
const result = await client.sync.setState('player-123', {
  position: { x: 100, y: 50 },
  health: 100,
  inventory: ['sword', 'shield']
});

console.log('State synced:', result.success);
// Output: State synced: true`
      }
    ]
  },
  {
    id: 'authentication-api',
    title: 'Authentication',
    icon: ShieldCheck,
    description: 'Secure player authentication and session management',
    subsections: [
      {
        id: 'login',
        title: 'Player Login',
        content: 'Authenticate players and receive access tokens for secure API access.',
        codeExample: `POST /api/v1/auth/login

// Request
{
  "email": "player@example.com",
  "password": "secure_password"
}

// Response
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 86400,
  "player": {
    "id": "player-123",
    "displayName": "DragonSlayer42"
  }
}`
      },
      {
        id: 'register',
        title: 'Player Registration',
        content: 'Create new player accounts with email verification.',
        codeExample: `POST /api/v1/auth/register

// Request
{
  "email": "newplayer@example.com",
  "displayName": "EpicGamer99",
  "password": "secure_password"
}

// Response
{
  "success": true,
  "player": {
    "id": "player-456",
    "verificationRequired": true
  }
}`
      },
      {
        id: 'token-refresh',
        title: 'Token Refresh',
        content: 'Refresh expired access tokens without requiring re-authentication.',
        codeExample: `POST /api/v1/auth/refresh

// Request
{
  "refreshToken": "refresh_token_here"
}

// Response
{
  "success": true,
  "token": "new_access_token",
  "expiresIn": 86400
}`
      }
    ]
  },
  {
    id: 'state-sync',
    title: 'State Synchronization',
    icon: Database,
    description: 'Real-time player state sync across all platforms and devices',
    subsections: [
      {
        id: 'set-state',
        title: 'Set Player State',
        content: 'Update player state and automatically sync across all connected devices.',
        codeExample: `POST /api/v1/sync/setState

// Request
{
  "playerId": "player-123",
  "state": {
    "position": { "x": 100, "y": 50, "z": 0 },
    "health": 85,
    "mana": 120,
    "inventory": ["sword", "shield", "potion"],
    "level": 15
  }
}

// Response
{
  "success": true,
  "version": 42,
  "syncedDevices": ["pc", "mobile"],
  "latency": 45
}`
      },
      {
        id: 'get-state',
        title: 'Get Player State',
        content: 'Retrieve the current synchronized state for a player.',
        codeExample: `GET /api/v1/sync/getState?playerId=player-123

// Response
{
  "success": true,
  "state": {
    "position": { "x": 100, "y": 50, "z": 0 },
    "health": 85,
    "level": 15
  },
  "lastUpdated": "2026-01-05T14:23:45.123Z",
  "version": 42
}`
      },
      {
        id: 'subscribe-updates',
        title: 'Subscribe to Updates',
        content: 'Listen for real-time state changes via WebSocket connection.',
        codeExample: `// Subscribe to state updates
client.sync.onUpdate('player-123', (state) => {
  console.log('State updated:', state);
  updateGameUI(state);
});

// Unsubscribe
client.sync.offUpdate('player-123');`
      }
    ]
  },
  {
    id: 'player-management',
    title: 'Player Management',
    icon: Users,
    description: 'Manage player profiles, stats, and preferences',
    subsections: [
      {
        id: 'create-player',
        title: 'Create Player',
        content: 'Create a new player profile with initial data.',
        codeExample: `POST /api/v1/players/create

// Request
{
  "email": "player@example.com",
  "displayName": "DragonSlayer",
  "metadata": {
    "preferredPlatform": "pc",
    "region": "us-west"
  }
}

// Response
{
  "success": true,
  "player": {
    "id": "player-789",
    "createdAt": "2026-01-05T14:23:45.123Z"
  }
}`
      },
      {
        id: 'get-player',
        title: 'Get Player Profile',
        content: 'Retrieve detailed player information and statistics.',
        codeExample: `GET /api/v1/players/player-123

// Response
{
  "success": true,
  "player": {
    "id": "player-123",
    "displayName": "DragonSlayer42",
    "level": 15,
    "experience": 4250,
    "achievements": 23,
    "totalPlayTime": 156.5,
    "lastSeen": "2026-01-05T14:20:00Z"
  }
}`
      },
      {
        id: 'update-player',
        title: 'Update Player Profile',
        content: 'Update player profile information and preferences.',
        codeExample: `PUT /api/v1/players/player-123

// Request
{
  "displayName": "MegaDragonSlayer",
  "metadata": {
    "theme": "dark",
    "language": "en"
  }
}

// Response
{
  "success": true,
  "player": {
    "id": "player-123",
    "displayName": "MegaDragonSlayer",
    "updatedAt": "2026-01-05T14:23:45.123Z"
  }
}`
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Events',
    icon: ChartLine,
    description: 'Track game events and player behavior analytics',
    subsections: [
      {
        id: 'track-event',
        title: 'Track Custom Events',
        content: 'Record custom game events for analytics and insights.',
        codeExample: `POST /api/v1/events/track

// Request
{
  "playerId": "player-123",
  "eventName": "level_completed",
  "eventData": {
    "level": 5,
    "score": 9500,
    "timeSeconds": 245,
    "deaths": 2
  }
}

// Response
{
  "success": true,
  "eventId": "evt_abc123"
}`
      },
      {
        id: 'get-analytics',
        title: 'Get Player Analytics',
        content: 'Retrieve aggregated analytics data for player behavior.',
        codeExample: `GET /api/v1/analytics/player-123?period=7d

// Response
{
  "success": true,
  "analytics": {
    "sessionsCount": 15,
    "totalPlayTime": 12.5,
    "levelsCompleted": 8,
    "achievements": 5,
    "averageSessionDuration": 50
  }
}`
      },
      {
        id: 'custom-metrics',
        title: 'Custom Metrics',
        content: 'Define and track custom game metrics.',
        codeExample: `POST /api/v1/metrics/record

// Request
{
  "playerId": "player-123",
  "metricName": "gold_earned",
  "value": 1500,
  "metadata": {
    "source": "quest_completion",
    "questId": "quest_42"
  }
}

// Response
{
  "success": true,
  "recorded": true
}`
      }
    ]
  }
]

interface DocumentationSidebarProps {
  sections: DocSection[]
  activeSection: string
  onSectionChange: (sectionId: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

function DocumentationSidebar({ 
  sections, 
  activeSection, 
  onSectionChange,
  searchQuery,
  onSearchChange 
}: DocumentationSidebarProps) {
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.subsections.some(sub => 
      sub.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
        <Input
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search documentation..."
          className="pl-10"
        />
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-2 pr-4">
          {filteredSections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            
            return (
              <div key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                  }`}
                >
                  <Icon size={16} weight={isActive ? 'fill' : 'regular'} />
                  <span className="font-medium text-sm">{section.title}</span>
                </button>
                
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="ml-6 mt-1 space-y-1"
                  >
                    {section.subsections.map((sub) => (
                      <a
                        key={sub.id}
                        href={`#${sub.id}`}
                        className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}

interface DocumentationContentProps {
  section: DocSection
}

function DocumentationContent({ section }: DocumentationContentProps) {
  const Icon = section.icon

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Icon size={32} className="text-primary" weight="duotone" />
          <h1 className="text-3xl font-bold">{section.title}</h1>
        </div>
        <p className="text-lg text-muted-foreground">{section.description}</p>
      </div>

      <Separator />

      {section.subsections.map((subsection, index) => (
        <motion.div
          key={subsection.id}
          id={subsection.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="scroll-mt-20"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-3">{subsection.title}</h2>
            <p className="text-muted-foreground mb-4">{subsection.content}</p>
            
            {subsection.codeExample && (
              <div className="mt-4">
                <ScrollArea className="h-auto max-h-[400px]">
                  <pre className="p-4 bg-muted rounded-lg border border-border">
                    <code className="text-sm font-mono text-accent">
                      {subsection.codeExample}
                    </code>
                  </pre>
                </ScrollArea>
              </div>
            )}
          </Card>
        </motion.div>
      ))}

      <Card className="p-6 border-primary/30 bg-primary/5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Try it in the Playground</h3>
            <p className="text-muted-foreground">
              Test these endpoints with live requests and see real responses.
            </p>
          </div>
          <Link to="/playground">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ArrowRight size={24} className="text-primary" />
            </motion.div>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export function ComprehensiveDocs() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [searchQuery, setSearchQuery] = useState('')

  const currentSection = docSections.find(s => s.id === activeSection) || docSections[0]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <DocumentationSidebar
          sections={docSections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      <div className="lg:col-span-3">
        <DocumentationContent section={currentSection} />
      </div>
    </div>
  )
}
