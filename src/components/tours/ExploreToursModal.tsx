import { useState } from 'react';
import { MapPin, Users, Calendar, DollarSign } from 'lucide-react';

const tours = [
  {
    id: 1,
    name: "Tropical Paradise Expedition",
    location: "Bali, Indonesia",
    price: 1299,
    duration: "8 days",
    groupSize: "10-12",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    description: "Experience the magic of Bali with this comprehensive tour package."
  },
  {
    id: 2,
    name: "European Cultural Journey",
    location: "Multiple Cities, Europe",
    price: 2499,
    duration: "14 days",
    groupSize: "8-10",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2940&auto=format&fit=crop",
    description: "Discover the rich history and culture of Europe's most iconic cities."
  },
  {
    id: 3,
    name: "African Safari Adventure",
    location: "Tanzania & Kenya",
    price: 3299,
    duration: "10 days",
    groupSize: "6-8",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2940&auto=format&fit=crop",
    description: "Witness the incredible wildlife of Africa up close."
  }
];

const categories = ["All", "Adventure", "Cultural", "Relaxation", "Wildlife"];

export default function ExploreToursModal({ onClose }: { onClose: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Explore Tours</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full">
                  <span className="font-semibold text-primary">${tour.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>All inclusive</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}