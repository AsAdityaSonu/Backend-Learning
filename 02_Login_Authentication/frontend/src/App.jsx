import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={<h1> <Signup /> </h1>} />
        <Route path="/login" element={<h1> <Login /> </h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
