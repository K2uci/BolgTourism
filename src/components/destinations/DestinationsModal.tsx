import { useQuery } from 'react-query';
import { getDestinations } from '../../lib/api';
import { MapPin } from 'lucide-react';

export default function DestinationsModal({ onClose }: { onClose: () => void }) {
  const { data: destinations, isLoading } = useQuery('destinations', getDestinations);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-6xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Destinations</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>

        {isLoading ? (
          <p>Loading destinations...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations?.map((destination: any) => (
              <div
                key={destination.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-gray-200 flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {destination.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}