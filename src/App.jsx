// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Corrected import paths based on your directory structure
import Home from './components/pages/Home.jsx';
import AdminPanel from './components/pages/AdminPanel.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        {/* Optional: Add a Footer here */}
        <footer className="bg-gray-800 text-white text-center p-4 text-sm mt-8">
          <p>&copy; {new Date().getFullYear()} TBAG Dealers and JohnMark Gitahi Wanjiru. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
