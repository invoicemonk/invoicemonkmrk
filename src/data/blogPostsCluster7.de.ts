import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const posts: BlogPost[] = [
  {
    slug: 'client-onboarding-process',
    title: 'Kunden-Onboarding: So bauen Sie einen Prozess auf, der beeindruckt',
    excerpt: 'Ein großartiger Onboarding-Prozess bestimmt den Ton für die gesamte Geschäftsbeziehung. Schritt-für-Schritt-Anleitung mit Vorlagen.',
    category: 'Client Management',
    tags: ['Kunden-Onboarding', 'Kundenerlebnis', 'Freelancing'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '9 Min. Lesezeit',
    featuredImage: '/blog/client-onboarding-checklist.jpg',
    featuredImageAlt: 'Kunden-Onboarding-Checkliste mit Willkommenspaket',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['Kunden-Onboarding-Prozess', 'Onboarding Freelancer', 'Neukunden-Checkliste'],
    priority: 'P1',
    content: `
      <p><strong>Die ersten 48 Stunden einer neuen Kundenbeziehung bestimmen den Ton für alles, was folgt.</strong> Ein strukturierter Onboarding-Prozess lässt Sie professionell wirken, reduziert Missverständnisse und senkt das Risiko von Scope-Streitigkeiten drastisch.</p>

      <h2>Warum Onboarding wichtig ist</h2>
      <ul>
        <li>Etabliert Professionalität von Anfang an</li>
        <li>Schafft klare Erwartungen auf beiden Seiten</li>
        <li>Reduziert Rückfragen um 40–60 %</li>
        <li>Erhöht die Kundenzufriedenheit und Weiterempfehlungsrate</li>
      </ul>

      <h2>Der 5-Schritte-Onboarding-Prozess</h2>
      <h3>Schritt 1: Willkommensmail (innerhalb von 24 Stunden)</h3>
      <p>Senden Sie eine professionelle Willkommensnachricht mit nächsten Schritten, Zeitplan und Kontaktdaten.</p>

      <h3>Schritt 2: Kundenfragebogen</h3>
      <p>Sammeln Sie alle relevanten Informationen: Ziele, Markenpräferenzen, Zugangsdaten, Ansprechpartner.</p>

      <h3>Schritt 3: Vertrag und Zahlungseinrichtung</h3>
      <p>Senden Sie einen <a href="/__LANG__/blog/freelance-contract-templates">professionellen Vertrag</a> mit klarem Leistungsumfang und richten Sie die Rechnungsstellung über <a href="/__LANG__/invoicing">Invoicemonk</a> ein.</p>

      <h3>Schritt 4: Kickoff-Gespräch</h3>
      <p>Besprechen Sie Ziele, Meilensteine, Kommunikationskanäle und Feedback-Rhythmus.</p>

      <h3>Schritt 5: Geteilter Projektplan</h3>
      <p>Stellen Sie einen Zeitplan mit Meilensteinen bereit, den beide Seiten einsehen können.</p>

      <h2>Nächste Schritte</h2>
      <p>Ein professioneller Onboarding-Prozess ist Teil eines exzellenten <a href="/__LANG__/blog/client-management-guide-small-business">Kundenmanagements</a>. Die Einrichtung dauert etwa 2 Stunden und läuft dann für jeden neuen Kunden automatisch.</p>
    `
  },
  {
    slug: 'managing-difficult-clients',
    title: 'Schwierige Kunden professionell handhaben',
    excerpt: 'Professionelle Strategien für Konfliktmanagement, Grenzen setzen und wissen, wann man gehen sollte.',
    category: 'Client Management',
    tags: ['schwierige Kunden', 'Kundenkonflikte', 'professionelle Grenzen'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '10 Min. Lesezeit',
    featuredImage: '/blog/difficult-clients-management.jpg',
    featuredImageAlt: 'Professioneller Umgang mit schwierigen Kunden',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['schwierige Kunden', 'Problemkunden', 'Konfliktlösung Kunden'],
    priority: 'P2',
    content: `
      <p>Schwierige Kunden gehören zum Geschäftsleben dazu. Der Unterschied zwischen erfolgreichen und kämpfenden Freelancern liegt oft darin, wie sie mit Konflikten umgehen.</p>

      <h2>Typen schwieriger Kunden</h2>
      <ul>
        <li><strong>Der Scope-Schleicher:</strong> Fügt ständig „nur noch eine Kleinigkeit" hinzu</li>
        <li><strong>Der Geist:</strong> Verschwindet wochenlang und erwartet sofortige Reaktion</li>
        <li><strong>Der Micromanager:</strong> Kontrolliert jeden Schritt</li>
        <li><strong>Der Spätzahler:</strong> Zahlt konsequent nach Fälligkeit</li>
      </ul>

      <h2>Professionelle Strategien</h2>
      <h3>Scope Creep begrenzen</h3>
      <p>Nutzen Sie Change-Order-Formulare. Bestätigen Sie jede Änderung schriftlich mit Auswirkungen auf Zeit und Budget.</p>

      <h3>Grenzen setzen</h3>
      <p>Definieren Sie Arbeitszeiten, Reaktionszeiten und Kommunikationskanäle klar im Vertrag.</p>

      <h3>Zahlung durchsetzen</h3>
      <p>Arbeiten Sie mit Anzahlungen, automatischen <a href="/__LANG__/blog/setting-up-automatic-payment-reminders">Zahlungserinnerungen</a> und klaren Konsequenzen bei Verzug.</p>

      <h2>Wann die Zusammenarbeit beenden</h2>
      <ul>
        <li>Der Kunde respektiert Ihre Expertise oder Zeit wiederholt nicht</li>
        <li>Die Zusammenarbeit kostet mehr, als sie einbringt</li>
        <li>Vertragsbedingungen werden konsequent ignoriert</li>
      </ul>

      <h2>Nächste Schritte</h2>
      <p>Beenden Sie problematische Beziehungen immer professionell mit angemessener Frist. Mehr zum Thema in unserem <a href="/__LANG__/blog/client-management-guide-small-business">Kundenmanagement-Leitfaden</a>.</p>
    `
  },
  {
    slug: 'client-communication-templates',
    title: 'Kundenkommunikation: E-Mail-Vorlagen für Freelancer',
    excerpt: 'Sofort einsetzbare E-Mail-Vorlagen für Projekt-Updates, Scope-Änderungen und Zahlungserinnerungen.',
    category: 'Client Management',
    tags: ['Kundenkommunikation', 'E-Mail-Vorlagen', 'Freelancing'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '10 Min. Lesezeit',
    featuredImage: '/blog/client-email-templates.jpg',
    featuredImageAlt: 'E-Mail-Vorlagen für professionelle Kundenkommunikation',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['Kundenkommunikation Vorlagen', 'Freelancer E-Mail-Vorlagen'],
    priority: 'P2',
    content: `
      <p><strong>Professionelle Kommunikationsvorlagen sparen 3–5 Stunden pro Woche</strong> und sorgen für Konsistenz bei jeder Kundeninteraktion.</p>

      <h2>Vorlage 1: Projekt-Kickoff-Mail</h2>
      <p>Themen: Projektzusammenfassung, nächste Schritte, Zeitplan, Kommunikationskanäle.</p>

      <h2>Vorlage 2: Wöchentliches Status-Update</h2>
      <p>Themen: Erledigtes diese Woche, geplant für nächste Woche, offene Fragen, Budget-/Zeitplan-Status.</p>

      <h2>Vorlage 3: Scope-Änderung</h2>
      <p>Themen: Beschreibung der Änderung, Auswirkung auf Zeit und Budget, Genehmigungsanfrage.</p>

      <h2>Vorlage 4: Zahlungserinnerung</h2>
      <p>Themen: Rechnungsnummer, Fälligkeitsdatum, ausstehender Betrag, Zahlungsmöglichkeiten. Nutzen Sie <a href="/__LANG__/invoicing">Invoicemonk</a> für automatische Erinnerungen.</p>

      <h2>Vorlage 5: Projektabschluss</h2>
      <p>Themen: Zusammenfassung der Ergebnisse, Abschlussrechnung, Bitte um Feedback/Bewertung, Hinweis auf zukünftige Zusammenarbeit.</p>

      <h2>Nächste Schritte</h2>
      <p>Passen Sie diese Vorlagen an Ihren Stil und Ihre Branche an. Mehr in unserem <a href="/__LANG__/blog/client-management-guide-small-business">Kundenmanagement-Leitfaden</a>.</p>
    `
  },
  {
    slug: 'client-retention-strategies',
    title: '7 Strategien zur Kundenbindung für Dienstleistungsunternehmen',
    excerpt: '7 bewährte Bindungsstrategien, die einmalige Projekte in langfristige wiederkehrende Einnahmen verwandeln.',
    category: 'Client Management',
    tags: ['Kundenbindung', 'wiederkehrende Einnahmen', 'Kundenloyalität'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '9 Min. Lesezeit',
    featuredImage: '/images/blog/client-retention.jpg',
    featuredImageAlt: 'Kundenbindungsstrategien für Dienstleister',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['Kundenbindung Strategien', 'Kunden halten', 'wiederkehrende Einnahmen'],
    priority: 'P2',
    content: `
      <p>Einen neuen Kunden zu gewinnen kostet 5–7x mehr als einen bestehenden zu halten. Dennoch investieren die meisten Freelancer den Großteil ihrer Energie in die Neukundenakquise.</p>

      <h2>1. Ergebnisse liefern, die Erwartungen übertreffen</h2>
      <p>Liefern Sie 10 % mehr als vereinbart — eine Extraseite, ein Bonus-Template, eine zusätzliche Empfehlung.</p>

      <h2>2. Proaktiv kommunizieren</h2>
      <p>Warten Sie nicht, bis der Kunde fragt. Regelmäßige Updates bauen Vertrauen auf.</p>

      <h2>3. Folgeprojekte vorschlagen</h2>
      <p>Beenden Sie jedes Projekt mit 2–3 Vorschlägen für nächste Schritte.</p>

      <h2>4. Retainer-Pakete anbieten</h2>
      <p>Monatliche Pakete für laufende Wartung, Beratung oder Content-Erstellung.</p>

      <h2>5. Persönliche Aufmerksamkeit zeigen</h2>
      <p>Geburtstagswünsche, Gratulationen zu Erfolgen, handgeschriebene Dankeskarten.</p>

      <h2>6. Empfehlungsprogramm einrichten</h2>
      <p>Belohnen Sie Weiterempfehlungen mit Rabatten oder Bonus-Leistungen.</p>

      <h2>7. Professionell abrechnen</h2>
      <p>Klare, pünktliche <a href="/__LANG__/invoicing">Rechnungen</a> signalisieren Professionalität und erleichtern die Zusammenarbeit.</p>

      <h2>Nächste Schritte</h2>
      <p>Wählen Sie 2–3 Strategien und implementieren Sie diese bei Ihren Top-5-Kunden. Mehr im <a href="/__LANG__/blog/client-management-guide-small-business">Kundenmanagement-Leitfaden</a>.</p>
    `
  },
  {
    slug: 'the-basics-of-small-business-accounting',
    title: 'Grundlagen der Buchhaltung für Kleinunternehmen',
    excerpt: 'Die wichtigsten Buchhaltungsprinzipien für jeden Unternehmer verständlich erklärt.',
    category: 'Small Business',
    tags: ['Buchhaltung', 'Kleinunternehmen', 'Buchführung', 'Finanzberichte'],
    author: defaultAuthor,
    date: '2023-11-20',
    dateModified: '2026-01-30',
    readTime: '9 Min. Lesezeit',
    featuredImage: '/images/blog/accounting-books-basics.jpg',
    featuredImageAlt: 'Buchhaltungsgrundlagen für Kleinunternehmer',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['Buchhaltung Kleinunternehmen', 'Buchführung Grundlagen', 'Finanzberichte'],
    priority: 'P1',
    content: `
      <p>Buchhaltung mag einschüchternd wirken, aber die Grundlagen zu verstehen ist entscheidend für ein erfolgreiches Unternehmen.</p>

      <h2>Warum Buchhaltung wichtig ist</h2>
      <ul>
        <li>Fundierte Geschäftsentscheidungen treffen</li>
        <li>Steuerliche Verpflichtungen beim Finanzamt erfüllen</li>
        <li>Die finanzielle Gesundheit Ihres Unternehmens verstehen</li>
        <li>Finanzierung und Kredite erhalten</li>
      </ul>

      <h2>Die drei wichtigsten Finanzberichte</h2>
      <h3>Gewinn- und Verlustrechnung (GuV)</h3>
      <p>Zeigt Einnahmen, Ausgaben und Gewinn über einen Zeitraum. In Deutschland nach HGB oder EÜR.</p>

      <h3>Bilanz</h3>
      <p>Momentaufnahme von Vermögen, Schulden und Eigenkapital.</p>

      <h3>Kapitalflussrechnung</h3>
      <p>Verfolgt tatsächliche Geldbewegungen — entscheidend für die Liquiditätsplanung.</p>

      <h2>Buchhaltung selbst machen oder auslagern?</h2>
      <p>Für grundlegende Buchführung reicht oft eine <a href="/__LANG__/accounting">Buchhaltungssoftware</a>. Für Steuererklärung und Compliance empfiehlt sich ein Steuerberater.</p>

      <h2>Nächste Schritte</h2>
      <p>Starten Sie mit einem separaten Geschäftskonto und wählen Sie eine Buchhaltungsmethode. Mehr in unserem vollständigen <a href="/__LANG__/blog/small-business-accounting-guide">Buchhaltungsleitfaden</a>.</p>
    `
  },
  {
    slug: 'accounting-101-small-business-owners',
    title: 'Buchhaltung 101 für Kleinunternehmer',
    excerpt: 'Die wesentlichen Buchhaltungskonzepte, die jeder Unternehmer braucht — verständlich erklärt.',
    category: 'Small Business',
    tags: ['Buchhaltung Grundlagen', 'Kleinunternehmen Buchhaltung', 'Buchführung'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '11 Min. Lesezeit',
    featuredImage: '/images/blog/accounting-basics-101.jpg',
    featuredImageAlt: 'Buchhaltungslehrbuch mit Brille und Stift auf dem Schreibtisch',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['Buchhaltung Grundlagen', 'Buchhaltung 101', 'Buchhaltung für Anfänger'],
    priority: 'P1',
    content: `
      <p>Sie müssen kein Buchhalter sein, um Ihr Unternehmen finanziell zu führen. Die grundlegenden Konzepte zu verstehen gibt Ihnen die Kontrolle über Ihre Finanzen.</p>

      <h2>Die Grundgleichung der Buchhaltung</h2>
      <p><strong>Vermögen = Schulden + Eigenkapital</strong></p>
      <p>Alles in der Buchhaltung basiert auf dieser Gleichung. Jede Transaktion beeinflusst mindestens zwei Konten.</p>

      <h2>Wichtige Buchhaltungsbegriffe</h2>
      <ul>
        <li><strong>Einnahmen (Umsatz):</strong> Geld, das Sie durch Ihre Geschäftstätigkeit verdienen</li>
        <li><strong>Ausgaben:</strong> Kosten für den Betrieb Ihres Unternehmens</li>
        <li><strong>Gewinn:</strong> Einnahmen minus Ausgaben</li>
        <li><strong>Forderungen:</strong> Geld, das Ihnen Kunden schulden</li>
        <li><strong>Verbindlichkeiten:</strong> Geld, das Sie Lieferanten schulden</li>
      </ul>

      <h2>Kontenrahmen einrichten</h2>
      <p>In Deutschland wird typischerweise der SKR 03 oder SKR 04 verwendet. Dieser organisiert alle Konten in Kategorien: Anlagevermögen, Umlaufvermögen, Eigenkapital, Erträge und Aufwendungen.</p>

      <h2>Einnahmen-Überschuss-Rechnung (EÜR) vs. doppelte Buchführung</h2>
      <p>Kleinunternehmer und Freiberufler können die einfachere EÜR nutzen. Kapitalgesellschaften (GmbH, AG) müssen doppelte Buchführung nach HGB führen.</p>

      <h2>Nächste Schritte</h2>
      <p>Richten Sie eine <a href="/__LANG__/accounting">Buchhaltungssoftware</a> ein und beginnen Sie, jede Transaktion zu erfassen. Mehr Details in unserem <a href="/__LANG__/blog/small-business-accounting-guide">vollständigen Buchhaltungsleitfaden</a>.</p>
    `
  },
  {
    slug: 'how-to-create-a-budget-for-your-small-business',
    title: 'Budget erstellen für Ihr Kleinunternehmen: Schritt für Schritt',
    excerpt: 'Eine Schritt-für-Schritt-Anleitung zur Erstellung eines effektiven Geschäftsbudgets, das Ihnen bei der Planung und Cashflow-Steuerung hilft.',
    category: 'Small Business',
    tags: ['Budget', 'Finanzplanung', 'Kleinunternehmen', 'Cashflow'],
    author: defaultAuthor,
    date: '2023-12-01',
    readTime: '8 Min. Lesezeit',
    featuredImage: '/images/blog/budget-planning.jpg',
    featuredImageAlt: 'Budgetplanung für Kleinunternehmen',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['Geschäftsbudget', 'Budget erstellen', 'Finanzplanung Kleinunternehmen'],
    priority: 'P1',
    content: `
      <p>Ein Budget ist Ihre finanzielle Landkarte. Es zeigt, wohin Ihr Geld fließt, hilft bei der Planung und verhindert unangenehme Überraschungen.</p>

      <h2>Warum ein Budget wichtig ist</h2>
      <ul>
        <li>Ausgaben kontrollieren und Überausgaben vermeiden</li>
        <li>Für Investitionen und Wachstum planen</li>
        <li>Steuervorauszahlungen kalkulieren</li>
        <li>Finanzielle Ziele setzen und verfolgen</li>
      </ul>

      <h2>Budget in 5 Schritten erstellen</h2>
      <h3>Schritt 1: Einnahmen erfassen</h3>
      <p>Listen Sie alle erwarteten Einnahmequellen auf: Projektarbeit, Retainer, passive Einnahmen.</p>

      <h3>Schritt 2: Fixkosten auflisten</h3>
      <p>Miete, Versicherungen, Software-Abos, Steuerberater, Kreditraten.</p>

      <h3>Schritt 3: Variable Kosten schätzen</h3>
      <p>Marketing, Reisen, Weiterbildung, Büromaterial, Bewirtung.</p>

      <h3>Schritt 4: Gewinnmarge einplanen</h3>
      <p>Planen Sie mindestens 10–20 % als Gewinn ein — kein Restbetrag, sondern geplanter Posten.</p>

      <h3>Schritt 5: Monatlich überprüfen</h3>
      <p>Vergleichen Sie Plan mit Ist und passen Sie vierteljährlich an.</p>

      <h2>Nächste Schritte</h2>
      <p>Starten Sie mit einer einfachen Tabelle oder nutzen Sie <a href="/__LANG__/accounting">Buchhaltungssoftware</a> für automatische Berichte. Mehr zur Finanzplanung in unserem Leitfaden zu <a href="/__LANG__/blog/profit-margins-how-to-calculate-and-improve">Gewinnmargen</a>.</p>
    `
  },
  {
    slug: 'diy-small-business-accounting',
    title: 'Buchhaltung selbst machen? Ein praktischer Leitfaden',
    excerpt: 'Sollten Sie Ihre Buchhaltung selbst erledigen oder einen Steuerberater beauftragen? Ehrliche Tipps, wann DIY funktioniert.',
    category: 'Small Business',
    tags: ['DIY Buchhaltung', 'Kleinunternehmen Buchhaltung', 'Steuerberater'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '8 Min. Lesezeit',
    featuredImage: '/blog/diy-accounting-guide.jpg',
    featuredImageAlt: 'Selbstständige Buchhaltung am Schreibtisch',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['Buchhaltung selbst machen', 'DIY Buchhaltung', 'Buchhaltung ohne Steuerberater'],
    priority: 'P2',
    content: `
      <p>Viele Gründer fragen sich: Kann ich meine Buchhaltung selbst machen? Die Antwort: Ja — mit Einschränkungen. In Deutschland können Freiberufler und Kleingewerbetreibende vieles selbst erledigen, wenn sie die richtigen Tools nutzen.</p>

      <h2>Was Sie selbst machen können</h2>
      <ul>
        <li>Tägliche Buchführung mit <a href="/__LANG__/accounting">Buchhaltungssoftware</a></li>
        <li>Rechnungen erstellen und versenden über <a href="/__LANG__/invoicing">Invoicemonk</a></li>
        <li>Belege digitalisieren und kategorisieren</li>
        <li>Einnahmen-Überschuss-Rechnung (EÜR) erstellen</li>
        <li>Umsatzsteuervoranmeldung via ELSTER</li>
      </ul>

      <h2>Wann Sie einen Steuerberater brauchen</h2>
      <ul>
        <li>Bei Gründung einer GmbH oder UG (Bilanzierungspflicht)</li>
        <li>Bei komplexen Steuerfragen (z. B. internationale Geschäfte)</li>
        <li>Für die jährliche Steuererklärung</li>
        <li>Bei einer Betriebsprüfung durch das Finanzamt</li>
        <li>Wenn Fehler mehr kosten würden als der Steuerberater</li>
      </ul>

      <h2>Kosten: DIY vs. Steuerberater</h2>
      <p>Software kostet 10–50 €/Monat. Ein Steuerberater berechnet nach der StBVV (Steuerberatervergütungsverordnung), typisch 100–300 €/Monat für laufende Buchführung. Bewerten Sie den Zeitaufwand gegen die Kosten.</p>

      <h2>Nächste Schritte</h2>
      <p>Starten Sie mit den Grundlagen selbst und holen Sie sich professionelle Hilfe für die Steuererklärung. Mehr im <a href="/__LANG__/blog/small-business-accounting-guide">vollständigen Buchhaltungsleitfaden</a>.</p>
    `
  }
];

registerBlogPosts('de', posts);
