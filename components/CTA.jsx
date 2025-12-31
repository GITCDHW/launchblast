import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-blue-700 py-16 md:py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Blast Off?
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Start building your waitlist today and connect directly with your future users. It's simple, fast, and effective.
        </p>
        <Link href="/mvp" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          Create Your Free Waitlist
        </Link>
      </div>
    </section>
  );
};

export default CTA;
