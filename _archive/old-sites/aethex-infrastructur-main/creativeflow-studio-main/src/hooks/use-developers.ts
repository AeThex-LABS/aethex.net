import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Developer } from '@/lib/types'

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
      const { data, error } = await supabase
        .from('developers')
        .select('*')
        .order('name', { ascending: true })

      if (error) throw error

      setDevelopers(data || [])
      setError(null)
    } catch (err) {
      console.error('Error fetching developers:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch developers')
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
