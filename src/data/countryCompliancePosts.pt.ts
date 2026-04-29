/**
 * Portuguese (BR) translations for country-specific compliance posts.
 */
import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const countriesWithImages = ['ng', 'us', 'uk', 'ca', 'au', 'gh', 'ke', 'za'];

interface CC {
  code: string; name: string; namePt: string; demonym: string; demonymPt: string;
  authority: string; authorityFull: string; taxType: string; taxRate: string;
  currency: string; currencyCode: string; taxId: string; taxIdFull: string;
  vatThreshold: string; filingFrequencyPt: string;
  recordKeepingYears: string; paymentMethodsPt: string; penaltiesPt: string;
  einvoicingContextPt: string; registrationUrl: string;
}

const countries: CC[] = [
  { code: 'ng', name: 'Nigeria', namePt: 'Nigéria', demonym: 'Nigerian', demonymPt: 'nigeriano',
    authority: 'FIRS', authorityFull: 'Federal Inland Revenue Service', taxType: 'IVA', taxRate: '7,5 %',
    currency: '₦', currencyCode: 'NGN', taxId: 'TIN', taxIdFull: 'Tax Identification Number',
    vatThreshold: '₦25 milhões de faturamento anual', filingFrequencyPt: 'mensalmente, até o 21º dia do mês seguinte',
    recordKeepingYears: '6', paymentMethodsPt: 'Paystack, transferência bancária, USSD e cartões de débito',
    penaltiesPt: 'Não registro: ₦10.000 no primeiro mês + ₦5.000/mês. Atraso na declaração: ₦5.000/mês.',
    einvoicingContextPt: 'A Nigéria está avançando para a administração fiscal digital via plataforma FIRS TaxPro-Max.',
    registrationUrl: 'https://firs.gov.ng' },
  { code: 'us', name: 'United States', namePt: 'Estados Unidos', demonym: 'American', demonymPt: 'americano',
    authority: 'IRS', authorityFull: 'Internal Revenue Service', taxType: 'Sales Tax', taxRate: 'varia por estado (0 %–10,25 %)',
    currency: '$', currencyCode: 'USD', taxId: 'EIN', taxIdFull: 'Employer Identification Number',
    vatThreshold: 'varia por estado — Economic Nexus ~$100.000', filingFrequencyPt: 'trimestral ou anualmente conforme o estado',
    recordKeepingYears: '7', paymentMethodsPt: 'transferência ACH, cartões, cheques, PayPal e Stripe',
    penaltiesPt: 'Não declaração: 5 % do imposto não pago/mês (máx. 25 %). Não pagamento: 0,5 %/mês.',
    einvoicingContextPt: 'Os EUA não possuem obrigatoriedade federal de fatura eletrônica B2B.',
    registrationUrl: 'https://www.irs.gov' },
  { code: 'uk', name: 'United Kingdom', namePt: 'Reino Unido', demonym: 'British', demonymPt: 'britânico',
    authority: 'HMRC', authorityFull: 'HM Revenue & Customs', taxType: 'IVA', taxRate: '20 % (padrão), 5 % (reduzido), 0 %',
    currency: '£', currencyCode: 'GBP', taxId: 'UTR', taxIdFull: 'Unique Taxpayer Reference',
    vatThreshold: '£90.000 de faturamento tributável anual', filingFrequencyPt: 'trimestralmente via Making Tax Digital (MTD)',
    recordKeepingYears: '6', paymentMethodsPt: 'transferência (BACS/Faster Payments), cartões, PayPal e GoCardless',
    penaltiesPt: 'Registro tardio: até 100 % do IVA devido. Declaração tardia: £200 de multa básica.',
    einvoicingContextPt: 'O Reino Unido suporta faturação eletrônica Peppol e implementou o Making Tax Digital (MTD).',
    registrationUrl: 'https://www.gov.uk/government/organisations/hm-revenue-customs' },
  { code: 'ca', name: 'Canada', namePt: 'Canadá', demonym: 'Canadian', demonymPt: 'canadense',
    authority: 'CRA', authorityFull: 'Canada Revenue Agency', taxType: 'GST/HST', taxRate: '5 % GST (federal) + 0–10 % provincial',
    currency: 'C$', currencyCode: 'CAD', taxId: 'BN', taxIdFull: 'Business Number',
    vatThreshold: 'C$30.000 em quatro trimestres consecutivos', filingFrequencyPt: 'trimestral ou anualmente conforme o faturamento',
    recordKeepingYears: '6', paymentMethodsPt: 'Interac e-Transfer, cartões, EFT e PayPal',
    penaltiesPt: 'Atraso: 1 % do saldo + 0,25 %/mês (máx. 12 meses).',
    einvoicingContextPt: 'O Canadá está explorando a adoção do Peppol via Digital Commerce Standards.',
    registrationUrl: 'https://www.canada.ca/en/revenue-agency.html' },
  { code: 'au', name: 'Australia', namePt: 'Austrália', demonym: 'Australian', demonymPt: 'australiano',
    authority: 'ATO', authorityFull: 'Australian Taxation Office', taxType: 'GST', taxRate: '10 %',
    currency: 'A$', currencyCode: 'AUD', taxId: 'ABN', taxIdFull: 'Australian Business Number',
    vatThreshold: 'A$75.000 de faturamento anual', filingFrequencyPt: 'trimestralmente via Business Activity Statements (BAS)',
    recordKeepingYears: '5', paymentMethodsPt: 'BPAY, transferência, cartões, PayPal e Stripe',
    penaltiesPt: 'BAS atrasado: $313 por período de 28 dias (máx. 5 períodos).',
    einvoicingContextPt: 'A Austrália é pioneira na adoção da faturação eletrônica Peppol.',
    registrationUrl: 'https://www.ato.gov.au' },
  { code: 'gh', name: 'Ghana', namePt: 'Gana', demonym: 'Ghanaian', demonymPt: 'ganense',
    authority: 'GRA', authorityFull: 'Ghana Revenue Authority', taxType: 'IVA', taxRate: '15 % + contribuições adicionais',
    currency: 'GH₵', currencyCode: 'GHS', taxId: 'TIN', taxIdFull: 'Taxpayer Identification Number',
    vatThreshold: 'GH₵200.000 de faturamento tributável anual', filingFrequencyPt: 'mensalmente, até o último dia útil do mês seguinte',
    recordKeepingYears: '6', paymentMethodsPt: 'Paystack, mobile money (MTN MoMo, Vodafone Cash), transferência e cartões',
    penaltiesPt: 'Atraso: GH₵500 + 3 % do imposto devido/mês.',
    einvoicingContextPt: 'Gana implementou exigências de faturação eletrônica IVA via GRA.',
    registrationUrl: 'https://gra.gov.gh' },
  { code: 'ke', name: 'Kenya', namePt: 'Quênia', demonym: 'Kenyan', demonymPt: 'queniano',
    authority: 'KRA', authorityFull: 'Kenya Revenue Authority', taxType: 'IVA', taxRate: '16 % (padrão), 8 %, 0 %',
    currency: 'KSh', currencyCode: 'KES', taxId: 'KRA PIN', taxIdFull: 'KRA Personal Identification Number',
    vatThreshold: 'KSh5 milhões de faturamento tributável anual', filingFrequencyPt: 'mensalmente, até o 20º do mês seguinte via iTax',
    recordKeepingYears: '5', paymentMethodsPt: 'M-Pesa, Paystack, transferência e cartões',
    penaltiesPt: 'Atraso: KSh10.000 ou 5 % do imposto (o maior). Pagamento tardio: 2 %/mês.',
    einvoicingContextPt: 'O Quênia implementou o Tax Invoice Management System (TIMS) via KRA.',
    registrationUrl: 'https://www.kra.go.ke' },
  { code: 'za', name: 'South Africa', namePt: 'África do Sul', demonym: 'South African', demonymPt: 'sul-africano',
    authority: 'SARS', authorityFull: 'South African Revenue Service', taxType: 'IVA', taxRate: '15 %',
    currency: 'R', currencyCode: 'ZAR', taxId: 'Tax Reference Number', taxIdFull: 'SARS Tax Reference Number',
    vatThreshold: 'R1 milhão de faturamento tributável anual', filingFrequencyPt: 'bimestralmente via SARS eFiling',
    recordKeepingYears: '5', paymentMethodsPt: 'EFT, cartões, transferência instantânea e SnapScan',
    penaltiesPt: 'Atraso: R250/dia (R500/dia para reincidentes). Pagamento tardio: 10 % + juros.',
    einvoicingContextPt: 'A África do Sul está se preparando para a adoção da faturação eletrônica.',
    registrationUrl: 'https://www.sars.gov.za' },
  // ── Novos Mercados Europeus ──
  { code: 'ro', name: 'Romania', namePt: 'Romênia', demonym: 'Romanian', demonymPt: 'romeno',
    authority: 'ANAF', authorityFull: 'Agenția Națională de Administrare Fiscală', taxType: 'IVA', taxRate: '19 % (padrão), 9 %, 5 %',
    currency: 'RON', currencyCode: 'RON', taxId: 'CUI/CIF', taxIdFull: 'Cod Unic de Înregistrare',
    vatThreshold: 'RON 300.000 de faturamento anual', filingFrequencyPt: 'mensalmente, até o 25º dia do mês seguinte',
    recordKeepingYears: '10', paymentMethodsPt: 'transferência bancária, cartões e PayU Romania',
    penaltiesPt: 'Juros de mora: 0,06 %/dia. Não registro: RON 1.000–5.000.',
    einvoicingContextPt: 'A Romênia implementou a e-Factura obrigatória para todas as transações B2B via ANAF.',
    registrationUrl: 'https://www.anaf.ro' },
  { code: 'hu', name: 'Hungary', namePt: 'Hungria', demonym: 'Hungarian', demonymPt: 'húngaro',
    authority: 'NAV', authorityFull: 'Nemzeti Adó- és Vámhivatal', taxType: 'IVA (ÁFA)', taxRate: '27 % (padrão), 18 %, 5 %',
    currency: 'HUF', currencyCode: 'HUF', taxId: 'Adószám', taxIdFull: 'Adószám (Número fiscal)',
    vatThreshold: 'HUF 12 milhões de faturamento anual', filingFrequencyPt: 'mensalmente (faturamento >HUF 50 M), trimestralmente ou anualmente',
    recordKeepingYears: '8', paymentMethodsPt: 'transferência bancária, Barion, SimplePay e cartões',
    penaltiesPt: 'Até 50 % do déficit fiscal. HUF 500.000 por infrações de declaração.',
    einvoicingContextPt: 'A Hungria opera o sistema obrigatório Online Számla de relatório em tempo real. Toda fatura >HUF 100.000 de IVA deve ser reportada à NAV em tempo real.',
    registrationUrl: 'https://nav.gov.hu' },
  { code: 'rs', name: 'Serbia', namePt: 'Sérvia', demonym: 'Serbian', demonymPt: 'sérvio',
    authority: 'SEF', authorityFull: 'Sistem Elektronskih Faktura', taxType: 'IVA (PDV)', taxRate: '20 % (padrão), 10 %',
    currency: 'RSD', currencyCode: 'RSD', taxId: 'PIB', taxIdFull: 'Poreski Identifikacioni Broj',
    vatThreshold: 'RSD 8 milhões de faturamento anual', filingFrequencyPt: 'mensalmente, até o 15º do mês seguinte',
    recordKeepingYears: '10', paymentMethodsPt: 'transferência bancária, IPS (pagamento instantâneo) e cartões',
    penaltiesPt: 'RSD 100.000–2.000.000 por descumprimento da faturação eletrônica.',
    einvoicingContextPt: 'A Sérvia tornou obrigatória a faturação eletrônica SEF para todas as transações B2B e B2G.',
    registrationUrl: 'https://www.efaktura.gov.rs' },
  { code: 'pl', name: 'Poland', namePt: 'Polônia', demonym: 'Polish', demonymPt: 'polonês',
    authority: 'KAS', authorityFull: 'Krajowa Administracja Skarbowa', taxType: 'IVA', taxRate: '23 % (padrão), 8 %, 5 %',
    currency: 'PLN', currencyCode: 'PLN', taxId: 'NIP', taxIdFull: 'Numer Identyfikacji Podatkowej',
    vatThreshold: 'PLN 200.000 de faturamento anual', filingFrequencyPt: 'mensalmente, até o 25º (JPK_VAT)',
    recordKeepingYears: '5', paymentMethodsPt: 'BLIK, transferência bancária, cartões, PayU e Przelewy24',
    penaltiesPt: 'Até 30 % da diferença de IVA. Responsabilidade criminal por fraude fiscal.',
    einvoicingContextPt: 'A Polônia está implementando o KSeF — sistema obrigatório de faturação eletrônica estruturada em formato XML.',
    registrationUrl: 'https://www.podatki.gov.pl' },
  { code: 'it', name: 'Italy', namePt: 'Itália', demonym: 'Italian', demonymPt: 'italiano',
    authority: 'AdE', authorityFull: 'Agenzia delle Entrate', taxType: 'IVA', taxRate: '22 % (padrão), 10 %, 5 %, 4 %',
    currency: '€', currencyCode: 'EUR', taxId: 'Partita IVA', taxIdFull: 'Partita IVA (Nº de IVA)',
    vatThreshold: '€65.000 de faturamento anual (regime forfettario)', filingFrequencyPt: 'mensal ou trimestralmente; declaração anual até 30 de abril',
    recordKeepingYears: '10', paymentMethodsPt: 'transferência (bonifico), PagoPA, cartões e Satispay',
    penaltiesPt: '120–240 % do IVA não pago. €250–€2.000 por faturas ausentes.',
    einvoicingContextPt: 'A Itália opera o sistema obrigatório FatturaPA/SDI — todas as faturas devem passar pelo sistema de intercâmbio do governo. Primeiro país da UE a impor faturação eletrônica B2B.',
    registrationUrl: 'https://www.agenziaentrate.gov.it' },
  { code: 'bg', name: 'Bulgaria', namePt: 'Bulgária', demonym: 'Bulgarian', demonymPt: 'búlgaro',
    authority: 'NRA', authorityFull: 'National Revenue Agency', taxType: 'IVA (ДДС)', taxRate: '20 % (padrão), 9 %',
    currency: 'BGN', currencyCode: 'BGN', taxId: 'ЕИК/БУЛСТАТ', taxIdFull: 'ЕИК/БУЛСТАТ (EIK/BULSTAT)',
    vatThreshold: 'BGN 100.000 de faturamento tributável anual', filingFrequencyPt: 'mensalmente, até o 14º do mês seguinte',
    recordKeepingYears: '5', paymentMethodsPt: 'transferência bancária, ePay.bg e cartões',
    penaltiesPt: 'BGN 500–10.000 por não registro. Juros de mora: 0,03 %/dia. Numeração sequencial de 10 dígitos obrigatória.',
    einvoicingContextPt: 'A Bulgária segue a norma EN 16931 e exige arquivos de auditoria SAF-T. A numeração de faturas deve seguir formato sequencial estrito de 10 dígitos.',
    registrationUrl: 'https://www.nra.bg' },
];

