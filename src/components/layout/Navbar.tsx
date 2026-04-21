"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LayoutDashboard, ShoppingBag, MapPin, Search, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentView: 'customer' | 'admin';
  setView: (view: 'customer' | 'admin') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl transition-all duration-300 ${currentView === 'admin' ? 'bg-white border-b border-gray-100' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#020617] rounded-xl flex items-center justify-center shadow-2xl rotate-3">
              <ShoppingBag className="w-6 h-6 text-emerald-500" />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${currentView === 'customer' ? 'text-white' : 'text-[#020617]'}`}>
              City<span className="text-emerald-500 italic">Drop</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            <div className={`flex items-center space-x-1 font-black text-xs uppercase tracking-widest cursor-pointer hover:text-emerald-500 transition-colors ${currentView === 'customer' ? 'text-gray-300' : 'text-gray-500'}`}>
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Downtown, NY</span>
              <ChevronDown className="w-3 h-3 opacity-50" />
            </div>
            
            <div className="flex items-center group">
              <Search className={`w-4 h-4 mr-3 transition-colors ${currentView === 'customer' ? 'text-gray-500 group-hover:text-emerald-500' : 'text-gray-300'}`} />
              <input 
                type="text" 
                placeholder="Find city secrets..." 
                className={`bg-transparent border-none outline-none text-xs font-bold w-48 placeholder:text-gray-500 ${currentView === 'customer' ? 'text-white' : 'text-[#020617]'}`}
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setView(currentView === 'customer' ? 'admin' : 'customer')}
              className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-xl button-shine ${
                currentView === 'customer' 
                ? 'bg-white text-[#020617] hover:bg-emerald-500 hover:text-white' 
                : 'bg-[#020617] text-white hover:bg-emerald-500'
              }`}
            >
              {currentView === 'customer' ? (
                <>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Admin Panel</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Store Front</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
