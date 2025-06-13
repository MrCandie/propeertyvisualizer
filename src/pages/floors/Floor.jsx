import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { towers } from "../../lib";

const floors = Array.from({ length: 15 }, (_, i) => 15 - i).reverse();

export default function Floor() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tower = towers?.find((el) => el.id === id);

  const resetToTowers = () => navigate("/");

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <button
        onClick={resetToTowers}
        className="mb-6 px-4 py-2 bg-gray-300 text-[#111] rounded hover:bg-gray-400 transition">
        ← Back to Towers
      </button>
      <h2 className="text-2xl font-bold mb-4 text-[#111]">
        {tower?.name}: Select a Floor
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
        {floors.map((floor) => (
          <div
            key={floor}
            onClick={() => navigate(`/floor/${id}/${floor}`)}
            className="bg-white text-center shadow-md rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:shadow-lg cursor-pointer transition">
            Floor {floor}
          </div>
        ))}
      </div>
    </div>
  );
}
