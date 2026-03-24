import AnimateOnScroll from './AnimateOnScroll';
import { HiStar } from 'react-icons/hi';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya M.',
    problem: 'Severe anxiety & panic attacks',
    result: 'After just 4 sessions, my anxiety reduced dramatically. I can now handle stressful situations without feeling overwhelmed. It genuinely changed my daily life.',
    rating: 5,
  },
  {
    name: 'Rahul K.',
    problem: 'Chronic procrastination',
    result: 'I used to delay everything important. Hypnotherapy helped me understand why and break the pattern. My productivity has improved beyond what I thought possible.',
    rating: 5,
  },
  {
    name: 'Sneha D.',
    problem: 'Stage fright & low confidence',
    result: 'I was skeptical at first, but the results spoke for themselves. I delivered my first presentation at work without freezing up. I couldn\'t believe it was me.',
    rating: 5,
  },
  {
    name: 'Anonymous',
    problem: 'Insomnia for 3+ years',
    result: 'I\'d tried everything — meditation apps, medication, routines. Hypnotherapy was the first thing that actually helped me sleep naturally. Now I fall asleep within minutes.',
    rating: 5,
  },
  {
    name: 'Vikram S.',
    problem: 'Smoking habit (8 years)',
    result: 'Eight years of smoking and I quit after 5 sessions. The cravings just... faded. Ashish made the whole process comfortable and non-judgmental.',
    rating: 5,
  },
  {
    name: 'Anita R.',
    problem: 'Overthinking & self-doubt',
    result: 'My mind used to be my worst enemy. Now I have tools to manage my thoughts and genuinely believe in myself. PebbleKart was a turning point for me.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Success Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real experiences from real people. Every journey is unique, and so is every result.
          </p>
        </AnimateOnScroll>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <AnimateOnScroll className="testimonials__card" key={i} delay={i * 100}>
              <div className="testimonials__card-stars">
                {[...Array(t.rating)].map((_, j) => (
                  <HiStar key={j} className="testimonials__star" />
                ))}
              </div>
              <p className="testimonials__card-text">"{t.result}"</p>
              <div className="testimonials__card-footer">
                <div className="testimonials__card-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="testimonials__card-name">{t.name}</h4>
                  <p className="testimonials__card-problem">{t.problem}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
