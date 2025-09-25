// app/components/static/Footer.jsx
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[#0B7CD0] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>

            {/* Email + Button */}
            <div className="flex flex-col space-y-3 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <Button
                variant="primary"
                className="whitespace-nowrap flex items-center justify-center"
                style={{
                  width: "100px",
                  height: "40px",
                  borderRadius: "30px",
                  background: "#F72D3C",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Subscribe
              </Button>
            </div>

            {/* Social Icons using inline SVGs */}
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="hover:text-gray-200">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="hover:text-gray-200">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.7 4.26 4.26 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 24 4.56a8.59 8.59 0 0 1-2.54.7z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-gray-200">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 1-.01 0zm.02 4.5H1v16h4V8zm7.5 0h-4v16h4v-8c0-4.42 6-4.77 6 0v8h4v-10c0-6-6-5.77-6-2v-4z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-gray-200">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.964.24 2.42.4a4.92 4.92 0 0 1 1.75 1.02 4.92 4.92 0 0 1 1.02 1.75c.16.457.346 1.25.4 2.42.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.964-.4 2.42a4.92 4.92 0 0 1-1.02 1.75 4.92 4.92 0 0 1-1.75 1.02c-.457.16-1.25.346-2.42.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.964-.24-2.42-.4a4.92 4.92 0 0 1-1.75-1.02 4.92 4.92 0 0 1-1.02-1.75c-.16-.457-.346-1.25-.4-2.42C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.964.4-2.42a4.92 4.92 0 0 1 1.02-1.75 4.92 4.92 0 0 1 1.75-1.02c.457-.16 1.25-.346 2.42-.4C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.014 7.052.072 5.77.13 4.67.326 3.78.634c-.897.305-1.65.71-2.407 1.467C.715 2.848.31 3.6.006 4.497c-.308.89-.504 1.99-.562 3.272C-.012 8.668 0 9.071 0 12s-.012 3.332.072 4.608c.058 1.282.254 2.382.562 3.272.305.897.71 1.65 1.467 2.407.757.757 1.51 1.162 2.407 1.467.89.308 1.99.504 3.272.562C8.668 23.988 9.071 24 12 24s3.332-.012 4.608-.072c1.282-.058 2.382-.254 3.272-.562a6.922 6.922 0 0 0 2.407-1.467 6.922 6.922 0 0 0 1.467-2.407c.308-.89.504-1.99.562-3.272.058-1.276.072-1.679.072-4.608s-.014-3.332-.072-4.608c-.058-1.282-.254-2.382-.562-3.272a6.922 6.922 0 0 0-1.467-2.407 6.922 6.922 0 0 0-2.407-1.467c-.89-.308-1.99-.504-3.272-.562C15.332.012 14.929 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
                </svg>
              </a>
              {/* You can add other social icons in similar inline SVG format */}
            </div>
          </div>

          {/* Financial Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Support</h3>
            <p>2023/2024 Funding Cycle</p>
            <p>2023/2025 Investment Opportunities</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Procurement Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Supply Chain
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-200">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-8 pt-8 text-center">
          <p>&copy; 2024 MedPack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
