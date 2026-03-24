import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">🪨</span>
          <span className="navbar__logo-text">PebbleKart</span>
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="navbar__links-cta">
            <Link to="/contact" className="btn btn-primary">
              Book a Session
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="btn btn-primary navbar__cta-desktop">
          Book a Session
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
