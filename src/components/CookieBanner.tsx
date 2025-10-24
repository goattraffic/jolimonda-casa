import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const necessary = (document.getElementById('cookie-necessary') as HTMLInputElement)?.checked;
    const analytics = (document.getElementById('cookie-analytics') as HTMLInputElement)?.checked;
    const marketing = (document.getElementById('cookie-marketing') as HTMLInputElement)?.checked;

    const consent = {
      necessary,
      analytics,
      marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        {!showPreferences ? (
          <>
            <div className="cookie-text">
              <h3>Utilizzo dei Cookie</h3>
              <p>
                Utilizziamo i cookie per migliorare la tua esperienza di navigazione, 
                analizzare il traffico del sito e personalizzare i contenuti. 
                Puoi scegliere quali cookie accettare.
              </p>
              <p className="cookie-links">
                <Link to="#/privacy-policy">Privacy Policy</Link> | 
                <Link to="#/cookie-policy">Cookie Policy</Link>
              </p>
            </div>
            <div className="cookie-actions">
              <button onClick={handleAcceptAll} className="btn btn-primary">
                Accetta Tutti
              </button>
              <button onClick={handleRejectAll} className="btn btn-outline">
                Rifiuta Tutti
              </button>
              <button 
                onClick={() => setShowPreferences(true)} 
                className="btn btn-ghost-dark"
              >
                Preferenze
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-preferences">
              <h3>Preferenze Cookie</h3>
              
              <div className="cookie-option">
                <label>
                  <input 
                    type="checkbox" 
                    id="cookie-necessary" 
                    checked 
                    disabled 
                  />
                  <div>
                    <strong>Cookie Necessari</strong>
                    <p>Essenziali per il funzionamento del sito</p>
                  </div>
                </label>
              </div>

              <div className="cookie-option">
                <label>
                  <input 
                    type="checkbox" 
                    id="cookie-analytics" 
                    defaultChecked 
                  />
                  <div>
                    <strong>Cookie Analitici</strong>
                    <p>Ci aiutano a capire come viene utilizzato il sito</p>
                  </div>
                </label>
              </div>

              <div className="cookie-option">
                <label>
                  <input 
                    type="checkbox" 
                    id="cookie-marketing" 
                    defaultChecked 
                  />
                  <div>
                    <strong>Cookie di Marketing</strong>
                    <p>Utilizzati per mostrare contenuti rilevanti</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="cookie-actions">
              <button onClick={handleSavePreferences} className="btn btn-primary">
                Salva Preferenze
              </button>
              <button 
                onClick={() => setShowPreferences(false)} 
                className="btn btn-outline"
              >
                Indietro
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--color-surface);
          box-shadow: var(--shadow-xl);
          z-index: 10000;
          padding: var(--spacing-lg);
          border-top: 3px solid var(--color-primary);
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .cookie-content {
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .cookie-text h3 {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-sm);
          color: var(--color-foreground);
        }

        .cookie-text p {
          font-size: 0.9375rem;
          color: var(--color-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .cookie-links {
          font-size: 0.875rem;
        }

        .cookie-links a {
          margin: 0 var(--spacing-xs);
        }

        .cookie-actions {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
          margin-top: var(--spacing-md);
        }

        .btn-ghost-dark {
          background: transparent;
          color: var(--color-secondary);
          border: 1px solid var(--color-border);
        }

        .btn-ghost-dark:hover {
          background: var(--color-border-light);
          color: var(--color-foreground);
        }

        .cookie-preferences {
          margin-bottom: var(--spacing-md);
        }

        .cookie-option {
          margin-bottom: var(--spacing-md);
          padding: var(--spacing-md);
          background: var(--color-border-light);
          border-radius: var(--radius-md);
        }

        .cookie-option label {
          display: flex;
          gap: var(--spacing-md);
          cursor: pointer;
          align-items: flex-start;
        }

        .cookie-option input[type="checkbox"] {
          width: auto;
          margin-top: 2px;
        }

        .cookie-option strong {
          display: block;
          color: var(--color-foreground);
          margin-bottom: 4px;
        }

        .cookie-option p {
          font-size: 0.875rem;
          color: var(--color-secondary);
          margin: 0;
        }

        @media (max-width: 768px) {
          .cookie-banner {
            padding: var(--spacing-md);
          }

          .cookie-actions {
            flex-direction: column;
          }

          .cookie-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
