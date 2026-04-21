"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, CreditCard, MapPin, Truck, ShieldCheck, Box, Navigation } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = () => {
    setIsOrdered(true);
  };

  const closeReset = () => {
    onClose();
    setTimeout(() => setIsOrdered(false), 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl" 
            onClick={closeReset} 
          />
          
          <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[3.5rem] w-full max-w-xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="p-12 md:p-16">
              {!isOrdered ? (
                <>
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <div className="flex items-center space-x-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-3">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Secure Checkout</span>
                      </div>
                      <h2 className="text-4xl font-black text-[#020617] tracking-tight">Order Summary</h2>
                    </div>
                    <button 
                      onClick={closeReset}
                      className="p-3 rounded-2xl bg-gray-50 text-gray-400 hover:bg-[#020617] hover:text-white transition-all shadow-sm"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="group flex items-start space-x-5 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#020617] group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Delivering to</p>
                        <p className="text-sm font-black text-[#020617]">742 Evergeen Terrace, NYC</p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-5 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#020617] group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Truck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Estimate</p>
                        <p className="text-sm font-black text-[#020617]">Lightning Fast (12-18 min)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-8 rounded-3xl bg-[#020617] text-white">
                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                      <span className="text-xl font-black italic">Total</span>
                      <span className="text-3xl font-black text-emerald-400">$34.90</span>
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-10 bg-emerald-500 hover:bg-emerald-400 text-white font-black py-6 rounded-[2rem] transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)] flex items-center justify-center space-x-4 button-shine"
                    onClick={handleOrder}
                  >
                    <CheckCircle2 className="w-7 h-7" />
                    <span className="text-lg uppercase tracking-widest">Launch Order</span>
                  </motion.button>
                </>
              ) : (
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/40"
                  >
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  <h2 className="text-4xl font-black text-[#020617] mb-4">Tracking Live</h2>
                  <p className="text-gray-400 font-bold mb-12">Your order CD-9286 is being prepared.</p>

                  <div className="space-y-8 mb-12 relative">
                    {/* Progress Bar Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100" />
                    
                    {[
                      { icon: Box, label: 'Order Confirmed', time: '12:45 PM', completed: true },
                      { icon: Navigation, label: 'Driver Assigned', time: '12:47 PM', completed: true },
                      { icon: Truck, label: 'Picking Up', time: 'Pending', completed: false }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center space-x-6 relative">
                         <div className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center relative z-10 transition-colors ${step.completed ? 'border-emerald-500 text-emerald-500' : 'border-gray-200 text-gray-300'}`}>
                            <step.icon className="w-6 h-6" />
                         </div>
                         <div className="text-left">
                            <p className={`text-sm font-black uppercase tracking-widest ${step.completed ? 'text-[#020617]' : 'text-gray-300'}`}>{step.label}</p>
                            <p className="text-xs text-gray-400 font-bold">{step.time}</p>
                         </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={closeReset}
                    className="w-full bg-[#020617] text-white font-black py-4 rounded-2xl uppercase tracking-widest text-xs transition-transform hover:scale-[0.98]"
                  >
                    Back to City
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
