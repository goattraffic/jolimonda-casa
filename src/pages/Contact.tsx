import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <h1 className="fade-in">Contattaci</h1>
          <p className="hero-lead fade-in">
            Siamo qui per rispondere a tutte le tue domande
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="info-card card">
              <div className="info-icon">⏰</div>
              <h3>Orari di Apertura</h3>
              <p>
                <strong>Lunedì - Venerdì</strong><br />
                9:00 - 18:00
              </p>
              <p>
                <strong>Sabato</strong><br />
                10:00 - 14:00
              </p>
              <p className="mb-0">
                <strong>Domenica</strong><br />
                Chiuso
              </p>
            </div>

            <div className="info-card card">
              <div className="info-icon">📍</div>
              <h3>Dove Siamo</h3>
              <p>
                Operiamo in tutta Italia con focus particolare sulle 
                principali città: Milano, Roma, Torino, Firenze, Bologna e Napoli.
              </p>
              <p className="mb-0">
                Possiamo organizzare incontri nelle tue vicinanze o 
                consultazioni online per massima comodità.
              </p>
            </div>

            <div className="info-card card">
              <div className="info-icon">💼</div>
              <h3>Servizio Clienti</h3>
              <p>
                Il nostro team è dedicato a fornirti il miglior servizio possibile. 
                Compila il modulo sottostante e ti risponderemo entro 24 ore.
              </p>
              <p className="mb-0">
                Per questioni urgenti, la nostra consulenza iniziale è sempre gratuita.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

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

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-2xl);
        }

        .info-card {
          text-align: center;
        }

        .info-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .info-card h3 {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-md);
        }

        .info-card p {
          font-size: 0.9375rem;
          line-height: 1.7;
        }

        .info-card strong {
          color: var(--color-foreground);
          display: block;
          margin-top: var(--spacing-sm);
        }

        @media (max-width: 768px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
