import { Link } from 'react-router-dom';
import { services } from '../data/services';
import ContactForm from '../components/ContactForm';
import heroImage from '../assets/hero-cityline.jpg';

const Home = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('orderFormAnchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={heroImage} alt="Modern cityline" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Aiutiamo a trovare case che diventano la tua casa
            </h1>
            <p className="hero-subtitle fade-in">
              Servizio professionale di consulenza immobiliare per famiglie e professionisti. 
              Trova la proprietà perfetta con il supporto di esperti.
            </p>
            <div className="hero-actions fade-in">
              <a href="#orderFormAnchor" onClick={scrollToForm} className="btn btn-primary">
                Richiedi Consulenza
              </a>
              <Link to="#/servizi" className="btn btn-ghost">
                Scopri i Servizi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-number">2500+</div>
              <div className="stat-label">Clienti Soddisfatti</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">95%</div>
              <div className="stat-label">Tasso di Successo</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">15+</div>
              <div className="stat-label">Anni di Esperienza</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Supporto Clienti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">I Nostri Servizi</h2>
          <p className="section-subtitle">
            Offriamo soluzioni complete per ogni tua esigenza immobiliare
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.slug} className="service-card card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <div className="service-price">{service.price}</div>
                  <Link to={`#/servizi/${service.slug}`} className="btn btn-outline">
                    Scopri di più
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">Cosa Dicono i Nostri Clienti</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Jolimonda ha reso il processo di acquisto della nostra prima casa incredibilmente semplice. 
                Il team è stato professionale, paziente e ci ha guidato in ogni fase."
              </p>
              <div className="testimonial-author">
                <strong>Maria Rossi</strong>
                <span>Acquirente - Milano</span>
              </div>
            </div>

            <div className="testimonial-card card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Servizio eccezionale! Hanno trovato l'appartamento perfetto per le nostre esigenze 
                e hanno gestito tutta la documentazione in modo impeccabile."
              </p>
              <div className="testimonial-author">
                <strong>Giovanni Bianchi</strong>
                <span>Professionista - Roma</span>
              </div>
            </div>

            <div className="testimonial-card card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Consiglio vivamente Jolimonda. La loro conoscenza del mercato immobiliare e 
                l'attenzione ai dettagli hanno fatto la differenza nella nostra ricerca."
              </p>
              <div className="testimonial-author">
                <strong>Laura Ferrari</strong>
                <span>Famiglia - Torino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <style>{`
        .home-page {
          padding-top: var(--header-height);
        }

        .hero-section {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          color: white;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(13, 71, 161, 0.85) 0%, rgba(25, 118, 210, 0.75) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          padding: var(--spacing-3xl) 0;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          margin-bottom: var(--spacing-lg);
          color: white;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: var(--spacing-xl);
          color: rgba(255, 255, 255, 0.95);
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .stats-section {
          padding: var(--spacing-3xl) 0;
          background: var(--color-surface);
          margin-top: -50px;
          position: relative;
          z-index: 2;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
        }

        .stat-card {
          text-align: center;
          padding: var(--spacing-xl);
          background: linear-gradient(135deg, #E3F2FD 0%, var(--color-background) 100%);
          border-radius: var(--radius-lg);
          border: 2px solid var(--color-border-light);
        }

        .stat-number {
          font-family: var(--font-headings);
          font-size: 3rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: var(--spacing-sm);
        }

        .stat-label {
          font-size: 1rem;
          color: var(--color-secondary);
          font-weight: 500;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .service-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .service-image {
          width: 100%;
          height: 220px;
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

        .service-content p {
          flex: 1;
          margin-bottom: var(--spacing-md);
        }

        .service-price {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        .testimonials-section {
          background: linear-gradient(180deg, var(--color-background) 0%, #E3F2FD 100%);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .testimonial-stars {
          color: #FFA000;
          font-size: 1.25rem;
          letter-spacing: 2px;
        }

        .testimonial-text {
          flex: 1;
          font-size: 1rem;
          line-height: 1.7;
          font-style: italic;
          color: var(--color-secondary);
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-border-light);
        }

        .testimonial-author strong {
          color: var(--color-foreground);
          font-weight: 600;
        }

        .testimonial-author span {
          font-size: 0.875rem;
          color: var(--color-secondary);
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 500px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-md);
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .services-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
