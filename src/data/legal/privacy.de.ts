import type { LegalPageContent } from './types';

export const privacyDE: LegalPageContent = {
  seoTitle: 'Datenschutzrichtlinie | Invoicemonk',
  seoDescription: 'Erfahren Sie, wie Invoicemonk Ihre Daten schützt und Ihre Privatsphäre respektiert. Konform mit DSGVO, CCPA, LGPD und NDPR.',
  title: 'Datenschutzrichtlinie',
  lastUpdated: 'Zuletzt aktualisiert: Januar 2025',
  tocTitle: 'Inhalt',
  sections: [
    {
      id: 'introduction',
      tocLabel: 'Einleitung & Verantwortlicher',
      title: '1. Einleitung & Verantwortlicher',
      html: `
<p class="mb-4">Invoicemonk („wir", „uns" oder „unser") verpflichtet sich zum Schutz Ihrer Privatsphäre und zur Gewährleistung der Sicherheit Ihrer personenbezogenen Daten. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Informationen erfassen, verwenden, offenlegen und schützen, wenn Sie unsere Plattform und Dienste nutzen.</p>
<p class="mb-4"><strong>Verantwortlicher:</strong> Für die Zwecke der Datenschutz-Grundverordnung (DSGVO) und anderer anwendbarer Datenschutzgesetze ist Invoicemonk der für Ihre personenbezogenen Daten verantwortliche Datenverantwortliche.</p>
<div class="bg-muted/30 rounded-lg p-4 mb-6">
  <p class="mb-2"><strong>Datenschutzbeauftragter (DSB)</strong></p>
  <p class="mb-1">E-Mail: <a href="mailto:dpo@invoicemonk.com" class="text-primary hover:underline">dpo@invoicemonk.com</a></p>
  <p>Für datenschutzbezogene Anfragen können Sie sich jederzeit an unseren DSB wenden.</p>
</div>
<p class="mb-6">Diese Richtlinie gilt für alle Nutzer der Invoicemonk-Dienste weltweit, mit besonderen Bestimmungen für Nutzer in der Europäischen Union/dem Europäischen Wirtschaftsraum (EU/EWR), dem Vereinigten Königreich, Kalifornien (USA), Brasilien, Nigeria, Australien und Kanada.</p>`,
    },
    {
      id: 'information-collected',
      tocLabel: 'Erfasste Informationen',
      title: '2. Erfasste Informationen',
      html: `
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.1 Von Ihnen direkt bereitgestellte Informationen</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Kontoinformationen:</strong> Name, E-Mail-Adresse, Passwort, Telefonnummer</li>
  <li><strong>Geschäftsinformationen:</strong> Firmenname, Geschäftsadresse, Steueridentifikationsnummern (TIN, USt-IdNr., GST), Handelsregisterdetails</li>
  <li><strong>Finanzdaten:</strong> Rechnungsdetails, Ausgabenaufzeichnungen, Zahlungsinformationen, Bankverbindungen für Auszahlungen</li>
  <li><strong>Kundendaten:</strong> Informationen über Ihre Kunden, die Sie in unserem System speichern</li>
  <li><strong>Kommunikation:</strong> Nachrichten, die Sie uns senden, Support-Tickets, Feedback</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.2 Automatisch erfasste Informationen</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Geräteinformationen:</strong> IP-Adresse, Browsertyp, Betriebssystem, Gerätekennungen</li>
  <li><strong>Nutzungsdaten:</strong> Besuchte Seiten, genutzte Funktionen, Verweildauer auf der Plattform, Klickmuster</li>
  <li><strong>Protokolldaten:</strong> Zugriffszeiten, Fehlerprotokolle, verweisende URLs</li>
  <li><strong>Cookies &amp; ähnliche Technologien:</strong> Siehe unsere <a href="__LANG__/cookie-policy" class="text-primary hover:underline">Cookie-Richtlinie</a> für Details</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.3 Informationen von Dritten</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Zahlungsdienstleister:</strong> Transaktionsbestätigungen von Stripe, Paystack und anderen Zahlungsanbietern</li>
  <li><strong>Authentifizierungsanbieter:</strong> Wenn Sie sich über Google oder andere OAuth-Anbieter anmelden</li>
  <li><strong>Geschäftspartner:</strong> Informationen aus von Ihnen autorisierten Integrationen</li>
</ul>`,
    },
    {
      id: 'legal-basis',
      tocLabel: 'Rechtsgrundlage für die Verarbeitung',
      title: '3. Rechtsgrundlage für die Verarbeitung (DSGVO Artikel 6)',
      html: `
<p class="mb-4">Wir verarbeiten Ihre personenbezogenen Daten nur, wenn wir eine gültige Rechtsgrundlage dafür haben. Die Rechtsgrundlagen, auf die wir uns stützen, umfassen:</p>
<div class="space-y-4 mb-6">
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Vertragserfüllung (Art. 6 Abs. 1 lit. b)</h4>
    <p>Verarbeitung, die zur Erbringung unserer Dienste an Sie erforderlich ist, einschließlich der Erstellung von Rechnungen, Verwaltung von Ausgaben, Verarbeitung von Zahlungen und Pflege Ihres Kontos.</p>
  </div>
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Berechtigte Interessen (Art. 6 Abs. 1 lit. f)</h4>
    <p>Verarbeitung für unsere berechtigten Geschäftsinteressen, wie die Verbesserung unserer Dienste, Analysen, Betrugsprävention und Sicherheit, sofern diese Interessen nicht durch Ihre Rechte und Freiheiten überwiegen.</p>
  </div>
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)</h4>
    <p>Verarbeitung, die zur Erfüllung geltender Gesetze erforderlich ist, einschließlich Steuervorschriften, Buchhaltungsanforderungen und Beantwortung rechtlicher Anfragen.</p>
  </div>
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Einwilligung (Art. 6 Abs. 1 lit. a)</h4>
    <p>Verarbeitung auf Grundlage Ihrer ausdrücklichen Einwilligung, z. B. für Marketing-Mitteilungen. Sie können Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der auf der Einwilligung beruhenden Verarbeitung vor dem Widerruf berührt wird.</p>
  </div>
</div>`,
    },
    {
      id: 'how-we-use',
      tocLabel: 'Wie wir Ihre Informationen verwenden',
      title: '4. Wie wir Ihre Informationen verwenden',
      html: `
<p class="mb-4">Wir verwenden Ihre personenbezogenen Daten für folgende Zwecke:</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.1 Diensterbringung</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Erstellung und Verwaltung Ihres Kontos</li>
  <li>Erstellung von Rechnungen, Kostenvoranschlägen und Quittungen</li>
  <li>Verarbeitung von Zahlungen und Rückerstattungen</li>
  <li>Verwaltung von Ausgabenverfolgung und Berichterstattung</li>
  <li>Bereitstellung von Kundensupport</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.2 Dienstverbesserung</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Analyse von Nutzungsmustern zur Verbesserung von Funktionen</li>
  <li>Durchführung von Forschung und Entwicklung</li>
  <li>Testen neuer Funktionen und Funktionalitäten</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.3 Kommunikation</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Versand transaktionaler E-Mails (Rechnungen, Quittungen, Kontoaktualisierungen)</li>
  <li>Bereitstellung technischer Hinweise und Sicherheitswarnungen</li>
  <li>Versand von Marketing-Mitteilungen (mit Ihrer Einwilligung)</li>
  <li>Beantwortung von Anfragen und Support-Anfragen</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.4 Recht &amp; Compliance</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Einhaltung von Steuer- und Buchhaltungsvorschriften</li>
  <li>Verhinderung von Betrug und unbefugtem Zugriff</li>
  <li>Durchsetzung unserer Nutzungsbedingungen</li>
  <li>Beantwortung rechtlicher Anfragen und Gerichtsbeschlüsse</li>
</ul>`,
    },
    {
      id: 'cookies',
      tocLabel: 'Cookies & Tracking-Technologien',
      title: '5. Cookies & Tracking-Technologien',
      html: `
<p class="mb-4">Wir verwenden Cookies und ähnliche Tracking-Technologien, um Ihre Erfahrung zu verbessern, die Nutzung zu analysieren und personalisierte Inhalte bereitzustellen. Unsere Cookies fallen in folgende Kategorien:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Essenzielle Cookies:</strong> Erforderlich für das ordnungsgemäße Funktionieren der Plattform</li>
  <li><strong>Performance-Cookies:</strong> Helfen uns zu verstehen, wie Sie unsere Dienste nutzen</li>
  <li><strong>Funktions-Cookies:</strong> Speichern Ihre Präferenzen und Einstellungen</li>
</ul>
<p class="mb-6">Für detaillierte Informationen über die von uns verwendeten Cookies und wie Sie Ihre Präferenzen verwalten können, lesen Sie bitte unsere <a href="__LANG__/cookie-policy" class="text-primary hover:underline">Cookie-Richtlinie</a>.</p>`,
    },
    {
      id: 'data-sharing',
      tocLabel: 'Datenweitergabe & Dritte',
      title: '6. Datenweitergabe & Dritte',
      html: `
<p class="mb-4">Wir verkaufen Ihre personenbezogenen Daten nicht. Wir können Ihre Informationen mit folgenden Kategorien von Empfängern teilen:</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.1 Dienstleister</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Zahlungsdienstleister:</strong> Stripe, Paystack (für Zahlungsabwicklung)</li>
  <li><strong>Cloud-Infrastruktur:</strong> Sichere Cloud-Hosting-Anbieter</li>
  <li><strong>E-Mail-Dienste:</strong> Transaktionaler E-Mail-Versand</li>
  <li><strong>Analysen:</strong> Nutzungsanalysen (wo möglich anonymisiert)</li>
</ul>
<p class="mb-4">Alle Dienstleister sind vertraglich verpflichtet, Ihre Daten zu schützen und dürfen sie nur für die von uns autorisierten spezifischen Zwecke verwenden.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.2 Rechtliche Anforderungen</h3>
<p class="mb-4">Wir können Ihre Informationen offenlegen, wenn dies gesetzlich, durch Gerichtsbeschluss oder behördliche Anfrage erforderlich ist, oder wenn dies zum Schutz unserer Rechte, Sicherheit oder unseres Eigentums notwendig ist.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.3 Unternehmensübertragungen</h3>
<p class="mb-6">Im Falle einer Fusion, Übernahme oder eines Verkaufs von Vermögenswerten können Ihre Daten als Teil dieser Transaktion übertragen werden. Wir werden Sie über jede solche Änderung informieren.</p>`,
    },
    {
      id: 'international-transfers',
      tocLabel: 'Internationale Datenübertragungen',
      title: '7. Internationale Datenübertragungen',
      html: `
<p class="mb-4">Invoicemonk ist weltweit tätig, und Ihre Daten können in Länder außerhalb Ihres Wohnsitzlandes übertragen und dort verarbeitet werden, einschließlich Ländern, die möglicherweise nicht die gleichen Datenschutzgesetze wie Ihre Gerichtsbarkeit haben.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">7.1 Übertragungsmechanismen</h3>
<p class="mb-4">Bei der Übertragung von Daten aus der EU/dem EWR oder dem Vereinigten Königreich in Länder ohne angemessenes Datenschutzniveau implementieren wir geeignete Schutzmaßnahmen, darunter:</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Standardvertragsklauseln (SVK):</strong> Von der EU genehmigte Vertragsbestimmungen</li>
  <li><strong>Angemessenheitsbeschlüsse:</strong> Übertragungen in Länder, die von der Europäischen Kommission als angemessen eingestuft wurden</li>
  <li><strong>Verbindliche Unternehmensregeln:</strong> Wo anwendbar</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">7.2 Datenspeicherorte</h3>
<p class="mb-6">Ihre Daten werden hauptsächlich in sicheren Rechenzentren in den Vereinigten Staaten und der Europäischen Union gespeichert. Wir stellen sicher, dass alle Rechenzentren branchenübliche Sicherheitsstandards erfüllen.</p>`,
    },
    {
      id: 'data-retention',
      tocLabel: 'Datenspeicherung',
      title: '8. Datenspeicherung',
      html: `
<p class="mb-4">Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der Zwecke, für die sie erhoben wurden, erforderlich ist, einschließlich:</p>
<div class="overflow-x-auto mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
  <table class="min-w-full border border-border rounded-lg text-sm">
    <thead class="bg-muted/50">
      <tr>
        <th class="px-4 py-3 text-left text-sm font-semibold text-foreground">Datentyp</th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-foreground">Aufbewahrungsfrist</th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-foreground">Grund</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border">
      <tr><td class="px-4 py-3 text-sm">Kontoinformationen</td><td class="px-4 py-3 text-sm">Kontodauer + 30 Tage</td><td class="px-4 py-3 text-sm">Diensterbringung</td></tr>
      <tr><td class="px-4 py-3 text-sm">Finanzunterlagen</td><td class="px-4 py-3 text-sm">7 Jahre nach Erstellung</td><td class="px-4 py-3 text-sm">Steuer-/rechtliche Compliance</td></tr>
      <tr><td class="px-4 py-3 text-sm">Nutzungsprotokolle</td><td class="px-4 py-3 text-sm">12 Monate</td><td class="px-4 py-3 text-sm">Sicherheit &amp; Analysen</td></tr>
      <tr><td class="px-4 py-3 text-sm">Support-Kommunikation</td><td class="px-4 py-3 text-sm">3 Jahre</td><td class="px-4 py-3 text-sm">Qualitätssicherung</td></tr>
      <tr><td class="px-4 py-3 text-sm">Marketing-Präferenzen</td><td class="px-4 py-3 text-sm">Bis zum Widerruf der Einwilligung</td><td class="px-4 py-3 text-sm">Einwilligungsbasiert</td></tr>
    </tbody>
  </table>
</div>
<p class="mb-6">Bei Kontolöschung werden wir Ihre personenbezogenen Daten innerhalb von 30 Tagen löschen oder anonymisieren, es sei denn, eine Aufbewahrung ist gesetzlich vorgeschrieben.</p>`,
    },
    {
      id: 'your-rights',
      tocLabel: 'Ihre Datenschutzrechte',
      title: '9. Ihre Datenschutzrechte',
      html: `
<p class="mb-4">Abhängig von Ihrem Standort haben Sie möglicherweise folgende Rechte in Bezug auf Ihre personenbezogenen Daten:</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.1 Rechte für EU/EWR- und UK-Einwohner (DSGVO)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Auskunftsrecht (Art. 15):</strong> Kopie Ihrer personenbezogenen Daten anfordern</li>
  <li><strong>Recht auf Berichtigung (Art. 16):</strong> Unrichtige personenbezogene Daten korrigieren</li>
  <li><strong>Recht auf Löschung (Art. 17):</strong> Löschung Ihrer personenbezogenen Daten verlangen („Recht auf Vergessenwerden")</li>
  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18):</strong> Einschränken, wie wir Ihre Daten nutzen</li>
  <li><strong>Recht auf Datenübertragbarkeit (Art. 20):</strong> Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten</li>
  <li><strong>Widerspruchsrecht (Art. 21):</strong> Widerspruch gegen die Verarbeitung auf Basis berechtigter Interessen</li>
  <li><strong>Rechte bei automatisierter Entscheidungsfindung (Art. 22):</strong> Nicht einer ausschließlich auf automatisierter Verarbeitung beruhenden Entscheidung unterworfen zu werden</li>
</ul>
<p class="mb-4"><strong>Aufsichtsbehörde:</strong> Sie haben das Recht, bei Ihrer lokalen Datenschutzbehörde Beschwerde einzureichen. Für das Vereinigte Königreich ist dies das Information Commissioner's Office (ICO). Für die EU kontaktieren Sie Ihre nationale Datenschutzbehörde.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.2 Rechte für kalifornische Einwohner (CCPA/CPRA)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Recht auf Auskunft:</strong> Welche personenbezogenen Informationen wir erfassen und wie wir sie verwenden</li>
  <li><strong>Recht auf Löschung:</strong> Löschung Ihrer personenbezogenen Informationen verlangen</li>
  <li><strong>Recht auf Opt-Out:</strong> Wir verkaufen keine personenbezogenen Informationen</li>
  <li><strong>Recht auf Nichtdiskriminierung:</strong> Gleicher Service unabhängig von Datenschutzentscheidungen</li>
  <li><strong>Recht auf Korrektur:</strong> Korrektur unrichtiger personenbezogener Informationen verlangen</li>
  <li><strong>Recht auf Einschränkung der Nutzung sensibler Informationen:</strong> Wo anwendbar</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.3 Rechte für brasilianische Einwohner (LGPD)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Bestätigung der Existenz einer Verarbeitung</li>
  <li>Zugang zu Daten</li>
  <li>Korrektur unvollständiger, ungenauer oder veralteter Daten</li>
  <li>Anonymisierung, Sperrung oder Löschung unnötiger Daten</li>
  <li>Datenübertragbarkeit</li>
  <li>Löschung von mit Einwilligung verarbeiteten Daten</li>
  <li>Information über die Weitergabe an Dritte</li>
  <li>Widerruf der Einwilligung</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.4 Rechte für nigerianische Einwohner (NDPR)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Recht auf Information über die Datenverarbeitung</li>
  <li>Recht auf Zugang zu personenbezogenen Daten</li>
  <li>Recht auf Berichtigung ungenauer Daten</li>
  <li>Recht auf Widerruf der Einwilligung</li>
  <li>Recht auf Widerspruch gegen die Verarbeitung</li>
  <li>Recht auf Datenübertragbarkeit</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.5 Rechte für australische Einwohner (Privacy Act)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Recht auf Zugang zu personenbezogenen Informationen</li>
  <li>Recht auf Korrektur personenbezogener Informationen</li>
  <li>Recht auf Beschwerde bei Datenschutzverletzungen</li>
  <li>Recht auf Opt-Out von Direktmarketing</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.6 Ausübung Ihrer Rechte</h3>
<p class="mb-6">Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter <a href="mailto:privacy@invoicemonk.com" class="text-primary hover:underline">privacy@invoicemonk.com</a>. Wir werden innerhalb von 30 Tagen (oder schneller, wenn gesetzlich vorgeschrieben) auf Ihre Anfrage antworten. Möglicherweise müssen wir Ihre Identität überprüfen, bevor wir Ihre Anfrage bearbeiten.</p>`,
    },
    {
      id: 'children',
      tocLabel: 'Datenschutz für Kinder',
      title: '10. Datenschutz für Kinder',
      html: `
<p class="mb-6">Invoicemonk ist nicht für die Nutzung durch Personen unter 18 Jahren bestimmt. Wir erfassen wissentlich keine personenbezogenen Informationen von Kindern. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und glauben, dass Ihr Kind uns personenbezogene Informationen zur Verfügung gestellt hat, kontaktieren Sie uns bitte umgehend unter <a href="mailto:privacy@invoicemonk.com" class="text-primary hover:underline">privacy@invoicemonk.com</a>, und wir werden diese Informationen aus unseren Systemen löschen.</p>`,
    },
    {
      id: 'security',
      tocLabel: 'Datensicherheit',
      title: '11. Datensicherheit',
      html: `
<p class="mb-4">Wir implementieren umfassende Sicherheitsmaßnahmen zum Schutz Ihrer personenbezogenen Daten:</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">11.1 Technische Maßnahmen</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Verschlüsselung von Daten während der Übertragung (TLS 1.2+) und im Ruhezustand (AES-256)</li>
  <li>Sichere Authentifizierung mit Passwort-Hashing (bcrypt)</li>
  <li>Regelmäßige Sicherheitsaudits und Penetrationstests</li>
  <li>Automatisierte Bedrohungserkennung und Überwachung</li>
  <li>Firewall und Intrusion-Detection-Systeme</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">11.2 Organisatorische Maßnahmen</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Mitarbeiterschulung zum Datenschutz</li>
  <li>Zugriffskontrollen und Least-Privilege-Prinzipien</li>
  <li>Incident-Response-Verfahren</li>
  <li>Regelmäßige Richtlinienüberprüfungen und Aktualisierungen</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">11.3 Benachrichtigung bei Datenschutzverletzungen</h3>
<p class="mb-6">Im Falle einer Verletzung des Schutzes personenbezogener Daten, die ein Risiko für Ihre Rechte und Freiheiten darstellt, werden wir die zuständige Aufsichtsbehörde innerhalb von 72 Stunden gemäß DSGVO benachrichtigen. Wenn die Verletzung voraussichtlich ein hohes Risiko für Ihre Rechte darstellt, werden wir auch Sie direkt benachrichtigen.</p>`,
    },
    {
      id: 'changes',
      tocLabel: 'Änderungen dieser Richtlinie',
      title: '12. Änderungen dieser Richtlinie',
      html: `
<p class="mb-6">Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren, um Änderungen unserer Praktiken oder geltender Gesetze widerzuspiegeln. Bei wesentlichen Änderungen werden wir:</p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Das Datum „Zuletzt aktualisiert" am Anfang dieser Richtlinie aktualisieren</li>
  <li>Sie per E-Mail benachrichtigen (für registrierte Nutzer)</li>
  <li>Einen auffälligen Hinweis auf unserer Plattform anzeigen</li>
  <li>Wo gesetzlich vorgeschrieben, Ihre Einwilligung zu den Änderungen einholen</li>
</ul>`,
    },
    {
      id: 'contact',
      tocLabel: 'Kontakt',
      title: '13. Kontakt',
      html: `
<p class="mb-4">Wenn Sie Fragen, Bedenken oder Anfragen bezüglich dieser Datenschutzrichtlinie oder unserer Datenpraktiken haben, kontaktieren Sie uns bitte:</p>
<div class="bg-muted/30 rounded-lg p-6 mb-6 space-y-3">
  <p><strong>Allgemeine Datenschutzanfragen:</strong> <a href="mailto:privacy@invoicemonk.com" class="text-primary hover:underline">privacy@invoicemonk.com</a></p>
  <p><strong>Datenschutzbeauftragter:</strong> <a href="mailto:dpo@invoicemonk.com" class="text-primary hover:underline">dpo@invoicemonk.com</a></p>
  <p><strong>Postanschrift:</strong> Invoicemonk Rechtsabteilung, [Adresse wird aktualisiert]</p>
</div>
<p class="mb-6">Wir sind bestrebt, mit Ihnen zusammenzuarbeiten, um etwaige Datenschutzbedenken zu klären. Wenn Sie mit unserer Antwort nicht zufrieden sind, haben Sie das Recht, bei Ihrer lokalen Datenschutzbehörde Beschwerde einzureichen.</p>`,
    },
  ],
};
