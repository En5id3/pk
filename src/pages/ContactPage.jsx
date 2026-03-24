import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        subtitle="Have questions or ready to book? We'd love to hear from you."
      />
      <Contact />
      <FAQ />
    </>
  );
}
