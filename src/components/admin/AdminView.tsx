"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import OrdersTable from './OrdersTable';

const AdminView = () => {
  const [activeTab, setActiveTab] = useState('Orders');

  return (
    <div className="flex min-h-screen pt-16 bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow p-8 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-primary mb-2">
              {activeTab} Dashboard
            </h1>
            <p className="text-gray-500 font-medium">Manage and track your business activities in real-time.</p>
          </header>

          {activeTab === 'Orders' && <OrdersTable />}
          
          {activeTab !== 'Orders' && (
            <div className="bg-white rounded-3xl p-20 border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6 border border-gray-100">
                <span className="text-4xl font-bold">!</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{activeTab} section coming soon</h2>
              <p className="text-gray-400 max-w-sm">We are currently building this feature. Please check back later for updates.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminView;
