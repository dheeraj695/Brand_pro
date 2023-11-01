import { useState } from 'react'


import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Header/></div>
      <div><Hero/></div>
       
    </>
  )
}

export default App
