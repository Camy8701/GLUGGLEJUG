import { X } from 'lucide-react';
import { useState } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-pv-coral text-white py-2 px-4 sm:px-6 lg:px-8 text-center relative w-full">
      <p className="text-sm font-medium">
        Order by midnight 21st December for pre-Christmas delivery! Orders after this will be fulfilled on 5th January whilst our factory rests.
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={18} />
      </button>
    </div>
  );
}
