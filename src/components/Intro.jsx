import React, { useEffect, useState } from 'react'

const Intro = () => {
  const [hello, setHello] = useState(true)
  const [bienvenida, setBienvenida] = useState([])
  const [barra, setBarra] = useState(true)

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
      }, 500)
    }
    //  cambia a false la constate "hello", para cambiar el h1 al segundo mensaje.

    setTimeout(() => {
      setHello(false)
    }, 5000)

    setTimeout(() => {
      setBarra(!barra)
    }, 500)
  }, [])
  console.log(bienvenida.toString())

  return (
    <div className='flex flex-col justify-center pl-20'>
      <div className='text-white flex flex-col'>
        <h1 className='sm:text-9xl text-7xl pl-1 sm:pl-0'>{bienvenida.join('')}<span>{barra ? '_' : ''}</span></h1>
        {hello || <h2 className='text-5xl pl-2'>Soy Juan Pablo Romero</h2>}
        {hello || <h3 className='text-3xl pl-2'>Desarrollador Web_</h3>}
      </div>
    </div>
  )
}

export default Intro
