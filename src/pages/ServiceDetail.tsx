import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) {
      navigate('/servizi');
    }
  }, [service, navigate]);

  if (!service) {
    return null;
  }

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/#');
    setTimeout(() => {
      const formElement = document.getElementById('orderFormAnchor');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="page-content">
      <section className="breadcrumbs-section">
        <div className="container">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/servizi">Servizi</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
        </div>
      </section>

      <section className="service-detail-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="hero-info">
              <h1>{service.title}</h1>
              <p className="service-short">{service.short}</p>
              <div className="price-box">
                <div className="price-label">A partire da</div>
                <div className="price-value">{service.price}</div>
              </div>
              <a href="#orderFormAnchor" onClick={scrollToForm} className="btn btn-primary btn-large">
                Richiedi Questo Servizio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-content-section section">
        <div className="container">
          <div className="content-layout">
            <div className="main-content">
              <div 
                className="service-description" 
                dangerouslySetInnerHTML={{ __html: service.contentHtml }}
              />
              
              <div className="cta-box">
                <h3>Pronto per iniziare?</h3>
                <p>Contattaci oggi stesso per una consulenza gratuita e scopri come possiamo aiutarti.</p>
                <a href="#orderFormAnchor" onClick={scrollToForm} className="btn btn-primary">
                  Richiedi Consulenza Gratuita
                </a>
              </div>

              <div className="back-link">
                <Link to="/servizi" className="btn btn-outline">
                  ← Torna a tutti i servizi
                </Link>
              </div>
            </div>

            <aside className="sidebar">
              <div className="card">
                <h3>Caratteristiche</h3>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3>Altri Servizi</h3>
                <ul className="related-services">
                  {services
                    .filter(s => s.slug !== service.slug)
                    .slice(0, 3)
                    .map(s => (
                      <li key={s.slug}>
                        <Link to={`/servizi/${s.slug}`}>
                          <strong>{s.title}</strong>
                          <span className="related-price">{s.price}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .page-content {
          padding-top: var(--header-height);
        }

        .breadcrumbs-section {
          background: var(--color-border-light);
          padding: var(--spacing-md) 0;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 0.9375rem;
        }

        .breadcrumbs a {
          color: var(--color-primary);
        }

        .breadcrumbs a:hover {
          text-decoration: underline;
        }

        .breadcrumbs span:last-child {
          color: var(--color-secondary);
        }

        .service-detail-hero {
          padding: var(--spacing-3xl) 0;
          background: linear-gradient(180deg, var(--color-background) 0%, #E3F2FD 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .hero-image {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .hero-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-info h1 {
          margin-bottom: var(--spacing-md);
        }

        .service-short {
          font-size: 1.125rem;
          color: var(--color-secondary);
          margin-bottom: var(--spacing-xl);
        }

        .price-box {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          color: white;
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          margin-bottom: var(--spacing-lg);
        }

        .price-label {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-bottom: 4px;
        }

        .price-value {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
        }

        .btn-large {
          padding: 1rem 2.5rem;
          font-size: 1.0625rem;
          width: 100%;
        }

        .content-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-xl);
          align-items: start;
        }

        .main-content {
          max-width: 100%;
        }

        .service-description {
          font-size: 1.0625rem;
          line-height: 1.8;
        }

        .service-description h3 {
          margin-top: var(--spacing-xl);
          color: var(--color-primary);
        }

        .service-description p {
          margin-bottom: var(--spacing-md);
        }

        .cta-box {
          background: linear-gradient(135deg, #E3F2FD 0%, var(--color-border-light) 100%);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          text-align: center;
          margin: var(--spacing-2xl) 0;
        }

        .cta-box h3 {
          margin-bottom: var(--spacing-md);
        }

        .cta-box p {
          margin-bottom: var(--spacing-lg);
        }

        .back-link {
          margin-top: var(--spacing-xl);
        }

        .sidebar {
          position: sticky;
          top: calc(var(--header-height) + var(--spacing-lg));
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          padding: var(--spacing-sm) 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--color-secondary);
          border-bottom: 1px solid var(--color-border-light);
        }

        .features-list li:last-child {
          border-bottom: none;
        }

        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-success);
          font-weight: bold;
        }

        .related-services {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .related-services li {
          border-bottom: 1px solid var(--color-border-light);
        }

        .related-services li:last-child {
          border-bottom: none;
        }

        .related-services a {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: var(--spacing-md) 0;
          color: var(--color-foreground);
          transition: color var(--transition-fast);
        }

        .related-services a:hover {
          color: var(--color-primary);
        }

        .related-services strong {
          font-size: 0.9375rem;
        }

        .related-price {
          font-size: 0.875rem;
          color: var(--color-primary);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .content-layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
