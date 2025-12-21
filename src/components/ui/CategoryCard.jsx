import { Plus } from 'lucide-react';

export default function CategoryCard({ category }) {
  // Assign complementary gradient backgrounds for each category based on product images
  const backgroundColors = {
    'Glossy': 'bg-gradient-to-br from-amber-400 to-orange-300 border-orange-500',
    'Lustre': 'bg-gradient-to-br from-rose-300 to-pink-200 border-rose-400',
    'Candles': 'bg-gradient-to-br from-violet-300 to-purple-200 border-purple-400',
    'Salt & Pepper': 'bg-gradient-to-br from-sky-300 to-blue-200 border-blue-400',
    'Cards': 'bg-gradient-to-br from-pink-300 to-rose-200 border-pink-400',
    'Tea Towels': 'bg-gradient-to-br from-emerald-300 to-teal-200 border-teal-400'
  };

  const bgClass = backgroundColors[category.name] || 'bg-gradient-to-br from-gray-400 to-gray-300 border-gray-500';

  return (
    <div className="group relative">
      {/* Card with gradient background and border accent */}
      <div className={`relative rounded-[2rem] overflow-hidden ${bgClass} border-b-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] h-[500px] flex items-center justify-center p-8`}>

        {/* Product Image - Larger and Centered */}
        <img
          src={category.image}
          alt={category.name}
          className="max-h-[455px] max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Title Overlay at Bottom */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h3 className="text-3xl font-bold text-pv-text">
            {category.name}
          </h3>
        </div>

        {/* Plus Button - Bottom Left */}
        <button className="absolute bottom-6 left-6 w-12 h-12 bg-pv-text text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:scale-110">
          <Plus size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
