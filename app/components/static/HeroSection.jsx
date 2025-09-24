// app/components/static/HeroSection.js
import Button from '../ui/Button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        {/* Mobile: Image first, then text */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image Section - First on mobile */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/hero-image.png"
                alt="MedPack Healthcare Solutions"
                width={600}
                height={500}
                className="rounded-2xl g w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Text Content - Second on mobile */}
          <div className="order-2 lg:order-1 lg:pl-[142px] lg:pt-[245px] w-full">
            <h1 className="font-poppins font-medium text-3xl lg:text-[38px] leading-[110%] lg:leading-[100%] tracking-[0%] mb-6 lg:mb-8 max-w-full text-[#0B7CD0]">
              We are building MedPack 
              <span className="font-poppins font-bold"> For Health Facilities.</span>
            </h1>
            
            <div className="mb-8 lg:mb-12 max-w-full">
              <p className="font-poppins font-normal text-lg lg:text-[20px] leading-[150%] lg:leading-[30px] tracking-[0%] text-gray-700">
                To help health facilities in managing their procurement, inventory, and sales, 
                and to enable patients to easily order medications and have them delivered 
                right to their doorstep. Join 1,300+ MedPack Users Today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Button 
                variant="primary" 
                className="bg-[#0B7CD0] hover:bg-[#0A6BB8] px-6 lg:px-8 py-3 text-sm lg:text-base"
              >
                Explore More
              </Button>
              <Button 
                variant="outline" 
                className="border-[#0B7CD0] text-[#0B7CD0] hover:bg-[#0B7CD0] hover:text-white px-6 lg:px-8 py-3 text-sm lg:text-base"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}