import React, { useState } from 'react'

const App = () => {
  const [hello, setHello] = useState(true)

  //  cambia a false la constate "hello", para cambiar el h1 al segundo mensaje.

  setTimeout(() => {
    setHello(false)
  }, 5000)

  return (
    <div>
      <p className='text-cyan-800'>hola</p>
      <h1 className='text-9xl text-yellow-500'>{hello ? 'Hello world!_' : 'Bienvenido!'}</h1>
      {hello || <h2>Soy Juan Pablo Romero</h2>}
      {hello || <h3>Desarrollador Web</h3>}
    </div>
  )
}

export default App
