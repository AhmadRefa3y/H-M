import React, { useEffect, useLayoutEffect } from 'react'
import useAuth from '../utils/zustand/useAuth'
import axios from 'axios'
import api from '../api'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { token, setToken, user, setUser } = useAuth()
    useEffect(() => {
        const fetchAcessToken = async () => {
            try {
                const res = await api.get('/refresh-token')
                console.log(res.data)

                setToken(res.data.accessToken)
                setUser(res.data.user)
            } catch (error) {
                console.log(error)
                setToken(null)
                setUser(null)
            }
        }
        if (!token) {
            fetchAcessToken()
        }
    }, [])

    useLayoutEffect(() => {
        const authInterceptor = api.interceptors.request.use((config) => {
            config.headers.Authorization = token
                ? `Bearer ${token}`
                : config.headers.Authorization
            return config
        })

        return () => api.interceptors.request.eject(authInterceptor)
    }, [token])

    useLayoutEffect(() => {
        const refreshInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const OriginalReq = error.config

                if (
                    error.response.status === 403 ||
                    error.response.status === 401
                ) {
                    try {
                        console.log(error.response.status)
                        const res = await api.get('/refresh-token')
                        setToken(res.data.accessToken)
                        setUser(res.data.user)
                        OriginalReq.headers.Authorization = `Bearer ${res.data.accessToken}`
                        OriginalReq._retry = true

                        return axios(OriginalReq)
                    } catch (error) {
                        console.log(error)
                        setToken(null)
                        setUser(null)
                    }
                }

                return Promise.reject(error)
            }
        )

        return () => api.interceptors.response.eject(refreshInterceptor)
    }, [])
    return <>{children}</>
}

export default AuthProvider
