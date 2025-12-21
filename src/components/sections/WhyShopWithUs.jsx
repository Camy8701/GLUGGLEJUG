import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function WhyShopWithUs() {
  const cards = [
    {
      id: 1,
      title: "Handcrafted Quality",
      description: "Every Gluggle Jug is carefully handmade by skilled artisans in Stoke-on-Trent, England. We use traditional techniques to create beautiful, functional pieces that last a lifetime.",
      image: "/images/gift-1.png",
      bgColor: "bg-pv-coral"
    },
    {
      id: 2,
      title: "Bring Joy to Your Table",
      description: "The delightful gluggle sound brings smiles to faces young and old. More than just a jug, it's a conversation piece that makes every meal special.",
      image: "/images/gift-2.png",
      bgColor: "bg-pv-teal-light"
    },
    {
      id: 3,
      title: "A British Icon",
      description: "What began as a quirky fish-shaped jug in the 1920s has become a beloved British design classic. Each jug is handcrafted with care in Stoke-on-Trent, continuing a proud heritage of quality ceramics.",
      image: "/images/gift-3.png",
      bgColor: "bg-pv-pink"
    },
    {
      id: 4,
      title: "Timeless Design",
      description: "The iconic fish shape has delighted families for generations. A perfect blend of whimsy and functionality that never goes out of style.",
      image: "/images/gift-4.png",
      bgColor: "bg-orange-300"
    },
    {
      id: 5,
      title: "Made in England",
      description: "Proudly crafted in the heart of the Potteries, supporting local artisans and traditional British craftsmanship.",
      image: "/images/gift-5.jpg",
      bgColor: "bg-purple-300"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-pv-pink-100 to-white">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-12">The Perfect Gift</h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.gift-button-prev',
              nextEl: '.gift-button-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
            className="!pb-4"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="h-auto">
                <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col" style={{ height: '600px' }}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content - extends to bottom */}
                  <div className={`${card.bgColor} p-8 text-center flex-1 flex flex-col justify-center min-h-[336px]`}>
                    <h3 className="text-2xl font-bold uppercase mb-4 text-pv-text">
                      {card.title}
                    </h3>
                    <p className="text-base leading-relaxed text-pv-text">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="gift-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -ml-6">
            <ChevronLeft size={24} className="text-pv-text" />
          </button>
          <button className="gift-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -mr-6">
            <ChevronRight size={24} className="text-pv-text" />
          </button>
        </div>
      </div>
    </section>
  );
}
