// app/components/static/PharmacySection.js
import Image from 'next/image'

export default function PharmacySection() {
  return (
    <section className="w-full min-h-[760px] bg-white">
      {/* Step 1: Rectangle to fit page from left to right */}
      <div className="w-full h-[760px] relative">
        
        {/* Step 2: Image as background inside */}
        <div className="absolute inset-0">
          <Image
            src="/images/pharmacy-image.jpg" // Your background image
            alt="Pharmacy Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Step 3: Gradient color from right to left inside */}
        <div className="absolute inset-0 bg-gradient-to-l from-blue-600/90 to-blue-600/10">
          {/* Step 4: Text and button on right side */}
          <div className="max-w-[1440px] mx-auto h-full relative">
            <div className="absolute right-0 top-[189px] w-[368px] pr-8">
              <h2 className="font-poppins font-bold text-[24px] leading-[32px] text-white mb-6">
                #Pharmacy Kiganjani
                <br />
                Beyond Healthcare Delivery
              </h2>
              
              <p className="font-poppins font-normal text-white/90 mb-8 leading-relaxed">
                Experience the future of pharmaceutical care with our innovative solutions 
                that go beyond traditional healthcare delivery methods.
              </p>
              
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-gray-100 transition-colors">
               See How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}