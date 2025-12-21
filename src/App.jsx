import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import CategorySection from './components/sections/CategorySection';
import BestSellers from './components/sections/BestSellers';
import FriendshipBracelet from './components/sections/FriendshipBracelet';
import AppearedIn from './components/sections/AppearedIn';
import WhyShopWithUs from './components/sections/WhyShopWithUs';
import HandpickedSection from './components/sections/HandpickedSection';
import InstagramFeed from './components/sections/InstagramFeed';
import BraceletClub from './components/sections/BraceletClub';
import ReviewsSection from './components/sections/ReviewsSection';
import FeaturedIn from './components/sections/FeaturedIn';
import GetInspired from './components/sections/GetInspired';
import ScrollingBanner from './components/ui/ScrollingBanner';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="sticky top-0 z-50 bg-white w-full">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="w-full">
        <HeroSection />
        <CategorySection />
        <ScrollingBanner
          text="Spend £50 more for free shipping"
          backgroundColor="bg-blue-500"
          textColor="text-white"
        />
        <BestSellers />
        <FriendshipBracelet />
        <HandpickedSection />
        <ScrollingBanner
          text="Iconic • Original • Exquisite • Unique • Glorious • Vibrant"
          backgroundColor="bg-amber-400"
          textColor="text-pv-text"
        />
        <AppearedIn />
        <WhyShopWithUs />
        <InstagramFeed />
        <BraceletClub />
        <ReviewsSection />
        <FeaturedIn />
        <GetInspired />
      </main>
      <Footer />
    </div>
  );
}

export default App;
