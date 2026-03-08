import type { HelpGuide } from './helpGuides';
import { registerHelpGuides } from '@/utils/i18nData';

const helpGuidesES: HelpGuide[] = [
  // ─── Guía 1: Primeros Pasos ───
  {
    slug: 'getting-started',
    title: 'Primeros pasos con Invoicemonk — Tu primera factura en 5 minutos',
    description: 'Configura tu cuenta, completa tu perfil empresarial y emite tu primera factura en cumplimiento normativo.',
    icon: 'Rocket',
    category: 'getting-started',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Crear tu cuenta', text: 'Visita app.invoicemonk.com, haz clic en "Empezar Gratis", ingresa tus datos y verifica tu correo electrónico.' },
      { name: 'Configurar perfil empresarial', text: 'Ingresa el nombre de la empresa, razón social, país, NIF/CIF, logotipo, dirección y datos fiscales si corresponde.' },
      { name: 'Elegir tu plan', text: 'Comienza con el plan Starter gratuito o actualiza a Starter de Pago, Professional o Business para más funciones.' },
      { name: 'Configurar métodos de pago', text: 'Agrega tu cuenta bancaria o datos de pago para que los clientes sepan cómo pagarte.' },
    ],
    relatedGuides: ['managing-clients', 'creating-invoices', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com/signup',
    faq: [
      { question: '¿Invoicemonk es gratuito?', answer: 'Sí, el plan Starter es completamente gratuito. Puedes crear facturas, gestionar clientes y hacer seguimiento de gastos básicos sin coste. Actualiza para funciones avanzadas como informes, gestión de equipos y personalización de marca.' },
      { question: '¿Necesito un NIF para usar Invoicemonk?', answer: 'No es estrictamente necesario para crear una cuenta, pero agregar tu número de identificación fiscal asegura que tus facturas cumplan con las regulaciones locales.' },
      { question: '¿Cómo completo mi perfil empresarial al 100%?', answer: 'Completa todos los campos: nombre de empresa, razón social, NIF/CIF, número de IVA (si aplica), logotipo, dirección completa, correo de contacto y teléfono. Invoicemonk muestra tu porcentaje de completado y resalta los campos faltantes.' },
    ],
    content: `
      <h2>Paso 1: Crear tu cuenta</h2>
      <p>Empezar con Invoicemonk toma menos de dos minutos. Visita <a href="https://app.invoicemonk.com" target="_blank" rel="noopener noreferrer">app.invoicemonk.com</a> y haz clic en <strong>"Empezar Gratis"</strong>.</p>
      <ul>
        <li>Ingresa tu nombre completo, dirección de correo electrónico y una contraseña segura</li>
        <li>Verifica tu correo electrónico haciendo clic en el enlace enviado a tu bandeja de entrada</li>
        <li>La verificación de correo es necesaria antes de poder emitir facturas</li>
      </ul>

      <h2>Paso 2: Configurar tu perfil empresarial</h2>
      <p>Después de iniciar sesión, se te pedirá crear tu empresa. Esta información aparece en todas tus facturas y garantiza el cumplimiento normativo.</p>
      <ul>
        <li>Ingresa el <strong>nombre de la empresa</strong> y la <strong>razón social</strong></li>
        <li>Selecciona tu <strong>país/jurisdicción</strong></li>
        <li>Agrega tu <strong>Número de Identificación Fiscal (NIF/CIF)</strong></li>
        <li>Sube tu <strong>logotipo empresarial</strong> (aparece en todas las facturas)</li>
        <li>Agrega dirección comercial, correo de contacto y teléfono</li>
        <li>Si estás registrado para IVA, activa la opción e ingresa tu número de IVA</li>
      </ul>

      <h2>Paso 3: Elegir tu plan</h2>
      <p>Invoicemonk ofrece un plan Starter gratuito para empezar. A medida que tu negocio crece, actualiza para más funciones:</p>
      <ul>
        <li><strong>Starter (Gratuito)</strong> — Facturación básica y gestión de clientes</li>
        <li><strong>Starter de Pago</strong> — Más facturas y seguimiento de gastos</li>
        <li><strong>Professional</strong> — Informes, gestión de equipos, plantillas personalizadas</li>
        <li><strong>Business</strong> — Suite completa con registros de auditoría, multi-moneda y soporte prioritario</li>
      </ul>
      <p>Los precios se ajustan por región. Visita nuestra <a href="__LANG__/pricing">página de precios</a> para todos los detalles.</p>

      <h2>Paso 4: Configurar métodos de pago</h2>
      <p>Ve a <strong>Configuración de Empresa</strong> y agrega tus datos de pago (cuenta bancaria, etc.). Estos aparecen en tus facturas para que los clientes sepan exactamente cómo pagarte.</p>

      <div class="callout">
        <strong>Consejo:</strong> Completa tu perfil empresarial al 100% — esto asegura que todas tus facturas cumplan completamente con las regulaciones locales. Invoicemonk muestra tu porcentaje de completado y resalta los campos faltantes.
      </div>
    `,
  },

  // ─── Guía 2: Gestión de Clientes ───
  {
    slug: 'managing-clients',
    title: 'Construir y gestionar tu base de datos de clientes',
    description: 'Agrega clientes, almacena sus datos y crea facturas rápidamente sin volver a ingresar información.',
    icon: 'Users',
    category: 'getting-started',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar a Clientes', text: 'Haz clic en "Clientes" en la barra lateral para acceder a tu base de datos de clientes.' },
      { name: 'Agregar nuevo cliente', text: 'Haz clic en "Agregar Cliente", elige Empresa o Particular e ingresa nombre, correo, teléfono, país e identificación fiscal.' },
      { name: 'Agregar datos de dirección', text: 'Expande la sección Dirección para agregar la dirección comercial completa para cumplimiento.' },
      { name: 'Buscar y gestionar', text: 'Usa la barra de búsqueda para encontrar clientes por nombre o correo. Haz clic en cualquier tarjeta de cliente para ver detalles e historial de facturas.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'notifications-reminders'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Por qué se requiere el NIF del cliente para facturas B2B?', answer: 'Para transacciones B2B, las regulaciones fiscales exigen el número de identificación fiscal del cliente en la factura. Invoicemonk te advertirá si intentas emitir una factura B2B sin él.' },
      { question: '¿Puedo importar clientes desde una hoja de cálculo?', answer: 'Actualmente, los clientes se agregan individualmente a través del panel. La importación masiva por CSV está planificada para una versión futura.' },
    ],
    content: `
      <h2>Agregar un nuevo cliente</h2>
      <p>Antes de emitir facturas, necesitas agregar tus clientes. Invoicemonk almacena todos los datos de los clientes para que puedas crear facturas rápidamente sin volver a ingresar información.</p>
      <ul>
        <li>Navega a <strong>Clientes</strong> en la barra lateral</li>
        <li>Haz clic en <strong>Agregar Cliente</strong></li>
        <li>Elige el tipo de cliente: <strong>Empresa</strong> o <strong>Particular</strong></li>
        <li>Ingresa nombre, correo y teléfono del cliente</li>
        <li>Selecciona el país/ubicación del cliente</li>
        <li>Para cumplimiento, agrega su <strong>identificación fiscal</strong> — especialmente importante para transacciones B2B</li>
        <li>Para empresas, opcionalmente agrega el <strong>número de registro mercantil</strong> y persona de contacto</li>
        <li>Expande la sección <strong>Dirección</strong> para agregar la dirección completa</li>
      </ul>

      <h2>Buscar y gestionar clientes</h2>
      <ul>
        <li>Usa la <strong>barra de búsqueda</strong> para encontrar clientes rápidamente por nombre o correo</li>
        <li>Haz clic en cualquier tarjeta de cliente para ver detalles, historial de facturas y monto total facturado</li>
        <li>Edita los datos del cliente en cualquier momento desde la página de detalles</li>
      </ul>

      <div class="callout">
        <strong>Nota de cumplimiento:</strong> Para transacciones B2B, la identificación fiscal del cliente es obligatoria para el cumplimiento de facturación. Invoicemonk te advertirá si intentas emitir una factura B2B sin la identificación fiscal del cliente.
      </div>
    `,
  },

  // ─── Guía 3: Creación de Facturas ───
  {
    slug: 'creating-invoices',
    title: 'Crear facturas profesionales en cumplimiento normativo',
    description: 'Crea, emite, envía y descarga facturas verificadas criptográficamente con pista de auditoría completa.',
    icon: 'FileText',
    category: 'core-features',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Iniciar nueva factura', text: 'Haz clic en "Crear Factura" desde el panel o navega a Facturas → Nueva Factura.' },
      { name: 'Seleccionar cliente y plantilla', text: 'Elige un cliente de tu base de datos y selecciona una plantilla de factura.' },
      { name: 'Agregar líneas', text: 'Ingresa descripciones, cantidades y precios unitarios. El impuesto se calcula automáticamente para empresas registradas.' },
      { name: 'Guardar o emitir', text: 'Guarda como Borrador para editar después, o Emite para bloquear la factura, asignar un número y generar un código QR de verificación.' },
      { name: 'Enviar al cliente', text: 'Haz clic en Enviar para enviar la factura por correo. El cliente recibe un enlace para verla en línea.' },
    ],
    relatedGuides: ['managing-clients', 'payments-receipts', 'invoice-verification', 'credit-notes'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Puedo editar una factura después de emitirla?', answer: 'No. Las facturas emitidas están bloqueadas para mantener la integridad de la auditoría. Si necesitas hacer cambios, anula la factura y crea una nueva, o emite una nota de crédito para ajustes.' },
      { question: '¿Qué estados de factura están disponibles?', answer: 'Borrador, Emitida, Enviada, Vista, Pagada, Anulada y Acreditada. Cada estado se rastrea con marcas de tiempo en la pista de auditoría.' },
      { question: '¿El IVA se calcula automáticamente?', answer: 'Sí, para empresas registradas, la tasa aplicable se calcula automáticamente. Puedes marcar líneas individuales como exentas si corresponde.' },
    ],
    content: `
      <h2>Crear una nueva factura</h2>
      <p>El flujo de facturación es el corazón de Invoicemonk. Cada factura se verifica criptográficamente e incluye una pista de auditoría inmutable.</p>
      <ul>
        <li>Haz clic en <strong>Crear Factura</strong> desde el panel o navega a <strong>Facturas → Nueva Factura</strong></li>
        <li>Selecciona un <strong>cliente</strong> de tu base de datos (o agrega uno nuevo en línea)</li>
        <li>Elige una <strong>plantilla de factura</strong> (plan Professional y superiores)</li>
        <li>Establece la <strong>fecha de emisión</strong> y la <strong>fecha de vencimiento</strong></li>
      </ul>

      <h2>Agregar líneas</h2>
      <ul>
        <li>Ingresa una <strong>descripción</strong> para cada artículo</li>
        <li>Establece la <strong>cantidad</strong> y el <strong>precio unitario</strong></li>
        <li>La tasa de impuesto se calcula automáticamente para empresas registradas</li>
        <li>Marca artículos individuales como <strong>exentos de IVA</strong> si corresponde</li>
        <li>Agrega notas, términos y un resumen opcionales</li>
        <li>Selecciona el <strong>método de pago</strong> a mostrar en la factura</li>
      </ul>

      <h2>Guardar vs. Emitir</h2>
      <ul>
        <li><strong>Guardar como Borrador:</strong> Guarda la factura sin asignar un número. Puedes editarla después.</li>
        <li><strong>Emitir:</strong> Bloquea la factura, asigna un número oficial, crea un hash criptográfico y genera un código QR de verificación. Las facturas emitidas no pueden editarse.</li>
      </ul>

      <h2>Estados de factura</h2>
      <ul>
        <li><strong>Borrador</strong> — Guardada pero aún no emitida</li>
        <li><strong>Emitida</strong> — Oficialmente emitida con número y código de verificación</li>
        <li><strong>Enviada</strong> — Correo entregado al cliente</li>
        <li><strong>Vista</strong> — El cliente ha abierto el enlace de la factura</li>
        <li><strong>Pagada</strong> — Pago completo registrado</li>
        <li><strong>Anulada</strong> — Cancelada (con motivo registrado)</li>
        <li><strong>Acreditada</strong> — Se ha emitido una nota de crédito para esta factura</li>
      </ul>

      <h2>Enviar facturas</h2>
      <p>Desde la página de detalle de la factura, haz clic en <strong>Enviar</strong> para enviar la factura por correo a tu cliente. El cliente recibe un correo profesional con un enlace para ver la factura en línea. Serás notificado cuando el cliente la vea.</p>

      <h2>Descargar PDFs</h2>
      <p>Haz clic en <strong>Descargar PDF</strong> en cualquier factura emitida para obtener un PDF profesional con tu logotipo, código QR y todos los detalles de cumplimiento.</p>
    `,
  },

  // ─── Guía 4: Pagos y Recibos ───
  {
    slug: 'payments-receipts',
    title: 'Registrar pagos y generar recibos',
    description: 'Registra pagos totales o parciales y genera automáticamente recibos verificados criptográficamente.',
    icon: 'CreditCard',
    category: 'core-features',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Abrir la factura', text: 'Navega a la página de Facturas y abre la factura para la que deseas registrar el pago.' },
      { name: 'Registrar pago', text: 'Haz clic en "Registrar Pago", ingresa el monto, fecha, método de pago y opcionalmente sube un comprobante.' },
      { name: 'Gestionar pagos parciales', text: 'Registra múltiples pagos parciales para una sola factura. El estado cambia a "Pagada" solo cuando se recibe el monto total.' },
      { name: 'Ver y compartir recibos', text: 'Navega a Recibos para ver todos los recibos generados. Descarga PDFs o comparte el enlace de verificación.' },
    ],
    relatedGuides: ['creating-invoices', 'invoice-verification', 'reports-exports'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Los recibos se generan automáticamente?', answer: 'Sí. Cada vez que registras un pago, se genera automáticamente un recibo oficial con número único, ID de verificación y todos los detalles del pago.' },
      { question: '¿Puedo registrar pagos parciales?', answer: 'Sí. Puedes registrar múltiples pagos parciales para una sola factura. La factura muestra el total acumulado y solo cambia a "Pagada" cuando se recibe el monto total.' },
    ],
    content: `
      <h2>Registrar un pago</h2>
      <p>Cuando tu cliente paga, registrar el pago en Invoicemonk genera automáticamente un recibo inmutable con verificación criptográfica.</p>
      <ul>
        <li>Abre la factura desde la página de <strong>Facturas</strong></li>
        <li>Haz clic en <strong>Registrar Pago</strong></li>
        <li>Ingresa el monto, fecha y método de pago</li>
        <li>Opcionalmente sube un comprobante de pago (captura de transferencia, etc.)</li>
        <li>Haz clic en <strong>Registrar</strong> — el estado de la factura cambia a "Pagada" si está totalmente pagada</li>
      </ul>

      <h2>Pagos parciales</h2>
      <p>Puedes registrar múltiples pagos parciales para una sola factura. La factura muestra el total acumulado de pagos recibidos vs. el monto adeudado. El estado cambia a "Pagada" solo cuando se recibe el monto total.</p>

      <h2>Recibos automáticos</h2>
      <ul>
        <li>Cada pago genera automáticamente un recibo oficial</li>
        <li>Los recibos incluyen número único, ID de verificación y todos los detalles del pago</li>
        <li>Navega a <strong>Recibos</strong> para ver todos los recibos generados</li>
        <li>Descarga PDFs de recibos o comparte el enlace de verificación con clientes</li>
      </ul>

      <h2>Verificación de recibos</h2>
      <p>Cada recibo tiene un enlace público de verificación que cualquier persona puede usar para confirmar su autenticidad. Comparte el enlace o permite que los clientes escaneen el código QR en el PDF.</p>
    `,
  },

  // ─── Guía 5: Verificación de Facturas ───
  {
    slug: 'invoice-verification',
    title: 'Verificación por código QR — Demostrando la autenticidad de la factura',
    description: 'Comprende cómo la verificación criptográfica y los códigos QR demuestran la autenticidad de los documentos.',
    icon: 'Shield',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Emitir una factura', text: 'Al emitir una factura, Invoicemonk crea automáticamente un hash criptográfico y genera un ID de verificación único y código QR.' },
      { name: 'Compartir con confianza', text: 'Envía la factura a tu cliente. El código QR está integrado en el PDF y la vista en línea.' },
      { name: 'Verificar autenticidad', text: 'Cualquier persona puede escanear el código QR o visitar la URL de verificación para confirmar que el documento es genuino y no ha sido alterado.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: '/compliance',
    faq: [
      { question: '¿Cualquier persona puede verificar mis facturas?', answer: 'Sí. La página de verificación es pública. Cualquier persona con el código QR o URL de verificación — clientes, auditores, reguladores — puede confirmar independientemente la autenticidad del documento.' },
      { question: '¿Qué muestra la página de verificación?', answer: 'La página de verificación muestra el estado del documento, montos, fechas y confirma que los datos coinciden con el hash criptográfico original, demostrando que la factura no ha sido alterada.' },
    ],
    content: `
      <h2>Cómo funciona la verificación</h2>
      <p>Cada factura y recibo emitido en Invoicemonk tiene un ID de verificación único y código QR. Esto permite que cualquier persona — tu cliente, un auditor o un regulador — verifique independientemente la autenticidad del documento.</p>
      <ul>
        <li>Cuando se emite una factura, Invoicemonk crea un <strong>hash criptográfico</strong> de todos los datos de la factura</li>
        <li>Se asigna un <strong>ID de verificación único</strong> y se genera un <strong>código QR</strong></li>
        <li>El código QR enlaza a una página pública de verificación que muestra los detalles de la factura</li>
        <li>Cualquier persona que escanee el código QR o visite la URL de verificación puede confirmar que la factura es genuina y no ha sido alterada</li>
      </ul>

      <h2>Verificar una factura</h2>
      <ul>
        <li>Escanea el <strong>código QR</strong> en cualquier factura o recibo de Invoicemonk</li>
        <li>O visita la <strong>URL de verificación</strong> directamente</li>
        <li>La página de verificación muestra el estado del documento, montos, fechas y confirmación de que los datos coinciden</li>
      </ul>
    `,
  },

  // ─── Guía 6: Notas de Crédito ───
  {
    slug: 'credit-notes',
    title: 'Emitir notas de crédito para facturas anuladas o ajustadas',
    description: 'Revierte o ajusta facturas emitidas manteniendo una pista de auditoría completa y auditable.',
    icon: 'RotateCcw',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar a la factura original', text: 'Abre la factura que necesita ser revertida o ajustada.' },
      { name: 'Anular la factura', text: 'Haz clic en "Anular" y proporciona un motivo. Una nota de crédito se genera automáticamente.' },
      { name: 'Ver notas de crédito', text: 'Navega a Notas de Crédito en la barra lateral para ver todas las notas con sus facturas vinculadas.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Cuándo debo emitir una nota de crédito?', answer: 'Emite una nota de crédito cuando se ha cobrado de más al cliente, los servicios no fueron prestados, una factura fue emitida por error o se necesita un reembolso parcial.' },
      { question: '¿Puedo editar una nota de crédito después de crearla?', answer: 'No. Al igual que las facturas, las notas de crédito son inmutables una vez creadas. Reciben su propio número único e ID de verificación para la integridad de la auditoría.' },
    ],
    content: `
      <h2>Cuándo usar notas de crédito</h2>
      <p>Cuando necesitas revertir o ajustar una factura emitida, Invoicemonk soporta notas de crédito que mantienen una pista de auditoría completa.</p>
      <ul>
        <li>Se ha cobrado de más al cliente</li>
        <li>Los servicios no fueron prestados</li>
        <li>La factura fue emitida por error</li>
        <li>Se necesita un reembolso parcial</li>
      </ul>

      <h2>Crear una nota de crédito</h2>
      <ul>
        <li>Navega a la <strong>factura original</strong></li>
        <li>Haz clic en <strong>Anular</strong> y proporciona un motivo</li>
        <li>Una nota de crédito se genera automáticamente referenciando la factura original</li>
        <li>La nota de crédito recibe su propio número único e ID de verificación</li>
      </ul>

      <h2>Ver notas de crédito</h2>
      <ul>
        <li>Navega a <strong>Notas de Crédito</strong> en la barra lateral</li>
        <li>Busca por número de nota de crédito, número de factura original o nombre del cliente</li>
        <li>Haz clic en cualquier nota de crédito para ver los detalles completos y la factura vinculada</li>
      </ul>
    `,
  },

  // ─── Guía 7: Seguimiento de Gastos ───
  {
    slug: 'expense-tracking',
    title: 'Rastrear y categorizar tus gastos empresariales',
    description: 'Registra gastos, categorízalos y visualiza a dónde va tu dinero con análisis visuales.',
    icon: 'Receipt',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar a Gastos', text: 'Haz clic en "Gastos" en la barra lateral para acceder al rastreador de gastos.' },
      { name: 'Agregar un gasto', text: 'Haz clic en "Agregar Gasto", ingresa monto, fecha, descripción, categoría, nombre del proveedor y notas opcionales.' },
      { name: 'Filtrar y buscar', text: 'Filtra por categoría, busca por descripción o proveedor y alterna entre períodos contables.' },
      { name: 'Exportar tus datos', text: 'Exporta gastos como CSV o JSON para tu contador o declaración fiscal, delimitado al período seleccionado.' },
    ],
    relatedGuides: ['accounting-overview', 'reports-exports', 'business-settings'],
    targetFeature: '/expenses',
    faq: [
      { question: '¿Qué categorías de gastos están disponibles?', answer: 'Invoicemonk ofrece categorías predeterminadas incluyendo Material de Oficina, Viajes, Software, Marketing, Servicios Profesionales y Servicios Públicos. Las categorías te ayudan a ver análisis visuales de a dónde va tu dinero.' },
      { question: '¿Puedo exportar gastos para mi contador?', answer: 'Sí. Exporta gastos en formato CSV o JSON. Las exportaciones están delimitadas al período contable y cuenta de moneda seleccionados.' },
    ],
    content: `
      <h2>Agregar un gasto</h2>
      <p>El rastreador de gastos de Invoicemonk te ayuda a registrar gastos empresariales, categorizarlos y ver a dónde va tu dinero — todo separado por cuenta de moneda para una contabilidad precisa.</p>
      <ul>
        <li>Navega a <strong>Gastos</strong> en la barra lateral</li>
        <li>Haz clic en <strong>Agregar Gasto</strong></li>
        <li>Ingresa monto, fecha y descripción</li>
        <li>Selecciona una categoría (Material de Oficina, Viajes, Software, Marketing, Servicios Profesionales, Servicios Públicos, etc.)</li>
        <li>Agrega nombre del proveedor y notas opcionales</li>
        <li>Guarda el gasto</li>
      </ul>

      <h2>Filtrar y buscar</h2>
      <ul>
        <li>Filtra gastos por categoría usando el desplegable</li>
        <li>Busca por descripción, proveedor o notas</li>
        <li>Alterna entre períodos contables (mensual, trimestral, anual)</li>
      </ul>

      <h2>Análisis de gastos</h2>
      <p>El panel muestra un análisis visual de gastos por categoría con porcentajes. Ve el total de gastos del período seleccionado de un vistazo.</p>

      <h2>Exportar gastos</h2>
      <p>Exporta tus gastos como CSV o JSON para tu contador o declaración fiscal. Las exportaciones están delimitadas al período y cuenta de moneda seleccionados.</p>
    `,
  },

  // ─── Guía 8: Visión General Contable ───
  {
    slug: 'accounting-overview',
    title: 'Tu panorama financiero — Ingresos, gastos y resultados',
    description: 'Obtén una visión panorámica de tus finanzas con vistas de ingresos, gastos y beneficio/pérdida.',
    icon: 'Calculator',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Ver ingresos contables', text: 'Consulta todos los ingresos de facturas pagadas, filtrados por período contable, con tendencias a lo largo del tiempo.' },
      { name: 'Revisar gastos contables', text: 'Revisa todos los gastos registrados con análisis por categoría y comparaciones entre períodos.' },
      { name: 'Verificar resultados contables', text: 'Consulta el cálculo de beneficio/pérdida neto y margen de beneficio, todo delimitado por cuenta de moneda.' },
    ],
    relatedGuides: ['expense-tracking', 'reports-exports', 'analytics'],
    targetFeature: '/accounting',
    faq: [
      { question: '¿Invoicemonk sustituye un software contable?', answer: 'Las funciones contables de Invoicemonk son una herramienta de gestión para visibilidad diaria de tus finanzas. Para contabilidad formal y declaración fiscal, consulta siempre con un contador cualificado.' },
      { question: '¿Por qué los resultados están separados por cuenta de moneda?', answer: 'Para garantizar precisión, todos los datos financieros se mantienen en una sola moneda por cuenta. Sin mezcla de monedas, tus cálculos de beneficio/pérdida son siempre precisos.' },
    ],
    content: `
      <h2>Ingresos contables</h2>
      <p>La sección Contabilidad te ofrece una visión panorámica de las finanzas de tu negocio con tres vistas principales.</p>
      <ul>
        <li>Consulta todos los ingresos de facturas pagadas</li>
        <li>Filtra por período contable</li>
        <li>Visualiza tendencias de ingresos a lo largo del tiempo</li>
      </ul>

      <h2>Gastos contables</h2>
      <ul>
        <li>Revisa todos los gastos registrados</li>
        <li>Análisis por categoría con gráficos visuales</li>
        <li>Comparación entre períodos</li>
      </ul>

      <h2>Resultados contables</h2>
      <ul>
        <li>Cálculo de beneficio/pérdida neto (Ingresos menos Gastos)</li>
        <li>Consulta tu margen de beneficio de un vistazo</li>
        <li>Todos los datos delimitados por cuenta de moneda — sin mezcla de monedas</li>
      </ul>

      <div class="callout">
        <strong>Importante:</strong> Las funciones contables de Invoicemonk son una herramienta de gestión, no un sustituto de software contable profesional. Consulta siempre con un contador cualificado para la declaración fiscal.
      </div>
    `,
  },

  // ─── Guía 9: Informes y Exportaciones ───
  {
    slug: 'reports-exports',
    title: 'Generar informes en cumplimiento normativo',
    description: 'Genera informes profesionales de ingresos, recibos, gastos, contabilidad y cumplimiento.',
    icon: 'BarChart3',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar a Informes', text: 'Haz clic en "Informes" en la barra lateral para acceder al generador de informes.' },
      { name: 'Seleccionar categoría', text: 'Elige entre Ingresos, Recibos, Gastos, Contabilidad o Cumplimiento.' },
      { name: 'Establecer parámetros', text: 'Selecciona el año y el tipo específico de informe dentro de la categoría.' },
      { name: 'Generar y descargar', text: 'Haz clic en "Generar" para descargar en formato JSON o CSV. Todos los informes están delimitados a tu cuenta de moneda activa.' },
    ],
    relatedGuides: ['accounting-overview', 'expense-tracking', 'analytics', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Qué formatos de informe están disponibles?', answer: 'Los informes se pueden descargar en formato JSON o CSV. CSV es ideal para hojas de cálculo como Excel o Google Sheets, mientras que JSON funciona bien para integraciones.' },
      { question: '¿Los informes son de moneda única?', answer: 'Sí. Todos los informes están delimitados a tu cuenta de moneda activa para garantizar precisión. Cambia de cuenta de moneda para generar informes de diferentes monedas.' },
    ],
    content: `
      <h2>Categorías de informes</h2>
      <p>Invoicemonk genera informes profesionales en cinco categorías. Los informes están disponibles en los planes Professional y Business.</p>

      <h3>Informes de ingresos</h3>
      <ul>
        <li>Resumen de ingresos por período</li>
        <li>Ingresos por cliente</li>
        <li>Análisis de antigüedad para facturas pendientes</li>
      </ul>

      <h3>Informes de recibos</h3>
      <ul>
        <li>Registro de recibos de pago</li>
        <li>Auditoría de verificación de recibos</li>
      </ul>

      <h3>Informes de gastos</h3>
      <ul>
        <li>Resumen de gastos por categoría</li>
        <li>Gastos por proveedor</li>
      </ul>

      <h3>Informes contables</h3>
      <ul>
        <li>Cuenta de pérdidas y ganancias</li>
        <li>Comparación ingresos vs. gastos</li>
      </ul>

      <h3>Informes de cumplimiento</h3>
      <ul>
        <li>Informe resumen de impuestos</li>
        <li>Registro de facturas para auditoría</li>
      </ul>

      <h2>Generar un informe</h2>
      <ul>
        <li>Navega a <strong>Informes</strong> en la barra lateral</li>
        <li>Selecciona el año y la categoría del informe</li>
        <li>Haz clic en <strong>Generar</strong> para descargar en JSON o CSV</li>
        <li>Todos los informes están delimitados a tu cuenta de moneda activa</li>
      </ul>

      <div class="callout">
        <strong>Nota de cumplimiento:</strong> Todas las exportaciones incluyen hashes de verificación y marcas de tiempo. Los informes son de moneda única para garantizar precisión.
      </div>
    `,
  },

  // ─── Guía 10: Análisis ───
  {
    slug: 'analytics',
    title: 'Comprende tu negocio con análisis visuales',
    description: 'Visualiza gráficos interactivos de ingresos, estado de facturas, antigüedad de pagos y tendencias mensuales.',
    icon: 'PieChart',
    category: 'financial-tools',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar a Análisis', text: 'Haz clic en "Análisis" en la barra lateral para acceder a tu panel de información.' },
      { name: 'Seleccionar período', text: 'Elige el trimestre que deseas analizar en el selector de período.' },
      { name: 'Explorar gráficos', text: 'Visualiza Ingresos por Cliente, Distribución de Estados de Facturas, Antigüedad de Pagos y gráficos de Comparación Mensual con detalles al pasar el ratón.' },
    ],
    relatedGuides: ['reports-exports', 'accounting-overview', 'payments-receipts'],
    targetFeature: 'https://app.invoicemonk.com',
    content: `
      <h2>Análisis disponibles</h2>
      <p>La página de Análisis proporciona información visual sobre tu actividad de facturación con gráficos interactivos y análisis.</p>
      <ul>
        <li><strong>Ingresos por Cliente</strong> — Gráfico de barras mostrando qué clientes aportan más ingresos</li>
        <li><strong>Distribución de Estados de Facturas</strong> — Gráfico circular de facturas en borrador, emitidas, enviadas, vistas, pagadas y anuladas</li>
        <li><strong>Antigüedad de Pagos</strong> — Observa cuánto tardan los clientes en pagar en promedio</li>
        <li><strong>Comparación Mensual</strong> — Gráfico de líneas comparando ingresos mes a mes</li>
      </ul>

      <h2>Usar análisis</h2>
      <ul>
        <li>Navega a <strong>Análisis</strong> en la barra lateral</li>
        <li>Selecciona el período (trimestre)</li>
        <li>Visualiza gráficos interactivos con detalles al pasar el ratón</li>
        <li>Usa la información para identificar tus mejores clientes, rastrear patrones de pago e identificar tendencias</li>
      </ul>
    `,
  },

  // ─── Guía 11: Gestión de Equipos ───
  {
    slug: 'team-management',
    title: 'Invitar a tu equipo y gestionar roles',
    description: 'Invita miembros del equipo, asigna roles y controla el acceso a tu Invoicemonk.',
    icon: 'UserPlus',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar a Equipo', text: 'Haz clic en "Equipo" en la barra lateral para acceder a la gestión de equipo.' },
      { name: 'Invitar un miembro', text: 'Haz clic en "Invitar Miembro", ingresa el correo y selecciona un rol (Propietario, Admin o Miembro).' },
      { name: 'Gestionar roles', text: 'Cambia el rol de un miembro, elimina miembros del equipo o reenvía invitaciones pendientes desde la página de equipo.' },
    ],
    relatedGuides: ['business-settings', 'audit-logs', 'getting-started'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Qué roles de equipo están disponibles?', answer: 'Propietario tiene acceso total incluyendo facturación. Admin puede gestionar facturas, clientes y configuraciones, pero no la facturación. Miembro puede crear y ver facturas y clientes, pero no puede cambiar configuraciones.' },
      { question: '¿Qué planes soportan gestión de equipos?', answer: 'La gestión de equipos está disponible en los planes Professional y Business. Los planes Starter son solo para usuario único.' },
    ],
    content: `
      <h2>Roles disponibles</h2>
      <p>En los planes Professional y Business, puedes invitar miembros del equipo a tu Invoicemonk y asignar roles para controlar lo que pueden hacer.</p>
      <ul>
        <li><strong>Propietario</strong> — Acceso total a todo incluyendo facturación y gestión de equipo</li>
        <li><strong>Admin</strong> — Puede gestionar facturas, clientes y configuraciones, pero no la facturación</li>
        <li><strong>Miembro</strong> — Puede crear y ver facturas y clientes, pero no puede cambiar configuraciones</li>
      </ul>

      <h2>Invitar miembros del equipo</h2>
      <ul>
        <li>Navega a <strong>Equipo</strong> en la barra lateral</li>
        <li>Haz clic en <strong>Invitar Miembro</strong></li>
        <li>Ingresa el correo y selecciona un rol</li>
        <li>Recibirán un correo de invitación para unirse a tu empresa</li>
      </ul>

      <h2>Gestionar miembros del equipo</h2>
      <ul>
        <li>Cambia el rol de un miembro desde la página de equipo</li>
        <li>Elimina miembros que ya no necesiten acceso</li>
        <li>Consulta invitaciones pendientes y reenvía si es necesario</li>
      </ul>
    `,
  },

  // ─── Guía 12: Multi-Moneda ───
  {
    slug: 'multi-currency',
    title: 'Gestionar múltiples monedas con cuentas de moneda',
    description: 'Usa cuentas de moneda para mantener las finanzas separadas de forma limpia entre múltiples monedas.',
    icon: 'Globe',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Entender cuentas de moneda', text: 'Tu cuenta de moneda predeterminada se crea automáticamente en la moneda principal de tu empresa.' },
      { name: 'Agregar cuentas de moneda', text: 'Agrega cuentas de moneda adicionales (USD, GBP, EUR, etc.) para facturación internacional.' },
      { name: 'Alternar entre cuentas', text: 'Usa el selector de moneda en la barra lateral. Todas las facturas, gastos, informes y análisis están delimitados a la cuenta activa.' },
    ],
    relatedGuides: ['business-settings', 'reports-exports', 'creating-invoices'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Por qué Invoicemonk separa monedas en cuentas?', answer: 'Los informes financieros son siempre de moneda única para precisión. Sin cálculos confusos de tipo de cambio en tus informes. Cada cuenta de moneda tiene sus propios métodos de pago.' },
    ],
    content: `
      <h2>Cómo funcionan las cuentas de moneda</h2>
      <p>Invoicemonk soporta múltiples monedas a través de Cuentas de Moneda. Cada cuenta de moneda mantiene tus finanzas separadas de forma limpia — sin mezcla de monedas.</p>
      <ul>
        <li>Al crear una empresa, se crea automáticamente una cuenta de moneda predeterminada en la moneda principal de tu empresa</li>
        <li>Puedes agregar cuentas de moneda adicionales (ej.: USD, GBP, EUR) para facturación internacional</li>
        <li>Alterna entre cuentas de moneda usando el selector en la barra lateral</li>
        <li>Todas las facturas, gastos, informes y análisis están delimitados a la cuenta de moneda activa</li>
      </ul>

      <h2>Por qué esto importa</h2>
      <ul>
        <li>Los informes financieros son siempre de moneda única para precisión</li>
        <li>Sin cálculos confusos de tipo de cambio en tus informes</li>
        <li>Cada cuenta de moneda tiene sus propios métodos de pago</li>
      </ul>
    `,
  },

  // ─── Guía 13: Notificaciones y Recordatorios ───
  {
    slug: 'notifications-reminders',
    title: 'Automatizar recordatorios de pago y gestionar notificaciones',
    description: 'Configura recordatorios automáticos de pago y personaliza tus preferencias de notificación.',
    icon: 'Bell',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Abrir configuración de notificaciones', text: 'Ve a Configuración → Notificaciones para configurar tus preferencias de recordatorios.' },
      { name: 'Activar recordatorios de pago', text: 'Activa Recordatorios de Pago y selecciona cuándo enviarlos (1, 3, 7 o 14 días antes del vencimiento).' },
      { name: 'Activar recordatorios de mora', text: 'Activa Recordatorios de Mora para seguimiento después del vencimiento (1, 7, 14 o 30 días después).' },
      { name: 'Personalizar y guardar', text: 'Opcionalmente agrega un mensaje personalizado a los correos de recordatorio y haz clic en Guardar Configuración de Notificaciones.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Puedo personalizar el mensaje del correo de recordatorio?', answer: 'Sí. Puedes agregar un mensaje personalizado que se incluirá en tus correos de recordatorio de pago. Esto te permite mantener un tono profesional y personal con tus clientes.' },
      { question: '¿Qué otras notificaciones están disponibles?', answer: 'Además de los recordatorios de pago, puedes activar notificaciones de Factura Emitida (confirmación), Pago Recibido y Alertas de Mora.' },
    ],
    content: `
      <h2>Configurar recordatorios de pago</h2>
      <p>Invoicemonk puede recordar automáticamente a tus clientes sobre pagos próximos y vencidos, para que no tengas que cobrarles manualmente.</p>
      <ul>
        <li>Ve a <strong>Configuración → Notificaciones</strong></li>
        <li>Activa <strong>Recordatorios de Pago</strong></li>
        <li>Selecciona cuándo enviar recordatorios antes del vencimiento (1, 3, 7 o 14 días antes)</li>
        <li>Activa <strong>Recordatorios de Mora</strong> para seguimiento después del vencimiento (1, 7, 14 o 30 días después)</li>
        <li>Opcionalmente agrega un mensaje personalizado a tus correos de recordatorio</li>
        <li>Haz clic en <strong>Guardar Configuración de Notificaciones</strong></li>
      </ul>

      <h2>Otras opciones de notificación</h2>
      <ul>
        <li><strong>Factura Emitida</strong> — Recibe una confirmación cuando emites una factura</li>
        <li><strong>Pago Recibido</strong> — Recibe notificación cuando se registra un pago</li>
        <li><strong>Alertas de Mora</strong> — Recibe alertas sobre facturas vencidas</li>
      </ul>
    `,
  },

  // ─── Guía 14: Configuración de la Empresa ───
  {
    slug: 'business-settings',
    title: 'Configurar tu empresa para el cumplimiento normativo',
    description: 'Completa tu perfil empresarial para asegurar que todas las facturas cumplan los requisitos regulatorios locales.',
    icon: 'Settings',
    category: 'administration',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Revisar configuración principal', text: 'Asegúrate de que nombre de empresa, razón social, identificación fiscal, registro de IVA, logotipo, dirección y datos de contacto estén completos.' },
      { name: 'Verificar completitud del perfil', text: 'Apunta al 100% de completitud. Invoicemonk resalta los campos faltantes para que sepas exactamente qué completar.' },
      { name: 'Configurar métodos de pago', text: 'Agrega cuentas bancarias y datos de pago. Establece un método de pago predeterminado para nuevas facturas.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'multi-currency'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Qué pasa si mi perfil está incompleto?', answer: 'Tus facturas pueden no incluir todos los campos obligatorios de cumplimiento. Invoicemonk muestra un porcentaje de completitud y resalta la información faltante para que puedas corregirlo rápidamente.' },
      { question: '¿Puedo tener múltiples métodos de pago?', answer: 'Sí. Agrega tantas cuentas bancarias o datos de pago como necesites. Establece uno como predeterminado que aparezca en todas las nuevas facturas. Los métodos de pago están vinculados a las cuentas de moneda.' },
    ],
    content: `
      <h2>Configuración principal</h2>
      <p>Tu Perfil Empresarial es la base de la facturación en cumplimiento. Complétalo totalmente para asegurar que todas tus facturas cumplan las regulaciones locales.</p>
      <ul>
        <li><strong>Nombre de Empresa y Razón Social</strong> — Debe coincidir con tu registro oficial</li>
        <li><strong>Número de Identificación Fiscal</strong> — Tu NIF/CIF o equivalente</li>
        <li><strong>Registro de IVA</strong> — Activa si estás registrado e ingresa tu número de IVA</li>
        <li><strong>Logotipo Empresarial</strong> — Aparece en todas las facturas y recibos</li>
        <li><strong>Dirección</strong> — Dirección comercial completa para encabezados de facturas</li>
        <li><strong>Datos de Contacto</strong> — Correo y teléfono mostrados en las facturas</li>
        <li><strong>Moneda Predeterminada</strong> — Establece tu moneda operativa principal</li>
      </ul>

      <h2>Completitud del perfil</h2>
      <ul>
        <li>Invoicemonk muestra un porcentaje de completitud en tu perfil empresarial</li>
        <li>Apunta al 100% para cumplimiento total</li>
        <li>Los campos faltantes se resaltan para que sepas exactamente qué completar</li>
      </ul>

      <h2>Métodos de pago</h2>
      <ul>
        <li>Agrega cuentas bancarias, datos de pago u otros métodos</li>
        <li>Establece un método de pago predeterminado que aparezca en todas las nuevas facturas</li>
        <li>Los métodos de pago están vinculados a las cuentas de moneda</li>
      </ul>
    `,
  },

  // ─── Guía 15: Registros de Auditoría ───
  {
    slug: 'audit-logs',
    title: 'Pista de auditoría completa para cada acción',
    description: 'Revisa la pista de auditoría inmutable que registra cada acción para cumplimiento y auditoría interna.',
    icon: 'ScrollText',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar a Registros de Auditoría', text: 'Haz clic en "Registros de Auditoría" en la barra lateral para acceder a la pista completa de actividad.' },
      { name: 'Buscar y filtrar', text: 'Busca por tipo de acción, usuario o descripción. Filtra por categoría de acción para refinar resultados.' },
      { name: 'Revisar entradas', text: 'Cada entrada muestra quién realizó la acción, cuándo ocurrió y exactamente qué cambió.' },
    ],
    relatedGuides: ['invoice-verification', 'creating-invoices', 'team-management'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: '¿Qué acciones se registran?', answer: 'Todo: creación de facturas, emisión, envío, visualización, anulación, registro de pagos, cambios en el perfil empresarial, adiciones de miembros del equipo y cambios de rol, y modificaciones de configuración.' },
      { question: '¿Los registros de auditoría pueden modificarse?', answer: 'No. Los registros de auditoría son inmutables por diseño. Una vez que una acción se registra, no puede editarse ni eliminarse. Esto garantiza integridad completa para revisiones de cumplimiento.' },
    ],
    content: `
      <h2>Qué se registra</h2>
      <p>Cada acción en Invoicemonk se registra en una pista de auditoría inmutable. Esto es invaluable para revisiones de cumplimiento y auditoría interna.</p>
      <ul>
        <li>Factura creada, emitida, enviada, vista, anulada</li>
        <li>Pagos registrados</li>
        <li>Cambios en el perfil empresarial</li>
        <li>Adiciones de miembros del equipo y cambios de rol</li>
        <li>Modificaciones de configuración</li>
      </ul>

      <h2>Usar registros de auditoría</h2>
      <ul>
        <li>Navega a <strong>Registros de Auditoría</strong> en la barra lateral</li>
        <li>Busca por tipo de acción, usuario o descripción</li>
        <li>Filtra por categoría de acción</li>
        <li>Cada entrada muestra quién realizó la acción, cuándo y qué cambió</li>
      </ul>
    `,
  },

  // ─── Guía 16: Soporte ───
  {
    slug: 'support',
    title: 'Obtener ayuda cuando la necesitas',
    description: 'Envía tickets de soporte y contacta al equipo de Invoicemonk directamente desde tu panel.',
    icon: 'HelpCircle',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar a Soporte', text: 'Haz clic en "Contactar Soporte" en la barra lateral para acceder al sistema de tickets.' },
      { name: 'Enviar un ticket', text: 'Elige una categoría (Facturación, Técnico, Solicitud de Función, etc.), describe tu problema y envía.' },
      { name: 'Seguir tu ticket', text: 'Consulta y sigue el estado del ticket en la página de Soporte de tu panel.' },
    ],
    relatedGuides: ['getting-started', 'business-settings'],
    targetFeature: '/contact',
    content: `
      <h2>Enviar un ticket de soporte</h2>
      <p>Invoicemonk ofrece un sistema de tickets de soporte integrado para que puedas contactar a nuestro equipo directamente desde tu panel.</p>
      <ul>
        <li>Navega a <strong>Contactar Soporte</strong> en la barra lateral</li>
        <li>Elige una categoría (Facturación, Técnico, Solicitud de Función, etc.)</li>
        <li>Describe tu problema en detalle</li>
        <li>Envía y sigue el estado del ticket en la página de Soporte</li>
      </ul>

      <p>También puedes contactarnos a través de nuestra <a href="__LANG__/contact">página de contacto</a> o mediante el widget de chat en vivo en nuestro sitio web.</p>
    `,
  },
];

registerHelpGuides('es', helpGuidesES);
