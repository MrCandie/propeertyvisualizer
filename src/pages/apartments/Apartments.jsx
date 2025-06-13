import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { towers, dummyLayouts } from "../../lib";

export default function Apartments() {
  const navigate = useNavigate();
  const { id, floorId } = useParams();
  const tower = towers?.find((el) => el.id === id);
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-300 text-[#111] rounded hover:bg-gray-400 transition">
          ← Back to Towers
        </button>
        <button
          onClick={() => navigate(`/tower/${id}`)}
          className="px-4 py-2 bg-gray-300 text-[#111] rounded hover:bg-gray-400 transition">
          ← Back to Floors
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-[#000]">
        {tower?.name} – Floor {floorId}: Apartment Layouts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {dummyLayouts.map((layout) => (
          <div
            onClick={() => navigate(`/apartment/${id}/${floorId}/${layout.id}`)}
            key={layout.id}
            className="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl group">
            <div className="overflow-hidden">
              <img
                src={layout.image}
                alt={layout.unitType}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-120"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#000] mb-2">
                {layout.unitType}
              </h3>
              <p className="text-sm text-[#111]">Area: {layout.area}</p>
              <p className="text-sm text-[#111]">Rooms: {layout.roomCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
