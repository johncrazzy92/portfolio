import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-indigo-600 py-8 flex flex-col md:w-2/12 lg:w-[12%] text-xl text-starts text-white justify-between font-thin'>
      <div>
        <p>logo</p>
      </div>
      <div className='gap-16 justify-center flex flex-col'>
        <Link className='hover:border-r-2' to='/'>Home</Link>
        <Link className='hover:border-r-2' to='/'>Sobre mi</Link>
        <Link className='hover:border-r-2' to='/'>Tecnologias</Link>
        <Link className='hover:border-r-2' to='/'>Galeria</Link>
        <Link className='hover:border-r-2' to='/'>Redes</Link>
      </div>
      <div>
        <p>redes</p>
      </div>
    </div>
  )
}

export default NavBar
