import Image from "next/image";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import TrustedBy from "../components/static/TrustedBy";
const howItWorksSteps = [
  {
    id: 1,
    title: "Sign Up",
    icon :"/icons/signup.png",
    description: "Create your MedPack account to access healthcare services.",
  },
  {
    id: 2,
    title: "Home",
    description: "Browse the platform for healthcare options tailored to you.",
  },
  {
    id: 3,
    title: "Prescription",
    description: "Upload or request prescriptions quickly and securely.",
  },
  {
    id: 4,
    title: "Explore Products",
    description: "Find and order a wide range of medical and health products.",
  },
  {
    id: 5,
    title: "Delivery",
    description: "Get your medicines and products delivered to your doorstep.",
  },
  {
    id: 6,
    title: "Payments",
    description: "Pay securely online through multiple payment options.",
  },
  {
    id: 7,
    title: "My Dose",
    description: "Track your medications and manage your daily doses.",
  },
  {
    id: 8,
    title: "Health Tips",
    description: "Receive helpful tips and reminders for healthier living.",
  },
];
const patientFeatures = [
  {
    id: 1,
    icon: "📄",
    title: "Upload Prescription",
    description: "Easily upload your doctor’s prescription for faster service.",
  },
  {
    id: 2,
    icon: "📝",
    title: "Request Prescription",
    description:
      "Request a prescription renewal without visiting the hospital.",
  },
  {
    id: 3,
    icon: "⏰",
    title: "Reminders & Health Tips",
    description:
      "Get personalized medication reminders and useful health advice.",
  },
  {
    id: 4,
    icon: "🛒",
    title: "Buying Other Products",
    description: "Purchase health-related products directly from our platform.",
  },
  {
    id: 5,
    icon: "💊",
    title: "Dose Refill",
    description: "Quickly order your dose refills for uninterrupted treatment.",
  },
  {
    id: 6,
    icon: "💻",
    title: "Telehealth",
    description:
      "Consult with doctors remotely through our telehealth services.",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[rgba(240,248,255,1)]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-[#0B7CD0] mb-8">
            MedPack For Patients
          </h1>
          <p className="mb-10 ">App feature</p>
          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {patientFeatures.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero-image.png" // Replace with your image
            alt="MedPack For Patients"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>
      {/* HOW IT WORK Section */}
      <section className="relative bg-white max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero-image.png" // Replace with your image
            alt="How MedPack Works"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Steps */}
        <div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-[#001540] mb-10">
            HOW IT WORK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {howItWorksSteps.map((step) => (
              <div key={step.id} className="flex gap-4 items-start">
                {/* Number + Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B7CD0] text-white text-xl">
                  {step.icon}
                </div>

                {/* Step Details */}
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 flex items-center gap-2">
                    <span className="text-[#0B7CD0] font-bold">{step.id}.</span>{" "}
                    {step.title}
                  </h3>
                  <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Rectangle Promo Section */}
      <section className="relative bg-[rgba(240,248,255,1)] max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 h-[760px]">
        {/* Left Image with gradient overlay */}
        <div className="relative w-full h-full">
          <Image
            src="/images/pharmacy.jpg" // replace with your local image
            alt="Pharmacy KIGANJANI"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]"></div>
        </div>

        {/* Right Text Content with gradient background */}
        <div
          className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 text-white"
          style={{
            background:
              "linear-gradient(112.96deg, #001540 0%, #0B7CD0 59.31%)",
          }}
        >
          <p className="font-poppins font-bold text-[25.41px] leading-[40.65px] mb-4">
            #PharmacyKIGANJANI
          </p>
          <h2 className="font-poppins font-medium text-[48px] leading-[59.6px] mb-6">
            Beyond Healthcare Delivery.
          </h2>
          <p className="font-poppins font-medium text-[30.7px] leading-[47.75px] mb-8">
            Join the MedPack community today. Download the App Now.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col  sm:flex-row gap-4">
            {/* Play Store */}
            <a
              href="#"
              className="flex bg-[rgba(0, 21, 64, 1)] items-center gap-3 bg-[#001540] text-[#0B7CD0] px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              <Image
                src="/icons/playstore.png"
                alt="Play Store"
                width={24}
                height={24}
              />
              <span className="font-poppins font-semibold">Google Play</span>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-[#001540] text-[#0B7CD0] px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              <Image
                src="/icons/appstore.png"
                alt="App Store"
                width={24}
                height={24}
              />
              <span className="font-poppins font-semibold">App Store</span>
            </a>

            {/* See How It Works */}
            <a
              href="#"
              className="flex items-center gap-3 border bg-[#F72D3C] px-6 py-3 rounded-full hover:bg-white hover:text-[#0B7CD0] transition"
            >
              <span className="font-poppins font-semibold">
                See How It Works
              </span>
            </a>
          </div>
        </div>
      </section>

      <TrustedBy />
      {/* Footer */}
      <Footer />
    </div>
  );
}
