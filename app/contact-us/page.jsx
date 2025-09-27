"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import SectionBanner from "../components/common/SectionBanner";
import Button from "../components/ui/Button";

export default function ContactPage() {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Later: connect with EmailJS, backend API, or Firebase
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Top Banner */}
      <SectionBanner title="Our Contacts" />

      {/* Opening Hours */}
      <div className="flex flex-col items-center mt-12">
        <Image src="/icons/clock.png" alt="Clock" width={48} height={48} />
        <p className="font-poppins text-lg text-gray-800 mt-4">Mon - Fri, 8am - 8pm</p>
        <p className="font-poppins text-lg text-gray-800">Saturday, 8am - 5pm</p>
      </div>

      {/* Contact Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
        <div>
          <h2 className="font-poppins font-bold text-2xl mb-6 text-gray-900">
            Get in touch with us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
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
                Send Message
                </Button>
          </form>

          {/* Social Media */}
          <div className="flex space-x-6 mt-8">
            <Image src="/icons/facebook.png" alt="Facebook" width={32} height={32} />
            <Image src="/icons/twitter.png" alt="Twitter" width={32} height={32} />
            <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} />
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={32} height={32} />
            <Image src="/icons/youtube.png" alt="YouTube" width={32} height={32} />
          </div>
        </div>

        {/* Right - Contact Details */}
        <div className="space-y-6 m-9">
          <div className="flex items-start space-x-4">
            <Image src="/icons/location.png" alt="Location" width={28} height={28} />
            <p className="font-poppins text-gray-700">
              Delta House 4th Floor, Dunga Street, Kinondoni
              <br />
              Dar es Salaam, Tanzania.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Image src="/icons/phone.png" alt="Phone" width={28} height={28} />
            <p className="font-poppins text-gray-700">+255 755 173 854</p>
          </div>

          <div className="flex items-center space-x-4">
            <Image src="/icons/whatsapp.png" alt="WhatsApp" width={28} height={28} />
            <p className="font-poppins text-gray-700">+255 755 173 854</p>
          </div>

          <div className="flex items-center space-x-4">
            <Image src="/icons/email.png" alt="Email" width={28} height={28} />
            <p className="font-poppins text-gray-700">customercare@medpack.co.tz</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
