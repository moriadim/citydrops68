"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, ShoppingBag, MapPin, Search, ChevronDown, Bell, User } from 'lucide-react';

interface NavbarProps {
  currentView: 'customer' | 'admin';
  setView: (view: 'customer' | 'admin') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const { scrollY } = useScroll();
  const [showNotifications, setShowNotifications] = useState(false);

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl transition-all duration-300 ${currentView === 'admin' ? 'bg-white border-b border-gray-100' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-12 h-12 bg-[#020617] rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <ShoppingBag className="w-6 h-6 text-emerald-500" />
            </motion.div>
            <span className={`text-3xl font-black tracking-tighter ${currentView === 'customer' ? 'text-white' : 'text-[#020617]'}`}>
              City<span className="text-emerald-500 italic">Drop</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            <div className={`flex items-center space-x-2 font-black text-xs uppercase tracking-widest cursor-pointer hover:text-emerald-500 transition-colors ${currentView === 'customer' ? 'text-gray-300' : 'text-gray-500'}`}>
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Manhattan, NY</span>
              <ChevronDown className="w-3 h-3 opacity-50" />
            </div>
            
            <div className="flex items-center group relative bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
              <Search className={`w-4 h-4 mr-3 transition-colors ${currentView === 'customer' ? 'text-gray-500 group-hover:text-emerald-500' : 'text-gray-300'}`} />
              <input 
                type="text" 
                placeholder="Hungry for something?" 
                className={`bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest w-48 placeholder:text-gray-500 ${currentView === 'customer' ? 'text-white' : 'text-[#020617]'}`}
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
               <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`relative p-3 rounded-xl transition-all ${currentView === 'customer' ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-500 hover:bg-gray-50'}`}
               >
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white" />
               </button>
               
               <div className={`w-10 h-10 rounded-xl overflow-hidden border transition-all cursor-pointer ${currentView === 'customer' ? 'border-white/10' : 'border-gray-100 shadow-sm'}`}>
                  <img src="https://i.pravatar.cc/100?u=maher" alt="Maher" className="w-full h-full object-cover" />
               </div>
            </div>

            <div className="h-8 w-px bg-white/10 hidden md:block" />

            <button 
              onClick={() => setView(currentView === 'customer' ? 'admin' : 'customer')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl button-shine ${
                currentView === 'customer' 
                ? 'bg-emerald-500 text-white hover:bg-emerald-400' 
                : 'bg-[#020617] text-white hover:bg-emerald-500'
              }`}
            >
              {currentView === 'customer' ? (
                <>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Control Center</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Delivery Lobby</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Notifications Dropdown */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-24 right-8 w-80 bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden"
          >
            <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
               <span className="text-xs font-black uppercase tracking-widest text-[#020617]">Notifications</span>
               <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[8px] font-black rounded-md">2 NEW</span>
            </div>
            <div className="p-4 space-y-2">
               {[
                 { title: 'Driver Arrived', desc: 'Your order from Burger House is here.', time: '2m' },
                 { title: 'Promo Unlocked', desc: 'Get 20% off your next pharmacy order.', time: '1h' }
               ].map((n, i) => (
                 <div key={i} className="p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <p className="text-xs font-black text-[#020617] group-hover:text-emerald-500 transition-colors">{n.title}</p>
                    <p className="text-[10px] text-gray-500 font-medium">{n.desc}</p>
                    <p className="text-[8px] text-gray-300 font-bold mt-2 uppercase">{n.time} ago</p>
                 </div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