function genTaxCompliant(c: CC): BlogPost {
  return {
    slug: `tax-compliant-invoice-${c.code}`,
    title: `Fatura em conformidade fiscal em ${c.namePt}: requisitos ${c.authority}`,
    excerpt: `Guia passo a passo para criar faturas em conformidade com ${c.authority} em ${c.namePt}. Campos obrigatórios, regras de ${c.taxType} e penalidades.`,
    category: 'Tax and Compliance', tags: [c.authority.toLowerCase(), c.name.toLowerCase(), 'conformidade fiscal', c.taxType.toLowerCase()],
    author: defaultAuthor, date: '2026-02-20', dateModified: '2026-02-21', readTime: '10 min de leitura',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/tax-compliant-invoice-${c.code}.jpg` : '/images/blog/invoicing-tax-compliance-hero.jpg', featuredImageAlt: `Guia de fatura conforme ${c.namePt}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`fatura conforme ${c.authority}`, `fatura fiscal ${c.namePt}`], priority: 'P2',
    content: `
      <p>Emitir faturas em conformidade fiscal em ${c.namePt} é uma obrigação legal. A <strong>${c.authorityFull} (${c.authority})</strong> define regras rígidas sobre os elementos obrigatórios e o cálculo do ${c.taxType}.</p>
      <h2>Por que a conformidade é importante</h2>
      <ul><li>Deduções fiscais rejeitadas para seus clientes</li><li>Penalidades de ${c.authority}</li><li>Auditorias fiscais</li></ul>
      <h2>Elementos obrigatórios</h2>
      <ol><li>Nome e endereço da empresa</li><li>${c.taxIdFull} (${c.taxId})</li><li>Dados do cliente (e ${c.taxId} em B2B)</li><li>Número de fatura único e sequencial</li><li>Data da fatura</li><li>Descrição dos bens/serviços</li><li>Quantidade e preço unitário</li><li>Subtotal sem ${c.taxType}</li><li>Valor do ${c.taxType} a ${c.taxRate}</li><li>Total com ${c.taxType}</li></ol>
      <h2>Registro de ${c.taxType}</h2>
      <p>Obrigatório a partir de <strong>${c.vatThreshold}</strong>. Obrigações: cobrar ${c.taxType}, declarar ${c.filingFrequencyPt}, recolher ao ${c.authority}, guardar documentos por ${c.recordKeepingYears} anos.</p>
      <h2>Guarda de documentos</h2>
      <p>Mínimo <strong>${c.recordKeepingYears} anos</strong>. Documentos digitais são aceitos.</p>
      <h2>Faturação eletrônica</h2>
      <p>${c.einvoicingContextPt}</p>
      <h2>Penalidades</h2>
      <p>${c.penaltiesPt}</p>
      <h2>Meios de pagamento</h2>
      <p>Meios populares em ${c.namePt}: ${c.paymentMethodsPt}.</p>
      <h2>Como o Invoicemonk ajuda</h2>
      <p><a href="/invoicing">Invoicemonk</a> inclui automaticamente todos os campos ${c.authority}, calcula o ${c.taxType} e arquiva seus documentos.</p>
    `,
  };
}

