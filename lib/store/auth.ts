import { create } from 'zustand'
import { Database } from '@/lib/supabase/types'

type User = Database['public']['Tables']['users']['Row']

interface AuthState {
  user: User | null
  setUser: (user: User | null) => void
  isAdmin: () => boolean
  isEditor: () => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  isAdmin: () => get().user?.role === 'admin',
  isEditor: () => get().user?.role === 'editor',
}))