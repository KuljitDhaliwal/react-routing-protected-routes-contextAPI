import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Routes } from '../StaticData/Routes'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { LiaTimesSolid } from "react-icons/lia";


export const Sidebar = ({ham, setHam}) => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    return (
        <aside className={`fixed ${ham ? '' : '-left-full'} md:bg-transparent bg-black/60 md:left-0 z-10 w-full   
        transition-all duration-100 top-0`}>
            <div className='w-80 bg-black/90 p-5 h-screen relative flex flex-col'>
                <img src={Logo} alt="logo" className='h-10 w-10' />
                <div className="grid gap-2 mt-10 flex-1">
                    <div>
                        {Routes.map((route, key) => {
                            const Ricon = route.icon
                            return <NavLink key={key} to={route.route} 
                            onClick={()=> setHam(false)}
                            className={({ isActive }) =>
                                `${isActive ? 'text-white font-semibold bg-[#1B222F] rounded-md' : 'text-gray-400 font-normal'} 
                                flex gap-2 items-center text-xl p-3`}>
                                <Ricon />
                                {route.name}
                            </NavLink>
                        })}
                    </div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <button className='rounded-lg p-3 px-5 bg-linear-180
                        from-yellow-500 to-yellow-400' onClick={() => navigate('/')}>Home</button>
                    <button className='rounded-lg p-3 px-5 bg-linear-180 
                        from-red-500 to-red-400 text-white' onClick={() => { setUser(null), navigate('/') }}>Logout</button>
                </div>
            <LiaTimesSolid className='text-2xl md:hidden flex cursor-pointer text-white absolute right-5 top-7' onClick={() => setHam(false)} />
            </div>
        </aside>
    )
}