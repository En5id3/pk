import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { HiArrowRight } from 'react-icons/hi';
import './Problems.css';

const problems = [
  {
    icon: '😰',
    title: 'Anxiety & Stress',
    description: 'Calm the constant worry and physical tension that holds you back from living fully.',
    slug: 'anxiety-stress'
  },
  {
    icon: '🌀',
    title: 'Overthinking',
    description: 'Break the cycle of racing thoughts and find mental clarity and peace.',
  },
  {
    icon: '💎',
    title: 'Confidence Issues',
    description: 'Build genuine self-belief and overcome the inner critic that limits your potential.',
    slug: 'confidence-building'
  },
  {
    icon: '😨',
    title: 'Fear & Phobias',
    description: 'Release irrational fears and phobias that restrict your experiences and opportunities.',
  },
  {
    icon: '🌙',
    title: 'Sleep Problems',
    description: 'Achieve deep, restful sleep naturally without relying on medication.',
    slug: 'sleep-issues'
  },
  {
    icon: '🎯',
    title: 'Focus & Productivity',
    description: 'Sharpen your concentration and unlock peak performance in work and study.',
  },
  {
    icon: '🔄',
    title: 'Unwanted Habits',
    description: 'Break free from smoking, procrastination, nail-biting, and other patterns holding you back.',
    slug: 'habit-breaking'
  },
];

export default function Problems() {
  return (
    <section className="problems section" id="problems">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Problems We Help With</h2>
          <p className="section-subtitle">
            Every challenge starts in the mind. Here are some of the most common issues
            we help people overcome through targeted hypnotherapy.
          </p>
        </AnimateOnScroll>

        <div className="problems__grid">
          {problems.map((problem, i) => {
            const CardContent = (
              <>
                <div className="problems__card-icon">{problem.icon}</div>
                <h3 className="problems__card-title">{problem.title}</h3>
                <p className="problems__card-desc">{problem.description}</p>
                {problem.slug && (
                  <span className="problems__card-link">
                    Learn More <HiArrowRight />
                  </span>
                )}
              </>
            );

            return (
              <AnimateOnScroll key={i} delay={i * 80}>
                {problem.slug ? (
                  <Link to={`/services/${problem.slug}`} className="problems__card problems__card--link">
                    {CardContent}
                  </Link>
                ) : (
                  <div className="problems__card">
                    {CardContent}
                  </div>
                )}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