function genVatFormat(c: CC): BlogPost {
  return {
    slug: `vat-invoice-format-${c.code}`,
    title: `Formato de fatura ${c.taxType} em ${c.namePt}: guia completo`,
    excerpt: `O formato correto de fatura ${c.taxType} exigido por ${c.authority} em ${c.namePt}. Campos obrigatórios, exemplos e modelos gratuitos.`,
    category: 'Tax and Compliance', tags: [`fatura ${c.taxType.toLowerCase()}`, c.name.toLowerCase(), c.authority.toLowerCase()],
    author: defaultAuthor, date: '2026-02-19', dateModified: '2026-02-21', readTime: '9 min de leitura',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/vat-invoice-format-${c.code}.jpg` : '/images/blog/invoice-essential-elements.jpg', featuredImageAlt: `Formato fatura ${c.taxType} ${c.namePt}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`formato fatura ${c.taxType} ${c.namePt}`], priority: 'P2',
    content: `
      <p>O formato correto de fatura ${c.taxType} em ${c.namePt} é essencial para a conformidade com ${c.authority}.</p>
      <h2>O que é uma fatura ${c.taxType}?</h2>
      <p>Documento formal que mostra o ${c.taxType} cobrado, servindo como prova para vendedor e comprador.</p>
      <h2>Campos obrigatórios</h2>
      <ul><li>Indicação "Fatura Fiscal"</li><li>Nome, endereço e ${c.taxId} do vendedor</li><li>Nome, endereço e ${c.taxId} do comprador (B2B)</li><li>Número e data da fatura</li><li>Descrições com quantidades e preços</li><li>Subtotal, ${c.taxType} (${c.taxRate}) e total</li></ul>
      <h2>Erros comuns</h2>
      <ul><li>${c.taxId} ausente</li><li>Sem indicação "Fatura Fiscal"</li><li>Alíquotas desatualizadas</li></ul>
      <h2>Modelos gratuitos</h2>
      <p><a href="/invoicing">Gerador de faturas gratuito</a> com todos os campos ${c.authority}.</p>
    `,
  };
}

