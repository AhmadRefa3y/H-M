import React, { useEffect, useLayoutEffect } from 'react'
import useAuth from '../utils/zustand/useAuth'
import api, { RefreshAPi } from '../api'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { token, setToken, setUser } = useAuth()

    const fetchMe = async () => {
        try {
            const res = await RefreshAPi.get('/refresh-token')
            setToken(res.data.accessToken)
            setUser(res.data.user)
        } catch (error) {
            console.log(error)
            setToken(null)
            setUser(null)
        }
    }
    useEffect(() => {
        fetchMe()
    }, [])

    useLayoutEffect(() => {
        const authIntercepotr = api.interceptors.request.use((config) => {
            config.headers.Authorization = token
                ? `Bearer ${token}`
                : config.headers.Authorization
            console.log(config.headers.Authorization)
            return config
        })

        return () => {
            api.interceptors.request.eject(authIntercepotr)
        }
    }, [token])

    useLayoutEffect(() => {
        const authIntercepotr = api.interceptors.response.use(
            (response) => response,
            async (err) => {
                const originalRequest = err.config
                if (
                    (err.response.status === 401 ||
                        err.response.status === 403) &&
                    !originalRequest._retry
                ) {
                    originalRequest._retry = true
                    const res = await RefreshAPi.get('/refresh-token')
                    if (res.status === 200) {
                        setToken(res.data.accessToken)
                        setUser(res.data.user)
                        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`
                        return axios(originalRequest)
                    }
                }
                return Promise.reject(err)
            }
        )

        return () => {
            api.interceptors.response.eject(authIntercepotr)
        }
    }, [])
    return <>{children}</>
}

export default AuthProvider
