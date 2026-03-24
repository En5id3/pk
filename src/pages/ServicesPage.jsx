import PageHeader from '../components/PageHeader';
import WhatIsHypnotherapy from '../components/WhatIsHypnotherapy';
import HowItWorks from '../components/HowItWorks';
import Problems from '../components/Problems';
import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="How We Help"
        subtitle="Evidence-based hypnotherapy techniques tailored to help you overcome challenges and unlock your potential."
      />
      <WhatIsHypnotherapy />
      <HowItWorks />
      <Problems />
      <CTA />
    </>
  );
}
