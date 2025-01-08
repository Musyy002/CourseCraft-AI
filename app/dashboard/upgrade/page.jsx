import React from 'react';
import { FaCheckCircle, FaRocket, FaCrown } from 'react-icons/fa';

function Upgrade() {
  return (
    <section className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Upgrade Your Plan
          </h1>
          <p className="text-gray-600">
            You’ve completed 5 courses! Unlock more possibilities and continue your learning journey by upgrading your plan.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Basic Plan */}
          <div className="p-6 border rounded-lg bg-gray-50 text-center shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-purple-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic</h3>
            <p className="text-sm text-gray-600 mb-6">Continue with limited features</p>
            <span className="block text-4xl font-bold text-purple-700">$0</span>
            <p className="text-gray-600 mt-2">5 courses included</p>
            <button className="mt-6 block w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 border rounded-lg bg-gray-50 text-center shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-purple-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pro</h3>
            <p className="text-sm text-gray-600 mb-6">Unlock unlimited courses and premium features</p>
            <span className="block text-4xl font-bold text-purple-700">$29</span>
            <p className="text-gray-600 mt-2">Unlimited courses</p>
            <button className="mt-6 block w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition">
              Upgrade Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="p-6 border rounded-lg bg-gray-50 text-center shadow-sm hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <FaCrown className="text-purple-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium</h3>
            <p className="text-sm text-gray-600 mb-6">All features plus priority support</p>
            <span className="block text-4xl font-bold text-purple-700">$49</span>
            <p className="text-gray-600 mt-2">Unlimited courses + support</p>
            <button className="mt-6 block w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition">
              Go Premium
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Need help? <a href="/support" className="text-blue-500 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Upgrade;
