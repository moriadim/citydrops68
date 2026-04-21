"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  MapPin, 
  Search, 
  ChevronDown, 
  Bell, 
  Moon, 
  Sun,
  X
} from 'lucide-react';

interface NavbarProps {
  currentView: 'customer' | 'admin';
  setView: (view: 'customer' | 'admin') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const { scrollY } = useScroll();
  const [showNotifications, setShowNotifications] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", isDarkMode ? "rgba(2, 6, 23, 0.9)" : "rgba(255, 255, 255, 0.9)"]
  );

  const textColor = isDarkMode ? 'text-white' : 'text-[#020617]';
  const subTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl transition-all duration-300 ${currentView === 'admin' ? (isDarkMode ? 'bg-[#020617] border-b border-white/5' : 'bg-white border-b border-gray-100') : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ rotate: [-3, 3, -3], scale: 1.1 }}
              className="w-12 h-12 bg-[#020617] dark:bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl transition-colors duration-500"
            >
              <ShoppingBag className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-emerald-500'}`} />
            </motion.div>
            <span className={`text-3xl font-black tracking-tighter transition-colors duration-500 ${currentView === 'customer' ? 'text-white' : textColor}`}>
              City<span className="text-emerald-500 italic">Drop</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            <div className={`flex items-center space-x-2 font-black text-xs uppercase tracking-widest cursor-pointer hover:text-emerald-500 transition-colors ${currentView === 'customer' ? 'text-gray-300' : subTextColor}`}>
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Manhattan, NY</span>
              <ChevronDown className="w-3 h-3 opacity-50" />
            </div>
            
            <div className={`flex items-center group relative px-6 py-3 rounded-2xl border transition-all ${isDarkMode ? 'bg-white/5 border-white/5 hover:border-white/20' : 'bg-gray-50 border-gray-100'}`}>
              <Search className="w-4 h-4 mr-3 text-gray-500 group-hover:text-emerald-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Find city secrets..." 
                className={`bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest w-48 placeholder:text-gray-500 transition-colors duration-500 ${currentView === 'customer' ? 'text-white' : textColor}`}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 mr-4">
               <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-xl transition-all ${currentView === 'customer' ? 'text-gray-400 hover:text-white hover:bg-white/5' : (isDarkMode ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-gray-100')}`}
               >
                 {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
               </button>

               <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className={`relative p-3 rounded-xl transition-all ${currentView === 'customer' ? 'text-gray-400 hover:text-white hover:bg-white/5' : (isDarkMode ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-gray-100')}`}
               >
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white dark:border-[#020617]" />
               </button>
            </div>

            <div className="h-8 w-px bg-white/10 hidden md:block" />

            <button 
              onClick={() => setView(currentView === 'customer' ? 'admin' : 'customer')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl button-shine ${
                currentView === 'customer' 
                ? 'bg-emerald-500 text-white hover:bg-emerald-400' 
                : 'bg-[#020617] dark:bg-emerald-500 text-white hover:bg-emerald-500 dark:hover:bg-emerald-400'
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
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={`absolute top-24 right-8 w-96 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border overflow-hidden ${isDarkMode ? 'bg-[#0f172a] border-white/5 text-white' : 'bg-white border-gray-100'}`}
          >
            <div className={`p-8 border-b flex justify-between items-center ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
               <div className="flex items-center space-x-3">
                  <span className="text-sm font-black uppercase tracking-widest">Notification Hub</span>
                  <span className="px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-black rounded-md">LIVE</span>
               </div>
               <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-emerald-500"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-6 space-y-4">
               {[
                 { title: 'Fleet Arrival', desc: 'Driver assigned to order CD-9286.', time: '2m ago', active: true },
                 { title: 'Market Shift', desc: 'NYC high-demand zone detected.', time: '15m ago', active: false },
                 { title: 'Access Granted', desc: 'Maher M. elevated to Admin status.', time: '1h ago', active: false }
               ].map((n, i) => (
                 <div key={i} className={`p-4 rounded-3xl transition-all cursor-pointer group flex items-start space-x-4 ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${n.active ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-gray-700'}`} />
                    <div>
                      <p className="text-xs font-black group-hover:text-emerald-500 transition-colors uppercase tracking-tight">{n.title}</p>
                      <p className={`text-[10px] font-medium leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{n.desc}</p>
                      <p className="text-[8px] text-gray-500 font-bold mt-2 uppercase">{n.time}</p>
                    </div>
                 </div>
               ))}
            </div>
            <div className={`p-6 text-center border-t ${isDarkMode ? 'border-white/5' : 'border-gray-50'}`}>
               <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:underline">Clear System Logs</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
