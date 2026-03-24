import PageHeader from '../components/PageHeader';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

export default function PricingPage() {
  return (
    <>
      <PageHeader
        label="Pricing"
        title="Session Details & Pricing"
        subtitle="Transparent pricing with flexible options. Invest in yourself today."
      />
      <Pricing />
      <FAQ />
    </>
  );
}
