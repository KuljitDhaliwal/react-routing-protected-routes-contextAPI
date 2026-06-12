import React, { useEffect } from 'react'
import { Sidebar } from './Components/Sidebar'
import UserLayout from './Layout/UserLayout'
import { Outlet } from 'react-router-dom'
import Index from './Routes'
import ProtectedRoutes from './Components/ProtectedRoutes'
function App() {
  return (
    <div className='bg-black/90 relative'>
      <div className='absolute w-100 h-20 bg-cyan-500 
      -top-10 left-1/2 rounded-full blur-[150px] z-0'></div>
      <div className='absolute w-100 h-20 bg-cyan-500 
      bottom-0 left-1 rounded-full blur-[200px] z-0'></div>

    <Index/>

    </div>
  )
}

export default App