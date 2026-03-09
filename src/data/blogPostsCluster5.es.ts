import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 13b: Expense Management cluster posts — Spanish translations
 */
const posts: BlogPost[] = [
  {
    slug: 'complete-guide-expense-management',
    title: 'La guía completa de gestión de gastos para pequeñas empresas',
    excerpt: 'Domina el seguimiento de gastos desde el escaneo de recibos hasta las categorías deducibles. Todo lo que necesitas para gestionar gastos y maximizar deducciones.',
    category: 'Expense Management',
    tags: ['gestión de gastos', 'seguimiento de gastos', 'recibos', 'deducciones fiscales', 'pequeña empresa'],
    author: defaultAuthor, date: '2026-02-19', readTime: '16 min de lectura',
    featuredImage: '/images/blog/expense-management-guide.jpg',
    featuredImageAlt: 'Guía completa de gestión de gastos con recibos y app de seguimiento',
    pillarContent: true, clusterType: 'pillar', targetProduct: '/expenses',
    semanticKeywords: ['gestión de gastos', 'gastos empresariales', 'seguimiento de gastos', 'gestión de recibos', 'deducciones fiscales'],
    priority: 'P1',
    content: `
      <p><strong>La mala gestión de gastos cuesta a las pequeñas empresas un promedio de 2.000–5.000 € al año solo en deducciones perdidas.</strong> Un estudio reciente reveló que el 27% de los propietarios de pequeñas empresas no pueden encontrar un recibo cuando lo necesitan.</p>
      <p>Ya seas autónomo o dirijas una agencia en crecimiento, la gestión de gastos es la base de la salud financiera.</p>

      <h2>Por qué la gestión de gastos importa más de lo que crees</h2>
      <ul>
        <li><strong>Deducciones fiscales perdidas:</strong> Cada gasto no categorizado es dinero dejado sobre la mesa. La AEAT requiere justificantes para las deducciones</li>
        <li><strong>Pérdida de tiempo:</strong> Reunir recibos en época de impuestos cuesta horas</li>
        <li><strong>Malas decisiones:</strong> Sin datos claros de gastos, no puedes evaluar la rentabilidad</li>
        <li><strong>Riesgo de inspección:</strong> Documentación faltante puede causar problemas en una inspección de Hacienda</li>
      </ul>

      <h2>Los 5 métodos de seguimiento de gastos</h2>
      <p>Desde hojas de cálculo hasta apps automatizadas. Ver nuestro <a href="/__LANG__/blog/expense-tracking-methods-small-business">comparativo de métodos</a>.</p>

      <h2>Digitalízate: gestión de recibos</h2>
      <p>Los recibos de papel se borran y se pierden. Aprende más en nuestro <a href="/__LANG__/blog/digital-receipt-management-guide">guía de gestión digital de recibos</a>.</p>

      <h2>Configurar categorías de gastos</h2>
      <p>Las categorías correctas simplifican las declaraciones. Ver nuestro <a href="/__LANG__/blog/business-expense-categories-guide">guía de categorías de gastos</a>.</p>

      <h2>Separar gastos empresariales y personales</h2>
      <p>Mezclar finanzas es peligroso. Nuestra <a href="/__LANG__/blog/separate-business-personal-expenses">guía de separación</a> te muestra cómo hacerlo.</p>

      <p>Usa un <a href="/__LANG__/expenses">software de seguimiento de gastos</a> para capturar cada gasto deducible en tiempo real.</p>
    `,
    faq: [
      { question: '¿Cuánto tiempo debo conservar los justificantes de gastos?', answer: 'En España, el plazo de conservación de los justificantes contables es de 6 años según el Código de Comercio. La AEAT acepta copias digitales bajo ciertas condiciones de conformidad.' },
      { question: '¿Se aceptan recibos digitales por Hacienda?', answer: 'Sí. La AEAT acepta copias digitales como documentación válida, siempre que la imagen sea legible y represente fielmente el original.' },
      { question: '¿Qué gastos empresariales son deducibles?', answer: 'La mayoría de gastos ordinarios y necesarios: material de oficina, suscripciones de software, viajes, honorarios profesionales, seguros, marketing y gastos de oficina en casa.' }
    ]
  },
  {
    slug: 'expense-tracking-methods-small-business',
    title: '5 métodos de seguimiento de gastos para pequeñas empresas',
    excerpt: 'Compara hojas de cálculo, apps, software contable y más. Encuentra el mejor método para tu tamaño de negocio.',
    category: 'Expense Management',
    tags: ['seguimiento de gastos', 'pequeña empresa', 'software contable'],
    author: defaultAuthor, date: '2026-02-19', readTime: '10 min de lectura',
    featuredImage: '/images/blog/expense-tracking-dashboard.jpg',
    featuredImageAlt: 'Diferentes métodos de seguimiento de gastos para empresas',
    clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['métodos seguimiento gastos', 'control gastos pyme', 'contabilidad pequeña empresa'],
    priority: 'P1',
    content: `
      <p>El método correcto de seguimiento depende del tamaño de tu negocio, presupuesto y afinidad tecnológica.</p>

      <h2>Método 1: Hojas de cálculo (Excel/Google Sheets)</h2>
      <p><strong>Ideal para:</strong> Autónomos con pocas transacciones mensuales.</p>

      <h2>Método 2: Sistema en papel</h2>
      <p><strong>Ideal para:</strong> Empresarios con muy pocas transacciones.</p>

      <h2>Método 3: Apps de seguimiento de gastos</h2>
      <p><strong>Ideal para:</strong> La mayoría de pequeñas empresas. Apps como <a href="/__LANG__/expenses">Invoicemonk</a> ofrecen escaneo de recibos, categorización automática e informes fiscales.</p>

      <h2>Método 4: Software contable completo</h2>
      <p><strong>Ideal para:</strong> Empresas con empleados o contabilidad compleja.</p>

      <h2>Método 5: Integración de feeds bancarios</h2>
      <p><strong>Ideal para:</strong> Como complemento de cualquier otro método.</p>

      <h2>Nuestra recomendación</h2>
      <p>La mayoría de pequeñas empresas obtienen los mejores resultados con el Método 3 combinado con el Método 5.</p>
    `
  },
  {
    slug: 'digital-receipt-management-guide',
    title: 'Gestión digital de recibos: Sin papel en 2026',
    excerpt: 'Deja de perder recibos de papel. Aprende a digitalizar, organizar y almacenar recibos para un seguimiento fácil y cumplimiento fiscal.',
    category: 'Expense Management',
    tags: ['recibos digitales', 'gestión de recibos', 'sin papel'],
    author: defaultAuthor, date: '2026-02-19', readTime: '9 min de lectura',
    featuredImage: '/images/blog/digital-receipts.jpg',
    featuredImageAlt: 'Persona escaneando recibo de papel con smartphone',
    clusterType: 'cluster', targetProduct: '/receipts',
    semanticKeywords: ['gestión digital recibos', 'recibos sin papel', 'escaneo recibos'],
    priority: 'P1',
    content: `
      <p>Los recibos de papel se borran, se pierden y son difíciles de organizar. La digitalización resuelve todos estos problemas.</p>

      <h2>¿Por qué digitalizarse?</h2>
      <ul>
        <li><strong>Los recibos se borran:</strong> Los recibos térmicos se vuelven ilegibles en meses</li>
        <li><strong>Búsqueda instantánea:</strong> Busca por importe, fecha o proveedor</li>
        <li><strong>Ahorro de espacio:</strong> Adiós a las cajas de recibos</li>
        <li><strong>Cumplimiento:</strong> La AEAT acepta recibos digitales</li>
      </ul>

      <h2>Proceso en 3 pasos</h2>
      <ol>
        <li><strong>Capturar:</strong> Fotografía cada recibo inmediatamente</li>
        <li><strong>Organizar:</strong> El OCR extrae automáticamente proveedor, importe y fecha</li>
        <li><strong>Almacenar:</strong> La nube asegura acceso seguro y permanente</li>
      </ol>

      <p>Para la guía completa, lee nuestro <a href="/__LANG__/blog/complete-guide-expense-management">guía completa de gestión de gastos</a>.</p>
    `
  },
  {
    slug: 'business-expense-categories-guide',
    title: 'Cómo categorizar gastos empresariales (con plan de cuentas)',
    excerpt: 'Configura categorías de gastos que simplifiquen las declaraciones fiscales y hagan significativos los informes financieros.',
    category: 'Expense Management',
    tags: ['categorías de gastos', 'plan de cuentas', 'contabilidad'],
    author: defaultAuthor, date: '2026-02-19', readTime: '11 min de lectura',
    featuredImage: '/images/blog/expense-categories.jpg',
    featuredImageAlt: 'Guía de categorización de gastos empresariales',
    clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['categorías gastos', 'plan de cuentas', 'contabilidad categorías'],
    priority: 'P1',
    content: `
      <p>La categorización correcta es la base de una buena contabilidad. Gastos mal categorizados llevan a informes inexactos y deducciones perdidas.</p>

      <h2>Categorías básicas</h2>
      <h3>Oficina y operaciones</h3>
      <ul><li>Material de oficina</li><li>Alquiler y suministros</li><li>Teléfono e internet</li><li>Suscripciones de software</li></ul>

      <h3>Viajes</h3>
      <ul><li>Viajes de negocios</li><li>Alojamiento</li><li>Comidas de negocios</li><li>Kilometraje (0,26 €/km en España según IRPF)</li></ul>

      <h3>Servicios profesionales</h3>
      <ul><li>Asesoría legal</li><li>Contabilidad y asesoría fiscal</li><li>Consultoría</li><li>Freelancers y subcontratistas</li></ul>

      <h3>Marketing y publicidad</h3>
      <ul><li>Publicidad online</li><li>Diseño web y SEO</li><li>Tarjetas de visita e impresos</li><li>Ferias y eventos</li></ul>

      <h2>Automatizar la categorización</h2>
      <p><a href="/__LANG__/expenses">El seguimiento de gastos de Invoicemonk</a> aprende de tus patrones y sugiere categorías automáticamente.</p>
    `
  },
  {
    slug: 'receipt-scanning-apps-comparison',
    title: 'Las mejores apps de escaneo de recibos para pymes en 2026',
    excerpt: 'Compara las mejores apps de escaneo de recibos por funcionalidades, precisión, precio e integraciones.',
    category: 'Expense Management',
    tags: ['escaneo de recibos', 'apps de recibos', 'OCR'],
    author: defaultAuthor, date: '2026-02-19', readTime: '10 min de lectura',
    featuredImage: '/images/blog/receipt-scanning-comparison.jpg',
    featuredImageAlt: 'Smartphones mostrando diferentes apps de escaneo de recibos',
    clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['app escaneo recibos', 'comparación apps recibos', 'OCR recibos'],
    priority: 'P2',
    content: `
      <p>La app correcta de escaneo te ahorra horas de entrada manual y mantiene tus justificantes listos para una inspección.</p>

      <h2>Criterios de selección</h2>
      <ul>
        <li><strong>Precisión OCR:</strong> Reconocimiento de proveedor, importe y fecha</li>
        <li><strong>Categorización automática</strong></li>
        <li><strong>Almacenamiento en la nube</strong></li>
        <li><strong>Integraciones</strong></li>
        <li><strong>Modo offline</strong></li>
      </ul>

      <h2>Checklist de selección</h2>
      <ul>
        <li>☐ Precisión OCR superior al 95%</li>
        <li>☐ Categorización automática y mapeo fiscal</li>
        <li>☐ Integración con tu contabilidad existente</li>
        <li>☐ App móvil con escaneo offline</li>
        <li>☐ Cumple los requisitos de la AEAT</li>
      </ul>

      <p>Para el flujo completo, lee nuestra <a href="/__LANG__/blog/digital-receipt-management-guide">guía de gestión digital de recibos</a>.</p>
    `
  },
  {
    slug: 'separate-business-personal-expenses',
    title: 'Cómo separar gastos empresariales y personales',
    excerpt: 'Mezclar gastos de empresa y personales crea dolores de cabeza fiscales. Aprende la forma correcta de separar tus finanzas.',
    category: 'Expense Management',
    tags: ['gastos empresariales', 'gastos personales', 'cuentas bancarias'],
    author: defaultAuthor, date: '2026-02-19', readTime: '8 min de lectura',
    featuredImage: '/images/blog/accounting-for-owners.jpg',
    featuredImageAlt: 'Guía para separar gastos empresariales y personales',
    clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['separar gastos empresa personales', 'cuenta empresarial vs personal'],
    priority: 'P2',
    content: `
      <p><strong>Mezclar gastos empresariales y personales es uno de los errores financieros más comunes y peligrosos.</strong> Enturbia tu visión financiera y puede causar graves problemas fiscales.</p>

      <h2>Por qué la separación es innegociable</h2>
      <h3>Cumplimiento fiscal</h3>
      <p>La AEAT exige justificantes para los gastos deducibles. Cuando todo pasa por la misma cuenta, la prueba se vuelve difícil.</p>

      <h3>Protección legal</h3>
      <p>Si operas como SL, mezclar fondos puede llevar al levantamiento del velo corporativo — un tribunal puede hacerte personalmente responsable de las deudas de la empresa.</p>

      <h2>Guía paso a paso</h2>
      <ol>
        <li><strong>Abrir una cuenta empresarial dedicada</strong></li>
        <li><strong>Obtener una tarjeta empresarial</strong></li>
        <li><strong>Establecer un salario regular</strong></li>
        <li><strong>Crear normas de gastos</strong></li>
        <li><strong>Conciliar mensualmente</strong></li>
      </ol>

      <p>Usa <a href="/__LANG__/expenses">Invoicemonk</a> para categorizar automáticamente tus gastos empresariales.</p>
    `
  },
  {
    slug: 'expense-reports-freelancers',
    title: 'Cómo crear informes de gastos como freelancer',
    excerpt: 'Los freelancers también necesitan informes de gastos. Aprende a crear informes profesionales para reembolsos de clientes y declaración fiscal.',
    category: 'Expense Management',
    tags: ['informes de gastos', 'freelance', 'reembolso'],
    author: defaultAuthor, date: '2026-02-19', readTime: '8 min de lectura',
    featuredImage: '/images/blog/expense-reports.jpg',
    featuredImageAlt: 'Freelancer creando informe de gastos en portátil con recibos',
    clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['informe gastos freelancer', 'reporte de gastos', 'reembolso gastos'],
    priority: 'P2',
    content: `
      <p>Los informes de gastos no son solo para empleados. Como freelancer, los necesitas para reembolsos de clientes y tu declaración fiscal.</p>

      <h2>Cuándo los freelancers necesitan informes de gastos</h2>
      <ul>
        <li><strong>Reembolso del cliente:</strong> Para gastos relacionados con el proyecto</li>
        <li><strong>Declaración fiscal:</strong> Para documentar gastos deducibles ante la AEAT</li>
        <li><strong>Contabilidad de proyecto:</strong> Para entender la rentabilidad real</li>
        <li><strong>Control presupuestario:</strong> Para identificar patrones de gasto</li>
      </ul>

      <h2>Qué incluir en un informe de gastos</h2>
      <ol>
        <li><strong>Fecha del gasto</strong></li>
        <li><strong>Proveedor</strong></li>
        <li><strong>Descripción:</strong> Motivo empresarial</li>
        <li><strong>Importe:</strong> IVA incluido</li>
        <li><strong>Categoría:</strong> Viaje, material, software, etc.</li>
        <li><strong>Justificante:</strong> Recibo digitalizado adjunto</li>
        <li><strong>Proyecto/Cliente:</strong> Asignación al proyecto correspondiente</li>
      </ol>

      <h2>Mejores prácticas</h2>
      <ul>
        <li><strong>Registro en tiempo real:</strong> Registra inmediatamente, no a fin de mes</li>
        <li><strong>Digitalizar:</strong> Escanea cada recibo al momento</li>
        <li><strong>Categorizar:</strong> Usa categorías consistentes</li>
        <li><strong>Regularidad:</strong> Informes mensuales o por proyecto</li>
      </ul>

      <p>Crea informes de gastos profesionales con un clic en <a href="/__LANG__/expenses">Invoicemonk</a>.</p>
    `
  }
];

registerBlogPosts('es', posts);
