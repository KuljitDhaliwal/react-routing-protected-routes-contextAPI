import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { IoMdLock } from "react-icons/io";
import { FaRegUser, FaClipboardList } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";


function Home() {
    const { setUser, isAuthenticated } = useContext(UserContext)
    console.log('IsAuthenticated in home', isAuthenticated)
    const user = {
        name: 'Kuljit Singh',
        token: 'Hrhsh32@123Hkscn9(2932J'
    }
    const navigate = useNavigate()
    const handleSetUser = () => {
        setUser(user)
        navigate('/user/dashboard')
    }
    return (
        <div className='min-h-screen w-full p-10'>
            <div className='max-w-120 m-auto grid place-items-center'>
                <div className="rounded-full w-15 h-15 bg-cyan-800 grid place-items-center">
                    <IoMdLock className='text-3xl text-white' />
                </div>
                <p className='text-5xl text-white my-5'>
                    Protected Route <span className='text-cyan-500'>Demo</span>
                </p>
                <p className='text-white text-center'>A simple react application demonstrating context API, Authentication and Protected Routes.</p>
                <div className="flex gap-4 mt-4">
                    <button className='bg-linear-180 cursor-pointer active:scale-95 hover:scale-101 from-cyan-600 
            to-cyan-500 p-3 px-10 rounded-lg flex gap-2 items-center text-white'
                        onClick={() => handleSetUser()}
                    >
                        <FaRegUser />
                        Login
                    </button>
                    <button className='bg-transparent flex gap-2 active:scale-95 hover:scale-101 items-center cursor-pointer border border-cyan-600 text-white p-3 px-10 rounded-lg'
                        onClick={() => navigate('/user/dashboard')}
                    >
                        <FaClipboardList />
                        Dashboard
                    </button>
                </div>
            </div>

            <div className='mt-10 max-w-200 m-auto'>
                <p className='text-white text-center text-3xl'>Features</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="card bg-cyan-200/80 rounded-2xl shadow-2xl p-5 flex gap-2 items-start">
                        <div className="rounded-full p-3 bg-cyan-500 align-top grid place-items-center">
                            <LuUsers />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Context API</p>
                            <p>Manage user authentication state globally using Context API.</p>
                        </div>
                    </div>
                    <div className="card bg-cyan-200/80 rounded-2xl shadow-2xl p-5 flex gap-2 items-start">
                        <div className="rounded-full p-3 bg-cyan-500 grid place-items-center">
                            <IoShieldCheckmarkOutline />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Protected Routes</p>
                            <p>Restricted access to dashboard without authentication.</p>
                        </div>
                    </div>
                    <div className="card bg-cyan-200/80 rounded-2xl shadow-2xl p-5 flex gap-2 items-start">
                        <div className="rounded-full p-3 bg-cyan-500 grid place-items-center">
                            <SiReactrouter />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>React Router</p>
                            <p>Handle navigation and route protection with React Router v6.</p>
                        </div>
                    </div>
                    <div className="card bg-cyan-200/80 rounded-2xl shadow-2xl p-5 flex gap-2 items-start">
                        <div className="rounded-full p-3 bg-cyan-500 grid place-items-center">
                            <FaCss3 />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>CSS Grid</p>
                            <p>Responsive layout build using modern CSS Grid.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-18'>
                <p className='text-white text-center text-3xl'>How it works</p>
                <div className="flex justify-center mt-5 gap-10">
                    <div>
                        <div className="p-3 rounded-xl border border-cyan-600 w-fit">
                            <IoMdHome className='text-2xl text-white'/>
                        </div>
                        <div className="flex max-w-30 gap-1 text-white mt-2">
                            <p>1.</p>
                            <p>User lands on Home page.</p>
                        </div>
                    </div>
                    <FaArrowRightLong className='text-cyan-600 text-4xl'/>
                    <div>
                        <div className="p-3 rounded-xl border border-cyan-600 w-fit">
                            <FaRegUser className='text-2xl text-white'/>
                        </div>
                        <div className="flex max-w-30 gap-1 text-white mt-2">
                            <p>2.</p>
                            <p>Clicks login button.</p>
                        </div>
                    </div>
                    <FaArrowRightLong className='text-cyan-600 text-4xl'/>
                    <div>
                        <div className="p-3 rounded-xl border border-cyan-600 w-fit">
                            <IoIosCheckmarkCircle className='text-2xl text-green-400'/>
                        </div>
                        <div className="flex max-w-40 gap-1 text-white mt-2">
                            <p>3.</p>
                            <p>User data is stored in Context API.</p>
                        </div>
                    </div>
                    <FaArrowRightLong className='text-cyan-600 text-4xl'/>
                    <div>
                        <div className="p-3 rounded-xl border border-cyan-600 w-fit">
                            <FaClipboardList className='text-2xl text-cyan-400'/>
                        </div>
                        <div className="flex max-w-40 gap-1 text-white mt-2">
                            <p>4.</p>
                            <p>User is allowed to visit dashboard.</p>
                        </div>
                    </div>
                    <FaArrowRightLong className='text-cyan-600 text-4xl'/>
                                        <div>
                        <div className="p-3 rounded-xl border border-cyan-600 w-fit">
                            <IoLogOutSharp className='text-2xl text-red-400'/>
                        </div>
                        <div className="flex max-w-40 gap-1 text-white mt-2">
                            <p>5.</p>
                            <p>Click logout, user removed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home