import React, { useState } from 'react'
import { NavbarData } from '../StaticData/Navbar'
import { BsFillShieldLockFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { IoMdLock } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

function Navbar() {
    const [ham, setHam] = useState(false)
    return (
        <nav className='relative h-18 navbar flex justify-between items-center text-white px-10 border-b border-gray-500'>
            <div className="flex gap-1 items-center">
                <BsFillShieldLockFill className='text-2xl text-cyan-600' />
                <p className='text-2xl'>MyAuthApp</p>
            </div>
            <div className={`${ham ? 'flex' : 'md:flex hidden'}  md:flex-row 
            flex-col md:relative absolute md:py-0 py-10 md:top-0 top-18 
            md:left-auto md:justify-end left-0 w-full md:h-auto transition-all 
            duration-300 h-screen md:bg-transparent bg-black/80 md:backdrop-blur-none 
            backdrop-blur-2xl gap-6 items-center`}>
                {NavbarData.map((route, key) => {
                    const Icons = route.icon
                    return <NavLink to={route.route}
                        onClick={() => setHam(false)}
                        className={({ isActive }) => `${isActive ? 'font-semibold border-cyan-600' : 'text-white border-transparent'} flex items-center text-lg border-b`}>
                        <Icons />
                        {route.name}
                    </NavLink>
                })}
            </div>
            <div className='md:hidden flex'>
                {ham ? (
                    <LiaTimesSolid className='text-2xl cursor-pointer' onClick={() => setHam(false)} />
                ) : (
                    <RxHamburgerMenu className='text-2xl cursor-pointer' onClick={() => setHam(true)} />
                )}
            </div>
        </nav>
    )
}

export default Navbar