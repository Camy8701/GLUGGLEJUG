import { useState, useEffect } from 'react';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', hoverColor: 'hover:bg-gray-200' },
    { name: 'Glossy', href: '#', hoverColor: 'hover:bg-pv-lime' },
    { name: 'Lustre', href: '#', hoverColor: 'hover:bg-orange-300' },
    { name: 'Salt & Pepper', href: '#', hoverColor: 'hover:bg-blue-200' },
    { name: 'Candles', href: '#', hoverColor: 'hover:bg-yellow-200' },
    { name: 'Tea Towels', href: '#', hoverColor: 'hover:bg-purple-200' },
    { name: 'Cards', href: '#', hoverColor: 'hover:bg-pink-200' },
    { name: 'Sound', href: '#', hoverColor: 'hover:bg-teal-200' },
    { name: 'About', href: '#', hoverColor: 'hover:bg-green-200' },
    { name: 'FAQ', href: '#', hoverColor: 'hover:bg-indigo-200' }
  ];

  return (
    <nav className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto py-4">
        <div className="flex items-center gap-4">
          {/* Logo Box - Matches navigation bar height */}
          <div className="bg-white rounded-2xl px-6 py-4 shadow-md flex items-center justify-center flex-shrink-0">
            <a href="/" className="text-sm lg:text-base font-bold uppercase tracking-wider text-pv-text text-center leading-tight whitespace-nowrap">
              GLUGGLE JUG FACTORY
            </a>
          </div>

          {/* Main Navigation Container with rounded background */}
          <div className={`bg-pv-cream rounded-full px-6 lg:px-8 py-4 flex items-center justify-between flex-1 transition-shadow duration-300 ${
            isScrolled ? 'shadow-lg' : 'shadow-md'
          }`}>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-1 justify-center">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium uppercase tracking-wide transition-all duration-300 px-3 xl:px-4 py-2 rounded-full text-pv-text whitespace-nowrap ${link.hoverColor}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:text-pv-teal transition-colors rounded-full hover:bg-white/50" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="hidden sm:block p-2 hover:text-pv-teal transition-colors rounded-full hover:bg-white/50" aria-label="Wishlist">
                <Heart size={20} />
              </button>
              <button className="hidden sm:block p-2 hover:text-pv-teal transition-colors rounded-full hover:bg-white/50" aria-label="Account">
                <User size={20} />
              </button>
              <button className="p-2 hover:text-pv-teal transition-colors relative rounded-full hover:bg-white/50" aria-label="Shopping cart">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-pv-pink text-white text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-pv-cream rounded-3xl px-6 py-6 shadow-md">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wide transition-all duration-300 px-6 py-3 rounded-full text-pv-text ${link.hoverColor}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
