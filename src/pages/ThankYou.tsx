import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-content">
      <section className="thank-you-section">
        <div className="container">
          <div className="thank-you-content">
            <div className="success-icon">✓</div>
            <h1>Grazie per averci contattato!</h1>
            <p className="lead">
              I tuoi dati sono stati inviati con successo. Il nostro team ti 
              contatterà entro 24 ore per discutere delle tue esigenze.
            </p>
            <div className="next-steps">
              <h2>Cosa Succede Ora?</h2>
              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Revisione</h3>
                  <p>Analizziamo la tua richiesta e prepariamo una proposta personalizzata</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Contatto</h3>
                  <p>Ti contatteremo entro 24 ore per fissare una consulenza gratuita</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Consulenza</h3>
                  <p>Incontro per comprendere le tue esigenze e presentare le nostre soluzioni</p>
                </div>
              </div>
            </div>
            <div className="actions">
              <Link to="/" className="btn btn-primary">
                Torna alla Home
              </Link>
              <Link to="/servizi" className="btn btn-outline">
                Esplora i Servizi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-content {
          padding-top: var(--header-height);
        }

        .thank-you-section {
          min-height: calc(100vh - var(--header-height));
          display: flex;
          align-items: center;
          background: linear-gradient(180deg, var(--color-background) 0%, #E3F2FD 100%);
          padding: var(--spacing-3xl) 0;
        }

        .thank-you-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .success-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto var(--spacing-xl);
          background: var(--color-success);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: bold;
          box-shadow: var(--shadow-lg);
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .thank-you-content h1 {
          margin-bottom: var(--spacing-md);
          animation: fadeIn 0.6s ease-out 0.2s backwards;
        }

        .lead {
          font-size: 1.125rem;
          color: var(--color-secondary);
          margin-bottom: var(--spacing-2xl);
          animation: fadeIn 0.6s ease-out 0.4s backwards;
        }

        .next-steps {
          margin-bottom: var(--spacing-2xl);
          animation: fadeIn 0.6s ease-out 0.6s backwards;
        }

        .next-steps h2 {
          margin-bottom: var(--spacing-xl);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-lg);
        }

        .step-card {
          background: var(--color-surface);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }

        .step-number {
          width: 50px;
          height: 50px;
          margin: 0 auto var(--spacing-md);
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .step-card h3 {
          font-size: 1.125rem;
          margin-bottom: var(--spacing-sm);
        }

        .step-card p {
          font-size: 0.9375rem;
          color: var(--color-secondary);
          margin-bottom: 0;
        }

        .actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeIn 0.6s ease-out 0.8s backwards;
        }

        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }

          .actions {
            flex-direction: column;
          }

          .actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
