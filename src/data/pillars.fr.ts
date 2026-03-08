import { registerPillars } from '@/utils/i18nData';
import type { Pillar } from '@/data/topicalMap';

const pillars: Pillar[] = [
  {
    id: 'invoicing-mastery',
    title: 'Maîtriser la facturation',
    slug: 'invoicing',
    description: 'Maîtrisez l\'art de la facturation professionnelle pour être payé plus vite et paraître plus professionnel.',
    longDescription: 'Tout ce que vous devez savoir sur la création de factures professionnelles, des éléments essentiels aux bonnes pratiques. Apprenez à facturer correctement, à être payé plus rapidement et à respecter les réglementations fiscales de différents pays.',
    targetProduct: '/invoicing',
    hubPage: '/guides/invoicing',
    blogHubPage: '/blog/complete-guide-to-business-invoicing',
    icon: 'FileText',
    color: 'hsl(var(--primary))',
    keyTopics: [
      { title: 'Éléments essentiels', description: 'Les éléments indispensables de toute facture professionnelle.', link: '/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners' },
      { title: 'Modèles de facture', description: 'Créez des modèles professionnels qui reflètent votre marque.', link: '/blog/invoicemonk-template-how-to-create-a-perfect-invoice-template' },
      { title: 'Facturation ponctuelle', description: 'Maîtrisez le timing pour un meilleur flux de trésorerie.', link: '/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently' },
      { title: 'Numérotation des factures', description: 'Un système de numérotation pour rester organisé.', link: '/blog/invoice-numbering-best-practices' },
      { title: 'Conditions de paiement', description: 'Rédigez des conditions claires que les clients comprennent.', link: '/blog/how-to-write-invoice-payment-terms' },
      { title: 'Factures récurrentes', description: 'Automatisez la facturation pour les clients réguliers.', link: '/blog/recurring-invoices-automating-billing' }
    ],
    faq: [
      { question: 'Quels sont les éléments essentiels d\'une facture professionnelle ?', answer: 'Une facture professionnelle doit inclure : votre nom commercial et coordonnées, les informations du client, un numéro de facture unique, la date et l\'échéance, la liste détaillée des produits/services avec quantités et prix, les sous-totaux et totaux, les taxes applicables et les modes de paiement acceptés.' },
      { question: 'Comment numéroter mes factures correctement ?', answer: 'Utilisez un système séquentiel facile à suivre. Formats courants : séquentiel simple (001, 002, 003), basé sur la date (2024-001) ou préfixé par client (ABC-001). L\'essentiel est la cohérence – ne réutilisez jamais un numéro.' },
      { question: 'Quand envoyer une facture ?', answer: 'Pour les projets, envoyez immédiatement après achèvement ou aux jalons convenus. Pour les services récurrents, établissez un calendrier régulier. Plus vous facturez vite, plus vite vous êtes payé.' },
      { question: 'Quelles conditions de paiement utiliser ?', answer: 'Les conditions courantes incluent Net 15, Net 30 ou Paiement à réception. Pour les nouveaux clients, des délais plus courts réduisent le risque. Envisagez un escompte (2/10 Net 30) pour encourager le paiement rapide.' },
      { question: 'Comment gérer la facturation internationale ?', answer: 'Pour les clients internationaux, indiquez : la devise, vos coordonnées bancaires internationales (IBAN, SWIFT), les informations fiscales applicables, et assurez la conformité avec les réglementations des deux pays.' }
    ]
  },
  {
    id: 'getting-paid',
    title: 'Être payé plus vite',
    slug: 'getting-paid',
    description: 'Stratégies et outils pour accélérer vos encaissements et améliorer votre trésorerie.',
    longDescription: 'Découvrez des stratégies éprouvées pour réduire les retards de paiement et améliorer votre trésorerie. Des modèles de relance au choix des bons moyens de paiement, tout pour être payé plus rapidement en tant que petit entrepreneur ou freelance.',
    targetProduct: '/payments',
    hubPage: '/guides/getting-paid',
    blogHubPage: '/blog/ultimate-guide-getting-paid-faster',
    icon: 'Wallet',
    color: 'hsl(142, 76%, 36%)',
    keyTopics: [
      { title: 'Retards de paiement', description: 'Approches professionnelles pour recouvrer les impayés.', link: '/blog/how-to-handle-late-payments-professionally' },
      { title: 'Moyens de paiement', description: 'Comparez les options de paiement en ligne.', link: '/blog/online-payment-methods-comparison-small-business' },
      { title: 'Relances de paiement', description: 'Automatisez les rappels pour réduire les retards.', link: '/blog/payment-reminder-email-templates' },
      { title: 'Escompte', description: 'Incitez vos clients à payer plus vite.', link: '/blog/early-payment-discounts-do-they-work' },
      { title: 'Prévision de trésorerie', description: 'Anticipez et planifiez vos encaissements.', link: '/blog/cash-flow-forecasting-for-freelancers' }
    ],
    faq: [
      { question: 'Comment relancer un paiement en retard ?', answer: 'Commencez par un rappel amical 1 à 3 jours après l\'échéance. Sans paiement après une semaine, envoyez une relance plus ferme. Au-delà de 30 jours, envisagez un appel téléphonique. Restez toujours professionnel et documentez toutes les communications.' },
      { question: 'Dois-je offrir un escompte ?', answer: 'L\'escompte comme « 2/10 Net 30 » peut accélérer les paiements. Calculez cependant le coût annuel effectif – 2 % de remise pour 20 jours d\'avance équivaut à environ 36 % annuellement. Cela convient surtout aux entreprises à forte marge.' },
      { question: 'Quels moyens de paiement accepter ?', answer: 'Acceptez plusieurs méthodes : virement bancaire (frais les plus bas), cartes de crédit/débit (pratique pour les clients) et portefeuilles numériques comme PayPal ou Stripe. Tenez compte des préférences locales.' },
      { question: 'Comment réduire les retards de paiement ?', answer: 'Stratégies clés : conditions claires dès le départ, facturation immédiate après achèvement, rappels automatiques, plusieurs moyens de paiement et acomptes pour les gros projets.' }
    ]
  },
  {
    id: 'business-finances',
    title: 'Finances d\'entreprise',
    slug: 'business-finances',
    description: 'Connaissances essentielles en comptabilité et gestion des dépenses pour la réussite des petites entreprises.',
    longDescription: 'Maîtrisez les fondamentaux de la comptabilité et de la gestion financière des petites entreprises. De la création de budgets à la compréhension des rapports financiers, acquérez les connaissances pour prendre des décisions éclairées.',
    targetProduct: '/accounting',
    hubPage: '/guides/business-finances',
    blogHubPage: '/blog/small-business-accounting-guide',
    icon: 'Calculator',
    color: 'hsl(221, 83%, 53%)',
    keyTopics: [
      { title: 'Bases de la comptabilité', description: 'Concepts fondamentaux pour tout entrepreneur.', link: '/blog/the-basics-of-small-business-accounting' },
      { title: 'Création de budget', description: 'Construire un budget qui stimule la croissance.', link: '/blog/how-to-create-a-budget-for-your-small-business' },
      { title: 'Rapports financiers', description: 'Comprendre les rapports essentiels pour votre entreprise.', link: '/blog/small-business-accounting-guide' },
      { title: 'Marges bénéficiaires', description: 'Calculer et améliorer la rentabilité.', link: '/blog/profit-margins-how-to-calculate-and-improve' },
      { title: 'Comptabilité de caisse vs. engagement', description: 'Choisir la bonne méthode comptable.', link: '/blog/cash-vs-accrual-accounting-explained' }
    ],
    faq: [
      { question: 'Comptabilité de caisse ou d\'engagement ?', answer: 'La comptabilité de caisse enregistre à la réception/paiement – plus simple pour les petites entreprises. La comptabilité d\'engagement enregistre à la date de fait générateur, offrant une image financière plus précise.' },
      { question: 'Quels rapports financiers suivre ?', answer: 'Rapports essentiels : compte de résultat pour la rentabilité, bilan pour l\'actif et le passif, tableau des flux de trésorerie et balance âgée des créances.' },
      { question: 'Comment créer un budget pour ma petite entreprise ?', answer: 'Analysez les revenus et dépenses passés. Catégorisez les coûts fixes (loyer, salaires) et variables (fournitures, marketing). Fixez des objectifs réalistes et révisez mensuellement.' },
      { question: 'Quand engager un comptable ?', answer: 'Envisagez un professionnel quand : votre entreprise dépasse la comptabilité simple, vous avez besoin de conseils fiscaux, vous cherchez un financement ou vous passez plus de temps sur les finances que sur votre cœur de métier.' }
    ]
  },
  {
    id: 'tax-compliance',
    title: 'Fiscalité & Conformité',
    slug: 'tax-compliance',
    description: 'Restez prêt pour les contrôles et conforme aux réglementations fiscales de différentes régions.',
    longDescription: 'Naviguez la conformité fiscale avec assurance au Nigeria, au Royaume-Uni, aux États-Unis, au Canada et en Australie. Découvrez les exigences de facturation, les déductions fiscales, la préparation aux contrôles et les normes de conservation.',
    targetProduct: '/compliance',
    hubPage: '/guides/tax-compliance',
    blogHubPage: '/blog/small-business-tax-compliance-guide',
    icon: 'Shield',
    color: 'hsl(271, 91%, 65%)',
    keyTopics: [
      { title: 'Déductions fiscales', description: 'Maximiser les déductions légitimes.', link: '/blog/small-business-tax-deductions-guide' },
      { title: 'Préparation au contrôle', description: 'Rester prêt pour les vérifications fiscales.', link: '/blog/how-to-prepare-business-tax-audit' },
      { title: 'Nigeria (FIRS)', description: 'Exigences de facturation conformes au NRS.', link: '/blog/firs-invoice-requirements-nigeria' },
      { title: 'UK (HMRC)', description: 'Guide de conformité Making Tax Digital.', link: '/blog/hmrc-invoicing-rules-uk-mtd-compliance' },
      { title: 'USA (IRS)', description: 'Conformité fiscale pour les PME américaines.', link: '/blog/irs-invoice-requirements-us-compliance' },
      { title: 'Conservation des documents', description: 'Maintenir des archives conformes.', link: '/blog/how-to-prepare-business-tax-audit' }
    ],
    faq: [
      { question: 'Combien de temps conserver les documents commerciaux ?', answer: 'Généralement 6 à 7 ans. Nigeria (FIRS) : 6 ans, UK (HMRC) : 6 ans, USA (IRS) : 7 ans, Canada (ARC) : 6 ans, Australie (ATO) : 5 ans. Conserver indéfiniment : comptes annuels, achats d\'actifs et documents juridiques.' },
      { question: 'Quels éléments de facture sont légalement obligatoires ?', answer: 'Les exigences varient mais incluent typiquement : nom/adresse de l\'entreprise, coordonnées du client, numéro unique, date, description des biens/services, montants, ventilation fiscale (TVA) et votre numéro fiscal.' },
      { question: 'Comment se préparer à un contrôle fiscal ?', answer: 'Tenez des registres organisés et datés de toutes les transactions. Conservez les justificatifs. Rapprochez régulièrement les comptes. Utilisez un logiciel de comptabilité pour des enregistrements précis et consultables.' },
      { question: 'Dois-je facturer la TVA ?', answer: 'Cela dépend de votre statut et des seuils. UK : TVA au-delà de £85 000 de CA. Australie : GST au-delà de $75 000. France : TVA obligatoire sauf régime de franchise en base (seuil selon activité).' }
    ]
  },
  {
    id: 'freelancer-success',
    title: 'Réussite en freelance',
    slug: 'freelancing',
    description: 'Construisez une activité freelance florissante avec des conseils pratiques et des outils.',
    longDescription: 'Tout ce dont les freelances ont besoin pour bâtir une activité durable et rentable. De la recherche de clients à la fixation des tarifs, en passant par la gestion de plusieurs projets, découvrez les stratégies des freelances qui réussissent.',
    targetProduct: '/freelancers',
    hubPage: '/guides/freelancing',
    blogHubPage: '/blog/freelancer-business-guide',
    icon: 'User',
    color: 'hsl(25, 95%, 53%)',
    keyTopics: [
      { title: 'Trouver des missions', description: 'Les meilleures plateformes pour trouver des clients.', link: '/blog/top-10-freelance-websites' },
      { title: 'Développer ses compétences', description: 'Développer des compétences créatives recherchées.', link: '/blog/how-to-become-a-good-graphic-designer' },
      { title: 'Tarification', description: 'Fixer des tarifs qui reflètent votre valeur.', link: '/blog/pricing-your-freelance-services' },
      { title: 'Gestion des clients', description: 'Gérer plusieurs clients efficacement.', link: '/blog/freelancer-business-guide' },
      { title: 'Contrats', description: 'Se protéger avec des accords solides.', link: '/blog/freelance-contract-templates' },
      { title: 'Suivi du temps', description: 'Facturer précisément votre temps de travail.', link: '/blog/freelance-time-tracking-guide' }
    ],
    faq: [
      { question: 'Comment fixer mes tarifs freelance ?', answer: 'Calculez votre revenu annuel souhaité, ajoutez les charges et impôts, divisez par les heures facturables (60-70 % du temps de travail). Étudiez les tarifs du marché. Envisagez la tarification basée sur la valeur pour les freelances expérimentés.' },
      { question: 'Où trouver des clients freelance ?', answer: 'Commencez par des plateformes comme Upwork, Fiverr et Toptal. Développez votre réseau via LinkedIn et les événements sectoriels. Demandez des recommandations. Créez du contenu montrant votre expertise.' },
      { question: 'Ai-je besoin d\'un contrat pour chaque projet ?', answer: 'Oui ! Un contrat protège les deux parties. Incluez : périmètre, livrables, calendrier, conditions de paiement, politique de révisions, propriété intellectuelle et conditions de résiliation.' },
      { question: 'Comment gérer le dépassement de périmètre ?', answer: 'Définissez clairement le périmètre dans votre contrat. Face aux demandes supplémentaires, expliquez qu\'elles sont hors périmètre et proposez un devis pour le travail additionnel.' }
    ]
  },
  {
    id: 'estimates-proposals',
    title: 'Devis & Propositions',
    slug: 'estimates',
    description: 'Gagnez plus de clients avec des propositions convaincantes et des devis précis.',
    longDescription: 'Apprenez à créer des propositions gagnantes et des devis précis qui convertissent les prospects en clients payants. De la différence entre devis et estimation au suivi efficace, maîtrisez le processus d\'avant-vente.',
    targetProduct: '/estimates',
    hubPage: '/guides/estimates',
    blogHubPage: '/blog/winning-proposals-estimates-guide',
    icon: 'ClipboardList',
    color: 'hsl(340, 82%, 52%)',
    keyTopics: [
      { title: 'Rédaction de propositions', description: 'Rédigez des propositions qui gagnent des clients.', link: '/blog/how-to-write-winning-business-proposal' },
      { title: 'Devis vs. Estimation', description: 'Comprendre quand utiliser chaque document.', link: '/blog/estimate-vs-quote-vs-invoice-difference' },
      { title: 'Tarification de projets', description: 'Chiffrer les projets avec précision et rentabilité.', link: '/blog/how-to-price-project-work' },
      { title: 'Relance', description: 'Augmenter l\'acceptation avec un suivi intelligent.', link: '/blog/following-up-on-proposals' },
      { title: 'Gérer les refus', description: 'Tirer les leçons des propositions refusées.', link: '/blog/proposal-rejection-next-steps' }
    ],
    faq: [
      { question: 'Quelle est la différence entre estimation, devis et facture ?', answer: 'Une estimation est une approximation des coûts qui peut évoluer. Un devis est un engagement de prix fixe pour un périmètre défini. Une facture est une demande de paiement après réalisation du travail.' },
      { question: 'Comment rédiger une proposition gagnante ?', answer: 'Commencez par comprendre le problème du client. Structurez : compréhension du défi, solution proposée, expérience pertinente, tarification et calendrier clairs, et prochaines étapes.' },
      { question: 'Quand relancer après une proposition ?', answer: 'Relancez 3 à 5 jours après l\'envoi si pas de réponse. Envoyez un message bref et à valeur ajoutée. Sans réponse après deux relances, passez à autre chose.' },
      { question: 'Comment gérer les objections de prix ?', answer: 'Ne baissez pas immédiatement votre prix. Comprenez les contraintes budgétaires, ajustez le périmètre si nécessaire, mettez en avant le ROI et proposez des facilités de paiement.' }
    ]
  },
  {
    id: 'expense-management',
    title: 'Gestion des dépenses',
    slug: 'expenses',
    description: 'Suivez, catégorisez et optimisez vos dépenses professionnelles sans effort.',
    longDescription: 'Maîtrisez la gestion des dépenses, de la numérisation des reçus aux catégories déductibles. Apprenez à suivre vos dépenses, passer au zéro papier, séparer dépenses professionnelles et personnelles, et créer des rapports prêts pour l\'audit.',
    targetProduct: '/expenses',
    hubPage: '/guides/expenses',
    blogHubPage: '/blog/complete-guide-expense-management',
    icon: 'Receipt',
    color: 'hsl(173, 80%, 40%)',
    keyTopics: [
      { title: 'Suivi des dépenses', description: 'Méthodes et outils pour suivre les dépenses.', link: '/blog/expense-tracking-methods-small-business' },
      { title: 'Gestion des reçus', description: 'Passez au numérique pour la gestion des reçus.', link: '/blog/digital-receipt-management-guide' },
      { title: 'Catégories de dépenses', description: 'Catégoriser avec un plan comptable adapté.', link: '/blog/business-expense-categories-guide' },
      { title: 'Numérisation de reçus', description: 'Comparer les meilleures applis de scan.', link: '/blog/receipt-scanning-apps-comparison' },
      { title: 'Pro vs. Perso', description: 'Séparer correctement les dépenses.', link: '/blog/separate-business-personal-expenses' },
      { title: 'Déductions fiscales', description: 'Identifier et déduire les dépenses éligibles.', link: '/blog/tax-deductible-business-expenses' }
    ],
    faq: [
      { question: 'Quel est le moyen le plus simple de suivre ses dépenses ?', answer: 'Utilisez un logiciel qui permet de photographier les reçus, catégoriser automatiquement et synchroniser avec vos comptes bancaires. Cela élimine la saisie manuelle.' },
      { question: 'Comment catégoriser les dépenses professionnelles ?', answer: 'Catégories courantes : fournitures de bureau, déplacements, repas d\'affaires, prestations externes, logiciels et abonnements, marketing, assurance et charges. Adaptez à votre secteur.' },
      { question: 'Faut-il conserver les reçus papier ?', answer: 'La plupart des administrations fiscales acceptent désormais les copies numériques. Utilisez une appli de numérisation et conservez 5 à 7 ans selon votre juridiction.' },
      { question: 'Quelles dépenses sont déductibles fiscalement ?', answer: 'Toute dépense ordinaire et nécessaire à l\'activité est généralement déductible : loyer, fournitures, déplacements, formation, logiciels, assurance et marketing.' }
    ]
  },
  {
    id: 'client-management',
    title: 'Gestion des clients',
    slug: 'client-management',
    description: 'Construisez des relations clients plus fortes et rationalisez vos processus.',
    longDescription: 'Apprenez à gérer efficacement les relations clients, de l\'intégration à la fidélisation. Découvrez des modèles de communication, des stratégies pour les clients difficiles et des approches CRM simples pour freelances et petites entreprises.',
    targetProduct: '/client-management',
    hubPage: '/guides/client-management',
    blogHubPage: '/blog/client-management-guide-small-business',
    icon: 'Users',
    color: 'hsl(199, 89%, 48%)',
    keyTopics: [
      { title: 'Intégration client', description: 'Un processus d\'accueil fluide pour les nouveaux clients.', link: '/blog/client-onboarding-process' },
      { title: 'Clients difficiles', description: 'Gérer les situations complexes professionnellement.', link: '/blog/managing-difficult-clients' },
      { title: 'Modèles de communication', description: 'Templates professionnels pour la communication.', link: '/blog/client-communication-templates' },
      { title: 'Fidélisation', description: 'Stratégies pour que les clients reviennent.', link: '/blog/client-retention-strategies' },
      { title: 'CRM simple', description: 'Suivre les clients sans logiciel complexe.', link: '/blog/crm-for-freelancers-small-business' }
    ],
    faq: [
      { question: 'Les freelances ont-ils besoin d\'un CRM ?', answer: 'Pas forcément un CRM complet, mais un système pour suivre les coordonnées, l\'historique des projets et les relances. Un tableur suffit pour moins de 10 clients ; au-delà, envisagez un CRM léger.' },
      { question: 'Comment intégrer un nouveau client ?', answer: 'Un bon processus inclut : e-mail de bienvenue, questionnaire de besoins, contrat signé, mise en place des conditions de paiement et appel de lancement.' },
      { question: 'Comment gérer un client difficile ?', answer: 'Restez professionnel et documentez tout. Fixez des limites claires, communiquez par écrit et référez-vous à votre contrat. Si la relation est irrécupérable, mettez-y fin courtoisement.' },
      { question: 'Quelles sont les meilleures stratégies de fidélisation ?', answer: 'Livrez un travail constamment excellent, communiquez de manière proactive, demandez régulièrement un retour, offrez des remises de fidélité et restez présent avec des check-ins réguliers.' }
    ]
  }
];

registerPillars('fr', pillars);
