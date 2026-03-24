import AnimateOnScroll from './AnimateOnScroll';
import { HiSparkles, HiHeart, HiLightBulb } from 'react-icons/hi';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          <AnimateOnScroll className="about__visual">
            <div className="about__visual-card">
              <div className="about__visual-ripple"></div>
              <div className="about__visual-pebble">🪨</div>
              <div className="about__visual-ripple about__visual-ripple--2"></div>
              <div className="about__visual-ripple about__visual-ripple--3"></div>
            </div>
            <div className="about__visual-float about__visual-float--1">
              <HiSparkles /> Small Changes
            </div>
            <div className="about__visual-float about__visual-float--2">
              <HiHeart /> Big Impact
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="about__content" delay={200}>
            <span className="section-label">About PebbleKart</span>
            <h2 className="about__title">
              Small Pebbles Create<br />
              <span className="about__title-accent">Powerful Ripples</span>
            </h2>
            <p className="about__text">
              Just as a small pebble creates far-reaching ripples across water,
              <strong> PebbleKart</strong> believes that small, focused changes in your
              subconscious mind can transform your entire life. Our name embodies
              this philosophy — carrying those transformative pebbles to you.
            </p>
            <p className="about__text">
              Founded by <strong>Ashish Verma</strong>, PebbleKart is dedicated to helping
              people reprogram limiting beliefs and unlock their true potential through
              evidence-based hypnotherapy techniques. With extensive training, research,
              and hands-on practice, Ashish brings a scientific yet compassionate
              approach to every session.
            </p>

            <div className="about__values">
              <div className="about__value">
                <div className="about__value-icon"><HiSparkles /></div>
                <div>
                  <h4>Evidence-Based</h4>
                  <p>Grounded in research and clinical practice</p>
                </div>
              </div>
              <div className="about__value">
                <div className="about__value-icon"><HiHeart /></div>
                <div>
                  <h4>Compassionate Care</h4>
                  <p>Every session is personalized to your needs</p>
                </div>
              </div>
              <div className="about__value">
                <div className="about__value-icon"><HiLightBulb /></div>
                <div>
                  <h4>Lasting Change</h4>
                  <p>Rewire patterns for permanent transformation</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
