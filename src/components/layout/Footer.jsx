import { Instagram, Facebook } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    'Glossy',
    'Lustre',
    'Salt & Pepper',
    'Candles',
    'Tea Towels',
    'Cards'
  ];

  const brandLinks = [
    'About',
    'Our Story',
    'Sound',
    'FAQ'
  ];

  const helpLinks = [
    'Contact',
    'Shipping Policy',
    'Refund Policy',
    'Terms of Service',
    'Privacy Policy'
  ];

  const moreInfoLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Disclaimer',
    'Do Not Sell My Information'
  ];

  return (
    <footer className="bg-pv-teal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Shop Column */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              {shopLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:underline transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Column */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4">Brand</h3>
            <ul className="space-y-2">
              {brandLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:underline transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:underline transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Info Column */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4">More Info</h3>
            <ul className="space-y-2">
              {moreInfoLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:underline transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg uppercase mb-4">
              Get 10% OFF your first order
            </h3>
            <p className="text-sm mb-4">
              when you sign up for email or SMS!
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-pv-text focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-pv-lime text-pv-text px-4 rounded-r-lg hover:opacity-90 transition-opacity"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-xs leading-relaxed">
                  By submitting your email address you consent to marketing and online advertising by The Gluggle Jug Factory. Please{' '}
                  <a href="#" className="underline">click here</a> for a link to our privacy notice.
                </label>
              </div>
            </form>

            {/* SMS Signup */}
            <div className="mt-6 p-4 bg-pv-teal-light rounded-lg">
              <h4 className="font-bold uppercase mb-2">SIGN UP FOR EXCLUSIVE OFFERS</h4>
              <p className="text-xs">
                Subscribe to receive news about new products, special offers, and updates from The Gluggle Jug Factory.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-pv-teal-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* B Corp Badge */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <span className="text-pv-teal font-bold text-xs text-center">
                  Certified<br />B Corp
                </span>
              </div>
            </div>

            {/* Logo & Contact */}
            <div className="text-center">
              <div className="text-3xl font-bold uppercase tracking-wider mb-4">
                GLUGGLE JUG FACTORY
              </div>
              <div className="text-sm space-y-1">
                <p>Atlas Works, Paragon Road</p>
                <p>Stoke-on-Trent ST3 1NR, England</p>
                <p className="mt-2">Phone: +44 7720 161627</p>
                <p>Email: hello@theglugglejugfactory.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-pv-pink rounded-full flex items-center justify-center hover:bg-pv-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pv-pink rounded-full flex items-center justify-center hover:bg-pv-pink-500 transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pv-pink rounded-full flex items-center justify-center hover:bg-pv-pink-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pv-pink rounded-full flex items-center justify-center hover:bg-pv-pink-500 transition-colors"
                aria-label="Pinterest"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex gap-6">
              <a href="#" className="hover:underline">TERMS OF USE</a>
              <a href="#" className="hover:underline">PRIVACY POLICY</a>
            </div>
            <div>
              SHIPPING TO: <span className="font-bold">UNITED STATES ($)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
