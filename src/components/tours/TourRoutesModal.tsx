import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const tourRoutes = [
  {
    id: 1,
    name: "Ancient Temples Trail",
    duration: "7 days",
    difficulty: "Moderate",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1602873292340-9c0c3dbb0769?q=80&w=2940&auto=format&fit=crop",
    description: "Explore ancient temples and sacred sites across Southeast Asia.",
    highlights: ["Angkor Wat", "Bagan Temples", "Borobudur"]
  },
  {
    id: 2,
    name: "Coastal Paradise Route",
    duration: "10 days",
    difficulty: "Easy",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=2940&auto=format&fit=crop",
    description: "Journey through the most beautiful beaches and coastal towns.",
    highlights: ["Maldives", "Bali Beaches", "Phi Phi Islands"]
  },
  {
    id: 3,
    name: "Mountain Explorer",
    duration: "14 days",
    difficulty: "Challenging",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
    description: "Conquer peaks and traverse stunning mountain landscapes.",
    highlights: ["Swiss Alps", "Himalayan Trek", "Andes Route"]
  }
];

export default function TourRoutesModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Tour Routes</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourRoutes.map((route) => (
            <div key={route.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{route.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{route.name}</h3>
                <p className="text-gray-600 mb-4">{route.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{route.difficulty}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {route.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}