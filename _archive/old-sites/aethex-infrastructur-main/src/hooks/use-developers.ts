import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Developer } from '@/lib/types'

// Mock developers data for testing
const MOCK_DEVELOPERS: Developer[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'Senior Full Stack Engineer',
    division: 'labs',
    location: 'San Francisco, USA',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    avatar: 'AC',
    bio: 'Passionate about building scalable web applications and exploring new technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    projects: ['AeThex Cloud Platform', 'Developer Portal', 'API Gateway'],
    email: 'alex.chen@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    role: 'Lead Game Developer',
    division: 'gameforge',
    location: 'Barcelona, Spain',
    coordinates: { lat: 41.3874, lng: 2.1686 },
    avatar: 'MR',
    bio: 'Creating immersive gaming experiences with cutting-edge graphics.',
    skills: ['Unity', 'C#', 'Unreal Engine', 'C++', '3D Modeling'],
    projects: ['Nexus Arena', 'Galaxy Conquest', 'VR Adventures'],
    email: 'maria.rodriguez@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Yuki Tanaka',
    role: 'AI Research Scientist',
    division: 'labs',
    location: 'Tokyo, Japan',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    avatar: 'YT',
    bio: 'Researching next-generation AI systems with focus on NLP and computer vision.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    projects: ['AI Assistant', 'Image Recognition System', 'Chatbot Framework'],
    email: 'yuki.tanaka@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'DevOps Engineer',
    division: 'devlink',
    location: 'Seoul, South Korea',
    coordinates: { lat: 37.5665, lng: 126.978 },
    avatar: 'DK',
    bio: 'Building robust CI/CD pipelines and cloud infrastructure.',
    skills: ['Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'AWS'],
    projects: ['Infrastructure Automation', 'Deployment Pipeline', 'Monitoring System'],
    email: 'david.kim@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Emma Wilson',
    role: 'Product Designer',
    division: 'staff',
    location: 'London, United Kingdom',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    avatar: 'EW',
    bio: 'Crafting beautiful and intuitive user experiences.',
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
    projects: ['Design System', 'Mobile App Redesign', 'Dashboard UI'],
    email: 'emma.wilson@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Raj Patel',
    role: 'Blockchain Architect',
    division: 'nexus',
    location: 'Mumbai, India',
    coordinates: { lat: 19.076, lng: 72.8777 },
    avatar: 'RP',
    bio: 'Designing decentralized systems and smart contract solutions.',
    skills: ['Solidity', 'Ethereum', 'Web3.js', 'Rust', 'Blockchain'],
    projects: ['DeFi Platform', 'NFT Marketplace', 'DAO Framework'],
    email: 'raj.patel@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'Sophie Martin',
    role: 'Security Engineer',
    division: 'foundation',
    location: 'Paris, France',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    avatar: 'SM',
    bio: 'Securing systems and protecting against cyber threats.',
    skills: ['Security', 'Penetration Testing', 'Cryptography', 'Python', 'Go'],
    projects: ['Security Audit Tool', 'Vulnerability Scanner', 'Encryption Library'],
    email: 'sophie.martin@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'Lucas Silva',
    role: 'Mobile Developer',
    division: 'corp',
    location: 'São Paulo, Brazil',
    coordinates: { lat: -23.5505, lng: -46.6333 },
    avatar: 'LS',
    bio: 'Building native mobile experiences for iOS and Android.',
    skills: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Mobile UI'],
    projects: ['AeThex Mobile', 'Offline Sync', 'Push Notifications'],
    email: 'lucas.silva@aethex.dev',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export function useDevelopers() {
  const [developers, setDevelopers] = useState<Developer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDevelopers()

    const channel = supabase
      .channel('developers-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'developers',
        },
        () => {
          fetchDevelopers()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function fetchDevelopers() {
    try {
      setLoading(true)
      console.log('🔍 Fetching developers from Supabase...')
      const { data, error } = await supabase
        .from('developers')
        .select('*')
        .order('name', { ascending: true })

      console.log('📊 Supabase response:', { data, error, count: data?.length })

      if (error) throw error

      // Use mock data if no developers in database
      const developersData = data && data.length > 0 ? data : MOCK_DEVELOPERS
      setDevelopers(developersData)
      setError(null)
      console.log('✅ Developers loaded:', developersData.length, '(using ' + (data && data.length > 0 ? 'real' : 'mock') + ' data)')
    } catch (err) {
      console.error('❌ Error fetching developers, using mock data:', err)
      setDevelopers(MOCK_DEVELOPERS)
      setError(null) // Don't show error, just use mock data
    } finally {
      setLoading(false)
    }
  }

  async function addDeveloper(developer: Omit<Developer, 'id'>) {
    try {
      const { data, error } = await supabase
        .from('developers')
        .insert([developer])
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (err) {
      console.error('Error adding developer:', err)
      return { data: null, error: err instanceof Error ? err.message : 'Failed to add developer' }
    }
  }

  async function updateDeveloper(id: string, updates: Partial<Developer>) {
    try {
      const { data, error } = await supabase
        .from('developers')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (err) {
      console.error('Error updating developer:', err)
      return { data: null, error: err instanceof Error ? err.message : 'Failed to update developer' }
    }
  }

  async function deleteDeveloper(id: string) {
    try {
      const { error } = await supabase
        .from('developers')
        .delete()
        .eq('id', id)

      if (error) throw error

      return { error: null }
    } catch (err) {
      console.error('Error deleting developer:', err)
      return { error: err instanceof Error ? err.message : 'Failed to delete developer' }
    }
  }

  return {
    developers,
    loading,
    error,
    addDeveloper,
    updateDeveloper,
    deleteDeveloper,
    refetch: fetchDevelopers,
  }
}
