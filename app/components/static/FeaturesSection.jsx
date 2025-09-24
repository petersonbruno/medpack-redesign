// app/components/static/FeaturesSection.js
import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white">
      {/* Step 1: Rectangle to fit page from left to right */}
      <div className="w-full min-h-[600px] relative">
        
        {/* Step 2: Text on left side */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="lg:pl-8">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
               Explore More About
MedPack
              </h2>
              
              <p className="font-poppins font-normal text-lg text-gray-700 mb-8 leading-relaxed">
    Say goodbye to long wait times and frustration, and hello to a more efficient and convenient way to manage your healthcare needs.
              </p>
              
            </div>

            {/* Right Side - PNG Background with YouTube Thumbnail */}
            <div className="relative">
              {/* Step 3: PNG as background */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                {/* Background Pattern/Image */}
                <div className="absolute inset-0">
                  <div className="w-full h-full ">
                    <Image
                      src="/images/youtube1.png"
                      alt="MedPack YouTube Video"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Step 4: YouTube Thumbnail in Center with YouTube Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-48 bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    {/* Thumbnail Image */}
                    <Image
                      src="/images/youtube.png"
                      alt="MedPack YouTube Video"
                      fill
                      className="object-cover"
                    />
                    
                    {/* YouTube Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                        <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-poppins font-semibold text-sm">
                        MedPack - Transforming Healthcare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}