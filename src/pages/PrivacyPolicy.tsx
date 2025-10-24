const PrivacyPolicy = () => {
  return (
    <div className="page-content">
      <section className="page-hero-simple">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="update-date">Ultimo aggiornamento: Dicembre 2024</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Introduzione</h2>
            <p>
              Jolimonda ("noi", "nostro") rispetta la tua privacy e si impegna a proteggere 
              i tuoi dati personali. Questa informativa sulla privacy ti informa su come 
              trattiamo i tuoi dati personali quando visiti il nostro sito web e ti informa 
              sui tuoi diritti in materia di privacy e su come la legge ti protegge.
            </p>

            <h2>2. Dati che raccogliamo</h2>
            <p>Possiamo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te:</p>
            <ul>
              <li><strong>Dati di identità</strong>: nome, cognome</li>
              <li><strong>Dati di contatto</strong>: indirizzo email, numero di telefono</li>
              <li><strong>Dati tecnici</strong>: indirizzo IP, tipo di browser, fuso orario, sistema operativo</li>
              <li><strong>Dati di utilizzo</strong>: informazioni su come utilizzi il nostro sito web</li>
            </ul>

            <h2>3. Come utilizziamo i tuoi dati</h2>
            <p>Utilizziamo i tuoi dati personali per:</p>
            <ul>
              <li>Fornirti i servizi richiesti</li>
              <li>Rispondere alle tue richieste di informazioni</li>
              <li>Gestire la nostra relazione commerciale con te</li>
              <li>Migliorare il nostro sito web e i nostri servizi</li>
              <li>Inviarti comunicazioni di marketing (solo con il tuo consenso)</li>
            </ul>

            <h2>4. Base giuridica per il trattamento</h2>
            <p>
              Tratteremo i tuoi dati personali solo quando la legge ce lo consente. 
              Le basi giuridiche principali sono:
            </p>
            <ul>
              <li>Consenso: hai dato il consenso esplicito al trattamento</li>
              <li>Esecuzione del contratto: necessario per fornire i servizi richiesti</li>
              <li>Obbligo legale: richiesto dalla legge</li>
              <li>Interesse legittimo: necessario per i nostri legittimi interessi aziendali</li>
            </ul>

            <h2>5. Sicurezza dei dati</h2>
            <p>
              Abbiamo implementato misure di sicurezza appropriate per prevenire che i tuoi 
              dati personali vengano accidentalmente persi, utilizzati o accessibili in modo 
              non autorizzato, alterati o divulgati.
            </p>

            <h2>6. Conservazione dei dati</h2>
            <p>
              Conserveremo i tuoi dati personali solo per il tempo necessario agli scopi 
              per cui li abbiamo raccolti, incluso qualsiasi requisito legale, contabile 
              o di rendicontazione.
            </p>

            <h2>7. I tuoi diritti legali</h2>
            <p>Ai sensi del GDPR, hai i seguenti diritti:</p>
            <ul>
              <li>Diritto di accesso ai tuoi dati personali</li>
              <li>Diritto di rettifica dei tuoi dati</li>
              <li>Diritto alla cancellazione dei tuoi dati</li>
              <li>Diritto di limitazione del trattamento</li>
              <li>Diritto alla portabilità dei dati</li>
              <li>Diritto di opposizione al trattamento</li>
              <li>Diritto di revoca del consenso</li>
            </ul>

            <h2>8. Cookie</h2>
            <p>
              Il nostro sito web utilizza cookie per migliorare la tua esperienza. 
              Per maggiori informazioni, consulta la nostra Cookie Policy.
            </p>

            <h2>9. Modifiche a questa policy</h2>
            <p>
              Potremmo aggiornare questa informativa sulla privacy di volta in volta. 
              Ti informeremo di eventuali modifiche pubblicando la nuova informativa su questa pagina.
            </p>

            <h2>10. Contatti</h2>
            <p>
              Per qualsiasi domanda riguardo questa privacy policy o per esercitare i tuoi diritti, 
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

export default PrivacyPolicy;
