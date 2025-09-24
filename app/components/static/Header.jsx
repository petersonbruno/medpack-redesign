// app/components/static/Header.js
'use client'

import { useState } from 'react'
import Button from '../ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = ['Home', 'Services', 'Company', 'Contact', 'Support']

  return (
    <header className="w-full h-[100px] bg-white shadow-custom relative">
      {/* Subtle bottom shadow enhancement */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-purple-400/20"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo with subtle shadow */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600 drop-shadow-sm">MEDPACK</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigationItems.map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:drop-shadow-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <Button variant="primary" className="whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow duration-300">
              Partners Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="primary" className="text-sm px-4 py-2 hidden sm:block shadow-md">
              Portal
            </Button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 shadow-sm hover:shadow-md"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {/* Backdrop with shadow */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel with enhanced shadow */}
          <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Subtle left shadow for menu panel */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-200/50 to-purple-200/50"></div>
            
            {/* Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-white to-blue-50/30">
              <div className="text-xl font-bold text-blue-600 drop-shadow-sm">MEDPACK</div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="p-6">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Portal Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button 
                  variant="primary" 
                  className="w-full justify-center py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partners Portal
                </Button>
              </div>
            </nav>

            {/* Additional Mobile Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50/50">
              <div className="text-sm text-gray-500 text-center drop-shadow-sm">
                © 2024 MEDPACK. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}