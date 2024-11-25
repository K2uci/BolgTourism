import { useEffect, useState } from 'react';
import { Menu, Search, User, Sun, LogOut } from 'lucide-react';
import { useAuthStore } from '../lib/store';
import ContactModal from './contact/ContactModal';
import DestinationsModal from './destinations/DestinationsModal';
import LoginModal from './auth/LoginModal';
import { DataUserTypes } from '../types/StatusUserTypes';
// import RegisterModal from './auth/RegisterModal';



export default function Navbar() {
  const [openContact, setOpenContact] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);
  const [openLoggin, setOpenLoggin] = useState(false);
  const user = useAuthStore<DataUserTypes>((state) => state.user);
  const logout = useAuthStore((state) => state.logout)
  const touchContact = () => {
    setOpenContact(!openContact)
  }
  const touchDestinatio = () => {
    setOpenDestination(!openDestination)
  }
  const touchLoggin = () => {
    setOpenLoggin(!openLoggin)
  }
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-600 lg:hidden">
              <Menu size={24} />
            </button>
            <div className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
              <Sun className="h-8 w-8 text-[#00BCD4]" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-[#00BCD4] to-[#4CAF50] bg-clip-text text-transparent">
                TravelGuide
              </span>
            </div>
          </div>

          <div className="hidden lg:flex lg:space-x-8 lg:items-center">
            <a href="\" className="text-gray-700 hover:text-[#00BCD4] px-3 py-2 font-medium">Home</a>
            <button onClick={touchDestinatio} className="text-gray-700 hover:text-[#00BCD4] px-3 py-2 font-medium">Destinations</button>
            <a href="#" className="text-gray-700 hover:text-[#00BCD4] px-3 py-2 font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-[#00BCD4] px-3 py-2 font-medium">About</a>
            <button onClick={touchContact} className="text-gray-700 hover:text-[#00BCD4] px-3 py-2 font-medium">Contact</button>
          </div>
          {openContact ? <ContactModal onClose={touchContact} /> : null}
          {openDestination ? <DestinationsModal onClose={touchDestinatio} /> : null}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-600">
              <Search size={20} />
            </button>
            {user ?
              <button onClick={logout} className="p-2 rounded-md text-gray-600">
                <LogOut size={20} />
              </button>
              :
              <button onClick={touchLoggin} className="p-2 rounded-md text-gray-600">
                <User size={20} />
              </button>
            }
            {openLoggin ? <LoginModal onClose={touchLoggin} /> : null}
            {/* {openLoggin ? <RegisterModal onClose={touchLoggin}/>:null} */}
          </div>
        </div>
      </div>
    </nav>
  );
}