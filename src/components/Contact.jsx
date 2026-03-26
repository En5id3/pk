import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Start Your Journey</h2>
          <p className="section-subtitle">
            Have questions or ready to book? Reach out — we'd love to hear from you.
          </p>
        </AnimateOnScroll>

        <div className="contact__grid">
          <AnimateOnScroll className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-item">
                <div className="contact__info-icon"><HiMail /></div>
                <div>
                  <h4>Email</h4>
                  <p>ardur.das@gmail.com</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon"><HiLocationMarker /></div>
                <div>
                  <h4>Location</h4>
                  <p>Delhi NCR (Online PAN India)</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="contact__form-wrapper" delay={200}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about what you'd like help with..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
