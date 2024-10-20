import { create } from 'zustand'

interface useAuthT {
    token: string | null | undefined
    setToken: (token: string | null) => void
    user: any
    setUser: (user: any) => void
}

const useAuth = create<useAuthT>((set) => ({
    token: undefined,
    setToken: (token) => set({ token }),
    user: undefined,
    setUser: (user) => set({ user }),
}))

export default useAuth
