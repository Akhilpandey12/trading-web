import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-xl fixed top-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-extrabold text-3xl tracking-widest">
          CRICK <span className="text-green-400">T</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-white items-center font-medium">
          <Link to="/" className="hover:text-green-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition duration-300">About</Link>
          <Link to="/market" className="hover:text-green-400 transition duration-300">Marketplace</Link>
          <Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link>
          <Link to="/login">
            <button className="border border-green-500 px-4 py-2 rounded-xl hover:bg-green-400 transition">Login</button>
          </Link>
          <Link to="/register">
            <button className="border border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black transition">Signup</button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-black via-gray-800 to-black text-white px-6 py-4 space-y-3"
          >
            <Link to="/" className="block hover:text-green-400">Home</Link>
            <Link to="/about" className="block hover:text-green-400">About</Link>
            <Link to="/market" className="block hover:text-green-400">Marketplace</Link>
            <Link to="/contact" className="block hover:text-green-400">Contact</Link>
            <Link to="/login">
              <button className="w-full bg-green-500 px-4 py-2 rounded-xl hover:bg-green-400 transition">Login</button>
            </Link>
            <Link to="/signup">
              <button className="w-full border border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black transition">Signup</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;






