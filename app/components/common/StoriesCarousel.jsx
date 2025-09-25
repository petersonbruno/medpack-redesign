"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const stories = [
  {
    id: 1,
    thumbnail: "/images/stories1.jpg",
    title: "Pharmacy Experience in Dar es Salaam",
  },
  {
    id: 2,
    thumbnail: "/images/stories1.jpg",
    title: "Improving Access for Patients",
  },
  {
    id: 3,
    thumbnail: "/images/stories1.jpg",
    title: "Digital Solutions for Clinics",
  },
  {
    id: 4,
    thumbnail: "/images/stories1.jpg",
    title: "Simplifying Healthcare in Africa",
  },
];

export default function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16">
      {/* Header */}
      <h2 className="text-[#001540] font-poppins font-semibold text-[32px] text-center mb-12">
        Watch more stories
      </h2>

      {/* Carousel */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(currentIndex, currentIndex + 3).map((story) => (
            <div
              key={story.id}
              className="relative rounded-lg overflow-hidden shadow-md group"
            >
              {/* Thumbnail */}
              <Image
                src={story.thumbnail}
                alt={story.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Title */}
              <p className="absolute bottom-4 left-4 text-white font-poppins font-medium text-lg">
                {story.title}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-3">
          <button
            onClick={prevSlide}
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-600 transition"
          ></button>
          <button
            onClick={nextSlide}
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-600 transition"
          ></button>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="primary"
            className="flex items-center justify-center whitespace-nowrap"
            style={{
              width: "100px",
              height: "40px",
              borderRadius: "30px",
              background: "#0B7CD0",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
