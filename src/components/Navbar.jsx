// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-playfair-display font-bold hover:text-blue-200 transition duration-300">
          TBAG <span className="text-blue-200">Dealers</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-semibold transition duration-300">
            Home
          </Link>
          <Link to="/admin" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-semibold transition duration-300">
            Admin
          </Link>
          <Link to="/login" className="bg-white text-blue-700 px-4 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300 transform hover:scale-105">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
