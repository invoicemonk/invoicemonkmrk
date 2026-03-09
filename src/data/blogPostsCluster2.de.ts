import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 11: Invoicing Mastery cluster posts — German translations
 */
const posts: BlogPost[] = [
  {
    slug: 'invoice-numbering-best-practices',
    title: 'Rechnungsnummern: Best Practices für Systeme, die mitwachsen',
    excerpt: 'Lernen Sie, wie Sie ein Rechnungsnummernsystem erstellen, das Ihre Finanzen organisiert hält, Compliance unterstützt und mit Ihrem Unternehmen skaliert.',
    category: 'Invoicing and Billing Tips',
    tags: ['Rechnungsstellung', 'Rechnungsnummern', 'Organisation', 'Buchhaltung', 'Compliance'],
    author: defaultAuthor, date: '2026-01-29', readTime: '7 Min. Lesezeit',
    featuredImage: '/images/blog/invoice-numbering.jpg',
    featuredImageAlt: 'Rechnungsnummernsysteme für Unternehmen',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['Rechnungsnummer', 'Rechnungsnummerformat', 'fortlaufende Rechnung', 'Rechnungsorganisation'],
    priority: 'P2',
    content: `
      <p>Ein durchdachtes Rechnungsnummernsystem ist das Rückgrat geordneter Unternehmensfinanzen. Es hilft Ihnen, Zahlungen nachzuverfolgen, Compliance einzuhalten und prüfungssichere Aufzeichnungen zu führen.</p>
      <h2>Warum Rechnungsnummern wichtiger sind als gedacht</h2>
      <ul>
        <li><strong>Eindeutige Identifikation:</strong> Jede Rechnung braucht eine eigene Kennung für Kommunikation und Zahlungsverfolgung</li>
        <li><strong>Gesetzliche Pflicht:</strong> Die meisten Finanzbehörden verlangen fortlaufende, eindeutige Rechnungsnummern</li>
        <li><strong>Zahlungszuordnung:</strong> Eingänge schnell der richtigen Rechnung zuordnen</li>
        <li><strong>Prüfungsbereitschaft:</strong> Prüfer erwarten ein logisches, lückenloses System</li>
      </ul>
      <h2>Beliebte Nummernsysteme</h2>
      <h3>Fortlaufende Nummerierung</h3>
      <p>Einfachster Ansatz: Start bei 001, pro Rechnung +1. Format: INV-001, INV-002.</p>
      <p><strong>Am besten für:</strong> Kleine Unternehmen mit geringem Rechnungsvolumen.</p>
      <h3>Datumsbasierte Nummerierung</h3>
      <p>Jahr, Monat oder volles Datum einbeziehen. Format: 2026-01-001.</p>
      <p><strong>Am besten für:</strong> Unternehmen, die schnell erkennen möchten, wann eine Rechnung erstellt wurde.</p>
      <h3>Kundencodierte Nummerierung</h3>
      <p>Kundenkürzel einbauen. Format: ABC-001, ACME-003.</p>
      <p><strong>Am besten für:</strong> Dienstleister mit Stammkunden.</p>
      <h3>Projektbasierte Nummerierung</h3>
      <p>Projektcodes verwenden. Format: PROJ-A-001.</p>
      <p><strong>Am besten für:</strong> Agenturen und Berater mit definierten Projekten.</p>
      <h3>Hybrid-Systeme</h3>
      <p>Elemente kombinieren. Format: 2026-ABC-001. <strong>Am besten für:</strong> Wachsende Unternehmen mit <a href="/invoicing">Rechnungssoftware</a>.</p>
      <h2>Regeln für effektive Rechnungsnummern</h2>
      <ol>
        <li><strong>Niemals Nummern wiederverwenden</strong></li>
        <li><strong>Führende Nullen nutzen:</strong> 001 statt 1</li>
        <li><strong>Sonderzeichen vermeiden:</strong> Nur Zahlen, Buchstaben, Bindestriche</li>
        <li><strong>System dokumentieren</strong></li>
        <li><strong>Für Wachstum planen</strong></li>
      </ol>
      <h2>Stornierte Rechnungen handhaben</h2>
      <p>Niemals löschen oder Nummern wiederverwenden. Stattdessen als „Storniert" markieren und eine neue Rechnung mit der nächsten Nummer ausstellen.</p>
      <h2>Software die Komplexität überlassen</h2>
      <p><a href="/invoicing">Professionelle Rechnungssoftware</a> generiert fortlaufende Nummern automatisch, verhindert Duplikate und führt prüfungssichere Aufzeichnungen.</p>
      <p>Mehr dazu in unserem <a href="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners">Leitfaden zu wesentlichen Rechnungselementen</a>.</p>
    `
  },
  {
    slug: 'how-to-write-invoice-payment-terms',
    title: 'Zahlungsbedingungen auf Rechnungen schreiben, die zum Bezahlen motivieren',
    excerpt: 'Klare Zahlungsbedingungen sind entscheidend für pünktliche Zahlung. So formulieren Sie Bedingungen, die Ihr Unternehmen schützen und schnelle Zahlung fördern.',
    category: 'Invoicing and Billing Tips',
    tags: ['Rechnungsstellung', 'Zahlungsbedingungen', 'Net 30', 'Zahlungsrichtlinien', 'Cashflow'],
    author: defaultAuthor, date: '2026-01-28', readTime: '8 Min. Lesezeit',
    featuredImage: '/images/blog/invoice-payment-terms.jpg',
    featuredImageAlt: 'Effektive Zahlungsbedingungen auf Rechnungen',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['Zahlungsbedingungen', 'Net 30', 'Rechnungsbedingungen', 'Sofort fällig', 'Verzugszinsen'],
    priority: 'P2',
    content: `
      <p>Zahlungsbedingungen definieren, wann und wie Sie bezahlt werden möchten. Gut formulierte Bedingungen setzen klare Erwartungen und helfen Ihnen, schneller bezahlt zu werden.</p>
      <h2>Warum Zahlungsbedingungen wichtig sind</h2>
      <ul>
        <li>Klare Erwartungen beim Kunden setzen</li>
        <li>Rechtliche Grundlage bei Verzug</li>
        <li>Bessere Cashflow-Prognose</li>
        <li>Professionelles Auftreten</li>
        <li>Anreize für schnellere Zahlung</li>
      </ul>
      <h2>Gängige Zahlungsbedingungen</h2>
      <h3>Sofort fällig (Due on Receipt)</h3>
      <p>Zahlung sofort bei Rechnungseingang. Geeignet für Einzelkäufe oder Kunden mit schlechter Zahlungshistorie.</p>
      <h3>Net 15 / Net 30 / Net 60</h3>
      <ul>
        <li><strong>Net 15:</strong> Zunehmend beliebt bei Freelancern</li>
        <li><strong>Net 30:</strong> Geschäftsstandard</li>
        <li><strong>Net 60:</strong> Oft von Großunternehmen verlangt</li>
      </ul>
      <h3>Skonto (2/10 Net 30)</h3>
      <p>2 % Nachlass bei Zahlung innerhalb von 10 Tagen, sonst voller Betrag in 30 Tagen.</p>
      <h3>Anzahlung + Meilensteinzahlungen</h3>
      <p>Für größere Projekte: z. B. 30 % Anzahlung, 30 % bei Halbzeit, 40 % bei Abschluss.</p>
      <h2>Was Zahlungsbedingungen enthalten sollten</h2>
      <ol>
        <li><strong>Fälligkeitsdatum:</strong> Konkretes Datum, nicht nur „in 30 Tagen"</li>
        <li><strong>Akzeptierte Zahlungsmethoden</strong></li>
        <li><strong>Zahlungsdetails:</strong> Kontonummern oder Zahlungslinks</li>
        <li><strong>Währung</strong></li>
        <li><strong>Verzugsgebühren:</strong> Falls anwendbar</li>
        <li><strong>Skonto-Konditionen:</strong> Falls angeboten</li>
      </ol>
      <h2>Verzugsgebühren: Ja oder Nein?</h2>
      <ul>
        <li><strong>Pauschale:</strong> z. B. 25 € Mahngebühr nach 30 Tagen</li>
        <li><strong>Prozentsatz:</strong> 1,5 % monatlich auf überfällige Beträge</li>
        <li><strong>Gestaffelt:</strong> 1 % nach 30 Tagen, 2 % nach 60 Tagen</li>
      </ul>
      <p><strong>Wichtig:</strong> Lokale Vorschriften beachten. In Deutschland gelten die gesetzlichen Verzugszinsen nach BGB.</p>
      <h2>Tipps für höhere Zahlungsraten</h2>
      <ul>
        <li>Konkretes Fälligkeitsdatum statt „Net 30"</li>
        <li>Direkte Zahlungslinks einbinden</li>
        <li>Fälligkeitsdatum prominent platzieren</li>
        <li>Vor dem Fälligkeitsdatum erinnern</li>
      </ul>
      <p>Setzen Sie Ihre Bedingungen mit <a href="/invoicing">professioneller Rechnungssoftware</a> automatisch um.</p>
    `
  },
  {
    slug: 'recurring-invoices-automating-billing',
    title: 'Wiederkehrende Rechnungen einrichten: Abrechnung für Retainer und Abonnements automatisieren',
    excerpt: 'Schritt-für-Schritt-Anleitung zur Automatisierung wiederkehrender Rechnungen. Best Practices für Retainer, Abo-Kunden und Monatsverträge.',
    category: 'Invoicing and Billing Tips',
    tags: ['Rechnungsstellung', 'Wiederkehrende Rechnungen', 'Automatisierung', 'Abonnements', 'Retainer'],
    author: defaultAuthor, date: '2026-01-27', dateModified: '2026-02-19', readTime: '7 Min. Lesezeit',
    featuredImage: '/images/blog/recurring-invoices.jpg',
    featuredImageAlt: 'Automatisierter Workflow für wiederkehrende Rechnungen',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['wiederkehrende Rechnungen', 'automatisierte Abrechnung', 'Abo-Abrechnung'],
    priority: 'P2',
    relatedTools: [
      { label: 'Wiederkehrende Abrechnung', url: '/use-cases/recurring-billing', description: 'Abrechnungszyklus automatisieren' },
      { label: 'Rechnungssoftware', url: '/invoicing', description: 'Professionelle Rechnungen erstellen' },
    ],
    content: `
      <p>Wenn Sie Kunden haben, die regelmäßig denselben Betrag zahlen, ist manuelles Erstellen von Rechnungen Zeitverschwendung. Wiederkehrende Rechnungen automatisieren diesen Prozess.</p>
      <h2>Was sind wiederkehrende Rechnungen?</h2>
      <p>Rechnungen, die automatisch in festgelegten Intervallen erstellt und versendet werden — wöchentlich, monatlich, quartalsweise oder jährlich.</p>
      <h2>Wann wiederkehrende Rechnungen nutzen?</h2>
      <ul>
        <li><strong>Monatliche Retainer:</strong> Berater, Agenturen, Steuerberater</li>
        <li><strong>Abonnements:</strong> SaaS-Produkte, Mitgliedschaften</li>
        <li><strong>Wartungsverträge:</strong> IT-Support, Gebäudemanagement</li>
        <li><strong>Mietverhältnisse:</strong> Büroräume, Ausrüstung</li>
      </ul>
      <h2>Einrichtung</h2>
      <ol>
        <li>Kundeninformationen und Kontaktdaten eingeben</li>
        <li>Leistungen und Beträge definieren</li>
        <li>Abrechnungsintervall festlegen</li>
        <li>Zahlungsbedingungen konfigurieren</li>
        <li>Automatische Erinnerungen aktivieren</li>
      </ol>
      <h2>Best Practices</h2>
      <ul>
        <li>Kunden vor der ersten automatischen Rechnung informieren</li>
        <li>Preisanpassungen mindestens 30 Tage im Voraus ankündigen</li>
        <li>Automatische Erinnerungen bei überfälligen Zahlungen einrichten</li>
        <li>Regelmäßig prüfen, ob Leistungen und Beträge noch aktuell sind</li>
      </ul>
      <p>Mehr zu Rechnungs-Best-Practices in unserem <a href="/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently">Leitfaden zur pünktlichen Rechnungsstellung</a>.</p>
    `
  },
  {
    slug: 'invoice-disputes-how-to-handle-professionally',
    title: 'Rechnungsstreitigkeiten professionell lösen (Vorlagen und Skripte)',
    excerpt: 'Kunde widerspricht der Rechnung? Schritt-für-Schritt-Prozess zur professionellen Beilegung mit E-Mail-Vorlagen und Gesprächsleitfäden.',
    category: 'Invoicing and Billing Tips',
    tags: ['Rechnungsstellung', 'Streitigkeiten', 'Kundenbeziehungen', 'Konfliktlösung'],
    author: defaultAuthor, date: '2026-01-26', readTime: '8 Min. Lesezeit',
    featuredImage: '/images/blog/invoice-disputes.jpg',
    featuredImageAlt: 'Professionelle Lösung von Rechnungsstreitigkeiten',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['Rechnungsstreitigkeiten', 'Abrechnungskonflikte', 'Kundenmeinungsverschiedenheit'],
    priority: 'P3',
    content: `
      <p>Rechnungsstreitigkeiten sind unangenehm, aber unvermeidlich. Wie Sie damit umgehen, entscheidet, ob Sie bezahlt werden und ob die Kundenbeziehung bestehen bleibt.</p>
      <h2>Warum Streitigkeiten entstehen</h2>
      <ul>
        <li><strong>Leistungsumfang-Missverständnis:</strong> Der Kunde erwartete etwas anderes</li>
        <li><strong>Preisdifferenzen:</strong> Endbetrag höher als erwartet</li>
        <li><strong>Qualitätsbedenken:</strong> Unzufriedenheit mit dem Ergebnis</li>
        <li><strong>Zeitliche Probleme:</strong> Verspätete Lieferung</li>
        <li><strong>Einfache Fehler:</strong> Rechenfehler oder Doppelberechnung</li>
      </ul>
      <h2>Schritt-für-Schritt-Lösungsprozess</h2>
      <ol>
        <li><strong>Zuhören:</strong> Dem Kunden zuhören, ohne zu unterbrechen</li>
        <li><strong>Dokumentieren:</strong> Alles schriftlich festhalten</li>
        <li><strong>Prüfen:</strong> Rechnung und Vereinbarungen überprüfen</li>
        <li><strong>Reagieren:</strong> Sachlich und professionell antworten</li>
        <li><strong>Lösung anbieten:</strong> Gutschrift, Teilzahlung oder Kompromiss</li>
      </ol>
      <h2>Häufige Einwände und Antworten</h2>
      <h3>„Die Arbeit war nicht wie vereinbart"</h3>
      <p>Auf den ursprünglichen Vertrag oder die E-Mail-Absprache verweisen. Bei berechtigter Kritik eine Gutschrift anbieten.</p>
      <h3>„Der Betrag ist zu hoch"</h3>
      <p>Detailliert aufschlüsseln, was die Kosten verursacht hat. Dokumentation von Zusatzarbeiten vorlegen.</p>
      <h2>Streitigkeiten vorbeugen</h2>
      <ul>
        <li>Detaillierte Angebote mit klarem Leistungsumfang</li>
        <li>Änderungen immer schriftlich bestätigen lassen</li>
        <li>Aufgeschlüsselte Rechnungen mit <a href="/invoicing">Rechnungssoftware</a> erstellen</li>
        <li>Regelmäßige Statusupdates während des Projekts</li>
      </ul>
      <p>Weitere Tipps in unserem <a href="/blog/credit-notes-and-invoice-corrections">Leitfaden zu Gutschriften und Korrekturen</a>.</p>
    `
  },
  {
    slug: 'credit-notes-and-invoice-corrections',
    title: 'Gutschriften und Rechnungskorrekturen: Wann und wie verwenden (Leitfaden 2026)',
    excerpt: 'Was ist eine Gutschrift? Wann ausstellen statt Erstattung? Schritt-für-Schritt-Anleitung mit Beispielen — Gutschrift vs. Storno, steuerliche Auswirkungen und Best Practices.',
    category: 'Invoicing and Billing Tips',
    tags: ['Rechnungsstellung', 'Gutschriften', 'Korrekturen', 'Compliance'],
    author: defaultAuthor, date: '2026-01-25', dateModified: '2026-02-19', readTime: '6 Min. Lesezeit',
    featuredImage: '/images/blog/credit-notes-corrections.jpg',
    featuredImageAlt: 'Gutschrift auf Rechnung für Abrechnungskorrekturen',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['Gutschrift', 'Rechnungskorrektur', 'Stornorechnung', 'Abrechnungskorrektur'],
    priority: 'P2',
    content: `
      <p>Rechnungsfehler passieren. Eine Gutschrift ist das professionelle Werkzeug, um Fehler zu korrigieren, ohne die Originalrechnung zu löschen und damit die Buchführung zu beschädigen.</p>
      <h2>Was ist eine Gutschrift?</h2>
      <p>Eine Gutschrift (auch Stornorechnung) ist ein Dokument, das den Betrag einer bereits ausgestellten Rechnung ganz oder teilweise reduziert. Sie verweist auf die Originalrechnung und sorgt für eine saubere Buchführung.</p>
      <h2>Wann eine Gutschrift ausstellen?</h2>
      <ul>
        <li><strong>Retouren:</strong> Waren werden zurückgeschickt</li>
        <li><strong>Teillieferung:</strong> Weniger als vereinbart geliefert</li>
        <li><strong>Rechnungsfehler:</strong> Falsche Beträge, Mengen oder Posten</li>
        <li><strong>Nachträglicher Rabatt:</strong> Vereinbarter Nachlass nach Rechnungsstellung</li>
        <li><strong>Stornierung:</strong> Auftrag wird komplett storniert</li>
      </ul>
      <h2>Gutschrift vs. Storno vs. Erstattung</h2>
      <ul>
        <li><strong>Gutschrift:</strong> Reduziert den offenen Betrag — kann mit zukünftigen Rechnungen verrechnet werden</li>
        <li><strong>Storno:</strong> Annulliert die Originalrechnung vollständig</li>
        <li><strong>Erstattung:</strong> Tatsächliche Rückzahlung bereits erhaltenen Geldes</li>
      </ul>
      <h2>Pflichtangaben einer Gutschrift</h2>
      <ul>
        <li>Eigene fortlaufende Gutschriftnummer</li>
        <li>Referenz zur Originalrechnung</li>
        <li>Datum der Ausstellung</li>
        <li>Beschreibung des Korrekturgrundes</li>
        <li>Korrigierter Betrag inklusive Steueranpassung</li>
      </ul>
      <h2>Steuerliche Auswirkungen</h2>
      <p>Gutschriften reduzieren die Umsatzsteuerschuld für den Abrechnungszeitraum. Die Steuerkorrektur muss separat ausgewiesen werden. Belege mindestens 10 Jahre aufbewahren (GoBD).</p>
      <h2>Häufige Fehler vermeiden</h2>
      <ul>
        <li>Keine Referenz zur Originalrechnung</li>
        <li>Falsche Steuerberechnung</li>
        <li>Fehlende Dokumentation des Grundes</li>
        <li>Verspätete Ausstellung</li>
      </ul>
      <p>Mit <a href="/invoicing">Invoicemonk</a> erstellen Sie Gutschriften mit einem Klick direkt aus der Originalrechnung.</p>
    `
  }
];

registerBlogPosts('de', posts);
