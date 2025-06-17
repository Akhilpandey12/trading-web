import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />


     
      <Routes>
        
  <Route path='/user' element={
    <PrivateRoute>

     <Dashboard />
    </PrivateRoute>
  }/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
        <Route path='/' element={<LandingPage />}/>
       
      
   
      </Routes>
    </BrowserRouter>
  );
};

export default App;
