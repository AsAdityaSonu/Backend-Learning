import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={<h1> <Signup /> </h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
