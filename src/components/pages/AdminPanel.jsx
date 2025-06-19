// src/pages/AdminPanel.jsx
import React from 'react';
import UploadForm from '../UploadForm.jsx'; // This is the correct path


function AdminPanel() {
  // In a real app, you'd check for admin authentication here
  const isAdmin = true; // Placeholder: Assume admin for now

  if (!isAdmin) {
    return (
      <div className="text-center p-10 bg-red-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-700">Access Denied</h2>
        <p className="text-red-600 mt-4">You must be logged in as an administrator to access this page.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-playfair-display font-bold text-center text-gray-800 mb-10">
        Admin Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-12">Manage vehicles, add new listings, and more.</p>

      <div className="grid grid-cols-1 gap-12">
        <UploadForm />

        {/* You can add more admin components/sections here */}
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-playfair-display">
            Manage Existing Vehicles
          </h2>
          <p className="text-center text-gray-600">
            (Coming soon: Table to view, edit, and delete vehicles)
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
