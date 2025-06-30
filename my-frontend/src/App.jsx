import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import PrivateRoute from './components/PrivateRoute';
import BuyPlayer from './components/BuyPlayers'

const App = () => {
  return (

    <BrowserRouter>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <div className="pt-20 px-4 sm:px-8">

          <Routes>

            <Route path='/user' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />


            <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        <Route path="/buy/:playerId" element={<BuyPlayer />} />


          </Routes>
        </div>
      </div>


    </BrowserRouter>






    //   <BrowserRouter>
    //     <Navbar />



    //     <Routes>

    //        <Navbar />
    // <Route path='/user' element={
    //   <PrivateRoute>

    //    <Dashboard />
    //   </PrivateRoute>
    // }/>
    //        <Route path='/login' element={<Login />}/>
    //        <Route path='/register' element={<Register />}/>
    //       <Route path='/' element={<LandingPage />}/>



    //     </Routes>
    //   </BrowserRouter>
  );
};

export default App;

     {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/market" element={<Marketplace />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
           