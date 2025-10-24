import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Jolimonda</h3>
            <p className="footer-description">
              Aiutiamo famiglie e professionisti a trovare la casa perfetta. 
              Il tuo partner di fiducia nel mercato immobiliare italiano.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Navigazione</h4>
            <ul className="footer-links">
              <li><Link to="#/">Home</Link></li>
              <li><Link to="#/chi-siamo">Chi Siamo</Link></li>
              <li><Link to="#/servizi">Servizi</Link></li>
              <li><Link to="#/contatti">Contatti</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Legale</h4>
            <ul className="footer-links">
              <li><Link to="#/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="#/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="#/termini-condizioni">Termini e Condizioni</Link></li>
              <li><Link to="#/politica-rimborsi">Politica Rimborsi</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Orari</h4>
            <p className="footer-hours">
              Lunedì - Venerdì: 9:00 - 18:00<br />
              Sabato: 10:00 - 14:00<br />
              Domenica: Chiuso
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jolimonda. Tutti i diritti riservati.</p>
        </div>
      </div>

      <style>{`
        .main-footer {
          background: var(--color-foreground);
          color: #ECEFF1;
          padding: var(--spacing-3xl) 0 var(--spacing-lg);
          margin-top: var(--spacing-3xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary-light);
          margin-bottom: var(--spacing-md);
        }

        .footer-description {
          color: #B0BEC5;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .footer-heading {
          font-family: var(--font-headings);
          font-size: 1rem;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: var(--spacing-md);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .footer-links a {
          color: #B0BEC5;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-primary-light);
        }

        .footer-hours {
          color: #B0BEC5;
          line-height: 1.8;
          margin-bottom: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: var(--spacing-lg);
          text-align: center;
          color: #90A4AE;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
