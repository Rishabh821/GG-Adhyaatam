import React from "react";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row justify-center items-start p-6 md:p-10 gap-8">
      {/* Left Section - Cart Summary */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-3">
          🛒 Order Summary
        </h2>

        {/* Cart Item */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Product"
              className="w-20 h-20 object-cover rounded-xl"
            />
            <div>
              <h3 className="font-medium text-lg">Wireless Headphones</h3>
              <p className="text-gray-500 text-sm">Qty: 1</p>
            </div>
          </div>
          <p className="font-semibold text-gray-700">₹3,499</p>
        </div>

        {/* Cart Item */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Product"
              className="w-20 h-20 object-cover rounded-xl"
            />
            <div>
              <h3 className="font-medium text-lg">Smartwatch</h3>
              <p className="text-gray-500 text-sm">Qty: 1</p>
            </div>
          </div>
          <p className="font-semibold text-gray-700">₹2,799</p>
        </div>

        {/* Price Summary */}
        <div className="space-y-2 pt-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹6,298</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-3">
            <span>Total</span>
            <span>₹6,298</span>
          </div>
        </div>
      </div>

      {/* Right Section - Delivery Form */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 border-b pb-3">
          🚚 Delivery Details
        </h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            placeholder="Full Address"
            rows="3"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="w-1/2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <select
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select State
            </option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
          </select>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Proceed to Payment 💳
          </button>
        </form>
      </div>
    </div>
  );
}
