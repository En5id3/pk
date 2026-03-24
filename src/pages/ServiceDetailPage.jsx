import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist or is not available as a dedicated page yet.</p>
          <Link to="/services" className="btn btn-primary">Back to All Services</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="service-detail">
      {/* Hero Banner */}
      <div className="service-detail__hero">
        <div className="service-detail__hero-bg">
          <img src={service.heroImage} alt={service.title} className="service-detail__hero-img" />
          <div className="service-detail__hero-overlay"></div>
        </div>
        <div className="container">
          <AnimateOnScroll className="service-detail__hero-content">
            <Link to="/services" className="service-detail__back">
              <HiArrowLeft /> Back to Services
            </Link>
            <span className="service-detail__label">Hypnotherapy Service</span>
            <h1 className="service-detail__title">{service.title}</h1>
            <p className="service-detail__subtitle">{service.subtitle}</p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Main Content */}
      <div className="service-detail__body section">
        <div className="container">
          <div className="service-detail__grid">
            
            {/* Left Content Area */}
            <div className="service-detail__main">
              <AnimateOnScroll>
                <h2 className="service-detail__heading">Overview</h2>
                <p className="service-detail__text">{service.overview}</p>

                <h2 className="service-detail__heading">How Hypnotherapy Helps</h2>
                <ul className="service-detail__list">
                  {service.howItHelps.map((item, i) => (
                    <li key={i} className="service-detail__list-item">
                      <HiCheckCircle className="service-detail__check" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="service-detail__heading">What to Expect</h2>
                <p className="service-detail__text">{service.whatToExpect}</p>
              </AnimateOnScroll>
            </div>

            {/* Right Sidebar - Sticky CTA */}
            <div className="service-detail__sidebar">
              <AnimateOnScroll className="service-detail__sidebar-card" delay={150}>
                <h3>Ready to Overcome This?</h3>
                <p>Book a free 15-minute consultation to discuss your specific situation and see if hypnotherapy is the right fit.</p>
                <div className="service-detail__sidebar-actions">
                  <Link to="/contact" className="btn btn-primary btn-block">Book a Session</Link>
                  <a href={`https://wa.me/919999999999?text=Hi Ashish, I would like to know more about hypnotherapy for ${service.title}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">
                    WhatsApp Me
                  </a>
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}