function genFreelancerVat(c: CC): BlogPost {
  return {
    slug: `freelancer-vat-registration-${c.code}`,
    title: `Registro de ${c.taxType} para freelancers em ${c.namePt}: quando e como`,
    excerpt: `Você precisa se registrar para ${c.taxType} em ${c.namePt}? Limites, prós/contras e guia passo a passo.`,
    category: 'Tax and Compliance', tags: ['freelancer', `registro ${c.taxType.toLowerCase()}`, c.name.toLowerCase()],
    author: defaultAuthor, date: '2026-02-17', dateModified: '2026-02-21', readTime: '8 min de leitura',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/freelancer-vat-${c.code}.jpg` : '/images/blog/quarterly-tax-payments.jpg', featuredImageAlt: `Registro ${c.taxType} freelancer ${c.namePt}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`freelancer ${c.taxType} ${c.namePt}`], priority: 'P2',
    content: `
      <p>Como freelancer em ${c.namePt}, entender suas obrigações de ${c.taxType} é fundamental.</p>
      <h2>Quando se registrar?</h2>
      <p>Obrigatório a partir de <strong>${c.vatThreshold}</strong>.</p>
      <h2>Vantagens do registro voluntário</h2>
      <ul><li>Recuperar ${c.taxType} em compras profissionais</li><li>Credibilidade profissional</li><li>Vantagem B2B</li></ul>
      <h2>Desvantagens</h2>
      <ul><li>Carga administrativa das declarações ${c.filingFrequencyPt}</li><li>Preços aumentam ${c.taxRate} para clientes não registrados</li></ul>
      <h2>Como se registrar</h2>
      <p>Via <a href="${c.registrationUrl}" target="_blank" rel="noopener">${c.authority}</a>.</p>
      <h2>Obrigações após registro</h2>
      <ul><li>Cobrar ${c.taxType} a ${c.taxRate}</li><li>Emitir <a href="/blog/tax-compliant-invoice-${c.code}">faturas conformes</a></li><li>Declarar ${c.filingFrequencyPt}</li><li>Guardar documentos por ${c.recordKeepingYears} anos</li></ul>
      <h2>Como o Invoicemonk ajuda</h2>
      <p><a href="/freelancers">Invoicemonk para freelancers</a> calcula automaticamente o ${c.taxType} e gera faturas conformes.</p>
    `,
  };
}

