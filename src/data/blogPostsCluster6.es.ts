import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const posts: BlogPost[] = [
  {
    slug: 'freelance-contract-templates',
    title: 'Plantillas de contratos para freelancers: protégete a ti y a tus clientes',
    excerpt: 'Obtén plantillas esenciales de contratos freelance y aprende qué cláusulas protegen tu negocio.',
    category: 'Freelancing',
    tags: ['freelance', 'contratos', 'legal', 'plantillas'],
    author: defaultAuthor,
    date: '2026-01-28',
    readTime: '11 min de lectura',
    featuredImage: '/images/blog/freelance-contracts.jpg',
    featuredImageAlt: 'Plantillas de contratos freelance',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['contrato freelance', 'plantilla de contrato', 'contrato con cliente'],
    priority: 'P2',
    content: `
      <p>Un buen contrato protege tanto a ti como a tu cliente. Previene malentendidos, establece expectativas claras y te da respaldo legal si algo sale mal.</p>

      <h2>Por qué todo freelancer necesita un contrato</h2>
      <ul>
        <li><strong>Cambios de alcance:</strong> Los clientes añaden trabajo sin pago adicional</li>
        <li><strong>Disputas de pago:</strong> Sin prueba de los términos acordados</li>
        <li><strong>Confusión de propiedad intelectual:</strong> ¿Quién es dueño del trabajo?</li>
        <li><strong>Exposición a responsabilidad:</strong> Sin límites a tu responsabilidad</li>
      </ul>

      <h2>Elementos esenciales del contrato</h2>
      <h3>1. Alcance del trabajo</h3>
      <p>Define exactamente qué entregarás y qué <em>no</em> está incluido.</p>

      <h3>2. Cronograma e hitos</h3>
      <p>Establece fechas de inicio, hitos y consecuencias por retrasos.</p>

      <h3>3. Condiciones de pago</h3>
      <p>Honorarios, calendario (50 % de anticipo, 50 % al finalizar), fechas de vencimiento y penalizaciones por mora.</p>

      <h3>4. Política de revisiones</h3>
      <p>Define el número de rondas incluidas y el costo de revisiones adicionales.</p>

      <h3>5. Propiedad intelectual</h3>
      <p>Cláusula crítica: los derechos solo se transfieren tras el pago completo.</p>

      <h3>6. Confidencialidad</h3>
      <p>Protege la información sensible de tus clientes.</p>

      <h3>7. Condiciones de terminación</h3>
      <p>Preaviso, compensación por trabajo realizado y cláusula de cancelación.</p>

      <h2>Señales de alarma</h2>
      <ul>
        <li>Revisiones ilimitadas</li>
        <li>Pago solo con «satisfacción del cliente»</li>
        <li>Cláusulas de no competencia amplias</li>
        <li>Transferencia de derechos antes del pago</li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>Crea una plantilla con todos los elementos esenciales. Más en nuestras guías sobre <a href="/__LANG__/blog/pricing-your-freelance-services">fijación de precios</a> y <a href="/__LANG__/blog/freelancer-business-guide">creación de un negocio freelance</a>.</p>
    `
  },
  {
    slug: 'pricing-your-freelance-services',
    title: 'Fijación de precios freelance: estrategias para cobrar lo que vales',
    excerpt: 'Aprende a calcular tus tarifas y comunicar tu valor a los clientes con confianza.',
    category: 'Freelancing',
    tags: ['freelance', 'precios', 'tarifas', 'precio por valor'],
    author: defaultAuthor,
    date: '2026-01-27',
    readTime: '12 min de lectura',
    featuredImage: '/images/blog/pricing-freelance.jpg',
    featuredImageAlt: 'Estrategias de precios para freelancers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['precios freelance', 'tarifa por hora freelance', 'precio basado en valor'],
    priority: 'P2',
    content: `
      <p>La mayoría de los freelancers cobran de menos. Aprender a fijar precios correctamente es una de las habilidades más impactantes para el éxito a largo plazo.</p>

      <h2>Por qué los freelancers cobran de menos</h2>
      <ul>
        <li><strong>Síndrome del impostor:</strong> No creemos plenamente en el valor de nuestro trabajo</li>
        <li><strong>Miedo al rechazo:</strong> Precios más bajos se sienten más seguros</li>
        <li><strong>Comparación con el empleo:</strong> Las tarifas freelance deben ser mayores (cubres tu propia seguridad social)</li>
      </ul>

      <h2>Calcula tu tarifa mínima</h2>
      <p>Suma todos tus costos anuales (gastos de negocio + personales + margen + impuestos) y divide entre horas facturables (típicamente 1.000–1.500/año).</p>

      <h2>Modelos de precios</h2>
      <ul>
        <li><strong>Tarifa por hora:</strong> Simple pero limita tus ingresos</li>
        <li><strong>Precio por proyecto:</strong> Recompensa la eficiencia</li>
        <li><strong>Basado en valor:</strong> Cobro según el resultado para el cliente</li>
        <li><strong>Retainer:</strong> Tarifa mensual fija por disponibilidad continua</li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>Calcula tu tarifa mínima, investiga precios del mercado y aumenta con tu próximo cliente. Más en nuestras guías sobre <a href="/__LANG__/blog/freelance-contract-templates">plantillas de contratos</a> y <a href="/__LANG__/blog/freelance-time-tracking-guide">seguimiento del tiempo</a>.</p>
    `
  },
  {
    slug: 'freelance-time-tracking-guide',
    title: 'Seguimiento del tiempo freelance: factura correctamente y entiende tu productividad',
    excerpt: 'Registra tu tiempo de forma eficaz para facturar correctamente y entender en qué se van tus horas.',
    category: 'Freelancing',
    tags: ['freelance', 'seguimiento del tiempo', 'productividad', 'facturación'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '7 min de lectura',
    featuredImage: '/images/blog/time-tracking.jpg',
    featuredImageAlt: 'Guía de seguimiento del tiempo para freelancers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['seguimiento del tiempo', 'horas freelance', 'facturación por horas'],
    priority: 'P2',
    content: `
      <p>Incluso con tarifas por proyecto, el seguimiento del tiempo revela dónde van realmente tus horas y si tus precios tienen sentido.</p>

      <h2>Por qué registrar tu tiempo</h2>
      <ul>
        <li><strong>Facturación precisa:</strong> Sin registro, se subfactura un 10–30 %</li>
        <li><strong>Costos reales:</strong> Un proyecto de 5.000 € en 20 h = 250 €/h. En 50 h = 100 €/h</li>
        <li><strong>Mejores presupuestos:</strong> Datos pasados para estimaciones más precisas</li>
      </ul>

      <h2>Cómo registrar eficazmente</h2>
      <ul>
        <li>Registra en tiempo real — no reconstruyas al final del día</li>
        <li>Sé específico: «Diseño web — maqueta homepage» en vez de «trabajo para cliente»</li>
        <li>Incluye todo: admin, emails, llamadas</li>
        <li>Revisión semanal de 15 minutos</li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>Elige una herramienta y úsala durante un mes. Más en nuestras guías sobre <a href="/__LANG__/blog/pricing-your-freelance-services">fijación de precios</a> y <a href="/__LANG__/blog/cash-flow-forecasting-for-freelancers">previsión de flujo de caja</a>.</p>
    `
  },
  {
    slug: 'cash-flow-forecasting-for-freelancers',
    title: 'Previsión de flujo de caja para freelancers: anticipa tus ingresos',
    excerpt: 'Técnicas sencillas de previsión de flujo de caja para que los freelancers puedan anticipar ingresos y construir estabilidad financiera.',
    category: 'Finance',
    tags: ['flujo de caja', 'freelance', 'previsión', 'planificación financiera'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '10 min de lectura',
    featuredImage: '/images/blog/cash-flow-forecasting.jpg',
    featuredImageAlt: 'Previsión de flujo de caja para freelancers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/payments',
    semanticKeywords: ['previsión flujo de caja', 'ingresos freelance', 'planificación financiera'],
    priority: 'P2',
    content: `
      <p>Los ingresos freelance fluctúan, pero los gastos son constantes. La previsión de flujo de caja consiste en proyectar ingresos y gastos futuros para anticipar problemas con semanas de antelación.</p>

      <h2>Método simple de previsión</h2>
      <ol>
        <li>Lista ingresos esperados: facturas pendientes, proyectos confirmados, retainers</li>
        <li>Lista todos los gastos: fijos, variables, trimestrales</li>
        <li>Desglosa semana a semana: saldo inicial → ingresos → gastos → saldo final</li>
        <li>Identifica zonas de peligro</li>
      </ol>

      <h2>Construir una reserva de efectivo</h2>
      <ul>
        <li><strong>Mínimo:</strong> 3 meses de gastos operativos</li>
        <li><strong>Cómodo:</strong> 6 meses</li>
        <li><strong>Seguro:</strong> 12 meses para sectores volátiles</li>
      </ul>

      <h2>Estrategias para suavizar el flujo de caja</h2>
      <ul>
        <li>Exigir anticipos (30–50 % por adelantado)</li>
        <li>Facturar inmediatamente tras el servicio</li>
        <li>Acortar plazos de pago</li>
        <li>Ofrecer retainers mensuales</li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>Abre una hoja de cálculo y proyecta tus próximos 3 meses. Más en nuestra <a href="/__LANG__/blog/freelancer-business-guide">guía completa para freelancers</a>.</p>
    `
  },
  {
    slug: 'profit-margins-how-to-calculate-and-improve',
    title: 'Márgenes de beneficio: cómo calcularlos, analizarlos y mejorarlos',
    excerpt: 'Aprende a calcular márgenes brutos y netos, compararlos con tu sector y mejorar la rentabilidad.',
    category: 'Small Business',
    tags: ['beneficio', 'márgenes', 'rentabilidad', 'precios'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '9 min de lectura',
    featuredImage: '/images/blog/profit-margins.jpg',
    featuredImageAlt: 'Calcular y mejorar márgenes de beneficio',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['margen de beneficio', 'margen bruto', 'margen neto', 'rentabilidad'],
    priority: 'P2',
    content: `
      <p>La facturación es vanidad, el beneficio es cordura. Entender tus márgenes revela si tu modelo de negocio es sostenible.</p>

      <h2>Tipos de márgenes</h2>
      <h3>Margen bruto</h3>
      <p><strong>Fórmula:</strong> (Ingresos − Coste de ventas) ÷ Ingresos × 100</p>

      <h3>Margen operativo</h3>
      <p><strong>Fórmula:</strong> Resultado de explotación ÷ Ingresos × 100</p>

      <h3>Margen neto</h3>
      <p><strong>Fórmula:</strong> Resultado neto ÷ Ingresos × 100</p>

      <h2>Márgenes saludables por sector</h2>
      <ul>
        <li><strong>Software/SaaS:</strong> 70–85 % bruto, 15–25 % neto</li>
        <li><strong>Servicios profesionales:</strong> 50–70 % bruto, 10–20 % neto</li>
        <li><strong>Comercio minorista:</strong> 25–50 % bruto, 2–10 % neto</li>
      </ul>

      <h2>Estrategias de mejora</h2>
      <ul>
        <li>Subir precios gradualmente</li>
        <li>Reducir costes de producción</li>
        <li>Optimizar gastos operativos</li>
        <li>Enfocarse en productos/servicios de alto margen</li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>Calcula tus márgenes actuales con un <a href="/__LANG__/accounting">software de contabilidad</a>. Más en nuestra guía para <a href="/__LANG__/blog/how-to-create-a-budget-for-your-small-business">crear un presupuesto</a>.</p>
    `
  },
  {
    slug: 'cash-vs-accrual-accounting-explained',
    title: 'Contabilidad de caja vs devengo: ¿qué método es el adecuado para tu negocio?',
    excerpt: 'Entiende las diferencias clave entre la contabilidad de caja y la contabilidad de devengo.',
    category: 'Small Business',
    tags: ['contabilidad', 'contabilidad de caja', 'contabilidad de devengo', 'teneduría de libros'],
    author: defaultAuthor,
    date: '2026-01-27',
    readTime: '8 min de lectura',
    featuredImage: '/images/blog/cash-vs-accrual.jpg',
    featuredImageAlt: 'Contabilidad de caja vs devengo',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['contabilidad de caja', 'contabilidad de devengo', 'teneduría de libros'],
    priority: 'P2',
    content: `
      <p>La elección del método contable afecta cómo registras ingresos, pagas impuestos y evalúas tu salud financiera. En España, los autónomos y pymes pueden optar por el criterio de caja del IVA bajo ciertas condiciones.</p>

      <h2>Contabilidad de caja</h2>
      <p>Los ingresos se registran al cobro, los gastos al pago.</p>
      <h3>Ventajas</h3>
      <ul>
        <li>Más sencilla de llevar</li>
        <li>Refleja el dinero real disponible</li>
        <li>IVA de caja: no se ingresa hasta que se cobra</li>
      </ul>

      <h2>Contabilidad de devengo</h2>
      <p>Los ingresos se registran al facturar, los gastos al generarse — independientemente del cobro o pago.</p>
      <h3>Ventajas</h3>
      <ul>
        <li>Imagen más fiel de la situación económica</li>
        <li>Mejor planificación a largo plazo</li>
        <li>Obligatoria para sociedades según el PGC</li>
      </ul>

      <h2>¿Cuándo usar cada método?</h2>
      <p>En España, los autónomos pueden optar al régimen especial de criterio de caja del IVA (RECC) si facturan menos de 2 millones de euros. Las sociedades mercantiles deben llevar contabilidad de devengo según el Plan General Contable.</p>

      <h2>Próximos pasos</h2>
      <p>Consulta con la AEAT o tu asesor fiscal sobre tu situación. Más en nuestra <a href="/__LANG__/blog/small-business-accounting-guide">guía de contabilidad</a>.</p>
    `
  },
  {
    slug: 'tax-software-integration-guide',
    title: 'Guía de integración de software fiscal: optimiza tu flujo de trabajo tributario',
    excerpt: 'Aprende a conectar tu software de facturación y contabilidad con herramientas fiscales. Reduce errores y ahorra tiempo.',
    category: 'Tax and Compliance',
    tags: ['software fiscal', 'integración', 'automatización fiscal', 'contabilidad'],
    author: defaultAuthor,
    date: '2025-07-12',
    dateModified: '2026-02-04',
    readTime: '8 min de lectura',
    featuredImage: '/images/blog/tax-software-integration.jpg',
    featuredImageAlt: 'Panel de integración de software fiscal',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['integración software fiscal', 'automatización contable', 'flujo de trabajo fiscal'],
    priority: 'P2',
    content: `
      <p>Transferir datos manualmente entre tu software de facturación, contabilidad y herramientas fiscales es tedioso y propenso a errores. Las integraciones modernas automatizan estos flujos de datos.</p>

      <h2>Puntos de integración clave</h2>
      <h3>Facturación → Contabilidad</h3>
      <p>Las facturas de <a href="/__LANG__/invoicing">Invoicemonk</a> alimentan automáticamente tu contabilidad.</p>

      <h3>Gastos → Contabilidad</h3>
      <p>Recibos auto-categorizados, flujos bancarios importados automáticamente.</p>

      <h3>Contabilidad → Declaraciones fiscales</h3>
      <p>Resúmenes de ingresos mapeados a formularios fiscales, amortizaciones calculadas, declaraciones de IVA (modelo 303) pre-rellenadas.</p>

      <h2>Beneficios</h2>
      <ul>
        <li>5–10 horas al mes de entrada manual ahorradas</li>
        <li>Reducción de errores en datos financieros</li>
        <li>Visibilidad fiscal en tiempo real</li>
        <li>Inspecciones de Hacienda más fáciles</li>
      </ul>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/__LANG__/blog/small-business-tax-compliance-guide">Guía completa de cumplimiento fiscal</a></li>
        <li><a href="/__LANG__/blog/quarterly-tax-payment-guide">Guía de pagos fraccionados trimestrales</a></li>
      </ul>
    `
  }
];

registerBlogPosts('es', posts);
