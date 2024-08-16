import React from 'react';

function SocialMediaTab({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="facebookURL" className="block text-sm font-medium text-gray-700">FaceBook</label>
        <input
          type="url"
          id="facebookURL"
          name="facebookURL"
          value={formData.facebookURL}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter FaceBook URL"
        />
      </div>
      <div>
        <label htmlFor="twitterURL" className="block text-sm font-medium text-gray-700">Twitter / X</label>
        <input
          type="url"
          id="twitterURL"
          name="twitterURL"
          value={formData.twitterURL}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter Twitter / X URL"
        />
      </div>
      <div>
        <label htmlFor="linkedinURL" className="block text-sm font-medium text-gray-700">LinkedIn</label>
        <input
          type="url"
          id="linkedinURL"
          name="linkedinURL"
          value={formData.linkedinURL}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter LinkedIn URL"
        />
      </div>
      <div>
        <label htmlFor="youtubeURL" className="block text-sm font-medium text-gray-700">YouTube</label>
        <input
          type="url"
          id="youtubeURL"
          name="youtubeURL"
          value={formData.youtubeURL}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter YouTube URL"
        />
      </div>
      <div>
        <label htmlFor="githubURL" className="block text-sm font-medium text-gray-700">GitHub</label>
        <input
          type="url"
          id="githubURL"
          name="githubURL"
          value={formData.githubURL}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition duration-150 ease-in-out"
          placeholder="Enter GitHub URL"
        />
      </div>
    </div>
  );
}

export default SocialMediaTab;