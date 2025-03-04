"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Star } from "@deemlol/next-icons";
import Filter from "./Filter";
import hstlDetails from "./HstlDetails";
import Link from "next/link";

interface HostelListProps {
  searchQuery: string;
}

function HostelList({ searchQuery }: HostelListProps) {
  const [filteredHostels, setFilteredHostels] = useState(hstlDetails);
  const [noMatchMessage, setNoMatchMessage] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  useEffect(() => {
    const filtered = hstlDetails.filter((hostel) =>
      hostel.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (ratingFilter === "high") {
      filtered.sort((a, b) => b.Rate - a.Rate);
    } else if (ratingFilter === "low") {
      filtered.sort((a, b) => a.Rate - b.Rate);
    }

    if (filtered.length === 0) {
      setNoMatchMessage("No hostels found for the selected filters.");
    } else {
      setNoMatchMessage("");
    }

    setFilteredHostels(filtered);
  }, [searchQuery, ratingFilter]);

  const handleFilterChange = ({ rating }: { rating: string }) => {
    setRatingFilter(rating);
  };

  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5750174899489372"
     crossOrigin="anonymous"></script>
      <Filter onFilterChange={handleFilterChange} />
      <div className="px-5 py-2">
        {noMatchMessage && (
          <p className="text-center text-red-600 font-semibold mb-4">
            {noMatchMessage}
          </p>
        )}
        <div className="w-full flex flex-col gap-5 items-center">
          {filteredHostels.map((hostel) => (
            <div
              key={hostel.id}
              className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <div className="w-full md:w-1/3">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  autoplay={{ delay: 3000 }}
                  loop
                  className="rounded-xl h-64"
                >
                  {hostel.img.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <Image
                        src={`/${img}`}
                        alt={`Slide ${imgIndex + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full md:w-2/3 bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex space-x-1">
                    {[...Array(hostel.Rate)].map((_, starIndex) => (
                      <Star key={starIndex} size={24} color="yellow" />
                    ))}
                  </div>
                  <h2 className="text-lg font-semibold">{hostel.Rate} Star</h2>
                </div>
                <h1 className="text-2xl font-bold mb-2">{hostel.name}</h1>
                <p className="text-sm mb-3">{hostel.location}</p>
                <div className="flex items-center space-x-2 mb-3 text-sm">
  {hostel.female === "yes" ? (
    <span className="bg-white text-black px-3 py-1 rounded-full">Girls</span>
  ) : (
    <span className="line-through text-gray-500">Girls</span>
  )}
  <span className="text-lg">|</span>
  {hostel.male === "yes" ? (
    <span className="bg-white text-black px-3 py-1 rounded-full">Boys</span>
  ) : (
    <span className="line-through text-gray-500">Boys</span>
  )}
</div>
  



                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold">
                    Available:{" "}
                    <span className="text-yellow-300">{hostel.Available}</span>
                  </span>
                  <Link href={`/${hostel.id}`}>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold shadow-md transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HostelList;