function genInvoiceAbroad(c: CC): BlogPost {
  return {
    slug: `invoice-clients-in-${c.code}`,
    title: `Faturar clientes ${c.demonymPt}s do exterior: guia transfronteiriço`,
    excerpt: `Guia completo para faturar clientes em ${c.namePt} do exterior. Moedas, ${c.taxType}, pagamentos e conformidade.`,
    category: 'Tax and Compliance', tags: ['faturação transfronteiriça', c.name.toLowerCase(), 'fatura internacional'],
    author: defaultAuthor, date: '2026-02-16', dateModified: '2026-02-21', readTime: '9 min de leitura',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/invoice-abroad-${c.code}.jpg` : '/images/blog/multi-currency-invoicing.jpg', featuredImageAlt: `Faturar clientes ${c.demonymPt}s do exterior`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: [`faturar clientes ${c.demonymPt}s`, `faturação transfronteiriça ${c.namePt}`], priority: 'P2',
    content: `
      <p>Faturar clientes em ${c.namePt} do exterior exige conhecimento das regras fiscais locais e preferências de pagamento.</p>
      <h2>Considerações de moeda</h2>
      <ul><li>Faturar em ${c.currencyCode} (${c.currency}): mais prático para o cliente</li><li>Faturar na sua moeda: mais simples para contabilidade</li></ul>
      <h2>Obrigações de ${c.taxType}</h2>
      <ul><li>Sem estabelecimento em ${c.namePt}, geralmente não cobra ${c.taxType}</li><li>Cliente pode precisar aplicar reverse charge</li></ul>
      <h2>Retenção na fonte</h2>
      <p>Verifique tratados de dupla tributação.</p>
      <h2>Receber pagamentos</h2>
      <ul><li>Transferência internacional</li><li>Wise: taxas competitivas</li><li>PayPal/Payoneer</li></ul>
      <h2>Elementos obrigatórios</h2>
      <ol><li>Seus dados completos</li><li>Dados do cliente com ${c.taxId}</li><li>Moeda indicada (${c.currencyCode})</li><li>Nota sobre tratamento ${c.taxType}</li><li>Dados bancários internacionais</li></ol>
      <h2>Como o Invoicemonk ajuda</h2>
      <p><a href="/invoicing">Invoicemonk</a> gerencia faturação multi-moeda e rastreamento automático de câmbio.</p>
    `,
  };
}

function genTaxMistakes(c: CC): BlogPost {
  return {
    slug: `freelancer-tax-mistakes-${c.code}`,
    title: `Erros fiscais que freelancers cometem em ${c.namePt} (e como evitá-los)`,
    excerpt: `Os erros fiscais mais comuns de freelancers ${c.demonymPt}s — de prazos de ${c.taxType} perdidos a deduções não reclamadas.`,
    category: 'Tax and Compliance', tags: ['freelancer', 'erros fiscais', c.name.toLowerCase()],
    author: defaultAuthor, date: '2026-02-15', dateModified: '2026-02-21', readTime: '8 min de leitura',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/tax-mistakes-${c.code}.jpg` : '/images/blog/tax-deductions.jpg', featuredImageAlt: `Erros fiscais freelancers ${c.namePt}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`erros fiscais freelancer ${c.namePt}`], priority: 'P3',
    content: `
      <p>Trabalhar como freelancer em ${c.namePt} traz liberdade e responsabilidade total pelos impostos.</p>
      <h2>1. Não se registrar para ${c.taxType} a tempo</h2>
      <p>Obrigatório a partir de ${c.vatThreshold}.</p>
      <h2>2. Não reservar dinheiro para impostos</h2>
      <p>Separe 25–30 % de cada pagamento.</p>
      <h2>3. Perder deduções legítimas</h2>
      <ul><li>Home office</li><li>Capacitação profissional</li><li>Software</li><li>Viagens profissionais</li></ul>
      <h2>4. Misturar finanças pessoais e profissionais</h2>
      <p>Abra uma conta PJ dedicada.</p>
      <h2>5. Documentação inadequada</h2>
      <p>${c.authority} exige ${c.recordKeepingYears} anos de guarda.</p>
      <h2>6. Declarações atrasadas</h2>
      <p>Declarações ${c.taxType} devidas ${c.filingFrequencyPt}. ${c.penaltiesPt}</p>
      <h2>7. Faturas não conformes</h2>
      <p>Use <a href="/blog/tax-compliant-invoice-${c.code}">modelos conformes</a>.</p>
      <h2>Mantenha-se em conformidade com Invoicemonk</h2>
      <p><a href="/freelancers">Invoicemonk</a> automatiza cálculo de ${c.taxType}, rastreamento de despesas e faturação conforme.</p>
    `,
  };
}

const sharedPosts: BlogPost[] = [
  {
    slug: 'revenue-vs-profit-explained',
    title: 'Faturamento vs lucro: o que pequenas empresas confundem',
    excerpt: 'Entenda a diferença crucial entre faturamento e lucro e por que confundi-los pode afundar seu negócio.',
    category: 'Small Business', tags: ['faturamento', 'lucro', 'finanças PME'],
    author: defaultAuthor, date: '2026-02-14', dateModified: '2026-02-21', readTime: '7 min de leitura',
    featuredImage: '/images/blog/revenue-vs-profit.jpg', featuredImageAlt: 'Faturamento vs lucro para PMEs',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/accounting',
    semanticKeywords: ['faturamento vs lucro', 'margem de lucro'], priority: 'P2',
    content: `
      <p>O erro financeiro mais comum: confundir faturamento com lucro.</p>
      <h2>Faturamento</h2><p>Todo dinheiro que entra antes de deduzir custos.</p>
      <h2>Lucro</h2>
      <ul><li><strong>Lucro bruto</strong> = Faturamento − Custo das vendas</li><li><strong>Lucro operacional</strong> = Lucro bruto − Despesas operacionais</li><li><strong>Lucro líquido</strong> = Lucro operacional − Impostos − Juros</li></ul>
      <h2>Por que é perigoso</h2>
      <ul><li>Subprecificação com margens negativas</li><li>Surpresas fiscais</li></ul>
      <h2>Como acompanhar ambos</h2>
      <ol><li><a href="/accounting">Software contábil</a></li><li>Revisão mensal</li><li>Conheça suas margens</li><li><a href="/expenses">Controle de despesas</a></li></ol>
    `,
  },
  {
    slug: 'track-business-expenses-guide',
    title: 'Como rastrear despesas empresariais corretamente: guia completo',
    excerpt: 'Métodos comprovados para rastreamento de despesas — da gestão de comprovantes à categorização fiscal.',
    category: 'Expense Management', tags: ['rastreamento despesas', 'despesas empresariais', 'gestão comprovantes'],
    author: defaultAuthor, date: '2026-02-13', dateModified: '2026-02-21', readTime: '9 min de leitura',
    featuredImage: '/images/blog/track-business-expenses.jpg', featuredImageAlt: 'Rastrear despesas empresariais',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['rastrear despesas empresa', 'categorias despesas'], priority: 'P2',
    content: `
      <p>Rastreamento adequado de despesas é a base de finanças empresariais saudáveis.</p>
      <h2>Por que é importante</h2>
      <ul><li>Deduções fiscais maximizadas</li><li>Precisão dos lucros</li><li>Preparação para fiscalizações</li></ul>
      <h2>Passo 1: Separar PJ e PF</h2><p>Abra uma conta bancária PJ.</p>
      <h2>Passo 2: Escolher método</h2>
      <ol><li>Planilha</li><li>App de scanner de comprovantes</li><li><a href="/expenses">Software de rastreamento</a></li></ol>
      <h2>Passo 3: Categorizar</h2><p>Alinhe com as categorias de dedução da Receita.</p>
      <h2>Passo 4: Capturar imediatamente</h2><p>Fotografe comprovantes no momento da compra.</p>
      <h2>Comece com Invoicemonk</h2>
      <p><a href="/expenses">Controle de despesas Invoicemonk</a> combina scanner, auto-categorização e relatórios fiscais.</p>
    `,
  },
  {
    slug: 'multi-currency-invoicing-explained',
    title: 'Faturação multi-moeda explicada: guia para empresas internacionais',
    excerpt: 'Tudo sobre faturação em múltiplas moedas — câmbio, implicações fiscais, recebimento e contabilidade.',
    category: 'Invoicing and Billing Tips', tags: ['multi-moeda', 'faturação internacional', 'câmbio'],
    author: defaultAuthor, date: '2026-02-12', dateModified: '2026-02-21', readTime: '10 min de leitura',
    featuredImage: '/images/blog/multi-currency-invoicing.jpg', featuredImageAlt: 'Guia faturação multi-moeda',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: ['faturação multi-moeda', 'fatura moeda estrangeira'], priority: 'P2',
    content: `
      <p>Se você trabalha com clientes em diferentes países, faturação multi-moeda é essencial.</p>
      <h2>Por que é importante</h2>
      <ul><li>Pagamentos mais rápidos</li><li>Imagem profissional</li><li>Vantagem competitiva</li></ul>
      <h2>Gerenciar câmbio</h2>
      <ol><li>Fixar taxa na criação da fatura</li><li>Anotar taxa na fatura</li><li>Registrar ganhos/perdas no recebimento</li></ol>
      <h2>Implicações fiscais</h2>
      <ul><li>Declarar em moeda local</li><li>Ganhos cambiais são tributáveis</li><li>Perdas podem ser dedutíveis</li></ul>
      <h2>Receber pagamentos internacionais</h2>
      <ul><li>Wise: melhores taxas</li><li>PayPal: amplamente aceito</li><li>Stripe: 135+ moedas</li></ul>
      <h2>Como o Invoicemonk ajuda</h2>
      <p><a href="/use-cases/multi-currency-invoicing">Faturação multi-moeda Invoicemonk</a> automatiza todo o processo.</p>
    `,
  },
];

function generateAll(): BlogPost[] {
  const posts: BlogPost[] = [];
  for (const c of countries) {
    posts.push(genTaxCompliant(c));
    posts.push(genVatFormat(c));
    posts.push(genFreelancerVat(c));
    posts.push(genInvoiceAbroad(c));
    posts.push(genTaxMistakes(c));
  }
  return [...posts, ...sharedPosts];
}

registerBlogPosts('pt', generateAll());
