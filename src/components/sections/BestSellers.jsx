import ProductCard from '../ui/ProductCard';
import { glossyProducts } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export default function BestSellers() {
  const displayProducts = glossyProducts.slice(0, 8);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="heading-md">Glossy Collection</h2>
          <a
            href="#"
            className="flex items-center gap-2 text-pv-teal font-bold uppercase text-sm hover:gap-3 transition-all"
          >
            VIEW ALL
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
