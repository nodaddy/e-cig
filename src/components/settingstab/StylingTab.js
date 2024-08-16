import React from 'react';

function StylingTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="fontName" className="block text-sm font-medium text-gray-700">Font Name</label>
        <input
          type="text"
          id="fontName"
          name="fontName"
          value={formData.fontName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Font Name"
        />
      </div>
      <div>
        <label htmlFor="colorOne" className="block text-sm font-medium text-gray-700">First Font Color</label>
        <input
          type="text"
          id="colorOne"
          name="colorOne"
          value={formData.colorOne}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Color Hex"
        />
      </div>
      <div>
        <label htmlFor="colorTwo" className="block text-sm font-medium text-gray-700">Second Font Color</label>
        <input
          type="text"
          id="colorTwo"
          name="colorTwo"
          value={formData.colorTwo}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Color Hex"
        />
      </div>
      <div>
        <label htmlFor="colorThree" className="block text-sm font-medium text-gray-700">Third Font Color</label>
        <input
          type="text"
          id="colorThree"
          name="colorThree"
          value={formData.colorThree}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Color Hex"
        />
      </div>
    </div>
  );
}

export default StylingTab;