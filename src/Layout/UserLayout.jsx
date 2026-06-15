import React, { useState } from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";


function UserLayout() {
    console.log("UserLayout Render");
    const [ham, setHam] = useState(false)
    return (
        <>
            <header className='h-15 md:hidden flex border-b border-gray-500 
            bg-white px-10 items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <RxHamburgerMenu className='text-2xl cursor-pointer' onClick={() => setHam(true)} />
                    <div className="flex gap-1 items-center">
                        <BsFillShieldLockFill className='text-2xl text-cyan-600' />
                        <p className='text-2xl'>MyAuthApp</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <sup className='absolute right-0'>2</sup>
                        <FaBell className='text-2xl' />
                    </div>
                    <div className="rounded-full h-10 bg-cyan-600 cursor-pointer">
                        <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="User" className='h-full w-full' />
                    </div>
                </div>
            </header>
            <section className='w-full flex'>
                <Sidebar ham={ham} setHam={setHam} />
                <main className='bg-white/10 p-10 w-full md:ml-80 md:min-h-screen min-h-[calc(100vh-60px)]'>
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default UserLayout