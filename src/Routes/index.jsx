import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../Layout/UserLayout'
import Dashboard from '../Pages/User/Dashboard'
import Report from '../Pages/User/Report'
import Projects from '../Pages/User/Projects'
import Team from '../Pages/User/Team'
import { userRoutes } from './UserRoutes'
import ProtectedRoutes from '../Components/ProtectedRoutes'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import PublicRoutes from '../Components/PublicRoutes'
import TermsConditions from '../Pages/TermsConditions'
import PublicLayout from '../Layout/PublicLayout'

function Index() {
  return (
    <div>
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/terms-conditions' element={<TermsConditions/>}/>
            </Route>
            {/* Protected Route */}
            <Route element={<ProtectedRoutes/>}>
                <Route element={<UserLayout/>}>
                    {userRoutes.map(route=>(
                        <Route
                        key={route.path || "index"}
                        {...route}
                        />
                    ))}
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default Index