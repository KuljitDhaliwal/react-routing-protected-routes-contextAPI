import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
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
        navigate('/dashboard')
    }
    return (
        <div className='h-screen w-full p-10'>
            <h1 className='text-white font-bold'>Home</h1>
            <button className='bg-linear-180 from-cyan-600 
        to-cyan-500 p-3 px-10 rounded-lg'
                onClick={() => handleSetUser()}
            >
                Login
            </button>
            <button className='bg-linear-180 from-cyan-600 
        to-cyan-500 p-3 px-10 rounded-lg'
                onClick={() => navigate('/dashboard')}
            >
                Dashboard
            </button>
        </div>
    )
}

export default Home