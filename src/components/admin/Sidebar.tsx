"use client";

import React from 'react';
import { 
  BarChart3, 
  ShoppingBag, 
  Store, 
  Settings, 
  Users, 
  Bell, 
  LogOut,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { name: 'Dashboard', icon: BarChart3 },
  { name: 'Orders', icon: ShoppingBag },
  { name: 'Stores', icon: Store },
  { name: 'Customers', icon: Users },
  { name: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-80 bg-white border-r border-gray-100 flex flex-col h-[calc(100vh-64px)] sticky top-16 z-40 transition-all duration-300">
      <div className="p-10 flex-grow">
        <div className="flex items-center space-x-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-8 px-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Core Console</span>
        </div>

        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-[1.5rem] transition-all duration-300 group ${
                activeTab === item.name 
                  ? 'bg-[#020617] text-white shadow-2xl shadow-gray-300 font-bold' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-[#020617] font-bold'
              }`}
            >
              <div className="flex items-center space-x-4">
                <item.icon className={`w-5 h-5 transition-colors ${activeTab === item.name ? 'text-emerald-500' : 'text-gray-300 group-hover:text-[#020617]'}`} />
                <span className="text-xs uppercase tracking-widest">{item.name}</span>
              </div>
              {activeTab === item.name && <ChevronRight className="w-4 h-4 text-emerald-500" />}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-10 space-y-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#020617] to-gray-800 rounded-[2rem] p-6 text-white shadow-2xl">
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2">Pro Plan</p>
            <p className="text-sm font-black mb-4 tracking-tight leading-tight">Unlock AI Route <br />Optimization</p>
            <button className="w-full py-3 bg-white text-[#020617] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
              Upgrade Now
            </button>
          </div>
          {/* Decor */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full" />
        </div>

        <button className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all duration-300 font-black text-xs uppercase tracking-widest">
          <LogOut className="w-5 h-5 text-red-400" />
          <span>Exit Console</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
