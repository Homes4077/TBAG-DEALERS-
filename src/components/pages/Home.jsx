// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import VehicleCard from '../VehicleCard.jsx';

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-500"></div>
        <p className="ml-4 text-2xl font-semibold text-gray-700">Loading vehicles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 bg-red-50 border border-red-400 text-red-800 rounded-xl shadow-lg mx-auto max-w-lg mt-12 animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-4 text-red-700">Error Loading Vehicles</h2>
        <p className="text-lg mb-2">{error}</p>
        <p className="text-md text-red-600 mt-4">Please ensure your backend is running and the API URL is correct (check environment variables and `Home.jsx`). Also, check for CORS issues.</p>
        <p className="text-sm text-red-500 mt-2">If your backend it might be asleep. Try accessing its URL directly to wake it up.</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <h1 className="text-6xl font-playfair-display font-extrabold text-center text-gray-900 mb-16 animate-bounce-in-down drop-shadow-lg">
        Discover Your Dream Ride
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-8 max-w-7xl mx-auto">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))
        ) : (
          <div className="col-span-full text-center p-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
            <p className="text-2xl font-semibold text-gray-700 mb-3">No vehicles found yet.</p>
            <p className="text-lg text-gray-600 mt-2">Check back soon, or add some from the Admin Panel!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
