import Hero from '../components/Hero';
import About from '../components/About';
import Problems from '../components/Problems';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Problems />
      <Testimonials />
      <Blog limit={3} />
      <CTA />
    </>
  );
}
