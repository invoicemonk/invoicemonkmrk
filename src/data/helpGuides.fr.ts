import type { HelpGuide } from './helpGuides';
import { registerHelpGuides } from '@/utils/i18nData';

const helpGuidesFR: HelpGuide[] = [
  // ─── Guide 1: Premiers pas ───
  {
    slug: 'getting-started',
    title: 'Premiers pas avec Invoicemonk — Votre première facture en 5 minutes',
    description: 'Configurez votre compte, complétez votre profil d\'entreprise et émettez votre première facture conforme.',
    icon: 'Rocket',
    category: 'getting-started',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Créer votre compte', text: 'Rendez-vous sur app.invoicemonk.com, cliquez sur « Commencer gratuitement », entrez vos informations et vérifiez votre adresse e-mail.' },
      { name: 'Configurer votre profil d\'entreprise', text: 'Entrez le nom de votre entreprise, la raison sociale, le pays, le numéro fiscal, le logo, l\'adresse et les informations de TVA si applicable.' },
      { name: 'Choisir votre forfait', text: 'Commencez avec le forfait Starter gratuit ou passez à Starter Payant, Professional ou Business pour plus de fonctionnalités.' },
      { name: 'Configurer les modes de paiement', text: 'Ajoutez votre compte bancaire ou vos coordonnées de mobile money pour que vos clients sachent comment vous payer.' },
    ],
    relatedGuides: ['managing-clients', 'creating-invoices', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com/signup',
    faq: [
      { question: 'Invoicemonk est-il gratuit ?', answer: 'Oui, le forfait Starter est entièrement gratuit. Vous pouvez créer des factures, gérer des clients et suivre les dépenses de base sans frais. Passez à un forfait supérieur pour des fonctionnalités avancées comme les rapports, la gestion d\'équipe et la personnalisation de la marque.' },
      { question: 'Ai-je besoin d\'un numéro fiscal pour utiliser Invoicemonk ?', answer: 'Bien que ce ne soit pas strictement requis pour créer un compte, l\'ajout de votre numéro d\'identification fiscale garantit que vos factures sont pleinement conformes aux réglementations locales.' },
      { question: 'Comment compléter mon profil d\'entreprise à 100 % ?', answer: 'Remplissez tous les champs : nom d\'entreprise, raison sociale, numéro fiscal, numéro de TVA (si applicable), logo, adresse complète, e-mail de contact et numéro de téléphone. Invoicemonk affiche votre pourcentage de complétion et met en évidence les champs manquants.' },
    ],
    content: `
      <h2>Étape 1 : Créer votre compte</h2>
      <p>Démarrer avec Invoicemonk prend moins de deux minutes. Rendez-vous sur <a href="https://app.invoicemonk.com" target="_blank" rel="noopener noreferrer">app.invoicemonk.com</a> et cliquez sur <strong>« Commencer gratuitement »</strong>.</p>
      <ul>
        <li>Entrez votre nom complet, votre adresse e-mail et un mot de passe sécurisé</li>
        <li>Vérifiez votre adresse e-mail en cliquant sur le lien envoyé dans votre boîte de réception</li>
        <li>La vérification par e-mail est requise avant de pouvoir émettre des factures</li>
      </ul>

      <h2>Étape 2 : Configurer votre profil d'entreprise</h2>
      <p>Après connexion, vous serez invité à créer votre entreprise. Ces informations apparaissent sur toutes vos factures et assurent la conformité.</p>
      <ul>
        <li>Entrez le <strong>nom de votre entreprise</strong> et la <strong>raison sociale</strong></li>
        <li>Sélectionnez votre <strong>pays / juridiction</strong></li>
        <li>Ajoutez votre <strong>numéro d'identification fiscale</strong></li>
        <li>Téléchargez votre <strong>logo d'entreprise</strong> (apparaît sur toutes les factures)</li>
        <li>Ajoutez votre adresse, e-mail de contact et numéro de téléphone</li>
        <li>Si vous êtes assujetti à la TVA, activez l'option et entrez votre numéro de TVA</li>
      </ul>

      <h2>Étape 3 : Choisir votre forfait</h2>
      <p>Invoicemonk propose un forfait Starter gratuit pour démarrer. Au fur et à mesure que votre entreprise se développe, passez à un forfait supérieur :</p>
      <ul>
        <li><strong>Starter (Gratuit)</strong> — Facturation de base et gestion des clients</li>
        <li><strong>Starter Payant</strong> — Plus de factures et suivi des dépenses</li>
        <li><strong>Professional</strong> — Rapports, gestion d'équipe, modèles personnalisés</li>
        <li><strong>Business</strong> — Suite complète avec journaux d'audit, multi-devises et support prioritaire</li>
      </ul>
      <p>Les prix s'adaptent par région. Visitez notre <a href="__LANG__/pricing">page de tarification</a> pour tous les détails.</p>

      <h2>Étape 4 : Configurer les modes de paiement</h2>
      <p>Allez dans <strong>Paramètres de l'entreprise</strong> et ajoutez vos coordonnées de paiement (compte bancaire, mobile money, etc.). Celles-ci apparaissent sur vos factures pour que vos clients sachent exactement comment vous payer.</p>

      <div class="callout">
        <strong>Conseil pro :</strong> Complétez votre profil d'entreprise à 100 % — cela garantit que toutes vos factures sont pleinement conformes aux réglementations locales. Invoicemonk affiche votre pourcentage de complétion et met en évidence les champs manquants.
      </div>
    `,
  },

  // ─── Guide 2: Gestion des clients ───
  {
    slug: 'managing-clients',
    title: 'Créer et gérer votre base de données clients',
    description: 'Ajoutez des clients, stockez leurs informations et créez rapidement des factures sans ressaisir les données.',
    icon: 'Users',
    category: 'getting-started',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Accéder aux clients', text: 'Cliquez sur « Clients » dans la barre latérale pour accéder à votre base de données clients.' },
      { name: 'Ajouter un nouveau client', text: 'Cliquez sur « Ajouter un client », choisissez Entreprise ou Particulier, et entrez nom, e-mail, téléphone, pays et numéro fiscal.' },
      { name: 'Ajouter les coordonnées', text: 'Développez la section Adresse pour ajouter l\'adresse complète pour la conformité des factures.' },
      { name: 'Rechercher et gérer', text: 'Utilisez la barre de recherche pour trouver des clients par nom ou e-mail. Cliquez sur une fiche client pour voir les détails et l\'historique des factures.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'notifications-reminders'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Pourquoi le numéro fiscal du client est-il requis pour les factures B2B ?', answer: 'Pour les transactions B2B, les réglementations fiscales exigent le numéro d\'identification fiscale du client sur les factures. Invoicemonk vous avertira si vous tentez d\'émettre une facture B2B sans celui-ci.' },
      { question: 'Puis-je importer des clients depuis un tableur ?', answer: 'Actuellement, les clients sont ajoutés individuellement via le tableau de bord. L\'importation en masse par CSV est prévue pour une version future.' },
    ],
    content: `
      <h2>Ajouter un nouveau client</h2>
      <p>Avant de pouvoir émettre des factures, vous devez ajouter vos clients. Invoicemonk stocke toutes les informations client pour que vous puissiez créer des factures rapidement sans ressaisir les données.</p>
      <ul>
        <li>Naviguez vers <strong>Clients</strong> depuis la barre latérale</li>
        <li>Cliquez sur <strong>Ajouter un client</strong></li>
        <li>Choisissez le type de client : <strong>Entreprise</strong> ou <strong>Particulier</strong></li>
        <li>Entrez le nom, l'e-mail et le numéro de téléphone du client</li>
        <li>Sélectionnez le pays / la localisation du client</li>
        <li>Pour la conformité, ajoutez le <strong>numéro fiscal</strong> — particulièrement important pour les transactions B2B</li>
        <li>Pour les entreprises, ajoutez optionnellement un <strong>numéro d'immatriculation</strong> et une personne de contact</li>
        <li>Développez la section <strong>Adresse</strong> pour ajouter l'adresse complète</li>
      </ul>

      <h2>Rechercher et gérer les clients</h2>
      <ul>
        <li>Utilisez la <strong>barre de recherche</strong> pour trouver rapidement des clients par nom ou e-mail</li>
        <li>Cliquez sur une fiche client pour voir les détails, l'historique des factures et le montant total facturé</li>
        <li>Modifiez les informations client à tout moment depuis la page de détail</li>
      </ul>

      <div class="callout">
        <strong>Note de conformité :</strong> Pour les transactions B2B, le numéro fiscal du client est requis pour la conformité des factures. Invoicemonk vous avertira si vous tentez d'émettre une facture B2B sans le numéro fiscal du client.
      </div>
    `,
  },

  // ─── Guide 3: Création de factures ───
  {
    slug: 'creating-invoices',
    title: 'Créer des factures professionnelles et conformes',
    description: 'Créez, émettez, envoyez et téléchargez des factures vérifiées cryptographiquement avec un journal d\'audit complet.',
    icon: 'FileText',
    category: 'core-features',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Démarrer une nouvelle facture', text: 'Cliquez sur « Créer une facture » depuis le tableau de bord ou naviguez vers Factures → Nouvelle facture.' },
      { name: 'Sélectionner client et modèle', text: 'Choisissez un client dans votre base de données et sélectionnez un modèle de facture.' },
      { name: 'Ajouter des lignes', text: 'Entrez descriptions, quantités et prix unitaires. La taxe est calculée automatiquement pour les entreprises assujetties à la TVA.' },
      { name: 'Enregistrer ou émettre', text: 'Enregistrez comme brouillon pour modification ultérieure, ou émettez pour verrouiller la facture, attribuer un numéro et générer un QR code de vérification.' },
      { name: 'Envoyer au client', text: 'Cliquez sur Envoyer pour envoyer la facture par e-mail. Le client reçoit un lien pour la consulter en ligne.' },
    ],
    relatedGuides: ['managing-clients', 'payments-receipts', 'invoice-verification', 'credit-notes'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Puis-je modifier une facture après l\'avoir émise ?', answer: 'Non. Les factures émises sont verrouillées pour maintenir l\'intégrité de l\'audit. Si vous devez apporter des modifications, annulez la facture et créez-en une nouvelle, ou émettez un avoir.' },
      { question: 'Quels sont les statuts de facture disponibles ?', answer: 'Brouillon, Émise, Envoyée, Consultée, Payée, Annulée et Créditée. Chaque statut est suivi avec des horodatages dans le journal d\'audit.' },
      { question: 'La TVA est-elle calculée automatiquement ?', answer: 'Oui, pour les entreprises assujetties à la TVA, le taux de TVA applicable est automatiquement appliqué. Vous pouvez marquer des lignes individuelles comme exonérées de TVA si nécessaire.' },
    ],
    content: `
      <h2>Créer une nouvelle facture</h2>
      <p>Le flux de facturation est le cœur d'Invoicemonk. Chaque facture est vérifiée cryptographiquement et comprend un journal d'audit immuable.</p>
      <ul>
        <li>Cliquez sur <strong>Créer une facture</strong> depuis le tableau de bord ou naviguez vers <strong>Factures → Nouvelle facture</strong></li>
        <li>Sélectionnez un <strong>client</strong> dans votre base de données (ou ajoutez-en un nouveau en ligne)</li>
        <li>Choisissez un <strong>modèle de facture</strong> (forfait Professional et supérieur)</li>
        <li>Définissez la <strong>date d'émission</strong> et la <strong>date d'échéance</strong></li>
      </ul>

      <h2>Ajouter des lignes</h2>
      <ul>
        <li>Entrez une <strong>description</strong> pour chaque article</li>
        <li>Définissez la <strong>quantité</strong> et le <strong>prix unitaire</strong></li>
        <li>Le taux de TVA est calculé automatiquement pour les entreprises assujetties</li>
        <li>Marquez des articles individuels comme <strong>exonérés de TVA</strong> si applicable</li>
        <li>Ajoutez des notes optionnelles, des conditions et un résumé</li>
        <li>Sélectionnez le <strong>mode de paiement</strong> à afficher sur la facture</li>
      </ul>

      <h2>Enregistrer vs. Émettre</h2>
      <ul>
        <li><strong>Enregistrer comme brouillon :</strong> Enregistre la facture sans attribuer de numéro. Vous pouvez la modifier ultérieurement.</li>
        <li><strong>Émettre :</strong> Verrouille la facture, attribue un numéro officiel, crée un hash cryptographique et génère un QR code de vérification. Les factures émises ne peuvent pas être modifiées.</li>
      </ul>

      <h2>Statuts de facture</h2>
      <ul>
        <li><strong>Brouillon</strong> — Enregistrée mais pas encore émise</li>
        <li><strong>Émise</strong> — Officiellement émise avec numéro et code de vérification</li>
        <li><strong>Envoyée</strong> — E-mail livré au client</li>
        <li><strong>Consultée</strong> — Le client a ouvert le lien de la facture</li>
        <li><strong>Payée</strong> — Paiement intégral enregistré</li>
        <li><strong>Annulée</strong> — Annulée (avec motif enregistré)</li>
        <li><strong>Créditée</strong> — Un avoir a été émis pour cette facture</li>
      </ul>

      <h2>Envoyer des factures</h2>
      <p>Depuis la page de détail de la facture, cliquez sur <strong>Envoyer</strong> pour envoyer la facture par e-mail à votre client. Le client reçoit un e-mail professionnel avec un lien pour consulter la facture en ligne. Vous serez notifié quand le client la consulte.</p>

      <h2>Télécharger les PDF</h2>
      <p>Cliquez sur <strong>Télécharger le PDF</strong> sur n'importe quelle facture émise pour obtenir un PDF professionnel avec votre logo, QR code et tous les détails de conformité.</p>
    `,
  },

  // ─── Guide 4: Paiements & Reçus ───
  {
    slug: 'payments-receipts',
    title: 'Enregistrer les paiements et générer des reçus',
    description: 'Enregistrez des paiements complets ou partiels et générez automatiquement des reçus vérifiés cryptographiquement.',
    icon: 'CreditCard',
    category: 'core-features',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Ouvrir la facture', text: 'Naviguez vers la page Factures et ouvrez la facture pour laquelle vous souhaitez enregistrer un paiement.' },
      { name: 'Enregistrer le paiement', text: 'Cliquez sur « Enregistrer le paiement », entrez le montant, la date, le mode de paiement et téléchargez optionnellement une preuve de paiement.' },
      { name: 'Gérer les paiements partiels', text: 'Enregistrez plusieurs paiements partiels pour une seule facture. Le statut ne passe à « Payée » que lorsque le montant total est reçu.' },
      { name: 'Consulter et partager les reçus', text: 'Naviguez vers Reçus pour voir tous les reçus générés. Téléchargez les PDF ou partagez le lien de vérification.' },
    ],
    relatedGuides: ['creating-invoices', 'invoice-verification', 'reports-exports'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Les reçus sont-ils générés automatiquement ?', answer: 'Oui. Chaque fois que vous enregistrez un paiement, un reçu officiel est automatiquement généré avec un numéro unique, un identifiant de vérification et tous les détails du paiement.' },
      { question: 'Puis-je enregistrer des paiements partiels ?', answer: 'Oui. Vous pouvez enregistrer plusieurs paiements partiels pour une seule facture. La facture affiche le total cumulé et ne passe à « Payée » que lorsque le montant total est reçu.' },
    ],
    content: `
      <h2>Enregistrer un paiement</h2>
      <p>Lorsque votre client paie, l'enregistrement du paiement dans Invoicemonk génère automatiquement un reçu immuable avec vérification cryptographique.</p>
      <ul>
        <li>Ouvrez la facture depuis la page <strong>Factures</strong></li>
        <li>Cliquez sur <strong>Enregistrer le paiement</strong></li>
        <li>Entrez le montant, la date et le mode de paiement</li>
        <li>Téléchargez optionnellement une preuve de paiement (capture d'écran de virement, etc.)</li>
        <li>Cliquez sur <strong>Enregistrer</strong> — le statut de la facture passe à « Payée » si entièrement payée</li>
      </ul>

      <h2>Paiements partiels</h2>
      <p>Vous pouvez enregistrer plusieurs paiements partiels pour une seule facture. La facture affiche le total cumulé des paiements reçus par rapport au montant dû. Le statut ne passe à « Payée » que lorsque le montant total est reçu.</p>

      <h2>Reçus automatiques</h2>
      <ul>
        <li>Chaque paiement génère automatiquement un reçu officiel</li>
        <li>Les reçus comprennent un numéro unique, un identifiant de vérification et tous les détails du paiement</li>
        <li>Naviguez vers <strong>Reçus</strong> pour voir tous les reçus générés</li>
        <li>Téléchargez les PDF des reçus ou partagez le lien de vérification avec vos clients</li>
      </ul>

      <h2>Vérification des reçus</h2>
      <p>Chaque reçu dispose d'un lien de vérification public que quiconque peut utiliser pour confirmer son authenticité. Partagez le lien ou laissez les clients scanner le QR code sur le PDF.</p>
    `,
  },

  // ─── Guide 5: Vérification des factures ───
  {
    slug: 'invoice-verification',
    title: 'Vérification par QR code — Prouver l\'authenticité des factures',
    description: 'Comprenez comment la vérification cryptographique et les QR codes prouvent l\'authenticité des documents.',
    icon: 'Shield',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Émettre une facture', text: 'Lors de l\'émission, Invoicemonk crée automatiquement un hash cryptographique et génère un identifiant de vérification unique et un QR code.' },
      { name: 'Partager en confiance', text: 'Envoyez la facture à votre client. Le QR code est intégré dans le PDF et la vue en ligne.' },
      { name: 'Vérifier l\'authenticité', text: 'N\'importe qui peut scanner le QR code ou visiter l\'URL de vérification pour confirmer que le document est authentique et non altéré.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: '/compliance',
    faq: [
      { question: 'N\'importe qui peut-il vérifier mes factures ?', answer: 'Oui. La page de vérification est publique. Toute personne disposant du QR code ou de l\'URL de vérification — clients, auditeurs, régulateurs — peut confirmer indépendamment l\'authenticité du document.' },
      { question: 'Que montre la page de vérification ?', answer: 'La page de vérification affiche le statut du document, les montants, les dates et confirme que les données correspondent au hash cryptographique original, prouvant que la facture n\'a pas été altérée.' },
    ],
    content: `
      <h2>Comment fonctionne la vérification</h2>
      <p>Chaque facture et reçu émis sur Invoicemonk est accompagné d'un identifiant de vérification unique et d'un QR code. Cela permet à quiconque — votre client, un auditeur ou un régulateur — de vérifier indépendamment l'authenticité du document.</p>
      <ul>
        <li>Lors de l'émission d'une facture, Invoicemonk crée un <strong>hash cryptographique</strong> de toutes les données de la facture</li>
        <li>Un <strong>identifiant de vérification unique</strong> est attribué et un <strong>QR code</strong> est généré</li>
        <li>Le QR code renvoie à une page de vérification publique affichant les détails de la facture</li>
        <li>Quiconque scanne le QR code ou visite l'URL de vérification peut confirmer que la facture est authentique et non altérée</li>
      </ul>

      <h2>Vérifier une facture</h2>
      <ul>
        <li>Scannez le <strong>QR code</strong> sur n'importe quelle facture ou reçu Invoicemonk</li>
        <li>Ou visitez l'<strong>URL de vérification</strong> directement</li>
        <li>La page de vérification affiche le statut du document, les montants, les dates et la confirmation de correspondance des données</li>
      </ul>
    `,
  },

  // ─── Guide 6: Avoirs ───
  {
    slug: 'credit-notes',
    title: 'Émettre des avoirs pour les factures annulées ou ajustées',
    description: 'Annulez ou ajustez des factures émises tout en maintenant un historique complet et vérifiable.',
    icon: 'RotateCcw',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Accéder à la facture originale', text: 'Ouvrez la facture qui doit être annulée ou ajustée.' },
      { name: 'Annuler la facture', text: 'Cliquez sur « Annuler » et indiquez un motif. Un avoir est automatiquement généré.' },
      { name: 'Consulter les avoirs', text: 'Naviguez vers Avoirs dans la barre latérale pour voir tous les avoirs avec leurs factures associées.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quand dois-je émettre un avoir ?', answer: 'Émettez un avoir lorsqu\'un client a été surfacturé, que des services n\'ont pas été fournis, qu\'une facture a été émise par erreur ou qu\'un remboursement partiel est nécessaire.' },
      { question: 'Puis-je modifier un avoir après sa création ?', answer: 'Non. Comme les factures, les avoirs sont immuables une fois créés. Ils reçoivent leur propre numéro unique et identifiant de vérification pour l\'intégrité de l\'audit.' },
    ],
    content: `
      <h2>Quand utiliser les avoirs</h2>
      <p>Lorsque vous devez annuler ou ajuster une facture émise, Invoicemonk prend en charge les avoirs qui maintiennent un journal d'audit complet.</p>
      <ul>
        <li>Le client a été surfacturé</li>
        <li>Les services n'ont pas été fournis</li>
        <li>La facture a été émise par erreur</li>
        <li>Un remboursement partiel est nécessaire</li>
      </ul>

      <h2>Créer un avoir</h2>
      <ul>
        <li>Naviguez vers la <strong>facture originale</strong></li>
        <li>Cliquez sur <strong>Annuler</strong> et indiquez un motif</li>
        <li>Un avoir est automatiquement généré en référence à la facture originale</li>
        <li>L'avoir reçoit son propre numéro unique et identifiant de vérification</li>
      </ul>

      <h2>Consulter les avoirs</h2>
      <ul>
        <li>Naviguez vers <strong>Avoirs</strong> depuis la barre latérale</li>
        <li>Recherchez par numéro d'avoir, numéro de facture originale ou nom du client</li>
        <li>Cliquez sur un avoir pour voir les détails complets et la facture associée</li>
      </ul>
    `,
  },

  // ─── Guide 7: Suivi des dépenses ───
  {
    slug: 'expense-tracking',
    title: 'Suivre et catégoriser vos dépenses professionnelles',
    description: 'Enregistrez des dépenses, catégorisez-les et visualisez où va votre argent grâce à des ventilations graphiques.',
    icon: 'Receipt',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Accéder aux dépenses', text: 'Cliquez sur « Dépenses » dans la barre latérale pour ouvrir le suivi des dépenses.' },
      { name: 'Ajouter une dépense', text: 'Cliquez sur « Ajouter une dépense », entrez le montant, la date, la description, la catégorie, le nom du fournisseur et des notes optionnelles.' },
      { name: 'Filtrer et rechercher', text: 'Filtrez par catégorie, recherchez par description ou fournisseur, et changez de période comptable.' },
      { name: 'Exporter vos données', text: 'Exportez les dépenses en CSV ou JSON pour votre comptable ou votre déclaration fiscale, limité à la période sélectionnée.' },
    ],
    relatedGuides: ['accounting-overview', 'reports-exports', 'business-settings'],
    targetFeature: '/expenses',
    faq: [
      { question: 'Quelles catégories de dépenses sont disponibles ?', answer: 'Invoicemonk propose des catégories par défaut : Fournitures de bureau, Voyages, Logiciels, Marketing, Services professionnels et Services publics. Les catégories vous aident à visualiser la répartition de vos dépenses.' },
      { question: 'Puis-je exporter les dépenses pour mon comptable ?', answer: 'Oui. Exportez les dépenses au format CSV ou JSON. Les exports sont limités à la période comptable et au compte de devise sélectionnés.' },
    ],
    content: `
      <h2>Ajouter une dépense</h2>
      <p>Le suivi des dépenses d'Invoicemonk vous aide à enregistrer vos dépenses professionnelles, à les catégoriser et à voir où va votre argent — le tout séparé par compte de devise pour une comptabilité précise.</p>
      <ul>
        <li>Naviguez vers <strong>Dépenses</strong> depuis la barre latérale</li>
        <li>Cliquez sur <strong>Ajouter une dépense</strong></li>
        <li>Entrez le montant, la date et la description</li>
        <li>Sélectionnez une catégorie (Fournitures de bureau, Voyages, Logiciels, Marketing, Services professionnels, Services publics, etc.)</li>
        <li>Ajoutez le nom du fournisseur et des notes optionnelles</li>
        <li>Enregistrez la dépense</li>
      </ul>

      <h2>Filtrer et rechercher</h2>
      <ul>
        <li>Filtrez les dépenses par catégorie via le menu déroulant</li>
        <li>Recherchez par description, fournisseur ou notes</li>
        <li>Changez de période comptable (mensuelle, trimestrielle, annuelle)</li>
      </ul>

      <h2>Ventilation des dépenses</h2>
      <p>Le tableau de bord affiche une ventilation visuelle des dépenses par catégorie avec des pourcentages. Consultez le total des dépenses pour la période sélectionnée en un coup d'œil.</p>

      <h2>Exporter les dépenses</h2>
      <p>Exportez vos dépenses en CSV ou JSON pour votre comptable ou votre déclaration fiscale. Les exports sont limités à la période et au compte de devise sélectionnés.</p>
    `,
  },

  // ─── Guide 8: Vue d'ensemble comptable ───
  {
    slug: 'accounting-overview',
    title: 'Votre vue d\'ensemble financière — Revenus, dépenses et résultats',
    description: 'Obtenez une vue d\'ensemble de vos finances avec les revenus, les dépenses et les vues de profit/perte.',
    icon: 'Calculator',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Consulter les revenus comptables', text: 'Visualisez tous les revenus des factures payées, filtrés par période comptable, avec les tendances des revenus dans le temps.' },
      { name: 'Examiner les dépenses comptables', text: 'Examinez toutes les dépenses enregistrées avec des ventilations par catégorie et des comparaisons d\'une période à l\'autre.' },
      { name: 'Vérifier les résultats comptables', text: 'Consultez le calcul du résultat net et la marge bénéficiaire, le tout par compte de devise.' },
    ],
    relatedGuides: ['expense-tracking', 'reports-exports', 'analytics'],
    targetFeature: '/accounting',
    faq: [
      { question: 'Invoicemonk remplace-t-il un logiciel de comptabilité ?', answer: 'Les fonctionnalités comptables d\'Invoicemonk sont un outil de gestion pour la visibilité quotidienne de vos finances. Pour la comptabilité formelle et la déclaration fiscale, consultez toujours un comptable qualifié.' },
      { question: 'Pourquoi les résultats sont-ils séparés par compte de devise ?', answer: 'Pour garantir la précision, toutes les données financières sont conservées dans une seule devise par compte. Pas de calculs de taux de change confus dans vos rapports. Chaque compte de devise a ses propres modes de paiement.' },
    ],
    content: `
      <h2>Revenus comptables</h2>
      <p>La section Comptabilité vous donne une vue d'ensemble de vos finances avec trois vues clés.</p>
      <ul>
        <li>Visualisez tous les revenus des factures payées</li>
        <li>Filtrez par période comptable</li>
        <li>Consultez les tendances des revenus dans le temps</li>
      </ul>

      <h2>Dépenses comptables</h2>
      <ul>
        <li>Examinez toutes les dépenses enregistrées</li>
        <li>Ventilation par catégorie avec graphiques visuels</li>
        <li>Comparaison d'une période à l'autre</li>
      </ul>

      <h2>Résultats comptables</h2>
      <ul>
        <li>Calcul du résultat net (Revenus moins Dépenses)</li>
        <li>Consultez votre marge bénéficiaire en un coup d'œil</li>
        <li>Toutes les données par compte de devise — pas de mélange de devises</li>
      </ul>

      <div class="callout">
        <strong>Important :</strong> Les fonctionnalités comptables d'Invoicemonk sont un outil de gestion, pas un substitut à un logiciel de comptabilité professionnel. Consultez toujours un comptable qualifié pour la déclaration fiscale.
      </div>
    `,
  },

  // ─── Guide 9: Rapports & Exports ───
  {
    slug: 'reports-exports',
    title: 'Générer des rapports conformes',
    description: 'Générez des rapports professionnels couvrant revenus, reçus, dépenses, comptabilité et conformité.',
    icon: 'BarChart3',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Accéder aux rapports', text: 'Cliquez sur « Rapports » dans la barre latérale pour ouvrir le générateur de rapports.' },
      { name: 'Sélectionner la catégorie', text: 'Choisissez parmi Revenus, Reçus, Dépenses, Comptabilité ou Conformité.' },
      { name: 'Définir les paramètres', text: 'Sélectionnez l\'année et le type de rapport spécifique dans la catégorie.' },
      { name: 'Générer et télécharger', text: 'Cliquez sur « Générer » pour télécharger en format JSON ou CSV. Tous les rapports sont limités à votre compte de devise actif.' },
    ],
    relatedGuides: ['accounting-overview', 'expense-tracking', 'analytics', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quels formats de rapports sont disponibles ?', answer: 'Les rapports peuvent être téléchargés en format JSON ou CSV. Le CSV est idéal pour les tableurs comme Excel ou Google Sheets, tandis que le JSON convient aux intégrations.' },
      { question: 'Les rapports sont-ils mono-devise ?', answer: 'Oui. Tous les rapports sont limités à votre compte de devise actif. Changez de compte de devise pour générer des rapports dans d\'autres devises.' },
    ],
    content: `
      <h2>Catégories de rapports</h2>
      <p>Invoicemonk génère des rapports professionnels dans cinq catégories. Les rapports sont disponibles avec les forfaits Professional et Business.</p>

      <h3>Rapports de revenus</h3>
      <ul>
        <li>Résumé des revenus par période</li>
        <li>Ventilation des revenus par client</li>
        <li>Analyse de l'ancienneté des factures impayées</li>
      </ul>

      <h3>Rapports de reçus</h3>
      <ul>
        <li>Registre des reçus de paiement</li>
        <li>Audit de vérification des reçus</li>
      </ul>

      <h3>Rapports de dépenses</h3>
      <ul>
        <li>Résumé des dépenses par catégorie</li>
        <li>Ventilation des dépenses par fournisseur</li>
      </ul>

      <h3>Rapports comptables</h3>
      <ul>
        <li>Compte de résultat</li>
        <li>Comparaison revenus vs. dépenses</li>
      </ul>

      <h3>Rapports de conformité</h3>
      <ul>
        <li>Rapport de synthèse fiscale</li>
        <li>Registre des factures pour audit</li>
      </ul>

      <h2>Générer un rapport</h2>
      <ul>
        <li>Naviguez vers <strong>Rapports</strong> depuis la barre latérale</li>
        <li>Sélectionnez l'année et la catégorie de rapport</li>
        <li>Cliquez sur <strong>Générer</strong> pour télécharger en JSON ou CSV</li>
        <li>Tous les rapports sont limités à votre compte de devise actif</li>
      </ul>

      <div class="callout">
        <strong>Note de conformité :</strong> Tous les exports comprennent des hash de vérification et des horodatages. Les rapports sont mono-devise pour garantir la précision.
      </div>
    `,
  },

  // ─── Guide 10: Analyses ───
  {
    slug: 'analytics',
    title: 'Comprendre votre activité grâce aux analyses visuelles',
    description: 'Consultez des graphiques interactifs pour les revenus, le statut des factures, l\'ancienneté des paiements et les tendances mensuelles.',
    icon: 'PieChart',
    category: 'financial-tools',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Accéder aux analyses', text: 'Cliquez sur « Analyses » dans la barre latérale pour accéder à votre tableau de bord d\'insights.' },
      { name: 'Sélectionner la période', text: 'Choisissez le trimestre que vous souhaitez analyser dans le sélecteur de période.' },
      { name: 'Explorer les graphiques', text: 'Consultez Revenus par client, Distribution des statuts de factures, Ancienneté des paiements et Comparaison mensuelle avec des détails au survol.' },
    ],
    relatedGuides: ['reports-exports', 'accounting-overview', 'payments-receipts'],
    targetFeature: 'https://app.invoicemonk.com',
    content: `
      <h2>Analyses disponibles</h2>
      <p>La page Analyses fournit des insights visuels sur votre activité de facturation avec des graphiques interactifs et des ventilations.</p>
      <ul>
        <li><strong>Revenus par client</strong> — Graphique en barres montrant quels clients contribuent le plus aux revenus</li>
        <li><strong>Distribution des statuts de factures</strong> — Graphique circulaire des brouillons, émises, envoyées, consultées, payées et annulées</li>
        <li><strong>Ancienneté des paiements</strong> — Voyez combien de temps les clients mettent en moyenne pour payer</li>
        <li><strong>Comparaison mensuelle</strong> — Graphique en ligne comparant les revenus mois par mois</li>
      </ul>

      <h2>Utiliser les analyses</h2>
      <ul>
        <li>Naviguez vers <strong>Analyses</strong> depuis la barre latérale</li>
        <li>Sélectionnez la période (trimestre)</li>
        <li>Consultez les graphiques interactifs avec détails au survol</li>
        <li>Utilisez les insights pour identifier vos meilleurs clients, suivre les schémas de paiement et repérer les tendances</li>
      </ul>
    `,
  },

  // ─── Guide 11: Gestion d'équipe ───
  {
    slug: 'team-management',
    title: 'Inviter votre équipe et gérer les rôles',
    description: 'Invitez des membres d\'équipe, attribuez des rôles et contrôlez l\'accès à votre entreprise Invoicemonk.',
    icon: 'UserPlus',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Accéder à l\'équipe', text: 'Cliquez sur « Équipe » dans la barre latérale pour accéder à la gestion d\'équipe.' },
      { name: 'Inviter un membre', text: 'Cliquez sur « Inviter un membre », entrez son adresse e-mail et sélectionnez un rôle (Propriétaire, Admin ou Membre).' },
      { name: 'Gérer les rôles', text: 'Modifiez le rôle d\'un membre, supprimez des membres ou renvoyez les invitations en attente depuis la page équipe.' },
    ],
    relatedGuides: ['business-settings', 'audit-logs', 'getting-started'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quels sont les rôles d\'équipe disponibles ?', answer: 'Le Propriétaire a un accès complet y compris la facturation. L\'Admin peut gérer les factures, clients et paramètres mais pas la facturation. Le Membre peut créer et consulter les factures et clients mais ne peut pas modifier les paramètres.' },
      { question: 'Quels forfaits prennent en charge la gestion d\'équipe ?', answer: 'La gestion d\'équipe est disponible avec les forfaits Professional et Business. Les forfaits Starter sont mono-utilisateur.' },
    ],
    content: `
      <h2>Rôles disponibles</h2>
      <p>Avec les forfaits Professional et Business, vous pouvez inviter des membres d'équipe dans votre entreprise Invoicemonk et attribuer des rôles pour contrôler ce qu'ils peuvent faire.</p>
      <ul>
        <li><strong>Propriétaire</strong> — Accès complet à tout, y compris la facturation et la gestion d'équipe</li>
        <li><strong>Admin</strong> — Peut gérer les factures, clients et paramètres, mais pas la facturation</li>
        <li><strong>Membre</strong> — Peut créer et consulter les factures et clients, mais ne peut pas modifier les paramètres</li>
      </ul>

      <h2>Inviter des membres d'équipe</h2>
      <ul>
        <li>Naviguez vers <strong>Équipe</strong> depuis la barre latérale</li>
        <li>Cliquez sur <strong>Inviter un membre</strong></li>
        <li>Entrez leur adresse e-mail et sélectionnez un rôle</li>
        <li>Ils recevront un e-mail d'invitation pour rejoindre votre entreprise</li>
      </ul>

      <h2>Gérer les membres d'équipe</h2>
      <ul>
        <li>Modifiez le rôle d'un membre depuis la page équipe</li>
        <li>Supprimez les membres qui n'ont plus besoin d'accès</li>
        <li>Consultez les invitations en attente et renvoyez-les si nécessaire</li>
      </ul>
    `,
  },

  // ─── Guide 12: Multi-devises ───
  {
    slug: 'multi-currency',
    title: 'Gérer plusieurs devises avec les comptes de devise',
    description: 'Utilisez les comptes de devise pour séparer proprement vos finances entre plusieurs devises.',
    icon: 'Globe',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Comprendre les comptes de devise', text: 'Votre compte de devise par défaut est créé automatiquement dans la devise principale de votre entreprise.' },
      { name: 'Ajouter des comptes de devise', text: 'Ajoutez des comptes de devise supplémentaires (USD, GBP, EUR, etc.) pour la facturation internationale.' },
      { name: 'Basculer entre les comptes', text: 'Utilisez le sélecteur de devise dans la barre latérale. Toutes les factures, dépenses, rapports et analyses sont limités au compte actif.' },
    ],
    relatedGuides: ['business-settings', 'reports-exports', 'creating-invoices'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Pourquoi Invoicemonk sépare-t-il les devises en comptes ?', answer: 'Les rapports financiers sont toujours mono-devise pour la précision. Pas de calculs de taux de change confus dans vos rapports. Chaque compte de devise a ses propres modes de paiement.' },
    ],
    content: `
      <h2>Fonctionnement des comptes de devise</h2>
      <p>Invoicemonk prend en charge plusieurs devises grâce aux comptes de devise. Chaque compte maintient vos finances proprement séparées — pas de mélange de devises.</p>
      <ul>
        <li>Lors de la création d'une entreprise, un compte de devise par défaut est automatiquement créé dans la devise principale de votre entreprise</li>
        <li>Vous pouvez ajouter des comptes supplémentaires (ex. USD, GBP, EUR) pour la facturation internationale</li>
        <li>Basculez entre les comptes de devise via le sélecteur dans la barre latérale</li>
        <li>Toutes les factures, dépenses, rapports et analyses sont limités au compte de devise actif</li>
      </ul>

      <h2>Pourquoi c'est important</h2>
      <ul>
        <li>Les rapports financiers sont toujours mono-devise pour la précision</li>
        <li>Pas de calculs de taux de change confus dans vos rapports</li>
        <li>Chaque compte de devise a ses propres modes de paiement</li>
      </ul>
    `,
  },

  // ─── Guide 13: Notifications & Rappels ───
  {
    slug: 'notifications-reminders',
    title: 'Automatiser les rappels de paiement et gérer les notifications',
    description: 'Configurez des rappels de paiement automatiques et personnalisez vos préférences de notification.',
    icon: 'Bell',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Ouvrir les paramètres de notification', text: 'Allez dans Paramètres → Notifications pour configurer vos préférences de rappel.' },
      { name: 'Activer les rappels de paiement', text: 'Activez les rappels de paiement et sélectionnez quand les envoyer (1, 3, 7 ou 14 jours avant l\'échéance).' },
      { name: 'Activer les rappels de retard', text: 'Activez les rappels de retard pour les relances après la date d\'échéance (1, 7, 14 ou 30 jours après).' },
      { name: 'Personnaliser et enregistrer', text: 'Ajoutez optionnellement un message personnalisé aux e-mails de rappel et cliquez sur Enregistrer les paramètres de notification.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Puis-je personnaliser le message de rappel ?', answer: 'Oui. Vous pouvez ajouter un message personnalisé qui sera inclus dans vos e-mails de rappel de paiement. Cela vous permet de maintenir un ton professionnel et personnalisé avec vos clients.' },
      { question: 'Quelles autres notifications sont disponibles ?', answer: 'En plus des rappels de paiement, vous pouvez activer les notifications pour Facture émise (confirmation), Paiement reçu et Alertes de retard.' },
    ],
    content: `
      <h2>Configurer les rappels de paiement</h2>
      <p>Invoicemonk peut automatiquement rappeler à vos clients les paiements à venir et en retard, vous n'avez donc pas à les relancer manuellement.</p>
      <ul>
        <li>Allez dans <strong>Paramètres → Notifications</strong></li>
        <li>Activez les <strong>Rappels de paiement</strong></li>
        <li>Sélectionnez quand envoyer les rappels avant l'échéance (1, 3, 7 ou 14 jours avant)</li>
        <li>Activez les <strong>Rappels de retard</strong> pour les relances après la date d'échéance (1, 7, 14 ou 30 jours après)</li>
        <li>Ajoutez optionnellement un message personnalisé à vos e-mails de rappel</li>
        <li>Cliquez sur <strong>Enregistrer les paramètres de notification</strong></li>
      </ul>

      <h2>Autres options de notification</h2>
      <ul>
        <li><strong>Facture émise</strong> — Recevez une confirmation lorsque vous émettez une facture</li>
        <li><strong>Paiement reçu</strong> — Soyez notifié lorsqu'un paiement est enregistré</li>
        <li><strong>Alertes de retard</strong> — Recevez des alertes sur les factures en retard</li>
      </ul>
    `,
  },

  // ─── Guide 14: Paramètres de l'entreprise ───
  {
    slug: 'business-settings',
    title: 'Configurer votre entreprise pour la conformité',
    description: 'Complétez votre profil d\'entreprise pour garantir que toutes les factures respectent les exigences réglementaires locales.',
    icon: 'Settings',
    category: 'administration',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Vérifier les paramètres clés', text: 'Assurez-vous que le nom d\'entreprise, la raison sociale, le numéro fiscal, l\'inscription TVA, le logo, l\'adresse et les coordonnées sont complets.' },
      { name: 'Vérifier la complétion du profil', text: 'Visez 100 % de complétion. Invoicemonk met en évidence les champs manquants pour que vous sachiez exactement quoi remplir.' },
      { name: 'Configurer les modes de paiement', text: 'Ajoutez des comptes bancaires et des coordonnées mobile money. Définissez un mode de paiement par défaut pour les nouvelles factures.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'multi-currency'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Que se passe-t-il si mon profil est incomplet ?', answer: 'Vos factures pourraient ne pas inclure tous les champs de conformité requis. Invoicemonk affiche un pourcentage de complétion et met en évidence les informations manquantes pour que vous puissiez les corriger rapidement.' },
      { question: 'Puis-je avoir plusieurs modes de paiement ?', answer: 'Oui. Ajoutez autant de comptes bancaires ou coordonnées mobile money que nécessaire. Définissez-en un par défaut qui apparaîtra sur toutes les nouvelles factures. Les modes de paiement sont liés aux comptes de devise.' },
    ],
    content: `
      <h2>Paramètres clés</h2>
      <p>Votre profil d'entreprise est le fondement de la facturation conforme. Complétez-le entièrement pour garantir que toutes vos factures respectent les réglementations locales.</p>
      <ul>
        <li><strong>Nom d'entreprise & Raison sociale</strong> — Doivent correspondre à votre enregistrement officiel</li>
        <li><strong>Numéro d'identification fiscale</strong> — Votre numéro fiscal ou équivalent</li>
        <li><strong>Inscription TVA</strong> — Activez si assujetti à la TVA et entrez votre numéro de TVA</li>
        <li><strong>Logo d'entreprise</strong> — Apparaît sur toutes les factures et reçus</li>
        <li><strong>Adresse</strong> — Adresse complète pour l'en-tête des factures</li>
        <li><strong>Coordonnées</strong> — E-mail et téléphone affichés sur les factures</li>
        <li><strong>Devise par défaut</strong> — Définissez votre devise d'exploitation principale</li>
      </ul>

      <h2>Complétion du profil</h2>
      <ul>
        <li>Invoicemonk affiche un pourcentage de complétion pour votre profil d'entreprise</li>
        <li>Visez 100 % pour une conformité complète</li>
        <li>Les champs manquants sont mis en évidence pour que vous sachiez exactement quoi remplir</li>
      </ul>

      <h2>Modes de paiement</h2>
      <ul>
        <li>Ajoutez des comptes bancaires, coordonnées mobile money ou autres modes de paiement</li>
        <li>Définissez un mode par défaut qui apparaît sur toutes les nouvelles factures</li>
        <li>Les modes de paiement sont liés aux comptes de devise</li>
      </ul>
    `,
  },

  // ─── Guide 15: Journaux d'audit ───
  {
    slug: 'audit-logs',
    title: 'Journal d\'audit complet pour chaque action',
    description: 'Consultez le journal d\'audit immuable qui enregistre chaque action pour la conformité et l\'audit interne.',
    icon: 'ScrollText',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Accéder aux journaux d\'audit', text: 'Cliquez sur « Journaux d\'audit » dans la barre latérale pour accéder à l\'historique complet des activités.' },
      { name: 'Rechercher et filtrer', text: 'Recherchez par type d\'action, utilisateur ou description. Filtrez par catégorie d\'action pour affiner les résultats.' },
      { name: 'Examiner les entrées', text: 'Chaque entrée montre qui a effectué l\'action, quand elle a eu lieu et exactement ce qui a changé.' },
    ],
    relatedGuides: ['invoice-verification', 'creating-invoices', 'team-management'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quelles actions sont enregistrées ?', answer: 'Tout : création de factures, émission, envoi, consultation, annulation, enregistrement de paiements, modifications du profil d\'entreprise, ajouts de membres d\'équipe et changements de rôles, et modifications des paramètres.' },
      { question: 'Les journaux d\'audit peuvent-ils être modifiés ?', answer: 'Non. Les journaux d\'audit sont immuables par conception. Une fois qu\'une action est enregistrée, elle ne peut pas être modifiée ou supprimée. Cela garantit une intégrité complète pour les revues de conformité.' },
    ],
    content: `
      <h2>Ce qui est enregistré</h2>
      <p>Chaque action dans Invoicemonk est enregistrée dans un journal d'audit immuable. C'est inestimable pour les revues de conformité et l'audit interne.</p>
      <ul>
        <li>Facture créée, émise, envoyée, consultée, annulée</li>
        <li>Paiements enregistrés</li>
        <li>Modifications du profil d'entreprise</li>
        <li>Ajouts de membres d'équipe et changements de rôles</li>
        <li>Modifications des paramètres</li>
      </ul>

      <h2>Utiliser les journaux d'audit</h2>
      <ul>
        <li>Naviguez vers <strong>Journaux d'audit</strong> depuis la barre latérale</li>
        <li>Recherchez par type d'action, utilisateur ou description</li>
        <li>Filtrez par catégorie d'action</li>
        <li>Chaque entrée montre qui a effectué l'action, quand et ce qui a changé</li>
      </ul>
    `,
  },

  // ─── Guide 16: Support ───
  {
    slug: 'support',
    title: 'Obtenir de l\'aide quand vous en avez besoin',
    description: 'Soumettez des tickets de support et contactez l\'équipe Invoicemonk directement depuis votre tableau de bord.',
    icon: 'HelpCircle',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Accéder au support', text: 'Cliquez sur « Contacter le support » dans la barre latérale pour accéder au système de tickets.' },
      { name: 'Soumettre un ticket', text: 'Choisissez une catégorie (Facturation, Technique, Demande de fonctionnalité, etc.), décrivez votre problème et soumettez.' },
      { name: 'Suivre votre ticket', text: 'Consultez et suivez le statut du ticket depuis la page Support de votre tableau de bord.' },
    ],
    relatedGuides: ['getting-started', 'business-settings'],
    targetFeature: '/contact',
    content: `
      <h2>Soumettre un ticket de support</h2>
      <p>Invoicemonk fournit un système de tickets de support intégré pour que vous puissiez contacter notre équipe directement depuis votre tableau de bord.</p>
      <ul>
        <li>Naviguez vers <strong>Contacter le support</strong> depuis la barre latérale</li>
        <li>Choisissez une catégorie (Facturation, Technique, Demande de fonctionnalité, etc.)</li>
        <li>Décrivez votre problème en détail</li>
        <li>Soumettez et suivez le statut du ticket depuis la page Support</li>
      </ul>

      <p>Vous pouvez aussi nous contacter via notre <a href="__LANG__/contact">page de contact</a> ou via le widget de chat en direct sur notre site web.</p>
    `,
  },
];

registerHelpGuides('fr', helpGuidesFR);
