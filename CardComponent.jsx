import React from 'react';
import GrayImage from "../Assets/gray.png";

const CardComponent = () => {
  return (
    <div className="container mx-auto px-56 py-10 space-y-24">
      {/* First Section: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Headline</h2>
          <p className="text-gray-600 mt-2">
            Description goes here in 2–4 lines to give just a brief outline.
          </p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded">CTA</button>
        </div>
        <div className="flex-1">
          <div className="w-96 h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden">
            <img src={GrayImage} alt="gray-image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Second Section: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-10">
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Headline</h2>
          <p className="text-gray-600 mt-2">
            Description goes here in 2–4 lines to give just a brief outline.
          </p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded">CTA</button>
        </div>
        <div className="flex-1">
          <div className="w-full h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden">
            <img src={GrayImage} alt="gray-image" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
