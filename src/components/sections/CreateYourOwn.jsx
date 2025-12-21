import Button from '../ui/Button';

export default function CreateYourOwn() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl bg-pv-cream">
          {/* Left: Content */}
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="heading-lg text-pv-text mb-6">
              The Perfect Gift
            </h2>
            <p className="text-pv-text text-lg mb-8 max-w-md">
              The Gluggle Jug is the perfect gift: It will make the receiver and their table guests smile and happy! And drinking water is healthy!
            </p>
            <div>
              <Button variant="secondary">SHOP NOW</Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1606428716316-a732ac90b901?w=800&h=800&fit=crop"
              alt="Gluggle Jug Gift"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
