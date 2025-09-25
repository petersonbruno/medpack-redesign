// app/components/static/PharmacySection.js
import Image from "next/image";
import Button from "../ui/Button";

export default function PharmacySection() {
  return (
    <section className="w-full min-h-[760px] bg-[rgba(240,248,255,1)]">
      <div className="w-full h-[760px] relative">
        {/* Background Image */}
        <Image
          src="/images/pharmacy-image.jpg"
          alt="Pharmacy Background"
          fill
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-custom-gradient">
          <div className="max-w-[1440px] mx-auto h-full relative">
            <div className="absolute right-0 top-[189px] w-[368px] pr-8">
              <h2 className="font-poppins font-bold text-[24px] leading-[32px] text-white mb-6">
                #Pharmacy Kiganjani
                <br />
                Beyond Healthcare Delivery
              </h2>

              <p className="font-poppins text-white/90 mb-8 leading-relaxed">
                Get your medication hassle-free with Medpack's innovative
                solutions.
              </p>

              <Button
                variant="primary"
                className="flex items-center justify-center whitespace-nowrap"
                style={{
                  width: "150px",
                  height: "40px",
                  borderRadius: "30px",
                  background: "#F72D3C",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
