import type { LegalPageContent } from './types';

export const privacyFR: LegalPageContent = {
  seoTitle: 'Politique de Confidentialité | Invoicemonk',
  seoDescription: 'Découvrez comment Invoicemonk protège vos données et respecte votre vie privée. Conforme au RGPD, CCPA, LGPD et NDPR.',
  title: 'Politique de Confidentialité',
  lastUpdated: 'Dernière mise à jour : Janvier 2025',
  tocTitle: 'Sommaire',
  sections: [
    {
      id: 'introduction',
      tocLabel: 'Introduction & Responsable du traitement',
      title: '1. Introduction & Responsable du traitement',
      html: `
<p class="mb-4">Invoicemonk (« nous », « notre » ou « nos ») s'engage à protéger votre vie privée et à assurer la sécurité de vos données personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre plateforme et nos services.</p>
<p class="mb-4"><strong>Responsable du traitement :</strong> Aux fins du Règlement Général sur la Protection des Données (RGPD) et des autres lois applicables en matière de protection des données, Invoicemonk est le responsable du traitement de vos données personnelles.</p>
<div class="bg-muted/30 rounded-lg p-4 mb-6">
  <p class="mb-2"><strong>Délégué à la Protection des Données (DPO)</strong></p>
  <p class="mb-1">Email : <a href="mailto:dpo@invoicemonk.com" class="text-primary hover:underline">dpo@invoicemonk.com</a></p>
  <p>Pour toute question relative à la confidentialité, vous pouvez contacter notre DPO à tout moment.</p>
</div>
<p class="mb-6">Cette politique s'applique à tous les utilisateurs des services Invoicemonk dans le monde entier, avec des dispositions spécifiques pour les utilisateurs de l'Union européenne/Espace économique européen (UE/EEE), du Royaume-Uni, de Californie (États-Unis), du Brésil, du Nigeria, d'Australie et du Canada.</p>`,
    },
    {
      id: 'information-collected',
      tocLabel: 'Informations collectées',
      title: '2. Informations que nous collectons',
      html: `
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.1 Informations que vous fournissez directement</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Informations de compte :</strong> Nom, adresse email, mot de passe, numéro de téléphone</li>
  <li><strong>Informations commerciales :</strong> Nom de l'entreprise, adresse professionnelle, numéros d'identification fiscale (NIF, TVA, GST), détails d'enregistrement commercial</li>
  <li><strong>Données financières :</strong> Détails des factures, relevés de dépenses, informations de paiement, coordonnées bancaires pour les versements</li>
  <li><strong>Données clients :</strong> Informations sur vos clients que vous stockez dans notre système</li>
  <li><strong>Communications :</strong> Messages que vous nous envoyez, tickets de support, commentaires</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.2 Informations collectées automatiquement</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Informations sur l'appareil :</strong> Adresse IP, type de navigateur, système d'exploitation, identifiants d'appareil</li>
  <li><strong>Données d'utilisation :</strong> Pages visitées, fonctionnalités utilisées, temps passé sur la plateforme, schémas de clics</li>
  <li><strong>Données de journal :</strong> Heures d'accès, journaux d'erreurs, URLs de référence</li>
  <li><strong>Cookies et technologies similaires :</strong> Consultez notre <a href="__LANG__/cookie-policy" class="text-primary hover:underline">Politique de Cookies</a> pour plus de détails</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">2.3 Informations provenant de tiers</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li><strong>Processeurs de paiement :</strong> Confirmations de transaction de Stripe, Paystack et autres fournisseurs de paiement</li>
  <li><strong>Fournisseurs d'authentification :</strong> Si vous vous connectez via Google ou d'autres fournisseurs OAuth</li>
  <li><strong>Partenaires commerciaux :</strong> Informations provenant d'intégrations que vous autorisez</li>
</ul>`,
    },
    {
      id: 'legal-basis',
      tocLabel: 'Base légale du traitement',
      title: '3. Base légale du traitement (Article 6 du RGPD)',
      html: `
<p class="mb-4">Nous ne traitons vos données personnelles que lorsque nous disposons d'une base légale valide pour le faire. Les bases légales sur lesquelles nous nous appuyons comprennent :</p>
<div class="space-y-4 mb-6">
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Exécution du contrat (Art. 6(1)(b))</h4>
    <p>Traitement nécessaire pour vous fournir nos services, notamment la création de factures, la gestion des dépenses, le traitement des paiements et la maintenance de votre compte.</p>
  </div>
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Intérêts légitimes (Art. 6(1)(f))</h4>
    <p>Traitement pour nos intérêts commerciaux légitimes, tels que l'amélioration de nos services, l'analyse, la prévention de la fraude et la sécurité, lorsque ces intérêts ne sont pas supplantés par vos droits et libertés.</p>
  </div>
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Obligation légale (Art. 6(1)(c))</h4>
    <p>Traitement requis pour se conformer aux lois applicables, y compris les réglementations fiscales, les exigences comptables et la réponse aux demandes légales.</p>
  </div>
  <div class="bg-muted/30 rounded-lg p-4">
    <h4 class="font-semibold text-foreground mb-2">Consentement (Art. 6(1)(a))</h4>
    <p>Traitement basé sur votre consentement explicite, comme les communications marketing. Vous pouvez retirer votre consentement à tout moment sans affecter la licéité du traitement basé sur le consentement avant son retrait.</p>
  </div>
</div>`,
    },
    {
      id: 'how-we-use',
      tocLabel: 'Comment nous utilisons vos informations',
      title: '4. Comment nous utilisons vos informations',
      html: `
<p class="mb-4">Nous utilisons vos données personnelles aux fins suivantes :</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.1 Fourniture de services</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Création et gestion de votre compte</li>
  <li>Génération de factures, devis et reçus</li>
  <li>Traitement des paiements et remboursements</li>
  <li>Gestion du suivi des dépenses et des rapports</li>
  <li>Fourniture du support client</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.2 Amélioration des services</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Analyse des schémas d'utilisation pour améliorer les fonctionnalités</li>
  <li>Conduite de recherche et développement</li>
  <li>Test de nouvelles fonctionnalités</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.3 Communications</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Envoi d'emails transactionnels (factures, reçus, mises à jour de compte)</li>
  <li>Fourniture d'avis techniques et d'alertes de sécurité</li>
  <li>Envoi de communications marketing (avec votre consentement)</li>
  <li>Réponse aux demandes et demandes de support</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">4.4 Juridique et conformité</h3>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Conformité aux réglementations fiscales et comptables</li>
  <li>Prévention de la fraude et des accès non autorisés</li>
  <li>Application de nos conditions d'utilisation</li>
  <li>Réponse aux demandes légales et ordonnances judiciaires</li>
</ul>`,
    },
    {
      id: 'cookies',
      tocLabel: 'Cookies et technologies de suivi',
      title: '5. Cookies et technologies de suivi',
      html: `
<p class="mb-4">Nous utilisons des cookies et des technologies de suivi similaires pour améliorer votre expérience, analyser l'utilisation et fournir du contenu personnalisé. Nos cookies se répartissent dans les catégories suivantes :</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Cookies essentiels :</strong> Nécessaires au bon fonctionnement de la plateforme</li>
  <li><strong>Cookies de performance :</strong> Nous aident à comprendre comment vous utilisez nos services</li>
  <li><strong>Cookies de fonctionnalité :</strong> Mémorisent vos préférences et paramètres</li>
</ul>
<p class="mb-6">Pour des informations détaillées sur les cookies que nous utilisons et comment gérer vos préférences, veuillez consulter notre <a href="__LANG__/cookie-policy" class="text-primary hover:underline">Politique de Cookies</a>.</p>`,
    },
    {
      id: 'data-sharing',
      tocLabel: 'Partage de données et tiers',
      title: '6. Partage de données et tiers',
      html: `
<p class="mb-4">Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec les catégories de destinataires suivantes :</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.1 Prestataires de services</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Processeurs de paiement :</strong> Stripe, Paystack (pour le traitement des paiements)</li>
  <li><strong>Infrastructure cloud :</strong> Fournisseurs d'hébergement cloud sécurisés</li>
  <li><strong>Services de messagerie :</strong> Livraison d'emails transactionnels</li>
  <li><strong>Analytique :</strong> Analyse d'utilisation (anonymisée lorsque possible)</li>
</ul>
<p class="mb-4">Tous les prestataires de services sont contractuellement tenus de protéger vos données et ne peuvent les utiliser que pour les fins spécifiques que nous autorisons.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.2 Exigences légales</h3>
<p class="mb-4">Nous pouvons divulguer vos informations lorsque la loi, une ordonnance judiciaire ou une demande gouvernementale l'exige, ou lorsque cela est nécessaire pour protéger nos droits, notre sécurité ou nos biens.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">6.3 Transferts d'entreprise</h3>
<p class="mb-6">En cas de fusion, acquisition ou vente d'actifs, vos données peuvent être transférées dans le cadre de cette transaction. Nous vous informerons de tout changement de ce type.</p>`,
    },
    {
      id: 'international-transfers',
      tocLabel: 'Transferts internationaux de données',
      title: '7. Transferts internationaux de données',
      html: `
<p class="mb-4">Invoicemonk opère à l'échelle mondiale, et vos données peuvent être transférées et traitées dans des pays situés en dehors de votre pays de résidence, y compris des pays qui peuvent ne pas avoir les mêmes lois sur la protection des données que votre juridiction.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">7.1 Mécanismes de transfert</h3>
<p class="mb-4">Lors du transfert de données depuis l'UE/EEE ou le Royaume-Uni vers des pays sans protection adéquate des données, nous mettons en œuvre des garanties appropriées, notamment :</p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Clauses contractuelles types (CCT) :</strong> Conditions contractuelles approuvées par l'UE</li>
  <li><strong>Décisions d'adéquation :</strong> Transferts vers des pays jugés adéquats par la Commission européenne</li>
  <li><strong>Règles d'entreprise contraignantes :</strong> Le cas échéant</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">7.2 Emplacements de stockage des données</h3>
<p class="mb-6">Vos données sont principalement stockées dans des centres de données sécurisés situés aux États-Unis et dans l'Union européenne. Nous veillons à ce que tous les centres de données respectent les normes de sécurité de l'industrie.</p>`,
    },
    {
      id: 'data-retention',
      tocLabel: 'Conservation des données',
      title: '8. Conservation des données',
      html: `
<p class="mb-4">Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées, notamment :</p>
<div class="overflow-x-auto mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
  <table class="min-w-full border border-border rounded-lg text-sm">
    <thead class="bg-muted/50">
      <tr>
        <th class="px-4 py-3 text-left text-sm font-semibold text-foreground">Type de données</th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-foreground">Période de conservation</th>
        <th class="px-4 py-3 text-left text-sm font-semibold text-foreground">Raison</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border">
      <tr><td class="px-4 py-3 text-sm">Informations de compte</td><td class="px-4 py-3 text-sm">Durée du compte + 30 jours</td><td class="px-4 py-3 text-sm">Fourniture de service</td></tr>
      <tr><td class="px-4 py-3 text-sm">Documents financiers</td><td class="px-4 py-3 text-sm">7 ans après création</td><td class="px-4 py-3 text-sm">Conformité fiscale/légale</td></tr>
      <tr><td class="px-4 py-3 text-sm">Journaux d'utilisation</td><td class="px-4 py-3 text-sm">12 mois</td><td class="px-4 py-3 text-sm">Sécurité et analytique</td></tr>
      <tr><td class="px-4 py-3 text-sm">Communications support</td><td class="px-4 py-3 text-sm">3 ans</td><td class="px-4 py-3 text-sm">Assurance qualité</td></tr>
      <tr><td class="px-4 py-3 text-sm">Préférences marketing</td><td class="px-4 py-3 text-sm">Jusqu'au retrait du consentement</td><td class="px-4 py-3 text-sm">Basé sur le consentement</td></tr>
    </tbody>
  </table>
</div>
<p class="mb-6">Lors de la suppression du compte, nous supprimerons ou anonymiserons vos données personnelles dans les 30 jours, sauf si la conservation est requise par la loi.</p>`,
    },
    {
      id: 'your-rights',
      tocLabel: 'Vos droits en matière de confidentialité',
      title: '9. Vos droits en matière de confidentialité',
      html: `
<p class="mb-4">Selon votre localisation, vous pouvez avoir les droits suivants concernant vos données personnelles :</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.1 Droits pour les résidents de l'UE/EEE et du Royaume-Uni (RGPD)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Droit d'accès (Art. 15) :</strong> Demander une copie de vos données personnelles</li>
  <li><strong>Droit de rectification (Art. 16) :</strong> Corriger les données personnelles inexactes</li>
  <li><strong>Droit à l'effacement (Art. 17) :</strong> Demander la suppression de vos données personnelles (« droit à l'oubli »)</li>
  <li><strong>Droit à la limitation du traitement (Art. 18) :</strong> Limiter la façon dont nous utilisons vos données</li>
  <li><strong>Droit à la portabilité des données (Art. 20) :</strong> Recevoir vos données dans un format structuré et lisible par machine</li>
  <li><strong>Droit d'opposition (Art. 21) :</strong> S'opposer au traitement basé sur les intérêts légitimes</li>
  <li><strong>Droits relatifs à la prise de décision automatisée (Art. 22) :</strong> Ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé</li>
</ul>
<p class="mb-4"><strong>Autorité de contrôle :</strong> Vous avez le droit de déposer une plainte auprès de votre autorité locale de protection des données. Pour le Royaume-Uni, il s'agit de l'Information Commissioner's Office (ICO). Pour l'UE, contactez votre autorité nationale de protection des données.</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.2 Droits pour les résidents californiens (CCPA/CPRA)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li><strong>Droit de savoir :</strong> Quelles informations personnelles nous collectons et comment nous les utilisons</li>
  <li><strong>Droit de suppression :</strong> Demander la suppression de vos informations personnelles</li>
  <li><strong>Droit de refus :</strong> Nous ne vendons pas d'informations personnelles</li>
  <li><strong>Droit à la non-discrimination :</strong> Service égal indépendamment des choix de confidentialité</li>
  <li><strong>Droit de correction :</strong> Demander la correction d'informations personnelles inexactes</li>
  <li><strong>Droit de limiter l'utilisation d'informations personnelles sensibles :</strong> Le cas échéant</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.3 Droits pour les résidents brésiliens (LGPD)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Confirmation de l'existence du traitement</li>
  <li>Accès aux données</li>
  <li>Correction des données incomplètes, inexactes ou obsolètes</li>
  <li>Anonymisation, blocage ou suppression des données inutiles</li>
  <li>Portabilité des données</li>
  <li>Suppression des données traitées avec consentement</li>
  <li>Information sur le partage avec des tiers</li>
  <li>Révocation du consentement</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.4 Droits pour les résidents nigérians (NDPR)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Droit à l'information sur le traitement des données</li>
  <li>Droit d'accès aux données personnelles</li>
  <li>Droit de rectification des données inexactes</li>
  <li>Droit de retirer son consentement</li>
  <li>Droit d'opposition au traitement</li>
  <li>Droit à la portabilité des données</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.5 Droits pour les résidents australiens (Privacy Act)</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Droit d'accès aux informations personnelles</li>
  <li>Droit de correction des informations personnelles</li>
  <li>Droit de se plaindre des violations de la vie privée</li>
  <li>Droit de refuser le marketing direct</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">9.6 Exercice de vos droits</h3>
<p class="mb-6">Pour exercer l'un de ces droits, veuillez nous contacter à <a href="mailto:privacy@invoicemonk.com" class="text-primary hover:underline">privacy@invoicemonk.com</a>. Nous répondrons à votre demande dans les 30 jours (ou plus rapidement si la loi applicable l'exige). Nous pouvons avoir besoin de vérifier votre identité avant de traiter votre demande.</p>`,
    },
    {
      id: 'children',
      tocLabel: 'Confidentialité des enfants',
      title: '10. Confidentialité des enfants',
      html: `
<p class="mb-6">Invoicemonk n'est pas destiné aux personnes de moins de 18 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si vous êtes parent ou tuteur et pensez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter immédiatement à <a href="mailto:privacy@invoicemonk.com" class="text-primary hover:underline">privacy@invoicemonk.com</a>, et nous supprimerons ces informations de nos systèmes.</p>`,
    },
    {
      id: 'security',
      tocLabel: 'Sécurité des données',
      title: '11. Sécurité des données',
      html: `
<p class="mb-4">Nous mettons en œuvre des mesures de sécurité complètes pour protéger vos données personnelles :</p>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">11.1 Mesures techniques</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Chiffrement des données en transit (TLS 1.2+) et au repos (AES-256)</li>
  <li>Authentification sécurisée avec hachage de mot de passe (bcrypt)</li>
  <li>Audits de sécurité réguliers et tests de pénétration</li>
  <li>Détection automatisée des menaces et surveillance</li>
  <li>Pare-feu et systèmes de détection d'intrusion</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">11.2 Mesures organisationnelles</h3>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>Formation des employés sur la protection des données</li>
  <li>Contrôles d'accès et principes du moindre privilège</li>
  <li>Procédures de réponse aux incidents</li>
  <li>Révisions et mises à jour régulières des politiques</li>
</ul>
<h3 class="text-heading-sm font-medium text-foreground mt-6 mb-3">11.3 Notification de violation de données</h3>
<p class="mb-6">En cas de violation de données personnelles présentant un risque pour vos droits et libertés, nous notifierons l'autorité de contrôle compétente dans les 72 heures conformément au RGPD. Si la violation est susceptible d'entraîner un risque élevé pour vos droits, nous vous en informerons également directement.</p>`,
    },
    {
      id: 'changes',
      tocLabel: 'Modifications de cette politique',
      title: '12. Modifications de cette politique',
      html: `
<p class="mb-6">Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre pour refléter les changements dans nos pratiques ou les lois applicables. En cas de modifications importantes, nous :</p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Mettrons à jour la date « Dernière mise à jour » en haut de cette politique</li>
  <li>Vous notifierons par email (pour les utilisateurs enregistrés)</li>
  <li>Afficherons un avis visible sur notre plateforme</li>
  <li>Lorsque la loi l'exige, obtiendrons votre consentement aux modifications</li>
</ul>`,
    },
    {
      id: 'contact',
      tocLabel: 'Nous contacter',
      title: '13. Nous contacter',
      html: `
<p class="mb-4">Si vous avez des questions, des préoccupations ou des demandes concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter :</p>
<div class="bg-muted/30 rounded-lg p-6 mb-6 space-y-3">
  <p><strong>Demandes générales de confidentialité :</strong> <a href="mailto:privacy@invoicemonk.com" class="text-primary hover:underline">privacy@invoicemonk.com</a></p>
  <p><strong>Délégué à la Protection des Données :</strong> <a href="mailto:dpo@invoicemonk.com" class="text-primary hover:underline">dpo@invoicemonk.com</a></p>
  <p><strong>Adresse postale :</strong> Département Juridique Invoicemonk, [Adresse à mettre à jour]</p>
</div>
<p class="mb-6">Nous nous engageons à travailler avec vous pour résoudre toute préoccupation en matière de confidentialité. Si vous n'êtes pas satisfait de notre réponse, vous avez le droit de déposer une plainte auprès de votre autorité locale de protection des données.</p>`,
    },
  ],
};
