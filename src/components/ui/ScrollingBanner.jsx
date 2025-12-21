export default function ScrollingBanner({ text, backgroundColor = 'bg-blue-400', textColor = 'text-white' }) {
  return (
    <div className={`${backgroundColor} py-3 overflow-hidden relative`}>
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Repeat the text multiple times for seamless loop */}
        {[...Array(20)].map((_, index) => (
          <span
            key={index}
            className={`${textColor} text-sm md:text-base font-medium uppercase tracking-wide px-8`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
