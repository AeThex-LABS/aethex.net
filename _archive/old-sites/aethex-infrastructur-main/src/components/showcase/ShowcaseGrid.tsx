import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowUpRight, 
  Star, 
  GitBranch,
  Users,
  Lightbulb, 
  GameController, 
  Briefcase, 
  ShieldCheck, 
  GitBranch as GitBranchIcon, 
  Cube 
} from '@phosphor-icons/react'
import type { ProjectCategory } from '@/pages/ShowcasePage'
import { useMemo } from 'react'

const armIcons = {
  labs: Lightbulb,
  gameforge: GameController,
  corp: Briefcase,
  foundation: ShieldCheck,
  devlink: GitBranchIcon,
  nexus: Cube
}

const armColors = {
  labs: 'oklch(0.80 0.15 85)',
  gameforge: 'oklch(0.65 0.20 145)',
  corp: 'oklch(0.60 0.20 250)',
  foundation: 'oklch(0.62 0.24 25)',
  devlink: 'oklch(0.68 0.16 205)',
  nexus: 'oklch(0.68 0.22 295)'
}

interface Project {
  id: string
  title: string
  description: string
  category: Exclude<ProjectCategory, 'all'>
  author: string
  authorAvatar: string
  stars: number
  forks: number
  technologies: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Quantum Quest',
    description: 'A cross-platform multiplayer RPG with real-time state synchronization across web, mobile, and console platforms.',
    category: 'gameforge',
    author: 'Sarah Chen',
    authorAvatar: 'SC',
    stars: 1247,
    forks: 89,
    technologies: ['Unity', 'WebGL', 'Node.js'],
    tags: ['Real-time Sync', 'Multiplayer', 'Indie Game'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23065f46"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%23ffffff" text-anchor="middle" dy=".3em"%3EQuantum Quest%3C/text%3E%3C/svg%3E'
  },
  {
    id: '2',
    title: 'DevOps Dashboard Pro',
    description: 'Enterprise monitoring solution with real-time metrics, alerting, and cross-team collaboration features.',
    category: 'corp',
    author: 'Marcus Johnson',
    authorAvatar: 'MJ',
    stars: 892,
    forks: 124,
    technologies: ['React', 'TypeScript', 'Node.js'],
    tags: ['Monitoring', 'Enterprise', 'Analytics'],
    liveUrl: 'https://example.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%231e40af"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3EDevOps Dashboard%3C/text%3E%3C/svg%3E'
  },
  {
    id: '3',
    title: 'Neural Network Playground',
    description: 'Interactive ML visualization tool for experimenting with neural networks and seeing results in real-time.',
    category: 'labs',
    author: 'Dr. Emily Park',
    authorAvatar: 'EP',
    stars: 2341,
    forks: 456,
    technologies: ['TensorFlow', 'Python', 'React'],
    tags: ['Machine Learning', 'Visualization', 'Education'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23b45309"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23ffffff" text-anchor="middle" dy=".3em"%3ENeural Network Lab%3C/text%3E%3C/svg%3E'
  },
  {
    id: '4',
    title: 'SecureAuth Identity',
    description: 'Decentralized identity management system with biometric authentication and zero-knowledge proofs.',
    category: 'foundation',
    author: 'Alex Rivera',
    authorAvatar: 'AR',
    stars: 1567,
    forks: 203,
    technologies: ['Blockchain', 'Rust', 'React'],
    tags: ['Security', 'Privacy', 'DeFi'],
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%239f1239"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3ESecureAuth%3C/text%3E%3C/svg%3E'
  },
  {
    id: '5',
    title: 'CodeSync Teams',
    description: 'Real-time collaborative coding platform with video chat, shared terminals, and AI pair programming.',
    category: 'devlink',
    author: 'Jamie Wu',
    authorAvatar: 'JW',
    stars: 3421,
    forks: 672,
    technologies: ['WebRTC', 'AI', 'TypeScript'],
    tags: ['Collaboration', 'Developer Tools', 'Real-time Sync'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23155e75"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%23ffffff" text-anchor="middle" dy=".3em"%3ECodeSync%3C/text%3E%3C/svg%3E'
  },
  {
    id: '6',
    title: 'AI Content Studio',
    description: 'Platform for generating, editing, and managing AI-powered content with multi-modal support.',
    category: 'nexus',
    author: 'Priya Sharma',
    authorAvatar: 'PS',
    stars: 1823,
    forks: 298,
    technologies: ['AI', 'Python', 'React'],
    tags: ['Content Generation', 'Automation', 'Machine Learning'],
    liveUrl: 'https://example.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%236b21a8"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3EAI Content Studio%3C/text%3E%3C/svg%3E'
  },
  {
    id: '7',
    title: 'Pixel Dungeon Online',
    description: 'Browser-based roguelike with procedural generation and cross-platform progression.',
    category: 'gameforge',
    author: 'Tom Baker',
    authorAvatar: 'TB',
    stars: 956,
    forks: 143,
    technologies: ['WebGL', 'TypeScript', 'Three.js'],
    tags: ['Procedural', 'Indie Game', 'Multiplayer'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23065f46"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3EPixel Dungeon%3C/text%3E%3C/svg%3E'
  },
  {
    id: '8',
    title: 'CloudFlow Analytics',
    description: 'Business intelligence platform with real-time data pipelines and advanced visualization capabilities.',
    category: 'corp',
    author: 'Linda Martinez',
    authorAvatar: 'LM',
    stars: 1134,
    forks: 187,
    technologies: ['React', 'TypeScript', 'Python'],
    tags: ['Analytics', 'Data Pipeline', 'Visualization', 'Enterprise'],
    liveUrl: 'https://example.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%231e40af"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3ECloudFlow Analytics%3C/text%3E%3C/svg%3E'
  },
  {
    id: '9',
    title: 'Quantum Simulator',
    description: 'Educational quantum computing simulator with interactive circuit design and visualization.',
    category: 'labs',
    author: 'Dr. Robert Chen',
    authorAvatar: 'RC',
    stars: 2789,
    forks: 521,
    technologies: ['Quantum Computing', 'Python', 'React'],
    tags: ['Education', 'Visualization', 'Machine Learning'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23b45309"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3EQuantum Simulator%3C/text%3E%3C/svg%3E'
  },
  {
    id: '10',
    title: 'CryptoWallet Hub',
    description: 'Multi-chain crypto wallet with hardware security module integration and DeFi features.',
    category: 'foundation',
    author: 'Nina Patel',
    authorAvatar: 'NP',
    stars: 1998,
    forks: 334,
    technologies: ['Blockchain', 'Rust', 'TypeScript'],
    tags: ['Security', 'DeFi', 'Privacy'],
    liveUrl: 'https://example.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%239f1239"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3ECryptoWallet Hub%3C/text%3E%3C/svg%3E'
  },
  {
    id: '11',
    title: 'API Gateway Studio',
    description: 'Visual API design tool with automatic documentation generation and testing capabilities.',
    category: 'devlink',
    author: 'Chris Anderson',
    authorAvatar: 'CA',
    stars: 2456,
    forks: 412,
    technologies: ['TypeScript', 'Node.js', 'React'],
    tags: ['API Design', 'Developer Tools', 'Automation'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23155e75"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3EAPI Gateway Studio%3C/text%3E%3C/svg%3E'
  },
  {
    id: '12',
    title: 'DataMesh Platform',
    description: 'Distributed data orchestration system with real-time syncing and intelligent caching.',
    category: 'nexus',
    author: 'Maya Thompson',
    authorAvatar: 'MT',
    stars: 1645,
    forks: 267,
    technologies: ['Go', 'React', 'TypeScript'],
    tags: ['Distributed Systems', 'Real-time Sync', 'Data Pipeline'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    imageUrl: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%236b21a8"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23ffffff" text-anchor="middle" dy=".3em"%3EDataMesh Platform%3C/text%3E%3C/svg%3E'
  }
]

interface ShowcaseGridProps {
  selectedCategory: ProjectCategory
  searchQuery: string
  selectedTechnologies: string[]
  selectedTags: string[]
}

export function ShowcaseGrid({ 
  selectedCategory, 
  searchQuery,
  selectedTechnologies,
  selectedTags 
}: ShowcaseGridProps) {
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesTechnologies = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => 
          project.technologies.some(projectTech => projectTech.toLowerCase().includes(tech.toLowerCase()))
        )
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(selectedTag => 
          project.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
        )
      
      return matchesCategory && matchesSearch && matchesTechnologies && matchesTags
    })
  }, [selectedCategory, searchQuery, selectedTechnologies, selectedTags])

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">No projects found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const ArmIcon = armIcons[project.category]
              const armColor = armColors[project.category]
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-video bg-secondary">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge 
                          variant="secondary" 
                          className="bg-background/80 backdrop-blur-sm"
                        >
                          <ArmIcon size={12} weight="fill" style={{ color: armColor }} className="mr-1" />
                          <span className="text-xs">{project.category}</span>
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {project.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map(tech => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs border-accent/40 bg-accent/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map(tag => (
                            <Badge 
                              key={tag} 
                              variant="outline" 
                              className="text-xs border-border"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star size={16} weight="fill" className="text-accent" />
                            <span>{project.stars.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch size={16} />
                            <span>{project.forks}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {project.liveUrl && (
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:bg-primary/10"
                            >
                              <ArrowUpRight size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
                          {project.authorAvatar}
                        </div>
                        <span className="text-sm text-muted-foreground">by {project.author}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
