
"use client"
import React from 'react';
import backgroundbuilding from './asset/hostalbuilding1.jpg'; // Import the background image

function Banner() {
  return (
    <div className="shadow-lg mb-0">
      <div
        className="flex flex-col items-center justify-center h-60 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${backgroundbuilding.src})`,
          boxShadow: 'inset 0 0 0 1000px rgba(142, 150, 160, 0.477)',
        }}
      >
        <h1 className="text-4xl font-bold text-white  p-5">Find Your Stay With Us!!</h1>
        <span className='text-xl text-gray-100 m-5 font-bolds text-center'>Complete your registration with us to get a discount on the fee.</span>
        {/* <div className="flex items-center bg-white rounded-lg overflow-hidden w-96 shadow-lg">
          <input
            type="text"
            className="flex-grow px-4 py-2 outline-none"
            placeholder="Enter City to Search for hostal"
          />
          <button className="px-4 py-2 hover:bg-gray-200 transition-colors">
            <Image src={searchIcon} alt="Search" height={24} width={24} />
          </button>
        </div> */}

        
      </div>
    </div>
  );
}

export default Banner;