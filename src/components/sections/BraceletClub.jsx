import Button from '../ui/Button';

export default function BraceletClub() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl max-h-[400px] lg:max-h-[500px]">
          {/* Left: Video */}
          <div className="relative h-[400px] lg:h-[500px] bg-gray-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/handcrafted-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right: Content */}
          <div className="bg-pv-teal p-6 lg:p-10 xl:p-12 flex flex-col justify-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4 leading-tight">
              Handcrafted.<br />
              In Stoke-on-Trent
            </h2>
            <p className="text-sm lg:text-base mb-6 leading-relaxed">
              Every Gluggle Jug is handmade in our factory in Stoke-on-Trent, England. Experience the joy of authentic British craftsmanship.
            </p>
            <div>
              <Button variant="secondary">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
