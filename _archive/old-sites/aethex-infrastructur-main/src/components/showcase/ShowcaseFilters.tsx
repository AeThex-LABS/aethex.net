import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MagnifyingGlass, X, Funnel } from '@phosphor-icons/react'
import type { ProjectCategory } from '@/pages/ShowcasePage'
import { 
  Lightbulb, 
  GameController, 
  Briefcase, 
  ShieldCheck, 
  GitBranch, 
  Cube 
} from '@phosphor-icons/react'
import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'

const categories = [
  { id: 'all' as const, name: 'All Projects', icon: null, color: 'oklch(0.62 0.24 286)' },
  { id: 'labs' as const, name: 'Labs', icon: Lightbulb, color: 'oklch(0.80 0.15 85)' },
  { id: 'gameforge' as const, name: 'GameForge', icon: GameController, color: 'oklch(0.65 0.20 145)' },
  { id: 'corp' as const, name: 'Corp', icon: Briefcase, color: 'oklch(0.60 0.20 250)' },
  { id: 'foundation' as const, name: 'Foundation', icon: ShieldCheck, color: 'oklch(0.62 0.24 25)' },
  { id: 'devlink' as const, name: 'Dev-Link', icon: GitBranch, color: 'oklch(0.68 0.16 205)' },
  { id: 'nexus' as const, name: 'Nexus', icon: Cube, color: 'oklch(0.68 0.22 295)' }
]

export const TECHNOLOGIES = [
  'React',
  'TypeScript',
  'Unity',
  'WebGL',
  'TensorFlow',
  'Blockchain',
  'WebRTC',
  'AI',
  'Machine Learning',
  'Quantum Computing',
  'Three.js',
  'Node.js',
  'Python',
  'Rust',
  'Go'
]

export const PROJECT_TAGS = [
  'Real-time Sync',
  'Multiplayer',
  'Security',
  'Privacy',
  'Collaboration',
  'Developer Tools',
  'Education',
  'Enterprise',
  'Analytics',
  'Visualization',
  'API Design',
  'Monitoring',
  'Data Pipeline',
  'Distributed Systems',
  'DeFi',
  'Content Generation',
  'Automation',
  'Procedural',
  'Indie Game'
]

interface ShowcaseFiltersProps {
  selectedCategory: ProjectCategory
  onCategoryChange: (category: ProjectCategory) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedTechnologies: string[]
  onTechnologiesChange: (technologies: string[]) => void
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
}

export function ShowcaseFilters({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange,
  selectedTechnologies,
  onTechnologiesChange,
  selectedTags,
  onTagsChange
}: ShowcaseFiltersProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  const toggleTechnology = (tech: string) => {
    if (selectedTechnologies.includes(tech)) {
      onTechnologiesChange(selectedTechnologies.filter(t => t !== tech))
    } else {
      onTechnologiesChange([...selectedTechnologies, tech])
    }
  }

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag))
    } else {
      onTagsChange([...selectedTags, tag])
    }
  }

  const clearAllFilters = () => {
    onCategoryChange('all')
    onTechnologiesChange([])
    onTagsChange([])
    onSearchChange('')
  }

  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) + 
    selectedTechnologies.length + 
    selectedTags.length

  return (
    <section className="py-8 px-6 sticky top-20 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <MagnifyingGlass 
              size={20} 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          <div className="flex gap-2 items-center">
            <Popover open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="relative"
                >
                  <Funnel size={16} className="mr-2" />
                  Advanced Filters
                  {activeFiltersCount > 0 && (
                    <Badge 
                      variant="secondary" 
                      className="ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
                    >
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-0" align="end">
                <ScrollArea className="h-[500px]">
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">Advanced Filters</h4>
                      {activeFiltersCount > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearAllFilters}
                          className="h-8 text-xs"
                        >
                          Clear All
                        </Button>
                      )}
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h5 className="font-medium text-sm text-foreground">Technologies</h5>
                      <div className="space-y-2">
                        {TECHNOLOGIES.map((tech) => (
                          <label
                            key={tech}
                            className="flex items-center space-x-2 cursor-pointer hover:bg-accent/10 rounded p-2 -mx-2"
                          >
                            <Checkbox
                              checked={selectedTechnologies.includes(tech)}
                              onCheckedChange={() => toggleTechnology(tech)}
                            />
                            <span className="text-sm">{tech}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h5 className="font-medium text-sm text-foreground">Tags</h5>
                      <div className="space-y-2">
                        {PROJECT_TAGS.map((tag) => (
                          <label
                            key={tag}
                            className="flex items-center space-x-2 cursor-pointer hover:bg-accent/10 rounded p-2 -mx-2"
                          >
                            <Checkbox
                              checked={selectedTags.includes(tag)}
                              onCheckedChange={() => toggleTag(tag)}
                            />
                            <span className="text-sm">{tag}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.id
            
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={`${
                  isActive 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'hover:bg-card'
                }`}
              >
                {Icon && (
                  <Icon 
                    size={16} 
                    weight="fill" 
                    style={{ color: isActive ? 'currentColor' : category.color }}
                    className="mr-2"
                  />
                )}
                {category.name}
              </Button>
            )
          })}
        </div>

        {(selectedTechnologies.length > 0 || selectedTags.length > 0) && (
          <div className="flex flex-wrap gap-2 pt-2">
            {selectedTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="pl-2 pr-1 py-1 bg-accent/20 border border-accent/30"
              >
                <span className="text-xs mr-1">{tech}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => toggleTechnology(tech)}
                >
                  <X size={12} />
                </Button>
              </Badge>
            ))}
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="pl-2 pr-1 py-1 bg-primary/20 border border-primary/30"
              >
                <span className="text-xs mr-1">{tag}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => toggleTag(tag)}
                >
                  <X size={12} />
                </Button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
