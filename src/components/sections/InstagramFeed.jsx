import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function InstagramFeed() {
  const videos = [
    { id: 1, src: "/videos/1.mp4" },
    { id: 2, src: "/videos/2.mp4" },
    { id: 3, src: "/videos/3.mp4" },
    { id: 4, src: "/videos/4.mp4" },
    { id: 5, src: "/videos/5.mp4" }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header with Colorful "Gluggle" */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4">
            Just{' '}
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>l</span>
            <span style={{ color: '#FBBC04' }}>u</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>g</span>
            <span style={{ color: '#EA4335' }}>l</span>
            <span style={{ color: '#4285F4' }}>e</span>
            {' '}it
          </h2>
          <p className="text-lg text-pv-text max-w-2xl mx-auto">
            From kitchens to dining rooms, see how our customers are enjoying their Gluggle Jugs
          </p>
        </div>

        {/* Video Carousel - Display 4 at a time */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={16}
            navigation={{
              prevEl: '.swiper-button-prev-gluggle',
              nextEl: '.swiper-button-next-gluggle',
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 14 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 16 }
            }}
            className="!pb-2"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 aspect-square bg-gray-900">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev-gluggle absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pv-teal hover:text-white transition-all duration-300 group">
            <ChevronLeft size={24} className="text-pv-text group-hover:text-white" />
          </button>
          <button className="swiper-button-next-gluggle absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pv-teal hover:text-white transition-all duration-300 group">
            <ChevronRight size={24} className="text-pv-text group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
