"use client";

import React from 'react';
import { X, CheckCircle2, CreditCard, MapPin, Truck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />
      
      <div className="relative bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="absolute top-6 right-6">
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-10">
          <h2 className="text-3xl font-bold text-primary mb-2">Order Summary</h2>
          <p className="text-gray-500 mb-8">Review your delivery details</p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Delivery Address</p>
                <p className="text-sm text-gray-500 italic">Downtown Manhattan, NY 10001</p>
                <button className="text-xs text-blue-600 font-bold mt-1 hover:underline">Edit Address</button>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Delivery Method</p>
                <p className="text-sm text-gray-500 italic">Standard Delivery (25-30 min)</p>
                <p className="text-xs text-secondary font-bold mt-1">Free for your first order!</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Payment Method</p>
                <p className="text-sm text-gray-500 italic">Visa ending in •••• 4242</p>
                <button className="text-xs text-emerald-600 font-bold mt-1 hover:underline">Change</button>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-3 mb-10">
            <div className="flex justify-between text-gray-500 text-sm font-medium">
              <span>Subtotal</span>
              <span>$24.50</span>
            </div>
            <div className="flex justify-between text-gray-500 text-sm font-medium">
              <span>Delivery Fee</span>
              <span className="text-secondary">Free</span>
            </div>
            <div className="flex justify-between text-primary text-xl font-bold pt-3 border-t border-gray-100">
              <span>Total</span>
              <span>$24.50</span>
            </div>
          </div>

          <button 
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-5 rounded-2xl transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 active:scale-95"
            onClick={() => {
              alert("Order Placed Successfully!");
              onClose();
            }}
          >
            <CheckCircle2 className="w-6 h-6" />
            <span className="text-lg">Confirm & Pay</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
