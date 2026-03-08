import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const posts: BlogPost[] = [
  {
    slug: 'complete-guide-to-business-invoicing',
    title: 'La guía completa de facturación empresarial: todo lo que necesitas saber',
    excerpt: 'Domina la facturación profesional para cobrar más rápido, ganar credibilidad y mantener tus finanzas organizadas. Esta guía integral cubre todo, desde lo básico hasta estrategias avanzadas.',
    category: 'Invoicing and Billing Tips',
    tags: ['Facturación', 'Cobros', 'Pagos', 'Pequeñas empresas', 'Plantilla de factura', 'Condiciones de pago'],
    author: defaultAuthor,
    date: '2026-01-31',
    dateModified: '2026-02-03',
    readTime: '18 min de lectura',
    featuredImage: '/images/blog/invoicing-platform-overview.jpg',
    featuredImageAlt: 'Gestión profesional de facturación y guía completa de facturas',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/invoicing',
    semanticKeywords: ['facturación empresarial', 'factura profesional', 'gestión de facturas', 'plantilla de factura', 'cobro', 'buenas prácticas de facturación'],
    priority: 'P1',
    content: `
      <p><strong>En 2026, el 58% de las empresas reportan que los retrasos en los pagos afectan significativamente su flujo de caja.</strong> Aún más llamativo: la factura promedio se paga con 8,3 días de retraso. La facturación es el alma de cualquier negocio — sin un sistema adecuado, los pagos se vuelven impredecibles, el flujo de caja sufre y tu imagen profesional se deteriora.</p>
      <p>Ya seas freelancer enviando tu primera factura o empresario buscando optimizar tu proceso de cobro, esta guía completa te enseñará todo sobre facturación profesional.</p>

      <h2>El estado de la facturación en 2026</h2>
      <ul>
        <li><strong>58% de las empresas</strong> afirman que los retrasos en pagos perjudican su flujo de caja</li>
        <li><strong>83% de los retrasos</strong> son causados por errores en la factura o confusión del cliente</li>
        <li><strong>Empresas con software de facturación</strong> cobran en promedio 14 días antes</li>
        <li><strong>La facturación móvil creció un 47%</strong> interanual en mercados emergentes</li>
        <li><strong>64% de los freelancers</strong> citan el flujo de caja como su mayor desafío empresarial</li>
      </ul>

      <h2>¿Qué es una factura y por qué es importante?</h2>
      <p>Una factura es un documento formal que solicita el pago por bienes o servicios prestados. Pero es mucho más que una simple solicitud de pago — es una prueba legal de la transacción, un reflejo de tu profesionalismo y a menudo la última impresión que un cliente tiene antes de decidir pagar.</p>
      <ul>
        <li><strong>Protección legal:</strong> Las facturas crean un registro documental que te protege a ti y a tu cliente</li>
        <li><strong>Cumplimiento fiscal:</strong> Facturas correctas son imprescindibles para declaraciones de IVA y preparación ante inspecciones</li>
        <li><strong>Gestión de flujo de caja:</strong> El seguimiento de facturas ayuda a prever ingresos y gestionar gastos</li>
        <li><strong>Análisis comercial:</strong> Los datos de facturación revelan qué servicios son más rentables</li>
      </ul>

      <h2>Los elementos esenciales de una factura profesional</h2>
      <h3>Tu información comercial</h3>
      <p>Empieza con tus datos completos: razón social, logo, dirección, teléfono, e-mail y web. Si estás dado de alta en el IVA, incluye tu NIF/CIF.</p>
      <h3>Información del cliente</h3>
      <p>Indica el nombre completo o razón social, dirección de facturación y persona de contacto principal.</p>
      <h3>Número de factura</h3>
      <p>Cada factura necesita un identificador único. La mayoría de empresas usan un sistema secuencial (FACT-001, FACT-002) o códigos con fecha (FACT-2026-01-001).</p>
      <h3>Fecha de emisión y fecha de vencimiento</h3>
      <p>Sé preciso con ambas fechas. Expresiones vagas como "pago al recibir" son menos eficaces que fechas concretas como "Vencimiento: 15 de febrero de 2026".</p>
      <h3>Descripción detallada</h3>
      <p>Lista cada partida con descripción clara, cantidad, precio unitario y subtotal. Los clientes pagan más rápido cuando entienden exactamente por qué están pagando.</p>
      <h3>Subtotal, impuestos y total</h3>
      <p>Muestra el subtotal, luego los impuestos aplicables (IVA al 21%, 10% o 4%) y finalmente el importe total.</p>
      <h3>Condiciones y métodos de pago</h3>
      <p>Especifica los métodos de pago aceptados e incluye datos bancarios o enlaces de pago. Cuanto más fácil sea pagar, más rápido cobrarás.</p>

      <h2>Elegir las condiciones de pago adecuadas</h2>
      <ul>
        <li><strong>Pago al contado:</strong> Pago inmediato tras recibir la factura</li>
        <li><strong>15/30/60 días:</strong> Pago en 15, 30 o 60 días</li>
        <li><strong>2/10 Neto 30:</strong> 2% de descuento si se paga en 10 días</li>
        <li><strong>50% de anticipo:</strong> Mitad por adelantado, resto a la entrega</li>
        <li><strong>Pagos por hitos:</strong> Pagos vinculados al avance del proyecto</li>
      </ul>

      <h2>Errores comunes de facturación y cómo evitarlos</h2>
      <h3>Envío tardío</h3>
      <p>Cuanto más tardes en enviar, más tardarás en cobrar. Factura en cuanto termines el trabajo. Un <a href="/invoicing">software de facturación</a> facilita esto.</p>
      <h3>Descripciones vagas</h3>
      <p>No escribas "Servicios de consultoría — 5.000 €". Detalla: "Consultoría de estrategia de marketing (20 horas a 250 €/h), 1-15 enero 2026, incluyendo análisis competitivo y plan de acción a 90 días."</p>
      <h3>Información faltante o incorrecta</h3>
      <p>Verifica nombres, direcciones e importes antes de enviar. Los errores requieren correcciones que retrasan el cobro.</p>
      <h3>Instrucciones de pago confusas</h3>
      <p>Proporciona todos los detalles: banco, IBAN, BIC o enlaces de pago directos.</p>
      <h3>Falta de seguimiento</h3>
      <p>Establece un sistema de cobro: recordatorio amable antes del vencimiento, recordatorio cortés el día del vencimiento y avisos progresivamente más firmes después.</p>

      <h2>Cómo un software de facturación transforma tu negocio</h2>
      <p>Un <a href="/invoicing">software de facturación profesional</a> resuelve los problemas de la facturación manual:</p>
      <ul>
        <li><strong>Plantillas:</strong> Crea facturas en minutos con tu identidad visual</li>
        <li><strong>Automatización:</strong> Programa facturas recurrentes para clientes habituales</li>
        <li><strong>Seguimiento:</strong> Ve al instante qué facturas están pagadas, pendientes o vencidas</li>
        <li><strong>Recordatorios:</strong> Avisos automáticos de cobro</li>
        <li><strong>Informes:</strong> Entiende tu facturación y patrones de pago</li>
        <li><strong>Cumplimiento fiscal:</strong> Informes de IVA y documentos preparados para inspecciones</li>
      </ul>

      <h2>Aspectos fiscales de la facturación</h2>
      <h3>Identificación fiscal</h3>
      <p>Incluye tu NIF/CIF en las facturas — es obligatorio en España.</p>
      <h3>Cálculo de impuestos</h3>
      <p>Muestra claramente: base imponible, tipo de IVA (21%, 10% o 4%), cuota de IVA y total con impuestos.</p>
      <h3>Conservación</h3>
      <p>Conserva copias de todas las facturas durante el periodo legal — 4 años en España para efectos del IVA. El almacenamiento digital es aceptado.</p>

      <h2>Estrategias para cobrar más rápido</h2>
      <ul>
        <li><strong>Ofrecer descuento:</strong> "2% de descuento si se paga en 10 días"</li>
        <li><strong>Aceptar múltiples métodos de pago</strong></li>
        <li><strong>Enviar facturas inmediatamente</strong></li>
        <li><strong>Cultivar relaciones:</strong> Los clientes priorizan los pagos a personas que valoran</li>
        <li><strong>Pedir anticipo a nuevos clientes</strong></li>
      </ul>
      <p>Para estrategias detalladas, consulta nuestra guía para <a href="/blog/ultimate-guide-getting-paid-faster">cobrar más rápido</a>.</p>

      <h2>Próximos pasos</h2>
      <ol>
        <li>Revisa tus facturas actuales según las buenas prácticas de esta guía</li>
        <li>Crea o actualiza tu plantilla de factura con todos los elementos esenciales</li>
        <li>Define condiciones de pago claras y comunícalas a tus clientes</li>
        <li>Implementa un sistema de seguimiento de facturas y cobros</li>
        <li>Considera un <a href="/invoicing">software de facturación profesional</a> para automatizar</li>
      </ol>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/blog/invoicemonk-template-how-to-create-a-perfect-invoice-template">Cómo crear la plantilla de factura perfecta</a></li>
        <li><a href="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners">5 elementos esenciales de una factura</a></li>
        <li><a href="/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently">La importancia de facturar a tiempo</a></li>
        <li><a href="/blog/ultimate-guide-getting-paid-faster">La guía definitiva para cobrar más rápido</a></li>
      </ul>
    `
  },
  {
    slug: 'ultimate-guide-getting-paid-faster',
    title: 'La guía definitiva para cobrar más rápido: estrategias de flujo de caja para pequeñas empresas',
    excerpt: 'Basta de perseguir pagos. Descubre estrategias probadas para acelerar tu flujo de caja, reducir retrasos y construir un negocio que cobra a tiempo.',
    category: 'Finance',
    tags: ['Pagos', 'Flujo de caja', 'Cuentas por cobrar', 'Retrasos de pago', 'Pequeñas empresas'],
    author: defaultAuthor, date: '2026-01-31', readTime: '16 min de lectura',
    featuredImage: '/images/blog/automatic-payment-reminders.jpg',
    featuredImageAlt: 'Estrategias para pagos más rápidos y flujo de caja mejorado',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/payments',
    semanticKeywords: ['cobrar más rápido', 'gestión de flujo de caja', 'cobros', 'gestión de cuentas por cobrar'],
    priority: 'P1',
    content: `
      <p>El flujo de caja es el oxígeno del negocio. Puedes tener el mejor producto, los clientes más satisfechos y un pipeline lleno — pero si no cobras a tiempo, tu empresa se asfixia.</p>
      <p>¿La buena noticia? Cobrar más rápido no es cuestión de suerte. Es cuestión de implementar sistemas que hagan del pago puntual el camino más fácil.</p>

      <h2>Por qué el flujo de caja importa más que el beneficio</h2>
      <p>Empresas rentables quiebran — porque el beneficio en papel no paga tus facturas. Necesitas dinero en la cuenta, no cuentas por cobrar pendientes.</p>
      <ul>
        <li>Proveedores, empleados y alquiler deben pagarse en fechas fijas</li>
        <li>Las oportunidades de crecimiento requieren capital disponible</li>
        <li>Las emergencias no esperan pagos de clientes</li>
        <li>La incertidumbre de caja afecta tu toma de decisiones</li>
      </ul>

      <h2>Establecer expectativas de pago antes de empezar</h2>
      <h3>Formalizar condiciones por escrito</h3>
      <p>Nunca asumas que los clientes entienden tus condiciones. Inclúyelas en presupuestos, contratos y propuestas.</p>
      <h3>Hablar abiertamente del pago</h3>
      <p>Muchos empresarios evitan el tema del dinero. Los clientes esperan pagar por el valor — hablar de pago es profesional, no agresivo.</p>
      <h3>Pedir anticipo a nuevos clientes</h3>
      <p>Un anticipo mejora tu flujo de caja y filtra clientes que quizás no paguen.</p>

      <h2>Métodos de pago: facilita el cobro</h2>
      <h3>Pagos online</h3>
      <p>Acepta tarjetas y transferencias bancarias online. Sí, hay comisiones — pero la rapidez y comodidad suelen compensar.</p>
      <h3>Múltiples opciones</h3>
      <p>Diferentes clientes prefieren diferentes métodos. Ofrece varias opciones con instrucciones claras en tus facturas.</p>
      <h3>Enlaces directos</h3>
      <p>Incluye enlaces de pago en facturas y recordatorios por email. Menos clics = menos retrasos.</p>

      <h2>Buenas prácticas de facturación para cobrar rápido</h2>
      <h3>Facturar inmediatamente</h3>
      <p>Envía facturas el día de la entrega. Cada día de retraso es un día más sin cobrar. Usa un <a href="/invoicing">software de facturación</a>.</p>
      <h3>Ser claro y detallado</h3>
      <p>La confusión retrasa el pago. Consulta nuestra <a href="/blog/complete-guide-to-business-invoicing">guía completa de facturación</a>.</p>
      <h3>Usar plantillas profesionales</h3>
      <p>Las facturas con aspecto profesional se toman más en serio.</p>

      <h2>Recordatorios automáticos de pago</h2>
      <h3>Antes del vencimiento</h3>
      <p>Envía un recordatorio amable 3-5 días antes de la fecha de vencimiento.</p>
      <h3>El día del vencimiento</h3>
      <p>Si no hay pago, envía otro recordatorio profesional.</p>
      <h3>Después del vencimiento</h3>
      <p>Escala progresivamente. A los 7 días, un aviso más firme. A los 14 días, una llamada. A los 30 días, considera medidas formales.</p>
      <h3>Automatizar el proceso</h3>
      <p>Un <a href="/invoicing">software de facturación</a> puede enviar estos recordatorios automáticamente.</p>

      <h2>Gestionar retrasos con profesionalismo</h2>
      <ul>
        <li><strong>Mantener la profesionalidad:</strong> El enfado rara vez acelera el pago</li>
        <li><strong>Entender la razón:</strong> ¿Problema de caja? ¿Disputa? ¿Olvido?</li>
        <li><strong>Ofrecer soluciones:</strong> Planes de pago para clientes con dificultades</li>
        <li><strong>Aplicar recargos por mora (si están acordados)</strong></li>
        <li><strong>Saber cuándo escalar</strong></li>
      </ul>

      <h2>Anticipos y pagos progresivos</h2>
      <ul>
        <li><strong>Anticipos:</strong> 25-50% por adelantado para nuevos clientes o grandes proyectos</li>
        <li><strong>Facturación por hitos:</strong> Facturar en cada hito, no solo al final</li>
        <li><strong>Facturación periódica:</strong> Semanal o quincenal en vez de mensual</li>
        <li><strong>Contratos recurrentes:</strong> Pago mensual anticipado para relaciones continuas</li>
      </ul>

      <h2>Tecnología y herramientas de cobro</h2>
      <ul>
        <li><strong>Software de facturación:</strong> Crear facturas profesionales y seguir pagos</li>
        <li><strong>Pago online:</strong> Aceptar tarjetas y transferencias fácilmente</li>
        <li><strong>Recordatorios automáticos:</strong> Sin intervención manual</li>
        <li><strong>Integración contable:</strong> Conectar facturación y contabilidad</li>
      </ul>
      <p><a href="/payments">Invoicemonk</a> ofrece todas estas funcionalidades en una plataforma integrada.</p>

      <h2>Plan de acción</h2>
      <ol>
        <li><strong>Hoy:</strong> Revisar tus condiciones de pago actuales y actualizarlas si es necesario</li>
        <li><strong>Esta semana:</strong> Configurar recordatorios automáticos</li>
        <li><strong>Este mes:</strong> Añadir nuevos métodos de pago</li>
        <li><strong>De forma continua:</strong> Seguir indicadores de pago y mejorar continuamente</li>
      </ol>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/blog/complete-guide-to-business-invoicing">La guía completa de facturación empresarial</a></li>
        <li><a href="/blog/small-business-accounting-guide">Guía de contabilidad para pequeñas empresas</a></li>
        <li><a href="/payments">Aceptar pagos online con Invoicemonk</a></li>
      </ul>
    `
  },
  {
    slug: 'small-business-accounting-guide',
    title: 'Fundamentos de contabilidad para pequeñas empresas: la guía completa para emprendedores (2026)',
    excerpt: 'Domina la contabilidad en 7 pasos sencillos. Plan de cuentas, fundamentos, caja vs. devengo, estados financieros e informes fiscales.',
    category: 'Small Business',
    tags: ['Contabilidad', 'Teneduría de libros', 'Estados financieros', 'Pequeñas empresas', 'Preparación fiscal'],
    author: defaultAuthor, date: '2026-01-31', dateModified: '2026-02-19', readTime: '25 min de lectura',
    featuredImage: '/images/blog/small-business-accounting-basics.jpg',
    featuredImageAlt: 'Fundamentos de contabilidad para nuevos emprendedores',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/accounting',
    semanticKeywords: ['contabilidad pequeña empresa', 'contabilidad para emprendedores', 'fundamentos contables'],
    priority: 'P1',
    content: `
      <p>La contabilidad puede parecer intimidante, pero es simplemente el idioma de los negocios. Ya seas un nuevo emprendedor o un empresario buscando dominar tus finanzas, entender los fundamentos es esencial.</p>

      <h2>Contabilidad en 7 pasos</h2>
      <ol>
        <li><strong>Separar finanzas personales y empresariales:</strong> Abre cuentas bancarias dedicadas</li>
        <li><strong>Elegir tu método contable:</strong> Caja o devengo</li>
        <li><strong>Configurar un plan de cuentas:</strong> Crear categorías estandarizadas</li>
        <li><strong>Registrar todas las transacciones:</strong> Ingresos, gastos y transferencias</li>
        <li><strong>Conciliar cuentas mensualmente:</strong> Comparar con extractos bancarios</li>
        <li><strong>Elaborar estados financieros:</strong> Cuenta de resultados, balance y flujo de caja</li>
        <li><strong>Analizar regularmente:</strong> Usar datos para decisiones informadas</li>
      </ol>

      <h2>Los fundamentos</h2>
      <h3>La ecuación contable</h3>
      <p>Activo = Pasivo + Patrimonio Neto. Esta ecuación es la base de toda la contabilidad.</p>
      <h3>Ingresos vs. Beneficio</h3>
      <p>Los ingresos son el dinero que entra. El beneficio es lo que queda después de los gastos.</p>
      <h3>Criterio de caja vs. devengo</h3>
      <p>El criterio de caja registra en el momento del cobro o pago. El devengo registra cuando nace el derecho u obligación, independientemente del pago.</p>

      <h2>Criterio de caja vs. devengo en detalle</h2>
      <h3>Criterio de caja</h3>
      <p>Registras ingresos al cobrar y gastos al pagar. Más simple y muestra tu situación de tesorería real.</p>
      <p><strong>Ideal para:</strong> Autónomos, freelancers, consultores.</p>
      <h3>Criterio de devengo</h3>
      <p>Registras ingresos cuando nace el derecho y gastos cuando surge la obligación. Ofrece una imagen más fiel del rendimiento.</p>
      <p><strong>Ideal para:</strong> Sociedades mercantiles, empresas con condiciones de pago complejas.</p>

      <h2>Entendiendo el plan de cuentas</h2>
      <p>El plan de cuentas es la columna vertebral de tu sistema contable — una lista organizada de todas las categorías para clasificar transacciones.</p>
      <ol>
        <li><strong>Activo:</strong> Caja, cuentas bancarias, clientes, existencias, inmovilizado</li>
        <li><strong>Pasivo:</strong> Proveedores, préstamos, deudas fiscales</li>
        <li><strong>Patrimonio Neto:</strong> Capital social, reservas</li>
        <li><strong>Ingresos:</strong> Ventas, otros ingresos</li>
        <li><strong>Gastos:</strong> Compras, alquiler, personal, marketing</li>
      </ol>

      <h2>Estados financieros esenciales</h2>
      <h3>Cuenta de Pérdidas y Ganancias</h3>
      <p>Muestra ingresos, gastos y resultado en un periodo. Revísala mensualmente.</p>
      <h3>Balance de Situación</h3>
      <p>Fotografía del activo y pasivo en un momento dado.</p>
      <h3>Estado de Flujos de Efectivo</h3>
      <p>Rastrea los movimientos reales de dinero — esencial porque empresas rentables pueden quedarse sin liquidez.</p>

      <h2>Buenas prácticas de teneduría</h2>
      <ul>
        <li><strong>Separar empresa y personal</strong> — innegociable</li>
        <li><strong>Registrar todo — a diario</strong></li>
        <li><strong>Conservar justificantes</strong> — el formato digital es aceptado</li>
        <li><strong>Conciliar mensualmente</strong></li>
        <li><strong>Usar software contable</strong> como <a href="/accounting">Invoicemonk</a></li>
      </ul>

      <h2>Nociones fiscales</h2>
      <h3>Pagos fraccionados</h3>
      <p>Reserva el 25-30% de tus beneficios para impuestos — no esperes a fin de año.</p>
      <h3>Gastos deducibles comunes</h3>
      <ul>
        <li>Despacho en casa</li>
        <li>Gastos de desplazamiento profesional</li>
        <li>Seguro de salud (para autónomos)</li>
        <li>Formación profesional</li>
        <li>Suscripciones de software</li>
      </ul>
      <p>Para más detalles, consulta nuestra <a href="/blog/small-business-tax-compliance-guide">guía de cumplimiento fiscal</a>.</p>

      <h2>Cuándo contratar un asesor fiscal</h2>
      <ul>
        <li>Tu situación fiscal es compleja</li>
        <li>Dedicas demasiado tiempo a la contabilidad</li>
        <li>Tomas decisiones sin datos financieros claros</li>
        <li>Planeas cambios importantes (expansión, cambio de forma jurídica)</li>
      </ul>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/blog/small-business-tax-compliance-guide">Guía de cumplimiento fiscal</a></li>
        <li><a href="/blog/complete-guide-to-business-invoicing">Guía completa de facturación</a></li>
        <li><a href="/accounting">Contabilidad con Invoicemonk</a></li>
      </ul>
    `
  },
  {
    slug: 'small-business-tax-compliance-guide',
    title: 'Guía de cumplimiento fiscal para pequeñas empresas: preparado para inspecciones y maximizando deducciones',
    excerpt: 'Navega tus obligaciones fiscales con confianza. Aprende las reglas de conservación, deducciones comunes y estrategias de cumplimiento.',
    category: 'Small Business',
    tags: ['Cumplimiento fiscal', 'Deducciones fiscales', 'Inspección', 'Conservación', 'IVA'],
    author: defaultAuthor, date: '2026-01-31', readTime: '17 min de lectura',
    featuredImage: '/images/blog/tax-calendar.jpg',
    featuredImageAlt: 'Cumplimiento fiscal y deducciones para pequeñas empresas',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/compliance',
    semanticKeywords: ['cumplimiento fiscal', 'impuestos pequeña empresa', 'deducciones fiscales', 'inspección fiscal'],
    priority: 'P1',
    content: `
      <p>El cumplimiento fiscal es uno de los aspectos menos emocionantes del emprendimiento — pero los errores pueden ser catastróficos. Sanciones, intereses, inspecciones y, en casos extremos, consecuencias legales pueden destruir un negocio sano.</p>

      <h2>Entender tus obligaciones fiscales</h2>
      <h3>IRPF / Impuesto de Sociedades</h3>
      <p>Pagas impuestos sobre el beneficio de tu negocio. El funcionamiento depende de tu forma jurídica (autónomo, SL, SA…).</p>
      <h3>IVA</h3>
      <p>Como empresario o profesional, debes repercutir y liquidar el IVA. Atención a los regímenes especiales y al recargo de equivalencia.</p>
      <h3>IAE</h3>
      <p>El Impuesto sobre Actividades Económicas se aplica a empresas con facturación superior a 1 millón de euros.</p>
      <h3>Cotizaciones sociales</h3>
      <p>Con empleados, debes declarar y pagar las cotizaciones a la Seguridad Social (cuota patronal y del trabajador).</p>

      <h2>Reglas de conservación de documentos</h2>
      <h3>Qué conservar</h3>
      <ul>
        <li><strong>Justificantes de ingresos:</strong> Facturas emitidas, extractos bancarios</li>
        <li><strong>Justificantes de gastos:</strong> Facturas de compra, tickets, comprobantes de pago</li>
        <li><strong>Documentos de activos:</strong> Facturas de compra de equipamiento</li>
        <li><strong>Documentos de personal:</strong> Contratos de trabajo, nóminas</li>
        <li><strong>Declaraciones fiscales:</strong> Copias de todas las declaraciones presentadas</li>
      </ul>
      <h3>Plazos de conservación</h3>
      <p>En España, los documentos contables deben conservarse 6 años. A efectos del IVA, 4 años. El archivo digital es aceptado.</p>

      <h2>Deducciones fiscales comunes</h2>
      <h3>Gastos de explotación</h3>
      <ul>
        <li>Alquiler de local comercial</li>
        <li>Suministros (electricidad, internet)</li>
        <li>Material y equipamiento de oficina</li>
        <li>Software y suscripciones</li>
        <li>Seguros profesionales</li>
      </ul>
      <h3>Servicios profesionales</h3>
      <ul><li>Honorarios de asesor fiscal y abogado</li><li>Servicios de consultoría</li></ul>
      <h3>Desplazamientos y representación</h3>
      <ul><li>Viajes de negocios</li><li>Gastos de comidas de empresa (con justificantes)</li><li>Gastos de vehículo profesional</li></ul>
      <h3>Despacho en casa</h3>
      <p>Si trabajas desde casa, puedes deducir una parte de los gastos bajo ciertas condiciones.</p>

      <h2>Plazos y sanciones</h2>
      <ul>
        <li><strong>Declaraciones de IVA (modelo 303):</strong> Trimestrales</li>
        <li><strong>IRPF (modelo 130):</strong> Pagos fraccionados trimestrales</li>
        <li><strong>Declaración anual de la Renta:</strong> Abril-junio del año siguiente</li>
      </ul>
      <p>Los retrasos en declaración y pago generan recargos e intereses de demora significativos.</p>

      <h2>Inspección fiscal</h2>
      <h3>Por qué ocurren las inspecciones</h3>
      <ul>
        <li>Selección aleatoria</li>
        <li>Inconsistencias en tus declaraciones</li>
        <li>Deducciones altas en relación con los ingresos</li>
        <li>Inspecciones sectoriales</li>
      </ul>
      <h3>Estar preparado</h3>
      <ul>
        <li>Mantener documentación organizada y completa</li>
        <li>Documentar el motivo empresarial de los gastos</li>
        <li>Presentar declaraciones a tiempo y correctamente</li>
      </ul>

      <h2>Construir tu sistema de cumplimiento fiscal</h2>
      <ol>
        <li>Identificar tus obligaciones específicas</li>
        <li>Establecer una contabilidad rigurosa desde el primer día</li>
        <li>Anotar todos los plazos en el calendario con recordatorios</li>
        <li>Seguir ingresos y gastos meticulosamente con <a href="/compliance">software adecuado</a></li>
        <li>Provisionar impuestos mientras facturas</li>
        <li>Revisar trimestralmente y hacer pagos fraccionados</li>
      </ol>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/blog/small-business-accounting-guide">Guía de contabilidad para pequeñas empresas</a></li>
        <li><a href="/blog/complete-guide-to-business-invoicing">Guía completa de facturación</a></li>
        <li><a href="/compliance">Facturación conforme con Invoicemonk</a></li>
      </ul>
    `
  },
  {
    slug: 'freelancer-business-guide',
    title: 'La guía completa del freelancer: construye una carrera autónoma exitosa',
    excerpt: 'Todo lo que necesitas para triunfar como freelancer — desde la captación de clientes y la fijación de precios hasta la gestión financiera y el crecimiento de tu negocio.',
    category: 'Freelancing',
    tags: ['Freelance', 'Autónomo', 'Trabajo independiente', 'Trabajo remoto'],
    author: defaultAuthor, date: '2026-01-31', readTime: '22 min de lectura',
    featuredImage: '/images/blog/finding-clients.jpg',
    featuredImageAlt: 'Guía completa para construir un negocio freelance exitoso',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/freelancers',
    semanticKeywords: ['negocio freelance', 'éxito freelance', 'trabajo autónomo', 'finanzas freelance'],
    priority: 'P1',
    content: `
      <p>El trabajo freelance ofrece una libertad que el empleo tradicional no puede ofrecer — eliges tus clientes, defines tu horario y controlas tus ingresos. Pero la libertad conlleva responsabilidad. Como freelancer, no solo ejerces tu profesión — diriges un negocio.</p>

      <h2>Empezar como freelancer</h2>
      <h3>Forma jurídica</h3>
      <p>La mayoría de freelancers empiezan como autónomos (persona física). Al crecer, evalúa si una SL ofrecería mejor protección o ventajas fiscales.</p>
      <h3>Cuenta profesional</h3>
      <p>Abre una cuenta bancaria dedicada a tu actividad. Nunca mezcles finanzas personales y profesionales.</p>
      <h3>Presencia profesional</h3>
      <p>Como mínimo: un email profesional y una forma de que los potenciales clientes conozcan tus servicios.</p>
      <h3>Herramientas y sistemas</h3>
      <p>Configura las herramientas necesarias: software de facturación como <a href="/freelancers">Invoicemonk</a>, gestión de proyectos, control de tiempo.</p>

      <h2>Encontrar tus primeros clientes</h2>
      <h3>Tu red existente</h3>
      <p>Empieza por las personas que conoces. Muchos primeros clientes vienen de contactos personales.</p>
      <h3>Plataformas freelance</h3>
      <p>Plataformas como Upwork, Fiverr y Freelancer.com conectan freelancers con clientes. Consulta nuestra <a href="/blog/top-10-freelance-websites">guía de plataformas freelance</a>.</p>
      <h3>Prospección directa y marketing de contenidos</h3>
      <p>Identifica prospectos y contacta directamente. Comparte tu experiencia a través de artículos y redes sociales.</p>

      <h2>Fijación de precios</h2>
      <h3>Investigar el mercado</h3>
      <p>Infórmate de lo que cobran otros por servicios similares.</p>
      <h3>Modelos de precios</h3>
      <ul>
        <li><strong>Por hora:</strong> Simple y transparente</li>
        <li><strong>Por proyecto:</strong> Alcance y entregables definidos</li>
        <li><strong>Basado en valor:</strong> Precio basado en el valor entregado</li>
        <li><strong>Recurrente:</strong> Cuota mensual fija</li>
      </ul>

      <h2>Gestionar las finanzas freelance</h2>
      <h3>Facturación</h3>
      <p>Factura rápido, profesionalmente y con regularidad. Usa un <a href="/invoicing">software de facturación</a>. Consulta nuestra <a href="/blog/complete-guide-to-business-invoicing">guía de facturación</a>.</p>
      <h3>Impuestos</h3>
      <p>Reserva el 25-30% de tus ingresos para impuestos y cotizaciones. Realiza los pagos fraccionados trimestrales. Ver nuestra <a href="/blog/small-business-tax-compliance-guide">guía de cumplimiento fiscal</a>.</p>

      <h2>Contratos y acuerdos</h2>
      <p>Ten siempre un contrato escrito — incluso con amigos. Elementos esenciales:</p>
      <ul>
        <li><strong>Alcance:</strong> Qué entregas exactamente</li>
        <li><strong>Calendario:</strong> Cuándo se entregan los trabajos</li>
        <li><strong>Condiciones de pago:</strong> Cuánto, cuándo y cómo</li>
        <li><strong>Revisiones:</strong> Qué está incluido, qué es extra</li>
        <li><strong>Propiedad intelectual:</strong> A quién pertenece el trabajo</li>
        <li><strong>Rescisión:</strong> Cómo cada parte puede terminar la colaboración</li>
      </ul>

      <h2>Escalar el negocio</h2>
      <ul>
        <li><strong>Subir precios:</strong> El camino más sencillo para ganar más</li>
        <li><strong>Productizar servicios:</strong> Crear paquetes estandarizados</li>
        <li><strong>Subcontratar:</strong> Aceptar proyectos más grandes y delegar</li>
        <li><strong>Montar agencia:</strong> Contratar y formar un equipo</li>
      </ul>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/blog/top-10-freelance-websites">Top 10 plataformas freelance</a></li>
        <li><a href="/blog/complete-guide-to-business-invoicing">Guía completa de facturación</a></li>
        <li><a href="/blog/ultimate-guide-getting-paid-faster">Cobrar más rápido</a></li>
        <li><a href="/freelancers">Invoicemonk para freelancers</a></li>
      </ul>
    `
  },
  {
    slug: 'winning-proposals-estimates-guide',
    title: 'Presupuestos y propuestas ganadoras: la guía completa para cerrar más contratos',
    excerpt: 'Transforma tus presupuestos en herramientas de venta potentes. Aprende a redactar propuestas y estimaciones que convenzan a los clientes.',
    category: 'Small Business',
    tags: ['Presupuestos', 'Propuestas', 'Ventas', 'Captación', 'Fijación de precios'],
    author: defaultAuthor, date: '2026-01-31', readTime: '19 min de lectura',
    featuredImage: '/images/blog/winning-proposals.jpg',
    featuredImageAlt: 'Guía para redactar presupuestos y propuestas convincentes',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/estimates',
    semanticKeywords: ['propuestas comerciales', 'presupuestos', 'estimación de proyectos'],
    priority: 'P1',
    content: `
      <p>Un presupuesto es tu oportunidad de ganar contratos. Sin embargo, muchos presupuestos no son más que listas de precios — documentos genéricos que compiten solo por tarifa. Las propuestas que ganan consistentemente hacen algo diferente: demuestran comprensión, inspiran confianza y facilitan la decisión.</p>

      <h2>Estimación, presupuesto y propuesta: ¿cuál es la diferencia?</h2>
      <h3>Estimaciones</h3>
      <p>Evaluaciones de coste basadas en información preliminar. No vinculantes — el precio final puede variar.</p>
      <h3>Presupuestos</h3>
      <p>Precios firmes para un trabajo definido. Una vez aceptado, estás comprometido con el precio.</p>
      <h3>Propuestas</h3>
      <p>Documentos completos que venden tu enfoque — no solo tu precio. Para encargos más grandes o complejos.</p>

      <h2>Los elementos de una propuesta convincente</h2>
      <ul>
        <li><strong>Resumen ejecutivo:</strong> De qué trata, qué propones, por qué tú</li>
        <li><strong>Comprensión del problema:</strong> Demuestra que entiendes la situación del cliente</li>
        <li><strong>Solución propuesta:</strong> Metodología y enfoque, centrados en resultados</li>
        <li><strong>Entregables:</strong> Listar exactamente lo que el cliente recibirá</li>
        <li><strong>Cronograma:</strong> Con hitos clave, realista</li>
        <li><strong>Inversión:</strong> Presentar precios claramente, enmarcarlos como inversión</li>
        <li><strong>Sobre ti:</strong> Breve presentación para credibilidad</li>
        <li><strong>Próximos pasos:</strong> Indicar claramente lo que sigue</li>
      </ul>

      <h2>Estrategias de fijación de precios</h2>
      <ul>
        <li><strong>Precio basado en valor:</strong> Precio según el valor entregado, no el tiempo invertido</li>
        <li><strong>Paquetes por niveles:</strong> Ofrecer 2-3 opciones a distintos niveles de precio</li>
        <li><strong>Anclaje de precio:</strong> Presentar la opción más cara primero</li>
        <li><strong>Evitar infraprecios:</strong> Precios bajos sugieren baja calidad</li>
      </ul>

      <h2>Del presupuesto a la factura</h2>
      <p>Al ser aceptado, factura inmediatamente si se acordó un anticipo. Usa un <a href="/invoicing">software de facturación</a>.</p>

      <h2>Seguimiento de propuestas</h2>
      <ul>
        <li><strong>Seguimiento inmediato:</strong> Confirmar recepción y disponibilidad</li>
        <li><strong>En el momento de la decisión:</strong> Preguntar si necesitan información adicional</li>
        <li><strong>Aportar valor:</strong> Compartir insights relevantes, no solo pedir una decisión</li>
        <li><strong>Saber parar:</strong> Tras 3-4 seguimientos sin respuesta, seguir adelante</li>
      </ul>

      <h2>Manejar objeciones</h2>
      <h3>Objeciones de precio</h3>
      <p>No bajes el precio inmediatamente. Destaca el valor. Si es necesario, ajusta el alcance en vez de hacer descuento.</p>
      <h3>Objeciones de timing</h3>
      <p>Entiende cuándo el cliente estará listo. Mantén el contacto.</p>

      <h2>Errores comunes en propuestas</h2>
      <ul>
        <li>Plantillas genéricas sin personalización</li>
        <li>Empezar por el precio en vez del valor</li>
        <li>Prometer demasiado</li>
        <li>Alcance vago</li>
        <li>Sin próximo paso claro</li>
      </ul>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/blog/complete-guide-to-business-invoicing">Guía completa de facturación</a></li>
        <li><a href="/blog/freelancer-business-guide">Guía del freelancer</a></li>
        <li><a href="/estimates">Crear presupuestos con Invoicemonk</a></li>
      </ul>
    `
  },
  {
    slug: 'complete-guide-expense-management',
    title: 'La guía completa de gestión de gastos para pequeñas empresas',
    excerpt: 'Domina el seguimiento de gastos, desde la captura de justificantes hasta las categorías deducibles. Todo para gestionar tus gastos y maximizar deducciones.',
    category: 'Expense Management',
    tags: ['Gestión de gastos', 'Control de gastos', 'Justificantes', 'Deducciones fiscales', 'Pequeñas empresas'],
    author: defaultAuthor, date: '2026-02-19', readTime: '16 min de lectura',
    featuredImage: '/images/blog/expense-management-guide.jpg',
    featuredImageAlt: 'Guía completa de gestión de gastos con justificantes y app de seguimiento',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/expenses',
    semanticKeywords: ['gestión de gastos', 'gastos empresariales', 'control de gastos', 'gestión de justificantes'],
    priority: 'P1',
    content: `
      <p><strong>Una mala gestión de gastos cuesta de media 2.000-5.000 € al año a las pequeñas empresas solo en deducciones perdidas.</strong> El 27% de los emprendedores no encuentra un justificante cuando lo necesita, y uno de cada cinco freelancers pierde al menos una deducción legítima cada año.</p>

      <h2>Por qué la gestión de gastos es más importante de lo que parece</h2>
      <ul>
        <li><strong>Deducciones perdidas:</strong> Cada gasto sin documentar es dinero potencialmente perdido</li>
        <li><strong>Ceguera de caja:</strong> Sin control, imposible ver a dónde va el dinero</li>
        <li><strong>Riesgo de inspección:</strong> Hacienda puede rechazar deducciones sin documentación</li>
        <li><strong>Erosión de márgenes:</strong> Los gastos no rastreados ocultan costes reales</li>
      </ul>

      <h2>Paso 1: Elegir tu método de seguimiento</h2>
      <h3>Tickets en papel y libro de cuentas manual</h3>
      <p>Solo para empresas con menos de 20 transacciones al mes. Alto riesgo — los tickets térmicos se borran en 6-12 meses.</p>
      <h3>Hojas de cálculo (Excel o Google Sheets)</h3>
      <p>Gratuitas y personalizables, pero entrada manual y sin captura de justificantes.</p>
      <h3>Apps de control de gastos</h3>
      <p>Apps como <a href="/expenses">Invoicemonk</a> permiten fotografiar justificantes, categorizar automáticamente por OCR y conciliar con cuentas bancarias.</p>

      <h2>Paso 2: Digitalizar todo</h2>
      <ol>
        <li><strong>Capturar:</strong> Fotografiar el justificante inmediatamente después de la compra</li>
        <li><strong>Extraer:</strong> El OCR lee nombre del comercio, fecha e importe</li>
        <li><strong>Categorizar:</strong> Asignación automática o manual</li>
        <li><strong>Almacenar:</strong> El justificante digital se guarda en la nube</li>
      </ol>
      <p>La Agencia Tributaria acepta justificantes digitales.</p>

      <h2>Paso 3: Categorizar gastos correctamente</h2>
      <ul>
        <li><strong>Publicidad y Marketing</strong></li>
        <li><strong>Material y Equipamiento</strong></li>
        <li><strong>Desplazamientos y Transporte</strong></li>
        <li><strong>Subcontratación</strong></li>
        <li><strong>Seguros</strong></li>
        <li><strong>Alquiler y Suministros</strong></li>
        <li><strong>Software y Suscripciones</strong></li>
        <li><strong>Gastos de representación</strong></li>
      </ul>

      <h2>Paso 4: Separar gastos profesionales y personales</h2>
      <p>Abre una cuenta bancaria dedicada. Paga todos los gastos profesionales desde la cuenta de empresa y todos los personales desde la cuenta personal.</p>

      <h2>Paso 5: Maximizar deducciones fiscales</h2>
      <h3>Deducciones a menudo olvidadas</h3>
      <ul>
        <li>Despacho en casa</li>
        <li>Gastos de vehículo</li>
        <li>Formación profesional</li>
        <li>Suscripciones de software</li>
        <li>Comisiones bancarias y de procesamiento de pagos</li>
        <li>Amortizaciones</li>
      </ul>

      <h2>Paso 6: Revisar y conciliar mensualmente</h2>
      <p>Dedica tiempo al final del mes a revisar todos los gastos, compararlos con extractos bancarios y asegurarte de que todo esté correctamente categorizado.</p>

      <h2>Herramientas para una gestión de gastos simplificada</h2>
      <p><a href="/expenses">Invoicemonk Control de Gastos</a> reúne todos los pasos: foto de justificantes, categorización automática, conciliación bancaria e informes fiscales listos para usar.</p>
    `,
    faq: [
      { question: '¿Cuál es la mejor forma de controlar los gastos empresariales?', answer: 'Usa un software que permita foto de justificantes, categorización automática y sincronización bancaria.' },
      { question: '¿Cuánto tiempo debo conservar los justificantes?', answer: 'En España, los documentos contables deben conservarse 6 años. A efectos de IVA, 4 años. Las copias digitales son aceptadas por la AEAT.' },
      { question: '¿Qué gastos empresariales son deducibles?', answer: 'La mayoría de los gastos ordinarios y necesarios son deducibles: material, software, desplazamientos, subcontratación, seguros y marketing.' }
    ]
  },
  {
    slug: 'client-management-guide-small-business',
    title: 'Guía de gestión de clientes para pequeñas empresas',
    excerpt: 'Construye relaciones más fuertes con los clientes, del onboarding a la fidelización. La guía completa de gestión de clientes.',
    category: 'Client Management',
    tags: ['Gestión de clientes', 'Relación con clientes', 'Pequeñas empresas', 'CRM'],
    author: defaultAuthor, date: '2026-02-19', readTime: '14 min de lectura',
    featuredImage: '/images/blog/client-management-system.jpg',
    featuredImageAlt: 'Panel CRM con perfiles de clientes y estado de proyectos',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/client-management',
    semanticKeywords: ['gestión de clientes', 'relación con clientes', 'CRM', 'gestión de clientes freelance'],
    priority: 'P1',
    content: `
      <p><strong>Captar un nuevo cliente cuesta entre 5 y 7 veces más que fidelizar uno existente.</strong> Sin embargo, la mayoría de freelancers dedican el 80% de su energía a la captación y casi nada al mantenimiento de las relaciones existentes.</p>

      <h2>Por qué la gestión de clientes es una estrategia de facturación</h2>
      <ul>
        <li><strong>Recomendaciones:</strong> El 83% de los clientes satisfechos están dispuestos a recomendarte — pero solo el 29% lo hace porque nunca se les pide</li>
        <li><strong>Recurrencia:</strong> Los clientes existentes convierten al 60-70%, los nuevos solo al 5-20%</li>
        <li><strong>Precios premium:</strong> Los clientes que confían en ti son menos sensibles al precio</li>
        <li><strong>Eficiencia:</strong> Los clientes bien atendidos requieren menos gestión</li>
      </ul>

      <h2>Fase 1: Onboarding del cliente</h2>
      <ol>
        <li><strong>Email de bienvenida (en 24h):</strong> Agradecer, confirmar la colaboración, delinear próximos pasos</li>
        <li><strong>Cuestionario del cliente:</strong> Objetivos, preferencias, interlocutor, formas de comunicación preferidas</li>
        <li><strong>Contrato y alcance:</strong> Formalizar con un <a href="/blog/freelance-contract-templates">contrato profesional</a></li>
        <li><strong>Configuración de pago:</strong> Dar de alta al cliente en <a href="/client-management">Invoicemonk</a></li>
        <li><strong>Reunión de arranque:</strong> 30-60 minutos para alinear objetivos y procesos</li>
        <li><strong>Cronograma del proyecto:</strong> Compartir hitos, puntos de control y plazos</li>
      </ol>

      <h2>Fase 2: Comunicación durante el proyecto</h2>
      <ul>
        <li><strong>Actualizaciones semanales:</strong> Lo hecho, lo pendiente, obstáculos</li>
        <li><strong>Revisiones de hitos:</strong> Actualización detallada con entregables a validar</li>
        <li><strong>Tiempos de respuesta:</strong> Informar al cliente de tu tiempo de respuesta habitual</li>
      </ul>
      <h3>Gestionar cambios de alcance</h3>
      <ol>
        <li>Recibir la solicitud de forma positiva</li>
        <li>Evaluar impacto en cronograma y presupuesto</li>
        <li>Enviar adenda por escrito</li>
        <li>Obtener aprobación antes de empezar el trabajo adicional</li>
      </ol>

      <h2>Fase 3: Gestionar situaciones difíciles</h2>
      <ul>
        <li><strong>El expansor de alcance:</strong> Siempre añadiendo "solo una cosita más"</li>
        <li><strong>El fantasma:</strong> Desaparece semanas y luego espera respuesta inmediata</li>
        <li><strong>El microgestor:</strong> Cuestiona cada decisión</li>
        <li><strong>El moroso:</strong> Paga las facturas sistemáticamente con retraso</li>
      </ul>

      <h2>Fase 4: Gestión de pagos</h2>
      <ul>
        <li>Definir <a href="/blog/how-to-write-invoice-payment-terms">condiciones de pago</a> claras en el onboarding</li>
        <li>Enviar <a href="/invoicing">facturas profesionales con tu marca</a> rápidamente</li>
        <li>Usar recordatorios automáticos de pago</li>
        <li>Ofrecer múltiples métodos de pago</li>
      </ul>

      <h2>Fase 5: Fidelización de clientes</h2>
      <ol>
        <li>Retrospectiva post-proyecto</li>
        <li>Recoger feedback (pregunta NPS)</li>
        <li>Proponer contratos recurrentes para trabajo continuo</li>
        <li>Mantener contacto trimestralmente</li>
        <li>Pedir recomendaciones — tras un proyecto exitoso</li>
      </ol>

      <h2>Fase 6: Elegir las herramientas adecuadas</h2>
      <ul>
        <li><strong>Menos de 10 clientes:</strong> Una hoja de cálculo bien organizada basta</li>
        <li><strong>10-30 clientes:</strong> <a href="/client-management">Software de facturación con gestión de clientes integrada</a> (como Invoicemonk)</li>
        <li><strong>30+ clientes:</strong> Un CRM ligero con integración de facturación</li>
      </ul>

      <h2>Checklist de gestión de clientes</h2>
      <ul>
        <li>☐ Proceso de onboarding estandarizado con plantillas</li>
        <li>☐ Ritmo de comunicación acordado al inicio del proyecto</li>
        <li>☐ Proceso de cambios documentado en el contrato</li>
        <li>☐ Condiciones de pago y facturación desde el primer día</li>
        <li>☐ Recogida de feedback tras cada proyecto</li>
        <li>☐ Contacto trimestral planificado</li>
        <li>☐ Datos e historial del cliente centralizados en una herramienta</li>
      </ul>
    `,
    faq: [
      { question: '¿Cómo gestionar múltiples clientes como freelancer?', answer: 'Usa un sistema centralizado (hoja de cálculo o software como Invoicemonk) para seguir el estado de proyectos, plazos, historial de comunicación y estado de pagos de cada cliente.' },
      { question: '¿Qué debe incluir un proceso de onboarding de clientes?', answer: 'Email de bienvenida, cuestionario del cliente, contrato firmado con alcance, configuración de pago, reunión de arranque y cronograma compartido.' },
      { question: '¿Cómo gestionar el scope creep?', answer: 'Ten un proceso de cambios en el contrato. Recibe la solicitud positivamente, evalúa el impacto, envía una adenda escrita y obtén aprobación antes de empezar el trabajo adicional.' }
    ]
  }
];

registerBlogPosts('es', posts);
