import PageHeader from '../components/PageHeader';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Our Story"
        subtitle="Discover the philosophy behind PebbleKart and how small, focused changes can transform your entire life."
      />
      <About />
      <Benefits />
      <WhyChoose />
      <CTA />
    </>
  );
}
