import React from 'react'
import { NavbarData } from '../StaticData/Navbar'
import { BsFillShieldLockFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { IoMdLock } from "react-icons/io";

function Navbar() {
    return (
        <nav>
            <div className="navbar flex justify-between items-center text-white px-10 py-6 border-b border-gray-500">
                <div className="flex gap-1 items-center">
                    <BsFillShieldLockFill className='text-2xl text-cyan-600' />
                    <p className='text-2xl'>MyAuthApp</p>
                </div>
                <div className='flex gap-6 items-center'>
                    {NavbarData.map((route,key)=>{
                        const Icons = route.icon
                        return <NavLink to={route.route} className={({isActive})=> `${isActive ? 'font-semibold border-cyan-600' : 'text-white border-transparent'} flex items-center text-lg border-b`}>
                            <Icons/>
                            {route.name}
                        </NavLink>
                    })}
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar