import type { GlossaryTerm } from './glossaryTerms';
import { registerGlossaryTerms } from '@/utils/i18nData';

const glossaryTermsES: GlossaryTerm[] = [
  // Facturación
  {
    term: 'Factura',
    slug: 'invoice',
    definition: 'Un documento comercial emitido por un vendedor a un comprador, detallando productos o servicios proporcionados, cantidades, precios y condiciones de pago.',
    extendedDescription: 'Una factura sirve como registro legal de una transacción y una solicitud formal de pago. Las facturas profesionales incluyen elementos esenciales como números de factura, fechas, descripciones detalladas e información fiscal. Son cruciales para la gestión de flujo de caja, el cumplimiento fiscal y el mantenimiento de relaciones comerciales profesionales.',
    relatedTerms: ['credit-note', 'pro-forma-invoice', 'recurring-invoice', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['complete-guide-to-business-invoicing', '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners']
  },
  {
    term: 'Nota de Crédito',
    slug: 'credit-note',
    definition: 'Un documento emitido por un vendedor para reducir el monto adeudado por un comprador, típicamente usado para devoluciones, cobros excesivos o correcciones de facturación.',
    extendedDescription: 'Las notas de crédito funcionan como facturas negativas, reduciendo el monto total adeudado por un cliente. Son esenciales para mantener registros contables precisos cuando se necesitan ajustes. Una nota de crédito debe referenciar la factura original e indicar claramente el motivo del crédito.',
    relatedTerms: ['invoice', 'debit-note', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['credit-notes-how-and-when-to-use-them']
  },
  {
    term: 'Factura Pro Forma',
    slug: 'pro-forma-invoice',
    definition: 'Una factura preliminar enviada antes de la entrega de mercancías o prestación de servicios, describiendo términos y costos estimados.',
    extendedDescription: 'Las facturas pro forma se usan como cotizaciones o estimaciones y no son solicitudes de pago. Ayudan a los clientes a entender los costos esperados y se usan comúnmente en el comercio internacional para fines aduaneros. A diferencia de las facturas regulares, pueden modificarse antes de la emisión de la factura final.',
    relatedTerms: ['invoice', 'estimate', 'quote'],
    category: 'invoicing',
    relatedArticles: ['proforma-invoice-vs-commercial-invoice']
  },
  {
    term: 'Factura Recurrente',
    slug: 'recurring-invoice',
    definition: 'Una factura generada automáticamente a intervalos regulares para servicios continuos o suscripciones.',
    extendedDescription: 'Las facturas recurrentes ahorran tiempo a empresas con clientes en contrato o servicios por suscripción. Pueden configurarse para envío automático semanal, mensual, trimestral o anual. La automatización reduce la carga administrativa y garantiza una facturación consistente.',
    relatedTerms: ['invoice', 'retainer', 'subscription-billing'],
    category: 'invoicing',
    relatedArticles: ['recurring-invoices-automating-billing']
  },
  {
    term: 'Número de Factura',
    slug: 'invoice-number',
    definition: 'Un identificador único asignado a cada factura para seguimiento, referencia y fines contables.',
    extendedDescription: 'Los sistemas de numeración de facturas ayudan a organizar registros, simplifican la conciliación de pagos y cumplen los requisitos de las autoridades fiscales. Los formatos comunes incluyen números secuenciales (001, 002), códigos basados en fecha (2024-001) o identificadores con prefijo de cliente (ABC-001). Los números de factura nunca deben reutilizarse.',
    relatedTerms: ['invoice', 'purchase-order'],
    category: 'invoicing',
    relatedArticles: ['invoice-numbering-best-practices']
  },
  {
    term: 'Condiciones de Pago',
    slug: 'payment-terms',
    definition: 'Condiciones que especifican cuándo y cómo se espera el pago, como fecha de vencimiento, métodos aceptados y descuentos por pronto pago.',
    extendedDescription: 'Las condiciones de pago comunes incluyen Neto 15, Neto 30, Pago al Recibo y 2/10 Neto 30 (2% de descuento si se paga en 10 días). Condiciones claras establecen expectativas, reducen disputas y pueden incentivar pagos más rápidos. Las condiciones deben acordarse antes del inicio del trabajo e indicarse claramente en las facturas.',
    relatedTerms: ['net-30', 'due-on-receipt', 'early-payment-discount'],
    category: 'payments',
    relatedArticles: ['how-to-write-invoice-payment-terms', 'understanding-payment-terms-guide']
  },
  {
    term: 'Neto 30',
    slug: 'net-30',
    definition: 'Condición de pago que indica que el monto total de la factura es pagadero en 30 días desde la fecha de facturación.',
    extendedDescription: 'Neto 30 es una de las condiciones de pago más comunes en los negocios. Las variaciones incluyen Neto 15, Neto 60 y Neto 90 para plazos más cortos o más largos. El "neto" se refiere al monto total adeudado sin deducciones.',
    relatedTerms: ['payment-terms', 'due-on-receipt', 'accounts-receivable'],
    category: 'payments'
  },
  {
    term: 'Pago al Recibo',
    slug: 'due-on-receipt',
    definition: 'Condición de pago que requiere pago inmediato al recibir la factura.',
    extendedDescription: 'La condición de pago al recibo solicita el pago tan pronto como se recibe la factura, aunque en la práctica esto suele significar dentro de unos días. Estas condiciones son comunes para nuevas relaciones con clientes, montos pequeños o cuando el vendedor necesita flujo de caja inmediato.',
    relatedTerms: ['payment-terms', 'net-30', 'cash-on-delivery'],
    category: 'payments'
  },
  {
    term: 'Descuento por Pronto Pago',
    slug: 'early-payment-discount',
    definition: 'Una reducción porcentual ofrecida a clientes que pagan antes de la fecha de vencimiento estándar.',
    extendedDescription: 'Comúnmente expresado como "2/10 Neto 30", que significa 2% de descuento si se paga en 10 días, de lo contrario el monto total es pagadero en 30 días. Los descuentos por pronto pago mejoran el flujo de caja, pero deben calcularse cuidadosamente — un descuento del 2% por 20 días de adelanto equivale a aproximadamente un 36% anualizado.',
    relatedTerms: ['payment-terms', 'cash-flow', 'accounts-receivable'],
    category: 'payments',
    relatedArticles: ['early-payment-discounts-do-they-work']
  },
  // Contabilidad
  {
    term: 'Cuentas por Cobrar',
    slug: 'accounts-receivable',
    definition: 'Dinero adeudado a una empresa por clientes por bienes o servicios entregados pero aún no pagados.',
    extendedDescription: 'Las cuentas por cobrar aparecen como activo en el balance general. La gestión eficaz incluye facturación oportuna, condiciones de pago claras, seguimiento sistemático de cuentas vencidas y análisis de antigüedad para identificar problemas de cobro.',
    relatedTerms: ['accounts-payable', 'invoice', 'cash-flow', 'aging-report'],
    category: 'accounting',
    relatedArticles: ['ultimate-guide-getting-paid-faster']
  },
  {
    term: 'Cuentas por Pagar',
    slug: 'accounts-payable',
    definition: 'Dinero que una empresa debe a proveedores por bienes o servicios recibidos pero aún no pagados.',
    extendedDescription: 'Las cuentas por pagar son un pasivo en el balance general que representa obligaciones a corto plazo. La gestión eficaz implica seguimiento de fechas de vencimiento, aprovechamiento de descuentos por pronto pago y mantenimiento de buenas relaciones con proveedores optimizando el flujo de caja.',
    relatedTerms: ['accounts-receivable', 'vendor', 'cash-flow'],
    category: 'accounting'
  },
  {
    term: 'Flujo de Caja',
    slug: 'cash-flow',
    definition: 'El movimiento de dinero entrando y saliendo de una empresa, midiendo liquidez y capacidad de pagar obligaciones.',
    extendedDescription: 'Un flujo de caja positivo significa más dinero entrando que saliendo. Incluso empresas rentables pueden fracasar con mala gestión de flujo de caja. Estrategias clave incluyen facturación oportuna, cobro eficiente, gestión de condiciones de pago con proveedores y mantenimiento de reservas de efectivo.',
    relatedTerms: ['accounts-receivable', 'accounts-payable', 'working-capital'],
    category: 'accounting',
    relatedArticles: ['cash-flow-forecasting-for-freelancers']
  },
  {
    term: 'Plan de Cuentas',
    slug: 'chart-of-accounts',
    definition: 'Una lista completa de todas las cuentas utilizadas por una empresa para categorizar transacciones financieras.',
    extendedDescription: 'El plan de cuentas organiza las transacciones en categorías como activos, pasivos, patrimonio, ingresos y gastos. Un plan de cuentas bien estructurado permite informes financieros precisos, preparación fiscal y análisis empresarial.',
    relatedTerms: ['general-ledger', 'double-entry-bookkeeping', 'financial-statements'],
    category: 'accounting',
    relatedArticles: ['chart-of-accounts-setup-guide']
  },
  {
    term: 'Margen de Beneficio',
    slug: 'profit-margin',
    definition: 'El porcentaje de ingresos restante después de deducir costos, indicando la rentabilidad del negocio.',
    extendedDescription: 'El margen de beneficio bruto mide los ingresos menos el costo de los bienes vendidos. El margen de beneficio neto considera todos los gastos incluyendo gastos generales, impuestos e intereses. Márgenes más altos indican mejor eficiencia y poder de fijación de precios. Los benchmarks varían significativamente por industria.',
    relatedTerms: ['gross-profit', 'net-profit', 'revenue'],
    category: 'accounting',
    relatedArticles: ['profit-margins-how-to-calculate-and-improve']
  },
  {
    term: 'Contabilidad de Caja',
    slug: 'cash-basis-accounting',
    definition: 'Un método contable que registra ingresos cuando se recibe el dinero y gastos cuando se paga.',
    extendedDescription: 'La contabilidad de caja es más simple que la contabilidad de devengo y es comúnmente usada por pequeñas empresas y autónomos. Proporciona una imagen clara del efectivo disponible, pero puede no reflejar con precisión la posición financiera a largo plazo.',
    relatedTerms: ['accrual-accounting', 'revenue-recognition'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  {
    term: 'Contabilidad de Devengo',
    slug: 'accrual-accounting',
    definition: 'Un método contable que registra ingresos cuando se ganan y gastos cuando se incurren, independientemente de cuándo el dinero cambia de manos.',
    extendedDescription: 'La contabilidad de devengo proporciona una imagen más precisa de la salud financiera de una empresa al asociar ingresos con gastos relacionados. Es requerida para empresas más grandes y aquellas que buscan inversión externa.',
    relatedTerms: ['cash-basis-accounting', 'revenue-recognition', 'matching-principle'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  // Impuestos
  {
    term: 'IVA (Impuesto sobre el Valor Añadido)',
    slug: 'vat',
    definition: 'Un impuesto al consumo añadido en cada etapa de producción o distribución, pagado en última instancia por el consumidor final.',
    extendedDescription: 'El IVA se utiliza en más de 160 países incluyendo la UE, el Reino Unido, Nigeria y Australia (como GST). Las empresas registradas recaudan IVA sobre las ventas y pueden recuperar el IVA pagado en compras comerciales. Las tasas y umbrales varían según el país.',
    relatedTerms: ['sales-tax', 'gst', 'tax-invoice'],
    category: 'tax',
    relatedArticles: ['hmrc-invoicing-rules-uk-mtd-compliance']
  },
  {
    term: 'Factura Fiscal',
    slug: 'tax-invoice',
    definition: 'Una factura que incluye información fiscal específica requerida por las autoridades fiscales para fines de IVA/GST.',
    extendedDescription: 'Las facturas fiscales deben contener elementos como números de registro fiscal, montos de impuestos y, en algunas jurisdicciones, textos específicos. Permiten a las empresas solicitar créditos de impuesto sobre insumos y son esenciales para el cumplimiento fiscal.',
    relatedTerms: ['vat', 'invoice', 'input-tax-credit'],
    category: 'tax'
  },
  {
    term: 'Deducción Fiscal',
    slug: 'tax-deduction',
    definition: 'Un gasto empresarial que puede sustraerse de la renta imponible, reduciendo el monto del impuesto adeudado.',
    extendedDescription: 'Las deducciones comunes incluyen gastos de oficina, equipos, viajes, servicios profesionales y seguros. La documentación adecuada es esencial — conserve recibos y registros durante el período de retención requerido. Consulte a un asesor fiscal para las normas específicas de su jurisdicción.',
    relatedTerms: ['taxable-income', 'business-expense', 'depreciation'],
    category: 'tax',
    relatedArticles: ['small-business-tax-deductions-guide']
  },
  {
    term: 'Retención en la Fuente',
    slug: 'withholding-tax',
    definition: 'Impuesto deducido en la fuente sobre ingresos, dividendos o pagos a entidades extranjeras.',
    extendedDescription: 'Los requisitos de retención en la fuente varían según el país y el tipo de pago. En algunas jurisdicciones, las empresas deben retener impuestos sobre pagos a contratistas por encima de ciertos umbrales. El monto retenido se paga directamente a las autoridades fiscales en nombre del beneficiario.',
    relatedTerms: ['income-tax', 'tax-compliance'],
    category: 'tax'
  },
  // Negocios
  {
    term: 'Presupuesto',
    slug: 'estimate',
    definition: 'Una aproximación de costos para un proyecto o servicio, no vinculante legalmente y sujeta a cambios.',
    extendedDescription: 'Los presupuestos dan a los clientes una idea de los costos esperados antes de comprometerse. Difieren de las cotizaciones (que son típicamente fijas) y deben indicar claramente supuestos y condiciones que podrían afectar el precio final. Convertir presupuestos aceptados en facturas simplifica la facturación.',
    relatedTerms: ['quote', 'proposal', 'pro-forma-invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Cotización',
    slug: 'quote',
    definition: 'Una oferta de precio fijo para bienes o servicios específicos, típicamente válida por un período determinado.',
    extendedDescription: 'A diferencia de los presupuestos, las cotizaciones generalmente se consideran vinculantes una vez aceptadas. Deben especificar exactamente lo que está incluido, el período de validez, las condiciones de pago y cualquier condición. Cotizaciones profesionales generan confianza en el cliente.',
    relatedTerms: ['estimate', 'proposal', 'invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Propuesta Comercial',
    slug: 'proposal',
    definition: 'Un documento detallado que presenta soluciones, enfoque, cronograma y precios para ganar nuevos negocios.',
    extendedDescription: 'Las propuestas comerciales van más allá de la fijación de precios para demostrar comprensión de las necesidades del cliente, la metodología propuesta, experiencia relevante y resultados esperados. Las propuestas eficaces son personalizadas, profesionales y articulan claramente el valor.',
    relatedTerms: ['estimate', 'quote', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['how-to-write-winning-business-proposal']
  },
  {
    term: 'Contrato de Servicios Continuos',
    slug: 'retainer',
    definition: 'Una tarifa continua pagada para asegurar servicios regulares, a menudo facturada mensualmente por un número definido de horas o entregables.',
    extendedDescription: 'Los contratos de servicios continuos proporcionan ingresos predecibles para los proveedores y acceso prioritario para los clientes. Típicamente especifican horas/entregables mínimos, políticas de acumulación y límites de alcance. Los contratos mensuales son comunes en consultoría, servicios legales y creativos.',
    relatedTerms: ['recurring-invoice', 'service-agreement', 'scope-of-work'],
    category: 'business'
  },
  {
    term: 'Alcance del Trabajo',
    slug: 'scope-of-work',
    definition: 'Un documento que define las tareas específicas, entregables, cronograma y límites de un proyecto o compromiso.',
    extendedDescription: 'Un alcance del trabajo claro previene malentendidos y la expansión del alcance. Debe detallar lo que está y no está incluido, hitos, criterios de aceptación y cómo se manejarán los cambios. Ambas partes deben acordar el alcance antes del inicio del trabajo.',
    relatedTerms: ['proposal', 'contract', 'deliverable'],
    category: 'business',
    relatedArticles: ['freelance-contract-templates']
  },
  {
    term: 'Orden de Compra',
    slug: 'purchase-order',
    definition: 'Un documento comercial emitido por un comprador a un vendedor, autorizando una transacción de compra.',
    extendedDescription: 'Las órdenes de compra formalizan la intención de compra y crean obligación contractual al ser aceptadas. Especifican productos/servicios, cantidades, precios y condiciones de entrega. En transacciones B2B, las facturas frecuentemente referencian el número de orden de compra correspondiente.',
    relatedTerms: ['invoice', 'vendor', 'procurement'],
    category: 'business'
  },
  // Freelance
  {
    term: 'Horas Facturables',
    slug: 'billable-hours',
    definition: 'Tiempo dedicado a trabajo del cliente que puede cobrarse, en oposición a tiempo administrativo o no facturable.',
    extendedDescription: 'El seguimiento preciso de horas facturables es esencial para freelancers y consultores. Típicamente, solo el 60-70% del tiempo total de trabajo es facturable debido a administración, marketing y desarrollo de negocio. Las tarifas deben considerar esta realidad para mantener la rentabilidad.',
    relatedTerms: ['time-tracking', 'hourly-rate', 'utilization-rate'],
    category: 'freelancing',
    relatedArticles: ['freelance-time-tracking-guide']
  },
  {
    term: 'Expansión del Alcance',
    slug: 'scope-creep',
    definition: 'La expansión gradual de un proyecto más allá de sus límites originales, a menudo sin ajustes correspondientes de presupuesto o cronograma.',
    extendedDescription: 'La expansión del alcance erosiona la rentabilidad y tensiona las relaciones con clientes. Prevenirla con definiciones claras de alcance, procesos de solicitud de cambio y revisiones regulares del proyecto. Cuando se solicita trabajo adicional, documentarlo y discutir implicaciones presupuestarias antes de proceder.',
    relatedTerms: ['scope-of-work', 'change-order', 'project-management'],
    category: 'freelancing'
  },
  {
    term: 'Pago por Hitos',
    slug: 'milestone-payment',
    definition: 'Una estructura de pago donde porciones del monto total se pagan al completar fases definidas del proyecto.',
    extendedDescription: 'Los pagos por hitos reducen el riesgo para ambas partes vinculando pagos a entregables. Las estructuras comunes incluyen 50% por adelantado/50% al completar, o tercios (33% inicio, 33% punto medio, 34% finalización). Define hitos claros y medibles en tu contrato.',
    relatedTerms: ['payment-terms', 'project-management', 'deliverable'],
    category: 'freelancing'
  },
  // Gestión de Gastos
  {
    term: 'Informe de Gastos',
    slug: 'expense-report',
    definition: 'Un documento que lista los gastos empresariales incurridos por un empleado o contratista, típicamente presentado para reembolso o fines fiscales.',
    extendedDescription: 'Los informes de gastos típicamente incluyen fecha, proveedor, monto, categoría y documentación de recibos. Sirven tanto para seguimiento interno como para cumplimiento fiscal. El software moderno automatiza la creación de informes importando transacciones y adjuntando recibos digitalizados.',
    relatedTerms: ['tax-deduction', 'accounts-payable', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Digitalización de Recibos (OCR)',
    slug: 'receipt-scanning',
    definition: 'El proceso de usar tecnología de Reconocimiento Óptico de Caracteres para digitalizar y extraer datos de recibos en papel.',
    extendedDescription: 'La tecnología OCR lee el texto impreso en recibos y lo convierte en datos digitales estructurados — nombres de proveedores, fechas, montos e información fiscal se extraen automáticamente. Esto elimina la entrada manual de datos, reduce errores y crea registros digitales buscables aceptados por las autoridades fiscales.',
    relatedTerms: ['expense-report', 'tax-deduction'],
    category: 'accounting',
    relatedArticles: ['receipt-scanning-apps-comparison', 'digital-receipt-management-guide']
  },
  {
    term: 'Categoría de Gastos',
    slug: 'expense-category',
    definition: 'Un grupo de clasificación para gastos empresariales que se mapea al plan de cuentas y líneas de declaración fiscal.',
    extendedDescription: 'La categorización correcta de gastos es esencial para informes financieros precisos y declaración fiscal. Las categorías comunes incluyen material de oficina, viajes, servicios profesionales, software/suscripciones y marketing.',
    relatedTerms: ['chart-of-accounts', 'tax-deduction', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['business-expense-categories-guide']
  },
  {
    term: 'Gasto Reembolsable',
    slug: 'reimbursable-expense',
    definition: 'Un gasto empresarial pagado por un empleado o contratista que es elegible para reembolso por parte del cliente o empleador.',
    extendedDescription: 'Los gastos reembolsables difieren de los gastos deducibles fiscalmente. Los gastos deducibles reducen tu renta imponible, mientras que los gastos reembolsables son costos pagados en nombre de un cliente que puedes facturarle. Ejemplos comunes incluyen gastos de viaje, materiales comprados para un proyecto y licencias de software.',
    relatedTerms: ['expense-report', 'invoice', 'accounts-receivable'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Seguimiento de Gastos',
    slug: 'expense-tracking',
    definition: 'El proceso sistemático de registro, categorización y monitoreo de todos los gastos empresariales.',
    extendedDescription: 'El seguimiento eficaz de gastos implica capturar cada compra empresarial en tiempo real, categorizarla correctamente y mantener documentación de soporte como recibos. Los métodos van desde hojas de cálculo simples hasta software automatizado sincronizado con cuentas bancarias.',
    relatedTerms: ['expense-category', 'receipt-scanning', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-tracking-methods-small-business']
  },
  {
    term: 'Recibo Digital',
    slug: 'digital-receipt',
    definition: 'Una versión electrónica de un recibo de compra, recibida digitalmente o creada al digitalizar un recibo en papel.',
    extendedDescription: 'Los recibos digitales son aceptados por prácticamente todas las autoridades fiscales del mundo como prueba de compra válida. Ofrecen ventajas sobre el papel: no se deterioran, son buscables instantáneamente, no ocupan espacio físico y pueden asociarse automáticamente con registros de gastos.',
    relatedTerms: ['receipt-scanning', 'expense-tracking', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['digital-receipt-management-guide']
  },
  // Gestión de Clientes
  {
    term: 'Incorporación de Clientes',
    slug: 'client-onboarding',
    definition: 'El proceso estructurado de bienvenida e integración de un nuevo cliente en tu flujo de trabajo.',
    extendedDescription: 'Un proceso de incorporación profesional establece expectativas, genera confianza y reduce malentendidos desde el primer día. Los elementos clave incluyen paquete de bienvenida, cuestionario del proyecto, contrato firmado, configuración de condiciones de pago, reunión de inicio y cronograma compartido.',
    relatedTerms: ['scope-of-work', 'proposal', 'retainer'],
    category: 'business',
    relatedArticles: ['client-onboarding-process']
  },
  {
    term: 'Retención de Clientes',
    slug: 'client-retention',
    definition: 'Las estrategias y prácticas utilizadas para mantener relaciones continuas con clientes existentes y fomentar negocios recurrentes.',
    extendedDescription: 'La retención de clientes es típicamente 5-7 veces más rentable que la adquisición de nuevos clientes. Las estrategias clave incluyen comunicación consistente, superar expectativas, ofrecer contratos de servicios continuos, recopilar feedback mediante encuestas NPS y facilitar el trabajo con herramientas como portales de cliente y facturación automatizada.',
    relatedTerms: ['retainer', 'client-onboarding', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['client-retention-strategies']
  },
  {
    term: 'CRM (Gestión de Relaciones con Clientes)',
    slug: 'crm',
    definition: 'Un sistema o software para gestionar interacciones con clientes actuales y potenciales, rastrear comunicaciones y organizar datos de clientes.',
    extendedDescription: 'Los sistemas CRM van desde simples hojas de cálculo hasta software empresarial como Salesforce. Para freelancers y pequeñas empresas, un CRM ligero que rastree datos de contacto, historial de proyectos, registros de comunicación y estado de pagos suele ser suficiente. Muchas plataformas de facturación incluyen funciones CRM básicas.',
    relatedTerms: ['client-onboarding', 'client-retention'],
    category: 'business',
    relatedArticles: ['crm-for-freelancers-small-business']
  },
  {
    term: 'Comunicación con el Cliente',
    slug: 'client-communication',
    definition: 'El intercambio estructurado de información entre un proveedor de servicios y su cliente durante un proyecto o compromiso.',
    extendedDescription: 'La comunicación eficaz con el cliente incluye actualizaciones regulares de estado, respuesta clara a solicitudes de cambio de alcance, recordatorios profesionales de pago y reporte proactivo de problemas. El uso de plantillas para comunicaciones comunes ahorra tiempo manteniendo la consistencia.',
    relatedTerms: ['client-onboarding', 'scope-of-work', 'scope-creep'],
    category: 'business',
    relatedArticles: ['client-communication-templates']
  }
];

registerGlossaryTerms('es', glossaryTermsES);
