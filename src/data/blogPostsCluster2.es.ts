import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 11: Invoicing Mastery cluster posts — Spanish translations
 */
const posts: BlogPost[] = [
  {
    slug: 'invoice-numbering-best-practices',
    title: 'Numeración de facturas: buenas prácticas para sistemas escalables',
    excerpt: 'Aprende a crear un sistema de numeración que mantenga tus finanzas organizadas, cumpla con la normativa y escale con tu negocio.',
    category: 'Invoicing and Billing Tips',
    tags: ['facturación', 'números de factura', 'organización', 'contabilidad', 'cumplimiento'],
    author: defaultAuthor, date: '2026-01-29', readTime: '7 min de lectura',
    featuredImage: '/images/blog/invoice-numbering.jpg',
    featuredImageAlt: 'Sistemas de numeración de facturas para empresas',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['numeración factura', 'formato número factura', 'factura secuencial'],
    priority: 'P2',
    content: `
      <p>Un sistema de numeración bien diseñado es la columna vertebral de unas finanzas empresariales organizadas. Facilita el seguimiento de pagos, el cumplimiento normativo y la preparación ante auditorías.</p>
      <h2>Por qué importa la numeración</h2>
      <ul>
        <li><strong>Identificación única:</strong> Cada factura necesita un identificador propio</li>
        <li><strong>Obligación legal:</strong> Hacienda exige números secuenciales y únicos</li>
        <li><strong>Seguimiento de pagos:</strong> Asociar rápidamente cada pago a su factura</li>
        <li><strong>Preparación para auditorías:</strong> Los auditores esperan un sistema lógico y sin lagunas</li>
      </ul>
      <h2>Sistemas de numeración populares</h2>
      <h3>Numeración secuencial</h3>
      <p>El más sencillo: empezar en 001 e incrementar. Formato: FACT-001, FACT-002.</p>
      <h3>Numeración por fecha</h3>
      <p>Incluir año y mes. Formato: 2026-01-001.</p>
      <h3>Numeración por cliente</h3>
      <p>Integrar un código de cliente. Formato: ABC-001.</p>
      <h3>Numeración por proyecto</h3>
      <p>Usar códigos de proyecto. Formato: PROY-A-001.</p>
      <h3>Sistemas híbridos</h3>
      <p>Combinar elementos. Formato: 2026-ABC-001.</p>
      <h2>Reglas esenciales</h2>
      <ol>
        <li><strong>Nunca reutilizar</strong> un número de factura</li>
        <li><strong>Ceros a la izquierda:</strong> 001, no 1</li>
        <li><strong>Evitar caracteres especiales</strong></li>
        <li><strong>Documentar tu sistema</strong></li>
        <li><strong>Planificar el crecimiento</strong></li>
      </ol>
      <h2>Facturas anuladas</h2>
      <p>Nunca eliminar ni reutilizar un número. Marcar como «Anulada» y emitir una nueva con el número siguiente.</p>
      <h2>Deja que el software lo gestione</h2>
      <p><a href="/invoicing">Un software de facturación profesional</a> genera números secuenciales automáticamente y previene duplicados.</p>
    `
  },
  {
    slug: 'how-to-write-invoice-payment-terms',
    title: 'Cómo redactar condiciones de pago que te hagan cobrar a tiempo',
    excerpt: 'Las condiciones de pago claras son esenciales. Aprende a formularlas para proteger tu negocio y fomentar el pago puntual.',
    category: 'Invoicing and Billing Tips',
    tags: ['facturación', 'condiciones de pago', 'Net 30', 'políticas de pago', 'flujo de caja'],
    author: defaultAuthor, date: '2026-01-28', readTime: '8 min de lectura',
    featuredImage: '/images/blog/invoice-payment-terms.jpg',
    featuredImageAlt: 'Redactar condiciones de pago efectivas',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['condiciones de pago', 'Net 30', 'plazo factura', 'recargos por mora'],
    priority: 'P2',
    content: `
      <p>Las condiciones de pago definen cuándo y cómo esperas cobrar. Bien redactadas, reducen malentendidos y aceleran los cobros.</p>
      <h2>Por qué importan</h2>
      <ul>
        <li>Fijar expectativas claras con el cliente</li>
        <li>Base legal en caso de impago</li>
        <li>Mejor previsión de tesorería</li>
        <li>Imagen profesional</li>
      </ul>
      <h2>Estructuras habituales</h2>
      <h3>Pago al contado / a la recepción</h3>
      <p>Pago inmediato al recibir la factura.</p>
      <h3>Net 15 / Net 30 / Net 60</h3>
      <ul>
        <li><strong>Net 15:</strong> Cada vez más común entre autónomos</li>
        <li><strong>Net 30:</strong> Estándar del mercado</li>
        <li><strong>Net 60:</strong> Habitual en grandes empresas</li>
      </ul>
      <h3>Descuento por pronto pago (2/10 Net 30)</h3>
      <p>2 % de descuento si paga en 10 días, importe completo a 30 días.</p>
      <h3>Anticipo + hitos</h3>
      <p>30 % a la firma, 30 % a mitad, 40 % a la entrega.</p>
      <h2>Qué incluir</h2>
      <ol>
        <li><strong>Fecha de vencimiento:</strong> Fecha exacta, no solo «30 días»</li>
        <li><strong>Métodos de pago aceptados</strong></li>
        <li><strong>Datos bancarios</strong> o enlace de pago</li>
        <li><strong>Divisa</strong></li>
        <li><strong>Recargos por mora</strong></li>
        <li><strong>Condiciones de descuento</strong></li>
      </ol>
      <h2>Recargos por mora</h2>
      <p>En España, la Ley de Morosidad permite intereses de demora y compensación por costes de cobro. Incluye estas condiciones en tus facturas.</p>
      <h2>Consejos para cobrar más rápido</h2>
      <ul>
        <li>Fecha de vencimiento visible y concreta</li>
        <li>Enlace de pago directo en la factura</li>
        <li>Recordar antes del vencimiento, no solo después</li>
      </ul>
      <p>Automatiza tus condiciones con <a href="/invoicing">software de facturación profesional</a>.</p>
    `
  },
  {
    slug: 'recurring-invoices-automating-billing',
    title: 'Facturas recurrentes: automatiza la facturación de retainers y suscripciones',
    excerpt: 'Guía paso a paso para automatizar facturas recurrentes. Contratos mensuales, retainers y suscripciones.',
    category: 'Invoicing and Billing Tips',
    tags: ['facturación', 'facturas recurrentes', 'automatización', 'suscripciones'],
    author: defaultAuthor, date: '2026-01-27', dateModified: '2026-02-19', readTime: '7 min de lectura',
    featuredImage: '/images/blog/recurring-invoices.jpg',
    featuredImageAlt: 'Workflow de facturación recurrente automatizada',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['facturas recurrentes', 'facturación automática', 'facturación suscripción'],
    priority: 'P2',
    relatedTools: [
      { label: 'Facturación recurrente', url: '/use-cases/recurring-billing', description: 'Automatiza tu ciclo de facturación' },
      { label: 'Software de facturación', url: '/invoicing', description: 'Crea facturas profesionales' },
    ],
    content: `
      <p>Si tienes clientes que pagan el mismo importe regularmente, crear facturas manualmente cada mes es perder el tiempo. Las facturas recurrentes automatizan el proceso.</p>
      <h2>¿Qué son las facturas recurrentes?</h2>
      <p>Facturas generadas y enviadas automáticamente a intervalos regulares — semanal, mensual, trimestral o anual.</p>
      <h2>Cuándo usarlas</h2>
      <ul>
        <li><strong>Retainers mensuales:</strong> Consultores, agencias, asesores</li>
        <li><strong>Suscripciones:</strong> SaaS, membresías</li>
        <li><strong>Contratos de mantenimiento:</strong> Soporte IT, gestión inmobiliaria</li>
      </ul>
      <h2>Configuración</h2>
      <ol>
        <li>Introducir datos del cliente</li>
        <li>Definir servicios y importes</li>
        <li>Establecer intervalo de facturación</li>
        <li>Configurar condiciones de pago</li>
        <li>Activar recordatorios automáticos</li>
      </ol>
      <h2>Buenas prácticas</h2>
      <ul>
        <li>Informar al cliente antes de la primera factura automática</li>
        <li>Anunciar ajustes de precio con 30 días de antelación</li>
        <li>Configurar recordatorios para pagos vencidos</li>
        <li>Revisar periódicamente importes y servicios</li>
      </ul>
      <p>Más en nuestra <a href="/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently">guía de facturación puntual</a>.</p>
    `
  },
  {
    slug: 'invoice-disputes-how-to-handle-professionally',
    title: 'Disputas de facturación: cómo gestionarlas profesionalmente (plantillas incluidas)',
    excerpt: '¿Un cliente disputa tu factura? Proceso paso a paso con plantillas de email y guiones de respuesta.',
    category: 'Invoicing and Billing Tips',
    tags: ['facturación', 'disputas', 'relaciones con clientes', 'resolución de conflictos'],
    author: defaultAuthor, date: '2026-01-26', readTime: '8 min de lectura',
    featuredImage: '/images/blog/invoice-disputes.jpg',
    featuredImageAlt: 'Resolución profesional de disputas de facturación',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['disputas factura', 'contestación factura', 'desacuerdo cliente'],
    priority: 'P3',
    content: `
      <p>Las disputas de facturación son incómodas pero inevitables. Cómo las gestiones determina si cobras y si la relación con el cliente sobrevive.</p>
      <h2>Por qué surgen</h2>
      <ul>
        <li><strong>Malentendido sobre el alcance:</strong> El cliente esperaba otra cosa</li>
        <li><strong>Desacuerdo en el precio:</strong> Importe final superior a lo esperado</li>
        <li><strong>Insatisfacción con la calidad</strong></li>
        <li><strong>Problemas de timing:</strong> Entrega tardía</li>
        <li><strong>Errores simples:</strong> Cálculos incorrectos o facturación doble</li>
      </ul>
      <h2>Proceso de resolución</h2>
      <ol>
        <li><strong>Escuchar:</strong> Dejar que el cliente se exprese</li>
        <li><strong>Documentar:</strong> Todo por escrito</li>
        <li><strong>Verificar:</strong> Revisar factura y acuerdos originales</li>
        <li><strong>Responder:</strong> De forma objetiva y profesional</li>
        <li><strong>Proponer solución:</strong> Abono, pago parcial o compromiso</li>
      </ol>
      <h2>Prevención</h2>
      <ul>
        <li>Presupuestos detallados con alcance claro</li>
        <li>Cambios siempre confirmados por escrito</li>
        <li>Facturas detalladas con <a href="/invoicing">software de facturación</a></li>
        <li>Seguimiento regular durante el proyecto</li>
      </ul>
      <p>Ver también nuestra <a href="/blog/credit-notes-and-invoice-corrections">guía de abonos y correcciones</a>.</p>
    `
  },
  {
    slug: 'credit-notes-and-invoice-corrections',
    title: 'Facturas rectificativas y abonos: cuándo y cómo usarlos (Guía 2026)',
    excerpt: '¿Qué es una factura rectificativa? ¿Cuándo emitir un abono? Guía paso a paso con ejemplos.',
    category: 'Invoicing and Billing Tips',
    tags: ['facturación', 'abonos', 'rectificativas', 'cumplimiento'],
    author: defaultAuthor, date: '2026-01-25', dateModified: '2026-02-19', readTime: '6 min de lectura',
    featuredImage: '/images/blog/credit-notes-corrections.jpg',
    featuredImageAlt: 'Factura rectificativa para correcciones de facturación',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['factura rectificativa', 'abono', 'corrección factura', 'nota de crédito'],
    priority: 'P2',
    content: `
      <p>Los errores de facturación ocurren. Una factura rectificativa es la herramienta profesional para corregir errores sin eliminar la factura original.</p>
      <h2>¿Qué es una factura rectificativa?</h2>
      <p>Un documento que reduce total o parcialmente el importe de una factura ya emitida, referenciando la factura original. En España, las facturas rectificativas están reguladas por el Reglamento de facturación (RD 1619/2012).</p>
      <h2>Cuándo emitir una</h2>
      <ul>
        <li><strong>Devoluciones de mercancía</strong></li>
        <li><strong>Entrega parcial:</strong> Menos de lo acordado</li>
        <li><strong>Error de facturación:</strong> Importes, cantidades o conceptos incorrectos</li>
        <li><strong>Descuento posterior a la emisión</strong></li>
        <li><strong>Cancelación del pedido</strong></li>
      </ul>
      <h2>Rectificativa vs anulación vs devolución</h2>
      <ul>
        <li><strong>Rectificativa:</strong> Reduce el saldo — puede compensarse con facturas futuras</li>
        <li><strong>Anulación:</strong> Cancela completamente la factura original</li>
        <li><strong>Devolución:</strong> Reembolso efectivo de dinero ya cobrado</li>
      </ul>
      <h2>Datos obligatorios</h2>
      <ul>
        <li>Serie y número propio</li>
        <li>Referencia a la factura original</li>
        <li>Fecha de emisión</li>
        <li>Motivo de la rectificación</li>
        <li>Importe corregido con ajuste de IVA</li>
      </ul>
      <h2>Impacto fiscal</h2>
      <p>La rectificativa reduce el IVA repercutido del periodo. El ajuste de IVA debe indicarse por separado. Conservar durante el periodo legal (4 años en España).</p>
      <h2>Errores comunes</h2>
      <ul>
        <li>No referenciar la factura original</li>
        <li>Cálculo de IVA incorrecto</li>
        <li>Documentación insuficiente</li>
        <li>Emisión tardía</li>
      </ul>
      <p>Con <a href="/invoicing">Invoicemonk</a>, crea rectificativas con un clic desde la factura original.</p>
    `
  }
];

registerBlogPosts('es', posts);
