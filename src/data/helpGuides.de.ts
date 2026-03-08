import type { HelpGuide } from './helpGuides';
import { registerHelpGuides } from '@/utils/i18nData';

const helpGuidesDE: HelpGuide[] = [
  // ─── Guide 1: Erste Schritte ───
  {
    slug: 'getting-started',
    title: 'Erste Schritte mit Invoicemonk — Ihre erste Rechnung in 5 Minuten',
    description: 'Richten Sie Ihr Konto ein, vervollständigen Sie Ihr Unternehmensprofil und erstellen Sie Ihre erste gesetzeskonforme Rechnung.',
    icon: 'Rocket',
    category: 'getting-started',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Konto erstellen', text: 'Besuchen Sie app.invoicemonk.com, klicken Sie auf „Kostenlos starten", geben Sie Ihre Daten ein und bestätigen Sie Ihre E-Mail-Adresse.' },
      { name: 'Unternehmensprofil einrichten', text: 'Geben Sie Ihren Firmennamen, juristischen Namen, Land, Steuer-ID, Logo, Adresse und ggf. USt-Daten ein.' },
      { name: 'Tarif wählen', text: 'Starten Sie mit dem kostenlosen Starter-Tarif oder upgraden Sie auf Starter Paid, Professional oder Business für mehr Funktionen.' },
      { name: 'Zahlungsmethoden einrichten', text: 'Fügen Sie Ihre Bankverbindung oder Mobile-Money-Daten hinzu, damit Kunden wissen, wie sie bezahlen können.' },
    ],
    relatedGuides: ['managing-clients', 'creating-invoices', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com/signup',
    faq: [
      { question: 'Ist Invoicemonk kostenlos?', answer: 'Ja, der Starter-Tarif ist vollständig kostenlos. Sie können Rechnungen erstellen, Kunden verwalten und grundlegende Ausgaben verfolgen – ohne Kosten. Für erweiterte Funktionen wie Berichte, Teamverwaltung und individuelles Branding können Sie upgraden.' },
      { question: 'Benötige ich eine Steuer-ID, um Invoicemonk zu nutzen?', answer: 'Eine Steuer-ID ist zum Erstellen eines Kontos nicht zwingend erforderlich, aber das Hinzufügen Ihrer Steuer-Identifikationsnummer stellt sicher, dass Ihre Rechnungen den lokalen Vorschriften entsprechen.' },
      { question: 'Wie vervollständige ich mein Unternehmensprofil auf 100 %?', answer: 'Füllen Sie alle Felder aus: Firmenname, juristischer Name, Steuer-ID, USt-Nummer (falls zutreffend), Logo, vollständige Adresse, Kontakt-E-Mail und Telefonnummer. Invoicemonk zeigt Ihren Fortschritt in Prozent und hebt fehlende Felder hervor.' },
    ],
    content: `
      <h2>Schritt 1: Konto erstellen</h2>
      <p>Der Einstieg bei Invoicemonk dauert weniger als zwei Minuten. Besuchen Sie <a href="https://app.invoicemonk.com" target="_blank" rel="noopener noreferrer">app.invoicemonk.com</a> und klicken Sie auf <strong>„Kostenlos starten"</strong>.</p>
      <ul>
        <li>Geben Sie Ihren vollständigen Namen, Ihre E-Mail-Adresse und ein sicheres Passwort ein</li>
        <li>Bestätigen Sie Ihre E-Mail-Adresse über den zugesandten Link</li>
        <li>Die E-Mail-Bestätigung ist erforderlich, bevor Sie Rechnungen erstellen können</li>
      </ul>

      <h2>Schritt 2: Unternehmensprofil einrichten</h2>
      <p>Nach der Anmeldung werden Sie aufgefordert, Ihr Unternehmen anzulegen. Diese Informationen erscheinen auf all Ihren Rechnungen und gewährleisten die Einhaltung gesetzlicher Vorschriften.</p>
      <ul>
        <li>Geben Sie Ihren <strong>Firmennamen</strong> und <strong>juristischen Namen</strong> ein</li>
        <li>Wählen Sie Ihr <strong>Land / Rechtsgebiet</strong></li>
        <li>Fügen Sie Ihre <strong>Steuer-Identifikationsnummer (Steuer-ID)</strong> hinzu</li>
        <li>Laden Sie Ihr <strong>Firmenlogo</strong> hoch (erscheint auf allen Rechnungen)</li>
        <li>Geben Sie Ihre Geschäftsadresse, Kontakt-E-Mail und Telefonnummer ein</li>
        <li>Wenn Sie umsatzsteuerpflichtig sind, aktivieren Sie die USt-Option und geben Ihre USt-Nummer ein</li>
      </ul>

      <h2>Schritt 3: Tarif wählen</h2>
      <p>Invoicemonk bietet einen kostenlosen Starter-Tarif für den Einstieg. Mit wachsendem Geschäft können Sie upgraden:</p>
      <ul>
        <li><strong>Starter (Kostenlos)</strong> — Grundlegende Rechnungsstellung und Kundenverwaltung</li>
        <li><strong>Starter Paid</strong> — Mehr Rechnungen und Ausgabenverfolgung</li>
        <li><strong>Professional</strong> — Berichte, Teamverwaltung, individuelle Vorlagen</li>
        <li><strong>Business</strong> — Komplettpaket mit Prüfprotokollen, Mehrwährung und Prioritätssupport</li>
      </ul>
      <p>Die Preise passen sich je nach Region an. Besuchen Sie unsere <a href="__LANG__/pricing">Preisseite</a> für alle Details.</p>

      <h2>Schritt 4: Zahlungsmethoden einrichten</h2>
      <p>Gehen Sie zu <strong>Unternehmenseinstellungen</strong> und fügen Sie Ihre Zahlungsdaten (Bankverbindung, Mobile Money usw.) hinzu. Diese erscheinen auf Ihren Rechnungen, damit Kunden genau wissen, wie sie bezahlen können.</p>

      <div class="callout">
        <strong>Profi-Tipp:</strong> Vervollständigen Sie Ihr Unternehmensprofil auf 100 % — so stellen Sie sicher, dass alle Ihre Rechnungen den lokalen Vorschriften entsprechen. Invoicemonk zeigt Ihren Fortschritt in Prozent und hebt fehlende Felder hervor.
      </div>
    `,
  },

  // ─── Guide 2: Kundenverwaltung ───
  {
    slug: 'managing-clients',
    title: 'Kundendatenbank aufbauen und verwalten',
    description: 'Kunden hinzufügen, deren Daten speichern und schnell Rechnungen erstellen, ohne Informationen erneut eingeben zu müssen.',
    icon: 'Users',
    category: 'getting-started',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Zu Kunden navigieren', text: 'Klicken Sie auf „Kunden" in der Seitenleiste, um auf Ihre Kundendatenbank zuzugreifen.' },
      { name: 'Neuen Kunden hinzufügen', text: 'Klicken Sie auf „Kunde hinzufügen", wählen Sie Unternehmen oder Einzelperson und geben Sie Name, E-Mail, Telefon, Land und Steuer-ID ein.' },
      { name: 'Adressdaten hinzufügen', text: 'Erweitern Sie den Adressbereich, um die vollständige Geschäftsadresse für die Rechnungskonformität hinzuzufügen.' },
      { name: 'Suchen und verwalten', text: 'Nutzen Sie die Suchleiste, um Kunden nach Name oder E-Mail zu finden. Klicken Sie auf eine Kundenkarte, um Details und Rechnungshistorie anzuzeigen.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'notifications-reminders'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Warum wird die Steuer-ID des Kunden für B2B-Rechnungen benötigt?', answer: 'Für B2B-Transaktionen verlangen Steuervorschriften die Steuer-Identifikationsnummer des Kunden auf der Rechnung. Invoicemonk warnt Sie, wenn Sie versuchen, eine B2B-Rechnung ohne diese auszustellen.' },
      { question: 'Kann ich Kunden aus einer Tabelle importieren?', answer: 'Derzeit werden Kunden einzeln über das Dashboard hinzugefügt. Der Massenimport per CSV ist für eine zukünftige Version geplant.' },
    ],
    content: `
      <h2>Neuen Kunden hinzufügen</h2>
      <p>Bevor Sie Rechnungen erstellen können, müssen Sie Ihre Kunden anlegen. Invoicemonk speichert alle Kundendaten, damit Sie Rechnungen schnell erstellen können, ohne jedes Mal Informationen erneut einzugeben.</p>
      <ul>
        <li>Navigieren Sie zu <strong>Kunden</strong> in der Seitenleiste</li>
        <li>Klicken Sie auf <strong>Kunde hinzufügen</strong></li>
        <li>Wählen Sie den Kundentyp: <strong>Unternehmen</strong> oder <strong>Einzelperson</strong></li>
        <li>Geben Sie Name, E-Mail und Telefonnummer des Kunden ein</li>
        <li>Wählen Sie das Land / den Standort des Kunden</li>
        <li>Für die Konformität: Fügen Sie die <strong>Steuer-ID</strong> hinzu — besonders wichtig für B2B-Transaktionen</li>
        <li>Für Unternehmen optional: <strong>Handelsregisternummer</strong> und Ansprechpartner</li>
        <li>Erweitern Sie den <strong>Adressbereich</strong>, um die vollständige Adresse hinzuzufügen</li>
      </ul>

      <h2>Kunden suchen und verwalten</h2>
      <ul>
        <li>Nutzen Sie die <strong>Suchleiste</strong>, um Kunden schnell nach Name oder E-Mail zu finden</li>
        <li>Klicken Sie auf eine Kundenkarte, um Details, Rechnungshistorie und Gesamtbetrag einzusehen</li>
        <li>Bearbeiten Sie Kundendaten jederzeit von der Kundendetailseite aus</li>
      </ul>

      <div class="callout">
        <strong>Konformitätshinweis:</strong> Für B2B-Transaktionen ist die Steuer-ID des Kunden für die Rechnungskonformität erforderlich. Invoicemonk warnt Sie, wenn Sie versuchen, eine B2B-Rechnung ohne Steuer-ID des Kunden auszustellen.
      </div>
    `,
  },

  // ─── Guide 3: Rechnungen erstellen ───
  {
    slug: 'creating-invoices',
    title: 'Professionelle, gesetzeskonforme Rechnungen erstellen',
    description: 'Erstellen, ausstellen, versenden und herunterladen Sie kryptografisch verifizierte Rechnungen mit vollständigem Prüfprotokoll.',
    icon: 'FileText',
    category: 'core-features',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Neue Rechnung starten', text: 'Klicken Sie auf „Rechnung erstellen" vom Dashboard oder navigieren Sie zu Rechnungen → Neue Rechnung.' },
      { name: 'Kunde und Vorlage wählen', text: 'Wählen Sie einen Kunden aus Ihrer Datenbank und eine Rechnungsvorlage.' },
      { name: 'Positionen hinzufügen', text: 'Geben Sie Beschreibungen, Mengen und Einzelpreise ein. Die Steuer wird für umsatzsteuerpflichtige Unternehmen automatisch berechnet.' },
      { name: 'Speichern oder Ausstellen', text: 'Als Entwurf speichern zur späteren Bearbeitung oder Ausstellen, um die Rechnung zu sperren, eine Nummer zuzuweisen und einen Verifizierungs-QR-Code zu generieren.' },
      { name: 'An Kunden senden', text: 'Klicken Sie auf Senden, um die Rechnung per E-Mail zu versenden. Der Kunde erhält einen Link zur Online-Ansicht.' },
    ],
    relatedGuides: ['managing-clients', 'payments-receipts', 'invoice-verification', 'credit-notes'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Kann ich eine Rechnung nach dem Ausstellen bearbeiten?', answer: 'Nein. Ausgestellte Rechnungen sind gesperrt, um die Prüfintegrität zu gewährleisten. Wenn Sie Änderungen vornehmen müssen, stornieren Sie die Rechnung und erstellen eine neue, oder stellen Sie eine Gutschrift für Anpassungen aus.' },
      { question: 'Welche Rechnungsstatus gibt es?', answer: 'Entwurf, Ausgestellt, Gesendet, Angesehen, Bezahlt, Storniert und Gutgeschrieben. Jeder Status wird mit Zeitstempeln im Prüfprotokoll verfolgt.' },
      { question: 'Wird die USt automatisch berechnet?', answer: 'Ja, für umsatzsteuerpflichtige Unternehmen wird der jeweilige USt-Satz automatisch angewendet. Sie können einzelne Positionen als USt-befreit markieren.' },
    ],
    content: `
      <h2>Neue Rechnung erstellen</h2>
      <p>Der Rechnungsworkflow ist das Herzstück von Invoicemonk. Jede Rechnung wird kryptografisch verifiziert und enthält ein unveränderliches Prüfprotokoll.</p>
      <ul>
        <li>Klicken Sie auf <strong>Rechnung erstellen</strong> vom Dashboard oder navigieren Sie zu <strong>Rechnungen → Neue Rechnung</strong></li>
        <li>Wählen Sie einen <strong>Kunden</strong> aus Ihrer Datenbank (oder fügen Sie einen neuen inline hinzu)</li>
        <li>Wählen Sie eine <strong>Rechnungsvorlage</strong> (Professional-Tarif und höher)</li>
        <li>Legen Sie das <strong>Ausstellungsdatum</strong> und <strong>Fälligkeitsdatum</strong> fest</li>
      </ul>

      <h2>Positionen hinzufügen</h2>
      <ul>
        <li>Geben Sie eine <strong>Beschreibung</strong> für jede Position ein</li>
        <li>Legen Sie <strong>Menge</strong> und <strong>Einzelpreis</strong> fest</li>
        <li>Der Steuersatz wird für umsatzsteuerpflichtige Unternehmen automatisch berechnet</li>
        <li>Markieren Sie einzelne Positionen als <strong>USt-befreit</strong>, falls zutreffend</li>
        <li>Fügen Sie optionale Notizen, Bedingungen und eine Zusammenfassung hinzu</li>
        <li>Wählen Sie die <strong>Zahlungsmethode</strong>, die auf der Rechnung angezeigt werden soll</li>
      </ul>

      <h2>Speichern vs. Ausstellen</h2>
      <ul>
        <li><strong>Als Entwurf speichern:</strong> Speichert die Rechnung ohne Zuweisung einer Rechnungsnummer. Sie können sie später bearbeiten.</li>
        <li><strong>Ausstellen:</strong> Sperrt die Rechnung, weist eine offizielle Rechnungsnummer zu, erstellt einen kryptografischen Hash und generiert einen QR-Verifizierungscode. Ausgestellte Rechnungen können nicht bearbeitet werden.</li>
      </ul>

      <h2>Rechnungsstatus</h2>
      <ul>
        <li><strong>Entwurf</strong> — Gespeichert, aber noch nicht ausgestellt</li>
        <li><strong>Ausgestellt</strong> — Offiziell ausgestellt mit Nummer und Verifizierungscode</li>
        <li><strong>Gesendet</strong> — E-Mail an den Kunden zugestellt</li>
        <li><strong>Angesehen</strong> — Kunde hat den Rechnungslink geöffnet</li>
        <li><strong>Bezahlt</strong> — Vollständige Zahlung erfasst</li>
        <li><strong>Storniert</strong> — Abgebrochen (mit protokolliertem Grund)</li>
        <li><strong>Gutgeschrieben</strong> — Eine Gutschrift wurde für diese Rechnung ausgestellt</li>
      </ul>

      <h2>Rechnungen versenden</h2>
      <p>Klicken Sie auf der Rechnungsdetailseite auf <strong>Senden</strong>, um die Rechnung per E-Mail an Ihren Kunden zu senden. Der Kunde erhält eine professionelle E-Mail mit einem Link zur Online-Ansicht. Sie werden benachrichtigt, wenn der Kunde sie ansieht.</p>

      <h2>PDFs herunterladen</h2>
      <p>Klicken Sie bei jeder ausgestellten Rechnung auf <strong>PDF herunterladen</strong>, um ein professionelles PDF mit Ihrem Logo, QR-Code und allen Konformitätsdetails zu erhalten.</p>
    `,
  },

  // ─── Guide 4: Zahlungen & Quittungen ───
  {
    slug: 'payments-receipts',
    title: 'Zahlungen erfassen und Quittungen erstellen',
    description: 'Erfassen Sie vollständige oder teilweise Zahlungen und erstellen Sie automatisch kryptografisch verifizierte Quittungen.',
    icon: 'CreditCard',
    category: 'core-features',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Rechnung öffnen', text: 'Navigieren Sie zur Rechnungsseite und öffnen Sie die Rechnung, für die Sie eine Zahlung erfassen möchten.' },
      { name: 'Zahlung erfassen', text: 'Klicken Sie auf „Zahlung erfassen", geben Sie Betrag, Datum, Zahlungsmethode ein und laden Sie optional einen Zahlungsnachweis hoch.' },
      { name: 'Teilzahlungen verwalten', text: 'Erfassen Sie mehrere Teilzahlungen für eine einzelne Rechnung. Der Status ändert sich erst auf „Bezahlt", wenn der Gesamtbetrag eingegangen ist.' },
      { name: 'Quittungen ansehen und teilen', text: 'Navigieren Sie zu Quittungen, um alle generierten Quittungen zu sehen. Laden Sie PDFs herunter oder teilen Sie den Verifizierungslink.' },
    ],
    relatedGuides: ['creating-invoices', 'invoice-verification', 'reports-exports'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Werden Quittungen automatisch erstellt?', answer: 'Ja. Jedes Mal, wenn Sie eine Zahlung erfassen, wird automatisch eine offizielle Quittung mit eindeutiger Quittungsnummer, Verifizierungs-ID und allen Zahlungsdetails generiert.' },
      { question: 'Kann ich Teilzahlungen erfassen?', answer: 'Ja. Sie können mehrere Teilzahlungen für eine einzelne Rechnung erfassen. Die Rechnung zeigt die laufende Summe und ändert den Status erst auf „Bezahlt", wenn der Gesamtbetrag eingegangen ist.' },
    ],
    content: `
      <h2>Zahlung erfassen</h2>
      <p>Wenn Ihr Kunde bezahlt, generiert die Zahlungserfassung in Invoicemonk automatisch eine unveränderliche Quittung mit kryptografischer Verifizierung.</p>
      <ul>
        <li>Öffnen Sie die Rechnung auf der <strong>Rechnungsseite</strong></li>
        <li>Klicken Sie auf <strong>Zahlung erfassen</strong></li>
        <li>Geben Sie Zahlungsbetrag, Datum und Zahlungsmethode ein</li>
        <li>Laden Sie optional einen Zahlungsnachweis hoch (Banküberweisung-Screenshot usw.)</li>
        <li>Klicken Sie auf <strong>Erfassen</strong> — der Rechnungsstatus ändert sich auf „Bezahlt", wenn vollständig bezahlt</li>
      </ul>

      <h2>Teilzahlungen</h2>
      <p>Sie können mehrere Teilzahlungen für eine einzelne Rechnung erfassen. Die Rechnung zeigt die laufende Summe der eingegangenen Zahlungen im Vergleich zum fälligen Betrag. Der Status ändert sich erst auf „Bezahlt", wenn der Gesamtbetrag eingegangen ist.</p>

      <h2>Automatische Quittungen</h2>
      <ul>
        <li>Jede Zahlung generiert automatisch eine offizielle Quittung</li>
        <li>Quittungen enthalten eine eindeutige Quittungsnummer, Verifizierungs-ID und alle Zahlungsdetails</li>
        <li>Navigieren Sie zu <strong>Quittungen</strong>, um alle generierten Quittungen zu sehen</li>
        <li>Laden Sie Quittungs-PDFs herunter oder teilen Sie den Verifizierungslink mit Kunden</li>
      </ul>

      <h2>Quittungsverifizierung</h2>
      <p>Jede Quittung hat einen öffentlichen Verifizierungslink, den jeder nutzen kann, um die Echtheit zu bestätigen. Teilen Sie den Link oder lassen Sie Kunden den QR-Code auf dem PDF scannen.</p>
    `,
  },

  // ─── Guide 5: Rechnungsverifizierung ───
  {
    slug: 'invoice-verification',
    title: 'QR-Code-Verifizierung — Echtheit von Rechnungen nachweisen',
    description: 'Verstehen Sie, wie kryptografische Verifizierung und QR-Codes die Dokumentenechtheit beweisen.',
    icon: 'Shield',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Rechnung ausstellen', text: 'Beim Ausstellen einer Rechnung erstellt Invoicemonk automatisch einen kryptografischen Hash und generiert eine eindeutige Verifizierungs-ID und einen QR-Code.' },
      { name: 'Mit Vertrauen teilen', text: 'Senden Sie die Rechnung an Ihren Kunden. Der QR-Code ist im PDF und in der Online-Ansicht eingebettet.' },
      { name: 'Echtheit prüfen', text: 'Jeder kann den QR-Code scannen oder die Verifizierungs-URL besuchen, um zu bestätigen, dass das Dokument echt und unverändert ist.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: '/compliance',
    faq: [
      { question: 'Kann jeder meine Rechnungen verifizieren?', answer: 'Ja. Die Verifizierungsseite ist öffentlich. Jeder mit dem QR-Code oder der Verifizierungs-URL — Kunden, Prüfer, Aufsichtsbehörden — kann die Echtheit des Dokuments unabhängig bestätigen.' },
      { question: 'Was zeigt die Verifizierungsseite an?', answer: 'Die Verifizierungsseite zeigt den Dokumentenstatus, Beträge, Daten und bestätigt, dass die Daten mit dem ursprünglichen kryptografischen Hash übereinstimmen, was beweist, dass die Rechnung nicht manipuliert wurde.' },
    ],
    content: `
      <h2>So funktioniert die Verifizierung</h2>
      <p>Jede ausgestellte Rechnung und Quittung auf Invoicemonk verfügt über eine eindeutige Verifizierungs-ID und einen QR-Code. Dies ermöglicht es jedem — Ihrem Kunden, einem Prüfer oder einer Aufsichtsbehörde — die Echtheit des Dokuments unabhängig zu überprüfen.</p>
      <ul>
        <li>Beim Ausstellen einer Rechnung erstellt Invoicemonk einen <strong>kryptografischen Hash</strong> aller Rechnungsdaten</li>
        <li>Eine <strong>eindeutige Verifizierungs-ID</strong> wird zugewiesen und ein <strong>QR-Code</strong> generiert</li>
        <li>Der QR-Code verlinkt auf eine öffentliche Verifizierungsseite mit den Rechnungsdetails</li>
        <li>Jeder, der den QR-Code scannt oder die Verifizierungs-URL besucht, kann bestätigen, dass die Rechnung echt und unverändert ist</li>
      </ul>

      <h2>Rechnung verifizieren</h2>
      <ul>
        <li>Scannen Sie den <strong>QR-Code</strong> auf jeder Invoicemonk-Rechnung oder -Quittung</li>
        <li>Oder besuchen Sie die <strong>Verifizierungs-URL</strong> direkt</li>
        <li>Die Verifizierungsseite zeigt den Dokumentenstatus, Beträge, Daten und die Bestätigung der Datenübereinstimmung</li>
      </ul>
    `,
  },

  // ─── Guide 6: Gutschriften ───
  {
    slug: 'credit-notes',
    title: 'Gutschriften für stornierte oder angepasste Rechnungen ausstellen',
    description: 'Rechnungen rückgängig machen oder anpassen und dabei eine vollständige, prüfbare Dokumentation beibehalten.',
    icon: 'RotateCcw',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Zur Originalrechnung navigieren', text: 'Öffnen Sie die Rechnung, die rückgängig gemacht oder angepasst werden muss.' },
      { name: 'Rechnung stornieren', text: 'Klicken Sie auf „Stornieren" und geben Sie einen Grund für die Stornierung an. Eine Gutschrift wird automatisch erstellt.' },
      { name: 'Gutschriften ansehen', text: 'Navigieren Sie zu Gutschriften in der Seitenleiste, um alle Gutschriften mit ihren verknüpften Rechnungen zu sehen.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Wann sollte ich eine Gutschrift ausstellen?', answer: 'Stellen Sie eine Gutschrift aus, wenn einem Kunden zu viel berechnet wurde, Leistungen nicht erbracht wurden, eine Rechnung irrtümlich ausgestellt wurde oder eine Teilrückerstattung erforderlich ist.' },
      { question: 'Kann ich eine Gutschrift nach der Erstellung bearbeiten?', answer: 'Nein. Wie Rechnungen sind Gutschriften nach der Erstellung unveränderlich. Sie erhalten ihre eigene eindeutige Nummer und Verifizierungs-ID für die Prüfintegrität.' },
    ],
    content: `
      <h2>Wann Gutschriften verwenden</h2>
      <p>Wenn Sie eine ausgestellte Rechnung rückgängig machen oder anpassen müssen, unterstützt Invoicemonk Gutschriften, die ein vollständiges Prüfprotokoll aufrechterhalten.</p>
      <ul>
        <li>Dem Kunden wurde zu viel berechnet</li>
        <li>Leistungen wurden nicht erbracht</li>
        <li>Rechnung wurde irrtümlich ausgestellt</li>
        <li>Teilrückerstattung erforderlich</li>
      </ul>

      <h2>Gutschrift erstellen</h2>
      <ul>
        <li>Navigieren Sie zur <strong>Originalrechnung</strong></li>
        <li>Klicken Sie auf <strong>Stornieren</strong> und geben Sie einen Grund an</li>
        <li>Eine Gutschrift wird automatisch mit Bezug auf die Originalrechnung erstellt</li>
        <li>Die Gutschrift erhält ihre eigene eindeutige Nummer und Verifizierungs-ID</li>
      </ul>

      <h2>Gutschriften ansehen</h2>
      <ul>
        <li>Navigieren Sie zu <strong>Gutschriften</strong> in der Seitenleiste</li>
        <li>Suchen Sie nach Gutschriftnummer, Original-Rechnungsnummer oder Kundenname</li>
        <li>Klicken Sie auf eine Gutschrift, um die vollständigen Details und die verknüpfte Rechnung zu sehen</li>
      </ul>
    `,
  },

  // ─── Guide 7: Ausgabenverfolgung ───
  {
    slug: 'expense-tracking',
    title: 'Geschäftsausgaben erfassen und kategorisieren',
    description: 'Ausgaben erfassen, kategorisieren und mit visuellen Aufschlüsselungen sehen, wohin Ihr Geld fließt.',
    icon: 'Receipt',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Zu Ausgaben navigieren', text: 'Klicken Sie auf „Ausgaben" in der Seitenleiste, um den Ausgabentracker zu öffnen.' },
      { name: 'Ausgabe hinzufügen', text: 'Klicken Sie auf „Ausgabe hinzufügen" und geben Sie Betrag, Datum, Beschreibung, Kategorie, Lieferantenname und optionale Notizen ein.' },
      { name: 'Filtern und suchen', text: 'Filtern Sie nach Kategorie, suchen Sie nach Beschreibung oder Lieferant und wechseln Sie zwischen Abrechnungszeiträumen.' },
      { name: 'Daten exportieren', text: 'Exportieren Sie Ausgaben als CSV oder JSON für Ihren Steuerberater oder die Steuererklärung, eingegrenzt auf den gewählten Zeitraum.' },
    ],
    relatedGuides: ['accounting-overview', 'reports-exports', 'business-settings'],
    targetFeature: '/expenses',
    faq: [
      { question: 'Welche Ausgabenkategorien gibt es?', answer: 'Invoicemonk bietet Standardkategorien wie Bürobedarf, Reisen, Software, Marketing, Beratungsleistungen und Versorgungsunternehmen. Kategorien helfen Ihnen, visuelle Aufschlüsselungen Ihrer Ausgaben zu sehen.' },
      { question: 'Kann ich Ausgaben für meinen Steuerberater exportieren?', answer: 'Ja. Exportieren Sie Ausgaben im CSV- oder JSON-Format. Exporte sind auf den gewählten Abrechnungszeitraum und das Währungskonto eingegrenzt.' },
    ],
    content: `
      <h2>Ausgabe hinzufügen</h2>
      <p>Der Ausgabentracker von Invoicemonk hilft Ihnen, Geschäftsausgaben zu erfassen, zu kategorisieren und zu sehen, wohin Ihr Geld fließt — alles nach Währungskonto getrennt für genaue Buchführung.</p>
      <ul>
        <li>Navigieren Sie zu <strong>Ausgaben</strong> in der Seitenleiste</li>
        <li>Klicken Sie auf <strong>Ausgabe hinzufügen</strong></li>
        <li>Geben Sie Betrag, Datum und Beschreibung ein</li>
        <li>Wählen Sie eine Kategorie (Bürobedarf, Reisen, Software, Marketing, Beratungsleistungen, Versorgungsunternehmen usw.)</li>
        <li>Fügen Sie Lieferantenname und optionale Notizen hinzu</li>
        <li>Speichern Sie die Ausgabe</li>
      </ul>

      <h2>Filtern und suchen</h2>
      <ul>
        <li>Filtern Sie Ausgaben nach Kategorie über das Dropdown-Menü</li>
        <li>Suchen Sie nach Beschreibung, Lieferant oder Notizen</li>
        <li>Wechseln Sie zwischen Abrechnungszeiträumen (monatlich, vierteljährlich, jährlich)</li>
      </ul>

      <h2>Ausgabenaufschlüsselung</h2>
      <p>Das Dashboard zeigt eine visuelle Aufschlüsselung der Ausgaben nach Kategorie mit Prozentangaben. Sehen Sie die Gesamtausgaben für den gewählten Zeitraum auf einen Blick.</p>

      <h2>Ausgaben exportieren</h2>
      <p>Exportieren Sie Ihre Ausgaben als CSV oder JSON für Ihren Steuerberater oder die Steuererklärung. Exporte sind auf den gewählten Zeitraum und das Währungskonto eingegrenzt.</p>
    `,
  },

  // ─── Guide 8: Buchhaltungsübersicht ───
  {
    slug: 'accounting-overview',
    title: 'Ihr Finanzüberblick — Einnahmen, Ausgaben und Ergebnisse',
    description: 'Verschaffen Sie sich einen Überblick über Ihre Finanzen mit Ansichten zu Einnahmen, Ausgaben und Gewinn/Verlust.',
    icon: 'Calculator',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Buchhaltungs-Einnahmen ansehen', text: 'Sehen Sie alle Umsätze aus bezahlten Rechnungen, gefiltert nach Abrechnungszeitraum, mit Einnahmentrends über die Zeit.' },
      { name: 'Buchhaltungs-Ausgaben prüfen', text: 'Überprüfen Sie alle erfassten Ausgaben mit Kategorieaufschlüsselungen und Zeitraumvergleichen.' },
      { name: 'Buchhaltungsergebnisse prüfen', text: 'Sehen Sie Nettoergebnis und Gewinnmarge, alles nach Währungskonto eingegrenzt.' },
    ],
    relatedGuides: ['expense-tracking', 'reports-exports', 'analytics'],
    targetFeature: '/accounting',
    faq: [
      { question: 'Ersetzt Invoicemonk eine Buchhaltungssoftware?', answer: 'Die Buchhaltungsfunktionen von Invoicemonk sind ein Management-Tool für die tägliche Übersicht über Ihre Finanzen. Für die formale Buchführung und Steuererklärung sollten Sie immer einen qualifizierten Steuerberater konsultieren.' },
      { question: 'Warum sind Ergebnisse nach Währungskonto getrennt?', answer: 'Für Genauigkeit werden alle Finanzdaten in einer einzigen Währung pro Konto geführt. Keine verwirrenden Wechselkursberechnungen in Ihren Berichten. Jedes Währungskonto hat seine eigenen Zahlungsmethoden.' },
    ],
    content: `
      <h2>Buchhaltungs-Einnahmen</h2>
      <p>Der Buchhaltungsbereich bietet Ihnen einen Überblick über Ihre Geschäftsfinanzen mit drei Schlüsselansichten.</p>
      <ul>
        <li>Sehen Sie alle Umsätze aus bezahlten Rechnungen</li>
        <li>Filtern Sie nach Abrechnungszeitraum</li>
        <li>Betrachten Sie Einnahmentrends über die Zeit</li>
      </ul>

      <h2>Buchhaltungs-Ausgaben</h2>
      <ul>
        <li>Überprüfen Sie alle erfassten Ausgaben</li>
        <li>Kategorieaufschlüsselung mit visuellen Diagrammen</li>
        <li>Zeitraumvergleich</li>
      </ul>

      <h2>Buchhaltungsergebnisse</h2>
      <ul>
        <li>Nettoergebnisberechnung (Einnahmen minus Ausgaben)</li>
        <li>Sehen Sie Ihre Gewinnmarge auf einen Blick</li>
        <li>Alle Daten nach Währungskonto eingegrenzt — keine Währungsmischung</li>
      </ul>

      <div class="callout">
        <strong>Wichtig:</strong> Die Buchhaltungsfunktionen von Invoicemonk sind ein Management-Tool und kein Ersatz für professionelle Buchhaltungssoftware. Konsultieren Sie immer einen qualifizierten Steuerberater für die Steuererklärung.
      </div>
    `,
  },

  // ─── Guide 9: Berichte & Exporte ───
  {
    slug: 'reports-exports',
    title: 'Compliance-konforme Berichte erstellen',
    description: 'Erstellen Sie professionelle Berichte zu Umsatz, Quittungen, Ausgaben, Buchhaltung und Compliance.',
    icon: 'BarChart3',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Zu Berichte navigieren', text: 'Klicken Sie auf „Berichte" in der Seitenleiste, um den Berichtsgenerator zu öffnen.' },
      { name: 'Berichtskategorie wählen', text: 'Wählen Sie aus Umsatz, Quittungen, Ausgaben, Buchhaltung oder Compliance-Berichten.' },
      { name: 'Parameter festlegen', text: 'Wählen Sie das Jahr und den spezifischen Berichtstyp innerhalb der Kategorie.' },
      { name: 'Generieren und herunterladen', text: 'Klicken Sie auf „Generieren" zum Download als JSON oder CSV. Alle Berichte sind auf Ihr aktives Währungskonto eingegrenzt.' },
    ],
    relatedGuides: ['accounting-overview', 'expense-tracking', 'analytics', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Welche Berichtsformate gibt es?', answer: 'Berichte können im JSON- oder CSV-Format heruntergeladen werden. CSV ist ideal für Tabellenkalkulationen wie Excel oder Google Sheets, während JSON gut für Integrationen geeignet ist.' },
      { question: 'Sind Berichte einwährungsbezogen?', answer: 'Ja. Alle Berichte sind auf Ihr aktives Währungskonto eingegrenzt. Wechseln Sie das Währungskonto, um Berichte für andere Währungen zu erstellen.' },
    ],
    content: `
      <h2>Berichtskategorien</h2>
      <p>Invoicemonk erstellt professionelle Berichte in fünf Kategorien. Berichte sind in den Professional- und Business-Tarifen verfügbar.</p>

      <h3>Umsatzberichte</h3>
      <ul>
        <li>Umsatzübersicht nach Zeitraum</li>
        <li>Umsatz nach Kundenaufschlüsselung</li>
        <li>Fälligkeitsanalyse für ausstehende Rechnungen</li>
      </ul>

      <h3>Quittungsberichte</h3>
      <ul>
        <li>Zahlungsquittungsregister</li>
        <li>Quittungsverifizierungsprüfung</li>
      </ul>

      <h3>Ausgabenberichte</h3>
      <ul>
        <li>Ausgabenübersicht nach Kategorie</li>
        <li>Lieferantenbezogene Ausgabenaufschlüsselung</li>
      </ul>

      <h3>Buchhaltungsberichte</h3>
      <ul>
        <li>Gewinn- und Verlustrechnung</li>
        <li>Einnahmen-Ausgaben-Vergleich</li>
      </ul>

      <h3>Compliance-Berichte</h3>
      <ul>
        <li>Steuerübersichtsbericht</li>
        <li>Rechnungsregister für Prüfungen</li>
      </ul>

      <h2>Bericht erstellen</h2>
      <ul>
        <li>Navigieren Sie zu <strong>Berichte</strong> in der Seitenleiste</li>
        <li>Wählen Sie Jahr und Berichtskategorie</li>
        <li>Klicken Sie auf <strong>Generieren</strong> zum Download als JSON oder CSV</li>
        <li>Alle Berichte sind auf Ihr aktives Währungskonto eingegrenzt</li>
      </ul>

      <div class="callout">
        <strong>Compliance-Hinweis:</strong> Alle Exporte enthalten Verifizierungs-Hashes und Zeitstempel. Berichte sind einwährungsbezogen für Genauigkeit.
      </div>
    `,
  },

  // ─── Guide 10: Analysen ───
  {
    slug: 'analytics',
    title: 'Ihr Geschäft mit visuellen Analysen verstehen',
    description: 'Betrachten Sie interaktive Diagramme für Umsatz, Rechnungsstatus, Zahlungsfälligkeit und monatliche Trends.',
    icon: 'PieChart',
    category: 'financial-tools',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Zu Analysen navigieren', text: 'Klicken Sie auf „Analysen" in der Seitenleiste, um Ihr Business-Insights-Dashboard zu öffnen.' },
      { name: 'Zeitraum wählen', text: 'Wählen Sie das Quartal, das Sie analysieren möchten, über die Zeitraumauswahl.' },
      { name: 'Diagramme erkunden', text: 'Sehen Sie Umsatz nach Kunde, Rechnungsstatusverteilung, Zahlungsfälligkeit und Monatsvergleichsdiagramme mit Hover-Details.' },
    ],
    relatedGuides: ['reports-exports', 'accounting-overview', 'payments-receipts'],
    targetFeature: 'https://app.invoicemonk.com',
    content: `
      <h2>Verfügbare Analysen</h2>
      <p>Die Analyseseite bietet visuelle Einblicke in Ihre Rechnungsaktivität mit interaktiven Diagrammen und Aufschlüsselungen.</p>
      <ul>
        <li><strong>Umsatz nach Kunde</strong> — Balkendiagramm, das zeigt, welche Kunden den meisten Umsatz beitragen</li>
        <li><strong>Rechnungsstatusverteilung</strong> — Kreisdiagramm von Entwurf, Ausgestellt, Gesendet, Angesehen, Bezahlt und Storniert</li>
        <li><strong>Zahlungsfälligkeit</strong> — Sehen Sie, wie lange Kunden im Durchschnitt zum Bezahlen brauchen</li>
        <li><strong>Monatsvergleich</strong> — Liniendiagramm zum Vergleich des Umsatzes von Monat zu Monat</li>
      </ul>

      <h2>Analysen nutzen</h2>
      <ul>
        <li>Navigieren Sie zu <strong>Analysen</strong> in der Seitenleiste</li>
        <li>Wählen Sie den Zeitraum (Quartal)</li>
        <li>Sehen Sie interaktive Diagramme mit Hover-Details</li>
        <li>Nutzen Sie die Erkenntnisse, um Ihre besten Kunden zu identifizieren, Zahlungsmuster zu verfolgen und Trends zu erkennen</li>
      </ul>
    `,
  },

  // ─── Guide 11: Teamverwaltung ───
  {
    slug: 'team-management',
    title: 'Team einladen und Rollen verwalten',
    description: 'Laden Sie Teammitglieder ein, weisen Sie Rollen zu und kontrollieren Sie den Zugriff auf Ihr Invoicemonk-Unternehmen.',
    icon: 'UserPlus',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Zu Team navigieren', text: 'Klicken Sie auf „Team" in der Seitenleiste, um die Teamverwaltung zu öffnen.' },
      { name: 'Mitglied einladen', text: 'Klicken Sie auf „Mitglied einladen", geben Sie die E-Mail-Adresse ein und wählen Sie eine Rolle (Inhaber, Admin oder Mitglied).' },
      { name: 'Rollen verwalten', text: 'Ändern Sie die Rolle eines Mitglieds, entfernen Sie Teammitglieder oder senden Sie ausstehende Einladungen erneut von der Teamseite.' },
    ],
    relatedGuides: ['business-settings', 'audit-logs', 'getting-started'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Welche Teamrollen gibt es?', answer: 'Inhaber hat vollen Zugriff einschließlich Abrechnung. Admin kann Rechnungen, Kunden und Einstellungen verwalten, aber nicht die Abrechnung. Mitglied kann Rechnungen und Kunden erstellen und ansehen, aber keine Einstellungen ändern.' },
      { question: 'Welche Tarife unterstützen Teamverwaltung?', answer: 'Teamverwaltung ist in den Professional- und Business-Tarifen verfügbar. Die Starter-Tarife sind nur für Einzelnutzer.' },
    ],
    content: `
      <h2>Verfügbare Rollen</h2>
      <p>In den Professional- und Business-Tarifen können Sie Teammitglieder in Ihr Invoicemonk-Unternehmen einladen und Rollen zuweisen, um zu steuern, was sie tun können.</p>
      <ul>
        <li><strong>Inhaber</strong> — Voller Zugriff auf alles einschließlich Abrechnung und Teamverwaltung</li>
        <li><strong>Admin</strong> — Kann Rechnungen, Kunden und Einstellungen verwalten, aber nicht die Abrechnung</li>
        <li><strong>Mitglied</strong> — Kann Rechnungen und Kunden erstellen und ansehen, aber keine Einstellungen ändern</li>
      </ul>

      <h2>Teammitglieder einladen</h2>
      <ul>
        <li>Navigieren Sie zu <strong>Team</strong> in der Seitenleiste</li>
        <li>Klicken Sie auf <strong>Mitglied einladen</strong></li>
        <li>Geben Sie die E-Mail-Adresse ein und wählen Sie eine Rolle</li>
        <li>Sie erhalten eine Einladungs-E-Mail, um Ihrem Unternehmen beizutreten</li>
      </ul>

      <h2>Teammitglieder verwalten</h2>
      <ul>
        <li>Ändern Sie die Rolle eines Mitglieds auf der Teamseite</li>
        <li>Entfernen Sie Teammitglieder, die keinen Zugriff mehr benötigen</li>
        <li>Sehen Sie ausstehende Einladungen und senden Sie sie bei Bedarf erneut</li>
      </ul>
    `,
  },

  // ─── Guide 12: Mehrwährung ───
  {
    slug: 'multi-currency',
    title: 'Mehrere Währungen mit Währungskonten verwalten',
    description: 'Nutzen Sie Währungskonten, um Finanzen sauber über mehrere Währungen getrennt zu halten.',
    icon: 'Globe',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Währungskonten verstehen', text: 'Ihr Standard-Währungskonto wird automatisch in der Hauptwährung Ihres Unternehmens erstellt.' },
      { name: 'Währungskonten hinzufügen', text: 'Fügen Sie zusätzliche Währungskonten (USD, GBP, EUR usw.) für internationale Rechnungsstellung hinzu.' },
      { name: 'Zwischen Konten wechseln', text: 'Nutzen Sie den Währungsumschalter in der Seitenleiste. Alle Rechnungen, Ausgaben, Berichte und Analysen sind auf das aktive Konto eingegrenzt.' },
    ],
    relatedGuides: ['business-settings', 'reports-exports', 'creating-invoices'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Warum trennt Invoicemonk Währungen in Konten?', answer: 'Finanzberichte sind immer einwährungsbezogen für Genauigkeit. Keine verwirrenden Wechselkursberechnungen in Ihren Berichten. Jedes Währungskonto hat seine eigenen Zahlungsmethoden.' },
    ],
    content: `
      <h2>So funktionieren Währungskonten</h2>
      <p>Invoicemonk unterstützt mehrere Währungen durch Währungskonten. Jedes Währungskonto hält Ihre Finanzen sauber getrennt — keine Währungsmischung.</p>
      <ul>
        <li>Beim Erstellen eines Unternehmens wird automatisch ein Standard-Währungskonto in der Hauptwährung Ihres Unternehmens angelegt</li>
        <li>Sie können zusätzliche Währungskonten (z. B. USD, GBP, EUR) für internationale Rechnungsstellung hinzufügen</li>
        <li>Wechseln Sie zwischen Währungskonten über den Umschalter in der Seitenleiste</li>
        <li>Alle Rechnungen, Ausgaben, Berichte und Analysen sind auf das aktive Währungskonto eingegrenzt</li>
      </ul>

      <h2>Warum das wichtig ist</h2>
      <ul>
        <li>Finanzberichte sind immer einwährungsbezogen für Genauigkeit</li>
        <li>Keine verwirrenden Wechselkursberechnungen in Ihren Berichten</li>
        <li>Jedes Währungskonto hat seine eigenen Zahlungsmethoden</li>
      </ul>
    `,
  },

  // ─── Guide 13: Benachrichtigungen & Erinnerungen ───
  {
    slug: 'notifications-reminders',
    title: 'Zahlungserinnerungen automatisieren und Benachrichtigungen verwalten',
    description: 'Richten Sie automatische Zahlungserinnerungen ein und konfigurieren Sie Ihre Benachrichtigungspräferenzen.',
    icon: 'Bell',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Benachrichtigungseinstellungen öffnen', text: 'Gehen Sie zu Einstellungen → Benachrichtigungen, um Ihre Erinnerungspräferenzen zu konfigurieren.' },
      { name: 'Zahlungserinnerungen aktivieren', text: 'Aktivieren Sie Zahlungserinnerungen und wählen Sie den Zeitpunkt (1, 3, 7 oder 14 Tage vor Fälligkeit).' },
      { name: 'Überfällige Erinnerungen aktivieren', text: 'Aktivieren Sie Überfällige Erinnerungen für Nachfassaktionen nach dem Fälligkeitsdatum (1, 7, 14 oder 30 Tage danach).' },
      { name: 'Anpassen und speichern', text: 'Fügen Sie optional eine individuelle Nachricht zu Erinnerungs-E-Mails hinzu und klicken Sie auf Benachrichtigungseinstellungen speichern.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Kann ich die Erinnerungs-E-Mail individuell anpassen?', answer: 'Ja. Sie können eine individuelle Nachricht hinzufügen, die in Ihren Zahlungserinnerungs-E-Mails enthalten sein wird. So pflegen Sie einen professionellen, persönlichen Ton gegenüber Ihren Kunden.' },
      { question: 'Welche anderen Benachrichtigungen gibt es?', answer: 'Neben Zahlungserinnerungen können Sie Benachrichtigungen für Rechnung ausgestellt (Bestätigung), Zahlung eingegangen und Überfällige Warnungen aktivieren.' },
    ],
    content: `
      <h2>Zahlungserinnerungen einrichten</h2>
      <p>Invoicemonk kann Ihre Kunden automatisch an bevorstehende und überfällige Zahlungen erinnern, damit Sie nicht manuell nachfassen müssen.</p>
      <ul>
        <li>Gehen Sie zu <strong>Einstellungen → Benachrichtigungen</strong></li>
        <li>Aktivieren Sie <strong>Zahlungserinnerungen</strong></li>
        <li>Wählen Sie, wann Erinnerungen vor dem Fälligkeitsdatum gesendet werden (1, 3, 7 oder 14 Tage vorher)</li>
        <li>Aktivieren Sie <strong>Überfällige Erinnerungen</strong> für Nachfassaktionen nach dem Fälligkeitsdatum (1, 7, 14 oder 30 Tage danach)</li>
        <li>Fügen Sie optional eine individuelle Nachricht zu Ihren Erinnerungs-E-Mails hinzu</li>
        <li>Klicken Sie auf <strong>Benachrichtigungseinstellungen speichern</strong></li>
      </ul>

      <h2>Weitere Benachrichtigungsoptionen</h2>
      <ul>
        <li><strong>Rechnung ausgestellt</strong> — Erhalten Sie eine Bestätigung, wenn Sie eine Rechnung ausstellen</li>
        <li><strong>Zahlung eingegangen</strong> — Werden Sie benachrichtigt, wenn eine Zahlung erfasst wird</li>
        <li><strong>Überfällige Warnungen</strong> — Erhalten Sie Warnungen über überfällige Rechnungen</li>
      </ul>
    `,
  },

  // ─── Guide 14: Unternehmenseinstellungen ───
  {
    slug: 'business-settings',
    title: 'Ihr Unternehmen für Compliance konfigurieren',
    description: 'Vervollständigen Sie Ihr Unternehmensprofil, um sicherzustellen, dass alle Rechnungen lokale regulatorische Anforderungen erfüllen.',
    icon: 'Settings',
    category: 'administration',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Schlüsseleinstellungen prüfen', text: 'Stellen Sie sicher, dass Firmenname, juristischer Name, Steuer-ID, USt-Registrierung, Logo, Adresse und Kontaktdaten vollständig sind.' },
      { name: 'Profilvollständigkeit prüfen', text: 'Streben Sie 100 % Vollständigkeit an. Invoicemonk hebt fehlende Felder hervor, damit Sie genau wissen, was auszufüllen ist.' },
      { name: 'Zahlungsmethoden konfigurieren', text: 'Fügen Sie Bankverbindungen und Mobile-Money-Daten hinzu. Legen Sie eine Standard-Zahlungsmethode für neue Rechnungen fest.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'multi-currency'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Was passiert, wenn mein Profil unvollständig ist?', answer: 'Ihre Rechnungen enthalten möglicherweise nicht alle erforderlichen Compliance-Felder. Invoicemonk zeigt einen Fortschrittsprozentsatz und hebt fehlende Informationen hervor, damit Sie diese schnell ergänzen können.' },
      { question: 'Kann ich mehrere Zahlungsmethoden haben?', answer: 'Ja. Fügen Sie beliebig viele Bankverbindungen oder Mobile-Money-Daten hinzu. Legen Sie eine als Standard fest, die auf allen neuen Rechnungen erscheint. Zahlungsmethoden sind mit Währungskonten verknüpft.' },
    ],
    content: `
      <h2>Schlüsseleinstellungen</h2>
      <p>Ihr Unternehmensprofil ist die Grundlage für compliance-konforme Rechnungsstellung. Vervollständigen Sie es, um sicherzustellen, dass alle Ihre Rechnungen lokale Vorschriften erfüllen.</p>
      <ul>
        <li><strong>Firmenname & Juristischer Name</strong> — Muss mit Ihrer offiziellen Registrierung übereinstimmen</li>
        <li><strong>Steuer-Identifikationsnummer</strong> — Ihre Steuer-ID oder Entsprechung</li>
        <li><strong>USt-Registrierung</strong> — Aktivieren, wenn umsatzsteuerpflichtig, und USt-Nummer eingeben</li>
        <li><strong>Firmenlogo</strong> — Erscheint auf allen Rechnungen und Quittungen</li>
        <li><strong>Adresse</strong> — Vollständige Geschäftsadresse für Rechnungsköpfe</li>
        <li><strong>Kontaktdaten</strong> — E-Mail und Telefon auf Rechnungen angezeigt</li>
        <li><strong>Standardwährung</strong> — Legen Sie Ihre primäre Geschäftswährung fest</li>
      </ul>

      <h2>Profilvollständigkeit</h2>
      <ul>
        <li>Invoicemonk zeigt einen Fortschrittsprozentsatz für Ihr Unternehmensprofil</li>
        <li>Streben Sie 100 % für vollständige Compliance an</li>
        <li>Fehlende Felder werden hervorgehoben, damit Sie genau wissen, was auszufüllen ist</li>
      </ul>

      <h2>Zahlungsmethoden</h2>
      <ul>
        <li>Fügen Sie Bankverbindungen, Mobile-Money-Daten oder andere Zahlungsmethoden hinzu</li>
        <li>Legen Sie eine Standard-Zahlungsmethode fest, die auf allen neuen Rechnungen erscheint</li>
        <li>Zahlungsmethoden sind mit Währungskonten verknüpft</li>
      </ul>
    `,
  },

  // ─── Guide 15: Prüfprotokolle ───
  {
    slug: 'audit-logs',
    title: 'Vollständiges Prüfprotokoll für jede Aktion',
    description: 'Überprüfen Sie das unveränderliche Prüfprotokoll, das jede Aktion für Compliance und interne Prüfung protokolliert.',
    icon: 'ScrollText',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Zu Prüfprotokollen navigieren', text: 'Klicken Sie auf „Prüfprotokolle" in der Seitenleiste, um das vollständige Aktivitätsprotokoll zu öffnen.' },
      { name: 'Suchen und filtern', text: 'Suchen Sie nach Aktionstyp, Benutzer oder Beschreibung. Filtern Sie nach Aktionskategorie, um Ergebnisse einzugrenzen.' },
      { name: 'Protokolleinträge prüfen', text: 'Jeder Eintrag zeigt, wer die Aktion ausgeführt hat, wann sie stattfand und was genau geändert wurde.' },
    ],
    relatedGuides: ['invoice-verification', 'creating-invoices', 'team-management'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Welche Aktionen werden protokolliert?', answer: 'Alles: Rechnungserstellung, Ausstellung, Versand, Ansicht, Stornierung, Zahlungserfassung, Unternehmensprofiländerungen, Teammitglied-Hinzufügungen und Rollenänderungen sowie Einstellungsänderungen.' },
      { question: 'Können Prüfprotokolle geändert werden?', answer: 'Nein. Prüfprotokolle sind von Natur aus unveränderlich. Sobald eine Aktion protokolliert ist, kann sie nicht bearbeitet oder gelöscht werden. Dies gewährleistet vollständige Integrität für Compliance-Überprüfungen.' },
    ],
    content: `
      <h2>Was wird protokolliert</h2>
      <p>Jede Aktion in Invoicemonk wird in einem unveränderlichen Prüfprotokoll festgehalten. Dies ist unverzichtbar für Compliance-Überprüfungen und interne Prüfungen.</p>
      <ul>
        <li>Rechnung erstellt, ausgestellt, gesendet, angesehen, storniert</li>
        <li>Zahlungen erfasst</li>
        <li>Unternehmensprofiländerungen</li>
        <li>Teammitglied-Hinzufügungen und Rollenänderungen</li>
        <li>Einstellungsänderungen</li>
      </ul>

      <h2>Prüfprotokolle nutzen</h2>
      <ul>
        <li>Navigieren Sie zu <strong>Prüfprotokolle</strong> in der Seitenleiste</li>
        <li>Suchen Sie nach Aktionstyp, Benutzer oder Beschreibung</li>
        <li>Filtern Sie nach Aktionskategorie</li>
        <li>Jeder Protokolleintrag zeigt, wer die Aktion ausgeführt hat, wann und was geändert wurde</li>
      </ul>
    `,
  },

  // ─── Guide 16: Support ───
  {
    slug: 'support',
    title: 'Hilfe erhalten, wenn Sie sie brauchen',
    description: 'Senden Sie Support-Tickets und erreichen Sie das Invoicemonk-Team direkt von Ihrem Dashboard aus.',
    icon: 'HelpCircle',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Zu Support navigieren', text: 'Klicken Sie auf „Support kontaktieren" in der Seitenleiste, um das Support-Ticket-System zu öffnen.' },
      { name: 'Ticket einreichen', text: 'Wählen Sie eine Kategorie (Abrechnung, Technisch, Funktionswunsch usw.), beschreiben Sie Ihr Anliegen und senden Sie es ab.' },
      { name: 'Ticket verfolgen', text: 'Sehen und verfolgen Sie den Ticket-Status auf der Support-Seite in Ihrem Dashboard.' },
    ],
    relatedGuides: ['getting-started', 'business-settings'],
    targetFeature: '/contact',
    content: `
      <h2>Support-Ticket einreichen</h2>
      <p>Invoicemonk bietet ein In-App-Support-Ticket-System, damit Sie unser Team direkt von Ihrem Dashboard aus erreichen können.</p>
      <ul>
        <li>Navigieren Sie zu <strong>Support kontaktieren</strong> in der Seitenleiste</li>
        <li>Wählen Sie eine Kategorie (Abrechnung, Technisch, Funktionswunsch usw.)</li>
        <li>Beschreiben Sie Ihr Anliegen im Detail</li>
        <li>Senden Sie ab und verfolgen Sie den Ticket-Status auf der Support-Seite</li>
      </ul>

      <p>Sie können uns auch über unsere <a href="__LANG__/contact">Kontaktseite</a> oder über das Live-Chat-Widget auf unserer Website erreichen.</p>
    `,
  },
];

registerHelpGuides('de', helpGuidesDE);
