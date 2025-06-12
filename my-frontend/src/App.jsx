import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Api from './routes/api'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'


const App = () => {






  return (
<>

<BrowserRouter>
   <Routes>
      
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
      <Route  path="/" element={<Dashboard/>}/>
        
   </Routes>
</BrowserRouter>
</>
  )

}
export default App