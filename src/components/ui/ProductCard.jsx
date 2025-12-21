import { Plus } from 'lucide-react';
import Badge from './Badge';

export default function ProductCard({ product }) {
  return (
    <div className="group relative">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="new">New</Badge>
          )}
          {product.isPremium && (
            <Badge variant="default">Premium</Badge>
          )}
          {!product.inStock && (
            <Badge variant="sale">Out of Stock</Badge>
          )}
        </div>

        {/* Quick Add Button */}
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-pv-pink text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:scale-110">
          <Plus size={20} />
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-sm font-medium text-pv-text mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-pv-text">
            £{product.price}
          </span>
        </div>

        {/* Color Indicator */}
        {product.color && (
          <div className="flex gap-1.5">
            <div
              className="w-6 h-6 rounded-full border-2 border-gray-200"
              style={{ backgroundColor: product.color }}
              title={product.name}
            />
          </div>
        )}
      </div>
    </div>
  );
}
