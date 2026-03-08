import type { GlossaryTerm } from './glossaryTerms';
import { registerGlossaryTerms } from '@/utils/i18nData';

const glossaryTermsDE: GlossaryTerm[] = [
  // Rechnungsstellung
  {
    term: 'Rechnung',
    slug: 'invoice',
    definition: 'Ein Geschäftsdokument, das ein Verkäufer an einen Käufer ausstellt, mit Angaben zu Produkten oder Dienstleistungen, Mengen, Preisen und Zahlungsbedingungen.',
    extendedDescription: 'Eine Rechnung dient als rechtlicher Nachweis einer Transaktion und als formelle Zahlungsaufforderung. Professionelle Rechnungen enthalten wesentliche Elemente wie Rechnungsnummern, Daten, aufgeschlüsselte Beschreibungen und Steuerinformationen. Sie sind entscheidend für das Cashflow-Management, die Steuerkonformität und die Pflege professioneller Geschäftsbeziehungen.',
    relatedTerms: ['credit-note', 'pro-forma-invoice', 'recurring-invoice', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['complete-guide-to-business-invoicing', '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners']
  },
  {
    term: 'Gutschrift',
    slug: 'credit-note',
    definition: 'Ein Dokument, das ein Verkäufer ausstellt, um den geschuldeten Betrag zu reduzieren, typischerweise bei Retouren, Überberechnungen oder Abrechnungskorrekturen.',
    extendedDescription: 'Gutschriften fungieren als negative Rechnungen und reduzieren den vom Kunden geschuldeten Gesamtbetrag. Sie sind unverzichtbar für die Aufrechterhaltung genauer Buchhaltungsunterlagen, wenn Anpassungen erforderlich sind. Eine Gutschrift sollte auf die Originalrechnung verweisen und den Grund für die Gutschrift klar angeben.',
    relatedTerms: ['invoice', 'debit-note', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['credit-notes-how-and-when-to-use-them']
  },
  {
    term: 'Proforma-Rechnung',
    slug: 'pro-forma-invoice',
    definition: 'Eine vorläufige Rechnung, die vor der Lieferung von Waren oder Erbringung von Dienstleistungen gesendet wird und Bedingungen sowie geschätzte Kosten enthält.',
    extendedDescription: 'Proforma-Rechnungen werden als Angebote oder Kostenvoranschläge verwendet und sind keine Zahlungsaufforderungen. Sie helfen Kunden, die erwarteten Kosten zu verstehen, und werden häufig im internationalen Handel für Zollzwecke verwendet. Im Gegensatz zu regulären Rechnungen können sie vor der endgültigen Rechnungsstellung geändert werden.',
    relatedTerms: ['invoice', 'estimate', 'quote'],
    category: 'invoicing',
    relatedArticles: ['proforma-invoice-vs-commercial-invoice']
  },
  {
    term: 'Wiederkehrende Rechnung',
    slug: 'recurring-invoice',
    definition: 'Eine Rechnung, die automatisch in regelmäßigen Abständen für laufende Dienstleistungen oder Abonnements erstellt wird.',
    extendedDescription: 'Wiederkehrende Rechnungen sparen Zeit für Unternehmen mit Daueraufträgen oder abonnementbasierten Dienstleistungen. Sie können wöchentlich, monatlich, vierteljährlich oder jährlich automatisch versendet werden. Die Automatisierung reduziert den Verwaltungsaufwand und gewährleistet eine konsistente Abrechnung.',
    relatedTerms: ['invoice', 'retainer', 'subscription-billing'],
    category: 'invoicing',
    relatedArticles: ['recurring-invoices-automating-billing']
  },
  {
    term: 'Rechnungsnummer',
    slug: 'invoice-number',
    definition: 'Eine eindeutige Kennung, die jeder Rechnung zur Nachverfolgung, Referenz und Buchhaltung zugewiesen wird.',
    extendedDescription: 'Rechnungsnummerierungssysteme helfen bei der Organisation von Unterlagen, vereinfachen den Zahlungsabgleich und erfüllen die Anforderungen der Steuerbehörden. Gängige Formate sind fortlaufende Nummern (001, 002), datumsbasierte Codes (2024-001) oder kundenpräfixierte Kennungen (ABC-001). Rechnungsnummern dürfen niemals wiederverwendet werden.',
    relatedTerms: ['invoice', 'purchase-order'],
    category: 'invoicing',
    relatedArticles: ['invoice-numbering-best-practices']
  },
  {
    term: 'Zahlungsbedingungen',
    slug: 'payment-terms',
    definition: 'Bedingungen, die festlegen, wann und wie die Zahlung erwartet wird, einschließlich Fälligkeitsdatum, akzeptierter Methoden und etwaiger Frühzahlerrabatte.',
    extendedDescription: 'Gängige Zahlungsbedingungen umfassen Netto 15, Netto 30, Zahlung bei Erhalt und 2/10 Netto 30 (2 % Rabatt bei Zahlung innerhalb von 10 Tagen). Klare Zahlungsbedingungen setzen Erwartungen, reduzieren Streitigkeiten und können schnellere Zahlungen fördern. Die Bedingungen sollten vor Arbeitsbeginn vereinbart und auf Rechnungen klar angegeben werden.',
    relatedTerms: ['net-30', 'due-on-receipt', 'early-payment-discount'],
    category: 'payments',
    relatedArticles: ['how-to-write-invoice-payment-terms', 'understanding-payment-terms-guide']
  },
  {
    term: 'Netto 30',
    slug: 'net-30',
    definition: 'Zahlungsbedingung, die angibt, dass der volle Rechnungsbetrag innerhalb von 30 Tagen nach Rechnungsdatum fällig ist.',
    extendedDescription: 'Netto 30 ist eine der häufigsten Zahlungsbedingungen im Geschäftsverkehr. Varianten umfassen Netto 15, Netto 60 und Netto 90 für kürzere oder längere Zahlungsfristen. „Netto" bezieht sich auf den fälligen Gesamtbetrag ohne Abzüge.',
    relatedTerms: ['payment-terms', 'due-on-receipt', 'accounts-receivable'],
    category: 'payments'
  },
  {
    term: 'Zahlung bei Erhalt',
    slug: 'due-on-receipt',
    definition: 'Zahlungsbedingung, die eine sofortige Zahlung bei Erhalt der Rechnung verlangt.',
    extendedDescription: 'Die Bedingung „Zahlung bei Erhalt" fordert die Zahlung, sobald die Rechnung eingeht, wobei dies praktisch oft innerhalb weniger Tage bedeutet. Diese Bedingungen sind üblich bei neuen Kundenbeziehungen, kleineren Beträgen oder wenn der Verkäufer sofortigen Cashflow benötigt.',
    relatedTerms: ['payment-terms', 'net-30', 'cash-on-delivery'],
    category: 'payments'
  },
  {
    term: 'Frühzahlerrabatt',
    slug: 'early-payment-discount',
    definition: 'Eine prozentuale Ermäßigung, die Kunden angeboten wird, die vor dem regulären Fälligkeitsdatum zahlen.',
    extendedDescription: 'Wird häufig als „2/10 Netto 30" ausgedrückt, was 2 % Rabatt bei Zahlung innerhalb von 10 Tagen bedeutet, ansonsten voller Betrag in 30 Tagen fällig. Frühzahlerrabatte verbessern den Cashflow, sollten aber sorgfältig berechnet werden — ein 2%-Rabatt für 20 Tage früher entspricht etwa 36 % jährlich.',
    relatedTerms: ['payment-terms', 'cash-flow', 'accounts-receivable'],
    category: 'payments',
    relatedArticles: ['early-payment-discounts-do-they-work']
  },
  // Buchhaltung
  {
    term: 'Forderungen',
    slug: 'accounts-receivable',
    definition: 'Geld, das einem Unternehmen von Kunden für gelieferte, aber noch nicht bezahlte Waren oder Dienstleistungen geschuldet wird.',
    extendedDescription: 'Forderungen erscheinen als Vermögenswert in der Bilanz. Effektives Forderungsmanagement umfasst rechtzeitige Rechnungsstellung, klare Zahlungsbedingungen, systematische Nachverfolgung überfälliger Konten und Fälligkeitsanalysen zur Identifizierung von Inkassoproblemen. Hohe Forderungen können auf Cashflow-Probleme hindeuten.',
    relatedTerms: ['accounts-payable', 'invoice', 'cash-flow', 'aging-report'],
    category: 'accounting',
    relatedArticles: ['ultimate-guide-getting-paid-faster']
  },
  {
    term: 'Verbindlichkeiten',
    slug: 'accounts-payable',
    definition: 'Geld, das ein Unternehmen Lieferanten und Anbietern für erhaltene, aber noch nicht bezahlte Waren oder Dienstleistungen schuldet.',
    extendedDescription: 'Verbindlichkeiten sind eine Bilanzposition, die kurzfristige Verpflichtungen darstellt. Effektives Management umfasst die Überwachung von Zahlungsfristen, die Nutzung von Frühzahlerrabatten und die Pflege guter Lieferantenbeziehungen bei gleichzeitiger Cashflow-Optimierung.',
    relatedTerms: ['accounts-receivable', 'vendor', 'cash-flow'],
    category: 'accounting'
  },
  {
    term: 'Cashflow',
    slug: 'cash-flow',
    definition: 'Die Bewegung von Geld in ein Unternehmen hinein und heraus, die Liquidität und Zahlungsfähigkeit misst.',
    extendedDescription: 'Positiver Cashflow bedeutet, dass mehr Geld eingeht als ausgeht. Selbst profitable Unternehmen können bei schlechtem Cashflow-Management scheitern. Wichtige Strategien umfassen rechtzeitige Rechnungsstellung, effizientes Inkasso, Verwaltung der Zahlungsbedingungen mit Lieferanten und Aufbau von Barreserven.',
    relatedTerms: ['accounts-receivable', 'accounts-payable', 'working-capital'],
    category: 'accounting',
    relatedArticles: ['cash-flow-forecasting-for-freelancers']
  },
  {
    term: 'Kontenplan',
    slug: 'chart-of-accounts',
    definition: 'Eine vollständige Auflistung aller Konten, die ein Unternehmen zur Kategorisierung von Finanztransaktionen verwendet.',
    extendedDescription: 'Der Kontenplan organisiert Transaktionen in Kategorien wie Vermögenswerte, Verbindlichkeiten, Eigenkapital, Einnahmen und Ausgaben. Ein gut strukturierter Kontenplan ermöglicht genaue Finanzberichterstattung, Steuervorbereitung und Geschäftsanalyse. Er sollte an Ihre spezifischen Geschäftsanforderungen angepasst werden.',
    relatedTerms: ['general-ledger', 'double-entry-bookkeeping', 'financial-statements'],
    category: 'accounting',
    relatedArticles: ['chart-of-accounts-setup-guide']
  },
  {
    term: 'Gewinnmarge',
    slug: 'profit-margin',
    definition: 'Der Prozentsatz des Umsatzes, der nach Abzug der Kosten verbleibt und die Rentabilität des Unternehmens angibt.',
    extendedDescription: 'Die Bruttogewinnmarge misst den Umsatz abzüglich der Herstellungskosten. Die Nettogewinnmarge berücksichtigt alle Ausgaben einschließlich Gemeinkosten, Steuern und Zinsen. Höhere Margen deuten auf bessere Effizienz und Preissetzungsmacht hin. Branchenbenchmarks variieren erheblich.',
    relatedTerms: ['gross-profit', 'net-profit', 'revenue'],
    category: 'accounting',
    relatedArticles: ['profit-margins-how-to-calculate-and-improve']
  },
  {
    term: 'Einnahmen-Ausgaben-Rechnung',
    slug: 'cash-basis-accounting',
    definition: 'Eine Buchhaltungsmethode, die Einnahmen bei Geldeingang und Ausgaben bei Zahlung erfasst.',
    extendedDescription: 'Die Einnahmen-Ausgaben-Rechnung ist einfacher als die periodengerechte Buchhaltung und wird häufig von Kleinunternehmen und Einzelunternehmern verwendet. Sie bietet ein klares Bild des tatsächlichen Barmittelbestands, spiegelt aber möglicherweise nicht die langfristige Finanzlage oder Rentabilität genau wider.',
    relatedTerms: ['accrual-accounting', 'revenue-recognition'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  {
    term: 'Periodengerechte Buchhaltung',
    slug: 'accrual-accounting',
    definition: 'Eine Buchhaltungsmethode, die Einnahmen bei Entstehung und Ausgaben bei Anfall erfasst, unabhängig vom Zeitpunkt des Geldflusses.',
    extendedDescription: 'Die periodengerechte Buchhaltung bietet ein genaueres Bild der finanziellen Gesundheit eines Unternehmens, indem Einnahmen den zugehörigen Ausgaben zugeordnet werden. Sie ist für größere Unternehmen und solche, die externe Investitionen anstreben, erforderlich. GAAP verlangt periodengerecht erstellte Jahresabschlüsse.',
    relatedTerms: ['cash-basis-accounting', 'revenue-recognition', 'matching-principle'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  // Steuern
  {
    term: 'Umsatzsteuer (USt)',
    slug: 'vat',
    definition: 'Eine Verbrauchsteuer, die auf jeder Produktions- oder Vertriebsstufe erhoben und letztlich vom Endverbraucher getragen wird.',
    extendedDescription: 'Die Umsatzsteuer wird in über 160 Ländern einschließlich der EU, des Vereinigten Königreichs, Nigerias und Australiens (als GST) verwendet. Umsatzsteuerpflichtige Unternehmen erheben USt auf Verkäufe und können die auf Geschäftseinkäufe gezahlte Vorsteuer zurückfordern. Sätze und Schwellenwerte variieren je nach Land.',
    relatedTerms: ['sales-tax', 'gst', 'tax-invoice'],
    category: 'tax',
    relatedArticles: ['hmrc-invoicing-rules-uk-mtd-compliance']
  },
  {
    term: 'Steuerrechnung',
    slug: 'tax-invoice',
    definition: 'Eine Rechnung mit spezifischen Steuerinformationen, die von Steuerbehörden für USt-/GST-Zwecke verlangt werden.',
    extendedDescription: 'Steuerrechnungen müssen Elemente wie Steuernummern, Steuerbeträge und in einigen Rechtsordnungen spezifische Formulierungen enthalten. Sie ermöglichen Unternehmen die Geltendmachung von Vorsteuerabzügen und sind für die Steuerkonformität und Prüfungsbereitschaft unerlässlich.',
    relatedTerms: ['vat', 'invoice', 'input-tax-credit'],
    category: 'tax'
  },
  {
    term: 'Steuerabzug',
    slug: 'tax-deduction',
    definition: 'Eine Geschäftsausgabe, die vom steuerpflichtigen Einkommen abgezogen werden kann und die Steuerlast reduziert.',
    extendedDescription: 'Übliche Betriebsausgabenabzüge umfassen Bürokosten, Ausrüstung, Reisen, professionelle Dienstleistungen und Versicherungen. Eine ordnungsgemäße Dokumentation ist unerlässlich — bewahren Sie Belege und Unterlagen für die vorgeschriebene Aufbewahrungsfrist auf. Konsultieren Sie einen Steuerberater für länderspezifische Regelungen.',
    relatedTerms: ['taxable-income', 'business-expense', 'depreciation'],
    category: 'tax',
    relatedArticles: ['small-business-tax-deductions-guide']
  },
  {
    term: 'Quellensteuer',
    slug: 'withholding-tax',
    definition: 'Eine an der Quelle einbehaltene Steuer auf Einkünfte, Dividenden oder Zahlungen an ausländische Unternehmen.',
    extendedDescription: 'Quellensteueranforderungen variieren je nach Land und Zahlungsart. In einigen Rechtsordnungen müssen Unternehmen Steuern von Zahlungen an Auftragnehmer über bestimmten Schwellenwerten einbehalten. Der einbehaltene Betrag wird im Namen des Empfängers direkt an die Steuerbehörden abgeführt.',
    relatedTerms: ['income-tax', 'tax-compliance'],
    category: 'tax'
  },
  // Geschäft
  {
    term: 'Kostenvoranschlag',
    slug: 'estimate',
    definition: 'Eine Kostenschätzung für ein Projekt oder eine Dienstleistung, nicht rechtsverbindlich und änderbar.',
    extendedDescription: 'Kostenvoranschläge geben Kunden eine Vorstellung der erwarteten Kosten vor der Beauftragung. Sie unterscheiden sich von Angeboten (die typischerweise verbindlich sind) und sollten Annahmen und Bedingungen klar angeben, die den Endpreis beeinflussen könnten. Die Umwandlung akzeptierter Kostenvoranschläge in Rechnungen vereinfacht die Abrechnung.',
    relatedTerms: ['quote', 'proposal', 'pro-forma-invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Angebot',
    slug: 'quote',
    definition: 'Ein Festpreisangebot für bestimmte Waren oder Dienstleistungen, typischerweise für einen festgelegten Zeitraum gültig.',
    extendedDescription: 'Im Gegensatz zu Kostenvoranschlägen gelten Angebote im Allgemeinen als verbindlich, sobald sie akzeptiert werden. Sie sollten genau angeben, was enthalten ist, die Gültigkeitsdauer, Zahlungsbedingungen und etwaige Auflagen. Professionelle Angebote stärken das Kundenvertrauen und reduzieren Scope Creep.',
    relatedTerms: ['estimate', 'proposal', 'invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Angebot / Vorschlag',
    slug: 'proposal',
    definition: 'Ein detailliertes Dokument, das Lösungen, Vorgehensweise, Zeitplan und Preise zur Neukundengewinnung präsentiert.',
    extendedDescription: 'Geschäftsvorschläge gehen über die Preisgestaltung hinaus und demonstrieren das Verständnis der Kundenbedürfnisse, die vorgeschlagene Methodik, relevante Erfahrung und erwartete Ergebnisse. Effektive Vorschläge sind individuell, professionell und kommunizieren klar den Mehrwert. Sie enthalten häufig Geschäftsbedingungen.',
    relatedTerms: ['estimate', 'quote', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['how-to-write-winning-business-proposal']
  },
  {
    term: 'Dauerauftrag / Retainer',
    slug: 'retainer',
    definition: 'Eine laufende Gebühr zur Sicherung fortlaufender Dienstleistungen, oft monatlich für eine festgelegte Anzahl von Stunden oder Leistungen abgerechnet.',
    extendedDescription: 'Retainer-Vereinbarungen bieten vorhersehbare Einnahmen für Dienstleister und Prioritätszugang für Kunden. Sie legen typischerweise Mindeststunden/-leistungen, Übertragungsrichtlinien und Leistungsgrenzen fest. Monatliche Retainer sind üblich in Beratung, Recht und Kreativdienstleistungen.',
    relatedTerms: ['recurring-invoice', 'service-agreement', 'scope-of-work'],
    category: 'business'
  },
  {
    term: 'Leistungsbeschreibung',
    slug: 'scope-of-work',
    definition: 'Ein Dokument, das die spezifischen Aufgaben, Liefergegenstände, Zeitpläne und Grenzen eines Projekts oder Auftrags definiert.',
    extendedDescription: 'Eine klare Leistungsbeschreibung verhindert Missverständnisse und Scope Creep. Sie sollte detailliert angeben, was enthalten ist und was nicht, Meilensteine, Abnahmekriterien und wie Änderungen gehandhabt werden. Beide Parteien sollten der Leistungsbeschreibung vor Arbeitsbeginn zustimmen.',
    relatedTerms: ['proposal', 'contract', 'deliverable'],
    category: 'business',
    relatedArticles: ['freelance-contract-templates']
  },
  {
    term: 'Bestellung',
    slug: 'purchase-order',
    definition: 'Ein Geschäftsdokument, das von einem Käufer an einen Verkäufer ausgestellt wird und eine Kauftransaktion autorisiert.',
    extendedDescription: 'Bestellungen formalisieren die Kaufabsicht und begründen bei Annahme eine vertragliche Verpflichtung. Sie geben Produkte/Dienstleistungen, Mengen, Preise und Lieferbedingungen an. Bei B2B-Transaktionen verweisen Rechnungen oft auf die entsprechende Bestellnummer zum Abgleich.',
    relatedTerms: ['invoice', 'vendor', 'procurement'],
    category: 'business'
  },
  // Freiberufler
  {
    term: 'Abrechnungsfähige Stunden',
    slug: 'billable-hours',
    definition: 'Zeit, die für Kundenarbeit aufgewendet wird und dem Kunden in Rechnung gestellt werden kann, im Gegensatz zu Verwaltungs- oder nicht abrechnungsfähiger Zeit.',
    extendedDescription: 'Die genaue Erfassung abrechnungsfähiger Stunden ist für Freiberufler und Berater unerlässlich. Typischerweise sind nur 60-70 % der Gesamtarbeitszeit abrechnungsfähig aufgrund von Verwaltung, Marketing und Geschäftsentwicklung. Stundensätze sollten diese Realität berücksichtigen, um die Rentabilität zu erhalten.',
    relatedTerms: ['time-tracking', 'hourly-rate', 'utilization-rate'],
    category: 'freelancing',
    relatedArticles: ['freelance-time-tracking-guide']
  },
  {
    term: 'Scope Creep',
    slug: 'scope-creep',
    definition: 'Die schleichende Ausweitung eines Projekts über seine ursprünglichen Grenzen hinaus, oft ohne entsprechende Anpassungen von Budget oder Zeitplan.',
    extendedDescription: 'Scope Creep schmälert die Rentabilität und belastet Kundenbeziehungen. Verhindern Sie es mit klaren Leistungsbeschreibungen, Änderungsantragsverfahren und regelmäßigen Projektüberprüfungen. Wenn zusätzliche Arbeit angefordert wird, dokumentieren Sie diese und besprechen Sie Budgetauswirkungen, bevor Sie fortfahren.',
    relatedTerms: ['scope-of-work', 'change-order', 'project-management'],
    category: 'freelancing'
  },
  {
    term: 'Meilensteinzahlung',
    slug: 'milestone-payment',
    definition: 'Eine Zahlungsstruktur, bei der Teilbeträge bei Abschluss definierter Projektphasen gezahlt werden.',
    extendedDescription: 'Meilensteinzahlungen reduzieren das Risiko für beide Parteien, indem sie Zahlungen an Liefergegenstände knüpfen. Gängige Strukturen umfassen 50 % Vorauszahlung/50 % bei Fertigstellung oder Drittel (33 % Start, 33 % Mitte, 34 % Abschluss). Definieren Sie klare, messbare Meilensteine in Ihrem Vertrag.',
    relatedTerms: ['payment-terms', 'project-management', 'deliverable'],
    category: 'freelancing'
  },
  // Ausgabenverwaltung
  {
    term: 'Spesenabrechnung',
    slug: 'expense-report',
    definition: 'Ein Dokument, das die von einem Mitarbeiter oder Auftragnehmer angefallenen Geschäftsausgaben auflistet, typischerweise zur Erstattung oder für Steuerzwecke eingereicht.',
    extendedDescription: 'Spesenabrechnungen enthalten typischerweise Datum, Anbieter, Betrag, Kategorie und Belegdokumentation. Sie dienen sowohl der internen Nachverfolgung als auch der Steuerkonformität. Moderne Spesenverwaltungssoftware automatisiert die Berichtserstellung durch Import von Transaktionen und Anhängen gescannter Belege.',
    relatedTerms: ['tax-deduction', 'accounts-payable', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Belegerfassung (OCR)',
    slug: 'receipt-scanning',
    definition: 'Der Prozess der Verwendung optischer Zeichenerkennung zur Digitalisierung und Datenextraktion aus Papierbelegen.',
    extendedDescription: 'OCR-Technologie liest gedruckten Text auf Belegen und wandelt ihn in strukturierte digitale Daten um — Anbieternamen, Daten, Beträge und Steuerinformationen werden automatisch extrahiert. Dies eliminiert manuelle Dateneingabe, reduziert Fehler und erstellt durchsuchbare digitale Aufzeichnungen, die von Steuerbehörden akzeptiert werden.',
    relatedTerms: ['expense-report', 'tax-deduction'],
    category: 'accounting',
    relatedArticles: ['receipt-scanning-apps-comparison', 'digital-receipt-management-guide']
  },
  {
    term: 'Ausgabenkategorie',
    slug: 'expense-category',
    definition: 'Eine Klassifizierungsgruppe für Geschäftsausgaben, die dem Kontenplan und den Steuerberichtszeilen zugeordnet wird.',
    extendedDescription: 'Die korrekte Ausgabenkategorisierung ist für genaue Finanzberichterstattung und Steuererklärung unerlässlich. Gängige Kategorien umfassen Bürobedarf, Reisen, professionelle Dienstleistungen, Software/Abonnements und Marketing. Kategorien sollten mit Ihrem Kontenplan übereinstimmen und direkt auf steuerlich absetzbare Positionen abbilden.',
    relatedTerms: ['chart-of-accounts', 'tax-deduction', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['business-expense-categories-guide']
  },
  {
    term: 'Erstattungsfähige Ausgabe',
    slug: 'reimbursable-expense',
    definition: 'Eine Geschäftsausgabe, die von einem Mitarbeiter oder Auftragnehmer bezahlt wurde und vom Kunden oder Arbeitgeber erstattet werden kann.',
    extendedDescription: 'Erstattungsfähige Ausgaben unterscheiden sich von steuerlich absetzbaren Ausgaben. Während absetzbare Ausgaben Ihr steuerpflichtiges Einkommen reduzieren, sind erstattungsfähige Ausgaben Kosten, die Sie im Auftrag eines Kunden getragen haben und ihm in Rechnung stellen können. Gängige Beispiele sind Reisekosten, für ein Projekt gekaufte Materialien und für Kundenarbeit erworbene Softwarelizenzen.',
    relatedTerms: ['expense-report', 'invoice', 'accounts-receivable'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Ausgabenverfolgung',
    slug: 'expense-tracking',
    definition: 'Der systematische Prozess der Erfassung, Kategorisierung und Überwachung aller Geschäftsausgaben.',
    extendedDescription: 'Effektive Ausgabenverfolgung umfasst die Echtzeit-Erfassung jedes Geschäftseinkaufs, korrekte Kategorisierung und Pflege unterstützender Dokumentation wie Belege. Methoden reichen von einfachen Tabellenkalkulationen bis zu automatisierter Software, die mit Bankkonten synchronisiert. Konsistente Erfassung ermöglicht genaue Finanzberichterstattung, Steuervorbereitung und Cashflow-Management.',
    relatedTerms: ['expense-category', 'receipt-scanning', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-tracking-methods-small-business']
  },
  {
    term: 'Digitaler Beleg',
    slug: 'digital-receipt',
    definition: 'Eine elektronische Version eines Kaufbelegs, entweder digital empfangen oder durch Scannen eines Papierbelegs erstellt.',
    extendedDescription: 'Digitale Belege werden von praktisch allen Steuerbehörden weltweit als gültiger Kaufnachweis akzeptiert. Sie bieten Vorteile gegenüber Papier: Sie verblassen nicht, sind sofort durchsuchbar, nehmen keinen physischen Platz ein und können automatisch mit Ausgabeneinträgen abgeglichen werden. Best Practice ist die sofortige Digitalisierung von Papierbelegen nach Erhalt.',
    relatedTerms: ['receipt-scanning', 'expense-tracking', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['digital-receipt-management-guide']
  },
  // Kundenmanagement
  {
    term: 'Kunden-Onboarding',
    slug: 'client-onboarding',
    definition: 'Der strukturierte Prozess der Begrüßung und Integration eines neuen Kunden in Ihren Geschäftsablauf.',
    extendedDescription: 'Ein professioneller Onboarding-Prozess setzt Erwartungen, baut Vertrauen auf und reduziert Missverständnisse von Anfang an. Wichtige Elemente umfassen ein Willkommenspaket, Projektfragebogen, unterschriebenen Vertrag oder Leistungsbeschreibung, Einrichtung der Zahlungsbedingungen, Kick-off-Meeting und gemeinsamen Projektzeitplan.',
    relatedTerms: ['scope-of-work', 'proposal', 'retainer'],
    category: 'business',
    relatedArticles: ['client-onboarding-process']
  },
  {
    term: 'Kundenbindung',
    slug: 'client-retention',
    definition: 'Die Strategien und Praktiken zur Aufrechterhaltung laufender Beziehungen mit bestehenden Kunden und Förderung von Folgeaufträgen.',
    extendedDescription: 'Kundenbindung ist typischerweise 5-7x kosteneffektiver als Neukundenakquise. Wichtige Strategien umfassen konsistente Kommunikation, Übererfüllung von Erwartungen, Angebot von Retainer-Paketen, Feedback-Einholung durch NPS-Umfragen und Vereinfachung der Zusammenarbeit durch Tools wie Kundenportale und automatisierte Rechnungsstellung.',
    relatedTerms: ['retainer', 'client-onboarding', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['client-retention-strategies']
  },
  {
    term: 'CRM (Kundenbeziehungsmanagement)',
    slug: 'crm',
    definition: 'Ein System oder eine Software zur Verwaltung von Interaktionen mit aktuellen und potenziellen Kunden, Nachverfolgung von Kommunikation und Organisation von Kundendaten.',
    extendedDescription: 'CRM-Systeme reichen von einfachen Tabellenkalkulationen bis zu Enterprise-Software wie Salesforce. Für Freiberufler und kleine Unternehmen reicht in der Regel ein leichtgewichtiges CRM, das Kontaktdaten, Projekthistorie, Kommunikationsprotokolle und Zahlungsstatus verfolgt. Viele Rechnungsplattformen beinhalten grundlegende CRM-Funktionen.',
    relatedTerms: ['client-onboarding', 'client-retention'],
    category: 'business',
    relatedArticles: ['crm-for-freelancers-small-business']
  },
  {
    term: 'Kundenkommunikation',
    slug: 'client-communication',
    definition: 'Der strukturierte Informationsaustausch zwischen einem Dienstleister und seinem Kunden während eines Projekts oder Auftrags.',
    extendedDescription: 'Effektive Kundenkommunikation umfasst regelmäßige Statusupdates, klare Reaktion auf Änderungswünsche, professionelle Zahlungserinnerungen und proaktive Problemberichterstattung. Die Verwendung von Vorlagen für häufige Kommunikation spart Zeit bei gleichbleibender Konsistenz. Ein Kommunikationsrhythmus sollte beim Onboarding festgelegt werden.',
    relatedTerms: ['client-onboarding', 'scope-of-work', 'scope-creep'],
    category: 'business',
    relatedArticles: ['client-communication-templates']
  }
];

registerGlossaryTerms('de', glossaryTermsDE);
