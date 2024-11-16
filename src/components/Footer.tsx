import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-[#00BCD4]" />
              <span className="ml-2 text-2xl font-bold text-white">TravelGuide</span>
            </div>
            <p className="text-gray-400">
              Discover the world's most amazing destinations with our expert guides and travel tips.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#00BCD4]">About Us</a></li>
              <li><a href="#" className="hover:text-[#00BCD4]">Destinations</a></li>
              <li><a href="#" className="hover:text-[#00BCD4]">Travel Guides</a></li>
              <li><a href="#" className="hover:text-[#00BCD4]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#00BCD4]">Bali, Indonesia</a></li>
              <li><a href="#" className="hover:text-[#00BCD4]">Santorini, Greece</a></li>
              <li><a href="#" className="hover:text-[#00BCD4]">Machu Picchu, Peru</a></li>
              <li><a href="#" className="hover:text-[#00BCD4]">Tokyo, Japan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#00BCD4]"><Facebook /></a>
              <a href="#" className="hover:text-[#00BCD4]"><Twitter /></a>
              <a href="#" className="hover:text-[#00BCD4]"><Instagram /></a>
              <a href="#" className="hover:text-[#00BCD4]"><Youtube /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TravelGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}