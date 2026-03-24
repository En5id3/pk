import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const footerLinks = {
  'Quick Links': [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Pricing', to: '/pricing' },
  ],
  'Services': [
    { label: 'Anxiety & Stress', to: '/services' },
    { label: 'Confidence Building', to: '/services' },
    { label: 'Sleep Issues', to: '/services' },
    { label: 'Habit Breaking', to: '/services' },
  ],
  'Support': [
    { label: 'FAQ', to: '/pricing' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Book a Session', to: '/contact' },
    { label: 'Blog', to: '/blog' },
  ],
};

const socialLinks = [
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">🪨</span>
              <span className="footer__logo-text">PebbleKart</span>
            </Link>
            <p className="footer__tagline">
              Small changes, powerful ripples. Guided hypnotherapy to transform your mind and life.
            </p>
            <div className="footer__socials">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="footer__social" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div className="footer__column" key={category}>
              <h4 className="footer__column-title">{category}</h4>
              <ul className="footer__links">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} PebbleKart by Ashish Verma. All rights reserved.
          </p>
          <p className="footer__made">
            Made with 💜 for your well-being
          </p>
        </div>
      </div>
    </footer>
  );
}
