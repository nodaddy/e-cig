import React from 'react';

function GraphicsTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL</label>
        <input
          type="url"
          id="photoURL"
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Image URL"
        />
      </div>
      <div>
        <label htmlFor="bannerURL1" className="block text-sm font-medium text-gray-700">Banner 1 URL</label>
        <input
          type="url"
          id="bannerURL1"
          name="bannerURL1"
          value={formData.bannerURL1}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Image URL"
        />
      </div>
      <div>
        <label htmlFor="bannerURL2" className="block text-sm font-medium text-gray-700">Banner 2 URL</label>
        <input
          type="url"
          id="bannerURL2"
          name="bannerURL2"
          value={formData.bannerURL2}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Image URL"
        />
      </div>
      <div>
        <label htmlFor="bannerURL3" className="block text-sm font-medium text-gray-700">Banner 3 URL</label>
        <input
          type="url"
          id="bannerURL3"
          name="bannerURL3"
          value={formData.bannerURL3}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Image URL"
        />
      </div>
    </div>
  );
}

export default GraphicsTab;