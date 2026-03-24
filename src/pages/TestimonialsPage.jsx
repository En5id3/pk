import PageHeader from '../components/PageHeader';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Success Stories"
        title="Client Testimonials"
        subtitle="Real experiences from real people. Every journey is unique, and so is every result."
      />
      <Testimonials />
      <CTA />
    </>
  );
}
