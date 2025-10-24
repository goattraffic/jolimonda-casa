const CookiePolicy = () => {
  return (
    <div className="page-content">
      <section className="page-hero-simple">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p className="update-date">Ultimo aggiornamento: Dicembre 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
              quando visiti un sito web. Vengono ampiamente utilizzati per far funzionare i 
              siti web, o per farli funzionare in modo più efficiente, nonché per fornire 
              informazioni ai proprietari del sito.
            </p>

            <h2>2. Come utilizziamo i cookie</h2>
            <p>Utilizziamo i cookie per diversi scopi:</p>
            <ul>
              <li><strong>Cookie necessari</strong>: Essenziali per il funzionamento del sito</li>
              <li><strong>Cookie analitici</strong>: Per capire come i visitatori utilizzano il sito</li>
              <li><strong>Cookie di marketing</strong>: Per mostrare contenuti rilevanti</li>
            </ul>

            <h2>3. Cookie necessari</h2>
            <p>
              Questi cookie sono strettamente necessari per fornirti i servizi disponibili 
              attraverso il nostro sito web e per utilizzarne alcune funzionalità. Non richiedono 
              il tuo consenso.
            </p>
            <ul>
              <li><strong>cookieConsent</strong>: Memorizza le tue preferenze sui cookie</li>
              <li><strong>Durata</strong>: 12 mesi</li>
            </ul>

            <h2>4. Cookie analitici</h2>
            <p>
              Questi cookie ci permettono di riconoscere e contare il numero di visitatori 
              e di vedere come i visitatori si muovono nel sito quando lo utilizzano. 
              Questo ci aiuta a migliorare il modo in cui funziona il nostro sito web.
            </p>

            <h2>5. Cookie di marketing</h2>
            <p>
              Questi cookie sono utilizzati per rendere i messaggi pubblicitari più rilevanti 
              per te. Impediscono che lo stesso annuncio appaia continuamente, garantiscono che 
              gli annunci siano visualizzati correttamente per gli inserzionisti e selezionano 
              annunci basati sui tuoi interessi.
            </p>

            <h2>6. Cookie di terze parti</h2>
            <p>
              In alcuni casi speciali utilizziamo anche cookie forniti da terze parti di fiducia. 
              Questi cookie vengono utilizzati per:
            </p>
            <ul>
              <li>Analizzare il traffico del sito (Google Analytics)</li>
              <li>Tracciare le conversioni pubblicitarie (Google Ads, Facebook Pixel)</li>
            </ul>

            <h2>7. Come gestire i cookie</h2>
            <p>
              Puoi gestire le tue preferenze sui cookie attraverso il banner che appare 
              quando visiti per la prima volta il nostro sito. Puoi anche modificare le 
              tue preferenze in qualsiasi momento.
            </p>
            <p>
              Inoltre, la maggior parte dei browser ti consente di rifiutare o accettare 
              i cookie attraverso le impostazioni del browser. Nota che il blocco di alcuni 
              tipi di cookie potrebbe influire sulla tua esperienza del sito e sui servizi 
              che possiamo offrirti.
            </p>

            <h2>8. Modifiche a questa policy</h2>
            <p>
              Potremmo aggiornare questa cookie policy di volta in volta per riflettere, 
              ad esempio, modifiche ai cookie che utilizziamo o per altri motivi operativi, 
              legali o normativi.
            </p>

            <h2>9. Ulteriori informazioni</h2>
            <p>
              Per qualsiasi domanda riguardo la nostra cookie policy e le tue scelte, 
              puoi contattarci utilizzando il modulo di contatto sul nostro sito web.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .page-content {
          padding-top: var(--header-height);
        }

        .page-hero-simple {
          background: var(--color-foreground);
          color: white;
          padding: var(--spacing-2xl) 0;
          text-align: center;
        }

        .page-hero-simple h1 {
          color: white;
          margin-bottom: var(--spacing-sm);
        }

        .update-date {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9375rem;
        }

        .legal-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .legal-content h2 {
          margin-top: var(--spacing-xl);
          color: var(--color-primary);
          font-size: 1.5rem;
        }

        .legal-content p {
          font-size: 1rem;
          line-height: 1.8;
        }

        .legal-content ul {
          margin: var(--spacing-md) 0;
          padding-left: var(--spacing-xl);
        }

        .legal-content li {
          margin-bottom: var(--spacing-sm);
          color: var(--color-secondary);
          line-height: 1.7;
        }

        .legal-content strong {
          color: var(--color-foreground);
        }
      `}</style>
    </div>
  );
};

export default CookiePolicy;
