import { useState, useEffect } from 'react'
import { X, MapPin } from '@phosphor-icons/react'
import { Developer, Division, DIVISION_COLORS, DIVISION_NAMES } from '@/lib/types'
import { useDevelopers } from '@/hooks/use-developers'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

interface DeveloperFormProps {
  developer?: Developer | null
  onClose: () => void
  onSuccess: () => void
}

interface FormData {
  name: string
  role: string
  division: Division
  location: string
  coordinates: {
    lat: number
    lng: number
  }
  avatar: string
  bio: string
  skills: string[]
  projects: string[]
  email: string
}

export function DeveloperForm({ developer, onClose, onSuccess }: DeveloperFormProps) {
  const { addDeveloper, updateDeveloper } = useDevelopers()
  const [submitting, setSubmitting] = useState(false)
  const [skillInput, setSkillInput] = useState('')
  const [projectInput, setProjectInput] = useState('')

  const [formData, setFormData] = useState<FormData>({
    name: '',
    role: '',
    division: 'staff',
    location: '',
    coordinates: { lat: 0, lng: 0 },
    avatar: '',
    bio: '',
    skills: [],
    projects: [],
    email: ''
  })

  useEffect(() => {
    if (developer) {
      setFormData({
        name: developer.name,
        role: developer.role,
        division: developer.division,
        location: developer.location,
        coordinates: developer.coordinates,
        avatar: developer.avatar,
        bio: developer.bio,
        skills: developer.skills,
        projects: developer.projects,
        email: developer.email || ''
      })
    }
  }, [developer])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.role.trim() || !formData.location.trim()) {
      toast.error('Validation error', {
        description: 'Name, role, and location are required'
      })
      return
    }

    if (formData.coordinates.lat < -90 || formData.coordinates.lat > 90) {
      toast.error('Validation error', {
        description: 'Latitude must be between -90 and 90'
      })
      return
    }

    if (formData.coordinates.lng < -180 || formData.coordinates.lng > 180) {
      toast.error('Validation error', {
        description: 'Longitude must be between -180 and 180'
      })
      return
    }

    setSubmitting(true)

    try {
      if (developer) {
        const { error } = await updateDeveloper(developer.id, formData)
        if (error) {
          toast.error('Failed to update developer', { description: error })
        } else {
          toast.success('Developer updated', { 
            description: `${formData.name} has been updated successfully` 
          })
          onSuccess()
        }
      } else {
        const { error } = await addDeveloper(formData)
        if (error) {
          toast.error('Failed to add developer', { description: error })
        } else {
          toast.success('Developer added', { 
            description: `${formData.name} has been added to the directory` 
          })
          onSuccess()
        }
      }
    } finally {
      setSubmitting(false)
    }
  }

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }))
      setSkillInput('')
    }
  }

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }))
  }

  const addProject = () => {
    if (projectInput.trim() && !formData.projects.includes(projectInput.trim())) {
      setFormData(prev => ({
        ...prev,
        projects: [...prev.projects, projectInput.trim()]
      }))
      setProjectInput('')
    }
  }

  const removeProject = (project: string) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p !== project)
    }))
  }

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground z-30" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground z-30" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground z-30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground z-30" />

      <form onSubmit={handleSubmit} className="h-full flex flex-col">
        <div className="p-6 border-b-2 border-foreground">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-mono">
                {developer ? 'Edit' : 'Add'} <span className="relative">Developer
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground" />
                </span>
              </h1>
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest mt-1">
                {developer ? 'Update developer information' : 'Create new developer profile'}
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-2 border-foreground rounded-none font-mono uppercase tracking-wider"
            >
              <X className="w-5 h-5 mr-2" />
              Cancel
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-6 max-w-4xl mx-auto">
            <Card className="p-6 border-2 border-border rounded-none space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    className="border-2 border-border rounded-none font-mono"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Role *
                  </Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                    placeholder="Senior Software Engineer"
                    className="border-2 border-border rounded-none font-mono"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="division" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Division *
                  </Label>
                  <Select
                    value={formData.division}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, division: value as Division }))}
                  >
                    <SelectTrigger className="border-2 border-border rounded-none font-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(Object.keys(DIVISION_COLORS) as Division[]).map(division => (
                        <SelectItem key={division} value={division} className="font-mono">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 border-2" 
                              style={{ borderColor: DIVISION_COLORS[division] }}
                            />
                            {DIVISION_NAMES[division]}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@aethex.com"
                    className="border-2 border-border rounded-none font-mono"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Location *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="San Francisco, CA, USA"
                      className="border-2 border-border rounded-none font-mono pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lat" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Latitude * (-90 to 90)
                  </Label>
                  <Input
                    id="lat"
                    type="number"
                    step="0.0001"
                    value={formData.coordinates.lat}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      coordinates: { ...prev.coordinates, lat: parseFloat(e.target.value) || 0 }
                    }))}
                    placeholder="37.7749"
                    className="border-2 border-border rounded-none font-mono"
                    required
                    min="-90"
                    max="90"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lng" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Longitude * (-180 to 180)
                  </Label>
                  <Input
                    id="lng"
                    type="number"
                    step="0.0001"
                    value={formData.coordinates.lng}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      coordinates: { ...prev.coordinates, lng: parseFloat(e.target.value) || 0 }
                    }))}
                    placeholder="-122.4194"
                    className="border-2 border-border rounded-none font-mono"
                    required
                    min="-180"
                    max="180"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="A brief description about the developer..."
                    className="border-2 border-border rounded-none font-mono resize-none"
                    rows={4}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="skills" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Skills
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="skills"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          addSkill()
                        }
                      }}
                      placeholder="Add a skill..."
                      className="border-2 border-border rounded-none font-mono"
                    />
                    <Button
                      type="button"
                      onClick={addSkill}
                      variant="outline"
                      className="border-2 border-border rounded-none font-mono px-6"
                    >
                      Add
                    </Button>
                  </div>
                  {formData.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.skills.map(skill => (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1 bg-secondary border border-border rounded-none font-mono text-sm"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="projects" className="font-mono uppercase tracking-wider text-xs text-muted-foreground">
                    Current Projects
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="projects"
                      value={projectInput}
                      onChange={(e) => setProjectInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          addProject()
                        }
                      }}
                      placeholder="Add a project..."
                      className="border-2 border-border rounded-none font-mono"
                    />
                    <Button
                      type="button"
                      onClick={addProject}
                      variant="outline"
                      className="border-2 border-border rounded-none font-mono px-6"
                    >
                      Add
                    </Button>
                  </div>
                  {formData.projects.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.projects.map(project => (
                        <div
                          key={project}
                          className="inline-flex items-center gap-2 px-3 py-1 bg-secondary border border-border rounded-none font-mono text-sm"
                        >
                          {project}
                          <button
                            type="button"
                            onClick={() => removeProject(project)}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </ScrollArea>

        <div className="p-6 border-t-2 border-foreground">
          <div className="max-w-4xl mx-auto flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={submitting}
              className="border-2 border-border rounded-none font-mono uppercase tracking-wider px-8"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground rounded-none font-mono uppercase tracking-wider px-8"
            >
              {submitting ? 'Saving...' : developer ? 'Update Developer' : 'Add Developer'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
