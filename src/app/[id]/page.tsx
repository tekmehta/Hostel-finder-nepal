"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import hstlDetails from "@/components/HstlDetails"; // Assuming this is the correct import path
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

// Define a simplified interface for the hostel object (optional, can adjust based on actual data structure)
interface Hostel {
  id: number;
  name: string;
  location: string;
  Available: string;
  message: string;
  img: string[]; // Array of image paths
  price: { [key: string]: string | number }[]; // Prices for the hostel
  facility: { [key: string]: string | number }[]; // Facilities for the hostel
}

function Page() {
  const { id } = useParams();
  const [hostel, setHostel] = useState<Hostel | null>(null); // Initialize state as null or Hostel type
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use effect to fetch hostel data based on id from params
  useEffect(() => {
    if (!id) {
      return;
    }

    const foundHostel = hstlDetails.find((h) => h.id === parseInt(id as string));

    if (foundHostel) {
      setHostel(foundHostel);
    }
  }, [id]);

  // Image slideshow functionality
  useEffect(() => {
    if (!hostel?.img?.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hostel.img.length); // Change image every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [hostel]); // This effect will run only when hostel is updated

  // Display a message if hostel data is not found
  if (!hostel) {
    return <p>Hostel not found</p>;
  }

  return (
  <>
    <Navbar/>
    <div className="px-7 py-5">

      <h2 className="text-5xl font-bold font-serif underline text-center text-gray-800">
        {hostel.name}
      </h2>
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mb-4">
        <div className="mt-4 mb-4 relative">
          <div className="flex items-center justify-between absolute inset-0 z-10">
            <button
              className="text-white text-2xl p-2 bg-gray-800 rounded-full opacity-75 hover:opacity-100"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + hostel.img.length) % hostel.img.length)}
            >
              &#8249;
            </button>
            <button
              className="text-white text-2xl p-2 bg-gray-800 rounded-full opacity-75 hover:opacity-100"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % hostel.img.length)}
            >
              &#8250;
            </button>
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src={`/${hostel.img[currentSlide]}`} // Ensure that image path is correct
              alt={hostel.name}
              width={1000}
              height={400}
              className="transition-transform duration-500 ease-in-out transform h-80"
            />
          </div>
        </div>
      </div>


      {/* <div className="mt-6 space-y-6"> */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
  <p className="text-lg text-gray-700">Name: <span className="text-xl font-semibold text-gray-900">{hostel.name}</span></p>
  <p className="text-lg text-gray-700">
    Location: <span className="font-semibold text-gray-800">{hostel.location}</span>
  </p>
  <p className="text-lg text-gray-700">
    Available:{" "}
    <span className="relative font-semibold text-3xl px-5 py-3 text-green-600 bg-green-100 rounded-full">
      {hostel.Available}
    </span>
  </p>

  <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
    <h4 className="text-xl font-semibold text-gray-800">Hostel Warden Quote:</h4>
    <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-md">
      <p className="text-lg font-mono">{hostel.message}</p>
    </div>
  </div>
</div>



    <div className="mt-6">
  <h3 className="text-xl font-semibold text-gray-800">Price Accourding To Seater</h3>
  <table className="border-collapse mt-4 mx-auto w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
    <thead className="bg-green-600 text-white">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-medium">Feature</th>
        <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(hostel.price[0]).map(([key, value], index) => (
        <tr
        key={key}
          className={`border-t border-gray-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
        >
          <td className="px-6 py-4 text-gray-700 font-medium">{key}</td>
          <td className="px-6 py-4 text-gray-900 font-semibold">
            {typeof value === "string" || typeof value === "number" ? (
              value
            ) : (
              <span className="text-red-500">Invalid Data</span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



      <div className="mt-6">
  <h3 className="text-xl font-semibold text-gray-800">Facilities</h3>
  <table className="border-collapse mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
    <thead className="bg-green-600 text-white">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-medium">Facility</th>
        <th className="px-6 py-3 text-left text-sm font-medium">Details</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(hostel.facility[0]).map(([key, value], index) => (
        <tr
        key={key}
          className={`border-t border-gray-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
        >
          <td className="px-6 py-4 text-gray-700 font-medium">{key}</td>
          <td className="px-6 py-4 text-gray-900 font-semibold">
            {typeof value === "string" || typeof value === "number" ? (
              value
            ) : (
              <span className="text-red-500">Invalid Data</span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div className="fixed bottom-2 left-1/2 transform -translate-x-1/2">
  <a
    href="tel:9817815910"
    className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 focus:outline-none"
  >
    Book Now
  </a>
</div>

    </div>
    <Footer/>
        </>
  );
}

export default Page;
