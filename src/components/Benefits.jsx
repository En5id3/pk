import AnimateOnScroll from './AnimateOnScroll';
import { HiSparkles, HiLightBulb, HiHeart, HiSun } from 'react-icons/hi';
import './Benefits.css';

const benefits = [
  {
    icon: <HiSparkles />,
    title: 'Long-lasting Behavioral Change',
    description: 'Unlike temporary fixes, hypnotherapy creates permanent shifts in your thought patterns and behaviors by working directly with your subconscious mind.',
  },
  {
    icon: <HiLightBulb />,
    title: 'Works at the Subconscious Level',
    description: 'Access and reprogram the deep-seated beliefs and patterns that drive 95% of your daily behaviors — where real change happens.',
  },
  {
    icon: <HiHeart />,
    title: 'Drug-free & Natural',
    description: 'A completely natural approach with no side effects. Your mind does the healing — we simply guide the process with proven techniques.',
  },
  {
    icon: <HiSun />,
    title: 'Clarity & Emotional Balance',
    description: 'Experience improved mental clarity, better emotional regulation, and a deeper sense of inner peace that enhances every area of your life.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Why It Works</span>
          <h2 className="section-title">Benefits of Hypnotherapy</h2>
          <p className="section-subtitle">
            Real, measurable improvements that go beyond surface-level solutions.
          </p>
        </AnimateOnScroll>

        <div className="benefits__grid">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll className="benefits__card" key={i} delay={i * 120}>
              <div className="benefits__card-icon">{benefit.icon}</div>
              <h3 className="benefits__card-title">{benefit.title}</h3>
              <p className="benefits__card-desc">{benefit.description}</p>
              <div className="benefits__card-glow"></div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
