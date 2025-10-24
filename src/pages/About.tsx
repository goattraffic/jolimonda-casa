const About = () => {
  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <h1 className="fade-in">Chi Siamo</h1>
          <p className="hero-lead fade-in">
            Il tuo partner di fiducia nel mercato immobiliare italiano
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>La Nostra Storia</h2>
              <p>
                Jolimonda nasce dalla passione per il settore immobiliare e dal desiderio 
                di aiutare le persone a trovare non solo una casa, ma il luogo perfetto 
                dove costruire il proprio futuro. Con oltre 15 anni di esperienza, abbiamo 
                assistito migliaia di famiglie e professionisti nella ricerca della proprietà ideale.
              </p>
              
              <h2>La Nostra Missione</h2>
              <p>
                La nostra missione è semplice: rendere il processo di ricerca e acquisto 
                immobiliare il più trasparente, efficiente e privo di stress possibile. 
                Crediamo che ogni cliente meriti un servizio personalizzato, un'attenzione 
                ai dettagli e una consulenza onesta basata su competenza ed esperienza.
              </p>

              <h2>I Nostri Valori</h2>
              <ul className="values-list">
                <li><strong>Trasparenza:</strong> Comunichiamo apertamente in ogni fase del processo</li>
                <li><strong>Professionalità:</strong> Il nostro team è formato da esperti certificati</li>
                <li><strong>Dedizione:</strong> Ogni cliente riceve la nostra massima attenzione</li>
                <li><strong>Innovazione:</strong> Utilizziamo le tecnologie più avanzate</li>
                <li><strong>Integrità:</strong> Agiamo sempre nell'interesse dei nostri clienti</li>
              </ul>

              <h2>Perché Scegliere Jolimonda</h2>
              <p>
                Ciò che ci distingue è il nostro approccio personalizzato. Non vendiamo 
                semplicemente immobili; ascoltiamo le tue esigenze, comprendiamo i tuoi obiettivi 
                e lavoriamo instancabilmente per trovare la soluzione perfetta. Il nostro network 
                esteso ci permette di accedere a proprietà esclusive e di negoziare le migliori 
                condizioni per i nostri clienti.
              </p>

              <h2>Il Nostro Team</h2>
              <p>
                Il team Jolimonda è composto da professionisti qualificati con competenze 
                complementari: consulenti immobiliari esperti, esperti legali specializzati 
                in diritto immobiliare, valuatori certificati, e coordinatori dei traslochi. 
                Insieme, offriamo un servizio completo che copre ogni aspetto del tuo percorso immobiliare.
              </p>
            </div>

            <div className="content-sidebar">
              <div className="card">
                <h3>In Numeri</h3>
                <div className="stat-item">
                  <div className="stat-value">2500+</div>
                  <div className="stat-label">Clienti Soddisfatti</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">15+</div>
                  <div className="stat-label">Anni di Esperienza</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">95%</div>
                  <div className="stat-label">Tasso di Successo</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Supporto Disponibile</div>
                </div>
              </div>

              <div className="card">
                <h3>FAQ</h3>
                
                <div className="faq-item">
                  <h4>Quanto costa il servizio di consulenza?</h4>
                  <p>
                    Il primo incontro è sempre gratuito. I costi successivi variano 
                    in base al servizio scelto, con pacchetti a partire da €500.
                  </p>
                </div>

                <div className="faq-item">
                  <h4>In quali zone operate?</h4>
                  <p>
                    Operiamo principalmente nelle principali città italiane e nelle loro 
                    province, ma possiamo assistere clienti in tutto il territorio nazionale.
                  </p>
                </div>

                <div className="faq-item">
                  <h4>Quanto tempo richiede la ricerca?</h4>
                  <p>
                    I tempi variano in base alle esigenze specifiche, ma mediamente 
                    troviam la proprietà ideale entro 30-60 giorni dall'inizio della ricerca.
                  </p>
                </div>

                <div className="faq-item">
                  <h4>Offrite assistenza post-acquisto?</h4>
                  <p>
                    Sì, il nostro supporto continua anche dopo l'acquisto con servizi 
                    di gestione documenti, trasloco e assistenza per eventuali necessità.
                  </p>
                </div>

                <div className="faq-item">
                  <h4>Lavorate con acquirenti stranieri?</h4>
                  <p>
                    Certamente! Abbiamo esperienza nell'assistere clienti internazionali 
                    e offriamo supporto multilingue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-xl);
          align-items: start;
        }

        .content-main h2 {
          margin-top: var(--spacing-xl);
          color: var(--color-primary);
        }

        .content-main p {
          font-size: 1.0625rem;
          line-height: 1.8;
        }

        .values-list {
          list-style: none;
          padding: 0;
        }

        .values-list li {
          padding: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
          background: var(--color-border-light);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-primary);
        }

        .values-list strong {
          color: var(--color-primary);
          display: block;
          margin-bottom: 4px;
        }

        .content-sidebar {
          position: sticky;
          top: calc(var(--header-height) + var(--spacing-lg));
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .stat-item {
          text-align: center;
          padding: var(--spacing-md) 0;
          border-bottom: 1px solid var(--color-border-light);
        }

        .stat-item:last-child {
          border-bottom: none;
        }

        .stat-value {
          font-family: var(--font-headings);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9375rem;
          color: var(--color-secondary);
        }

        .faq-item {
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-lg);
          border-bottom: 1px solid var(--color-border-light);
        }

        .faq-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .faq-item h4 {
          font-size: 1rem;
          margin-bottom: var(--spacing-sm);
          color: var(--color-foreground);
        }

        .faq-item p {
          font-size: 0.9375rem;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .content-sidebar {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
