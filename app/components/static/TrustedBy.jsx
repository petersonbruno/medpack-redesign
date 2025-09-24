"use client"

// app/components/static/TrustedBy.jsx
import { useState } from "react"
import Image from "next/image"

function Logo({ src, alt, fallback }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500 font-semibold">{fallback}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain"
      onError={() => setError(true)}
    />
  )
}

export default function TrustedBy() {
  const companyLogos = [
    "/images/company/1.png",
    "/images/company/2.png",
    "/images/company/3.png",
    "/images/company/4.jpg",
    "/images/company/5.png",
    "/images/company/6.png",
    "/images/company/7.jpg",
    "/images/company/8.png"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-3xl md:text-[36px] text-[#001540] leading-tight max-w-[1134px] mx-auto mb-8">
            Trusted by Leading Companies and Institutions
            <br />in Healthcare and Technology.
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#0B7CD0] transform -rotate-1 border-4 border-[#0B7CD0]" />
          </div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 items-center justify-items-center">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-20 h-20 md:w-24 md:h-24 hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <Logo src={logo} alt={`Company ${index + 1}`} fallback={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
