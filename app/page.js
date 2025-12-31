'use client';

import { useState } from 'react';
import WaitlistForm from '../components/WaitlistForm';
import ConfirmationMessage from '../components/ConfirmationMessage';

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmissionSuccess = (message) => {
    setConfirmationMessage(message);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] text-[#2C2C2C] font-sans flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#FBF9F7] p-8 rounded-lg shadow-xl border border-[#A1A19D]/30 space-y-8 flex flex-col items-center text-center">
        {!isSubmitted ? (
          <>
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif text-[#4A4E4D] leading-tight">
                Project Stone
              </h1>
              <p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed">
                Experience timeless utility. Join our exclusive waitlist for early access.
              </p>
            </header>
            <WaitlistForm onSubmissionSuccess={handleSubmissionSuccess} />
          </>
        ) : (
          <ConfirmationMessage message={confirmationMessage} />
        )}
      </div>
      <footer className="mt-8 text-sm text-[#A1A19D] font-sans">
        &copy; {new Date().getFullYear()} Project Stone. All rights reserved.
      </footer>
    </main>
  );
}