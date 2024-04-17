import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<h1> <Signup /> </h1>} />
        <Route path="/login" element={<h1> <Login /> </h1>} />
        <Route path="/forgotpassword" element={<h1> <ForgotPassword /> </h1>} />
        <Route path="/resetPassword/:token" element={<h1> <ResetPassword /> </h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
