import React from 'react';
import Image from 'next/image';
import logo1 from './asset/logo__1_-removebg.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-green-300 to-green-500 shadow-lg">
      {/* Logo */}
      <Link href="/">
      <div className="flex items-center">
        <Image
          src={logo1}
          alt="Logo"
          height={40}
          width={40}
          // className="rounded-full border-2 border-white"
          />
      </div>
          </Link>
      <span className="ml-3 text-xl font-bold text-white">Hostel Finder Nepal</span>

      {/* Help Link */}

      <a
          href="https://wa.me/9779824765952?text=Please%20Help%20Me%20To%20Choose%20Best%20Hostel"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-100 transition-colors"
        >
          Help??
        </a>

    </div>
  );
};

export default Navbar;