"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import OrdersTable from './OrdersTable';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000, orders: 240 },
  { name: 'Tue', revenue: 3000, orders: 139 },
  { name: 'Wed', revenue: 2000, orders: 980 },
  { name: 'Thu', revenue: 2780, orders: 390 },
  { name: 'Fri', revenue: 1890, orders: 480 },
  { name: 'Sat', revenue: 2390, orders: 380 },
  { name: 'Sun', revenue: 3490, orders: 430 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

const AdminView = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex min-h-screen pt-16 bg-[#fcfdfe]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow p-8 md:p-16 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          >
            <div>
              <div className="flex items-center space-x-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Real-time Operational Intel</span>
              </div>
              <h1 className="text-5xl font-black text-[#020617] tracking-tight mb-2">
                {activeTab}
              </h1>
              <p className="text-gray-400 font-medium font-mono text-xs">LOG_SESSION: {new Date().toLocaleTimeString()}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100">
                <span className="text-emerald-600 font-black text-xs">Total Market Cap</span>
                <span className="text-emerald-700 font-black">$2.4M</span>
              </div>
            </div>
          </motion.header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'Dashboard' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Revenue Chart */}
                  <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm col-span-1 lg:col-span-2">
                    <div className="flex justify-between items-center mb-10">
                      <h3 className="text-xl font-black text-[#020617] tracking-tight">Revenue Trends</h3>
                      <select className="bg-gray-50 border-none text-xs font-bold px-4 py-2 rounded-xl outline-none">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                      </select>
                    </div>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                          <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                          <Tooltip 
                             contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                          />
                          <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Orders Distribution */}
                  <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-black text-[#020617] tracking-tight mb-10">Orders by Channel</h3>
                    <div className="h-[250px] w-full">
                       <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={data}>
                            <XAxis dataKey="name" hide />
                            <Tooltip />
                            <Bar dataKey="orders" radius={[10, 10, 0, 0]}>
                              {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                       </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                     {[
                       { label: 'Avg Ticket', value: '$24.50', up: '+2%' },
                       { label: 'Pickup Time', value: '8.4m', up: '-12%' },
                       { label: 'Retention', value: '78%', up: '+5%' },
                       { label: 'Fleet Latency', value: '0.4s', up: '-1%' }
                     ].map((stat, i) => (
                       <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center h-full group hover:bg-[#020617] transition-all duration-300">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2 group-hover:text-gray-500">{stat.label}</span>
                          <div className="flex items-end space-x-2">
                             <span className="text-2xl font-black text-[#020617] group-hover:text-white transition-colors">{stat.value}</span>
                             <span className={`text-[10px] font-black ${stat.up.startsWith('+') ? 'text-emerald-500' : 'text-blue-500'}`}>{stat.up}</span>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
              )}

              {activeTab === 'Orders' && <OrdersTable />}
              
              {activeTab !== 'Orders' && activeTab !== 'Dashboard' && (
                <div className="bg-white rounded-[3rem] p-24 border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-8 border border-gray-50">
                    <span className="text-5xl font-black tracking-tighter italic">C.D</span>
                  </div>
                  <h2 className="text-3xl font-black text-[#020617] mb-4">{activeTab} Interface</h2>
                  <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
                    This module is currently in beta. Our team is finalizing the architecture for this view.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminView;
