import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 13a: Estimates & Proposals cluster posts — French translations
 */
const posts: BlogPost[] = [
  {
    slug: 'proposal-vs-estimate-vs-quote-explained',
    title: 'Proposition vs Devis vs Estimation : Quelle est la différence ?',
    excerpt: 'Confus entre propositions, devis et estimations ? Découvrez les différences clés, quand utiliser chaque document et comment ils affectent vos relations clients.',
    category: 'Estimates and Proposals',
    tags: ['propositions', 'devis', 'estimations', 'documents commerciaux', 'gestion clients', 'tarification'],
    author: defaultAuthor, date: '2025-12-01', dateModified: '2026-02-04', readTime: '8 min de lecture',
    featuredImage: '/images/blog/proposal-vs-quote.jpg',
    featuredImageAlt: 'Comparaison entre proposition, devis et estimation',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['proposition vs devis', 'devis vs estimation', 'proposition commerciale', 'devis prix'],
    priority: 'P2',
    content: `
      <p>Propositions, devis et estimations — de nombreux entrepreneurs utilisent ces termes de manière interchangeable, mais ce sont en réalité des documents différents avec des objectifs, des implications juridiques et des cas d'utilisation distincts.</p>
      <p>Utiliser le mauvais document peut mener à des dépassements de périmètre, des litiges sur les prix et des clients perdus. Ce guide clarifie les différences pour que vous envoyiez toujours le bon document.</p>

      <h2>Comparaison rapide</h2>
      <table>
        <thead>
          <tr><th>Caractéristique</th><th>Proposition</th><th>Estimation</th><th>Devis</th></tr>
        </thead>
        <tbody>
          <tr><td>Objectif</td><td>Convaincre et vendre</td><td>Coût approximatif</td><td>Offre à prix fixe</td></tr>
          <tr><td>Prix engageant ?</td><td>Non</td><td>Non</td><td>Généralement oui</td></tr>
          <tr><td>Niveau de détail</td><td>Élevé (stratégie + prix)</td><td>Modéré</td><td>Postes spécifiques</td></tr>
          <tr><td>Périmètre inclus ?</td><td>Périmètre détaillé + approche</td><td>Périmètre bref</td><td>Livrables spécifiques</td></tr>
          <tr><td>Longueur typique</td><td>2–10 pages</td><td>1–2 pages</td><td>1 page</td></tr>
          <tr><td>Durée de validité</td><td>30 jours typique</td><td>30 jours typique</td><td>14–30 jours</td></tr>
        </tbody>
      </table>

      <h2>Qu'est-ce qu'une proposition ?</h2>
      <p>Une proposition est un document complet conçu pour convaincre un client de vous engager. Elle va au-delà du prix et présente votre approche, votre expertise et pourquoi vous êtes le meilleur choix.</p>

      <h2>Qu'est-ce qu'une estimation ?</h2>
      <p>Une estimation donne un coût approximatif pour un projet. Elle n'est pas contraignante et peut changer à mesure que le périmètre se précise.</p>

      <h2>Qu'est-ce qu'un devis ?</h2>
      <p>Un devis est une offre à prix fixe et engageante pour un service défini. Une fois accepté par le client, vous êtes tenu de livrer au prix indiqué.</p>
      <p>Ajoutez toujours une date d'expiration et définissez clairement le périmètre.</p>

      <h2>Différences juridiques</h2>
      <ul>
        <li><strong>Propositions :</strong> Généralement non contraignantes. Ce sont des invitations à négocier.</li>
        <li><strong>Estimations :</strong> Non contraignantes. Elles fixent des attentes mais permettent des ajustements.</li>
        <li><strong>Devis :</strong> Généralement considérés comme contraignants pour la période de validité. En France, un devis signé engage juridiquement les deux parties.</li>
      </ul>

      <h2>Choisir le bon document</h2>
      <ol>
        <li><strong>Le client demande « combien ça coûte environ ? » :</strong> Envoyez une estimation</li>
        <li><strong>Le client demande « quel est le prix exact ? » :</strong> Envoyez un devis</li>
        <li><strong>Le client demande « pouvez-vous m'aider pour ce projet ? » :</strong> Envoyez une proposition</li>
        <li><strong>Appel d'offres :</strong> Toujours une proposition</li>
        <li><strong>Petite tâche définie :</strong> Un devis suffit généralement</li>
      </ol>

      <p>Créez des documents professionnels avec <a href="/__LANG__/estimates">les outils de devis Invoicemonk</a> et convertissez-les en factures en un clic.</p>
    `,
    faq: [
      { question: 'Un devis est-il juridiquement contraignant ?', answer: 'En France, un devis signé par les deux parties a valeur de contrat. Il est donc juridiquement contraignant. Incluez toujours une date d\'expiration et une définition claire du périmètre.' },
      { question: 'Dois-je envoyer une estimation ou un devis à un nouveau client ?', answer: 'Commencez par une estimation si le périmètre n\'est pas encore défini, ou par une proposition si vous devez expliquer votre approche. Passez au devis formel une fois le périmètre convenu.' }
    ]
  },
  {
    slug: 'winning-proposal-templates-by-industry',
    title: 'Modèles de propositions gagnantes par secteur : Personnalisez pour réussir',
    excerpt: 'Obtenez des modèles de propositions spécifiques par secteur pour le conseil, le design, le marketing, l\'IT et plus. Apprenez à adapter vos propositions pour gagner des clients dans n\'importe quel domaine.',
    category: 'Estimates and Proposals',
    tags: ['modèles de propositions', 'propositions commerciales', 'modèles par secteur', 'acquisition clients'],
    author: defaultAuthor, date: '2025-10-28', dateModified: '2026-02-04', readTime: '10 min de lecture',
    featuredImage: '/images/blog/proposal-templates-industry.jpg',
    featuredImageAlt: 'Pile de modèles de propositions professionnelles pour différents secteurs',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['modèle proposition', 'proposition commerciale modèle', 'proposition consulting'],
    priority: 'P2',
    content: `
      <p>La proposition parfaite commence par la compréhension de votre secteur. Ce qui fonctionne en conseil échoue en design web — et inversement. Ce guide offre des modèles éprouvés pour chaque secteur.</p>

      <h2>Pourquoi les propositions spécifiques par secteur fonctionnent mieux</h2>
      <p>Les propositions génériques signalent que vous traitez tous les clients de la même manière. Les propositions spécifiques montrent que vous comprenez les défis uniques du client.</p>

      <h2>Modèle de proposition de conseil</h2>
      <ul>
        <li><strong>Analyse de la situation :</strong> Montrez une compréhension profonde des défis business</li>
        <li><strong>Méthodologie :</strong> Expliquez votre framework de consulting</li>
        <li><strong>Résultats attendus :</strong> Quantifiez le ROI autant que possible</li>
        <li><strong>Études de cas :</strong> Clients similaires avec résultats mesurables</li>
        <li><strong>Biographies d'équipe :</strong> Mettez en avant l'expérience sectorielle</li>
      </ul>

      <h2>Modèle Webdesign / Développement</h2>
      <ul>
        <li><strong>Audit du site :</strong> Analyse de ce qui fonctionne et ce qui ne fonctionne pas</li>
        <li><strong>Direction design :</strong> Moodboards ou références de style</li>
        <li><strong>Spécifications techniques :</strong> Plateforme, fonctionnalités, intégrations</li>
        <li><strong>Plan de contenu :</strong> Qui fournit le contenu et sous quel format</li>
        <li><strong>Plan de lancement :</strong> Tests, migration et support post-lancement</li>
      </ul>

      <h2>Modèle Marketing / Contenu</h2>
      <ul>
        <li><strong>Étude de marché :</strong> Paysage concurrentiel et opportunités</li>
        <li><strong>Aperçu stratégique :</strong> Canaux, messages et audiences cibles</li>
        <li><strong>Calendrier de contenu :</strong> Mois d'exemple de contenu planifié</li>
        <li><strong>KPIs :</strong> Objectifs spécifiques et mesurables</li>
      </ul>

      <h2>Modèle IT / Services techniques</h2>
      <ul>
        <li><strong>Évaluation d'infrastructure :</strong> État actuel</li>
        <li><strong>Solution proposée :</strong> Architecture technique et composants</li>
        <li><strong>Sécurité :</strong> Protection des données et conformité</li>
        <li><strong>Plan de migration :</strong> Transition sans interruption</li>
        <li><strong>SLAs :</strong> Niveaux de service et support</li>
      </ul>

      <p>Créez des propositions professionnelles avec <a href="/__LANG__/estimates">Invoicemonk</a> et convertissez-les en factures en un clic.</p>
    `,
    faq: [
      { question: 'Quelle longueur doit avoir une proposition commerciale ?', answer: 'La plupart des propositions efficaces font 3 à 8 pages. Les projets simples nécessitent 2-3 pages ; les projets complexes peuvent nécessiter 10+ pages.' },
      { question: 'Dois-je utiliser le même modèle pour chaque client ?', answer: 'Non. Bien qu\'un modèle de base fasse gagner du temps, chaque proposition doit être personnalisée pour le client et le secteur spécifiques.' }
    ]
  },
  {
    slug: 'document-types-comparison-business',
    title: 'Comparaison des types de documents commerciaux : Factures, reçus, bons de commande et plus',
    excerpt: 'Comprenez les différences entre factures, reçus, bons de commande, avoirs et autres documents commerciaux. Apprenez quand utiliser chacun.',
    category: 'Estimates and Proposals',
    tags: ['documents commerciaux', 'factures', 'reçus', 'bons de commande', 'avoirs'],
    author: defaultAuthor, date: '2025-09-18', dateModified: '2026-02-04', readTime: '9 min de lecture',
    featuredImage: '/images/blog/document-types-comparison.jpg',
    featuredImageAlt: 'Différents documents commerciaux comparés',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['documents commerciaux comparaison', 'facture vs reçu', 'bon de commande vs facture'],
    priority: 'P2',
    content: `
      <p>Comprendre les différents documents commerciaux est essentiel pour une comptabilité et une conformité correctes. Ce guide explique chaque document et quand l'utiliser.</p>

      <h2>Tableau comparatif</h2>
      <table>
        <thead>
          <tr><th>Document</th><th>Créé par</th><th>Objectif</th><th>Juridiquement contraignant ?</th></tr>
        </thead>
        <tbody>
          <tr><td>Facture</td><td>Vendeur</td><td>Demande de paiement</td><td>Oui</td></tr>
          <tr><td>Reçu</td><td>Vendeur</td><td>Confirmation de paiement</td><td>Preuve de paiement</td></tr>
          <tr><td>Bon de commande</td><td>Acheteur</td><td>Autoriser un achat</td><td>Oui, une fois accepté</td></tr>
          <tr><td>Devis</td><td>Vendeur</td><td>Offre à prix fixe</td><td>Contraignant pour la période de validité</td></tr>
          <tr><td>Estimation</td><td>Vendeur</td><td>Coût approximatif</td><td>Non</td></tr>
          <tr><td>Proposition</td><td>Vendeur</td><td>Vendre solution + prix</td><td>Non</td></tr>
          <tr><td>Facture proforma</td><td>Vendeur</td><td>Estimation pré-livraison</td><td>Non</td></tr>
          <tr><td>Avoir</td><td>Vendeur</td><td>Réduire le montant facturé</td><td>Oui</td></tr>
          <tr><td>Bon de livraison</td><td>Vendeur</td><td>Confirmer la livraison</td><td>Preuve de livraison</td></tr>
        </tbody>
      </table>

      <h2>Factures</h2>
      <p>Une facture est une demande formelle de paiement émise par le vendeur après la livraison de biens ou de services. En France, la facture est obligatoire pour toute transaction entre professionnels.</p>

      <h2>Reçus</h2>
      <p>Un reçu confirme que le paiement a été effectué. Il est émis par le vendeur à l'acheteur comme preuve d'achat.</p>

      <h2>Bons de commande</h2>
      <p>Un bon de commande est créé par l'acheteur pour autoriser un achat auprès du vendeur.</p>

      <h2>Ressources connexes</h2>
      <ul>
        <li><a href="/__LANG__/blog/complete-guide-to-business-invoicing">Guide complet de la facturation</a></li>
        <li><a href="/__LANG__/blog/proposal-vs-estimate-vs-quote-explained">Proposition vs Devis vs Estimation</a></li>
        <li><a href="/__LANG__/blog/credit-notes-and-invoice-corrections">Avoirs et corrections</a></li>
      </ul>
    `,
    faq: [
      { question: 'Quelle est la différence entre une facture et un reçu ?', answer: 'Une facture est une demande de paiement émise avant le paiement. Un reçu est une confirmation après le paiement. Les deux sont importants pour la comptabilité.' },
      { question: 'Ai-je besoin d\'un bon de commande pour chaque transaction ?', answer: 'Pas nécessairement. Les bons de commande sont plus courants dans les achats d\'entreprise et les marchés publics. Les petites entreprises s\'en passent généralement pour les achats courants.' }
    ]
  }
];

registerBlogPosts('fr', posts);
