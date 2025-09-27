"use client";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";

export default function HeroSection() {
  const words = ["Health Facilities", "Patients"];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      setCurrentWord(
        isDeleting
          ? current.substring(0, charIndex - 1)
          : current.substring(0, charIndex + 1)
      );

      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

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
              <br /> For{" "}
              <span className="font-bold text-[rgba(11,124,208,1)]">
                 {currentWord}
                <span className="border-r-2 border-[rgba(11,124,208,1)] animate-pulse ml-1"></span>
              </span>
            </h1>

            <p className="font-poppins text-lg lg:text-[20px] leading-[150%] lg:leading-[30px] text-gray-700 mb-8 lg:mb-12">
              To help health facilities in managing their procurement, inventory,
              and sales, and to enable patients to easily order medications and
              have them delivered right to their doorstep. Join 1,300+ MedPack
              Users Today.
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
