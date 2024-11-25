import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import TourRoutesModal from './tours/TourRoutesModal';
import ExploreToursModal from './tours/ExploreToursModal';


export default function Hero() {
  const [showTourRoutes, setShowTourRoutes] = useState(false);
  const [showExploreTours, setShowExploreTours] = useState(false);

  return (
    <>
      {/* backgroundImage: 'url("https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop")' */}
      <div className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: "url('../../assets/Fondo cars.png')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Discover the World's Hidden Gems
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert travel guides and insider tips for your next adventure
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowExploreTours(true)}
                  className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-3 rounded-full font-medium flex items-center"
                >
                  Explore Now
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button
                  onClick={() => setShowTourRoutes(true)}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showTourRoutes && <TourRoutesModal onClose={() => setShowTourRoutes(false)} />}
      {showExploreTours && <ExploreToursModal onClose={() => setShowExploreTours(false)} />}
    </>
  );
}