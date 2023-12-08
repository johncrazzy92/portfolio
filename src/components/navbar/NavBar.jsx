import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-indigo-600 py-8 flex flex-col md:w-2/12 lg:w-[9%] text-xl text-center text-white justify-between font-thin'>
      <div>
        <p>logo</p>
      </div>
      <div className='gap-16 justify-center flex flex-col'>
        <Link to='/'>Home</Link>
        <Link to='/'>Sobre mi</Link>
        <Link to='/'>Tecnologias</Link>
        <Link to='/'>Galeria</Link>
        <Link to='/'>Redes</Link>
      </div>
      <div>
        <p>redes</p>
      </div>
    </div>
  )
}

export default NavBar
