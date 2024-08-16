import React from 'react';

function CompanyInfoTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Company Name"
        />
      </div>
      <div>
        <label htmlFor="webSite" className="block text-sm font-medium text-gray-700">Website URL</label>
        <input
          type="url"
          id="webSite"
          name="webSite"
          value={formData.webSite}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Website URL"
        />
      </div>
      <div>
        <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Address Line 1"
        />
      </div>
      <div>
        <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Address Line 2"
        />
      </div>
    </div>
  );
}

export default CompanyInfoTab;