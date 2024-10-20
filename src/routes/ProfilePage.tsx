import React, { useEffect, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { IoIosArrowRoundBack } from 'react-icons/io'
import useAuth from '../utils/zustand/useAuth'
import api from '../api'

const ProfilePage = () => {
    const { token, setToken, user, setUser } = useAuth()
    const [userData, setuser] = useState()
    const getUser = async () => {
        try {
            const res = await api.get('/user')
            console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log(error)
            setuser(null)
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    console.log(userData)

    return (
        <>
            <div className=" flex justify-between mt-20 md:w-auto w-full animate-slideUp relative">
                <div className="flex flex-col justify-start gap-10 items-center md:w-auto w-full md:m-0 mb-20  ">
                    <ul className="flex flex-col gap-5  text-gray-700 md:w-auto w-full  ">
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none">
                            <a
                                href="#"
                                className=" md:text-sm  text-lg  md:w-auto w-full font-light "
                            >
                                <b>حسابي</b>
                            </a>
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className=" md:text-sm  text-xl  font-light "
                            >
                                بطاقه الهدايا
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light  "
                            >
                                الطلبيات
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light"
                            >
                                تفاصيل الاتصال
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light"
                            >
                                سجل العناوين
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light"
                            >
                                مراجعه
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light"
                            >
                                المنتجات المفضله
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light "
                            >
                                تفضيلات التواصل
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light "
                            >
                                تغيير كلمه السر
                            </a>
                            <IoIosArrowRoundBack className="text-4xl  font-light md:hidden" />
                        </li>
                        <li className=" md:w-auto w-full border-solid border-b md:p-0 p-2 border-slate-900 md:border-none flex justify-between">
                            <a
                                href="#"
                                className="md:text-sm  text-xl font-light"
                            >
                                تسجيل الخروج
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-[80%]  md:block hidden">
                    <div className="w-[100%]  flex md:justify-start font-hm-sans-arabic  border-b  border-gray-300 justify-center ">
                        <p className="text-xl pb-1 font-light">
                            <b>حسابي</b>
                        </p>
                    </div>
                    <div className="w-[100%]  flex   md:justify-between font-hm-sans-arabic  border-b  border-gray-300  mt-9">
                        <p className="text-lg pb-1 font-light">احدث الطلبات</p>
                        <button
                            type="submit"
                            className="bg-black text-white  text-sm font-light  md:w-[15%]   hover:opacity-50 transition-opacity duration-200 "
                        >
                            تعديل معلومات الحساب
                        </button>
                    </div>
                    <div className="w-[100%]  flex md:justify-center font-hm-sans-arabic  border-b  border-gray-300 items-center h-1/3 ">
                        <button
                            type="submit"
                            className="bg-black font-light text-white  text-sm   md:w-[30%]   hover:opacity-50 transition-opacity duration-200 h-9 "
                        >
                            اذهب للتسوق
                        </button>
                    </div>
                    <div className="bg-blue-400	 p-8 my-4	">
                        <p className="text-white flex gap-3  ">
                            <AiOutlineInfoCircle className="text-white text-2xl font-bold inline  " />
                            هل تحتاج الي مساعده ف طلبيتك؟
                        </p>
                        <ul className="flex text-white text-sm gap-48 px-8 py-1 font-light">
                            <li>
                                <a>خدمه الزبائن</a>
                            </li>
                            <li>
                                <a>الاسترجاع والاستبدال</a>
                            </li>
                            <li>
                                <a>معلومات التوصيل</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[100%]   md:justify-start font-hm-sans-arabic  border-b  border-gray-300 justify-center my-6 ">
                        <p className="text-lg pb-1 font-light">تفاصيل الحساب</p>
                    </div>
                    <p className="md:text-sm  text-lg  md:w-auto w-full font-light">
                        عنوان البريد الالكتروني
                    </p>
                    <p className="md:text-sm  text-lg  md:w-auto w-full font-light  text-neutral-500">
                        {' '}
                        {user?.email ? user.email : 'لا يوجد'}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProfilePage
