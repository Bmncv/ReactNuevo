import { useState } from 'react'
import './app.css'

const App =() => {
  const saludar = () =>{
    alert('hola');
  }

  return (
    <>
    <div className='titulo'>
      <h1>Clase 1 de react</h1>
    </div>
    <div>
      <button onClick={saludar}>Click</button>
    </div>
    </>
  )
}

export default App
