import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('__hp')) {
      // Silent success for bots
      setTimeout(() => {
        navigate('#/grazie');
      }, 500);
      return;
    }

    // Validate consent
    if (!formData.get('consent')) {
      setError('Devi accettare la privacy policy per continuare.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Get UTM parameters from sessionStorage
      const utmSource = sessionStorage.getItem('utm_source') || '';
      const utmMedium = sessionStorage.getItem('utm_medium') || '';
      const utmCampaign = sessionStorage.getItem('utm_campaign') || '';
      const utmTerm = sessionStorage.getItem('utm_term') || '';
      const utmContent = sessionStorage.getItem('utm_content') || '';
      const gclid = sessionStorage.getItem('gclid') || '';
      const fbclid = sessionStorage.getItem('fbclid') || '';

      // Add technical fields
      formData.append('__ts', Date.now().toString());
      formData.append('utm_source', utmSource);
      formData.append('utm_medium', utmMedium);
      formData.append('utm_campaign', utmCampaign);
      formData.append('utm_term', utmTerm);
      formData.append('utm_content', utmContent);
      formData.append('gclid', gclid);
      formData.append('fbclid', fbclid);
      formData.append('referrer', document.referrer);
      formData.append('path', location.pathname + location.hash);

      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch'
        },
        body: formData
      });

      const result = await response.json();

      if (result.ok) {
        navigate('#/grazie');
      } else {
        setError(result.error || 'Si è verificato un errore. Riprova più tardi.');
      }
    } catch (err) {
      setError('Errore di connessione. Verifica la tua connessione e riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orderFormAnchor" className="contact-form-section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Richiedi una Consulenza Gratuita</h2>
            <p>Compila il modulo e ti contatteremo entro 24 ore</p>
          </div>

          <form id="leadForm" onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">Nome *</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  minLength={2}
                  maxLength={50}
                  placeholder="Il tuo nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Cognome *</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  minLength={2}
                  maxLength={50}
                  placeholder="Il tuo cognome"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="tua@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9+\s\-()]{8,20}"
                  placeholder="+39 123 456 7890"
                />
              </div>
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="__hp"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="consent"
                  required
                />
                <span>
                  Accetto la <a href="#/privacy-policy" target="_blank">Privacy Policy</a> 
                  e acconsento al trattamento dei miei dati personali *
                </span>
              </label>
            </div>

            {error && (
              <div className="form-error" role="alert" aria-live="polite">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-form-section {
          padding: var(--spacing-3xl) 0;
          background: linear-gradient(135deg, var(--color-background) 0%, #E3F2FD 100%);
        }

        .form-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background: var(--color-surface);
          border-radius: var(--radius-xl);
          padding: var(--spacing-2xl);
          box-shadow: var(--shadow-lg);
        }

        .form-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .form-header h2 {
          margin-bottom: var(--spacing-sm);
        }

        .form-header p {
          color: var(--color-secondary);
          font-size: 1.0625rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .checkbox-group {
          margin-top: var(--spacing-sm);
        }

        .checkbox-label {
          display: flex;
          gap: var(--spacing-sm);
          align-items: flex-start;
          cursor: pointer;
          font-size: 0.9375rem;
          color: var(--color-secondary);
        }

        .checkbox-label input[type="checkbox"] {
          width: auto;
          margin-top: 2px;
        }

        .checkbox-label a {
          color: var(--color-primary);
          text-decoration: underline;
        }

        .btn-large {
          padding: 1rem 2.5rem;
          font-size: 1.0625rem;
          width: 100%;
        }

        .form-error {
          padding: var(--spacing-md);
          background: #FFEBEE;
          color: var(--color-error);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-error);
          font-size: 0.9375rem;
        }

        @media (max-width: 768px) {
          .form-wrapper {
            padding: var(--spacing-lg);
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
