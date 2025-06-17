import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage= () => {
  const navigate=useNavigate();

  return (


    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Content Section */}


      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8"
      >

        <motion.div className='flex items-center justify-between'>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-4 text-purple-400"
          >
            Welcome to Crick T
          </motion.h1>
          <div className='flex gap-3'> <motion.button onClick={()=>{navigate('/login')}} className='bg-green-400 px-3 py-1 rounded-sm'
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}

          >login</motion.button>
            <motion.button onClick={()=>{navigate('/register')}} className='bg-red-500 p-1 px-2 rounded-sm'
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >sign up</motion.button></div>
        </motion.div>

        <p className="text-gray-300 mb-10 max-w-2xl">
          Trade cricket players like stocks! Analyze market trends, track player performance, and grow your portfolio.
        </p>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Market Overview */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}

            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-4">📈 Player Market Overview</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Virat Kohli</span>
                <span className="text-green-400">+0.2%</span>
              </li>
              <li className="flex justify-between">
                <span>Rohit Sharma</span>
                <span className="text-red-400">10.1%</span>
              </li>
              <li className="flex justify-between">
                <span>MS Dhoni</span>
                <span className="text-green-400">1.8%</span>
              </li>
            </ul>
          </motion.div>

          {/* Portfolio */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-4">💼 Your Portfolio</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>KL Rahul</span>
                <span>25 Shares</span>
              </li>
              <li className="flex justify-between">
                <span>Hardik Pandya</span>
                <span>15 Shares</span>
              </li>
              <li className="flex justify-between">
                <span>Shubman Gill</span>
                <span>30 Shares</span>
              </li>
            </ul>
          </motion.div>

          {/* Featured Player */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-4">🌟 Featured Player</h2>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center font-bold text-xl">
                VK
              </div>
              <div>
                <p className="font-semibold">Virat Kohli</p>
                <p className="text-sm text-gray-400">Current Price: 49</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default LandingPage