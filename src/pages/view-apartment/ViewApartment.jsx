import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyLayouts } from "../../lib";

const ViewApartment = () => {
  const { apartmentId } = useParams();
  const navigate = useNavigate();
  const layout = dummyLayouts?.find((el) => String(el.id) === apartmentId);

  if (!layout) {
    return (
      <div className="text-center mt-20 text-red-600">Apartment not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-300 text-[#111] rounded hover:bg-gray-400 transition">
        ← Back
      </button>

      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={layout.image}
          alt={layout.unitType}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {layout.unitType}
          </h2>
          <p className="text-gray-600 mb-1">
            <strong>Area:</strong> {layout.area}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Room Count:</strong> {layout.roomCount}
          </p>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a
            placeholder for additional layout information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewApartment;
