import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { HiUser, HiGlobe, HiCollection, HiClock } from 'react-icons/hi';
import './Pricing.css';

const sessions = [
  {
    icon: <HiUser />,
    title: '1-on-1 Session',
    price: '₹10,000',
    period: 'per session',
    features: [
      '60-minute personalized session',
      'In-depth consultation included',
      'Custom hypnosis script',
      'Post-session recording provided',
      'WhatsApp support between sessions',
    ],
    popular: false,
  },
  {
    icon: <HiGlobe />,
    title: 'Online Session',
    price: '₹4,000',
    period: 'per session',
    features: [
      '60-minute video session',
      'Works anywhere with stable internet',
      'Same techniques as in-person',
      'Comfortable from your home',
      'Flexible scheduling',
    ],
    popular: true,
  },
  {
    icon: <HiCollection />,
    title: 'Online Package (5 Sessions)',
    price: '₹18,000',
    period: 'save ₹2,000',
    features: [
      '5 online sessions',
      'Comprehensive transformation plan',
      'Priority scheduling',
      'Extended WhatsApp support',
      'Progress tracking & review',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Session Details</span>
          <h2 className="section-title">Invest in Yourself</h2>
          <p className="section-subtitle">
            Choose the option that works best for you. Every session is a step toward lasting change.
          </p>
        </AnimateOnScroll>

        <div className="pricing__grid">
          {sessions.map((session, i) => (
            <AnimateOnScroll
              className={`pricing__card ${session.popular ? 'pricing__card--popular' : ''}`}
              key={i}
              delay={i * 150}
            >
              {session.popular && <div className="pricing__badge">Most Popular</div>}
              <div className="pricing__card-icon">{session.icon}</div>
              <h3 className="pricing__card-title">{session.title}</h3>
              <div className="pricing__card-price">
                <span className="pricing__amount">{session.price}</span>
                <span className="pricing__period">{session.period}</span>
              </div>
              <ul className="pricing__features">
                {session.features.map((feature, j) => (
                  <li key={j} className="pricing__feature">✓ {feature}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`btn ${session.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                Book Now
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="pricing__note">
          <HiClock className="pricing__note-icon" />
          <p>
            <strong>What to expect:</strong> Each session typically lasts 60 minutes.
            Most clients notice meaningful changes within 3–5 sessions. The first session
            includes a detailed consultation at no extra charge.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
