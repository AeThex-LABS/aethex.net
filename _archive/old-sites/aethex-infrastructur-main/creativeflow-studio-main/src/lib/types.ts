export type Division = 
  | 'staff' 
  | 'labs' 
  | 'gameforge' 
  | 'corp' 
  | 'foundation' 
  | 'devlink' 
  | 'nexus'

export interface Developer {
  id: string
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
  email?: string
}

export const DIVISION_COLORS: Record<Division, string> = {
  staff: '#7C3AED',
  labs: '#FBBF24',
  gameforge: '#22C55E',
  corp: '#3B82F6',
  foundation: '#EF4444',
  devlink: '#06B6D4',
  nexus: '#A855F7',
}

export const DIVISION_NAMES: Record<Division, string> = {
  staff: 'Staff',
  labs: 'Labs',
  gameforge: 'GameForge',
  corp: 'Corp',
  foundation: 'Foundation',
  devlink: 'Dev-Link',
  nexus: 'Nexus',
}
