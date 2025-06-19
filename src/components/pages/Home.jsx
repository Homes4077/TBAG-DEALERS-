// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import VehicleCard from '../VehicleCard.jsx'; // Corrected path based on your structure

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define your API base URL using the environment variable only once
  // Ensure this matches the variable name you set in Vercel (REACT_APP_API_URL).
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      setError(null);

      if (!API_BASE_URL) {
        setError('Backend API URL is not configured. Please set REACT_APP_API_URL environment variable in Vercel.');
        console.error('REACT_APP_API_URL is not set.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/vehicles`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVehicles(data);
      } catch (e) {
        setError("Failed to fetch vehicles. Please check the backend API URL and CORS settings.");
        console.error("Error fetching vehicles:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [API_BASE_URL]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500"></div>
        <p className="ml-4 text-xl text-gray-700">Loading vehicles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Error Loading Vehicles</h2>
        <p>{error}</p>
        <p>Please ensure your backend is running and the API URL is correct (check Vercel environment variables and `Home.jsx`). Also, check for CORS issues.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-5xl font-playfair-display font-extrabold text-center text-gray-800 mb-12 animate-fade-in">
        Discover Your Dream Ride
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))
        ) : (
          <div className="col-span-full text-center p-10 bg-gray-50 rounded-lg shadow-inner">
            <p className="text-xl text-gray-600">No vehicles found. Check back soon!</p>
            <p className="text-md text-gray-500 mt-2">Or add some from the Admin Panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
