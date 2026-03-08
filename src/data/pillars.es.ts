import { registerPillars } from '@/utils/i18nData';
import type { Pillar } from '@/data/topicalMap';

const pillars: Pillar[] = [
  {
    id: 'invoicing-mastery',
    title: 'Dominar la Facturación',
    slug: 'invoicing',
    description: 'Domine el arte de la facturación profesional para cobrar más rápido y proyectar mayor profesionalismo.',
    longDescription: 'Todo lo que necesita saber sobre la creación de facturas profesionales, desde los elementos esenciales hasta las mejores prácticas. Aprenda a facturar correctamente, cobrar más rápido y cumplir con las regulaciones fiscales de diferentes países.',
    targetProduct: '/invoicing',
    hubPage: '/guides/invoicing',
    blogHubPage: '/blog/complete-guide-to-business-invoicing',
    icon: 'FileText',
    color: 'hsl(var(--primary))',
    keyTopics: [
      { title: 'Elementos Esenciales', description: 'Los elementos imprescindibles de toda factura profesional.', link: '/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners' },
      { title: 'Plantillas de Factura', description: 'Cree plantillas profesionales que reflejen su marca.', link: '/blog/invoicemonk-template-how-to-create-a-perfect-invoice-template' },
      { title: 'Facturación Puntual', description: 'Domine el timing para un mejor flujo de caja.', link: '/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently' },
      { title: 'Numeración de Facturas', description: 'Implemente un sistema de numeración organizado.', link: '/blog/invoice-numbering-best-practices' },
      { title: 'Condiciones de Pago', description: 'Redacte condiciones claras que los clientes entiendan.', link: '/blog/how-to-write-invoice-payment-terms' },
      { title: 'Facturas Recurrentes', description: 'Automatice la facturación para clientes regulares.', link: '/blog/recurring-invoices-automating-billing' }
    ],
    faq: [
      { question: '¿Cuáles son los elementos esenciales de una factura profesional?', answer: 'Una factura profesional debe incluir: nombre y datos de contacto de la empresa, información del cliente, número único de factura, fecha de emisión y vencimiento, lista detallada de productos/servicios con cantidades y precios, subtotal y total, impuestos aplicables y métodos de pago aceptados.' },
      { question: '¿Cómo numerar las facturas correctamente?', answer: 'Use un sistema secuencial fácil de seguir. Formatos comunes: secuencial simple (001, 002, 003), basado en fecha (2024-001) o con prefijo de cliente (ABC-001). Lo esencial es la consistencia — nunca reutilice números.' },
      { question: '¿Cuándo debo enviar una factura?', answer: 'Para proyectos, envíe inmediatamente tras la finalización o en los hitos acordados. Para servicios recurrentes, establezca un calendario regular. Cuanto antes facture, antes cobra.' },
      { question: '¿Qué condiciones de pago debo usar?', answer: 'Condiciones comunes incluyen Neto 15, Neto 30 o Pago al Recibo. Para nuevos clientes, plazos más cortos reducen el riesgo. Considere descuentos por pronto pago para incentivar pagos más rápidos.' },
      { question: '¿Cómo manejar la facturación internacional?', answer: 'Para clientes internacionales, incluya: divisa, datos bancarios internacionales (IBAN, SWIFT), información fiscal aplicable y asegure el cumplimiento de las regulaciones de ambos países.' }
    ]
  },
  {
    id: 'getting-paid',
    title: 'Cobrar Más Rápido',
    slug: 'getting-paid',
    description: 'Estrategias y herramientas para acelerar sus cobros y mejorar el flujo de caja.',
    longDescription: 'Descubra estrategias probadas para reducir retrasos en los pagos y mejorar su flujo de caja. Desde plantillas de recordatorio hasta la elección de los medios de pago adecuados, todo sobre cobrar más rápido como pequeño empresario o freelancer.',
    targetProduct: '/payments',
    hubPage: '/guides/getting-paid',
    blogHubPage: '/blog/ultimate-guide-getting-paid-faster',
    icon: 'Wallet',
    color: 'hsl(142, 76%, 36%)',
    keyTopics: [
      { title: 'Pagos Atrasados', description: 'Enfoques profesionales para cobrar pagos vencidos.', link: '/blog/how-to-handle-late-payments-professionally' },
      { title: 'Medios de Pago', description: 'Compare opciones de pago online para su negocio.', link: '/blog/online-payment-methods-comparison-small-business' },
      { title: 'Recordatorios de Pago', description: 'Automatice recordatorios para reducir retrasos.', link: '/blog/payment-reminder-email-templates' },
      { title: 'Descuento por Pronto Pago', description: 'Incentive a los clientes a pagar antes.', link: '/blog/early-payment-discounts-do-they-work' },
      { title: 'Previsión de Flujo de Caja', description: 'Prevea y planifique sus cobros.', link: '/blog/cash-flow-forecasting-for-freelancers' }
    ],
    faq: [
      { question: '¿Cómo gestionar pagos atrasados?', answer: 'Empiece con un recordatorio amable 1-3 días después del vencimiento. Sin pago tras una semana, envíe un recordatorio más firme. Después de 30 días, considere contacto telefónico. Sea siempre profesional y documente toda comunicación.' },
      { question: '¿Debo ofrecer descuento por pronto pago?', answer: 'Descuentos como "2/10 Neto 30" pueden acelerar los pagos. Calcule el coste anual efectivo — 2% de descuento por 20 días de adelanto equivale a un 36% anual. Funciona mejor para negocios de alto margen.' },
      { question: '¿Qué medios de pago debo aceptar?', answer: 'Acepte varios métodos: transferencia bancaria (comisiones más bajas), tarjetas de crédito/débito (cómodo para clientes) y billeteras digitales como PayPal o Stripe. Considere las preferencias locales.' },
      { question: '¿Cómo reducir los retrasos en los pagos?', answer: 'Estrategias clave: condiciones claras desde el inicio, facturación inmediata, recordatorios automáticos, múltiples medios de pago y anticipos para proyectos grandes.' }
    ]
  },
  {
    id: 'business-finances',
    title: 'Finanzas Empresariales',
    slug: 'business-finances',
    description: 'Conocimientos esenciales de contabilidad y gestión de gastos para el éxito de las pequeñas empresas.',
    longDescription: 'Domine los fundamentos de la contabilidad y gestión financiera para pequeñas empresas. Desde la creación de presupuestos hasta la comprensión de informes financieros, adquiera los conocimientos para tomar decisiones financieras informadas.',
    targetProduct: '/accounting',
    hubPage: '/guides/business-finances',
    blogHubPage: '/blog/small-business-accounting-guide',
    icon: 'Calculator',
    color: 'hsl(221, 83%, 53%)',
    keyTopics: [
      { title: 'Bases de Contabilidad', description: 'Conceptos fundamentales para todo empresario.', link: '/blog/the-basics-of-small-business-accounting' },
      { title: 'Creación de Presupuesto', description: 'Construir un presupuesto que impulse el crecimiento.', link: '/blog/how-to-create-a-budget-for-your-small-business' },
      { title: 'Informes Financieros', description: 'Comprender los informes esenciales.', link: '/blog/small-business-accounting-guide' },
      { title: 'Márgenes de Beneficio', description: 'Calcular y mejorar la rentabilidad.', link: '/blog/profit-margins-how-to-calculate-and-improve' },
      { title: 'Caja vs. Devengo', description: 'Elegir el método contable adecuado.', link: '/blog/cash-vs-accrual-accounting-explained' }
    ],
    faq: [
      { question: '¿Contabilidad de caja o de devengo?', answer: 'La contabilidad de caja registra al cobro/pago — más simple para pequeñas empresas. La de devengo registra cuando se genera, ofreciendo una imagen financiera más precisa.' },
      { question: '¿Qué informes financieros debo seguir?', answer: 'Informes esenciales: cuenta de resultados para rentabilidad, balance de situación para activos y pasivos, estado de flujos de efectivo y antigüedad de saldos de clientes.' },
      { question: '¿Cómo crear un presupuesto para mi negocio?', answer: 'Analice ingresos y gastos pasados. Categorice costes fijos (alquiler, salarios) y variables (suministros, marketing). Establezca metas realistas y revise mensualmente.' },
      { question: '¿Cuándo debo contratar un contable?', answer: 'Considere ayuda profesional cuando: el negocio supere la contabilidad simple, necesite asesoría fiscal, busque financiación o dedique más tiempo a finanzas que a su actividad principal.' }
    ]
  },
  {
    id: 'tax-compliance',
    title: 'Impuestos y Cumplimiento',
    slug: 'tax-compliance',
    description: 'Manténgase preparado para auditorías y en cumplimiento con las regulaciones fiscales.',
    longDescription: 'Navegue el cumplimiento fiscal con confianza en Nigeria, Reino Unido, EE.UU., Canadá y Australia. Conozca los requisitos de facturación, deducciones fiscales, preparación para auditorías y normas de conservación de documentos.',
    targetProduct: '/compliance',
    hubPage: '/guides/tax-compliance',
    blogHubPage: '/blog/small-business-tax-compliance-guide',
    icon: 'Shield',
    color: 'hsl(271, 91%, 65%)',
    keyTopics: [
      { title: 'Deducciones Fiscales', description: 'Maximizar las deducciones legítimas.', link: '/blog/small-business-tax-deductions-guide' },
      { title: 'Preparación para Auditoría', description: 'Mantenerse listo para inspecciones fiscales.', link: '/blog/how-to-prepare-business-tax-audit' },
      { title: 'Nigeria (FIRS)', description: 'Requisitos de facturación conformes al NRS.', link: '/blog/firs-invoice-requirements-nigeria' },
      { title: 'UK (HMRC)', description: 'Guía de cumplimiento Making Tax Digital.', link: '/blog/hmrc-invoicing-rules-uk-mtd-compliance' },
      { title: 'EE.UU. (IRS)', description: 'Cumplimiento fiscal para pymes estadounidenses.', link: '/blog/irs-invoice-requirements-us-compliance' },
      { title: 'Conservación de Documentos', description: 'Mantener archivos empresariales en cumplimiento.', link: '/blog/how-to-prepare-business-tax-audit' }
    ],
    faq: [
      { question: '¿Cuánto tiempo debo guardar los documentos comerciales?', answer: 'Generalmente 6 a 7 años. Nigeria (FIRS): 6 años, UK (HMRC): 6 años, EE.UU. (IRS): 7 años, Canadá (CRA): 6 años, Australia (ATO): 5 años. Guardar permanentemente: cuentas anuales, compras de activos y documentos legales.' },
      { question: '¿Qué elementos de la factura son legalmente obligatorios?', answer: 'Los requisitos varían pero típicamente incluyen: nombre/dirección de la empresa, datos del cliente, número único, fecha, descripción de bienes/servicios, importes, desglose fiscal (IVA) y número de identificación fiscal.' },
      { question: '¿Cómo prepararme para una auditoría fiscal?', answer: 'Mantenga registros organizados y fechados. Conserve justificantes (recibos, contratos, extractos bancarios). Concilie cuentas regularmente. Use software de contabilidad para registros precisos y localizables.' },
      { question: '¿Debo cobrar IVA en mis facturas?', answer: 'Depende de su régimen y los umbrales aplicables. En España, el IVA general es del 21%. En Latinoamérica, los impuestos al consumo varían por país (IVA en México al 16%, en Argentina al 21%). Consulte la normativa local.' }
    ]
  },
  {
    id: 'freelancer-success',
    title: 'Éxito como Freelancer',
    slug: 'freelancing',
    description: 'Construya un negocio freelance próspero con orientación práctica y herramientas.',
    longDescription: 'Todo lo que los freelancers necesitan para construir un negocio sostenible y rentable. Desde encontrar clientes y fijar tarifas hasta gestionar múltiples proyectos, descubra las estrategias de los freelancers exitosos.',
    targetProduct: '/freelancers',
    hubPage: '/guides/freelancing',
    blogHubPage: '/blog/freelancer-business-guide',
    icon: 'User',
    color: 'hsl(25, 95%, 53%)',
    keyTopics: [
      { title: 'Encontrar Trabajo', description: 'Las mejores plataformas para encontrar clientes.', link: '/blog/top-10-freelance-websites' },
      { title: 'Desarrollar Habilidades', description: 'Desarrollar habilidades creativas valoradas.', link: '/blog/how-to-become-a-good-graphic-designer' },
      { title: 'Fijación de Precios', description: 'Fijar precios que reflejen su valor.', link: '/blog/pricing-your-freelance-services' },
      { title: 'Gestión de Clientes', description: 'Gestionar múltiples clientes eficientemente.', link: '/blog/freelancer-business-guide' },
      { title: 'Contratos', description: 'Protegerse con acuerdos sólidos.', link: '/blog/freelance-contract-templates' },
      { title: 'Control de Tiempo', description: 'Facturar con precisión su tiempo.', link: '/blog/freelance-time-tracking-guide' }
    ],
    faq: [
      { question: '¿Cómo fijar mis tarifas freelance?', answer: 'Calcule su ingreso anual deseado, sume gastos e impuestos, divida entre horas facturables (60-70% del tiempo de trabajo). Investigue precios de mercado. Considere la fijación basada en valor para freelancers experimentados.' },
      { question: '¿Dónde encontrar clientes freelance?', answer: 'Empiece con plataformas como Upwork, Fiverr y Toptal. Construya su red en LinkedIn y eventos del sector. Pida referencias a clientes satisfechos. Cree contenido que muestre su experiencia.' },
      { question: '¿Necesito contrato para cada proyecto?', answer: '¡Sí! Un contrato protege a ambas partes. Incluya: alcance del trabajo, entregables, cronograma, condiciones de pago, política de revisiones, propiedad intelectual y condiciones de rescisión.' },
      { question: '¿Cómo manejar el aumento de alcance?', answer: 'Defina claramente el alcance en el contrato. Ante solicitudes adicionales, explique que están fuera del alcance original y presente un presupuesto para el trabajo extra.' }
    ]
  },
  {
    id: 'estimates-proposals',
    title: 'Presupuestos y Propuestas',
    slug: 'estimates',
    description: 'Gane más clientes con propuestas convincentes y presupuestos precisos.',
    longDescription: 'Aprenda a crear propuestas ganadoras y presupuestos precisos que conviertan prospectos en clientes. Desde la diferencia entre presupuesto y estimación hasta el seguimiento eficaz, domine el proceso de preventa.',
    targetProduct: '/estimates',
    hubPage: '/guides/estimates',
    blogHubPage: '/blog/winning-proposals-estimates-guide',
    icon: 'ClipboardList',
    color: 'hsl(340, 82%, 52%)',
    keyTopics: [
      { title: 'Redacción de Propuestas', description: 'Escriba propuestas que conquisten clientes.', link: '/blog/how-to-write-winning-business-proposal' },
      { title: 'Presupuesto vs. Estimación', description: 'Entienda cuándo usar cada documento.', link: '/blog/estimate-vs-quote-vs-invoice-difference' },
      { title: 'Tarificación de Proyectos', description: 'Presupueste proyectos con precisión y rentabilidad.', link: '/blog/how-to-price-project-work' },
      { title: 'Seguimiento', description: 'Aumente la aceptación con follow-ups inteligentes.', link: '/blog/following-up-on-proposals' },
      { title: 'Gestionar Rechazos', description: 'Aprender de las propuestas rechazadas.', link: '/blog/proposal-rejection-next-steps' }
    ],
    faq: [
      { question: '¿Cuál es la diferencia entre estimación, presupuesto y factura?', answer: 'Una estimación es una aproximación de costes que puede cambiar. Un presupuesto es un compromiso de precio fijo para un alcance definido. Una factura es una solicitud de pago tras completar el trabajo.' },
      { question: '¿Cómo escribir una propuesta ganadora?', answer: 'Comience comprendiendo a fondo el problema del cliente. Estructure: comprensión del desafío, solución propuesta, experiencia relevante, precio y cronograma claros, y próximos pasos.' },
      { question: '¿Cuándo hacer seguimiento de una propuesta?', answer: 'Haga seguimiento 3-5 días después del envío si no ha recibido respuesta. Envíe un mensaje breve y con valor añadido. Tras dos intentos sin respuesta, continúe adelante.' },
      { question: '¿Cómo manejar objeciones de precio?', answer: 'No baje inmediatamente el precio. Comprenda las restricciones presupuestarias, ajuste el alcance si es necesario, destaque el ROI y ofrezca planes de pago.' }
    ]
  },
  {
    id: 'expense-management',
    title: 'Gestión de Gastos',
    slug: 'expenses',
    description: 'Registre, categorice y optimice sus gastos empresariales sin esfuerzo.',
    longDescription: 'Domine la gestión de gastos, desde la digitalización de recibos hasta las categorías deducibles. Aprenda a registrar gastos, eliminar el papel, separar gastos personales y profesionales, y crear informes listos para auditoría.',
    targetProduct: '/expenses',
    hubPage: '/guides/expenses',
    blogHubPage: '/blog/complete-guide-expense-management',
    icon: 'Receipt',
    color: 'hsl(173, 80%, 40%)',
    keyTopics: [
      { title: 'Seguimiento de Gastos', description: 'Métodos y herramientas para registrar gastos.', link: '/blog/expense-tracking-methods-small-business' },
      { title: 'Gestión de Recibos', description: 'Gestión digital de recibos sin papel.', link: '/blog/digital-receipt-management-guide' },
      { title: 'Categorías de Gastos', description: 'Categorizar con un plan de cuentas adecuado.', link: '/blog/business-expense-categories-guide' },
      { title: 'Escaneo de Recibos', description: 'Comparar las mejores apps de escaneo.', link: '/blog/receipt-scanning-apps-comparison' },
      { title: 'Profesional vs. Personal', description: 'Separar correctamente los gastos.', link: '/blog/separate-business-personal-expenses' },
      { title: 'Deducciones Fiscales', description: 'Identificar y deducir gastos elegibles.', link: '/blog/tax-deductible-business-expenses' }
    ],
    faq: [
      { question: '¿Cuál es la forma más fácil de registrar gastos?', answer: 'Use software que permita fotografiar recibos, categorizar automáticamente y sincronizar con cuentas bancarias. Esto elimina la introducción manual de datos.' },
      { question: '¿Cómo categorizar los gastos empresariales?', answer: 'Categorías comunes: material de oficina, viajes, comidas de negocios, servicios profesionales, software y suscripciones, marketing, seguros y suministros.' },
      { question: '¿Necesito guardar recibos en papel?', answer: 'La mayoría de las autoridades fiscales aceptan copias digitales. Use una app de escaneo y conserve los recibos durante 5-7 años según su jurisdicción.' },
      { question: '¿Qué gastos empresariales son deducibles?', answer: 'Generalmente, cualquier gasto ordinario y necesario para el negocio es deducible: alquiler, material, viajes, formación, software, seguros y marketing.' }
    ]
  },
  {
    id: 'client-management',
    title: 'Gestión de Clientes',
    slug: 'client-management',
    description: 'Construya relaciones más fuertes con los clientes y optimice sus procesos.',
    longDescription: 'Aprenda a gestionar relaciones con clientes eficazmente, desde la incorporación hasta la retención. Descubra plantillas de comunicación, estrategias para clientes difíciles y enfoques CRM simples para freelancers y pequeñas empresas.',
    targetProduct: '/client-management',
    hubPage: '/guides/client-management',
    blogHubPage: '/blog/client-management-guide-small-business',
    icon: 'Users',
    color: 'hsl(199, 89%, 48%)',
    keyTopics: [
      { title: 'Incorporación de Clientes', description: 'Proceso de bienvenida fluido para nuevos clientes.', link: '/blog/client-onboarding-process' },
      { title: 'Clientes Difíciles', description: 'Gestionar situaciones desafiantes profesionalmente.', link: '/blog/managing-difficult-clients' },
      { title: 'Plantillas de Comunicación', description: 'Templates profesionales para la comunicación.', link: '/blog/client-communication-templates' },
      { title: 'Retención de Clientes', description: 'Estrategias para mantener a los clientes.', link: '/blog/client-retention-strategies' },
      { title: 'CRM Simple', description: 'Gestionar clientes sin software complejo.', link: '/blog/crm-for-freelancers-small-business' }
    ],
    faq: [
      { question: '¿Los freelancers necesitan un CRM?', answer: 'No necesariamente un CRM completo, pero sí un sistema para seguir datos de clientes, historial de proyectos y seguimientos. Una hoja de cálculo sirve para menos de 10 clientes; más allá, considere un CRM ligero.' },
      { question: '¿Cómo incorporar a un nuevo cliente?', answer: 'Un buen proceso incluye: email de bienvenida, cuestionario de requisitos, contrato firmado, configuración de condiciones de pago y llamada de inicio.' },
      { question: '¿Cómo manejar un cliente difícil?', answer: 'Mantenga la profesionalidad y documente todo. Establezca límites claros, comuníquese por escrito y refiera al contrato. Si la relación es irrecuperable, termínela cortésmente.' },
      { question: '¿Cuáles son las mejores estrategias de retención?', answer: 'Entregue trabajo consistentemente excelente, comuníquese proactivamente, pida feedback regular, ofrezca descuentos de fidelidad y manténgase presente con check-ins regulares.' }
    ]
  }
];

registerPillars('es', pillars);
