import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <h1 className="fade-in">I Nostri Servizi</h1>
          <p className="hero-lead fade-in">
            Soluzioni complete per ogni tua esigenza immobiliare
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.slug} className="service-card card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  
                  <div className="service-features">
                    <h4>Include:</h4>
                    <ul>
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                      {service.features.length > 3 && (
                        <li>E altro ancora...</li>
                      )}
                    </ul>
                  </div>

                  <div className="service-footer">
                    <div className="service-price">{service.price}</div>
                    <Link to={`/servizi/${service.slug}`} className="btn btn-primary">
                      Scopri di più
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-content {
          padding-top: var(--header-height);
        }

        .page-hero {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          color: white;
          padding: var(--spacing-3xl) 0 var(--spacing-2xl);
          text-align: center;
        }

        .page-hero h1 {
          color: white;
          margin-bottom: var(--spacing-md);
        }

        .hero-lead {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.95);
          max-width: 700px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
        }

        .service-card {
          display: flex;
          flex-direction: column;
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .service-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          margin: calc(var(--spacing-lg) * -1) calc(var(--spacing-lg) * -1) 0;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .service-card:hover .service-image img {
          transform: scale(1.05);
        }

        .service-content {
          padding-top: var(--spacing-lg);
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-content h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-sm);
        }

        .service-content > p {
          margin-bottom: var(--spacing-md);
        }

        .service-features {
          flex: 1;
          margin-bottom: var(--spacing-lg);
        }

        .service-features h4 {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-foreground);
          margin-bottom: var(--spacing-sm);
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--color-secondary);
          font-size: 0.9375rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-success);
          font-weight: bold;
        }

        .service-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-md);
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-border-light);
        }

        .service-price {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .service-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
