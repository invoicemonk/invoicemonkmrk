import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const posts: BlogPost[] = [
  {
    slug: 'freelance-contract-templates',
    title: 'Modèles de contrats pour freelances : protégez-vous et vos clients',
    excerpt: 'Obtenez des modèles de contrats essentiels et découvrez les clauses qui protègent votre activité.',
    category: 'Freelancing',
    tags: ['freelance', 'contrats', 'juridique', 'modèles'],
    author: defaultAuthor,
    date: '2026-01-28',
    readTime: '11 min de lecture',
    featuredImage: '/images/blog/freelance-contracts.jpg',
    featuredImageAlt: 'Modèles de contrats freelance',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['contrat freelance', 'modèle de contrat', 'contrat client'],
    priority: 'P2',
    content: `
      <p>Un bon contrat protège à la fois vous et votre client. Il prévient les malentendus, établit des attentes claires et vous donne un recours juridique en cas de problème. Pourtant, beaucoup de freelances travaillent sans contrat — s'exposant à des risques importants.</p>

      <h2>Pourquoi chaque freelance a besoin d'un contrat</h2>
      <ul>
        <li><strong>Dérive du périmètre :</strong> Les clients ajoutent du travail sans paiement supplémentaire</li>
        <li><strong>Litiges de paiement :</strong> Aucune preuve des termes convenus</li>
        <li><strong>Confusion sur la propriété intellectuelle :</strong> Qui possède le travail ?</li>
        <li><strong>Exposition à la responsabilité :</strong> Aucune limite à votre responsabilité</li>
      </ul>

      <h2>Éléments essentiels du contrat</h2>
      <h3>1. Cahier des charges</h3>
      <p>Définissez exactement ce que vous livrerez — et ce qui n'est <em>pas</em> inclus.</p>

      <h3>2. Calendrier et jalons</h3>
      <p>Fixez les dates de début, jalons et conséquences en cas de retard.</p>

      <h3>3. Conditions de paiement</h3>
      <p>Honoraires, calendrier (50 % d'acompte, 50 % à la livraison), délais et pénalités de retard.</p>

      <h3>4. Politique de révision</h3>
      <p>Définissez le nombre de cycles de révision inclus et le coût des révisions supplémentaires.</p>

      <h3>5. Propriété intellectuelle</h3>
      <p>Clause critique : les droits ne sont transférés qu'après paiement intégral.</p>

      <h3>6. Confidentialité</h3>
      <p>Protégez les données sensibles de vos clients.</p>

      <h3>7. Conditions de résiliation</h3>
      <p>Préavis, rémunération du travail effectué et clause de « kill fee ».</p>

      <h2>Signaux d'alarme</h2>
      <ul>
        <li>Révisions illimitées</li>
        <li>Paiement uniquement à la « satisfaction du client »</li>
        <li>Clauses de non-concurrence étendues</li>
        <li>Transfert de droits avant paiement</li>
      </ul>

      <h2>Prochaines étapes</h2>
      <p>Créez un modèle avec tous les éléments essentiels. Plus de conseils dans nos guides sur la <a href="/__LANG__/blog/pricing-your-freelance-services">tarification</a> et la <a href="/__LANG__/blog/freelancer-business-guide">création d'une activité freelance</a>.</p>
    `
  },
  {
    slug: 'pricing-your-freelance-services',
    title: 'Tarification freelance : stratégies pour facturer à votre juste valeur',
    excerpt: 'Apprenez à calculer vos tarifs et à communiquer votre valeur à vos clients en toute confiance.',
    category: 'Freelancing',
    tags: ['freelance', 'tarification', 'tarifs', 'prix basé sur la valeur'],
    author: defaultAuthor,
    date: '2026-01-27',
    readTime: '12 min de lecture',
    featuredImage: '/images/blog/pricing-freelance.jpg',
    featuredImageAlt: 'Stratégies de tarification freelance',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['tarification freelance', 'taux horaire freelance', 'prix basé sur la valeur'],
    priority: 'P2',
    content: `
      <p>La plupart des freelances sous-facturent. Apprendre à bien tarifer est l'une des compétences les plus impactantes pour le succès à long terme.</p>

      <h2>Pourquoi les freelances sous-facturent</h2>
      <ul>
        <li><strong>Syndrome de l'imposteur :</strong> Nous ne croyons pas pleinement à la valeur de notre travail</li>
        <li><strong>Peur du rejet :</strong> Des prix plus bas semblent plus sûrs</li>
        <li><strong>Comparaison au salariat :</strong> Les tarifs freelance doivent être plus élevés (charges sociales et frais généraux à couvrir)</li>
      </ul>

      <h2>Calculer votre taux minimum</h2>
      <p>Additionnez vos coûts annuels (frais professionnels + dépenses personnelles + marge + impôts) et divisez par les heures facturables (typiquement 1 000–1 500/an).</p>

      <h2>Modèles de tarification</h2>
      <ul>
        <li><strong>Taux horaire :</strong> Simple mais limite vos revenus</li>
        <li><strong>Forfait projet :</strong> Récompense l'efficacité</li>
        <li><strong>Basé sur la valeur :</strong> Facturation selon le résultat pour le client</li>
        <li><strong>Abonnement/retainer :</strong> Forfait mensuel pour une disponibilité continue</li>
      </ul>

      <h2>Prochaines étapes</h2>
      <p>Calculez votre taux minimum, recherchez les prix du marché et augmentez vos tarifs dès le prochain client. Plus dans nos guides sur les <a href="/__LANG__/blog/freelance-contract-templates">modèles de contrats</a> et le <a href="/__LANG__/blog/freelance-time-tracking-guide">suivi du temps</a>.</p>
    `
  },
  {
    slug: 'freelance-time-tracking-guide',
    title: 'Suivi du temps pour freelances : facturez correctement et comprenez votre productivité',
    excerpt: 'Suivez votre temps efficacement pour une facturation précise et comprendre où vont vos heures.',
    category: 'Freelancing',
    tags: ['freelance', 'suivi du temps', 'productivité', 'facturation'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '7 min de lecture',
    featuredImage: '/blog/time-tracking.jpg',
    featuredImageAlt: 'Guide de suivi du temps pour freelances',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['suivi du temps', 'temps freelance', 'facturation horaire'],
    priority: 'P2',
    content: `
      <p>Même avec une tarification au projet, le suivi du temps révèle où vont réellement vos heures et si vos prix sont cohérents.</p>

      <h2>Pourquoi suivre son temps</h2>
      <ul>
        <li><strong>Facturation précise :</strong> Les professionnels sans suivi sous-facturent de 10–30 %</li>
        <li><strong>Coûts réels :</strong> Un projet à 5 000 € en 20 h = 250 €/h. En 50 h = 100 €/h</li>
        <li><strong>Meilleures estimations :</strong> Des données passées pour des devis plus précis</li>
      </ul>

      <h2>Comment suivre efficacement</h2>
      <ul>
        <li>Suivez en temps réel — ne reconstruisez pas en fin de journée</li>
        <li>Soyez spécifique : « Design web — maquette homepage » plutôt que « travail client »</li>
        <li>Incluez tout : admin, emails, appels</li>
        <li>Revue hebdomadaire de 15 minutes</li>
      </ul>

      <h2>Prochaines étapes</h2>
      <p>Choisissez un outil et engagez-vous pour un mois. Plus dans nos guides sur la <a href="/__LANG__/blog/pricing-your-freelance-services">tarification</a> et la <a href="/__LANG__/blog/cash-flow-forecasting-for-freelancers">prévision de trésorerie</a>.</p>
    `
  },
  {
    slug: 'cash-flow-forecasting-for-freelancers',
    title: 'Prévision de trésorerie pour freelances : anticipez vos revenus',
    excerpt: 'Techniques simples de prévision de trésorerie pour les freelances afin de prédire les revenus et construire une stabilité financière.',
    category: 'Finance',
    tags: ['trésorerie', 'freelance', 'prévision', 'planification financière'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '10 min de lecture',
    featuredImage: '/blog/cash-flow-forecasting.jpg',
    featuredImageAlt: 'Prévision de trésorerie pour freelances',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/payments',
    semanticKeywords: ['prévision trésorerie', 'revenus freelance', 'planification financière'],
    priority: 'P2',
    content: `
      <p>Les revenus freelance fluctuent, mais les dépenses restent constantes. La prévision de trésorerie consiste à projeter vos revenus et dépenses futurs pour anticiper les difficultés.</p>

      <h2>Méthode simple de prévision</h2>
      <ol>
        <li>Listez les revenus attendus : factures en attente, projets confirmés, retainers</li>
        <li>Listez toutes les dépenses : fixes, variables, trimestrielles</li>
        <li>Détaillez semaine par semaine : solde initial → revenus → dépenses → solde final</li>
        <li>Identifiez les zones de danger</li>
      </ol>

      <h2>Constituer une réserve de trésorerie</h2>
      <ul>
        <li><strong>Minimum :</strong> 3 mois de charges</li>
        <li><strong>Confortable :</strong> 6 mois</li>
        <li><strong>Sécurisé :</strong> 12 mois pour les secteurs volatils</li>
      </ul>

      <h2>Stratégies pour lisser la trésorerie</h2>
      <ul>
        <li>Exiger des acomptes (30–50 % à la commande)</li>
        <li>Facturer immédiatement après la prestation</li>
        <li>Raccourcir les délais de paiement</li>
        <li>Proposer des abonnements/retainers</li>
      </ul>

      <h2>Prochaines étapes</h2>
      <p>Ouvrez un tableur et projetez vos 3 prochains mois. Plus dans notre <a href="/__LANG__/blog/freelancer-business-guide">guide complet du freelance</a>.</p>
    `
  },
  {
    slug: 'profit-margins-how-to-calculate-and-improve',
    title: 'Marges bénéficiaires : calculer, analyser et améliorer',
    excerpt: 'Apprenez à calculer les marges brutes et nettes, à les comparer à votre secteur et à améliorer la rentabilité.',
    category: 'Small Business',
    tags: ['profit', 'marges', 'rentabilité', 'tarification'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '9 min de lecture',
    featuredImage: '/images/blog/profit-margins.jpg',
    featuredImageAlt: 'Calculer et améliorer les marges bénéficiaires',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['marge bénéficiaire', 'marge brute', 'marge nette', 'rentabilité'],
    priority: 'P2',
    content: `
      <p>Le chiffre d'affaires est vanité, le profit est raison. Comprendre vos marges bénéficiaires révèle si votre modèle économique est durable.</p>

      <h2>Types de marges</h2>
      <h3>Marge brute</h3>
      <p><strong>Formule :</strong> (CA − Coût des ventes) ÷ CA × 100</p>

      <h3>Marge opérationnelle</h3>
      <p><strong>Formule :</strong> Résultat d'exploitation ÷ CA × 100</p>

      <h3>Marge nette</h3>
      <p><strong>Formule :</strong> Résultat net ÷ CA × 100</p>

      <h2>Marges saines par secteur</h2>
      <ul>
        <li><strong>Logiciel/SaaS :</strong> 70–85 % brute, 15–25 % nette</li>
        <li><strong>Services professionnels :</strong> 50–70 % brute, 10–20 % nette</li>
        <li><strong>Commerce de détail :</strong> 25–50 % brute, 2–10 % nette</li>
      </ul>

      <h2>Stratégies d'amélioration</h2>
      <ul>
        <li>Augmenter les prix progressivement</li>
        <li>Réduire les coûts de production</li>
        <li>Optimiser les charges d'exploitation</li>
        <li>Se concentrer sur les produits/services à forte marge</li>
      </ul>

      <h2>Prochaines étapes</h2>
      <p>Calculez vos marges actuelles avec un <a href="/__LANG__/accounting">logiciel de comptabilité</a>. Plus dans notre guide pour <a href="/__LANG__/blog/how-to-create-a-budget-for-your-small-business">créer un budget</a>.</p>
    `
  },
  {
    slug: 'cash-vs-accrual-accounting-explained',
    title: "Comptabilité de caisse vs comptabilité d\u2019engagement : quelle méthode choisir ?",
    excerpt: "Comprenez les différences clés entre la comptabilité de caisse et la comptabilité d\u2019engagement.",
    category: 'Small Business',
    tags: ['comptabilité', 'comptabilité de caisse', "comptabilité d\u2019engagement", 'tenue de livres'],
    author: defaultAuthor,
    date: '2026-01-27',
    readTime: '8 min de lecture',
    featuredImage: '/blog/cash-vs-accrual.jpg',
    featuredImageAlt: 'Comptabilité de caisse vs engagement',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['comptabilité de caisse', 'comptabilité d'engagement', 'tenue de livres'],
    priority: 'P2',
    content: `
      <p>Le choix de votre méthode comptable impacte la façon dont vous enregistrez vos revenus, payez vos impôts et évaluez votre santé financière. En France, les micro-entreprises utilisent la comptabilité de caisse, tandis que les sociétés commerciales sont tenues à la comptabilité d'engagement.</p>

      <h2>Comptabilité de caisse</h2>
      <p>Les revenus sont enregistrés à l'encaissement, les dépenses au décaissement.</p>
      <h3>Avantages</h3>
      <ul>
        <li>Plus simple à gérer</li>
        <li>Reflète la trésorerie réelle</li>
        <li>TVA sur les encaissements possible pour certains statuts</li>
      </ul>

      <h2>Comptabilité d'engagement</h2>
      <p>Les revenus sont enregistrés à la facturation, les dépenses à leur naissance — indépendamment du paiement.</p>
      <h3>Avantages</h3>
      <ul>
        <li>Image plus fidèle de la situation économique</li>
        <li>Meilleure planification à long terme</li>
        <li>Conforme aux normes PCG et IFRS</li>
      </ul>

      <h2>Quelle méthode choisir ?</h2>
      <p>En France, les micro-entrepreneurs bénéficient de la comptabilité simplifiée. Les sociétés (SARL, SAS) doivent tenir une comptabilité d'engagement complète. Le choix dépend de votre statut juridique et de votre chiffre d'affaires.</p>

      <h2>Prochaines étapes</h2>
      <p>Vérifiez vos obligations comptables selon votre statut. Plus dans notre <a href="/__LANG__/blog/small-business-accounting-guide">guide comptabilité</a>.</p>
    `
  },
  {
    slug: 'tax-software-integration-guide',
    title: 'Guide d'intégration logiciel fiscal : optimisez votre workflow fiscal',
    excerpt: 'Comment connecter vos logiciels de facturation et comptabilité à vos outils fiscaux. Réduisez les erreurs et gagnez du temps.',
    category: 'Tax and Compliance',
    tags: ['logiciel fiscal', 'intégration', 'automatisation fiscale', 'comptabilité'],
    author: defaultAuthor,
    date: '2025-07-12',
    dateModified: '2026-02-04',
    readTime: '8 min de lecture',
    featuredImage: '/blog/tax-software-integration.jpg',
    featuredImageAlt: 'Tableau de bord intégration logiciel fiscal',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['intégration logiciel fiscal', 'automatisation comptable', 'workflow fiscal'],
    priority: 'P2',
    content: `
      <p>Transférer manuellement des données entre votre logiciel de facturation, votre comptabilité et vos outils fiscaux est fastidieux et source d'erreurs. Les intégrations modernes automatisent ces flux.</p>

      <h2>Points d'intégration clés</h2>
      <h3>Facturation → Comptabilité</h3>
      <p>Les factures <a href="/__LANG__/invoicing">Invoicemonk</a> alimentent automatiquement votre comptabilité.</p>

      <h3>Dépenses → Comptabilité</h3>
      <p>Justificatifs auto-catégorisés, flux bancaires importés automatiquement.</p>

      <h3>Comptabilité → Déclarations fiscales</h3>
      <p>Synthèses de revenus mappées sur les formulaires fiscaux, amortissements calculés, déclarations de TVA pré-remplies.</p>

      <h2>Avantages</h2>
      <ul>
        <li>5–10 heures par mois de saisie manuelle économisées</li>
        <li>Réduction des erreurs dans les données financières</li>
        <li>Visibilité fiscale en temps réel</li>
        <li>Contrôles fiscaux facilités</li>
      </ul>

      <h2>Ressources complémentaires</h2>
      <ul>
        <li><a href="/__LANG__/blog/small-business-tax-compliance-guide">Guide complet de conformité fiscale</a></li>
        <li><a href="/__LANG__/blog/quarterly-tax-payment-guide">Guide des acomptes trimestriels</a></li>
      </ul>
    `
  }
];

registerBlogPosts('fr', posts);
