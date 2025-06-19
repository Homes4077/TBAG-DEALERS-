// src/components/UploadForm.jsx
import React, { useState } from 'react';

function UploadForm() {
  const ADMIN_PASSWORD = 'adminpassword123'; // <<<--- CHANGE THIS TO A STRONGER PASSWORD!

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    fuelType: '',
    color: '',
    description: '',
    image1Url: '',
    image2Url: '',
    image3Url: '',
    image4Url: '',
    image5Url: '',
    image6Url: '',
  });

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
      setPasswordInput(''); // Clear input on failure
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    if (!API_BASE_URL) {
      alert('Error: Backend API URL is not configured. Please set REACT_APP_API_URL environment variable.');
      console.error('REACT_APP_API_URL is not set.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/vehicles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Vehicle added successfully!');
        setFormData({ // Reset form
          make: '', model: '', year: '', price: '', mileage: '', fuelType: '',
          color: '', description: '', image1Url: '', image2Url: '',
          image3Url: '', image4Url: '', image5Url: '', image6Url: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to add vehicle: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while adding the vehicle. Check console for details.');
    }
  };

  const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-all duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const buttonClass = "bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-lg";

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 font-playfair-display">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="adminPassword" className={labelClass}>Password</label>
              <input
                type="password"
                id="adminPassword"
                value={passwordInput}
                onChange={handlePasswordChange}
                className={inputClass}
                required
              />
            </div>
            <button type="submit" className={buttonClass}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto my-12 animate-fade-in-up">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center font-playfair-display">Add New Vehicle</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="make" className={labelClass}>Make</label>
          <input type="text" id="make" name="make" value={formData.make} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="model" className={labelClass}>Model</label>
          <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="year" className={labelClass}>Year</label>
          <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="price" className={labelClass}>Price ($)</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
          <label htmlFor="mileage" className={labelClass}>Mileage (miles)</label>
          <input type="number" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="fuelType" className={labelClass}>Fuel Type</label>
          <input type="text" id="fuelType" name="fuelType" value={formData.fuelType} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label htmlFor="color" className={labelClass}>Color</label>
          <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} className={inputClass} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="description" className={labelClass}>Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className={`${inputClass} resize-y`}></textarea>
        </div>

        {/* Image URL Fields */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={`image${i}`}>
            <label htmlFor={`image${i}Url`} className={labelClass}>Image {i} URL</label>
            <input type="url" id={`image${i}Url`} name={`image${i}Url`} value={formData[`image${i}Url`]} onChange={handleChange} className={inputClass} placeholder="https://example.com/image.jpg" />
          </div>
        ))}

        <div className="md:col-span-2 text-center mt-8">
          <button
            type="submit"
            className={buttonClass}
          >
            Add Vehicle
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
