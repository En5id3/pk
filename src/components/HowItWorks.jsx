import AnimateOnScroll from './AnimateOnScroll';
import { HiChat, HiLightBulb, HiSparkles, HiRefresh, HiShieldCheck } from 'react-icons/hi';
import './HowItWorks.css';

const steps = [
  {
    icon: <HiChat />,
    number: '01',
    title: 'Consultation',
    description: 'We start with a free, no-pressure conversation to understand your goals, concerns, and whether hypnotherapy is right for you.',
  },
  {
    icon: <HiLightBulb />,
    number: '02',
    title: 'Goal Identification',
    description: 'Together, we define clear, achievable outcomes — whether it\'s reducing anxiety, building confidence, or breaking a habit.',
  },
  {
    icon: <HiSparkles />,
    number: '03',
    title: 'Guided Hypnosis Session',
    description: 'In a deeply relaxed state, guided suggestions help your subconscious mind adopt new patterns of thinking and behavior.',
  },
  {
    icon: <HiRefresh />,
    number: '04',
    title: 'Subconscious Reprogramming',
    description: 'Old limiting beliefs are gently replaced with empowering ones, creating lasting change at the deepest level.',
  },
  {
    icon: <HiShieldCheck />,
    number: '05',
    title: 'Follow-up & Reinforcement',
    description: 'Ongoing support and reinforcement techniques ensure your progress continues long after the session ends.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">The Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A simple, comfortable process designed to create meaningful change — step by step.
          </p>
        </AnimateOnScroll>

        <div className="how-it-works__timeline">
          {steps.map((step, i) => (
            <AnimateOnScroll className="how-it-works__step" key={i} delay={i * 120}>
              <div className="how-it-works__step-number">{step.number}</div>
              <div className="how-it-works__step-connector"></div>
              <div className="how-it-works__step-card">
                <div className="how-it-works__step-icon">{step.icon}</div>
                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-desc">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
