import React, {useContext, useEffect} from 'react'
import Home from '../Pages/Home'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
function ProtectedRoutes() {
    const {isAuthenticated, user} = useContext(UserContext)
    console.log("ProtectedRoute Auth:", isAuthenticated)
    console.log("ProtectedRoute User:", user)
    
    if(!isAuthenticated){
        return <Navigate to='/'/>
    }
  return (
    <Outlet/>
  )
}

export default ProtectedRoutes