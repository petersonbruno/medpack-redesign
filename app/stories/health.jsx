"use client";

import { useState } from "react";

export default function HealthFacilities() {
  const facilities = [
    {
      name: "City Clinic",
      location: "Dar es Salaam",
      text: "MedPack simplified our supply chain, making it faster to receive essential medicines."
    },
    {
      name: "Sunrise Hospital",
      location: "Arusha",
      text: "Reliable delivery of pharmaceutical products enabled us to focus more on patients."
    },
    {
      name: "Kilimanjaro Lab",
      location: "Moshi",
      text: "Quick and consistent deliveries helped us maintain smooth lab operations."
    },
    {
      name: "Health First Dispensary",
      location: "Dodoma",
      text: "MedPack's technology ensured timely medicines delivery and better patient service."
    },
    {
      name: "Mwenge Clinic",
      location: "DSM",
      text: "They are always on time with deliveries, making our patients happier."
    },
    {
      name: "Bugando Hospital",
      location: "Mwanza",
      text: "We’ve cut supply delays by half thanks to MedPack."
    }
  ];

  // Track which "page" is active (3 cards per page)
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(facilities.length / cardsPerPage);

  const startIndex = page * cardsPerPage;
  const currentFacilities = facilities.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
      <h2 className="text-center text-[#001540] font-poppins font-semibold text-3xl md:text-4xl mb-12">
        Listen from Health Facilities
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {currentFacilities.map((f, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start"
          >
            <h3 className="font-poppins font-semibold text-xl mb-1">{f.name}</h3>
            <p className="font-poppins font-normal text-sm text-gray-600 mb-4">{f.location}</p>
            <p className="font-poppins font-normal text-[15px] text-gray-700">{f.text}</p>
          </div>
        ))}
      </div>

      {/* Round Navigation Buttons */}
      <div className="flex justify-center gap-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`w-4 h-4 rounded-full ${
              page === idx ? "bg-[#001540]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
