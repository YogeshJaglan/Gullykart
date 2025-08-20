import React from 'react';

const NewsLetter = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center text-center space-y-3 bg-primary/5 py-12 px-4 rounded-2xl shadow-sm">
      <h1 className="md:text-4xl text-2xl font-bold text-primary">
        Never Miss a Deal!
      </h1>
      <p className="md:text-lg text-gray-600 max-w-xl">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts.
      </p>
      <form className="flex items-center justify-between max-w-xl w-full md:h-14 h-12 bg-white rounded-md overflow-hidden shadow-sm">
        <input
          className="h-full w-full px-4 text-gray-700 placeholder-gray-400 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="md:px-10 px-6 h-full text-white bg-primary hover:bg-primary-dark transition-all duration-300 font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
