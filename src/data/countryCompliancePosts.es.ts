/**
 * Spanish translations for country-specific compliance posts.
 */
import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

interface CC {
  code: string; name: string; nameEs: string; demonym: string; demonymEs: string;
  authority: string; authorityFull: string; taxType: string; taxRate: string;
  currency: string; currencyCode: string; taxId: string; taxIdFull: string;
  vatThreshold: string; filingFrequencyEs: string;
  recordKeepingYears: string; paymentMethodsEs: string; penaltiesEs: string;
  einvoicingContextEs: string; registrationUrl: string;
}

const countries: CC[] = [
  { code: 'ng', name: 'Nigeria', nameEs: 'Nigeria', demonym: 'Nigerian', demonymEs: 'nigeriano',
    authority: 'FIRS', authorityFull: 'Federal Inland Revenue Service', taxType: 'IVA', taxRate: '7,5 %',
    currency: '₦', currencyCode: 'NGN', taxId: 'TIN', taxIdFull: 'Tax Identification Number',
    vatThreshold: '₦25 M de facturación anual', filingFrequencyEs: 'mensualmente, antes del 21 del mes siguiente',
    recordKeepingYears: '6', paymentMethodsEs: 'Paystack, transferencia bancaria, USSD y tarjetas de débito',
    penaltiesEs: 'No registro: ₦10.000 el primer mes + ₦5.000/mes. Declaración tardía: ₦5.000/mes.',
    einvoicingContextEs: 'Nigeria avanza hacia la administración fiscal digital mediante la plataforma FIRS TaxPro-Max.',
    registrationUrl: 'https://firs.gov.ng' },
  { code: 'us', name: 'United States', nameEs: 'Estados Unidos', demonym: 'American', demonymEs: 'estadounidense',
    authority: 'IRS', authorityFull: 'Internal Revenue Service', taxType: 'Sales Tax', taxRate: 'variable según estado (0 %–10,25 %)',
    currency: '$', currencyCode: 'USD', taxId: 'EIN', taxIdFull: 'Employer Identification Number',
    vatThreshold: 'variable según estado — Economic Nexus ~$100.000', filingFrequencyEs: 'trimestral o anualmente según el estado',
    recordKeepingYears: '7', paymentMethodsEs: 'transferencia ACH, tarjetas, cheques, PayPal y Stripe',
    penaltiesEs: 'No declarar: 5 % del impuesto impagado/mes (máx. 25 %). No pagar: 0,5 %/mes.',
    einvoicingContextEs: 'EE. UU. no tiene obligación federal de factura electrónica B2B.',
    registrationUrl: 'https://www.irs.gov' },
  { code: 'uk', name: 'United Kingdom', nameEs: 'Reino Unido', demonym: 'British', demonymEs: 'británico',
    authority: 'HMRC', authorityFull: 'HM Revenue & Customs', taxType: 'IVA', taxRate: '20 % (estándar), 5 % (reducido), 0 %',
    currency: '£', currencyCode: 'GBP', taxId: 'UTR', taxIdFull: 'Unique Taxpayer Reference',
    vatThreshold: '£90.000 de facturación imponible anual', filingFrequencyEs: 'trimestralmente vía Making Tax Digital (MTD)',
    recordKeepingYears: '6', paymentMethodsEs: 'transferencia (BACS/Faster Payments), tarjetas, PayPal y GoCardless',
    penaltiesEs: 'Registro tardío: hasta 100 % del IVA debido. Declaración tardía: £200 de recargo.',
    einvoicingContextEs: 'El Reino Unido soporta facturación electrónica Peppol y ha implementado Making Tax Digital (MTD).',
    registrationUrl: 'https://www.gov.uk/government/organisations/hm-revenue-customs' },
  { code: 'ca', name: 'Canada', nameEs: 'Canadá', demonym: 'Canadian', demonymEs: 'canadiense',
    authority: 'CRA', authorityFull: 'Canada Revenue Agency', taxType: 'GST/HST', taxRate: '5 % GST (federal) + 0–10 % provincial',
    currency: 'C$', currencyCode: 'CAD', taxId: 'BN', taxIdFull: 'Business Number',
    vatThreshold: 'C$30.000 en cuatro trimestres consecutivos', filingFrequencyEs: 'trimestral o anualmente según ingresos',
    recordKeepingYears: '6', paymentMethodsEs: 'Interac e-Transfer, tarjetas, EFT y PayPal',
    penaltiesEs: 'Retraso: 1 % del saldo + 0,25 %/mes (máx. 12 meses).',
    einvoicingContextEs: 'Canadá explora la adopción de Peppol vía Digital Commerce Standards.',
    registrationUrl: 'https://www.canada.ca/en/revenue-agency.html' },
  { code: 'au', name: 'Australia', nameEs: 'Australia', demonym: 'Australian', demonymEs: 'australiano',
    authority: 'ATO', authorityFull: 'Australian Taxation Office', taxType: 'GST', taxRate: '10 %',
    currency: 'A$', currencyCode: 'AUD', taxId: 'ABN', taxIdFull: 'Australian Business Number',
    vatThreshold: 'A$75.000 de facturación anual', filingFrequencyEs: 'trimestralmente vía Business Activity Statements (BAS)',
    recordKeepingYears: '5', paymentMethodsEs: 'BPAY, transferencia, tarjetas, PayPal y Stripe',
    penaltiesEs: 'BAS tardío: $313 por período de 28 días (máx. 5 períodos).',
    einvoicingContextEs: 'Australia es pionera en la adopción de facturación electrónica Peppol.',
    registrationUrl: 'https://www.ato.gov.au' },
  { code: 'gh', name: 'Ghana', nameEs: 'Ghana', demonym: 'Ghanaian', demonymEs: 'ghanés',
    authority: 'GRA', authorityFull: 'Ghana Revenue Authority', taxType: 'IVA', taxRate: '15 % + contribuciones adicionales',
    currency: 'GH₵', currencyCode: 'GHS', taxId: 'TIN', taxIdFull: 'Taxpayer Identification Number',
    vatThreshold: 'GH₵200.000 de facturación imponible anual', filingFrequencyEs: 'mensualmente, antes del último día hábil del mes siguiente',
    recordKeepingYears: '6', paymentMethodsEs: 'Paystack, dinero móvil (MTN MoMo, Vodafone Cash), transferencia y tarjetas',
    penaltiesEs: 'Retraso: GH₵500 + 3 % del impuesto/mes.',
    einvoicingContextEs: 'Ghana ha implementado requisitos de facturación electrónica IVA a través de la GRA.',
    registrationUrl: 'https://gra.gov.gh' },
  { code: 'ke', name: 'Kenya', nameEs: 'Kenia', demonym: 'Kenyan', demonymEs: 'keniano',
    authority: 'KRA', authorityFull: 'Kenya Revenue Authority', taxType: 'IVA', taxRate: '16 % (estándar), 8 %, 0 %',
    currency: 'KSh', currencyCode: 'KES', taxId: 'KRA PIN', taxIdFull: 'KRA Personal Identification Number',
    vatThreshold: 'KSh5 M de facturación imponible anual', filingFrequencyEs: 'mensualmente, antes del 20 del mes siguiente vía iTax',
    recordKeepingYears: '5', paymentMethodsEs: 'M-Pesa, Paystack, transferencia y tarjetas',
    penaltiesEs: 'Retraso: KSh10.000 o 5 % del impuesto (el mayor). Pago tardío: 2 %/mes.',
    einvoicingContextEs: 'Kenia ha implementado el Tax Invoice Management System (TIMS) vía KRA.',
    registrationUrl: 'https://www.kra.go.ke' },
  { code: 'za', name: 'South Africa', nameEs: 'Sudáfrica', demonym: 'South African', demonymEs: 'sudafricano',
    authority: 'SARS', authorityFull: 'South African Revenue Service', taxType: 'IVA', taxRate: '15 %',
    currency: 'R', currencyCode: 'ZAR', taxId: 'Tax Reference Number', taxIdFull: 'SARS Tax Reference Number',
    vatThreshold: 'R1 M de facturación imponible anual', filingFrequencyEs: 'bimestralmente vía SARS eFiling',
    recordKeepingYears: '5', paymentMethodsEs: 'EFT, tarjetas, transferencia instantánea y SnapScan',
    penaltiesEs: 'Retraso: R250/día (R500/día para reincidentes). Pago tardío: 10 % + intereses.',
    einvoicingContextEs: 'Sudáfrica prepara la adopción de facturación electrónica.',
    registrationUrl: 'https://www.sars.gov.za' },
];

