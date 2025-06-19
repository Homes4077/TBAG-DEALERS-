// src/VehicleCard.jsx
import React from 'react';

function VehicleCard({ vehicle }) {
  // Use a default image if image1Url is empty or null
  const imageUrl = vehicle.image1Url || 'https://via.placeholder.com/400x300?text=No+Image+Available';

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer">
      <img
        src={imageUrl}
        alt={`${vehicle.make} ${vehicle.model}`}
        className="w-full h-56 object-cover object-center transition-transform duration-300 hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair-display">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-xl font-semibold text-indigo-700 mb-3">${vehicle.price.toLocaleString()}</p>
        <div className="text-gray-600 text-sm grid grid-cols-2 gap-y-1">
          <p><span className="font-medium">Mileage:</span> {vehicle.mileage ? vehicle.mileage.toLocaleString() + ' miles' : 'N/A'}</p>
          <p><span className="font-medium">Fuel:</span> {vehicle.fuelType || 'N/A'}</p>
          <p><span className="font-medium">Color:</span> {vehicle.color || 'N/A'}</p>
        </div>
        <p className="text-gray-700 text-base mt-4 line-clamp-3">{vehicle.description || 'No description provided.'}</p>
        <button
          className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 shadow-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;
