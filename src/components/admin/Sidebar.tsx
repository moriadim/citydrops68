"use client";

import React from 'react';
import { 
  BarChart3, 
  ShoppingBag, 
  Store, 
  Settings, 
  Users, 
  Bell, 
  LogOut 
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
    <aside className="w-72 bg-white border-r border-gray-100 flex flex-col h-[calc(100vh-64px)] sticky top-16 transition-all duration-300">
      <div className="p-6">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                activeTab === item.name 
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/30 font-bold' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-primary font-medium'
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.name ? 'text-white' : 'text-gray-400 group-hover:text-primary'}`} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary">New Updates</p>
              <p className="text-[10px] text-gray-500">2 new orders in NYC</p>
            </div>
          </div>
          <button className="w-full py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors">
            View Notifications
          </button>
        </div>

        <button className="w-full flex items-center space-x-3 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-50 transition-all duration-200 font-bold">
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
