import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ShowcaseHero } from '@/components/showcase/ShowcaseHero'
import { ShowcaseGrid } from '@/components/showcase/ShowcaseGrid'
import { ShowcaseFilters } from '@/components/showcase/ShowcaseFilters'
import { ShowcaseStats } from '@/components/showcase/ShowcaseStats'
import { ShowcaseCallToAction } from '@/components/showcase/ShowcaseCallToAction'
import { useState } from 'react'

export type ProjectCategory = 'all' | 'labs' | 'gameforge' | 'corp' | 'foundation' | 'devlink' | 'nexus'

export function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ShowcaseHero />
      <ShowcaseStats />
      <ShowcaseFilters 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedTechnologies={selectedTechnologies}
        onTechnologiesChange={setSelectedTechnologies}
        selectedTags={selectedTags}
        onTagsChange={setSelectedTags}
      />
      <ShowcaseGrid 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        selectedTechnologies={selectedTechnologies}
        selectedTags={selectedTags}
      />
      <ShowcaseCallToAction />
      <Footer />
    </div>
  )
}
