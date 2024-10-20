import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../utils/zustand/useAuth'
import axios from 'axios'

const TopMenu = () => {
    const { token, setToken, user, setUser } = useAuth()

    const logout = async () => {
        try {
            await axios.get('http://localhost:8080/api/logout', {
                withCredentials: true,
            })
            setToken(null)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=" mx-auto w-fit   justify-center items-center sm:py-1 py-0 hidden lg:flex">
            <ul className="flex gap-2 text-sm font-normal ">
                {user === null && (
                    <>
                        <li>
                            <Link to="/register">تسجيل مستخدم جديد</Link>
                        </li>
                        <li>
                            <Link to="/login">تسجيل الدخول</Link>
                        </li>
                    </>
                )}
                {user === undefined && (
                    <li className="w-[100px] h-[18px] animate-pulse bg-gray-200"></li>
                )}
                {user && (
                    <>
                        <li className="uppercase">اهلا بك ,{user.name} </li>
                        <Link to="/ProfilePage">حسابي</Link>

                        <li>
                            <button className="" onClick={logout}>
                                تسجيل الخروج
                            </button>
                        </li>
                    </>
                )}

                <li>
                    <a href="#">البحث عن محلاتنا</a>
                </li>
                <li>
                    <a href="#">English</a>
                </li>
            </ul>
        </div>
    )
}

export default TopMenu
