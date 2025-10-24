const RefundsPolicy = () => {
  return (
    <div className="page-content">
      <section className="page-hero-simple">
        <div className="container">
          <h1>Politica Rimborsi</h1>
          <p className="update-date">Ultimo aggiornamento: Dicembre 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Premessa</h2>
            <p>
              Jolimonda si impegna a fornire servizi di alta qualità e a garantire 
              la soddisfazione del cliente. Questa politica sui rimborsi illustra 
              le condizioni in cui è possibile richiedere un rimborso per i servizi 
              acquistati.
            </p>

            <h2>2. Consulenza iniziale</h2>
            <p>
              La consulenza iniziale è sempre gratuita e non richiede alcun pagamento. 
              Pertanto, non è applicabile alcuna politica di rimborso per questo servizio.
            </p>

            <h2>3. Servizi a pagamento</h2>
            <p>
              Per i servizi a pagamento, la politica di rimborso varia in base al tipo 
              di servizio e alla fase del progetto:
            </p>

            <h3>3.1 Consulenza Personalizzata</h3>
            <ul>
              <li>Rimborso completo se richiesto entro 24 ore dalla firma del contratto</li>
              <li>Rimborso del 50% se richiesto entro 7 giorni dall'inizio del servizio</li>
              <li>Nessun rimborso dopo 7 giorni dall'inizio del servizio</li>
            </ul>

            <h3>3.2 Ricerca Immobiliare</h3>
            <ul>
              <li>Rimborso completo se nessuna proprietà è stata presentata</li>
              <li>Rimborso del 70% se sono state presentate meno di 3 proprietà</li>
              <li>Rimborso del 40% se sono state organizzate visite ma nessun acquisto concluso</li>
              <li>Nessun rimborso dopo la firma preliminare di acquisto</li>
            </ul>

            <h3>3.3 Valutazione Proprietà</h3>
            <ul>
              <li>Rimborso completo se l'ispezione non è stata effettuata</li>
              <li>Nessun rimborso dopo la consegna del report di valutazione</li>
            </ul>

            <h3>3.4 Assistenza Legale</h3>
            <ul>
              <li>Rimborso proporzionale alle ore non utilizzate</li>
              <li>Le ore già fatturate non sono rimborsabili</li>
            </ul>

            <h3>3.5 Supporto Trasloco</h3>
            <ul>
              <li>Rimborso completo se annullato con 14 giorni di preavviso</li>
              <li>Rimborso del 50% se annullato con 7 giorni di preavviso</li>
              <li>Nessun rimborso per annullamenti con meno di 7 giorni di preavviso</li>
            </ul>

            <h3>3.6 Gestione Documenti</h3>
            <ul>
              <li>Rimborso proporzionale per documenti non ancora elaborati</li>
              <li>Nessun rimborso per documenti già ottenuti o elaborati</li>
            </ul>

            <h2>4. Come richiedere un rimborso</h2>
            <p>Per richiedere un rimborso, devi:</p>
            <ol>
              <li>Contattarci entro i termini specificati per il servizio specifico</li>
              <li>Fornire il numero di contratto e i dettagli del servizio</li>
              <li>Spiegare il motivo della richiesta di rimborso</li>
              <li>Fornire eventuali documenti di supporto richiesti</li>
            </ol>

            <h2>5. Tempi di elaborazione</h2>
            <p>
              Le richieste di rimborso saranno elaborate entro 14 giorni lavorativi 
              dalla ricezione. I rimborsi approvati saranno accreditati sul metodo 
              di pagamento originale entro 7-10 giorni lavorativi dall'approvazione.
            </p>

            <h2>6. Eccezioni</h2>
            <p>Non sono previsti rimborsi nelle seguenti circostanze:</p>
            <ul>
              <li>Servizi completati secondo i termini del contratto</li>
              <li>Mancata collaborazione del cliente durante l'erogazione del servizio</li>
              <li>Informazioni errate o incomplete fornite dal cliente</li>
              <li>Cambiamento di idea del cliente dopo l'inizio del servizio (oltre i termini specificati)</li>
            </ul>

            <h2>7. Garanzia di soddisfazione</h2>
            <p>
              Sebbene non tutti i servizi siano rimborsabili in ogni circostanza, 
              ci impegniamo a risolvere qualsiasi problema e a garantire la tua 
              soddisfazione. Se non sei soddisfatto del servizio ricevuto, ti 
              invitiamo a contattarci per discutere delle possibili soluzioni 
              prima di richiedere un rimborso.
            </p>

            <h2>8. Modifiche alla politica</h2>
            <p>
              Ci riserviamo il diritto di modificare questa politica sui rimborsi 
              in qualsiasi momento. Le modifiche entreranno in vigore immediatamente 
              dopo la pubblicazione sul sito web.
            </p>

            <h2>9. Contatti</h2>
            <p>
              Per qualsiasi domanda riguardo la nostra politica sui rimborsi o per 
              richiedere un rimborso, puoi contattarci utilizzando il modulo di 
              contatto sul nostro sito web.
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

        .legal-content h3 {
          margin-top: var(--spacing-lg);
          color: var(--color-foreground);
          font-size: 1.125rem;
        }

        .legal-content p {
          font-size: 1rem;
          line-height: 1.8;
        }

        .legal-content ul,
        .legal-content ol {
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

export default RefundsPolicy;
