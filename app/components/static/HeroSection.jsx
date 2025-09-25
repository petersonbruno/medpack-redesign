// app/components/static/HeroSection.js
import Button from "../ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[rgba(240,248,255,1)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/hero-image.png"
                alt="MedPack Healthcare Solutions"
                width={600}
                height={500}
                className="rounded-2xl w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="order-2 lg:order-1 lg:pl-[142px] w-full">
            <h1 className="font-poppins font-medium text-3xl lg:text-[38px] leading-[110%] lg:leading-[100%] mb-6 lg:mb-8 text-[#0B7CD0]">
              We are building MedPack
              <span className="font-bold"> For Health Facilities.</span>
            </h1>

            <p className="font-poppins text-lg lg:text-[20px] leading-[150%] lg:leading-[30px] text-gray-700 mb-8 lg:mb-12">
              To help health facilities in managing their procurement, inventory, and sales, 
              and to enable patients to easily order medications and have them delivered 
              right to their doorstep. Join 1,300+ MedPack Users Today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
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
                Patients
              </Button>
              <Button
                variant="primary"
                className="flex items-center justify-center whitespace-nowrap"
                style={{
                  width: "150px",
                  height: "40px",
                  borderRadius: "30px",
                  background: "#001540",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Health Facilities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
