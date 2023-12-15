import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'

const MainLayout = () => {
  const [navHidden, setNavHidden] = useState(false)

  const hiddenId = setInterval(() => {
    setNavHidden(true)
    clearInterval(hiddenId)
  }, 1500)
  return (
    <>
      <div className='bg-black h-screen w-full justify-end flex px-5'>
        {!navHidden || <NavBar />}
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
