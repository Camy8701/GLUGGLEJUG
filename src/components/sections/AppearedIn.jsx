export default function AppearedIn() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <h2 className="heading-md text-center mb-12">The Gluggle Jug Appeared In</h2>

        {/* Grid Layout - Large image left, 2 stacked on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Image - Left */}
          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[600px] lg:h-[700px]">
            <img
              src="/images/appeared-large.webp"
              alt="Art & Decoration Magazine"
              className="w-full h-full object-contain bg-gray-50"
            />
          </div>

          {/* Right Column - 2 stacked images */}
          <div className="flex flex-col gap-6">
            {/* Top Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[290px] lg:h-[340px]">
              <img
                src="/images/appeared-top.webp"
                alt="Magazine Feature"
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>

            {/* Bottom Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[290px] lg:h-[340px]">
              <img
                src="/images/appeared-bottom.webp"
                alt="Magazine Feature"
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
