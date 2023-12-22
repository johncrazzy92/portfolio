import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import copy from '../../../public/copy.svg'
import house from '../../../public/house.svg'
import monitor from '../../../public/monitor.svg'
import share from '../../../public/share.svg'
import sonrisa from '../../../public/sonrisa.svg'

const NavBar = () => {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: [-80, 0] }} exit={{ x: -100 }} transition={{ type: 'spring', velocity: 5, bounce: 0 }} className='bg-indigo-600 py-8 flex flex-col md:w-2/12 lg:w-[12%] text-xl text-starts text-white justify-between items-center font-semibold z-10'>
      <div>
        <p>logo</p>
      </div>
      <div className='w-full justify-center flex flex-col gap-5'>
        <div className='flex hover:border-y-2 hover:border-amber-300 items-center h-14 w-full'>
          <Link className='ml-7 flex' to='/'><img src={house} className='w-8 pr-3' alt='icono de home' />Home</Link>
        </div>
        <div className='hover:border-y-2 hover:border-amber-300 flex items-center h-14 w-full'>
          <Link className='ml-7 flex' to='/me'><img src={sonrisa} className='w-8 pr-3' alt='icono de seccion "sobre mi"' />Sobre mi</Link>
        </div>
        <div className='hover:border-y-2 hover:border-amber-300 flex items-center h-14 w-full'>
          <Link className='ml-7 flex' to='/'><img src={monitor} className='w-8 pr-3' alt='icono de seccion sobre tecnologias que utilizo' />Tecnologias</Link>
        </div>
        <div className='hover:border-y-2 hover:border-amber-300 flex items-center h-14 w-full'>
          <Link className='ml-7 flex' to='/'><img src={copy} className='w-8 pr-3' alt='icono de galeria' />Galeria</Link>
        </div>
        <div className='hover:border-y-2 hover:border-amber-300 flex items-center h-14 w-full'>
          <Link className='ml-7 flex' to='/'><img src={share} className='w-8 pr-3' alt='icono de redes' />Redes</Link>
        </div>
      </div>
      <div>
        <p>redes</p>
      </div>
    </motion.div>
  )
}

export default NavBar
