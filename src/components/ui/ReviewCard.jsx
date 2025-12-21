import { Star, CheckCircle } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className={index < review.rating ? 'fill-pv-pink text-pv-pink' : 'text-gray-300'}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-pv-text text-sm leading-relaxed mb-6 flex-grow">
        {review.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm text-pv-text">
          {review.author}
        </span>
        {review.verified && (
          <div className="flex items-center gap-1 text-pv-pink text-xs">
            <CheckCircle size={16} className="fill-pv-pink" />
            <span className="font-medium">Verified buyer</span>
          </div>
        )}
      </div>
    </div>
  );
}
