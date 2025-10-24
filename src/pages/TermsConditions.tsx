const TermsConditions = () => {
  return (
    <div className="page-content">
      <section className="page-hero-simple">
        <div className="container">
          <h1>Termini e Condizioni</h1>
          <p className="update-date">Ultimo aggiornamento: Dicembre 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Accettazione dei termini</h2>
            <p>
              Utilizzando il sito web di Jolimonda, accetti di essere vincolato da questi 
              termini e condizioni. Se non accetti questi termini, ti preghiamo di non 
              utilizzare il nostro sito web o i nostri servizi.
            </p>

            <h2>2. Servizi offerti</h2>
            <p>
              Jolimonda offre servizi di consulenza immobiliare, ricerca proprietà, 
              valutazione, assistenza legale, supporto trasloco e gestione documenti. 
              Tutti i servizi sono soggetti a disponibilità e possono variare in base 
              alla località e alle esigenze specifiche del cliente.
            </p>

            <h2>3. Utilizzo del sito</h2>
            <p>Accetti di utilizzare il nostro sito web solo per scopi legittimi e in modo da non violare:</p>
            <ul>
              <li>I diritti di terzi</li>
              <li>Le leggi e i regolamenti applicabili</li>
              <li>La funzionalità del sito web</li>
            </ul>

            <h2>4. Proprietà intellettuale</h2>
            <p>
              Tutti i contenuti presenti su questo sito web, inclusi testi, grafica, loghi, 
              immagini e software, sono di proprietà di Jolimonda o dei suoi fornitori di 
              contenuti e sono protetti dalle leggi italiane e internazionali sul copyright.
            </p>

            <h2>5. Prezzi e pagamenti</h2>
            <ul>
              <li>Tutti i prezzi sono indicativi e possono variare in base ai servizi richiesti</li>
              <li>La consulenza iniziale è gratuita</li>
              <li>I pagamenti devono essere effettuati secondo i termini concordati</li>
              <li>Ci riserviamo il diritto di modificare i prezzi senza preavviso</li>
            </ul>

            <h2>6. Responsabilità</h2>
            <p>
              Jolimonda si impegna a fornire servizi professionali e di alta qualità. 
              Tuttavia, non possiamo garantire risultati specifici in quanto il mercato 
              immobiliare è soggetto a variabili esterne.
            </p>
            <p>Non saremo responsabili per:</p>
            <ul>
              <li>Perdite indirette o consequenziali</li>
              <li>Interruzioni del servizio dovute a cause di forza maggiore</li>
              <li>Azioni di terze parti</li>
            </ul>

            <h2>7. Riservatezza</h2>
            <p>
              Tutte le informazioni condivise durante la nostra collaborazione saranno 
              trattate con la massima riservatezza. Per maggiori dettagli, consulta 
              la nostra Privacy Policy.
            </p>

            <h2>8. Risoluzione del contratto</h2>
            <p>
              Entrambe le parti possono risolvere il contratto di servizio con un preavviso 
              scritto di 7 giorni. In caso di risoluzione anticipata, potrebbero applicarsi 
              penali come specificato nell'accordo individuale.
            </p>

            <h2>9. Modifiche ai termini</h2>
            <p>
              Ci riserviamo il diritto di modificare questi termini e condizioni in qualsiasi 
              momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione 
              sul sito web. L'uso continuato del sito dopo le modifiche costituisce 
              accettazione dei nuovi termini.
            </p>

            <h2>10. Legge applicabile</h2>
            <p>
              Questi termini e condizioni sono regolati dalla legge italiana. Qualsiasi 
              controversia sarà di competenza esclusiva del foro di [Città].
            </p>

            <h2>11. Contatti</h2>
            <p>
              Per qualsiasi domanda riguardo questi termini e condizioni, puoi contattarci 
              utilizzando il modulo di contatto sul nostro sito web.
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

export default TermsConditions;
