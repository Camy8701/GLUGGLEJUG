import CategoryCard from '../ui/CategoryCard';
import Carousel from '../ui/Carousel';
import { categories } from '../../data/categories';

export default function CategorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-12">Our Products</h2>

        {/* Products Carousel */}
        <Carousel slidesPerView={4} spaceBetween={24}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
