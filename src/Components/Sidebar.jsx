import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Routes } from '../StaticData/Routes'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
export const Sidebar = () => {
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    return (
        <div className="w-100 relative flex flex-col min-h-screen top-0 left-0 z-10 p-5 border-r border-gray-600">
            <img src={Logo} alt="logo" className='h-10 w-10'/>
            <div className="grid gap-2 mt-10 flex-1">
                <div>
                    {Routes.map((route, key)=> {
                        const Ricon = route.icon
                        return <NavLink key={key} to={route.route} className={({isActive})=>
                        `${isActive ? 'text-white font-semibold bg-[#1B222F] rounded-md' : 'text-gray-400 font-normal'} 
                        flex gap-2 items-center text-xl p-3`}>
                            <Ricon/>
                            {route.name}
                        </NavLink>
                    })}
                </div>
            </div>
            <div className='flex gap-5 items-center justify-center'>
                <button className='rounded-lg p-3 px-5 bg-linear-180
                 from-yellow-500 to-yellow-400' onClick={()=> navigate('/')}>Home</button>
                <button className='rounded-lg p-3 px-5 bg-linear-180 
                from-red-500 to-red-400 text-white' onClick={()=> {setUser(null), navigate('/')}}>Logout</button>
            </div>
        </div>
    )
}