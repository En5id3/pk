import { Link } from 'react-router-dom';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__wave hero__wave--1"></div>
        <div className="hero__wave hero__wave--2"></div>
        <div className="hero__wave hero__wave--3"></div>
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__badge">✨ Science-backed Hypnotherapy</div>
        <h1 className="hero__title">
          Transform Your Mind,<br />
          <span className="hero__title-accent">Transform Your Life</span>
        </h1>
        <p className="hero__subtitle">
          Guided Hypnotherapy to help you overcome anxiety, build confidence,
          and unlock your subconscious potential.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn-primary">
            Book a Session <HiArrowRight />
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <HiPlay /> Explore How It Works
          </Link>
        </div>
        <div className="hero__trust">
          <div className="hero__trust-item">
            <span className="hero__trust-number">500+</span>
            <span className="hero__trust-label">Sessions Completed</span>
          </div>
          <div className="hero__trust-divider"></div>
          <div className="hero__trust-item">
            <span className="hero__trust-number">98%</span>
            <span className="hero__trust-label">Client Satisfaction</span>
          </div>
          <div className="hero__trust-divider"></div>
          <div className="hero__trust-item">
            <span className="hero__trust-number">100%</span>
            <span className="hero__trust-label">Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
}
