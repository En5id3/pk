import { Link } from 'react-router-dom';
import AnimateOnScroll from './AnimateOnScroll';
import { HiArrowRight } from 'react-icons/hi';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-section__bg">
        <div className="cta-section__orb cta-section__orb--1"></div>
        <div className="cta-section__orb cta-section__orb--2"></div>
      </div>
      <div className="container">
        <AnimateOnScroll className="cta-section__content">
          <h2 className="cta-section__title">
            Ready to Begin Your<br />
            <span className="cta-section__title-accent">Transformation?</span>
          </h2>
          <p className="cta-section__subtitle">
            Your journey to a calmer, more confident you starts with a single step.
            Book your first session today — no pressure, no judgment, just support.
          </p>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-primary cta-section__btn">
              Book Your First Session <HiArrowRight />
            </Link>
          </div>
          <p className="cta-section__note">
            ✨ First consultation is free • 100% confidential
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
