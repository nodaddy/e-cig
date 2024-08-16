import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex h-[calc(100vh-64px)] min-h-screen">
      <div className="w-1/2 flex flex-col justify-center items-start px-16 bg-white" style={{ gap: '42px' }}>
        <img src="/assets/Logo.svg" alt="Email Signature Logo" className="w-auto h-[80px]" />
        <p className="text-[32px] leading-[42px] font-semibold text-[#101010] w-[480px]">
          Create professional email signatures for Gmail.
          <br />
          For free.
        </p>

        <Link to="/editor">
          <button className="bg-[#E43349] text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center h-[48px] hover:bg-red-600 transition duration-300">
            Create Signature
          </button>
        </Link>
        <p className="text-sm text-gray-600">
          No login required. No credit card required.
        </p>
      </div>
      <div
        className="w-1/2 bg-cover bg-center h-full"
        style={{
          backgroundImage: "url('/assets/hero.png')",
        }}
      ></div>
    </div>
  );
}

export default Home;