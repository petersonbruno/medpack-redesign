"use client";

import { useState } from "react";
import Link from "next/link";

// ✅ Import shared layout components
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";

export default function PartnersPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { email, password });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow bg-[rgba(240,248,255,1)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Welcome Information */}
            <div className="  p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="font-poppins font-semibold text-[32px] text-gray-900 mb-4">
                  Welcome Partner
                </h2>
                <p className="font-poppins font-normal text-[24px] text-gray-600 mb-8">
                  Login to continue serving your Clients
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-[28px] text-gray-900 mb-4">
                    To partner with us:
                  </h3>
                  <p className="font-poppins font-semibold text-[20px] text-blue-600 mb-2">
                    Call: +255 755 173 854
                  </p>
                  <p className="font-poppins font-semibold text-[20px] text-blue-600">
                    or email us at:
                  </p>
                  <p className="font-poppins font-semibold text-[20px] text-blue-600">
                    esta@medpack.co.tz
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="font-poppins font-semibold text-[20px] text-gray-700">
                    We partner with telehealth, clinics, labs, dispensaries,
                    health centers and hospitals
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-8 lg:p-12">
              <h2 className="font-poppins font-semibold text-[28px] text-gray-900 mb-8 text-center lg:text-left">
                Get started
              </h2>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Health Center Input */}
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins">
                    <option value="">Select your health center</option>
                    <option value="clinic">Clinic</option>
                    <option value="hospital">Hospital</option>
                    <option value="lab">Laboratory</option>
                    <option value="dispensary">Dispensary</option>
                    <option value="telehealth">Telehealth Service</option>
                    <option value="health-center">Health Center</option>
                  </select>
                </div>

                {/* Email Input */}
                <div>
                  
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-poppins"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <button
                    type="button"
                    className="font-poppins font-semibold text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0B7CD0] text-white py-3 rounded-lg font-poppins font-semibold text-lg hover bg-[#0B7CD0] transition-colors shadow-lg"
                  style={{
                    borderRadius: "30px",
                    width: "100px",
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
