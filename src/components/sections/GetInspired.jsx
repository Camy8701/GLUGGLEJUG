export default function GetInspired() {
  const inspirationImages = [
    "/images/gift-1.png",
    "/images/gift-2.png",
    "/images/gift-3.png"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <h2 className="heading-md">Get Inspired</h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inspirationImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image}
                alt={`Inspiration ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
