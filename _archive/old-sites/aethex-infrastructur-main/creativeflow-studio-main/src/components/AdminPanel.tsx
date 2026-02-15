import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui
import { DeveloperForm } from '@/components/D
import { Developer, Division, DIVISION_COLORS, DIVISION_

  onClose: () => void

  const { developers, loading, error, deleteDeveloper } = useDevelopers()
  const [editingDeveloper, set

  const filteredDevelopers 

}

export function AdminPanel({ onClose }: AdminPanelProps) {
  const { developers, loading, error, deleteDeveloper } = useDevelopers()
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingDeveloper, setEditingDeveloper] = useState<Developer | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterDivision, setFilterDivision] = useState<Division | 'all'>('all')

  const filteredDevelopers = useMemo(() => {
    let result = developers

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(dev =>
        dev.name.toLowerCase().includes(query) ||
        dev.role.toLowerCase().includes(query) ||
        dev.division.toLowerCase().includes(query) ||
        dev.location.toLowerCase().includes(query) ||
        dev.skills.some(skill => skill.toLowerCase().includes(query))
    if 
    }

    if (filterDivision !== 'all') {
      result = result.filter(dev => dev.division === filterDivision)
    }

    return result
    setEditingDeveloper(null)

    return (
    return developers.reduce((acc, dev) => {
      acc[dev.division] = (acc[dev.division] || 0) + 1
      return acc
      />
  }, [developers])

  const handleDelete = async (developer: Developer) => {
    if (!confirm(`Are you sure you want to delete ${developer.name}?`)) {
      return
     

    const { error } = await deleteDeveloper(developer.id)
            </h1
      toast.error('Failed to delete developer', { description: error })
          </
      toast.success('Developer deleted', { 
        description: `${developer.name} has been removed from the directory` 
      })
     
  }

  const handleFormSuccess = () => {
              Close
    setEditingDeveloper(null)
   

          <div className="flex-1">
            
                plac
                onChange={(e) => set
              />
          </div>
          <div className="flex item
          
                variant={filterDivisi
        
     
   

          
                </Badge>
              {(Object.keys(DIVISION_COLORS) as Division[]).map(division => {
                return (
                    key={division}
                    size="sm"

                        ? 'bg-foreground text-background
                    }`}
               
                  >
                    <Badge variant="secondary" className="ml-
                    </Badge>
                )
            </div
        </div>

        <div cla
            <div
            </div>
            <div cl
            </div>
            <div className="text-center py-12">
             
                  : 'No dev
            </div>
            <div cl
                <Card
                  className="p-
                  <div className="space-y-4">
             
                        style={{ 
                   
                     
                
              
            

                      <Badge
                        className="
                          borderCo
                          backgroundCo
                      >
                    
                    </div>
                    <Separator clas
                    <div className="flex gap-2">
                        variant="outline"
                
                  
                

                        size="sm"
                        className="flex-1 border-2 border-border rounded-none font-m
                        <Trash className="w-4 h-4 
                     
                  </div>
                size="sm"
          )}
      </ScrollArea>
  )


                }`}

                All



              </Button>



                  <Button











                    } : undefined}

                    {DIVISION_NAMES[division]}

                      {count}

                  </Button>

              })}



      </div>

      <ScrollArea className="flex-1">





          ) : error ? (

              <p className="text-destructive font-mono">Error: {error}</p>
            </div>
          ) : filteredDevelopers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-mono">





          ) : (













                        }}













                        style={{



                        }}

















                      </Button>



                        onClick={() => handleDelete(developer)}



                        Delete

                    </div>

                </Card>

            </div>

        </div>




