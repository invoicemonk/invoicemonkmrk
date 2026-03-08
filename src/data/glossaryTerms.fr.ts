import type { GlossaryTerm } from './glossaryTerms';
import { registerGlossaryTerms } from '@/utils/i18nData';

const glossaryTermsFR: GlossaryTerm[] = [
  // Facturation
  {
    term: 'Facture',
    slug: 'invoice',
    definition: 'Un document commercial émis par un vendeur à un acheteur, détaillant les produits ou services fournis, les quantités, les prix et les conditions de paiement.',
    extendedDescription: 'Une facture sert de preuve légale d\'une transaction et de demande formelle de paiement. Les factures professionnelles comprennent des éléments essentiels tels que les numéros de facture, les dates, les descriptions détaillées et les informations fiscales. Elles sont cruciales pour la gestion de trésorerie, la conformité fiscale et le maintien de relations commerciales professionnelles.',
    relatedTerms: ['credit-note', 'pro-forma-invoice', 'recurring-invoice', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['complete-guide-to-business-invoicing', '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners']
  },
  {
    term: 'Avoir',
    slug: 'credit-note',
    definition: 'Un document émis par un vendeur pour réduire le montant dû par un acheteur, généralement utilisé pour les retours, les surfacturations ou les corrections de facturation.',
    extendedDescription: 'Les avoirs fonctionnent comme des factures négatives, réduisant le montant total dû par un client. Ils sont essentiels pour maintenir des registres comptables précis lorsque des ajustements sont nécessaires. Un avoir doit référencer la facture d\'origine et indiquer clairement le motif du crédit.',
    relatedTerms: ['invoice', 'debit-note', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['credit-notes-how-and-when-to-use-them']
  },
  {
    term: 'Facture pro forma',
    slug: 'pro-forma-invoice',
    definition: 'Une facture préliminaire envoyée avant la livraison des marchandises ou la prestation des services, décrivant les conditions et les coûts estimés.',
    extendedDescription: 'Les factures pro forma sont utilisées comme devis ou estimations et ne constituent pas des demandes de paiement. Elles aident les clients à comprendre les coûts prévus et sont couramment utilisées dans le commerce international à des fins douanières. Contrairement aux factures régulières, elles peuvent être modifiées avant l\'émission de la facture finale.',
    relatedTerms: ['invoice', 'estimate', 'quote'],
    category: 'invoicing',
    relatedArticles: ['proforma-invoice-vs-commercial-invoice']
  },
  {
    term: 'Facture récurrente',
    slug: 'recurring-invoice',
    definition: 'Une facture générée automatiquement à intervalles réguliers pour des services continus ou des abonnements.',
    extendedDescription: 'Les factures récurrentes font gagner du temps aux entreprises ayant des clients en contrat ou des services par abonnement. Elles peuvent être configurées pour un envoi automatique hebdomadaire, mensuel, trimestriel ou annuel. L\'automatisation réduit la charge administrative et garantit une facturation cohérente.',
    relatedTerms: ['invoice', 'retainer', 'subscription-billing'],
    category: 'invoicing',
    relatedArticles: ['recurring-invoices-automating-billing']
  },
  {
    term: 'Numéro de facture',
    slug: 'invoice-number',
    definition: 'Un identifiant unique attribué à chaque facture pour le suivi, la référence et la comptabilité.',
    extendedDescription: 'Les systèmes de numérotation des factures aident à organiser les documents, simplifient le rapprochement des paiements et répondent aux exigences des autorités fiscales. Les formats courants incluent les numéros séquentiels (001, 002), les codes basés sur la date (2024-001) ou les identifiants avec préfixe client (ABC-001). Les numéros de facture ne doivent jamais être réutilisés.',
    relatedTerms: ['invoice', 'purchase-order'],
    category: 'invoicing',
    relatedArticles: ['invoice-numbering-best-practices']
  },
  {
    term: 'Conditions de paiement',
    slug: 'payment-terms',
    definition: 'Conditions spécifiant quand et comment le paiement est attendu, comme la date d\'échéance, les méthodes acceptées et les éventuelles remises pour paiement anticipé.',
    extendedDescription: 'Les conditions de paiement courantes incluent Net 15, Net 30, Paiement à réception et 2/10 Net 30 (2 % de remise si payé sous 10 jours). Des conditions claires fixent les attentes, réduisent les litiges et peuvent encourager des paiements plus rapides. Les conditions doivent être convenues avant le début des travaux et clairement indiquées sur les factures.',
    relatedTerms: ['net-30', 'due-on-receipt', 'early-payment-discount'],
    category: 'payments',
    relatedArticles: ['how-to-write-invoice-payment-terms', 'understanding-payment-terms-guide']
  },
  {
    term: 'Net 30',
    slug: 'net-30',
    definition: 'Conditions de paiement indiquant que le montant total de la facture est dû dans les 30 jours suivant la date de facturation.',
    extendedDescription: 'Net 30 est l\'une des conditions de paiement les plus courantes en affaires. Les variantes incluent Net 15, Net 60 et Net 90 pour des délais plus courts ou plus longs. Le « net » fait référence au montant total dû sans aucune déduction.',
    relatedTerms: ['payment-terms', 'due-on-receipt', 'accounts-receivable'],
    category: 'payments'
  },
  {
    term: 'Paiement à réception',
    slug: 'due-on-receipt',
    definition: 'Conditions de paiement exigeant un paiement immédiat à la réception de la facture.',
    extendedDescription: 'Les conditions de paiement à réception demandent le paiement dès que la facture est reçue, bien que pratiquement cela signifie souvent sous quelques jours. Ces conditions sont courantes pour les nouvelles relations clients, les petits montants ou lorsque le vendeur a besoin d\'un flux de trésorerie immédiat.',
    relatedTerms: ['payment-terms', 'net-30', 'cash-on-delivery'],
    category: 'payments'
  },
  {
    term: 'Escompte pour paiement anticipé',
    slug: 'early-payment-discount',
    definition: 'Une réduction en pourcentage offerte aux clients qui paient avant la date d\'échéance standard.',
    extendedDescription: 'Couramment exprimé comme « 2/10 Net 30 », signifiant 2 % de remise si payé sous 10 jours, sinon montant total dû à 30 jours. Les escomptes améliorent la trésorerie mais doivent être calculés avec soin — une remise de 2 % pour 20 jours d\'avance équivaut à environ 36 % annualisé.',
    relatedTerms: ['payment-terms', 'cash-flow', 'accounts-receivable'],
    category: 'payments',
    relatedArticles: ['early-payment-discounts-do-they-work']
  },
  // Comptabilité
  {
    term: 'Créances clients',
    slug: 'accounts-receivable',
    definition: 'Argent dû à une entreprise par des clients pour des biens ou services livrés mais pas encore payés.',
    extendedDescription: 'Les créances clients apparaissent comme un actif au bilan. Une gestion efficace comprend la facturation en temps opportun, des conditions de paiement claires, un suivi systématique des comptes en retard et une analyse d\'ancienneté pour identifier les problèmes de recouvrement.',
    relatedTerms: ['accounts-payable', 'invoice', 'cash-flow', 'aging-report'],
    category: 'accounting',
    relatedArticles: ['ultimate-guide-getting-paid-faster']
  },
  {
    term: 'Dettes fournisseurs',
    slug: 'accounts-payable',
    definition: 'Argent qu\'une entreprise doit à ses fournisseurs pour des biens ou services reçus mais pas encore payés.',
    extendedDescription: 'Les dettes fournisseurs sont un passif au bilan représentant les obligations à court terme. Une gestion efficace implique le suivi des échéances de paiement, la saisie des escomptes pour paiement anticipé et le maintien de bonnes relations fournisseurs tout en optimisant la trésorerie.',
    relatedTerms: ['accounts-receivable', 'vendor', 'cash-flow'],
    category: 'accounting'
  },
  {
    term: 'Trésorerie',
    slug: 'cash-flow',
    definition: 'Le mouvement d\'argent entrant et sortant d\'une entreprise, mesurant la liquidité et la capacité à payer les obligations.',
    extendedDescription: 'Une trésorerie positive signifie plus d\'argent entrant que sortant. Même les entreprises rentables peuvent échouer avec une mauvaise gestion de trésorerie. Les stratégies clés incluent la facturation rapide, le recouvrement efficace, la gestion des conditions de paiement avec les fournisseurs et le maintien de réserves de liquidités.',
    relatedTerms: ['accounts-receivable', 'accounts-payable', 'working-capital'],
    category: 'accounting',
    relatedArticles: ['cash-flow-forecasting-for-freelancers']
  },
  {
    term: 'Plan comptable',
    slug: 'chart-of-accounts',
    definition: 'Une liste complète de tous les comptes utilisés par une entreprise pour catégoriser les transactions financières.',
    extendedDescription: 'Le plan comptable organise les transactions en catégories comme les actifs, les passifs, les capitaux propres, les revenus et les charges. Un plan comptable bien structuré permet une présentation financière précise, la préparation fiscale et l\'analyse commerciale.',
    relatedTerms: ['general-ledger', 'double-entry-bookkeeping', 'financial-statements'],
    category: 'accounting',
    relatedArticles: ['chart-of-accounts-setup-guide']
  },
  {
    term: 'Marge bénéficiaire',
    slug: 'profit-margin',
    definition: 'Le pourcentage du chiffre d\'affaires restant après déduction des coûts, indiquant la rentabilité de l\'entreprise.',
    extendedDescription: 'La marge brute mesure le chiffre d\'affaires moins le coût des marchandises vendues. La marge nette tient compte de toutes les charges y compris les frais généraux, les impôts et les intérêts. Des marges plus élevées indiquent une meilleure efficacité et un pouvoir de fixation des prix. Les benchmarks varient considérablement selon le secteur.',
    relatedTerms: ['gross-profit', 'net-profit', 'revenue'],
    category: 'accounting',
    relatedArticles: ['profit-margins-how-to-calculate-and-improve']
  },
  {
    term: 'Comptabilité de caisse',
    slug: 'cash-basis-accounting',
    definition: 'Une méthode comptable qui enregistre les revenus à la réception de l\'argent et les charges au moment du paiement.',
    extendedDescription: 'La comptabilité de caisse est plus simple que la comptabilité d\'engagement et est couramment utilisée par les petites entreprises et les auto-entrepreneurs. Elle offre une image claire de la trésorerie réelle disponible mais peut ne pas refléter avec précision la situation financière à long terme.',
    relatedTerms: ['accrual-accounting', 'revenue-recognition'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  {
    term: 'Comptabilité d\'engagement',
    slug: 'accrual-accounting',
    definition: 'Une méthode comptable qui enregistre les revenus lorsqu\'ils sont acquis et les charges lorsqu\'elles sont engagées, indépendamment du moment du flux de trésorerie.',
    extendedDescription: 'La comptabilité d\'engagement fournit une image plus précise de la santé financière d\'une entreprise en rapprochant les revenus des charges correspondantes. Elle est requise pour les grandes entreprises et celles recherchant des investissements externes.',
    relatedTerms: ['cash-basis-accounting', 'revenue-recognition', 'matching-principle'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  // Fiscalité
  {
    term: 'TVA (Taxe sur la Valeur Ajoutée)',
    slug: 'vat',
    definition: 'Un impôt sur la consommation ajouté à chaque étape de la production ou de la distribution, finalement payé par le consommateur final.',
    extendedDescription: 'La TVA est utilisée dans plus de 160 pays, dont l\'UE, le Royaume-Uni, le Nigeria et l\'Australie (sous le nom de GST). Les entreprises assujetties à la TVA collectent la TVA sur les ventes et peuvent récupérer la TVA payée sur les achats professionnels. Les taux et seuils varient selon les pays.',
    relatedTerms: ['sales-tax', 'gst', 'tax-invoice'],
    category: 'tax',
    relatedArticles: ['hmrc-invoicing-rules-uk-mtd-compliance']
  },
  {
    term: 'Facture fiscale',
    slug: 'tax-invoice',
    definition: 'Une facture comportant des informations fiscales spécifiques exigées par les autorités fiscales à des fins de TVA/GST.',
    extendedDescription: 'Les factures fiscales doivent contenir des éléments comme les numéros d\'enregistrement fiscal, les montants de taxe et, dans certaines juridictions, des mentions spécifiques. Elles permettent aux entreprises de demander des crédits de taxe en amont et sont essentielles pour la conformité fiscale.',
    relatedTerms: ['vat', 'invoice', 'input-tax-credit'],
    category: 'tax'
  },
  {
    term: 'Déduction fiscale',
    slug: 'tax-deduction',
    definition: 'Une charge professionnelle qui peut être soustraite du revenu imposable, réduisant le montant de l\'impôt dû.',
    extendedDescription: 'Les déductions courantes incluent les frais de bureau, le matériel, les déplacements, les services professionnels et les assurances. Une documentation appropriée est essentielle — conservez les justificatifs et les registres pendant la durée de conservation requise. Consultez un expert-comptable pour les règles spécifiques à votre juridiction.',
    relatedTerms: ['taxable-income', 'business-expense', 'depreciation'],
    category: 'tax',
    relatedArticles: ['small-business-tax-deductions-guide']
  },
  {
    term: 'Retenue à la source',
    slug: 'withholding-tax',
    definition: 'Impôt prélevé à la source sur les revenus, dividendes ou paiements à des entités étrangères.',
    extendedDescription: 'Les exigences de retenue à la source varient selon le pays et le type de paiement. Dans certaines juridictions, les entreprises doivent retenir l\'impôt sur les paiements aux sous-traitants au-delà de certains seuils. Le montant retenu est versé directement aux autorités fiscales au nom du bénéficiaire.',
    relatedTerms: ['income-tax', 'tax-compliance'],
    category: 'tax'
  },
  // Affaires
  {
    term: 'Devis estimatif',
    slug: 'estimate',
    definition: 'Une approximation des coûts pour un projet ou service, non juridiquement contraignante et susceptible de modification.',
    extendedDescription: 'Les devis estimatifs donnent aux clients une idée des coûts avant engagement. Ils diffèrent des devis fermes (qui sont généralement fixes) et doivent clairement indiquer les hypothèses et conditions pouvant affecter le prix final. Convertir les devis acceptés en factures simplifie la facturation.',
    relatedTerms: ['quote', 'proposal', 'pro-forma-invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Devis',
    slug: 'quote',
    definition: 'Une offre à prix fixe pour des biens ou services spécifiques, généralement valable pour une période déterminée.',
    extendedDescription: 'Contrairement aux estimations, les devis sont généralement considérés comme contraignants une fois acceptés. Ils doivent préciser exactement ce qui est inclus, la période de validité, les conditions de paiement et les éventuelles conditions. Des devis professionnels renforcent la confiance du client.',
    relatedTerms: ['estimate', 'proposal', 'invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Proposition commerciale',
    slug: 'proposal',
    definition: 'Un document détaillé présentant des solutions, une approche, un calendrier et des prix pour conquérir de nouveaux clients.',
    extendedDescription: 'Les propositions commerciales vont au-delà de la tarification pour démontrer la compréhension des besoins du client, la méthodologie proposée, l\'expérience pertinente et les résultats attendus. Les propositions efficaces sont personnalisées, professionnelles et articulent clairement la valeur ajoutée.',
    relatedTerms: ['estimate', 'quote', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['how-to-write-winning-business-proposal']
  },
  {
    term: 'Contrat de prestation continue',
    slug: 'retainer',
    definition: 'Des honoraires continus payés pour s\'assurer des services réguliers, souvent facturés mensuellement pour un nombre défini d\'heures ou de livrables.',
    extendedDescription: 'Les contrats de prestation continue fournissent des revenus prévisibles pour les prestataires et un accès prioritaire pour les clients. Ils spécifient typiquement les heures/livrables minimums, les politiques de report et les limites de périmètre. Les contrats mensuels sont courants dans le conseil, le juridique et les services créatifs.',
    relatedTerms: ['recurring-invoice', 'service-agreement', 'scope-of-work'],
    category: 'business'
  },
  {
    term: 'Cahier des charges',
    slug: 'scope-of-work',
    definition: 'Un document définissant les tâches spécifiques, les livrables, le calendrier et les limites d\'un projet ou engagement.',
    extendedDescription: 'Un cahier des charges clair prévient les malentendus et la dérive du périmètre. Il doit détailler ce qui est inclus et exclu, les jalons, les critères d\'acceptation et la gestion des modifications. Les deux parties doivent convenir du périmètre avant le début des travaux.',
    relatedTerms: ['proposal', 'contract', 'deliverable'],
    category: 'business',
    relatedArticles: ['freelance-contract-templates']
  },
  {
    term: 'Bon de commande',
    slug: 'purchase-order',
    definition: 'Un document commercial émis par un acheteur à un vendeur, autorisant une transaction d\'achat.',
    extendedDescription: 'Les bons de commande formalisent l\'intention d\'achat et créent une obligation contractuelle lorsqu\'ils sont acceptés. Ils spécifient les produits/services, quantités, prix et conditions de livraison. Dans les transactions B2B, les factures référencent souvent le numéro de bon de commande correspondant.',
    relatedTerms: ['invoice', 'vendor', 'procurement'],
    category: 'business'
  },
  // Freelance
  {
    term: 'Heures facturables',
    slug: 'billable-hours',
    definition: 'Temps consacré au travail client pouvant être facturé, par opposition au temps administratif ou non facturable.',
    extendedDescription: 'Le suivi précis des heures facturables est essentiel pour les freelances et consultants. En général, seuls 60-70 % du temps de travail total sont facturables en raison de l\'administration, du marketing et du développement commercial. Les tarifs doivent tenir compte de cette réalité pour maintenir la rentabilité.',
    relatedTerms: ['time-tracking', 'hourly-rate', 'utilization-rate'],
    category: 'freelancing',
    relatedArticles: ['freelance-time-tracking-guide']
  },
  {
    term: 'Dérive du périmètre',
    slug: 'scope-creep',
    definition: 'L\'expansion progressive d\'un projet au-delà de ses limites initiales, souvent sans ajustements correspondants du budget ou du calendrier.',
    extendedDescription: 'La dérive du périmètre érode la rentabilité et met à mal les relations clients. Prévenez-la avec des définitions de périmètre claires, des procédures de demande de modification et des revues de projet régulières. Lorsque du travail supplémentaire est demandé, documentez-le et discutez des implications budgétaires avant de poursuivre.',
    relatedTerms: ['scope-of-work', 'change-order', 'project-management'],
    category: 'freelancing'
  },
  {
    term: 'Paiement par jalons',
    slug: 'milestone-payment',
    definition: 'Une structure de paiement où des portions du montant total sont versées à l\'achèvement de phases de projet définies.',
    extendedDescription: 'Les paiements par jalons réduisent le risque pour les deux parties en liant les paiements aux livrables. Les structures courantes incluent 50 % d\'avance/50 % à l\'achèvement, ou des tiers (33 % au démarrage, 33 % à mi-parcours, 34 % à l\'achèvement). Définissez des jalons clairs et mesurables dans votre contrat.',
    relatedTerms: ['payment-terms', 'project-management', 'deliverable'],
    category: 'freelancing'
  },
  // Gestion des dépenses
  {
    term: 'Note de frais',
    slug: 'expense-report',
    definition: 'Un document listant les dépenses professionnelles engagées par un employé ou prestataire, généralement soumis pour remboursement ou à des fins fiscales.',
    extendedDescription: 'Les notes de frais comprennent typiquement la date, le fournisseur, le montant, la catégorie et les justificatifs. Elles servent au suivi interne et à la conformité fiscale. Les logiciels modernes automatisent la création des notes en important les transactions et en joignant les justificatifs numérisés.',
    relatedTerms: ['tax-deduction', 'accounts-payable', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Numérisation de reçus (OCR)',
    slug: 'receipt-scanning',
    definition: 'Le processus d\'utilisation de la reconnaissance optique de caractères pour numériser et extraire des données de reçus papier.',
    extendedDescription: 'La technologie OCR lit le texte imprimé sur les reçus et le convertit en données numériques structurées — noms de fournisseurs, dates, montants et informations fiscales sont extraits automatiquement. Cela élimine la saisie manuelle, réduit les erreurs et crée des archives numériques recherchables acceptées par les autorités fiscales.',
    relatedTerms: ['expense-report', 'tax-deduction'],
    category: 'accounting',
    relatedArticles: ['receipt-scanning-apps-comparison', 'digital-receipt-management-guide']
  },
  {
    term: 'Catégorie de dépenses',
    slug: 'expense-category',
    definition: 'Un groupement de classification pour les dépenses professionnelles correspondant au plan comptable et aux lignes de déclaration fiscale.',
    extendedDescription: 'La catégorisation correcte des dépenses est essentielle pour une présentation financière précise et la déclaration fiscale. Les catégories courantes incluent les fournitures de bureau, les déplacements, les services professionnels, les logiciels/abonnements et le marketing.',
    relatedTerms: ['chart-of-accounts', 'tax-deduction', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['business-expense-categories-guide']
  },
  {
    term: 'Dépense remboursable',
    slug: 'reimbursable-expense',
    definition: 'Une dépense professionnelle payée par un employé ou prestataire qui peut être remboursée par le client ou l\'employeur.',
    extendedDescription: 'Les dépenses remboursables diffèrent des dépenses déductibles fiscalement. Les dépenses déductibles réduisent votre revenu imposable, tandis que les dépenses remboursables sont des coûts engagés au nom d\'un client que vous pouvez lui refacturer. Exemples courants : frais de déplacement, matériaux achetés pour un projet et licences logicielles.',
    relatedTerms: ['expense-report', 'invoice', 'accounts-receivable'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Suivi des dépenses',
    slug: 'expense-tracking',
    definition: 'Le processus systématique d\'enregistrement, de catégorisation et de surveillance de toutes les dépenses professionnelles.',
    extendedDescription: 'Un suivi efficace des dépenses implique la capture en temps réel de chaque achat professionnel, sa catégorisation correcte et la conservation de justificatifs. Les méthodes vont des simples tableurs aux logiciels automatisés synchronisés avec les comptes bancaires.',
    relatedTerms: ['expense-category', 'receipt-scanning', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-tracking-methods-small-business']
  },
  {
    term: 'Reçu numérique',
    slug: 'digital-receipt',
    definition: 'Une version électronique d\'un reçu d\'achat, reçue numériquement ou créée en numérisant un reçu papier.',
    extendedDescription: 'Les reçus numériques sont acceptés par pratiquement toutes les autorités fiscales dans le monde comme preuve d\'achat valide. Ils offrent des avantages par rapport au papier : ils ne s\'effacent pas, sont instantanément recherchables, n\'occupent pas d\'espace physique et peuvent être automatiquement associés aux enregistrements de dépenses.',
    relatedTerms: ['receipt-scanning', 'expense-tracking', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['digital-receipt-management-guide']
  },
  // Gestion client
  {
    term: 'Intégration client',
    slug: 'client-onboarding',
    definition: 'Le processus structuré d\'accueil et d\'intégration d\'un nouveau client dans votre flux de travail.',
    extendedDescription: 'Un processus d\'intégration professionnel fixe les attentes, renforce la confiance et réduit les malentendus dès le départ. Les éléments clés incluent un dossier de bienvenue, un questionnaire de projet, un contrat signé, la mise en place des conditions de paiement, une réunion de lancement et un calendrier partagé.',
    relatedTerms: ['scope-of-work', 'proposal', 'retainer'],
    category: 'business',
    relatedArticles: ['client-onboarding-process']
  },
  {
    term: 'Fidélisation client',
    slug: 'client-retention',
    definition: 'Les stratégies et pratiques utilisées pour maintenir des relations continues avec les clients existants et encourager les affaires récurrentes.',
    extendedDescription: 'La fidélisation client est typiquement 5 à 7 fois plus rentable que l\'acquisition de nouveaux clients. Les stratégies clés incluent une communication régulière, le dépassement des attentes, l\'offre de contrats de prestation continue, la collecte de feedback par des enquêtes NPS et la simplification de la collaboration via des outils comme les portails clients.',
    relatedTerms: ['retainer', 'client-onboarding', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['client-retention-strategies']
  },
  {
    term: 'CRM (Gestion de la Relation Client)',
    slug: 'crm',
    definition: 'Un système ou logiciel pour gérer les interactions avec les clients actuels et potentiels, suivre les communications et organiser les données clients.',
    extendedDescription: 'Les systèmes CRM vont des simples tableurs aux logiciels d\'entreprise comme Salesforce. Pour les freelances et petites entreprises, un CRM léger suivant les coordonnées, l\'historique des projets, les échanges et le statut des paiements est généralement suffisant. De nombreuses plateformes de facturation incluent des fonctions CRM de base.',
    relatedTerms: ['client-onboarding', 'client-retention'],
    category: 'business',
    relatedArticles: ['crm-for-freelancers-small-business']
  },
  {
    term: 'Communication client',
    slug: 'client-communication',
    definition: 'L\'échange structuré d\'informations entre un prestataire et son client tout au long d\'un projet ou engagement.',
    extendedDescription: 'Une communication client efficace comprend des mises à jour régulières, une réponse claire aux demandes de modification, des relances de paiement professionnelles et un signalement proactif des problèmes. L\'utilisation de modèles pour les communications courantes fait gagner du temps tout en maintenant la cohérence.',
    relatedTerms: ['client-onboarding', 'scope-of-work', 'scope-creep'],
    category: 'business',
    relatedArticles: ['client-communication-templates']
  }
];

registerGlossaryTerms('fr', glossaryTermsFR);
