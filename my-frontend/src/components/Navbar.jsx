import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/axios';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await API.post('/logout');
    alert('Logged out');
    navigate('/login');
  };

  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={handleLogout} className="text-red-500">Logout</button>
    </nav>
  );
};

export default Navbar;
