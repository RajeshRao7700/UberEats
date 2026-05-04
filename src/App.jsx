// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Cart' element={<Cart/>}/>


      </Routes>
    </>
  )
}

export default App
