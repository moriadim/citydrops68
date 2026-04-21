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
    <div className="flex min-h-screen pt-16 bg-[#fcfdfe] dark:bg-[#020617] transition-colors duration-500">
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
              <h1 className="text-5xl font-black text-[#020617] dark:text-white tracking-tight mb-2">
                {activeTab}
              </h1>
              <p className="text-gray-400 font-medium font-mono text-[10px]">LOG_SESSION: {new Date().toLocaleTimeString()} :: DC_NORTH_EAST</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-emerald-50 dark:bg-emerald-500/10 px-6 py-3 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
                <span className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-tighter">Market Value</span>
                <span className="text-emerald-700 dark:text-white font-black">$2.48M</span>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Revenue Chart */}
                  <div className="bg-white dark:bg-white/5 p-12 rounded-[3.5rem] border border-gray-100 dark:border-white/5 shadow-sm col-span-1 lg:col-span-2">
                    <div className="flex justify-between items-center mb-12">
                      <div>
                        <h3 className="text-2xl font-black text-[#020617] dark:text-white tracking-tight">Revenue Vectors</h3>
                        <p className="text-xs text-gray-400 font-bold mt-1">Growth analysis across all city sectors</p>
                      </div>
                      <select className="bg-gray-50 dark:bg-white/5 border-none text-xs font-black px-6 py-3 rounded-2xl outline-none dark:text-white transition-all">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                      </select>
                    </div>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                          <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" opacity={0.1} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#64748b'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#64748b'}} />
                          <Tooltip 
                             contentStyle={{ 
                               backgroundColor: '#020617', 
                               borderRadius: '24px', 
                               border: '1px solid rgba(255,255,255,0.1)', 
                               boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                               padding: '20px'
                             }}
                             itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                             labelStyle={{ color: '#10b981', marginBottom: '10px', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase' }}
                          />
                          <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={6} fillOpacity={1} fill="url(#colorRev)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Orders Distribution */}
                  <div className="bg-white dark:bg-white/5 p-12 rounded-[3.5rem] border border-gray-100 dark:border-white/5 shadow-sm">
                    <h3 className="text-xl font-black text-[#020617] dark:text-white tracking-tight mb-12">Capture Rates</h3>
                    <div className="h-[250px] w-full">
                       <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={data}>
                            <XAxis dataKey="name" hide />
                            <Tooltip 
                              cursor={{fill: 'rgba(255,255,255,0.05)', radius: 10}}
                              contentStyle={{ 
                                 backgroundColor: '#020617', 
                                 borderRadius: '20px', 
                                 border: 'none',
                                 padding: '15px'
                               }}
                               itemStyle={{ color: '#fff', fontSize: '11px', fontWeight: 'bold' }}
                            />
                            <Bar dataKey="orders" radius={[15, 15, 5, 5]}>
                              {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                       </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-2 gap-8">
                     {[
                       { label: 'Avg Ticket', value: '$24.50', up: '+2%', color: 'text-emerald-500' },
                       { label: 'Fleet Velocity', value: '8.4m', up: '-12%', color: 'text-blue-500' },
                       { label: 'Churn Delta', value: '78%', up: '+5%', color: 'text-purple-500' },
                       { label: 'Core Latency', value: '0.4s', up: '-1%', color: 'text-pink-500' }
                     ].map((stat, i) => (
                       <div key={i} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col justify-center h-full group hover:bg-[#020617] dark:hover:bg-emerald-500 transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl">
                          <span className="text-[10px] text-gray-400 dark:text-gray-600 font-black uppercase tracking-widest mb-3 group-hover:text-white/50 transition-colors">{stat.label}</span>
                          <div className="flex items-end space-x-3">
                             <span className="text-3xl font-black text-[#020617] dark:text-white group-hover:text-white transition-colors tracking-tighter">{stat.value}</span>
                             <span className={`text-[10px] font-black group-hover:text-white transition-colors ${stat.color}`}>{stat.up}</span>
                          </div>
                          <div className="mt-4 w-full h-1 bg-gray-50 dark:bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: '70%' }}
                               className={`h-full bg-current ${stat.color}`}
                             />
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
              )}

              {activeTab === 'Orders' && <OrdersTable />}
              
              {activeTab !== 'Orders' && activeTab !== 'Dashboard' && (
                <div className="bg-white dark:bg-white/5 rounded-[3.5rem] p-32 border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center text-center shadow-sm">
                  <div className="w-24 h-24 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-gray-200 dark:text-gray-700 mb-10 border border-gray-50 dark:border-white/5">
                    <span className="text-5xl font-black tracking-tighter italic">C.D</span>
                  </div>
                  <h2 className="text-4xl font-black text-[#020617] dark:text-white mb-6">Module Syncing...</h2>
                  <p className="text-gray-400 dark:text-gray-500 max-w-sm font-bold leading-relaxed">
                    This sector is currently undergoing architectural migration. High-fidelity interface scheduled for next release.
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
