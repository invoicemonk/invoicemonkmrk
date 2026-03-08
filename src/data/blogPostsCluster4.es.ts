import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 13a: Estimates & Proposals cluster posts — Spanish translations
 */
const posts: BlogPost[] = [
  {
    slug: 'proposal-vs-estimate-vs-quote-explained',
    title: 'Propuesta vs Presupuesto vs Cotización: ¿Cuál es la diferencia?',
    excerpt: '¿Confundido entre propuestas, presupuestos y cotizaciones? Aprende las diferencias clave, cuándo usar cada documento y cómo afectan tus relaciones con clientes.',
    category: 'Estimates and Proposals',
    tags: ['propuestas', 'presupuestos', 'cotizaciones', 'documentos comerciales', 'gestión de clientes', 'precios'],
    author: defaultAuthor, date: '2025-12-01', dateModified: '2026-02-04', readTime: '8 min de lectura',
    featuredImage: '/blog/proposal-vs-quote.jpg',
    featuredImageAlt: 'Comparación entre propuesta, presupuesto y cotización',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['propuesta vs presupuesto', 'presupuesto vs cotización', 'propuesta comercial', 'cotización de precios'],
    priority: 'P2',
    content: `
      <p>Propuestas, presupuestos y cotizaciones — muchos empresarios usan estos términos indistintamente, pero en realidad son documentos diferentes con propósitos, implicaciones legales y casos de uso distintos.</p>
      <p>Usar el documento incorrecto puede llevar a ampliaciones de alcance, disputas de precios y clientes perdidos. Esta guía aclara las diferencias para que siempre envíes el documento correcto.</p>

      <h2>Comparación rápida</h2>
      <table>
        <thead>
          <tr><th>Característica</th><th>Propuesta</th><th>Presupuesto</th><th>Cotización</th></tr>
        </thead>
        <tbody>
          <tr><td>Propósito</td><td>Convencer y vender</td><td>Costo aproximado</td><td>Oferta de precio fijo</td></tr>
          <tr><td>¿Precio vinculante?</td><td>No</td><td>No</td><td>Generalmente sí</td></tr>
          <tr><td>Nivel de detalle</td><td>Alto (estrategia + precio)</td><td>Moderado</td><td>Partidas específicas</td></tr>
          <tr><td>¿Incluye alcance?</td><td>Alcance detallado + enfoque</td><td>Alcance breve</td><td>Entregables específicos</td></tr>
          <tr><td>Longitud típica</td><td>2–10 páginas</td><td>1–2 páginas</td><td>1 página</td></tr>
          <tr><td>Período de validez</td><td>30 días típico</td><td>30 días típico</td><td>14–30 días</td></tr>
        </tbody>
      </table>

      <h2>¿Qué es una propuesta?</h2>
      <p>Una propuesta es un documento integral diseñado para convencer a un cliente de contratarte. Va más allá del precio y muestra tu enfoque, experiencia y por qué eres la mejor opción.</p>

      <h2>¿Qué es un presupuesto?</h2>
      <p>Un presupuesto proporciona una estimación aproximada del costo de un proyecto. No es vinculante y puede cambiar a medida que se define mejor el alcance.</p>

      <h2>¿Qué es una cotización?</h2>
      <p>Una cotización es una oferta de precio fijo y vinculante para un servicio definido. Una vez que el cliente la acepta, estás obligado a entregar al precio indicado.</p>

      <h2>Diferencias legales</h2>
      <ul>
        <li><strong>Propuestas:</strong> Generalmente no vinculantes. Son invitaciones a negociar.</li>
        <li><strong>Presupuestos:</strong> No vinculantes. Establecen expectativas pero permiten ajustes.</li>
        <li><strong>Cotizaciones:</strong> Generalmente consideradas vinculantes durante el período de validez. En España y Latinoamérica, las obligaciones varían según la legislación local.</li>
      </ul>

      <h2>Elegir el documento correcto</h2>
      <ol>
        <li><strong>El cliente pregunta "¿cuánto cuesta aproximadamente?":</strong> Envía un presupuesto</li>
        <li><strong>El cliente pregunta "¿cuál es el precio exacto?":</strong> Envía una cotización</li>
        <li><strong>El cliente pregunta "¿pueden ayudarme con este proyecto?":</strong> Envía una propuesta</li>
        <li><strong>Licitación:</strong> Siempre una propuesta</li>
        <li><strong>Tarea pequeña y definida:</strong> Una cotización suele ser suficiente</li>
      </ol>

      <p>Crea documentos profesionales con <a href="/__LANG__/estimates">las herramientas de presupuestos de Invoicemonk</a> y conviértelos en facturas con un clic.</p>
    `,
    faq: [
      { question: '¿Una cotización es legalmente vinculante?', answer: 'Generalmente sí — una cotización se considera vinculante durante su período de validez. Una vez que el cliente acepta el precio cotizado, se espera que entregues al precio indicado. Por eso las cotizaciones deben incluir fecha de vencimiento y definición clara del alcance.' },
      { question: '¿Debo enviar un presupuesto o cotización a un nuevo cliente?', answer: 'Comienza con un presupuesto si el alcance no está completamente definido, o con una propuesta si necesitas explicar tu enfoque. Pasa a la cotización formal una vez acordado el alcance.' }
    ]
  },
  {
    slug: 'winning-proposal-templates-by-industry',
    title: 'Plantillas de propuestas ganadoras por industria: Personaliza para el éxito',
    excerpt: 'Obtén plantillas de propuestas específicas por industria para consultoría, diseño, marketing, TI y más. Aprende a adaptar tus propuestas para ganar clientes en cualquier sector.',
    category: 'Estimates and Proposals',
    tags: ['plantillas de propuestas', 'propuestas comerciales', 'plantillas por industria', 'adquisición de clientes'],
    author: defaultAuthor, date: '2025-10-28', dateModified: '2026-02-04', readTime: '10 min de lectura',
    featuredImage: '/blog/proposal-templates-industry.jpg',
    featuredImageAlt: 'Plantillas de propuestas profesionales para diferentes industrias',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['plantilla propuesta', 'propuesta comercial plantilla', 'propuesta consultoría'],
    priority: 'P2',
    content: `
      <p>La propuesta perfecta comienza con entender tu industria. Lo que funciona en consultoría fracasa en diseño web — y viceversa. Esta guía ofrece plantillas probadas para cada sector.</p>

      <h2>Por qué las propuestas específicas por industria funcionan mejor</h2>
      <p>Las propuestas genéricas señalan que tratas a todos los clientes igual. Las propuestas específicas demuestran que entiendes los desafíos únicos del cliente.</p>

      <h2>Plantilla de propuesta de consultoría</h2>
      <ul>
        <li><strong>Análisis de situación:</strong> Muestra comprensión profunda de los desafíos del negocio</li>
        <li><strong>Metodología:</strong> Explica tu framework de consultoría</li>
        <li><strong>Resultados esperados:</strong> Cuantifica el ROI siempre que sea posible</li>
        <li><strong>Casos de estudio:</strong> Clientes similares con resultados medibles</li>
        <li><strong>Biografías del equipo:</strong> Destaca experiencia sectorial relevante</li>
      </ul>

      <h2>Plantilla de diseño web / desarrollo</h2>
      <ul>
        <li><strong>Auditoría del sitio:</strong> Análisis de qué funciona y qué no</li>
        <li><strong>Dirección de diseño:</strong> Moodboards o referencias de estilo</li>
        <li><strong>Especificaciones técnicas:</strong> Plataforma, funcionalidades, integraciones</li>
        <li><strong>Plan de contenido:</strong> Quién proporciona el contenido y en qué formato</li>
        <li><strong>Plan de lanzamiento:</strong> Pruebas, migración y soporte post-lanzamiento</li>
      </ul>

      <h2>Plantilla de marketing / contenido</h2>
      <ul>
        <li><strong>Investigación de mercado:</strong> Panorama competitivo y oportunidades</li>
        <li><strong>Resumen estratégico:</strong> Canales, mensajes y audiencias objetivo</li>
        <li><strong>Calendario de contenido:</strong> Mes de ejemplo con contenido planificado</li>
        <li><strong>KPIs:</strong> Objetivos específicos y medibles</li>
      </ul>

      <h2>Plantilla de TI / servicios técnicos</h2>
      <ul>
        <li><strong>Evaluación de infraestructura:</strong> Estado actual</li>
        <li><strong>Solución propuesta:</strong> Arquitectura técnica y componentes</li>
        <li><strong>Seguridad:</strong> Protección de datos y cumplimiento normativo</li>
        <li><strong>Plan de migración:</strong> Transición sin interrupciones</li>
        <li><strong>SLAs:</strong> Acuerdos de nivel de servicio y soporte</li>
      </ul>

      <p>Crea propuestas profesionales con <a href="/__LANG__/estimates">Invoicemonk</a> y conviértelas en facturas con un clic.</p>
    `,
    faq: [
      { question: '¿Qué longitud debe tener una propuesta comercial?', answer: 'La mayoría de propuestas efectivas tienen 3-8 páginas. Proyectos simples necesitan 2-3 páginas; proyectos complejos pueden requerir 10+ páginas.' },
      { question: '¿Debo usar la misma plantilla para cada cliente?', answer: 'No. Aunque una plantilla base ahorra tiempo, cada propuesta debe personalizarse para el cliente y sector específicos.' }
    ]
  },
  {
    slug: 'document-types-comparison-business',
    title: 'Comparación de tipos de documentos comerciales: Facturas, recibos, órdenes de compra y más',
    excerpt: 'Entiende las diferencias entre facturas, recibos, órdenes de compra, notas de crédito y otros documentos comerciales. Aprende cuándo usar cada uno.',
    category: 'Estimates and Proposals',
    tags: ['documentos comerciales', 'facturas', 'recibos', 'órdenes de compra', 'notas de crédito'],
    author: defaultAuthor, date: '2025-09-18', dateModified: '2026-02-04', readTime: '9 min de lectura',
    featuredImage: '/blog/business-documents-comparison.jpg',
    featuredImageAlt: 'Diferentes documentos comerciales comparados',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['documentos comerciales comparación', 'factura vs recibo', 'orden de compra vs factura'],
    priority: 'P2',
    content: `
      <p>Comprender los diferentes documentos comerciales es esencial para una contabilidad y cumplimiento adecuados. Esta guía explica cada documento y cuándo usarlo.</p>

      <h2>Tabla comparativa</h2>
      <table>
        <thead>
          <tr><th>Documento</th><th>Creado por</th><th>Propósito</th><th>¿Legalmente vinculante?</th></tr>
        </thead>
        <tbody>
          <tr><td>Factura</td><td>Vendedor</td><td>Solicitud de pago</td><td>Sí</td></tr>
          <tr><td>Recibo</td><td>Vendedor</td><td>Confirmación de pago</td><td>Comprobante de pago</td></tr>
          <tr><td>Orden de compra</td><td>Comprador</td><td>Autorizar una compra</td><td>Sí, al ser aceptada</td></tr>
          <tr><td>Cotización</td><td>Vendedor</td><td>Oferta de precio fijo</td><td>Vinculante durante la validez</td></tr>
          <tr><td>Presupuesto</td><td>Vendedor</td><td>Costo aproximado</td><td>No</td></tr>
          <tr><td>Propuesta</td><td>Vendedor</td><td>Vender solución + precio</td><td>No</td></tr>
          <tr><td>Factura proforma</td><td>Vendedor</td><td>Estimación pre-entrega</td><td>No</td></tr>
          <tr><td>Nota de crédito</td><td>Vendedor</td><td>Reducir monto facturado</td><td>Sí</td></tr>
          <tr><td>Albarán</td><td>Vendedor</td><td>Confirmar entrega</td><td>Prueba de entrega</td></tr>
        </tbody>
      </table>

      <h2>Facturas</h2>
      <p>Una factura es una solicitud formal de pago emitida por el vendedor después de entregar bienes o servicios. En España, la factura es obligatoria para todas las transacciones entre profesionales según la normativa de la AEAT.</p>

      <h2>Recibos</h2>
      <p>Un recibo confirma que el pago ha sido recibido. Es emitido por el vendedor al comprador como comprobante de compra.</p>

      <h2>Órdenes de compra</h2>
      <p>Una orden de compra es creada por el comprador para autorizar una compra al vendedor.</p>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/__LANG__/blog/complete-guide-to-business-invoicing">Guía completa de facturación empresarial</a></li>
        <li><a href="/__LANG__/blog/proposal-vs-estimate-vs-quote-explained">Propuesta vs Presupuesto vs Cotización</a></li>
        <li><a href="/__LANG__/blog/credit-notes-and-invoice-corrections">Notas de crédito y correcciones</a></li>
      </ul>
    `,
    faq: [
      { question: '¿Cuál es la diferencia entre una factura y un recibo?', answer: 'Una factura es una solicitud de pago emitida antes del pago. Un recibo es una confirmación después del pago. Ambos son importantes para la contabilidad.' },
      { question: '¿Necesito una orden de compra para cada transacción?', answer: 'No necesariamente. Las órdenes de compra son más comunes en compras corporativas y gubernamentales. Las pequeñas empresas generalmente prescinden de ellas para compras rutinarias.' }
    ]
  }
];

registerBlogPosts('es', posts);
