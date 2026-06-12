import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Outlet } from 'react-router-dom';

function UserLayout() {
    console.log("UserLayout Render");
    return (
        <section className='min-h-screen w-full flex'>
            <aside>
                <Sidebar />
            </aside>
            <main className='bg-white/10 p-10 min-h-screen w-full'>
                <Outlet />
            </main>
        </section>
    )
}

export default UserLayout