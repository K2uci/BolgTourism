import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get Travel Updates
        </h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive exclusive travel tips, hidden gems, and special offers directly in your inbox.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-[#00BCD4] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 flex items-center"
          >
            Subscribe
            <Send size={20} className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}