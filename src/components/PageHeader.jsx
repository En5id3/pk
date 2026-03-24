import AnimateOnScroll from './AnimateOnScroll';
import './PageHeader.css';

export default function PageHeader({ label, title, subtitle }) {
  return (
    <section className="page-header">
      <div className="page-header__bg">
        <div className="page-header__orb page-header__orb--1"></div>
        <div className="page-header__orb page-header__orb--2"></div>
      </div>
      <div className="container">
        <AnimateOnScroll className="page-header__content">
          {label && <span className="section-label">{label}</span>}
          <h1 className="page-header__title">{title}</h1>
          {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
