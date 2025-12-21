import ReviewCard from '../ui/ReviewCard';
import Carousel from '../ui/Carousel';
import { reviews, reviewStats } from '../../data/reviews';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-pv-pink-100 to-white">
      <div className="container-custom">
        {/* Rating Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={48}
                className="fill-pv-pink text-pv-pink"
              />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-pv-text mb-2">
            {reviewStats.averageRating} based on {reviewStats.totalReviews.toLocaleString()} reviews
          </h2>
        </div>

        {/* Reviews Carousel */}
        <Carousel slidesPerView={3} spaceBetween={24}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
