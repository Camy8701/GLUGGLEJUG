import Carousel from '../ui/Carousel';
import Badge from '../ui/Badge';
import { stylePacks } from '../../data/products';
import { ArrowRight, Plus } from 'lucide-react';

export default function StylePacks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="heading-md">Gift Sets</h2>
          <a
            href="#"
            className="flex items-center gap-2 text-pv-teal font-bold uppercase text-sm hover:gap-3 transition-all"
          >
            VIEW ALL
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Carousel */}
        <Carousel slidesPerView={4} spaceBetween={24}>
          {stylePacks.map((pack) => (
            <div key={pack.id} className="group">
              {/* Pack Image */}
              <div className="relative overflow-hidden rounded-lg bg-white aspect-square mb-3">
                <img
                  src={pack.image}
                  alt={pack.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="sale">Save {pack.discount}%</Badge>
                </div>

                {/* Quick Add Button */}
                <button className="absolute bottom-3 right-3 w-10 h-10 bg-pv-pink text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:scale-110">
                  <Plus size={20} />
                </button>
              </div>

              {/* Pack Info */}
              <div>
                <h3 className="text-sm font-medium text-pv-text mb-2">{pack.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-pv-text">£{pack.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through">£{pack.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
