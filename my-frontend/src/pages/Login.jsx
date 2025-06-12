import React from 'react'




const Login = () => {


  return (
  <>
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6">
  <form
    action="http://localhost:3000/login"
    method="post"
    className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-[0_0_40px_rgba(34,211,238,0.3)] rounded-3xl p-10 w-full max-w-md space-y-6 animate-fade-in overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-ping" />
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl opacity-20 animate-pulse" />

    <h2 className="text-3xl font-extrabold text-center text-cyan-400 tracking-widest drop-shadow-md animate-bounce">
      Login
    </h2>

    <input
      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:scale-105 transition duration-200 ease-in-out"
      type="text"
      placeholder="Username"
      name="username"
    />

    <input
      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:scale-105 transition duration-200 ease-in-out"
      type="password"
      placeholder="Password"
      name="password"
    />

    <button
      type="submit"
      className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-md hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300 ease-in-out"
    >
      Sign In
    </button>

    <p className="text-center text-sm text-gray-400">
      Don’t have an account?{" "}
      <a href="/register" className="text-cyan-400 hover:underline">
        Register
      </a>
    </p>
  </form>
</div>

  </>
  )
}

export default Login