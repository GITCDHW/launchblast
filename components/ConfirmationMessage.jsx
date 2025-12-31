import { CheckCircle } from 'lucide-react';

export default function ConfirmationMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg space-y-4 w-full">
      <CheckCircle className="h-16 w-16 text-[#97B69F]" />
      <h2 className="text-2xl md:text-3xl font-serif text-[#4A4E4D]">Thank You!</h2>
      <p className="text-lg md:text-xl font-sans text-[#2C2C2C] leading-relaxed">
        {message}
      </p>
      <p className="text-base font-sans text-[#A1A19D]">
        We'll notify you when we launch.
      </p>
    </div>
  );
}