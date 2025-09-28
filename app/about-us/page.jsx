// app/about/page.js
import Image from "next/image";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[564px]">
        <div className="absolute inset-0">
          <Image
            src="/images/about-bg.jpg"
            alt="About MedPack Background"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ backgroundColor: "#0B7CD0" }}
          ></div>
        </div>
        <div className="relative max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h1
            className="font-poppins font-bold text-[48px] text-center text-white"
          >
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Rectangle Section with Left Image & Right Text */}
      <section className="relative w-full max-w-[1440px] mx-auto h-[760px] flex flex-col lg:flex-row items-center bg-white">
        {/* Left Image */}
        <div className="relative w-full lg:w-[730px] h-[760px]">
          <Image
            src="/images/about-left.jpg"
            alt="MedPack Team"
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Right Text */}
        <div className="lg:pl-12 mt-8 lg:mt-0 flex-1">
          <p className="font-poppins font text-[20px] leading-[38px] text-gray-900">
            <span className=" font-bold ">Welcome to MedPack -</span> the registered company revolutionizing Africa's
            pharmaceutical supply chain through information technology. We aim
            to empower individuals by providing seamless primary healthcare
            delivery through health facilities, all enabled by our cutting-edge
            technology.
          </p>
          <p className="font-poppins font text-[20px] leading-[38px] text-gray-900 mt-4">
            We partner with well-stocked pharmaceutical suppliers to deliver B2B,
            and with registered pharmacies across cities to deliver B2C. Our
            business customers include clinics, dispensaries, accredited drug
            dispensing outlets, community pharmacies, hospitals, and insurance
            companies. For patients, we work with chronic illness patients,
            general patients, and caregivers.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full max-w-[1440px] mx-auto h-[297px] bg-[#F0F8FF] flex flex-col lg:flex-row items-center px-8">
        {/* Vision */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🌟</span>
            <h3 className="font-poppins font-bold text-[20px] leading-[38px] text-gray-900">
              Our Vision
            </h3>
          </div>
          <p className="font-poppins text-[18px] text-gray-700">
            To simplify pharmaceutical services to ensure safe living in Africa.
          </p>
        </div>

        {/* Mission */}
        <div className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">💡</span>
            <h3 className="font-poppins font-bold text-[20px] leading-[38px] text-gray-900">
              Our Mission
            </h3>
          </div>
          <p className="font-poppins text-[18px] text-gray-700">
            To simplify access to medicines and other health products through
            digital devices and quick healthcare delivery.
          </p>
        </div>
      </section>

      {/* Blue Banner */}
      <section className="w-full max-w-[1440px] mx-auto h-[175px] bg-[#0B7CD0] flex items-center justify-center px-4">
        <h2 className="font-poppins font-medium text-[40px] leading-[38px] text-center text-white">
          "Your healthcare needs, simplified"
        </h2>
      </section>

      {/* Our Team Heading */}
      <section className="w-full max-w-[1440px] mx-auto h-[175px] bg-white flex items-center justify-center px-4">
        <h2 className="font-poppins font-bold text-[40px] leading-[38px] text-center text-gray-900">
          THIS OUR TEAM
        </h2>
      </section>

      {/* Team Image Background Section with Gradient */}
      <section className="relative w-full max-w-[1440px] mx-auto h-[883px]  mt-8">
        <Image
          src="/images/team-background.jpg"
          alt="Our Team Background"
          fill
          className="object-cover"
          style={{ mixBlendMode: "multiply" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 124, 208, 0.33) 15.97%, #0B7CD0 100%)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-end justify-center pb-4 px-4 ">
          <p className="font-poppins font-medium text-[32px] leading-[100%] text-white text-center">
            We are a diverse and experienced team dedicated to improving access
            to healthcare in Africa with technology.
          </p>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
}
