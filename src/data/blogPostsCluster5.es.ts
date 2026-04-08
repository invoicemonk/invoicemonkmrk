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
      <p><strong>La mala gestión de gastos cuesta a las pequeñas empresas un promedio de 2.000–5.000 € al año solo en deducciones perdidas.</strong> Un estudio reciente reveló que el 27% de los propietarios de pequeñas empresas no pueden encontrar un recibo cuando lo necesitan, y 1 de cada 5 autónomos pierde al menos una deducción legítima cada temporada fiscal simplemente por no haberla registrado.</p>
      <p>Ya seas autónomo o dirijas una agencia en crecimiento, la gestión de gastos es la base de la salud financiera. No se trata solo de guardar recibos — es construir un sistema que te dé visibilidad sobre tus gastos, maximice las deducciones y te mantenga preparado para cualquier inspección.</p>
      <p>Esta guía cubre cada aspecto de la gestión de gastos para pymes: desde elegir tu método de seguimiento y digitalizarte, hasta categorizar gastos para la declaración fiscal y maximizar deducciones.</p>

      <h2>Por qué la gestión de gastos importa más de lo que crees</h2>
      <p>La gestión de gastos no es solo una tarea contable — impacta directamente tu rentabilidad, carga fiscal y capacidad para tomar decisiones informadas.</p>
      <h3>El coste real de un mal seguimiento de gastos</h3>
      <ul>
        <li><strong>Deducciones fiscales perdidas:</strong> Cada gasto no categorizado o no documentado es potencialmente dinero regalado. La AEAT requiere justificantes para las deducciones reclamadas</li>
        <li><strong>Falta de visibilidad del cashflow:</strong> Sin seguimiento, no ves a dónde va el dinero — presupuestar y prever se vuelve imposible</li>
        <li><strong>Vulnerabilidad ante inspecciones:</strong> Hacienda puede rechazar deducciones sin documentación adecuada. Una sola inspección puede costar miles en sanciones y honorarios profesionales</li>
        <li><strong>Erosión de márgenes:</strong> Gastos no rastreados ocultan los costes reales, llevando a infravalorar tus servicios</li>
        <li><strong>Estrés en época fiscal:</strong> Buscar recibos a última hora cuesta tiempo y a menudo conduce a errores</li>
      </ul>
      <h3>Cómo se ve una buena gestión de gastos</h3>
      <p>Un sistema efectivo tiene cuatro componentes: captura en tiempo real (registrar gastos al momento), categorización adecuada (mapeo al plan de cuentas y líneas fiscales), almacenamiento seguro (recibos digitales con respaldo) y revisión regular (conciliación mensual con extractos bancarios).</p>

      <h2>Paso 1: Elige tu método de seguimiento</h2>
      <p>El método adecuado depende del tamaño de tu negocio, volumen de transacciones y presupuesto.</p>
      <h3>Recibos en papel y libro de cuentas manual</h3>
      <p>El enfoque tradicional: guardar cada recibo en una carpeta y anotar importes manualmente. <strong>Coste: Cero. Riesgo: Alto.</strong> Los recibos térmicos se borran en 6–12 meses, las carpetas se pierden y la entrada manual es propensa a errores. Solo viable con menos de 20 transacciones mensuales.</p>
      <h3>Hojas de cálculo (Excel/Google Sheets)</h3>
      <p>Un paso adelante: columnas para fecha, proveedor, importe, categoría y notas. Gratuitas y personalizables, pero requieren entrada manual, no capturan imágenes de recibos y se vuelven inmanejables pasadas 100 transacciones mensuales. También carecen de la automatización necesaria para una <a href="/__LANG__/blog/business-expense-categories-guide">categorización de gastos</a> eficiente.</p>
      <h3>Apps de seguimiento de gastos</h3>
      <p>Apps como <a href="/__LANG__/expenses">Invoicemonk</a> te permiten fotografiar recibos, extraer datos automáticamente mediante OCR, categorizar gastos y sincronizar con cuentas bancarias. Es el punto ideal para la mayoría de pymes — combinando facilidad de uso con el rigor documental que Hacienda exige.</p>
      <h3>Software contable completo</h3>
      <p>Soluciones todo-en-uno que manejan facturación, seguimiento de gastos, nóminas y reportes financieros. Ideal para empresas con empleados, inventario o necesidades financieras complejas.</p>
      <h3>Integración de feeds bancarios</h3>
      <p>Importación automática de transacciones desde tu cuenta empresarial y tarjetas. Así no se escapa ninguna transacción, pero sigues necesitando categorizar y adjuntar justificantes.</p>
      <p>Para una comparación detallada, lee nuestra guía sobre <a href="/__LANG__/blog/expense-tracking-methods-small-business">métodos de seguimiento de gastos para pymes</a>.</p>

      <h2>Paso 2: Digitalízate con la gestión de recibos</h2>
      <p>Los recibos de papel son el eslabón más débil. Los recibos térmicos (la mayoría de comercios) se borran en 6–18 meses. La solución: digitalizarlos inmediatamente.</p>
      <h3>Cómo funciona</h3>
      <ol>
        <li><strong>Capturar:</strong> Fotografía el recibo inmediatamente después de la compra con tu móvil o una <a href="/__LANG__/blog/receipt-scanning-apps-comparison">app de escaneo</a></li>
        <li><strong>Extraer:</strong> La tecnología OCR lee el recibo y extrae proveedor, fecha, importe e IVA</li>
        <li><strong>Categorizar:</strong> El gasto se asigna automática o manualmente a la <a href="/__LANG__/blog/business-expense-categories-guide">categoría correcta</a></li>
        <li><strong>Almacenar:</strong> El recibo digital se guarda en la nube con el registro de gasto, buscable y con respaldo</li>
      </ol>
      <h3>¿Acepta Hacienda los recibos digitales?</h3>
      <p><strong>Sí.</strong> La AEAT acepta copias digitales de recibos como documentación válida, siempre que la imagen sea legible y la información original se preserve.</p>
      <p>Para el proceso completo, consulta nuestra <a href="/__LANG__/blog/digital-receipt-management-guide">guía de gestión digital de recibos</a>.</p>

      <h2>Paso 3: Categoriza los gastos correctamente</h2>
      <p>La categorización sirve para dos propósitos: mapeo al plan de cuentas para reportes financieros precisos, y mapeo a líneas fiscales deducibles para una declaración fácil.</p>
      <h3>Categorías esenciales</h3>
      <ul>
        <li><strong>Publicidad y marketing:</strong> Anuncios, costes web, tarjetas de visita, materiales promocionales</li>
        <li><strong>Material de oficina y equipamiento:</strong> Papelería, ordenadores, mobiliario, software</li>
        <li><strong>Viajes y transporte:</strong> Vuelos, hoteles, kilometraje, parking, taxis</li>
        <li><strong>Servicios profesionales:</strong> Legal, contabilidad, consultoría</li>
        <li><strong>Seguros:</strong> Responsabilidad civil, seguro profesional, salud</li>
        <li><strong>Alquiler y suministros:</strong> Oficina, internet, teléfono, electricidad</li>
        <li><strong>Software y suscripciones:</strong> Herramientas SaaS, servicios cloud, membresías</li>
        <li><strong>Comidas y representación:</strong> Comidas con clientes, almuerzos de equipo (sujeto a límites porcentuales)</li>
      </ul>
      <p>Obtén el desglose completo en nuestra <a href="/__LANG__/blog/business-expense-categories-guide">guía de categorías de gastos empresariales</a>.</p>

      <h2>Paso 4: Separa gastos empresariales y personales</h2>
      <p>Mezclar gastos de empresa y personales crea problemas fiscales, debilita las protecciones legales y hace que los reportes financieros sean poco fiables. La solución: abre una cuenta bancaria empresarial dedicada y una tarjeta de crédito empresarial.</p>
      <p>Lee la guía completa: <a href="/__LANG__/blog/separate-business-personal-expenses">cómo separar gastos empresariales y personales</a>.</p>

      <h2>Paso 5: Maximiza las deducciones fiscales</h2>
      <p>Cada gasto empresarial legítimo que no reclamas es dinero que regalas a Hacienda.</p>
      <h3>Deducciones frecuentemente olvidadas</h3>
      <ul>
        <li><strong>Oficina en casa:</strong> Porcentaje de alquiler, suministros e internet proporcional al espacio</li>
        <li><strong>Uso del vehículo:</strong> Kilometraje o gastos reales para desplazamientos de negocio</li>
        <li><strong>Desarrollo profesional:</strong> Cursos, conferencias, libros, certificaciones</li>
        <li><strong>Suscripciones de software:</strong> Todas las herramientas SaaS que usas para el negocio</li>
        <li><strong>Comisiones bancarias:</strong> Mantenimiento de cuenta empresarial, comisiones de procesamiento de pagos</li>
        <li><strong>Amortización:</strong> Equipamiento y activos que pierden valor con el tiempo</li>
      </ul>

      <h2>Paso 6: Crea informes de gastos</h2>
      <p>Incluso como autónomo, los informes de gastos te ayudan a entender los patrones de gasto, facturar al cliente los gastos reembolsables y preparar la declaración fiscal.</p>
      <p>Aprende cómo en nuestra guía de <a href="/__LANG__/blog/expense-reports-freelancers">informes de gastos para freelancers</a>.</p>

      <h2>Paso 7: Revisa y concilia mensualmente</h2>
      <p>Dedica tiempo al final de cada mes para conciliar tus gastos con los extractos bancarios. Busca: transacciones sin justificante, gastos mal categorizados, cargos inusuales y suscripciones sin usar. Esta revisión mensual lleva solo 30–60 minutos con buen mantenimiento y te ahorra días de trabajo en época fiscal.</p>

      <p>Usa un <a href="/__LANG__/expenses">software de seguimiento de gastos</a> para capturar cada gasto deducible en tiempo real, categorizar automáticamente y estar siempre preparado para cualquier inspección.</p>
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
      <p><strong>El método de seguimiento de gastos que elijas determina cuánto tiempo dedicas a la contabilidad, cuántas deducciones capturas y lo preparado que estás para una inspección.</strong> No hay una solución universal — el mejor método depende del tamaño de tu negocio, volumen de transacciones y presupuesto.</p>

      <h2>Método 1: Recibos en papel y libro de cuentas manual</h2>
      <p><strong>Ideal para:</strong> Autónomos con menos de 20 transacciones al mes.</p>
      <p><strong>Ventajas:</strong> Sin coste, sin tecnología, fácil de empezar.</p>
      <p><strong>Desventajas:</strong> Los recibos térmicos se borran en 6–12 meses. La entrada manual es propensa a errores. Los recibos se pierden. No permite generar informes ni análisis. Documentación ilegible puede ser un problema ante Hacienda.</p>
      <p><strong>Adecuado cuando:</strong> Estás empezando y tu presupuesto es muy limitado. Pero planifica migrar a una solución digital en los primeros 6 meses.</p>

      <h2>Método 2: Hojas de cálculo (Excel/Google Sheets)</h2>
      <p><strong>Ideal para:</strong> Autónomos y pequeños empresarios con 20–100 transacciones mensuales.</p>
      <p><strong>Ventajas:</strong> Gratis, flexible, plantillas personalizables, interfaz familiar para la mayoría.</p>
      <p><strong>Desventajas:</strong> Sin automatización — cada transacción se introduce a mano. No vincula imágenes de recibos. Se vuelve caótica pasadas 100 transacciones. Errores de fórmulas pueden dar totales incorrectos. Sin <a href="/__LANG__/blog/business-expense-categories-guide">categorización</a> automática.</p>
      <p><strong>Consejo:</strong> Si usas hojas de cálculo, crea una estructura clara con columnas para fecha, proveedor, importe bruto y neto, categoría, tipo de IVA y notas. Una pestaña por mes y un resumen anual.</p>

      <h2>Método 3: Apps de seguimiento de gastos</h2>
      <p><strong>Ideal para:</strong> La mayoría de pymes y autónomos — especialmente con 50+ transacciones mensuales.</p>
      <p><strong>Ventajas:</strong> Escaneo de recibos con la cámara del móvil. OCR extrae automáticamente proveedor, importe y fecha. Categorización automática que aprende de tus patrones. Almacenamiento en la nube seguro y buscable. Informes fiscales y funciones de exportación. Captura móvil sobre la marcha.</p>
      <p><strong>Desventajas:</strong> Coste mensual (según el proveedor, 5–30 € al mes). Tiempo de configuración inicial.</p>
      <p>Apps como <a href="/__LANG__/expenses">Invoicemonk</a> ofrecen el equilibrio ideal entre facilidad de uso y el rigor documental que Hacienda exige. Capturan recibos en tiempo real, categorizan automáticamente y generan informes listos para inspección.</p>

      <h2>Método 4: Software contable completo</h2>
      <p><strong>Ideal para:</strong> Empresas con empleados, inventario o contabilidad compleja.</p>
      <p><strong>Ventajas:</strong> Todo en uno — facturación, seguimiento de gastos, nóminas e informes financieros. Funciones de reportes completas. Acceso para el asesor fiscal.</p>
      <p><strong>Desventajas:</strong> Mayor coste (20–80 € al mes). Curva de aprendizaje más pronunciada. Sobredimensionado para autónomos con necesidades simples.</p>

      <h2>Método 5: Integración de feeds bancarios</h2>
      <p><strong>Ideal para:</strong> Como complemento de cualquier otro método para cobertura completa de transacciones.</p>
      <p><strong>Ventajas:</strong> Importación automática de todas las transacciones — ninguna se escapa. Conciliación con gastos registrados manualmente. Detección de transacciones inusuales.</p>
      <p><strong>Desventajas:</strong> Sigue requiriendo categorización manual y adjuntar justificantes. No es suficiente como método único.</p>

      <h2>Nuestra recomendación</h2>
      <p>La mayoría de pymes obtienen los mejores resultados con el <strong>Método 3 (apps de seguimiento) combinado con el Método 5 (feeds bancarios)</strong>. Esta combinación te da: captura en tiempo real y fotografía de recibos, categorización automática e informes fiscales, cobertura completa de transacciones sin entrada manual y documentación lista para inspección en la nube.</p>
      <p>Sea cual sea el método que elijas, lo más importante es la constancia. Un método simple que apliques de forma consistente supera a un sistema sofisticado que abandones a las dos semanas.</p>
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
      <p><strong>Los recibos de papel son el eslabón más débil de tus registros financieros.</strong> El papel térmico — usado por el 93% de los comercios — empieza a desvanecerse en 6 meses y puede volverse completamente ilegible en 18 meses. Si un recibo es ilegible durante una inspección fiscal, no vale nada — aunque el gasto fuera perfectamente legítimo.</p>
      <p>La solución: digitaliza cada recibo inmediatamente y crea un archivo buscable, respaldado en la nube y siempre listo para cualquier revisión.</p>

      <h2>¿Por qué digitalizarse?</h2>
      <h3>Los recibos de papel fallan en múltiples niveles</h3>
      <ul>
        <li><strong>Se borran:</strong> Los recibos térmicos pierden la impresión en 6–18 meses. La luz UV, el calor y la humedad aceleran el proceso</li>
        <li><strong>Se pierden:</strong> Se caen de la cartera, desaparecen en bolsillos o acaban en la carpeta equivocada</li>
        <li><strong>No son buscables:</strong> Rebuscar en una caja de zapatos llena de recibos puede llevar horas</li>
        <li><strong>Ocupan espacio:</strong> Almacenamiento físico durante 6 años (plazo legal español) significa carpetas y más carpetas</li>
      </ul>
      <h3>Los recibos digitales lo resuelven todo</h3>
      <ul>
        <li><strong>Legibilidad permanente:</strong> Las imágenes digitales nunca se desvanecen</li>
        <li><strong>Búsqueda instantánea:</strong> Encuentra cualquier recibo en segundos — por importe, fecha, proveedor o categoría</li>
        <li><strong>Respaldo en la nube:</strong> Sin riesgo de pérdida por incendio, inundación o robo</li>
        <li><strong>Aceptado por Hacienda:</strong> La AEAT acepta recibos digitales siempre que sean legibles</li>
      </ul>

      <h2>El proceso en 3 pasos</h2>
      <h3>Paso 1: Capturar</h3>
      <p>Fotografía cada recibo <strong>inmediatamente</strong> después de la compra con tu smartphone. No esperes a la noche ni mucho menos al fin de mes. Cuanto antes escanees, mejor la calidad — y menor el riesgo de perderlo o que se borre.</p>
      <p>Usa una <a href="/__LANG__/blog/receipt-scanning-apps-comparison">app de escaneo de recibos</a> en lugar de la cámara normal. Las apps especializadas optimizan el contraste, recortan automáticamente y guardan en la resolución adecuada.</p>

      <h3>Paso 2: Extraer y organizar</h3>
      <p>La tecnología OCR lee el recibo automáticamente y extrae los datos clave: proveedor, fecha, importe, IVA y método de pago. Los datos se asignan a la <a href="/__LANG__/blog/business-expense-categories-guide">categoría de gasto</a> correspondiente.</p>
      <p>Siempre revisa los datos extraídos — el OCR es bueno pero no perfecto, especialmente con recibos manuscritos o muy desvanecidos.</p>

      <h3>Paso 3: Almacenar de forma segura</h3>
      <p>El almacenamiento en la nube garantiza que tus recibos estén seguros, accesibles en cualquier momento y con respaldo automático. Asegúrate de que tu servicio ofrezca:</p>
      <ul>
        <li>Encriptación (en tránsito y en reposo)</li>
        <li>Copias de seguridad regulares</li>
        <li>Cumplimiento de la LOPD/RGPD</li>
        <li>Acceso desde múltiples dispositivos</li>
      </ul>

      <h2>Consejos para mejores resultados de escaneo</h2>
      <ul>
        <li><strong>Escanea inmediatamente:</strong> Los recibos térmicos empiezan a borrarse desde el primer día</li>
        <li><strong>Buena iluminación:</strong> La luz natural mejora significativamente la precisión del OCR</li>
        <li><strong>Superficie plana:</strong> Coloca el recibo sobre una superficie oscura y contrastante</li>
        <li><strong>Captura completa:</strong> Todo el recibo debe estar en la imagen, incluyendo los bordes</li>
        <li><strong>Verifica los datos:</strong> Comprueba siempre que el importe extraído coincide con el original</li>
        <li><strong>Alisa los pliegues:</strong> Estira el recibo antes de escanear para mejor reconocimiento</li>
      </ul>

      <p>Para la guía completa de gestión de gastos, lee nuestro <a href="/__LANG__/blog/complete-guide-expense-management">guía completa de gestión de gastos</a>.</p>
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
      <p><strong>Cómo categorizas tus gastos determina la precisión de tus informes financieros, la facilidad de tu declaración fiscal y tu capacidad para tomar decisiones basadas en datos.</strong> Una categorización incorrecta lleva a cálculos de beneficio inexactos, deducciones perdidas y caos durante una inspección.</p>
      <p>Esta guía te muestra cómo construir un sistema de categorías que se alinee con tu plan general contable (PGC) y que esté fiscalmente optimizado.</p>

      <h2>Por qué importa la categorización</h2>
      <h3>Claridad financiera</h3>
      <p>Gastos correctamente categorizados permiten cuentas de resultados significativas. Ves al instante si tus gastos de marketing son proporcionales a tus ingresos o si tus costes de viaje se están descontrolando.</p>
      <h3>Optimización fiscal</h3>
      <p>Hacienda requiere la asignación de gastos a categorías deducibles específicas. Una categorización limpia garantiza que no se pierda ninguna deducción y que la declaración se prepare rápidamente.</p>
      <h3>Preparación ante inspecciones</h3>
      <p>Durante una inspección fiscal, debes demostrar que cada gasto deducido está asignado a la categoría correcta. Una categorización inconsistente levanta sospechas.</p>

      <h2>Categorías básicas de gastos</h2>
      <h3>Oficina y operaciones</h3>
      <ul>
        <li><strong>Material de oficina:</strong> Papel, tóner, bolígrafos, archivadores</li>
        <li><strong>Alquiler y suministros:</strong> Espacio de oficina, electricidad, agua, calefacción</li>
        <li><strong>Teléfono e internet:</strong> Línea fija, móvil, conexión a internet</li>
        <li><strong>Software y servicios cloud:</strong> Office 365, almacenamiento en nube, software sectorial</li>
        <li><strong>Hardware:</strong> Ordenadores, impresoras, monitores (amortizable según tablas oficiales)</li>
      </ul>

      <h3>Viajes y representación</h3>
      <ul>
        <li><strong>Viajes de negocios:</strong> Vuelos, tren, alquiler de coches — documenta siempre el motivo empresarial</li>
        <li><strong>Alojamiento:</strong> Hoteles y estancias durante viajes de trabajo</li>
        <li><strong>Gastos de representación:</strong> Comidas con clientes — conserva siempre el justificante con nombres de asistentes y motivo</li>
        <li><strong>Kilometraje:</strong> 0,26 €/km según las tablas del IRPF para vehículo propio</li>
        <li><strong>Dietas:</strong> Gastos de manutención según tablas oficiales en desplazamientos</li>
      </ul>

      <h3>Servicios profesionales</h3>
      <ul>
        <li><strong>Asesoría legal:</strong> Abogados para asuntos empresariales</li>
        <li><strong>Asesoría fiscal y contabilidad:</strong> Gestoría, asesor fiscal</li>
        <li><strong>Consultoría:</strong> Consultores y coaching empresarial</li>
        <li><strong>Freelancers y subcontratistas:</strong> Proveedores externos (atención: falsos autónomos)</li>
      </ul>

      <h3>Marketing y publicidad</h3>
      <ul>
        <li><strong>Publicidad online:</strong> Google Ads, redes sociales, marketing de afiliación</li>
        <li><strong>Diseño web y SEO:</strong> Creación de web, posicionamiento en buscadores</li>
        <li><strong>Tarjetas de visita e impresos:</strong> Folletos, catálogos, banners</li>
        <li><strong>Ferias y eventos:</strong> Alquiler de stand, equipamiento, entradas</li>
      </ul>

      <h3>Seguros</h3>
      <ul>
        <li><strong>Responsabilidad civil:</strong> Obligatorio para la mayoría de negocios</li>
        <li><strong>Seguro profesional:</strong> Especialmente importante para consultores y freelancers</li>
        <li><strong>Seguro de contenido:</strong> Protección del equipamiento y mercancías</li>
      </ul>

      <h2>Categorías frecuentemente olvidadas</h2>
      <ul>
        <li><strong>Oficina en casa:</strong> Porcentaje proporcional de alquiler, suministros e internet</li>
        <li><strong>Formación profesional:</strong> Cursos, seminarios, libros, plataformas de aprendizaje online</li>
        <li><strong>Comisiones bancarias:</strong> Mantenimiento de cuenta empresarial, comisiones de procesamiento</li>
        <li><strong>Cuotas profesionales:</strong> Colegios profesionales, cámaras de comercio, suscripciones a publicaciones especializadas</li>
      </ul>

      <h2>Automatizar la categorización</h2>
      <p>La categorización manual consume tiempo y es propensa a errores. <a href="/__LANG__/expenses">El seguimiento de gastos de Invoicemonk</a> aprende de tus patrones de categorización. Después de categorizar un proveedor una vez, las futuras transacciones del mismo proveedor se sugieren automáticamente. Esto te ahorra horas al mes y reduce los errores de categorización a prácticamente cero.</p>
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
      <p><strong>La app de escaneo de recibos adecuada puede ahorrarte 3–5 horas al mes en seguimiento de gastos.</strong> Pero con docenas de opciones disponibles, ¿cómo elegir? Hemos evaluado las apps más populares según los criterios que más importan a los pequeños empresarios: precisión OCR, automatización, precio e integraciones.</p>

      <h2>Los 5 criterios clave de evaluación</h2>
      <h3>1. Precisión OCR</h3>
      <p>¿Cómo de preciso es el reconocimiento de proveedor, importe, fecha e IVA? Las buenas apps alcanzan más del 95% de precisión con recibos impresos. Con recibos manuscritos la precisión baja — aquí la revisión manual es importante.</p>
      <h3>2. Categorización automática</h3>
      <p>¿Se asignan los gastos automáticamente a las categorías correctas? Las apps que aprenden de tus patrones mejoran con el tiempo y ahorran exponencialmente más tiempo.</p>
      <h3>3. Almacenamiento en la nube y seguridad</h3>
      <p>¿Los recibos están almacenados de forma segura en la nube? Busca encriptación, conformidad RGPD y copias de seguridad regulares.</p>
      <h3>4. Integraciones</h3>
      <p>¿La app funciona con tu software contable actual? Una integración fluida evita la doble entrada de datos.</p>
      <h3>5. Modo offline</h3>
      <p>¿Puedes escanear recibos sin conexión a internet? Importante durante viajes de negocios o compras en zonas con mala cobertura. La app debería almacenar los escaneos y sincronizarlos cuando haya conexión.</p>

      <h2>Qué buscar al elegir</h2>
      <ul>
        <li><strong>Reconocimiento multilingüe:</strong> Especialmente importante si compras internacionalmente</li>
        <li><strong>Detección de IVA:</strong> La app debería reconocer automáticamente distintos tipos de IVA (4%, 10%, 21%)</li>
        <li><strong>Formatos de exportación:</strong> Exportación compatible con tu gestoría o asesor fiscal</li>
        <li><strong>Multiusuario:</strong> Si los empleados también necesitan capturar recibos</li>
        <li><strong>Conformidad legal:</strong> Asegúrate de que la app cumple los requisitos de la AEAT para el almacenamiento digital de justificantes</li>
      </ul>

      <h2>Checklist de selección</h2>
      <ul>
        <li>☐ Precisión OCR superior al 95% con recibos españoles comunes</li>
        <li>☐ Categorización automática con IA que aprende</li>
        <li>☐ Exportación compatible con tu software contable</li>
        <li>☐ App móvil con escaneo offline</li>
        <li>☐ Archivado digital conforme a la normativa fiscal</li>
        <li>☐ Procesamiento de datos conforme al RGPD</li>
        <li>☐ Detección de IVA (4%, 10%, 21%)</li>
      </ul>

      <h2>Consejos para mejores resultados de escaneo</h2>
      <ul>
        <li><strong>Escanea inmediatamente:</strong> Los recibos térmicos se borran rápido — escanéalos el mismo día</li>
        <li><strong>Buena iluminación:</strong> La luz natural da los mejores resultados OCR</li>
        <li><strong>Superficie contrastante:</strong> Coloca el recibo sobre una superficie oscura y lisa</li>
        <li><strong>Captura completa:</strong> Asegúrate de que todo el recibo, incluyendo bordes, esté en la imagen</li>
        <li><strong>Verifica datos:</strong> Compara siempre el importe extraído con el original</li>
        <li><strong>Alisa pliegues:</strong> Estira los recibos arrugados antes de escanear</li>
      </ul>

      <p>Para el flujo completo de gestión digital de recibos, lee nuestra <a href="/__LANG__/blog/digital-receipt-management-guide">guía de gestión digital de recibos</a>.</p>
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
      <p><strong>Mezclar gastos empresariales y personales es uno de los errores financieros más comunes y peligrosos que cometen los pequeños empresarios.</strong> Enturbia tu visión financiera, crea problemas fiscales y puede incluso debilitar la protección legal de tu sociedad limitada.</p>

      <h2>Por qué la separación es innegociable</h2>
      <h3>Cumplimiento fiscal</h3>
      <p>La AEAT exige justificantes claros para los gastos deducibles. Cuando gastos empresariales y personales pasan por la misma cuenta, la prueba se complica enormemente. En caso de inspección, la carga de la prueba recae sobre ti — y si no puedes demostrar qué gasto fue empresarial, Hacienda puede rechazar la deducción.</p>

      <h3>Protección legal</h3>
      <p>Si operas como Sociedad Limitada (SL), mezclar fondos puede llevar al levantamiento del velo corporativo. Eso significa que un tribunal puede hacerte personalmente responsable de las deudas de la empresa. Incluso como autónomo, la mezcla de cuentas dificulta la separación entre patrimonio empresarial y personal.</p>

      <h3>Claridad financiera</h3>
      <p>Sin datos financieros precisos, no puedes tomar buenas decisiones de negocio. Cuando las compras del supermercado y las cenas con clientes pasan por la misma cuenta, tus márgenes de beneficio, informes de ingresos y previsiones presupuestarias carecen de sentido. Simplemente no sabes cuán rentable es realmente tu negocio.</p>

      <h2>Guía paso a paso para la separación</h2>
      <h3>1. Abrir una cuenta empresarial dedicada</h3>
      <p>Abre una cuenta corriente exclusiva para tu negocio. Muchos bancos ofrecen cuentas empresariales específicas — compara comisiones, funciones de banca online e integraciones con software contable. Para autónomos, hay cuentas desde 0–10 € al mes.</p>

      <h3>2. Obtener una tarjeta empresarial</h3>
      <p>Una tarjeta de crédito o débito empresarial separada simplifica enormemente el seguimiento de gastos. Todos los gastos del negocio se agrupan automáticamente y son fáciles de categorizar.</p>

      <h3>3. Establecer un salario/nómina regular</h3>
      <p>Págate un salario regular (si eres SL) o realiza retiradas periódicas y documentadas (si eres autónomo). Evita vivir directamente de la caja del negocio. Una cantidad fija mensual crea previsibilidad.</p>

      <h3>4. Crear normas de gastos</h3>
      <p>Documenta claramente qué cuenta como gasto empresarial y qué no. Las zonas grises — como una cena con amigos donde habláis de trabajo o el uso del teléfono personal para llamadas de negocio — deben tener reglas definidas.</p>

      <h3>5. Conciliar mensualmente</h3>
      <p>Realiza una conciliación mensual. Compara cada extracto con tus gastos registrados. Busca: gastos personales en la cuenta empresarial, gastos de negocio en la cuenta personal y transacciones sin asignar.</p>

      <h2>¿Qué hacer si ya tienes las cuentas mezcladas?</h2>
      <p>Si hasta ahora lo has gestionado todo con una sola cuenta, el cambio es más fácil de lo que piensas:</p>
      <ol>
        <li>Abre una cuenta empresarial inmediatamente</li>
        <li>A partir del mes siguiente, canaliza todos los pagos empresariales por la nueva cuenta</li>
        <li>Repasa los meses anteriores — marca cada transacción como «empresarial» o «personal»</li>
        <li>Configura domiciliaciones y transferencias recurrentes para gastos empresariales fijos</li>
      </ol>

      <p>Usa <a href="/__LANG__/expenses">Invoicemonk</a> para categorizar automáticamente tus gastos empresariales y separarlos limpiamente de los personales.</p>
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
      <p><strong>Como freelancer, llevas todos los sombreros — incluido el de contable.</strong> Ya sea para facturar a un cliente los gastos relacionados con un proyecto o para organizar tus gastos para la declaración fiscal, un informe de gastos limpio es indispensable.</p>

      <h2>Cuándo los freelancers necesitan informes de gastos</h2>
      <h3>Reembolso del cliente</h3>
      <p>Si tu contrato incluye el reembolso de gastos relacionados con el proyecto — viajes, materiales, licencias de software —, necesitas documentarlos profesionalmente y presentarlos con la factura. Un informe de gastos limpio acelera considerablemente la aprobación y el pago.</p>
      <h3>Declaración fiscal</h3>
      <p>Para la declaración trimestral y anual del IRPF necesitas un panorama completo de todos tus gastos deducibles. Los informes mensuales hacen que la declaración sea un paseo, porque todo está ya categorizado y documentado.</p>
      <h3>Rentabilidad del proyecto</h3>
      <p>Sin seguimiento de gastos por proyecto, no sabes cuán rentable es realmente un encargo. Un proyecto que genera 5.000 € de ingresos pero causa 2.000 € en viajes, materiales y software tiene un margen mucho menor del esperado.</p>
      <h3>Planificación presupuestaria</h3>
      <p>Los informes regulares revelan patrones de gasto. Quizá descubras que el 20% de tus costes son suscripciones de software que no usas del todo — o que los viajes para ciertos clientes son desproporcionadamente caros.</p>

      <h2>Qué incluir en un informe de gastos</h2>
      <p>Un informe de gastos completo incluye para cada partida:</p>
      <ol>
        <li><strong>Fecha del gasto:</strong> ¿Cuándo se realizó la compra?</li>
        <li><strong>Proveedor:</strong> ¿A quién se pagó?</li>
        <li><strong>Descripción:</strong> ¿Qué se compró y por qué? El motivo empresarial debe ser claro</li>
        <li><strong>Importe:</strong> Base imponible, IVA y total</li>
        <li><strong>Categoría:</strong> Viaje, material, software, representación, etc.</li>
        <li><strong>Justificante:</strong> Recibo digitalizado adjunto</li>
        <li><strong>Proyecto/Cliente:</strong> Asignación al encargo correspondiente</li>
      </ol>

      <h2>Mejores prácticas para freelancers</h2>
      <ul>
        <li><strong>Registro en tiempo real:</strong> Registra cada gasto inmediatamente — no al final del mes. Usa el móvil para fotografiar y categorizar recibos sobre la marcha</li>
        <li><strong>Digitalización inmediata:</strong> Escanea cada recibo de papel el día de la compra. Los recibos térmicos se borran rápido y un recibo ilegible no vale nada</li>
        <li><strong>Categorías consistentes:</strong> Usa las mismas categorías que en tu plan de cuentas. No alternes entre «Viaje» y «Transporte» para el mismo tipo de gasto</li>
        <li><strong>Creación regular:</strong> Elabora informes mensuales o por proyecto. No esperes al final del año</li>
        <li><strong>Separación clara:</strong> Mantén informes separados para gastos reembolsables (a cargo del cliente) y no reembolsables (propios)</li>
        <li><strong>Motivo empresarial:</strong> Documenta siempre el propósito de negocio, especialmente en comidas de representación y viajes</li>
      </ul>

      <h2>Plantillas y automatización</h2>
      <p>Crea una plantilla que puedas reutilizar cada mes o proyecto. Mejor aún: usa una <a href="/__LANG__/expenses">app de seguimiento de gastos</a> que genere informes automáticamente a partir de los gastos registrados. Ahorras tiempo, eliminas errores de tecleo y te aseguras de que no se olvide ningún recibo.</p>

      <p>Crea informes de gastos profesionales con un clic en <a href="/__LANG__/expenses">Invoicemonk</a> — con categorización automática, recibos adjuntos y exportación para tu asesor fiscal.</p>
    `
  }
];

registerBlogPosts('es', posts);
