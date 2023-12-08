import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'

const MainLayout = () => {
  return (
    <>
      <div className='bg-black h-screen w-full flex'>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
