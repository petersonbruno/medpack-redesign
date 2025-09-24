

export default function Footer() {
  return (
    <footer className="bg-[#0B7CD0] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Get in Touch - Left */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <p className="mb-2">Have questions or need support?</p>
            <p className="mb-2">📧 info@medpack.co.tz</p>
            <p className="mb-2">📞 +255 700 000 000</p>
            <p className="mb-2">📍 Dar es Salaam, Tanzania</p>
          </div>

          {/* Financial Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Support</h3>
            <p>2023/2024 Funding Cycle</p>
            <p>2023/2025 Investment Opportunities</p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">Procurement Management</a></li>
              <li><a href="#" className="hover:text-gray-200">Supply Chain</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">About us</a></li>
              <li><a href="#" className="hover:text-gray-200">Careers</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="border-t border-white/30 mt-8 pt-8 text-center">
          <p>&copy; 2024 MedPack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
