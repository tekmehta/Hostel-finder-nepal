"use client";
import React from "react";

// Define the type for the filter object
interface FilterOptions {
  rating: string; // Only rating remains
}

// Define the type for the onFilterChange prop
interface FilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

function Filter({ onFilterChange }: FilterProps) {
  const handleRatingChange = (rating: string) => {
    onFilterChange({ rating }); // Pass only the rating filter
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg rounded-lg">
      <div className="flex flex-row justify-between items-center py-4 px-6 max-w-6xl mx-auto">
        {/* Low Rated Filter */}
        <div
          className="flex flex-row items-center space-x-2 cursor-pointer"
          onClick={() => handleRatingChange("low")}
        >
          <div className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-purple-600"
            >
              <path
                fillRule="evenodd"
                d="M12 3.25a.75.75 0 0 1 .75.75v13.19l5.22-5.22a.75.75 0 1 1 1.06 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-6.5-6.5a.75.75 0 1 1 1.06-1.06l5.22 5.22V4a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-white font-medium">Low Rated</p>
        </div>

        {/* High Rated Filter */}
        <div
          className="flex flex-row items-center space-x-2 cursor-pointer"
          onClick={() => handleRatingChange("high")}
        >
          <div className="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-purple-600"
            >
              <path
                fillRule="evenodd"
                d="M12 3.25a.75.75 0 0 1 .53.22l6.5 6.5a.75.75 0 1 1-1.06 1.06L12.75 5.81V20a.75.75 0 0 1-1.5 0V5.81L5.53 11.03a.75.75 0 1 1-1.06-1.06l6.5-6.5a.75.75 0 0 1 .53-.22Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-white font-medium">High Rated</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;