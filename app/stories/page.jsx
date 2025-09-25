import Image from "next/image";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import HealthFacilities from "../stories/health";
import SectionBanner from "../components/common/SectionBanner";
import StoriesCarousel from "../components/common/StoriesCarousel";
import Button from "../components/ui/Button";
export default function Stories() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px]">
        <Image
          src="/images/stories.jpg"
          alt="MedPack Story Video Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11, 124, 208, 0) 40.14%, #0B7CD0 86.04%)",
          }}
        ></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-start items-start px-6 sm:px-12 lg:px-24 pt-24 lg:pt-32 max-w-4xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
            Real Stories of Improved Health Access:
          </h1>
          <p className="font-poppins font-medium text-lg md:text-xl text-white/90 leading-relaxed">
            MedPack's Pharmacy Feedback
          </p>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
            <svg
              className="w-10 h-10 text-white ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>
      {/* Patients Testimonials Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        {/* Section Head */}
        <h2 className="text-center text-[#001540] font-poppins font-semibold text-3xl md:text-4xl mb-12">
          Listen from Patients
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patient 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl mb-1">
              Jane
            </h3>
            <p className="font-poppins font-normal text-sm text-gray-600 mb-4">
              Masaki, DSM
            </p>
            <p className="font-poppins font-normal text-[15px] text-gray-700">
              MedPack is a life saver service, they delivered my medication
              within short period of time, I was Happy!
            </p>
          </div>

          {/* Patient 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl mb-1">
              John
            </h3>
            <p className="font-poppins font-normal text-sm text-gray-600 mb-4">
              Kariakoo, DSM
            </p>
            <p className="font-poppins font-normal text-[15px] text-gray-700">
              Fast and reliable service. MedPack made sure I got my medicines on
              time. Highly recommend!
            </p>
          </div>

          {/* Patient 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
            <h3 className="font-poppins font-semibold text-xl md:text-2xl mb-1">
              Aisha
            </h3>
            <p className="font-poppins font-normal text-sm text-gray-600 mb-4">
              Sinza, DSM
            </p>
            <p className="font-poppins font-normal text-[15px] text-gray-700">
              MedPack simplified my healthcare experience. Quick, easy, and
              dependable service.
            </p>
          </div>
        </div>
      </section>
    <HealthFacilities />
   <SectionBanner 
        title='"Your healthcare needs, simplified"'
        // highlight="healthcare"
        // highlightColor="text-yellow-300" // optional
      />
      <StoriesCarousel />
      <Footer />
    </div>
  );
}
