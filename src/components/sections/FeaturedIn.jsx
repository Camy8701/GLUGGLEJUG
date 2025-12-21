export default function FeaturedIn() {
  const publications = [
    "BBC",
    "THE GUARDIAN",
    "HOUSE & GARDEN",
    "COUNTRY LIVING",
    "ELLE DECORATION",
    "WALLPAPER*"
  ];

  return (
    <section className="section-padding bg-pv-teal-50">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-12">Featured In</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-bold tracking-wider text-gray-400 hover:text-pv-text transition-colors cursor-pointer"
              style={{ fontFamily: 'serif' }}
            >
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
