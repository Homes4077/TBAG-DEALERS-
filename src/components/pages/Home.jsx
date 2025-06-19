// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import VehicleCard from '../VehicleCard.jsx';

function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define your API base URL using the environment variable
  const API_BASE_URL = process.env.REACT_APP_API_URL; // <--- ADD THIS LINE

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      setError(null);

      // *** UPDATED: Using environment variable for API base URL ***
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      if (!API_BASE_URL) {
        setError('Backend API URL is not configured. Please set REACT_APP_API_BASE_URL environment variable.');
        console.error('REACT_APP_API_BASE_URL is not set.');
        setLoading(false);
        return;
      }

      try {
<<<<<<< HEAD
        // Use the environment variable for the backend URL
        const response = await fetch(`${API_BASE_URL}/vehicles`); // <--- CHANGE THIS LINE
=======
        // Concatenate the base URL with the specific endpoint
        const response = await fetch(`${API_BASE_URL}/vehicles`);
>>>>>>> ac6938bac62b73d7e7160e62c562f22d118e8523
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVehicles(data);
      } catch (e) {
<<<<<<< HEAD
        setError("Failed to fetch vehicles. Please check the backend API URL and CORS settings."); // Added CORS hint
=======
        setError("Failed to fetch vehicles. Please ensure the backend API is running and configured correctly.");
>>>>>>> ac6938bac62b73d7e7160e62c562f22d118e8523
        console.error("Error fetching vehicles:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [API_BASE_URL]); // <--- Add API_BASE_URL to dependency array

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
<<<<<<< HEAD
        <p>Please ensure your backend is running and the API URL is correct (check Vercel environment variables and `Home.jsx`). Also, check for CORS issues.</p>
=======
        <p className="text-md text-gray-500 mt-2">Ensure your backend is deployed and its URL is correctly set as `REACT_APP_API_BASE_URL` in Netlify environment variables.</p>
>>>>>>> ac6938bac62b73d7e7160e62c562f22d118e8523
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
