// src/components/VehicleCard.jsx
import React from 'react';

function VehicleCard({ vehicle }) {
  // Use a default image if no image URL is provided
  const imageUrl = vehicle.image1Url || 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Vehicle+Image';

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group">
      <div className="relative overflow-hidden h-48 md:h-64">
        <img
          src={imageUrl}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
          ${vehicle.price ? vehicle.price.toLocaleString() : 'N/A'}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-playfair-display">
          {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          Year: {vehicle.year || 'N/A'} | Color: {vehicle.color || 'N/A'}
        </p>
        <div className="flex items-center justify-between text-sm text-blue-600 font-semibold mt-4">
          <span>{vehicle.mileage ? `${vehicle.mileage.toLocaleString()} miles` : 'N/A miles'}</span>
          <span>{vehicle.fuelType || 'N/A'}</span>
        </div>
        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300 transform hover:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
}

export default VehicleCard;
