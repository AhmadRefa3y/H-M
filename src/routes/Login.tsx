import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LeftSide from '../components/LoginLeftSide'
import Inputs from '../components/Inputs'
import useAuth from '../utils/zustand/useAuth'

const Login = () => {
    const { token, setToken, user, setUser } = useAuth()

    const [formLoginData, setFormLoginData] = useState({
        email: '',
        password: '',
    })

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormLoginData({ ...formLoginData, [name]: value })

        if (name === 'email' && emailPattern.test(value)) {
            setEmailError('')
        }
        if (name === 'password' && passwordPattern.test(value)) {
            setPasswordError('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let validEmail = true
        let validPassword = true

        if (!emailPattern.test(formLoginData.email)) {
            setEmailError(
                'الرجاء إدخال بريد إلكتروني صالح (مثل: example@gmail.com).'
            )
            validEmail = false
        } else {
            setEmailError('')
        }

        if (!passwordPattern.test(formLoginData.password)) {
            setPasswordError(
                'يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل، تشمل حرفًا كبيرًا، حرفًا صغيرًا، ورقمًا.'
            )
            validPassword = false
        } else {
            setPasswordError('')
        }

        if (validEmail && validPassword) {
            try {
                const response = await fetch(
                    // 'https://h-m-server.vercel.app/api/user/login',
                    'http://localhost:8080/api/user/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                        body: JSON.stringify(formLoginData),
                    }
                )

                const result = await response.json()
                if (response.ok) {
                    setToken(result.token)
                    setUser(result.data)
                    navigate('/ProfilePage')
                } else {
                    console.log('فشل في تسجيل الدخول: ' + result.message)
                }
            } catch (err) {
                console.error('Login Error:', err)
                console.log('حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.')
            }
        }
    }

    return (
        <div className="md:w-[70%] mx-auto grid grid-cols-1 pt-9 w-full px-4 animate-slideUp relative">
            <div className="w-[100%] flex md:justify-start font-hm-sans-arabic border-b border-gray-300 justify-center">
                <p className="text-xl pb-3">
                    <b>تسجيل الدخول</b>
                </p>
            </div>
            <div className="w-[100%] md:grid md:grid-cols-2 divide-gray-400 mt-11">
                <div className="w-[100%] flex flex-col font-hm-sans-arabic gap-11 lg:border-l border-gray-300">
                    <p className="md:text-xl invisible md:visible">
                        <b>تسجيل الدخول عن طريق البريد الالكتروني</b>
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-11 lg:pl-20 pb-4"
                    >
                        <Inputs
                            handleChange={handleChange}
                            data={formLoginData}
                            passwordError={passwordError}
                            emailError={emailError}
                        />
                        <div className="flex md:flex-row align-middle md:gap-11 flex-col">
                            <button
                                type="submit"
                                className="bg-black text-white px-4 py-2 text-sm w-full md:w-[40%] h-11 hover:opacity-50 transition-opacity duration-200"
                            >
                                تسجيل الدخول
                            </button>
                            <Link
                                to="#"
                                className="flex flex-row md:justify-normal justify-center ml-4 text-sm pt-4 text-zinc-700 w-full hover:underline transition-all duration-200"
                            >
                                هل نسيت كلمه السر؟
                            </Link>
                        </div>
                    </form>
                </div>
                <LeftSide />
            </div>
        </div>
    )
}

export default Login
