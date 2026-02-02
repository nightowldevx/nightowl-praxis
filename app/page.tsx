import Header from './components/layout/Header';
import HeroSection from './components/section/HeroSection';
import AboutSection from './components/section/AboutSection';
import MenuSection from './components/section/MenuSection';
import FeaturedDishes from './components/section/FeaturedDishes';
import ReservationCTA from './components/section/ReservationCTA';
import Footer from './components/layout/Footer';
import RevealOnScroll from './components/ui/RevealOnScroll';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <MenuSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <FeaturedDishes />
        </RevealOnScroll>

        <RevealOnScroll>
          <ReservationCTA />
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  );
}