function genTaxCompliant(c: CC): BlogPost {
  return {
    slug: `tax-compliant-invoice-${c.code}`,
    title: `Factura conforme en ${c.nameEs}: requisitos ${c.authority}`,
    excerpt: `Guía paso a paso para crear facturas conformes con ${c.authority} en ${c.nameEs}. Campos obligatorios, reglas de ${c.taxType} y sanciones.`,
    category: 'Tax and Compliance', tags: [c.authority.toLowerCase(), c.name.toLowerCase(), 'cumplimiento fiscal', c.taxType.toLowerCase()],
    author: defaultAuthor, date: '2026-02-20', dateModified: '2026-02-21', readTime: '10 min de lectura',
    featuredImage: `/images/blog/tax-compliant-invoice-${c.code}.jpg`, featuredImageAlt: `Guía factura conforme ${c.nameEs}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`factura conforme ${c.authority}`, `factura fiscal ${c.nameEs}`], priority: 'P2',
    content: `
      <p>Emitir facturas conformes en ${c.nameEs} es una obligación legal. La <strong>${c.authorityFull} (${c.authority})</strong> establece reglas estrictas sobre los elementos obligatorios y el cálculo del ${c.taxType}.</p>
      <h2>Por qué importa el cumplimiento</h2>
      <ul><li>Deducciones fiscales rechazadas para tus clientes</li><li>Sanciones de ${c.authority}</li><li>Auditorías fiscales</li></ul>
      <h2>Elementos obligatorios</h2>
      <ol><li>Nombre y dirección de la empresa</li><li>${c.taxIdFull} (${c.taxId})</li><li>Datos del cliente (y ${c.taxId} en B2B)</li><li>Número de factura único y secuencial</li><li>Fecha de factura</li><li>Descripción de bienes/servicios</li><li>Cantidad y precio unitario</li><li>Subtotal sin ${c.taxType}</li><li>Importe ${c.taxType} al ${c.taxRate}</li><li>Total con ${c.taxType}</li></ol>
      <h2>Registro de ${c.taxType}</h2>
      <p>Obligatorio a partir de <strong>${c.vatThreshold}</strong>. Obligaciones: facturar ${c.taxType}, declarar ${c.filingFrequencyEs}, ingresar a ${c.authority}, conservar ${c.recordKeepingYears} años.</p>
      <h2>Conservación de documentos</h2>
      <p>Mínimo <strong>${c.recordKeepingYears} años</strong>. Se aceptan documentos digitales.</p>
      <h2>Facturación electrónica</h2>
      <p>${c.einvoicingContextEs}</p>
      <h2>Sanciones</h2>
      <p>${c.penaltiesEs}</p>
      <h2>Métodos de pago</h2>
      <p>Métodos populares en ${c.nameEs}: ${c.paymentMethodsEs}.</p>
      <h2>Cómo ayuda Invoicemonk</h2>
      <p><a href="/invoicing">Invoicemonk</a> incluye automáticamente todos los campos ${c.authority}, calcula el ${c.taxType} y archiva tus documentos.</p>
    `,
  };
}

function genVatFormat(c: CC): BlogPost {
  return {
    slug: `vat-invoice-format-${c.code}`,
    title: `Formato de factura ${c.taxType} en ${c.nameEs}: guía completa`,
    excerpt: `El formato correcto de factura ${c.taxType} exigido por ${c.authority} en ${c.nameEs}. Campos obligatorios, ejemplos y plantillas gratis.`,
    category: 'Tax and Compliance', tags: [`factura ${c.taxType.toLowerCase()}`, c.name.toLowerCase(), c.authority.toLowerCase()],
    author: defaultAuthor, date: '2026-02-19', dateModified: '2026-02-21', readTime: '9 min de lectura',
    featuredImage: `/images/blog/vat-invoice-format-${c.code}.jpg`, featuredImageAlt: `Formato factura ${c.taxType} ${c.nameEs}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`formato factura ${c.taxType} ${c.nameEs}`], priority: 'P2',
    content: `
      <p>El formato correcto de factura ${c.taxType} en ${c.nameEs} es esencial para el cumplimiento con ${c.authority}.</p>
      <h2>¿Qué es una factura ${c.taxType}?</h2>
      <p>Documento formal que muestra el ${c.taxType} cobrado, sirviendo como prueba para vendedor y comprador.</p>
      <h2>Campos obligatorios</h2>
      <ul><li>Indicación «Factura fiscal»</li><li>Nombre, dirección y ${c.taxId} del vendedor</li><li>Nombre, dirección y ${c.taxId} del comprador (B2B)</li><li>Número y fecha de factura</li><li>Descripciones con cantidades y precios</li><li>Subtotal, ${c.taxType} (${c.taxRate}) y total</li></ul>
      <h2>Errores comunes</h2>
      <ul><li>${c.taxId} ausente</li><li>Sin indicación «Factura fiscal»</li><li>Tipos ${c.taxType} obsoletos</li></ul>
      <h2>Plantillas gratis</h2>
      <p><a href="/free-invoice-generator">Generador de facturas gratuito</a> con todos los campos ${c.authority}.</p>
    `,
  };
}

