import React from "react";
import { useNavigate } from "react-router-dom";
import { towers } from "../../lib";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-[#111]">Select a Tower</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {towers?.map((tower) => (
          <div
            key={tower.id}
            className="group w-full h-64 perspective cursor-pointer"
            onClick={() => navigate(`/tower/${tower.id}`)}>
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d card-inner rounded-xl shadow-xl">
              <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
                <img
                  src={tower.image}
                  alt={tower.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                  <h2 className="text-white text-xl font-bold drop-shadow-md">
                    {tower.name}
                  </h2>
                </div>
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl flex items-center justify-center">
                <h3 className="text-gray-800 font-semibold text-lg">
                  View Floors →
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
