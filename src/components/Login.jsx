// src/components/Login.jsx
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // TODO: Implement actual authentication logic here
    alert('Login functionality to be implemented!');
  };

  const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-playfair-display">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className={labelClass}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className={labelClass}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

