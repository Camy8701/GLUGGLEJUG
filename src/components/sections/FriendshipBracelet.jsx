import Button from '../ui/Button';
import { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

export default function FriendshipBracelet() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    const video = document.getElementById('gluggle-sound-video');
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
          {/* Left: Video */}
          <div className="relative h-[400px] lg:h-auto bg-gray-900">
            <video
              id="gluggle-sound-video"
              className="w-full h-full object-cover"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              preload="metadata"
            >
              <source src="/gluggle-sound.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={handlePlayVideo}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 group"
                  aria-label="Play video"
                >
                  <Play size={40} className="text-pv-teal ml-1 group-hover:text-pv-teal-600" fill="currentColor" />
                </button>
              </div>
            )}

            {/* Sound Icon Indicator */}
            <div className="absolute top-4 right-4 bg-pv-teal text-white px-3 py-2 rounded-full flex items-center gap-2">
              <Volume2 size={20} />
              <span className="text-sm font-bold">Listen!</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="bg-pv-teal-light p-12 lg:p-16 flex flex-col justify-center relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-pv-text mb-6">
              Listen To The<br />
              Gluggle Sound
            </h2>
            <p className="text-pv-text text-lg mb-8 max-w-md">
              The iconic Gluggle Jug is primarily a fish-shaped water jug. The special thing about it is that due to its unique design, it emits a delightful, gurgling sound when you fill it with water or pour a glass of water.
            </p>
            <div>
              <Button variant="primary">DISCOVER MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
