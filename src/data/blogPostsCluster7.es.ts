import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const posts: BlogPost[] = [
  {
    slug: 'client-onboarding-process',
    title: 'Cómo crear un proceso de onboarding de clientes que impresione',
    excerpt: 'Un gran proceso de bienvenida marca el tono de toda la relación. Guía paso a paso con plantillas.',
    category: 'Client Management',
    tags: ['onboarding cliente', 'experiencia del cliente', 'freelance'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '9 min de lectura',
    featuredImage: '/blog/client-onboarding-checklist.jpg',
    featuredImageAlt: 'Checklist de onboarding de clientes con paquete de bienvenida',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['proceso onboarding cliente', 'onboarding freelancer', 'checklist nuevo cliente'],
    priority: 'P1',
    content: `
      <p><strong>Las primeras 48 horas de una nueva relación con un cliente marcan el tono de todo lo que sigue.</strong> Un proceso de incorporación estructurado te hace lucir profesional y reduce malentendidos.</p>

      <h2>Por qué importa el onboarding</h2>
      <ul>
        <li>Establece profesionalismo desde el inicio</li>
        <li>Crea expectativas claras en ambas partes</li>
        <li>Reduce los intercambios innecesarios un 40–60 %</li>
        <li>Aumenta la satisfacción y las recomendaciones</li>
      </ul>

      <h2>Proceso de onboarding en 5 pasos</h2>
      <h3>Paso 1: Email de bienvenida (en 24 h)</h3>
      <p>Mensaje profesional con los siguientes pasos, cronograma y datos de contacto.</p>

      <h3>Paso 2: Cuestionario del cliente</h3>
      <p>Recoge objetivos, preferencias de marca, accesos necesarios y personas de contacto.</p>

      <h3>Paso 3: Contrato y facturación</h3>
      <p>Envía un <a href="/__LANG__/blog/freelance-contract-templates">contrato profesional</a> y configura la facturación con <a href="/__LANG__/invoicing">Invoicemonk</a>.</p>

      <h3>Paso 4: Reunión de inicio</h3>
      <p>Discute objetivos, hitos, canales de comunicación y ritmo de feedback.</p>

      <h3>Paso 5: Plan de proyecto compartido</h3>
      <p>Proporciona un cronograma con hitos accesible para ambas partes.</p>

      <h2>Próximos pasos</h2>
      <p>Un proceso profesional es parte de una excelente <a href="/__LANG__/blog/client-management-guide-small-business">gestión de clientes</a>. La configuración toma unas 2 horas y luego funciona en automático.</p>
    `
  },
  {
    slug: 'managing-difficult-clients',
    title: 'Cómo manejar clientes difíciles de forma profesional',
    excerpt: 'Estrategias profesionales para gestionar conflictos, establecer límites y saber cuándo retirarse.',
    category: 'Client Management',
    tags: ['clientes difíciles', 'conflictos con clientes', 'límites profesionales'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '10 min de lectura',
    featuredImage: '/blog/difficult-clients-management.jpg',
    featuredImageAlt: 'Gestión profesional de clientes difíciles',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['clientes difíciles', 'manejar clientes problemáticos', 'resolución de conflictos'],
    priority: 'P2',
    content: `
      <p>Los clientes difíciles son parte de la vida profesional. Lo que diferencia a los freelancers exitosos es cómo manejan los conflictos.</p>

      <h2>Tipos de clientes difíciles</h2>
      <ul>
        <li><strong>El «solo una cosita más»:</strong> Añade alcance constantemente</li>
        <li><strong>El fantasma:</strong> Desaparece semanas y luego espera respuesta inmediata</li>
        <li><strong>El microgestor:</strong> Controla cada paso</li>
        <li><strong>El moroso:</strong> Paga sistemáticamente con retraso</li>
      </ul>

      <h2>Estrategias profesionales</h2>
      <h3>Limitar los cambios de alcance</h3>
      <p>Usa órdenes de cambio. Confirma cada modificación por escrito con impacto en plazo y presupuesto.</p>

      <h3>Establecer límites</h3>
      <p>Define horarios, tiempos de respuesta y canales de comunicación en el contrato.</p>

      <h3>Hacer cumplir los pagos</h3>
      <p>Trabaja con anticipos, <a href="/__LANG__/blog/setting-up-automatic-payment-reminders">recordatorios automáticos</a> y consecuencias claras por retraso.</p>

      <h2>Cuándo terminar la relación</h2>
      <ul>
        <li>El cliente no respeta tu experiencia o tiempo repetidamente</li>
        <li>La colaboración cuesta más de lo que aporta</li>
        <li>Los términos del contrato se ignoran sistemáticamente</li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>Termina siempre de forma profesional con un preaviso razonable. Más en nuestra <a href="/__LANG__/blog/client-management-guide-small-business">guía de gestión de clientes</a>.</p>
    `
  },
  {
    slug: 'client-communication-templates',
    title: 'Plantillas de comunicación con clientes para freelancers',
    excerpt: 'Plantillas de email listas para usar para actualizaciones de proyecto, cambios de alcance y recordatorios de pago.',
    category: 'Client Management',
    tags: ['comunicación con clientes', 'plantillas de email', 'freelance'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '10 min de lectura',
    featuredImage: '/blog/client-email-templates.jpg',
    featuredImageAlt: 'Plantillas de email profesionales para comunicación con clientes',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['plantillas comunicación cliente', 'plantillas email freelancer'],
    priority: 'P2',
    content: `
      <p><strong>Las plantillas de comunicación profesional ahorran 3–5 horas por semana</strong> y aseguran consistencia en cada interacción.</p>

      <h2>Plantilla 1: Email de inicio de proyecto</h2>
      <p>Contenido: resumen del proyecto, próximos pasos, cronograma, canales de comunicación.</p>

      <h2>Plantilla 2: Actualización semanal</h2>
      <p>Contenido: logros de la semana, planificado para la siguiente, preguntas pendientes, estado del presupuesto.</p>

      <h2>Plantilla 3: Cambio de alcance</h2>
      <p>Contenido: descripción del cambio, impacto en plazo y presupuesto, solicitud de aprobación.</p>

      <h2>Plantilla 4: Recordatorio de pago</h2>
      <p>Contenido: número de factura, fecha de vencimiento, importe pendiente. Usa <a href="/__LANG__/invoicing">Invoicemonk</a> para recordatorios automáticos.</p>

      <h2>Plantilla 5: Cierre de proyecto</h2>
      <p>Contenido: resumen de entregables, factura final, solicitud de reseña/testimonio, apertura a futuras colaboraciones.</p>

      <h2>Próximos pasos</h2>
      <p>Adapta estas plantillas a tu estilo y sector. Más en nuestra <a href="/__LANG__/blog/client-management-guide-small-business">guía de gestión de clientes</a>.</p>
    `
  },
  {
    slug: 'client-retention-strategies',
    title: '7 estrategias de retención de clientes para negocios de servicios',
    excerpt: '7 estrategias probadas que convierten proyectos puntuales en ingresos recurrentes a largo plazo.',
    category: 'Client Management',
    tags: ['retención de clientes', 'ingresos recurrentes', 'fidelización'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '9 min de lectura',
    featuredImage: '/images/blog/client-retention.jpg',
    featuredImageAlt: 'Estrategias de retención de clientes',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['estrategias retención clientes', 'fidelizar clientes', 'ingresos recurrentes'],
    priority: 'P2',
    content: `
      <p>Captar un nuevo cliente cuesta 5–7 veces más que retener uno existente. Sin embargo, la mayoría de los freelancers invierten la mayor parte de su energía en captación.</p>

      <h2>1. Superar expectativas</h2>
      <p>Entrega un 10 % más de lo acordado.</p>

      <h2>2. Comunicar proactivamente</h2>
      <p>No esperes a que el cliente pregunte. Actualizaciones regulares generan confianza.</p>

      <h2>3. Proponer proyectos de continuidad</h2>
      <p>Termina cada proyecto con 2–3 sugerencias para los siguientes pasos.</p>

      <h2>4. Ofrecer retainers mensuales</h2>
      <p>Paquetes mensuales para mantenimiento, consultoría o creación de contenido.</p>

      <h2>5. Mostrar atención personal</h2>
      <p>Felicitaciones por logros, notas de agradecimiento personalizadas.</p>

      <h2>6. Crear un programa de referidos</h2>
      <p>Recompensa las recomendaciones con descuentos o servicios adicionales.</p>

      <h2>7. Facturar profesionalmente</h2>
      <p><a href="/__LANG__/invoicing">Facturas</a> claras y puntuales señalan profesionalismo.</p>

      <h2>Próximos pasos</h2>
      <p>Elige 2–3 estrategias y aplícalas con tus 5 mejores clientes. Más en la <a href="/__LANG__/blog/client-management-guide-small-business">guía de gestión de clientes</a>.</p>
    `
  },
  {
    slug: 'the-basics-of-small-business-accounting',
    title: 'Fundamentos de contabilidad para pequeños negocios',
    excerpt: 'Los principios contables fundamentales que todo empresario debe conocer.',
    category: 'Small Business',
    tags: ['contabilidad', 'pequeño negocio', 'teneduría de libros', 'estados financieros'],
    author: defaultAuthor,
    date: '2023-11-20',
    dateModified: '2026-01-30',
    readTime: '9 min de lectura',
    featuredImage: '/images/blog/accounting-books-basics.jpg',
    featuredImageAlt: 'Fundamentos de contabilidad para empresarios',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['contabilidad pequeño negocio', 'fundamentos contabilidad', 'estados financieros'],
    priority: 'P1',
    content: `
      <p>La contabilidad puede parecer intimidante, pero entender los fundamentos es crucial para el éxito de tu negocio.</p>

      <h2>Por qué importa la contabilidad</h2>
      <ul>
        <li>Tomar decisiones empresariales informadas</li>
        <li>Cumplir con las obligaciones fiscales ante la AEAT</li>
        <li>Entender la salud financiera de tu negocio</li>
        <li>Obtener financiación</li>
      </ul>

      <h2>Los tres estados financieros esenciales</h2>
      <h3>Cuenta de pérdidas y ganancias</h3>
      <p>Muestra ingresos, gastos y resultado en un periodo.</p>

      <h3>Balance de situación</h3>
      <p>Foto instantánea de activos, pasivos y patrimonio neto.</p>

      <h3>Estado de flujos de efectivo</h3>
      <p>Rastrea los movimientos reales de efectivo.</p>

      <h2>Próximos pasos</h2>
      <p>Abre una cuenta bancaria empresarial y elige un método contable. Más en nuestra <a href="/__LANG__/blog/small-business-accounting-guide">guía completa de contabilidad</a>.</p>
    `
  },
  {
    slug: 'accounting-101-small-business-owners',
    title: 'Contabilidad 101 para dueños de pequeños negocios',
    excerpt: 'Los conceptos contables esenciales que todo empresario necesita, explicados en lenguaje sencillo.',
    category: 'Small Business',
    tags: ['contabilidad básica', 'contabilidad pymes', 'teneduría de libros'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '11 min de lectura',
    featuredImage: '/images/blog/accounting-basics-101.jpg',
    featuredImageAlt: 'Libro de contabilidad con gafas y bolígrafo',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['contabilidad básica negocio', 'contabilidad 101', 'contabilidad para principiantes'],
    priority: 'P1',
    content: `
      <p>No necesitas ser contable para gestionar las finanzas de tu negocio. Entender los conceptos fundamentales te da el control.</p>

      <h2>La ecuación contable fundamental</h2>
      <p><strong>Activo = Pasivo + Patrimonio neto</strong></p>

      <h2>Términos contables esenciales</h2>
      <ul>
        <li><strong>Ingresos:</strong> Dinero ganado por tu actividad</li>
        <li><strong>Gastos:</strong> Costes de funcionamiento</li>
        <li><strong>Beneficio:</strong> Ingresos menos gastos</li>
        <li><strong>Cuentas por cobrar:</strong> Dinero que te deben los clientes</li>
        <li><strong>Cuentas por pagar:</strong> Dinero que debes a proveedores</li>
      </ul>

      <h2>Plan General Contable</h2>
      <p>En España, el PGC organiza todas las cuentas en grupos: inmovilizado, existencias, deudores/acreedores, gastos e ingresos.</p>

      <h2>Próximos pasos</h2>
      <p>Configura un <a href="/__LANG__/accounting">software de contabilidad</a> y empieza a registrar cada transacción. Más en nuestra <a href="/__LANG__/blog/small-business-accounting-guide">guía completa de contabilidad</a>.</p>
    `
  },
  {
    slug: 'how-to-create-a-budget-for-your-small-business',
    title: 'Cómo crear un presupuesto para tu pequeño negocio',
    excerpt: 'Guía paso a paso para crear un presupuesto empresarial eficaz que te ayude a planificar y gestionar tu flujo de caja.',
    category: 'Small Business',
    tags: ['presupuesto', 'planificación financiera', 'pequeño negocio', 'flujo de caja'],
    author: defaultAuthor,
    date: '2023-12-01',
    readTime: '8 min de lectura',
    featuredImage: '/images/blog/budget-planning.jpg',
    featuredImageAlt: 'Planificación presupuestaria para pequeños negocios',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['presupuesto empresa', 'crear presupuesto', 'planificación financiera pymes'],
    priority: 'P1',
    content: `
      <p>Un presupuesto es tu mapa financiero. Muestra a dónde va tu dinero, ayuda a planificar y evita sorpresas desagradables.</p>

      <h2>Crear un presupuesto en 5 pasos</h2>
      <h3>Paso 1: Registrar ingresos</h3>
      <p>Lista todas las fuentes de ingresos esperadas.</p>

      <h3>Paso 2: Gastos fijos</h3>
      <p>Alquiler, seguros, suscripciones, asesor, préstamos.</p>

      <h3>Paso 3: Gastos variables</h3>
      <p>Marketing, viajes, formación, material de oficina.</p>

      <h3>Paso 4: Planificar margen de beneficio</h3>
      <p>Reserva al menos un 10–20 % como beneficio planificado.</p>

      <h3>Paso 5: Revisar mensualmente</h3>
      <p>Compara presupuesto con realidad y ajusta trimestralmente.</p>

      <h2>Próximos pasos</h2>
      <p>Empieza con una hoja de cálculo o usa un <a href="/__LANG__/accounting">software de contabilidad</a>. Más sobre <a href="/__LANG__/blog/profit-margins-how-to-calculate-and-improve">márgenes de beneficio</a>.</p>
    `
  },
  {
    slug: 'diy-small-business-accounting',
    title: '¿Puedes hacer tu propia contabilidad? Guía práctica',
    excerpt: '¿Deberías hacer tu contabilidad tú mismo o contratar un profesional? Consejos honestos sobre cuándo hacerlo por tu cuenta.',
    category: 'Small Business',
    tags: ['contabilidad DIY', 'contabilidad pymes', 'contratar contable'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '8 min de lectura',
    featuredImage: '/blog/diy-accounting-guide.jpg',
    featuredImageAlt: 'Contabilidad por cuenta propia en el escritorio',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['hacer mi propia contabilidad', 'contabilidad DIY', 'contabilidad sin contable'],
    priority: 'P2',
    content: `
      <p>Muchos emprendedores se preguntan: ¿puedo llevar mi contabilidad yo mismo? En España, los autónomos pueden gestionar mucho por su cuenta si usan las herramientas adecuadas.</p>

      <h2>Lo que puedes hacer tú mismo</h2>
      <ul>
        <li>Registro diario con <a href="/__LANG__/accounting">software de contabilidad</a></li>
        <li>Crear y enviar facturas con <a href="/__LANG__/invoicing">Invoicemonk</a></li>
        <li>Digitalizar y clasificar justificantes</li>
        <li>Libro de ingresos y gastos</li>
        <li>Presentación de modelos de IVA (303) e IRPF (130) a la AEAT</li>
      </ul>

      <h2>Cuándo necesitas un asesor fiscal/contable</h2>
      <ul>
        <li>Al constituir una SL o SA</li>
        <li>Preguntas fiscales complejas (internacional, holdings)</li>
        <li>Cuentas anuales y declaración del Impuesto de Sociedades</li>
        <li>En caso de inspección de Hacienda</li>
        <li>Cuando los errores costarían más que el asesor</li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>Empieza con lo básico y contrata ayuda profesional para las cuentas anuales. Más en nuestra <a href="/__LANG__/blog/small-business-accounting-guide">guía completa de contabilidad</a>.</p>
    `
  }
];

registerBlogPosts('es', posts);
