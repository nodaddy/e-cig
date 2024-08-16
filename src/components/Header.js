import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 absolute w-full top-0 z-50 sticky">
      <div className="mx-auto py-6 px-12 flex justify-between items-center">
        <Link to="/">
          <img src="/assets/logo.svg" alt="Email Signature Logo" className="w-auto h-[64px]" />
        </Link>
        <div className="flex items-center gap-5">
          <span className="text-sm font-medium text-[#101010] text-right">
            Want to support this tool?
          </span>
          <button
            onClick={() => window.open('https://buymeacoffee.com/rohitsinghal', '_blank', 'noopener,noreferrer')}
            className="bg-gray-100 border font-medium py-3 px-4 gap-3 rounded-lg flex items-center hover:bg-gray-200"
          >
            <img src="/assets/buymeacoffeelogo.svg" alt="Buy Me a Coffee" className="w-auto h-[24px]" />
            <span className="text-base font-medium text-[#101010] text-center">
              Buy Me A Coffee
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
