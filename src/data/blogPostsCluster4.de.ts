import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 13a: Estimates & Proposals cluster posts — German translations
 */
const posts: BlogPost[] = [
  {
    slug: 'proposal-vs-estimate-vs-quote-explained',
    title: 'Angebot vs. Kostenvoranschlag vs. Preisanfrage: Was ist der Unterschied?',
    excerpt: 'Verwirrt über Angebote, Kostenvoranschläge und Preisanfragen? Lernen Sie die wichtigsten Unterschiede, wann Sie welches Dokument verwenden und wie sie Ihre Kundenbeziehungen beeinflussen.',
    category: 'Estimates and Proposals',
    tags: ['Angebote', 'Kostenvoranschläge', 'Preisanfragen', 'Geschäftsdokumente', 'Kundenmanagement', 'Preisgestaltung'],
    author: defaultAuthor, date: '2025-12-01', dateModified: '2026-02-04', readTime: '8 Min. Lesezeit',
    featuredImage: '/blog/proposal-vs-quote.jpg',
    featuredImageAlt: 'Angebot, Kostenvoranschlag und Preisanfrage im Vergleich',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['Angebot vs Kostenvoranschlag', 'Kostenvoranschlag vs Preisanfrage', 'Geschäftsangebot', 'Preisanfrage', 'Kostenabschätzung'],
    priority: 'P2',
    content: `
      <p>Angebote, Kostenvoranschläge und Preisanfragen — viele Unternehmer verwenden diese Begriffe synonym, aber sie sind tatsächlich unterschiedliche Dokumente mit verschiedenen Zwecken, rechtlichen Auswirkungen und Einsatzgebieten.</p>
      <p>Das falsche Dokument zu verwenden kann zu Scope Creep, Preisstreitigkeiten und verlorenen Kunden führen. Dieser Leitfaden klärt die Unterschiede, damit Sie immer das richtige Dokument senden.</p>

      <h2>Schnellvergleich</h2>
      <table>
        <thead>
          <tr><th>Merkmal</th><th>Angebot (Proposal)</th><th>Kostenvoranschlag</th><th>Preisanfrage (Quote)</th></tr>
        </thead>
        <tbody>
          <tr><td>Zweck</td><td>Überzeugen und verkaufen</td><td>Ungefähre Kosten</td><td>Festpreisangebot</td></tr>
          <tr><td>Preisbindend?</td><td>Nein</td><td>Nein</td><td>In der Regel ja</td></tr>
          <tr><td>Detailgrad</td><td>Hoch (Strategie + Preis)</td><td>Moderat</td><td>Spezifische Positionen</td></tr>
          <tr><td>Umfang enthalten?</td><td>Detaillierter Umfang + Ansatz</td><td>Kurzer Umfang</td><td>Spezifische Leistungen</td></tr>
          <tr><td>Typische Länge</td><td>2–10 Seiten</td><td>1–2 Seiten</td><td>1 Seite</td></tr>
          <tr><td>Gültigkeitsdauer</td><td>Typisch 30 Tage</td><td>Typisch 30 Tage</td><td>14–30 Tage</td></tr>
        </tbody>
      </table>

      <h2>Was ist ein Angebot (Proposal)?</h2>
      <p>Ein Angebot ist ein umfassendes Dokument, das einen Kunden überzeugen soll, Sie zu beauftragen. Es geht über den Preis hinaus und zeigt Ihren Ansatz, Ihre Expertise und warum Sie die beste Wahl sind.</p>
      <p>Ein gutes Angebot umfasst: eine Zusammenfassung, Problemanalyse, vorgeschlagene Lösung, Zeitplan, Preis, Fallstudien und Handlungsaufforderung.</p>

      <h2>Was ist ein Kostenvoranschlag?</h2>
      <p>Ein Kostenvoranschlag gibt eine ungefähre Kostenschätzung für ein Projekt. Er ist nicht verbindlich und kann sich ändern, wenn der Projektumfang klarer wird.</p>
      <p>Verwenden Sie Kostenvoranschläge in frühen Gesprächen, wenn der genaue Umfang noch nicht feststeht.</p>

      <h2>Was ist eine Preisanfrage (Quote)?</h2>
      <p>Eine Preisanfrage ist ein verbindliches Festpreisangebot für eine definierte Leistung. Sobald ein Kunde die Preisanfrage akzeptiert, sind Sie verpflichtet, zum genannten Preis zu liefern.</p>
      <p>Fügen Sie immer ein Ablaufdatum hinzu und definieren Sie den Umfang klar, um sich abzusichern.</p>

      <h2>Rechtliche Unterschiede</h2>
      <ul>
        <li><strong>Angebote:</strong> Im Allgemeinen nicht bindend, sofern nicht ausdrücklich angegeben. Sie sind Einladungen zur Verhandlung.</li>
        <li><strong>Kostenvoranschläge:</strong> Nicht bindend. Sie setzen Erwartungen, erlauben aber Anpassungen.</li>
        <li><strong>Preisanfragen:</strong> In der Regel verbindlich für den Gültigkeitszeitraum. Wenn ein Kunde Ihre Preisanfrage akzeptiert, wird erwartet, dass Sie zum genannten Preis liefern.</li>
      </ul>

      <h2>Das richtige Dokument wählen</h2>
      <ol>
        <li><strong>Kunde fragt „was kostet das ungefähr?":</strong> Senden Sie einen Kostenvoranschlag</li>
        <li><strong>Kunde fragt „was ist der genaue Preis?":</strong> Senden Sie eine Preisanfrage</li>
        <li><strong>Kunde fragt „können Sie bei diesem Projekt helfen?":</strong> Senden Sie ein Angebot</li>
        <li><strong>RFP (Angebotsanforderung):</strong> Immer ein Angebot</li>
        <li><strong>Kleine, definierte Aufgabe:</strong> Eine Preisanfrage reicht in der Regel</li>
      </ol>

      <h2>Dokumente ineinander umwandeln</h2>
      <p>Geschäftsdokumente bauen oft aufeinander auf. Der typische Ablauf: Kostenvoranschlag → Preisanfrage → Rechnung. Ein Angebot kann direkt zur Rechnung führen, wenn der Umfang bereits definiert ist.</p>
      <p>Nutzen Sie <a href="/__LANG__/estimates">Invoicemonk's Kostenvoranschlag-Tools</a>, um Dokumente mit einem Klick in Rechnungen umzuwandeln.</p>
    `,
    faq: [
      { question: 'Ist eine Preisanfrage rechtlich bindend?', answer: 'Im Allgemeinen ja — eine Preisanfrage gilt für den Gültigkeitszeitraum als verbindlich. Sobald ein Kunde den genannten Preis akzeptiert, wird erwartet, dass Sie die vereinbarte Leistung zu diesem Preis erbringen. Deshalb sollten Preisanfragen immer ein Ablaufdatum und eine klare Umfangsdefinition enthalten.' },
      { question: 'Soll ich einem neuen Kunden einen Kostenvoranschlag oder eine Preisanfrage senden?', answer: 'Beginnen Sie bei neuen Kunden mit einem Kostenvoranschlag, wenn der Umfang noch nicht vollständig definiert ist, oder mit einem Angebot, wenn Sie Ihren Ansatz erklären müssen. Wechseln Sie zur formellen Preisanfrage, sobald der Umfang vereinbart ist.' }
    ]
  },
  {
    slug: 'winning-proposal-templates-by-industry',
    title: 'Erfolgreiche Angebotsvorlagen nach Branche: Individuell anpassen für mehr Aufträge',
    excerpt: 'Erhalten Sie branchenspezifische Angebotsvorlagen für Beratung, Design, Marketing, IT und mehr. Lernen Sie, Ihre Angebote anzupassen, um Kunden in jeder Branche zu gewinnen.',
    category: 'Estimates and Proposals',
    tags: ['Angebotsvorlagen', 'Geschäftsangebote', 'Branchenvorlagen', 'Beratungsangebote', 'Kundengewinnung'],
    author: defaultAuthor, date: '2025-10-28', dateModified: '2026-02-04', readTime: '10 Min. Lesezeit',
    featuredImage: '/blog/proposal-templates-industry.jpg',
    featuredImageAlt: 'Stapel professioneller Angebotsvorlagen für verschiedene Branchen',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['Angebotsvorlage', 'Geschäftsangebot Vorlage', 'Beratungsangebot', 'Designangebot'],
    priority: 'P2',
    content: `
      <p>Das perfekte Angebot beginnt mit dem Verständnis Ihrer Branche. Was in der Beratung funktioniert, versagt im Webdesign — und umgekehrt. Dieser Leitfaden bietet bewährte Vorlagen und Tipps für jede Branche.</p>

      <h2>Warum branchenspezifische Angebote besser funktionieren</h2>
      <p>Generische Angebote signalisieren, dass Sie jeden Kunden gleich behandeln. Branchenspezifische Angebote zeigen, dass Sie die einzigartigen Herausforderungen und Erwartungen des Kunden verstehen.</p>

      <h2>Beratungsangebot-Vorlage</h2>
      <h3>Schlüsselelemente</h3>
      <ul>
        <li><strong>Situationsanalyse:</strong> Zeigen Sie tiefes Verständnis der geschäftlichen Herausforderungen</li>
        <li><strong>Methodik:</strong> Erklären Sie Ihr Beratungsframework (Analyse, Empfehlungen, Umsetzung)</li>
        <li><strong>Erwartete Ergebnisse:</strong> Quantifizieren Sie den ROI, wo immer möglich</li>
        <li><strong>Fallstudien:</strong> Ähnliche Kunden mit messbaren Ergebnissen</li>
        <li><strong>Team-Biografien:</strong> Heben Sie relevante Branchenerfahrung hervor</li>
      </ul>

      <h2>Webdesign / Entwicklung Vorlage</h2>
      <h3>Schlüsselelemente</h3>
      <ul>
        <li><strong>Website-Audit:</strong> Kurze Analyse, was funktioniert und was nicht</li>
        <li><strong>Design-Richtung:</strong> Moodboards oder Stilreferenzen</li>
        <li><strong>Technische Spezifikationen:</strong> Plattform, Funktionen, Integrationen</li>
        <li><strong>Content-Plan:</strong> Wer liefert Inhalte und in welchem Format</li>
        <li><strong>Launch-Plan:</strong> Tests, Migration und Support nach dem Launch</li>
      </ul>

      <h2>Marketing / Content Vorlage</h2>
      <ul>
        <li><strong>Marktforschung:</strong> Wettbewerbslandschaft und Chancen</li>
        <li><strong>Strategieüberblick:</strong> Kanäle, Botschaften und Zielgruppen</li>
        <li><strong>Content-Kalender:</strong> Beispielmonat mit geplanten Inhalten</li>
        <li><strong>KPIs:</strong> Spezifische, messbare Ziele und Tracking-Methoden</li>
      </ul>

      <h2>IT / Technische Dienstleistungen</h2>
      <ul>
        <li><strong>Infrastruktur-Assessment:</strong> Aktueller Stand der Technik</li>
        <li><strong>Vorgeschlagene Lösung:</strong> Technische Architektur und Komponenten</li>
        <li><strong>Sicherheitsaspekte:</strong> Datenschutz und Compliance-Maßnahmen</li>
        <li><strong>Migrationsplan:</strong> Umstellung ohne Unterbrechung</li>
        <li><strong>SLAs:</strong> Service Level Agreements und Supportbedingungen</li>
      </ul>

      <p>Erstellen Sie professionelle Angebote mit <a href="/__LANG__/estimates">Invoicemonk</a> und wandeln Sie diese mit einem Klick in Rechnungen um.</p>
    `,
    faq: [
      { question: 'Wie lang sollte ein Geschäftsangebot sein?', answer: 'Die meisten effektiven Angebote umfassen 3-8 Seiten. Einfache Projekte benötigen 2-3 Seiten; komplexe Unternehmensprojekte können 10+ Seiten erfordern. Jeder Abschnitt sollte einen Mehrwert bieten.' },
      { question: 'Sollte ich für jeden Kunden dieselbe Vorlage verwenden?', answer: 'Nein. Obwohl eine Basisvorlage Zeit spart, sollte jedes Angebot für den spezifischen Kunden und die Branche angepasst werden. Personalisieren Sie Zusammenfassung, Fallstudien und Terminologie.' }
    ]
  },
  {
    slug: 'document-types-comparison-business',
    title: 'Geschäftsdokumente im Vergleich: Rechnungen, Quittungen, Bestellungen und mehr',
    excerpt: 'Verstehen Sie die Unterschiede zwischen Rechnungen, Quittungen, Bestellungen, Gutschriften und anderen Geschäftsdokumenten. Lernen Sie, wann Sie welches verwenden.',
    category: 'Estimates and Proposals',
    tags: ['Geschäftsdokumente', 'Rechnungen', 'Quittungen', 'Bestellungen', 'Gutschriften'],
    author: defaultAuthor, date: '2025-09-18', dateModified: '2026-02-04', readTime: '9 Min. Lesezeit',
    featuredImage: '/blog/business-documents-comparison.jpg',
    featuredImageAlt: 'Verschiedene Geschäftsdokumente im Vergleich',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['Geschäftsdokumente Vergleich', 'Rechnung vs Quittung', 'Bestellung vs Rechnung'],
    priority: 'P2',
    content: `
      <p>Das Verständnis verschiedener Geschäftsdokumente ist entscheidend für ordnungsgemäße Buchhaltung und Compliance. Dieser Leitfaden erklärt jedes Dokument und wann Sie es verwenden sollten.</p>

      <h2>Übersichtstabelle</h2>
      <table>
        <thead>
          <tr><th>Dokument</th><th>Erstellt von</th><th>Zweck</th><th>Rechtlich bindend?</th></tr>
        </thead>
        <tbody>
          <tr><td>Rechnung</td><td>Verkäufer</td><td>Zahlungsaufforderung</td><td>Ja</td></tr>
          <tr><td>Quittung</td><td>Verkäufer</td><td>Zahlungsbestätigung</td><td>Zahlungsnachweis</td></tr>
          <tr><td>Bestellung (PO)</td><td>Käufer</td><td>Kauf autorisieren</td><td>Ja, bei Annahme</td></tr>
          <tr><td>Preisanfrage</td><td>Verkäufer</td><td>Festpreisangebot</td><td>Bindend für Gültigkeitsdauer</td></tr>
          <tr><td>Kostenvoranschlag</td><td>Verkäufer</td><td>Ungefähre Kosten</td><td>Nein</td></tr>
          <tr><td>Angebot</td><td>Verkäufer</td><td>Lösung + Preis verkaufen</td><td>Nein</td></tr>
          <tr><td>Proforma-Rechnung</td><td>Verkäufer</td><td>Vorabschätzung</td><td>Nein</td></tr>
          <tr><td>Gutschrift</td><td>Verkäufer</td><td>Rechnungsbetrag reduzieren</td><td>Ja</td></tr>
          <tr><td>Lieferschein</td><td>Verkäufer</td><td>Warenlieferung bestätigen</td><td>Liefernachweis</td></tr>
        </tbody>
      </table>

      <h2>Rechnungen</h2>
      <p>Eine Rechnung ist eine formelle Zahlungsaufforderung, die vom Verkäufer nach Lieferung von Waren oder Erbringung von Dienstleistungen ausgestellt wird.</p>
      <ul>
        <li><strong>Wann verwenden:</strong> Nach Lieferung von Waren oder Erbringung von Dienstleistungen</li>
        <li><strong>Schlüsselelemente:</strong> Rechnungsnummer, Datum, aufgeschlüsselte Positionen, Zahlungsbedingungen, Gesamtbetrag</li>
        <li><strong>Rechtsstatus:</strong> Erzeugt eine rechtliche Zahlungsverpflichtung</li>
      </ul>

      <h2>Quittungen</h2>
      <p>Eine Quittung bestätigt den Zahlungseingang. Sie wird vom Verkäufer an den Käufer als Kaufbeleg ausgestellt.</p>

      <h2>Bestellungen (POs)</h2>
      <p>Eine Bestellung wird vom Käufer erstellt, um einen Kauf beim Verkäufer zu autorisieren. Sie gibt an, was bestellt wird, in welcher Menge und zu welchem vereinbarten Preis.</p>

      <h2>Verwandte Ressourcen</h2>
      <ul>
        <li><a href="/__LANG__/blog/complete-guide-to-business-invoicing">Vollständiger Leitfaden zur Geschäftsrechnungsstellung</a></li>
        <li><a href="/__LANG__/blog/proposal-vs-estimate-vs-quote-explained">Angebot vs. Kostenvoranschlag vs. Preisanfrage</a></li>
        <li><a href="/__LANG__/blog/credit-notes-and-invoice-corrections">Gutschriften und Korrekturen</a></li>
      </ul>
    `,
    faq: [
      { question: 'Was ist der Unterschied zwischen einer Rechnung und einer Quittung?', answer: 'Eine Rechnung ist eine Zahlungsaufforderung vor der Zahlung. Eine Quittung ist eine Bestätigung nach der Zahlung. Beide sind wichtig für die Buchführung, dienen aber entgegengesetzten Funktionen im Transaktionsablauf.' },
      { question: 'Brauche ich für jede Geschäftstransaktion eine Bestellung?', answer: 'Nicht unbedingt. Bestellungen sind am häufigsten in der Unternehmensbeschaffung und bei Behörden. Kleinunternehmen und Freiberufler verzichten in der Regel bei Routinekäufen darauf.' }
    ]
  }
];

registerBlogPosts('de', posts);
