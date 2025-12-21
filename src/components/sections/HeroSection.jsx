import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden w-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content - Only Buttons */}
      <div className="relative h-full flex items-end justify-center pb-16">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="text-lg">
            SHOP GLOSSY COLLECTION
          </Button>
          <Button variant="secondary" className="text-lg">
            SHOP LUSTRE COLLECTION
          </Button>
        </div>
      </div>
    </section>
  );
}
