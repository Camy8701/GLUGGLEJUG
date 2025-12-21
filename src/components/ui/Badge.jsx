export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-pv-teal text-white',
    sale: 'bg-pv-lime text-pv-text',
    new: 'bg-pv-teal-light text-white',
    waterproof: 'bg-pv-teal-100 text-pv-teal',
    customizable: 'bg-pv-pink-100 text-pv-pink'
  };

  return (
    <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
