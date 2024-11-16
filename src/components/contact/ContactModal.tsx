import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            
            <div className="space-y-4">
              <a href="mailto:contact@travelguide.com" className="flex items-center text-gray-600 hover:text-primary">
                <Mail className="mr-2" size={20} />
                contact@travelguide.com
              </a>
              
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-primary">
                <Phone className="mr-2" size={20} />
                +1 (234) 567-890
              </a>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2" size={20} />
                123 Travel Street, Adventure City
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}