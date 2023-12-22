/* eslint-disable react/jsx-closing-tag-location */
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import backgroundCoding from '../../public/background_Coding.mp4'

const Intro = () => {
  const [hello, setHello] = useState(true)
  const [bienvenida, setBienvenida] = useState([])
  const [barra, setBarra] = useState(true)
  const [barra2, setBarra2] = useState(true)

  const mensaje = 'Hello world!'
  const helloWorld = mensaje.split('')

  useEffect(() => {
  // agrega caracter por caracter, usando i como referencia, al array bienvenida
    let i = 0
    if (hello) {
      const intervalId = setInterval(() => {
        if (i <= helloWorld.length) {
          setBienvenida(contenido => [...contenido, helloWorld[i++]])
        } else {
          clearInterval(intervalId)
        }
      }, 100)
    }
    //  cambia a false la constate "hello", para cambiar el h1 al segundo mensaje.

    const helloId = setInterval(() => {
      setHello(false)
      clearInterval(helloId)
    }, 1500)
  }, [])

  // guiones bajos titilando

  setTimeout(() => {
    setBarra(!barra)
  }, 500)

  setTimeout(() => {
    setBarra2(!barra2)
  }, 500)

  return (
    <>
      <div className={`flex flex-col justify-center ${hello ? 'items-center' : 'items-start'} w-[88%] ${hello ? 'pr-44' : 'pl-20'}`}>
        <div className='text-white flex flex-col justify-center items-center z-10'>
          <AnimatePresence>
            {!hello || <motion.h1 initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: [0.5, 0] }} className='sm:text-9xl text-7xl pl-1 sm:pl-0'>{bienvenida.join('')}<span>{hello && barra ? '_' : ''}</span></motion.h1>}
            <motion.div className={`${!hello || 'hidden'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h1 className='sm:text-9xl text-7xl pl-1 sm:pl-0'>Bienvenido!</h1>
              <h2 className='text-5xl pl-2'>Soy Juan Pablo Romero</h2>
              <h3 className='text-3xl pl-2'>Desarrollador Web<span>{!hello && barra2 ? '_' : ''}</span></h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {hello || <video muted loop autoPlay className='h-full absolute object-cover'>
        <source src={backgroundCoding} />
      </video>}
    </>
  )
}

export default Intro
