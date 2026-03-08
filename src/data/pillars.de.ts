import { registerPillars } from '@/utils/i18nData';
import type { Pillar } from '@/data/topicalMap';

const pillars: Pillar[] = [
  {
    id: 'invoicing-mastery',
    title: 'Rechnungsstellung meistern',
    slug: 'invoicing',
    description: 'Meistern Sie die professionelle Rechnungsstellung, um schneller bezahlt zu werden und professioneller aufzutreten.',
    longDescription: 'Alles, was Sie über die Erstellung professioneller Rechnungen wissen müssen – von wesentlichen Elementen bis zu Best Practices. Erfahren Sie, wie Sie korrekt Rechnungen stellen, schneller bezahlt werden und die Steuervorschriften verschiedener Länder einhalten.',
    targetProduct: '/invoicing',
    hubPage: '/guides/invoicing',
    blogHubPage: '/blog/complete-guide-to-business-invoicing',
    icon: 'FileText',
    color: 'hsl(var(--primary))',
    keyTopics: [
      { title: 'Rechnungsgrundlagen', description: 'Die unverzichtbaren Elemente jeder professionellen Rechnung.', link: '/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners' },
      { title: 'Rechnungsvorlagen', description: 'Professionelle Vorlagen erstellen, die Ihre Marke widerspiegeln.', link: '/blog/invoicemonk-template-how-to-create-a-perfect-invoice-template' },
      { title: 'Pünktliche Rechnungsstellung', description: 'Das richtige Timing für besseren Cashflow meistern.', link: '/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently' },
      { title: 'Rechnungsnummerierung', description: 'Ein Nummerierungssystem implementieren, das Ordnung schafft.', link: '/blog/invoice-numbering-best-practices' },
      { title: 'Zahlungsbedingungen', description: 'Klare Zahlungsbedingungen formulieren, die Kunden verstehen.', link: '/blog/how-to-write-invoice-payment-terms' },
      { title: 'Wiederkehrende Rechnungen', description: 'Abrechnung für Stammkunden und Abonnements automatisieren.', link: '/blog/recurring-invoices-automating-billing' }
    ],
    faq: [
      { question: 'Was sind die wesentlichen Elemente einer professionellen Rechnung?', answer: 'Eine professionelle Rechnung muss enthalten: Ihren Firmennamen und Kontaktdaten, Kundeninformationen, eine eindeutige Rechnungsnummer, Rechnungsdatum und Fälligkeitsdatum, eine aufgeschlüsselte Liste der Produkte/Dienstleistungen mit Mengen und Preisen, Zwischensumme und Gesamtbetrag, anfallende Steuern sowie akzeptierte Zahlungsmethoden.' },
      { question: 'Wie nummeriere ich meine Rechnungen korrekt?', answer: 'Verwenden Sie ein fortlaufendes Nummerierungssystem, das leicht nachzuverfolgen ist. Gängige Formate sind: einfach fortlaufend (001, 002, 003), datumsbasiert (2024-001) oder kundenbezogen (ABC-001). Entscheidend ist Konsistenz – verwenden Sie niemals Rechnungsnummern doppelt.' },
      { question: 'Wann sollte ich eine Rechnung senden?', answer: 'Bei Projektarbeit senden Sie Rechnungen sofort nach Abschluss oder bei vereinbarten Meilensteinen. Für wiederkehrende Dienstleistungen legen Sie einen regelmäßigen Rhythmus fest (wöchentlich, monatlich). Je schneller Sie Rechnungen stellen, desto schneller werden Sie bezahlt.' },
      { question: 'Welche Zahlungsbedingungen sollte ich verwenden?', answer: 'Übliche Zahlungsbedingungen sind Netto 15, Netto 30 oder Zahlung bei Erhalt. Für neue Kunden reduzieren kürzere Fristen das Risiko. Erwägen Sie Skonto-Angebote (2/10 Netto 30), um schnellere Zahlungen zu fördern.' },
      { question: 'Wie gehe ich mit internationaler Rechnungsstellung um?', answer: 'Für internationale Kunden geben Sie an: Währung, Ihre internationalen Bankdaten (IBAN, SWIFT), anwendbare Steuerinformationen und stellen Sie die Einhaltung der Steuervorschriften beider Länder sicher.' }
    ]
  },
  {
    id: 'getting-paid',
    title: 'Schneller bezahlt werden',
    slug: 'getting-paid',
    description: 'Strategien und Tools zur Beschleunigung Ihres Zahlungseingangs und Verbesserung des Cashflows.',
    longDescription: 'Entdecken Sie bewährte Strategien zur Reduzierung von Zahlungsverzögerungen und Verbesserung Ihres Cashflows. Von Zahlungserinnerungsvorlagen bis zur Wahl der richtigen Zahlungsmethoden – alles über schnellere Bezahlung als Kleinunternehmer oder Freelancer.',
    targetProduct: '/payments',
    hubPage: '/guides/getting-paid',
    blogHubPage: '/blog/ultimate-guide-getting-paid-faster',
    icon: 'Wallet',
    color: 'hsl(142, 76%, 36%)',
    keyTopics: [
      { title: 'Umgang mit Zahlungsverzug', description: 'Professionelle Ansätze zum Eintreiben überfälliger Zahlungen.', link: '/blog/how-to-handle-late-payments-professionally' },
      { title: 'Zahlungsmethoden', description: 'Online-Zahlungsoptionen für Ihr Unternehmen vergleichen.', link: '/blog/online-payment-methods-comparison-small-business' },
      { title: 'Zahlungserinnerungen', description: 'Erinnerungen automatisieren, um Zahlungsverzug zu reduzieren.', link: '/blog/payment-reminder-email-templates' },
      { title: 'Skonto', description: 'Kunden zur schnelleren Zahlung motivieren.', link: '/blog/early-payment-discounts-do-they-work' },
      { title: 'Cashflow-Prognose', description: 'Eingehende Zahlungen vorhersagen und planen.', link: '/blog/cash-flow-forecasting-for-freelancers' }
    ],
    faq: [
      { question: 'Wie mahne ich verspätete Zahlungen am besten?', answer: 'Beginnen Sie mit einer freundlichen Erinnerung 1–3 Tage nach dem Fälligkeitsdatum. Bei Nichtbezahlung nach einer Woche senden Sie eine bestimmtere Mahnung. Bei 30+ Tagen Überfälligkeit erwägen Sie telefonischen Kontakt. Bleiben Sie stets professionell und dokumentieren Sie alle Kommunikation.' },
      { question: 'Sollte ich Skonto anbieten?', answer: 'Skonto wie „2/10 Netto 30" (2 % Rabatt bei Zahlung innerhalb von 10 Tagen) kann Zahlungen beschleunigen. Berechnen Sie jedoch die effektiven Jahreskosten – 2 % Rabatt für 20 Tage früher entspricht etwa 36 % jährlich. Es eignet sich am besten für margenstarke Unternehmen.' },
      { question: 'Welche Zahlungsmethoden sollte ich akzeptieren?', answer: 'Akzeptieren Sie mehrere Methoden: Banküberweisung (niedrigste Gebühren), Kredit-/Debitkarten (bequem für Kunden) und digitale Wallets wie PayPal oder Stripe. Berücksichtigen Sie lokale Zahlungspräferenzen in Ihren Zielmärkten.' },
      { question: 'Wie kann ich Zahlungsverzug reduzieren?', answer: 'Schlüsselstrategien: klare Zahlungsbedingungen von Anfang an, sofortige Rechnungsstellung nach Arbeitsabschluss, automatische Zahlungserinnerungen, mehrere Zahlungsmethoden und Anzahlungen für große Projekte.' }
    ]
  },
  {
    id: 'business-finances',
    title: 'Unternehmensfinanzen',
    slug: 'business-finances',
    description: 'Grundlegendes Buchhaltungs- und Ausgabenmanagement-Wissen für den Erfolg kleiner Unternehmen.',
    longDescription: 'Meistern Sie die Grundlagen der Buchhaltung und Finanzverwaltung für kleine Unternehmen. Von der Budgeterstellung bis zum Verständnis von Finanzberichten – gewinnen Sie das Wissen, um fundierte finanzielle Entscheidungen zu treffen und Ihr Unternehmen nachhaltig zu wachsen.',
    targetProduct: '/accounting',
    hubPage: '/guides/business-finances',
    blogHubPage: '/blog/small-business-accounting-guide',
    icon: 'Calculator',
    color: 'hsl(221, 83%, 53%)',
    keyTopics: [
      { title: 'Buchhaltungsgrundlagen', description: 'Grundkonzepte, die jeder Unternehmer braucht.', link: '/blog/the-basics-of-small-business-accounting' },
      { title: 'Budgeterstellung', description: 'Ein Budget erstellen, das Unternehmenswachstum fördert.', link: '/blog/how-to-create-a-budget-for-your-small-business' },
      { title: 'Finanzberichte', description: 'Die für Ihr Unternehmen wichtigen Berichte verstehen.', link: '/blog/small-business-accounting-guide' },
      { title: 'Gewinnmargen', description: 'Die Rentabilität Ihres Unternehmens berechnen und verbessern.', link: '/blog/profit-margins-how-to-calculate-and-improve' },
      { title: 'Ist- vs. Sollversteuerung', description: 'Die richtige Buchhaltungsmethode für Ihr Unternehmen wählen.', link: '/blog/cash-vs-accrual-accounting-explained' }
    ],
    faq: [
      { question: 'Sollte ich Ist- oder Sollversteuerung verwenden?', answer: 'Die Istversteuerung erfasst Einnahmen bei Erhalt und Ausgaben bei Zahlung – einfacher für kleine Unternehmen. Die Sollversteuerung erfasst bei Entstehung und bietet ein genaueres Finanzbild. Die meisten kleinen Unternehmen beginnen mit der Istversteuerung.' },
      { question: 'Welche Finanzberichte muss ich verfolgen?', answer: 'Wesentliche Berichte: Gewinn- und Verlustrechnung für Rentabilität, Bilanz für Vermögen und Verbindlichkeiten, Cashflow-Übersicht und Fälligkeitsliste offener Rechnungen.' },
      { question: 'Wie erstelle ich ein Budget für mein Kleinunternehmen?', answer: 'Überprüfen Sie vergangene Einnahmen und Ausgaben. Kategorisieren Sie fixe Kosten (Miete, Gehälter) und variable Kosten (Material, Marketing). Setzen Sie realistische Umsatzziele und überprüfen Sie monatlich.' },
      { question: 'Wann sollte ich einen Steuerberater engagieren?', answer: 'Erwägen Sie professionelle Hilfe, wenn: Ihr Unternehmen über einfache Buchhaltung hinauswächst, Sie Steuerberatung benötigen, Finanzierung suchen oder mehr Zeit für Finanzen als für Ihr Kerngeschäft aufwenden.' }
    ]
  },
  {
    id: 'tax-compliance',
    title: 'Steuern & Compliance',
    slug: 'tax-compliance',
    description: 'Bleiben Sie prüfungsbereit und konform mit Steuervorschriften verschiedener Regionen.',
    longDescription: 'Navigieren Sie die Steuer-Compliance souverän in Nigeria, Großbritannien, den USA, Kanada und Australien. Erfahren Sie mehr über Rechnungsanforderungen, Steuerabzüge, Prüfungsvorbereitung und Aufbewahrungsstandards der jeweiligen Steuerbehörden.',
    targetProduct: '/compliance',
    hubPage: '/guides/tax-compliance',
    blogHubPage: '/blog/small-business-tax-compliance-guide',
    icon: 'Shield',
    color: 'hsl(271, 91%, 65%)',
    keyTopics: [
      { title: 'Steuerabzüge', description: 'Legitime Abzüge für Ihr Unternehmen maximieren.', link: '/blog/small-business-tax-deductions-guide' },
      { title: 'Prüfungsvorbereitung', description: 'Bereit für Betriebsprüfungen bleiben.', link: '/blog/how-to-prepare-business-tax-audit' },
      { title: 'Nigeria (FIRS)', description: 'NRS-konforme Rechnungsanforderungen.', link: '/blog/firs-invoice-requirements-nigeria' },
      { title: 'UK (HMRC)', description: 'Making Tax Digital Compliance-Leitfaden.', link: '/blog/hmrc-invoicing-rules-uk-mtd-compliance' },
      { title: 'USA (IRS)', description: 'Steuer-Compliance für US-Kleinunternehmen.', link: '/blog/irs-invoice-requirements-us-compliance' },
      { title: 'Aufbewahrungspflichten', description: 'Konforme Geschäftsunterlagen führen.', link: '/blog/how-to-prepare-business-tax-audit' }
    ],
    faq: [
      { question: 'Wie lange muss ich Geschäftsunterlagen aufbewahren?', answer: 'Generell 6–7 Jahre. Nigeria (FIRS): 6 Jahre, UK (HMRC): 6 Jahre, USA (IRS): 7 Jahre, Kanada (CRA): 6 Jahre, Australien (ATO): 5 Jahre. Dauerhaft aufbewahren: Jahresabschlüsse, Anlagenkaufbelege und rechtliche Dokumente.' },
      { question: 'Welche Rechnungselemente sind gesetzlich vorgeschrieben?', answer: 'Anforderungen variieren je nach Land, umfassen aber typischerweise: Firmenname/-adresse, Kundendaten, eindeutige Rechnungsnummer, Datum, Leistungsbeschreibung, Beträge, Steueraufschlüsselung (USt/MwSt) und Ihre Steuernummer.' },
      { question: 'Wie bereite ich mich auf eine Betriebsprüfung vor?', answer: 'Führen Sie organisierte, datierte Aufzeichnungen aller Transaktionen. Bewahren Sie Belege (Quittungen, Verträge, Kontoauszüge) auf. Gleichen Sie Konten regelmäßig ab. Nutzen Sie Buchhaltungssoftware für genaue, durchsuchbare Aufzeichnungen.' },
      { question: 'Muss ich Umsatzsteuer auf meinen Rechnungen ausweisen?', answer: 'Dies hängt von Ihrem Registrierungsstatus und Schwellenwerten ab. UK: USt bei Umsatz über £85.000. Australien: GST bei Umsatz über $75.000. Deutschland: Umsatzsteuer ab Überschreitung der Kleinunternehmergrenze.' }
    ]
  },
  {
    id: 'freelancer-success',
    title: 'Freelancer-Erfolg',
    slug: 'freelancing',
    description: 'Bauen Sie ein florierendes Freelance-Business mit praktischer Anleitung und Tools auf.',
    longDescription: 'Alles, was Freelancer brauchen, um ein nachhaltiges, profitables Geschäft aufzubauen. Von der Kundenakquise und Preisgestaltung bis zum Management mehrerer Projekte – lernen Sie die Strategien, die erfolgreiche Freelancer täglich nutzen.',
    targetProduct: '/freelancers',
    hubPage: '/guides/freelancing',
    blogHubPage: '/blog/freelancer-business-guide',
    icon: 'User',
    color: 'hsl(25, 95%, 53%)',
    keyTopics: [
      { title: 'Aufträge finden', description: 'Die besten Plattformen für Freelance-Kunden.', link: '/blog/top-10-freelance-websites' },
      { title: 'Fähigkeiten aufbauen', description: 'Marktfähige kreative Fähigkeiten entwickeln.', link: '/blog/how-to-become-a-good-graphic-designer' },
      { title: 'Preisgestaltung', description: 'Preise festlegen, die Ihren Wert widerspiegeln.', link: '/blog/pricing-your-freelance-services' },
      { title: 'Kundenmanagement', description: 'Mehrere Kunden effizient betreuen.', link: '/blog/freelancer-business-guide' },
      { title: 'Verträge', description: 'Sich mit soliden Vereinbarungen absichern.', link: '/blog/freelance-contract-templates' },
      { title: 'Zeiterfassung', description: 'Ihre Arbeitszeit genau abrechnen.', link: '/blog/freelance-time-tracking-guide' }
    ],
    faq: [
      { question: 'Wie lege ich meine Freelance-Preise fest?', answer: 'Berechnen Sie Ihr gewünschtes Jahreseinkommen, addieren Sie Geschäftsausgaben und Steuern, teilen Sie durch abrechenbare Stunden (typischerweise 60–70 % der Arbeitszeit). Recherchieren Sie Marktpreise in Ihrer Nische. Erwägen Sie wertbasierte Preisgestaltung.' },
      { question: 'Wo finde ich Freelance-Kunden?', answer: 'Starten Sie mit Plattformen wie Upwork, Fiverr und Toptal. Bauen Sie Ihr Netzwerk über LinkedIn und Branchenveranstaltungen auf. Bitten Sie zufriedene Kunden um Empfehlungen. Erstellen Sie Inhalte, die Ihre Expertise zeigen.' },
      { question: 'Brauche ich für jedes Projekt einen Vertrag?', answer: 'Ja! Ein Vertrag schützt Sie und Ihren Kunden. Enthalten sein sollten: Leistungsumfang, Lieferungen, Zeitplan, Zahlungsbedingungen, Überarbeitungsrichtlinien, Urheberrechte und Kündigungsbedingungen.' },
      { question: 'Wie gehe ich mit Scope Creep um?', answer: 'Definieren Sie den Projektumfang klar im Vertrag. Bei Zusatzwünschen: bestätigen Sie die Anfrage, erklären Sie, dass sie außerhalb des ursprünglichen Umfangs liegt, und erstellen Sie ein Angebot für die Mehrarbeit.' }
    ]
  },
  {
    id: 'estimates-proposals',
    title: 'Angebote & Kostenvoranschläge',
    slug: 'estimates',
    description: 'Gewinnen Sie mehr Kunden mit überzeugenden Angeboten und genauen Kostenvoranschlägen.',
    longDescription: 'Lernen Sie, überzeugende Angebote und präzise Kostenvoranschläge zu erstellen, die Interessenten in zahlende Kunden verwandeln. Vom Unterschied zwischen Angebot und Kostenvoranschlag bis zur effektiven Nachverfolgung – meistern Sie den Akquiseprozess.',
    targetProduct: '/estimates',
    hubPage: '/guides/estimates',
    blogHubPage: '/blog/winning-proposals-estimates-guide',
    icon: 'ClipboardList',
    color: 'hsl(340, 82%, 52%)',
    keyTopics: [
      { title: 'Angebote schreiben', description: 'Angebote verfassen, die Kunden überzeugen.', link: '/blog/how-to-write-winning-business-proposal' },
      { title: 'Angebot vs. Kostenvoranschlag', description: 'Verstehen, wann welches Dokument zu verwenden ist.', link: '/blog/estimate-vs-quote-vs-invoice-difference' },
      { title: 'Projektkalkulation', description: 'Projekte genau und rentabel kalkulieren.', link: '/blog/how-to-price-project-work' },
      { title: 'Nachfassen', description: 'Akzeptanz mit kluger Nachverfolgung steigern.', link: '/blog/following-up-on-proposals' },
      { title: 'Mit Absagen umgehen', description: 'Aus abgelehnten Angeboten lernen.', link: '/blog/proposal-rejection-next-steps' }
    ],
    faq: [
      { question: 'Was ist der Unterschied zwischen Kostenvoranschlag, Angebot und Rechnung?', answer: 'Ein Kostenvoranschlag ist eine Kostenschätzung, die sich ändern kann. Ein Angebot ist eine verbindliche Preiszusage für einen definierten Umfang. Eine Rechnung ist eine Zahlungsaufforderung nach Abschluss der Arbeit.' },
      { question: 'Wie schreibe ich ein überzeugendes Angebot?', answer: 'Beginnen Sie damit, das Problem des Kunden tiefgehend zu verstehen. Strukturieren Sie Ihr Angebot: Problemverständnis, Lösungsvorschlag, relevante Erfahrung, klare Preisgestaltung und Zeitplan sowie nächste Schritte.' },
      { question: 'Wann sollte ich bei einem Angebot nachfassen?', answer: 'Fassen Sie 3–5 Tage nach dem Versand nach, wenn keine Rückmeldung kam. Senden Sie eine kurze, wertschöpfende Nachricht. Nach zwei Nachfassaktionen ohne Antwort wenden Sie sich neuen Aufgaben zu.' },
      { question: 'Wie gehe ich mit Preiseinwänden um?', answer: 'Senken Sie nicht sofort den Preis. Verstehen Sie stattdessen die Budgetbeschränkungen, passen Sie den Umfang an, betonen Sie den ROI und bieten Sie Zahlungspläne an.' }
    ]
  },
  {
    id: 'expense-management',
    title: 'Ausgabenmanagement',
    slug: 'expenses',
    description: 'Verfolgen, kategorisieren und optimieren Sie Ihre Geschäftsausgaben mühelos.',
    longDescription: 'Meistern Sie das Ausgabenmanagement von der Belegerfassung bis zu steuerlich abzugsfähigen Kategorien. Erfahren Sie, wie Sie Ausgaben verfolgen, papierlos arbeiten, geschäftliche und private Ausgaben trennen und prüfungssichere Berichte erstellen.',
    targetProduct: '/expenses',
    hubPage: '/guides/expenses',
    blogHubPage: '/blog/complete-guide-expense-management',
    icon: 'Receipt',
    color: 'hsl(173, 80%, 40%)',
    keyTopics: [
      { title: 'Ausgabenverfolgung', description: 'Methoden und Tools zur Erfassung von Geschäftsausgaben.', link: '/blog/expense-tracking-methods-small-business' },
      { title: 'Belegverwaltung', description: 'Papierlos werden mit digitaler Belegverwaltung.', link: '/blog/digital-receipt-management-guide' },
      { title: 'Ausgabenkategorien', description: 'Ausgaben mit einem Kontenrahmen kategorisieren.', link: '/blog/business-expense-categories-guide' },
      { title: 'Beleg-Scanning', description: 'Die besten Apps zum Scannen von Belegen vergleichen.', link: '/blog/receipt-scanning-apps-comparison' },
      { title: 'Geschäftlich vs. Privat', description: 'Geschäftliche und private Ausgaben korrekt trennen.', link: '/blog/separate-business-personal-expenses' },
      { title: 'Steuerabzüge', description: 'Steuerlich absetzbare Ausgaben identifizieren und geltend machen.', link: '/blog/tax-deductible-business-expenses' }
    ],
    faq: [
      { question: 'Wie verfolge ich Geschäftsausgaben am einfachsten?', answer: 'Nutzen Sie Software, die Belege fotografieren, Ausgaben automatisch kategorisieren und mit Bankkonten synchronisieren kann. Das eliminiert manuelle Dateneingabe und stellt sicher, dass zur Steuererklärung nichts vergessen wird.' },
      { question: 'Wie sollte ich Geschäftsausgaben kategorisieren?', answer: 'Übliche Kategorien: Bürobedarf, Reisen, Bewirtung, Fremdleistungen, Software und Abonnements, Marketing, Versicherung und Nebenkosten. Richten Sie einen Kontenrahmen ein, der zu Ihrer Branche passt.' },
      { question: 'Muss ich Papierbelege aufbewahren?', answer: 'Die meisten Steuerbehörden akzeptieren heute digitale Kopien. Nutzen Sie eine Beleg-Scanning-App und bewahren Sie Belege je nach Rechtsgebiet 5–7 Jahre lang auf.' },
      { question: 'Welche Geschäftsausgaben sind steuerlich absetzbar?', answer: 'Generell ist jede Ausgabe absetzbar, die für den Geschäftsbetrieb gewöhnlich und notwendig ist: Büromiete, Material, Reisen, Weiterbildung, Software, Versicherung und Marketingkosten.' }
    ]
  },
  {
    id: 'client-management',
    title: 'Kundenmanagement',
    slug: 'client-management',
    description: 'Stärkere Kundenbeziehungen aufbauen und Ihre Kunden-Workflows optimieren.',
    longDescription: 'Lernen Sie, Kundenbeziehungen effektiv zu verwalten – vom Onboarding bis zur Kundenbindung. Entdecken Sie Kommunikationsvorlagen, Strategien für schwierige Kunden und einfache CRM-Ansätze für Freelancer und Kleinunternehmen.',
    targetProduct: '/client-management',
    hubPage: '/guides/client-management',
    blogHubPage: '/blog/client-management-guide-small-business',
    icon: 'Users',
    color: 'hsl(199, 89%, 48%)',
    keyTopics: [
      { title: 'Kunden-Onboarding', description: 'Einen reibungslosen Onboarding-Prozess aufbauen.', link: '/blog/client-onboarding-process' },
      { title: 'Schwierige Kunden', description: 'Herausfordernde Kundensituationen professionell meistern.', link: '/blog/managing-difficult-clients' },
      { title: 'Kommunikationsvorlagen', description: 'Professionelle Vorlagen für die Kundenkommunikation.', link: '/blog/client-communication-templates' },
      { title: 'Kundenbindung', description: 'Strategien, damit Kunden wiederkommen.', link: '/blog/client-retention-strategies' },
      { title: 'Einfaches CRM', description: 'Kunden ohne komplexe Software verwalten.', link: '/blog/crm-for-freelancers-small-business' }
    ],
    faq: [
      { question: 'Brauchen Freelancer ein CRM?', answer: 'Nicht unbedingt ein vollständiges CRM, aber ein System zur Verfolgung von Kundendaten, Projekthistorie und Nachfassaktionen. Eine einfache Tabelle reicht für unter 10 Kunden; darüber hinaus sollten Sie ein leichtes CRM in Betracht ziehen.' },
      { question: 'Wie onboarde ich einen neuen Kunden?', answer: 'Ein guter Onboarding-Prozess umfasst: Begrüßungsmail mit nächsten Schritten, Fragebogen für Projektanforderungen, unterschriebener Vertrag, Einrichtung von Zahlungsbedingungen und ein Kickoff-Gespräch.' },
      { question: 'Wie gehe ich mit schwierigen Kunden um?', answer: 'Bleiben Sie professionell und dokumentieren Sie alles. Setzen Sie klare Grenzen, kommunizieren Sie schriftlich und beziehen Sie sich auf Ihren Vertrag. Wenn die Beziehung nicht zu retten ist, beenden Sie sie höflich mit ordentlicher Frist.' },
      { question: 'Was sind die besten Strategien zur Kundenbindung?', answer: 'Liefern Sie konstant exzellente Arbeit, kommunizieren Sie proaktiv, bitten Sie regelmäßig um Feedback, bieten Sie Treuerabatte an und bleiben Sie durch regelmäßige Check-ins im Bewusstsein Ihrer Kunden.' }
    ]
  }
];

registerPillars('de', pillars);
