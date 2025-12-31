'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function WaitlistForm({ onSubmissionSuccess }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to join waitlist.');
      }

      onSubmissionSuccess('You have successfully joined the waitlist!');
      setEmail('');
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email" className="sr-only">Email address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A19D] h-5 w-5" />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="block w-full pl-11 pr-4 py-3 text-[#2C2C2C] border-2 border-[#A1A19D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#97B69F] focus:border-[#97B69F] transition duration-200 placeholder-[#A1A19D] bg-white text-base md:text-lg font-sans"
            required
            disabled={isLoading}
          />
        </div>
        {error && (
          <p className="text-red-600 text-sm font-sans mt-2">{error}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-[#97B69F] hover:bg-[#80A087] text-white font-bold py-3 px-6 rounded-md transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-lg font-sans shadow-md"
        disabled={isLoading}
      >
        {isLoading ? 'Joining...' : 'Join Waitlist'}
      </button>
    </form>
  );
}