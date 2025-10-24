export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'consulenza-personalizzata',
    title: 'Consulenza Personalizzata',
    short: 'Analisi dettagliata delle tue esigenze abitative',
    price: 'Da €500',
    features: [
      'Incontro iniziale gratuito',
      'Analisi delle esigenze familiari',
      'Valutazione del budget',
      'Pianificazione strategica',
      'Supporto continuativo'
    ],
    image: '/src/assets/service-consulting.jpg',
    contentHtml: `
      <p>Il nostro servizio di consulenza personalizzata inizia con un'analisi approfondita delle tue esigenze abitative. Comprendiamo che ogni famiglia ha requisiti unici, e il nostro team di esperti è qui per guidarti attraverso ogni fase del processo.</p>
      
      <h3>Come funziona la consulenza</h3>
      <p>Durante il primo incontro, che è completamente gratuito, i nostri consulenti dedicano tempo a comprendere le tue aspettative, il budget disponibile e le caratteristiche che cerchi nella tua futura casa. Analizziamo insieme fattori come la posizione ideale, le dimensioni necessarie, le esigenze di trasporto e i servizi nelle vicinanze.</p>
      
      <h3>Pianificazione strategica</h3>
      <p>Dopo l'analisi iniziale, sviluppiamo un piano strategico personalizzato che ti aiuterà a trovare la proprietà perfetta. Consideriamo non solo le tue esigenze immediate, ma anche quelle future, assicurandoci che l'investimento sia sostenibile nel lungo termine.</p>
      
      <h3>Supporto continuativo</h3>
      <p>Il nostro impegno non si ferma alla consulenza iniziale. Ti accompagniamo durante tutto il processo di ricerca e acquisto, fornendo consigli esperti e rispondendo a qualsiasi domanda tu possa avere. Il nostro obiettivo è rendere la tua esperienza di ricerca immobiliare il più semplice e piacevole possibile.</p>
      
      <h3>Perché scegliere la nostra consulenza</h3>
      <p>Con anni di esperienza nel mercato immobiliare italiano, conosciamo le sfide e le opportunità che ogni area offre. La nostra rete di contatti ci permette di accedere a proprietà esclusive e di negoziare le migliori condizioni per i nostri clienti. Investire nella consulenza professionale significa risparmiare tempo, evitare errori costosi e trovare davvero la casa dei tuoi sogni.</p>
    `
  },
  {
    slug: 'ricerca-immobiliare',
    title: 'Ricerca Immobiliare',
    short: 'Trova la proprietà perfetta con il nostro database esclusivo',
    price: 'Da €800',
    features: [
      'Accesso a database esclusivo',
      'Selezione personalizzata',
      'Visite organizzate',
      'Report dettagliati',
      'Negoziazione inclusa'
    ],
    image: '/src/assets/service-search.jpg',
    contentHtml: `
      <p>Il nostro servizio di ricerca immobiliare ti dà accesso a un ampio database di proprietà, molte delle quali non sono disponibili sui portali pubblici. Utilizziamo tecnologie avanzate e la nostra profonda conoscenza del mercato per identificare le opzioni che meglio corrispondono ai tuoi criteri.</p>
      
      <h3>Database esclusivo</h3>
      <p>Grazie alle nostre partnership con agenzie immobiliari, sviluppatori e proprietari privati, abbiamo accesso a proprietà esclusive che non troverai altrove. Questo ti dà un vantaggio competitivo significativo nella ricerca della casa ideale.</p>
      
      <h3>Processo di selezione</h3>
      <p>Non ti sommergiamo con centinaia di opzioni. Invece, utilizziamo i criteri definiti durante la consulenza per pre-selezionare solo le proprietà che rispondono veramente alle tue esigenze. Ogni proprietà viene accuratamente valutata dal nostro team prima di essere presentata a te.</p>
      
      <h3>Visite organizzate</h3>
      <p>Organizziamo tutte le visite alle proprietà selezionate, coordinando gli orari con i proprietari e accompagnandoti personalmente. Durante ogni visita, il nostro esperto ti fornirà informazioni dettagliate sulla proprietà, sul quartiere e su eventuali aspetti da considerare.</p>
      
      <h3>Report e analisi</h3>
      <p>Per ogni proprietà visitata, prepariamo un report dettagliato che include valutazioni oggettive, potenziali problematiche, stima dei costi di ristrutturazione se necessari, e un'analisi comparativa con altre opzioni. Questo ti aiuta a prendere decisioni informate e sicure.</p>
      
      <h3>Negoziazione professionale</h3>
      <p>Una volta trovata la proprietà che ti interessa, gestiamo la negoziazione con il venditore per ottenere le migliori condizioni possibili. La nostra esperienza nelle trattative immobiliari può farti risparmiare migliaia di euro sul prezzo finale.</p>
    `
  },
  {
    slug: 'valutazione-proprieta',
    title: 'Valutazione Proprietà',
    short: 'Stima professionale del valore di mercato',
    price: 'Da €400',
    features: [
      'Ispezione approfondita',
      'Analisi di mercato',
      'Report certificato',
      'Confronto con proprietà simili',
      'Consulenza sul valore'
    ],
    image: '/src/assets/service-valuation.jpg',
    contentHtml: `
      <p>La valutazione accurata di una proprietà è fondamentale sia per venditori che per acquirenti. Il nostro servizio di valutazione professionale ti fornisce una stima precisa e certificata del valore di mercato, basata su metodologie riconosciute e dati di mercato aggiornati.</p>
      
      <h3>Ispezione completa</h3>
      <p>I nostri valuatori certificati conducono un'ispezione dettagliata della proprietà, valutando lo stato strutturale, le finiture, gli impianti, e tutti gli elementi che influenzano il valore. Questa analisi fisica è il fondamento di una valutazione accurata.</p>
      
      <h3>Analisi comparativa di mercato</h3>
      <p>Utilizziamo dati di vendite recenti di proprietà simili nella stessa zona per determinare il valore di mercato attuale. Questa analisi comparativa considera fattori come posizione, dimensioni, stato di conservazione, e caratteristiche uniche della proprietà.</p>
      
      <h3>Report certificato</h3>
      <p>Al termine della valutazione, riceverai un report professionale e certificato che include tutti i dettagli dell'analisi, le metodologie utilizzate, e la stima finale del valore. Questo documento è accettato da banche e istituzioni finanziarie per richieste di mutuo.</p>
      
      <h3>Fattori considerati</h3>
      <p>La nostra valutazione tiene conto di numerosi fattori: ubicazione e servizi nelle vicinanze, condizioni generali dell'edificio, caratteristiche interne ed esterne, potenziale di sviluppo, tendenze del mercato locale, e molto altro. Questo approccio olistico garantisce una stima il più accurata possibile.</p>
      
      <h3>Consulenza strategica</h3>
      <p>Oltre alla valutazione numerica, ti forniamo consulenza su come massimizzare il valore della proprietà attraverso migliorie strategiche, timing di vendita ottimale, e strategie di marketing efficaci. Il nostro obiettivo è aiutarti a ottenere il miglior risultato possibile.</p>
    `
  },
  {
    slug: 'assistenza-legale',
    title: 'Assistenza Legale',
    short: 'Supporto legale completo per transazioni sicure',
    price: 'Da €1200',
    features: [
      'Verifica documentazione',
      'Contratti e accordi',
      'Due diligence completa',
      'Rappresentanza legale',
      'Risoluzione controversie'
    ],
    image: '/src/assets/service-legal.jpg',
    contentHtml: `
      <p>L'acquisto o la vendita di una proprietà comporta complesse questioni legali. Il nostro servizio di assistenza legale ti protegge da potenziali problemi e garantisce che tutte le transazioni siano condotte in conformità con la legge italiana.</p>
      
      <h3>Verifica documentale</h3>
      <p>Il nostro team legale esamina attentamente tutta la documentazione relativa alla proprietà: titoli di proprietà, certificati catastali, permessi edilizi, conformità urbanistica, e eventuali gravami o ipoteche. Questa verifica preventiva evita spiacevoli sorprese dopo l'acquisto.</p>
      
      <h3>Contratti e accordi</h3>
      <p>Prepariamo e revisioniamo tutti i contratti necessari: proposte di acquisto, preliminari di vendita, atti di compravendita, e qualsiasi altro documento legale. Ci assicuriamo che i tuoi interessi siano adeguatamente protetti e che i termini siano chiari e favorevoli.</p>
      
      <h3>Due diligence immobiliare</h3>
      <p>Conduciamo un'approfondita indagine legale sulla proprietà e sul venditore. Verifichiamo la legittimità della proprietà, l'assenza di contenziosi in corso, il rispetto delle normative edilizie, e la conformità con i piani regolatori locali.</p>
      
      <h3>Rappresentanza e negoziazione</h3>
      <p>Ti rappresentiamo in tutte le fasi della transazione, dalla negoziazione iniziale fino alla firma dell'atto notarile. Il nostro avvocato specializzato in diritto immobiliare è presente per tutelare i tuoi interessi e risolvere eventuali problematiche che potrebbero emergere.</p>
      
      <h3>Sicurezza della transazione</h3>
      <p>Gestiamo tutti gli aspetti legali del passaggio di proprietà, coordinandoci con notai, agenzie fiscali, e altre autorità competenti. Il nostro obiettivo è garantire una transazione fluida, sicura e conforme a tutte le normative vigenti, dandoti la massima tranquillità.</p>
    `
  },
  {
    slug: 'supporto-trasloco',
    title: 'Supporto Trasloco',
    short: 'Assistenza completa per un trasferimento senza stress',
    price: 'Da €600',
    features: [
      'Pianificazione trasloco',
      'Coordinamento ditte',
      'Servizi di imballaggio',
      'Allacciamento utenze',
      'Supporto burocratico'
    ],
    image: '/src/assets/service-moving.jpg',
    contentHtml: `
      <p>Trasferirsi in una nuova casa può essere stressante e complicato. Il nostro servizio di supporto trasloco si occupa di tutti gli aspetti pratici e burocratici, permettendoti di concentrarti su ciò che conta davvero: goderti la tua nuova abitazione.</p>
      
      <h3>Pianificazione dettagliata</h3>
      <p>Creiamo un piano completo per il tuo trasloco, considerando tempistiche, esigenze speciali, e coordinando tutte le attività necessarie. La nostra esperienza ci permette di anticipare e risolvere potenziali problemi prima che si verifichino.</p>
      
      <h3>Selezione e coordinamento fornitori</h3>
      <p>Collaboriamo con ditte di trasloco affidabili e professionali, selezionate per la qualità del servizio e l'attenzione ai dettagli. Otteniamo preventivi competitivi, coordiniamo date e orari, e supervisioniamo l'intero processo per garantire che tutto proceda senza intoppi.</p>
      
      <h3>Servizi di imballaggio</h3>
      <p>Se lo desideri, possiamo organizzare servizi professionali di imballaggio per proteggere i tuoi beni durante il trasporto. Questo include materiali di qualità e tecniche specializzate per oggetti fragili, opere d'arte, mobili pregiati e apparecchiature elettroniche.</p>
      
      <h3>Gestione utenze e servizi</h3>
      <p>Ci occupiamo dell'allacciamento di tutte le utenze nella nuova abitazione: elettricità, gas, acqua, internet e telefono. Coordiniamo con i fornitori per garantire che tutti i servizi siano attivi quando ti trasferisci, evitandoti lunghe attese e complicazioni burocratiche.</p>
      
      <h3>Assistenza amministrativa</h3>
      <p>Gestiamo tutti gli aspetti burocratici del trasferimento: cambio di residenza, aggiornamento documenti, comunicazioni alle autorità competenti, e qualsiasi altra pratica necessaria. Questo ti risparmia ore di code agli uffici pubblici e ti garantisce che tutto sia fatto correttamente.</p>
      
      <h3>Supporto post-trasloco</h3>
      <p>Il nostro servizio non termina il giorno del trasloco. Rimaniamo disponibili per aiutarti con eventuali problematiche che potrebbero emergere, consigli sull'organizzazione della nuova casa, e raccomandazioni per artigiani e professionisti locali di fiducia.</p>
    `
  },
  {
    slug: 'gestione-documenti',
    title: 'Gestione Documenti',
    short: 'Organizzazione completa di tutta la documentazione',
    price: 'Da €350',
    features: [
      'Raccolta documentazione',
      'Verifica conformità',
      'Archiviazione digitale',
      'Preparazione pratiche',
      'Assistenza continua'
    ],
    image: '/src/assets/service-documents.jpg',
    contentHtml: `
      <p>La gestione della documentazione immobiliare può essere complessa e time-consuming. Il nostro servizio specializzato si occupa di raccogliere, organizzare e verificare tutti i documenti necessari, garantendo che ogni pratica sia completa e conforme alle normative vigenti.</p>
      
      <h3>Raccolta documentale</h3>
      <p>Identifichiamo tutti i documenti necessari per la tua transazione immobiliare e ci occupiamo di ottenerli dalle fonti appropriate: uffici comunali, catasto, conservatoria, agenzie fiscali, e altre autorità competenti. Questo ti risparmia tempo prezioso e garantisce che nulla venga trascurato.</p>
      
      <h3>Verifica di conformità</h3>
      <p>Ogni documento viene attentamente verificato per assicurarne la validità, l'attualità e la conformità con le normative. Controlliamo certificati di agibilità, conformità urbanistica, certificazioni energetiche, e tutti gli altri documenti richiesti per legge.</p>
      
      <h3>Organizzazione e archiviazione</h3>
      <p>Creiamo un archivio digitale organizzato di tutti i tuoi documenti immobiliari, facilmente accessibile e protetto. Questo sistema ti permette di trovare rapidamente qualsiasi documento quando ne hai bisogno, sia per consultazioni future che per eventuali vendite o ristrutturazioni.</p>
      
      <h3>Preparazione pratiche</h3>
      <p>Prepariamo tutte le pratiche necessarie per gli uffici competenti: dichiarazioni IMU, comunicazioni catastali, variazioni di residenza, e qualsiasi altra documentazione richiesta. Ci assicuriamo che ogni pratica sia compilata correttamente e presentata nei termini previsti.</p>
      
      <h3>Monitoraggio scadenze</h3>
      <p>Teniamo traccia di tutte le scadenze importanti relative alla tua proprietà: rinnovi di certificazioni, pagamenti fiscali, controlli obbligatori degli impianti. Ti avvisiamo per tempo, evitandoti sanzioni o complicazioni burocratiche.</p>
      
      <h3>Consulenza documentale</h3>
      <p>Forniamo consulenza esperta su qualsiasi questione documentale: interpretazione di certificati, requisiti per ristrutturazioni, documentazione per mutui, e molto altro. Il nostro team è sempre disponibile per rispondere alle tue domande e guidarti attraverso le complessità burocratiche italiane.</p>
    `
  }
];
