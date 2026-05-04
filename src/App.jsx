// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <h1 className='text-3xl font-bold underline'>Hello this uberEats</h1>
    </>
  )
}

export default App