function genFreelancerVat(c: CC): BlogPost {
  return {
    slug: `freelancer-vat-registration-${c.code}`,
    title: `Registro de ${c.taxType} para freelances en ${c.nameEs}: cuándo y cómo`,
    excerpt: `¿Necesitas registrarte en ${c.taxType} en ${c.nameEs}? Umbrales, pros/contras y guía paso a paso.`,
    category: 'Tax and Compliance', tags: ['freelance', `registro ${c.taxType.toLowerCase()}`, c.name.toLowerCase()],
    author: defaultAuthor, date: '2026-02-17', dateModified: '2026-02-21', readTime: '8 min de lectura',
    featuredImage: `/images/blog/freelancer-vat-${c.code}.jpg`, featuredImageAlt: `Registro ${c.taxType} freelance ${c.nameEs}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`freelance ${c.taxType} ${c.nameEs}`], priority: 'P2',
    content: `
      <p>Como freelance en ${c.nameEs}, entender tus obligaciones de ${c.taxType} es fundamental.</p>
      <h2>¿Cuándo registrarse?</h2>
      <p>Obligatorio a partir de <strong>${c.vatThreshold}</strong>.</p>
      <h2>Ventajas del registro voluntario</h2>
      <ul><li>Recuperar ${c.taxType} en compras profesionales</li><li>Credibilidad profesional</li><li>Ventaja B2B</li></ul>
      <h2>Inconvenientes</h2>
      <ul><li>Carga administrativa de las declaraciones ${c.filingFrequencyEs}</li><li>Precios suben ${c.taxRate} para clientes no registrados</li></ul>
      <h2>Cómo registrarse</h2>
      <p>Vía <a href="${c.registrationUrl}" target="_blank" rel="noopener">${c.authority}</a>.</p>
      <h2>Obligaciones tras el registro</h2>
      <ul><li>Facturar ${c.taxType} al ${c.taxRate}</li><li>Emitir <a href="/blog/tax-compliant-invoice-${c.code}">facturas conformes</a></li><li>Declarar ${c.filingFrequencyEs}</li><li>Conservar documentos ${c.recordKeepingYears} años</li></ul>
      <h2>Cómo ayuda Invoicemonk</h2>
      <p><a href="/freelancers">Invoicemonk para freelances</a> calcula automáticamente el ${c.taxType} y genera facturas conformes.</p>
    `,
  };
}

function genInvoiceAbroad(c: CC): BlogPost {
  return {
    slug: `invoice-clients-in-${c.code}`,
    title: `Facturar a clientes ${c.demonymEs}s desde el extranjero: guía transfronteriza`,
    excerpt: `Guía completa para facturar clientes en ${c.nameEs} desde el extranjero. Divisas, ${c.taxType}, pagos y cumplimiento.`,
    category: 'Tax and Compliance', tags: ['facturación transfronteriza', c.name.toLowerCase(), 'factura internacional'],
    author: defaultAuthor, date: '2026-02-16', dateModified: '2026-02-21', readTime: '9 min de lectura',
    featuredImage: `/images/blog/invoice-abroad-${c.code}.jpg`, featuredImageAlt: `Facturar clientes ${c.demonymEs}s desde el extranjero`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: [`facturar clientes ${c.demonymEs}s`, `facturación transfronteriza ${c.nameEs}`], priority: 'P2',
    content: `
      <p>Facturar a clientes en ${c.nameEs} desde el extranjero requiere conocer las normas fiscales locales y las preferencias de pago.</p>
      <h2>Consideraciones de divisa</h2>
      <ul><li>Facturar en ${c.currencyCode} (${c.currency}): más práctico para el cliente</li><li>Facturar en tu divisa: más sencillo para tu contabilidad</li></ul>
      <h2>Obligaciones de ${c.taxType}</h2>
      <ul><li>Sin establecimiento en ${c.nameEs}, generalmente no cobras ${c.taxType}</li><li>Tu cliente puede tener que aplicar la inversión del sujeto pasivo</li></ul>
      <h2>Retención en origen</h2>
      <p>Verifica convenios de doble imposición.</p>
      <h2>Recibir pagos</h2>
      <ul><li>Transferencia internacional</li><li>Wise: tipos competitivos</li><li>PayPal/Payoneer</li></ul>
      <h2>Elementos obligatorios</h2>
      <ol><li>Tus datos completos</li><li>Datos del cliente con ${c.taxId}</li><li>Divisa indicada (${c.currencyCode})</li><li>Nota sobre tratamiento ${c.taxType}</li><li>Datos bancarios internacionales</li></ol>
      <h2>Cómo ayuda Invoicemonk</h2>
      <p><a href="/invoicing">Invoicemonk</a> gestiona facturación multi-divisa y seguimiento automático de tipos de cambio.</p>
    `,
  };
}

function genTaxMistakes(c: CC): BlogPost {
  return {
    slug: `freelancer-tax-mistakes-${c.code}`,
    title: `Errores fiscales que cometen los freelances en ${c.nameEs} (y cómo evitarlos)`,
    excerpt: `Los errores fiscales más comunes de freelances ${c.demonymEs}s — de plazos de ${c.taxType} incumplidos a deducciones no reclamadas.`,
    category: 'Tax and Compliance', tags: ['freelance', 'errores fiscales', c.name.toLowerCase()],
    author: defaultAuthor, date: '2026-02-15', dateModified: '2026-02-21', readTime: '8 min de lectura',
    featuredImage: `/images/blog/tax-mistakes-${c.code}.jpg`, featuredImageAlt: `Errores fiscales freelances ${c.nameEs}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`errores fiscales freelance ${c.nameEs}`], priority: 'P3',
    content: `
      <p>Trabajar como freelance en ${c.nameEs} da libertad y responsabilidad fiscal total.</p>
      <h2>1. No registrarse en ${c.taxType} a tiempo</h2>
      <p>Obligatorio a partir de ${c.vatThreshold}.</p>
      <h2>2. No reservar dinero para impuestos</h2>
      <p>Aparta 25–30 % de cada cobro.</p>
      <h2>3. Perder deducciones legítimas</h2>
      <ul><li>Despacho en casa</li><li>Formación profesional</li><li>Software</li><li>Desplazamientos profesionales</li></ul>
      <h2>4. Mezclar finanzas personales y profesionales</h2>
      <p>Abre una cuenta bancaria profesional.</p>
      <h2>5. Mala conservación de documentos</h2>
      <p>${c.authority} exige ${c.recordKeepingYears} años de conservación.</p>
      <h2>6. Declaraciones fuera de plazo</h2>
      <p>Declaraciones ${c.taxType} debidas ${c.filingFrequencyEs}. ${c.penaltiesEs}</p>
      <h2>7. Facturas no conformes</h2>
      <p>Usa <a href="/blog/tax-compliant-invoice-${c.code}">plantillas conformes</a>.</p>
      <h2>Mantente conforme con Invoicemonk</h2>
      <p><a href="/freelancers">Invoicemonk</a> automatiza el cálculo de ${c.taxType}, seguimiento de gastos y facturación conforme.</p>
    `,
  };
}

