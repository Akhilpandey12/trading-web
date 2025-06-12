import React from 'react'

const Register = () => {
  return (
  <>
<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4">
  <form
    action="http://localhost:3000/register"
    method="post"
    className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,200,0.2)] w-full max-w-sm space-y-6 animate-fade-in"
  >
    <h2 className="text-3xl font-bold text-center text-emerald-400 tracking-wide animate-pulse">
      Register
    </h2>

    <input
      className="p-3 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:scale-105 transition duration-200 ease-in-out"
      type="text"
      placeholder="Username"
      name="username"
    />
    <input
      className="p-3 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:scale-105 transition duration-200 ease-in-out"
      type="email"
      placeholder="Email"
      name="email"
    />
    <input
      className="p-3 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:scale-105 transition duration-200 ease-in-out"
      type="password"
      placeholder="Password"
      name="password"
    />

    <button
      type="submit"
      className="bg-emerald-500 text-black font-semibold p-3 rounded-md hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_15px_#10b981] transition-all duration-300 ease-in-out"
    >
      Submit
    </button>
  </form>
</div>




  </>
  )
}

export default Register