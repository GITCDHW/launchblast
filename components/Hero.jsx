'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Launch Your Next Big Idea Faster.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
          LaunchBlast helps founders effortlessly create waitlist pages and send one-time launch notifications to eager early adopters.
        </p>
        <Link href="/mvp" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          Create Your Waitlist Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