const sharedPosts: BlogPost[] = [
  {
    slug: 'revenue-vs-profit-explained',
    title: 'Facturación vs beneficio: lo que las pequeñas empresas confunden',
    excerpt: 'Entiende la diferencia crucial entre facturación y beneficio y por qué confundirlos puede hundir tu negocio.',
    category: 'Small Business', tags: ['facturación', 'beneficio', 'finanzas PYME'],
    author: defaultAuthor, date: '2026-02-14', dateModified: '2026-02-21', readTime: '7 min de lectura',
    featuredImage: '/images/blog/revenue-vs-profit.jpg', featuredImageAlt: 'Facturación vs beneficio para PYMES',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/accounting',
    semanticKeywords: ['facturación vs beneficio', 'margen de beneficio'], priority: 'P2',
    content: `
      <p>El error financiero más común: confundir facturación con beneficio.</p>
      <h2>Facturación</h2><p>Todo el dinero que entra antes de descontar costes.</p>
      <h2>Beneficio</h2>
      <ul><li><strong>Margen bruto</strong> = Facturación − Coste de ventas</li><li><strong>Resultado de explotación</strong> = Margen bruto − Gastos operativos</li><li><strong>Beneficio neto</strong> = Resultado − Impuestos − Intereses</li></ul>
      <h2>Por qué es peligroso</h2>
      <ul><li>Subvaloración con márgenes negativos</li><li>Sorpresas fiscales</li></ul>
      <h2>Cómo seguir ambos</h2>
      <ol><li><a href="/accounting">Software contable</a></li><li>Revisión mensual</li><li>Conoce tus márgenes</li><li><a href="/expenses">Control de gastos</a></li></ol>
    `,
  },
  {
    slug: 'track-business-expenses-guide',
    title: 'Cómo controlar los gastos de tu empresa correctamente: guía completa',
    excerpt: 'Métodos probados para el seguimiento de gastos — desde la gestión de justificantes hasta la categorización fiscal.',
    category: 'Expense Management', tags: ['seguimiento gastos', 'gastos empresa', 'gestión justificantes'],
    author: defaultAuthor, date: '2026-02-13', dateModified: '2026-02-21', readTime: '9 min de lectura',
    featuredImage: '/images/blog/track-business-expenses.jpg', featuredImageAlt: 'Controlar gastos empresariales',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['controlar gastos empresa', 'categorías gastos'], priority: 'P2',
    content: `
      <p>Un seguimiento riguroso de gastos es la base de finanzas sanas.</p>
      <h2>Por qué importa</h2>
      <ul><li>Deducciones fiscales maximizadas</li><li>Precisión de beneficios</li><li>Preparación para inspecciones</li></ul>
      <h2>Paso 1: Separar profesional y personal</h2><p>Abre una cuenta bancaria profesional.</p>
      <h2>Paso 2: Elegir método</h2>
      <ol><li>Hoja de cálculo</li><li>App de escaneo de justificantes</li><li><a href="/expenses">Software de seguimiento</a></li></ol>
      <h2>Paso 3: Categorizar</h2><p>Alinea con las categorías de deducción de Hacienda.</p>
      <h2>Paso 4: Capturar inmediatamente</h2><p>Fotografía los justificantes en el momento.</p>
      <h2>Empieza con Invoicemonk</h2>
      <p><a href="/expenses">Control de gastos Invoicemonk</a> combina escáner, auto-categorización e informes fiscales.</p>
    `,
  },
  {
    slug: 'multi-currency-invoicing-explained',
    title: 'Facturación multi-divisa explicada: guía para empresas internacionales',
    excerpt: 'Todo sobre facturación en múltiples divisas — tipos de cambio, implicaciones fiscales, cobro y contabilidad.',
    category: 'Invoicing and Billing Tips', tags: ['multi-divisa', 'facturación internacional', 'tipos de cambio'],
    author: defaultAuthor, date: '2026-02-12', dateModified: '2026-02-21', readTime: '10 min de lectura',
    featuredImage: '/images/blog/multi-currency-invoicing.jpg', featuredImageAlt: 'Guía facturación multi-divisa',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: ['facturación multi-divisa', 'factura divisa extranjera'], priority: 'P2',
    content: `
      <p>Si trabajas con clientes en diferentes países, la facturación multi-divisa es imprescindible.</p>
      <h2>Por qué importa</h2>
      <ul><li>Cobros más rápidos</li><li>Imagen profesional</li><li>Ventaja competitiva</li></ul>
      <h2>Gestionar tipos de cambio</h2>
      <ol><li>Fijar tipo al crear la factura</li><li>Anotar el tipo en la factura</li><li>Registrar ganancias/pérdidas al cobro</li></ol>
      <h2>Implicaciones fiscales</h2>
      <ul><li>Declarar en moneda local</li><li>Ganancias cambiarias son imponibles</li><li>Pérdidas potencialmente deducibles</li></ul>
      <h2>Cobrar pagos internacionales</h2>
      <ul><li>Wise: mejores tipos</li><li>PayPal: ampliamente aceptado</li><li>Stripe: 135+ divisas</li></ul>
      <h2>Cómo ayuda Invoicemonk</h2>
      <p><a href="/use-cases/multi-currency-invoicing">Facturación multi-divisa Invoicemonk</a> automatiza todo el proceso.</p>
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

registerBlogPosts('es', generateAll());
