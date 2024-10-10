import { Link } from 'react-router-dom'
import { ImFacebook2 } from 'react-icons/im'
import { SlUser } from 'react-icons/sl'

const LeftSide = () => {
    return (
        <div className="w-[100%]  flex flex-col  font-hm-sans-arabic items-start md:gap-7 md:pr-28 gap-3 mb-20">
            <p className="text-xl invisible md:visible ">
                <b>سجل الآن عن طريق برامج التواصل الاجتماعي</b>
            </p>
            <div className="md:w-0 md:h-0 w-[100%] flex items-center justify-center md:hidden">
                <hr className="  border-zinc-700 w-[48%] flex  " />
                <span className=" text-black font-semibold flex items-center text-xl justify-center">
                    OR
                </span>
                <hr className=" border-gray-500 w-[48%]" />
            </div>

            <div className="md:w-auto flex flex-col w-full ">
                <button
                    className="flex justify-center  gap-5 p-3 border border-slate-700 h-12  text-xs text-zinc-700 md:mt-0 mt-3 "
                    type="submit"
                >
                    <ImFacebook2 className="flex  flex-col align-text-bottom text-2xl  text-sky-700  " />
                    <span className="pt-1">سجل دخول عن طريف الفيس بوك</span>
                </button>
            </div>
            <div className="md:w-auto flex flex-col w-full">
                <button
                    className="flex justify-center items-center  p-2 border border-slate-700 h-12 text-xs text-zinc-700"
                    type="submit"
                >
                    <div className="">
                        <img
                            className="w-[70%]"
                            src="./icons8-google-48.png"
                            alt="Google Icon"
                        />
                    </div>
                    <span className="pt-1">سجل الدخول عن طريق جوجل</span>
                </button>
            </div>

            <div className="md:w-auto flex flex-col w-full  ">
                <p className="text-xs pb-2  text-zinc-700 flex md:flex-auto justify-center">
                    ليس لديك حساب؟
                </p>
                <Link
                    to="/register"
                    className="  flex justify-center  gap-5 p-3 border border-slate-700 h-12  text-xs text-zinc-700 hover:opacity-50 transition-opacity duration-200"
                >
                    <SlUser className="flex   font-hm-sans-arabic flex-col align-text-bottom text-xl  " />
                    <span className="pt-1">سجل هنا</span>
                </Link>
            </div>
        </div>
    )
}

export default LeftSide
