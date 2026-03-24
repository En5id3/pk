import AnimateOnScroll from './AnimateOnScroll';
import { HiCheck } from 'react-icons/hi';
import './WhyChoose.css';

const reasons = [
  {
    title: 'Personalized Sessions',
    description: 'Every session is tailored to your specific goals, personality, and pace — no cookie-cutter approach.',
  },
  {
    title: 'Science-Backed Techniques',
    description: 'Methods grounded in neuroscience and clinical research, not mysticism or guesswork.',
  },
  {
    title: 'Confidential & Safe',
    description: 'Your privacy is paramount. Every session is completely confidential in a judgment-free space.',
  },
  {
    title: 'Beginner-Friendly',
    description: 'Never tried hypnotherapy? No worries. We guide you through every step with patience and care.',
  },
  {
    title: 'Online Sessions Available',
    description: 'Access professional hypnotherapy from the comfort of your home — anywhere in India and beyond.',
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose section" id="why-choose">
      <div className="container">
        <div className="why-choose__grid">
          <AnimateOnScroll className="why-choose__content">
            <span className="section-label">Why PebbleKart</span>
            <h2 className="why-choose__title">
              Why Choose <span className="why-choose__title-accent">PebbleKart?</span>
            </h2>
            <p className="why-choose__subtitle">
              We combine professional expertise with genuine empathy to deliver a
              hypnotherapy experience that's effective, comfortable, and transformative.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="why-choose__list" delay={200}>
            {reasons.map((reason, i) => (
              <div className="why-choose__item" key={i}>
                <div className="why-choose__item-check">
                  <HiCheck />
                </div>
                <div>
                  <h4 className="why-choose__item-title">{reason.title}</h4>
                  <p className="why-choose__item-desc">{reason.description}</p>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
