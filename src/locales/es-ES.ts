import { LocaleConfig } from './types';

export const esES: LocaleConfig = {
  code: "es-ES",
  country: "Spain",
  countryCode: "ES",
  flag: "🇪🇸",
  currency: {
    code: "EUR",
    symbol: "€",
    position: "after",
  },
  content: {
    hero: {
      badge: "Facturación adaptada a tu jurisdicción",
      headline: "Crea facturas profesionales",
      headlineAccent: "en segundos",
      subheadline: "Crea facturas adaptadas a tu país, rastrea ingresos y cumple con la normativa fiscal sin esfuerzo.",
      cta: "Comienza a Facturar",
      secondaryCta: "Ver Cómo Funciona",
      trustBadge: "Utilizado por empresas en España y Latinoamérica",
    },
    compliance: {
      authority: "AEAT",
      message: "Facturas conformes con la normativa de la Agencia Tributaria española",
    },
    socialProof: "Únete a empresas en crecimiento en España y Latinoamérica",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk - Software de Facturación Profesional para Empresas",
      siteDescription: "Software de facturación y contabilidad para pequeñas empresas y autónomos en España. Conforme con la AEAT. Plan gratuito disponible.",
      complianceKeyword: "conforme con AEAT",
      targetAudience: "español",
      region: "España",
      hreflangCode: "es",
    },
    testimonials: [
      {
        quote: "Invoicemonk redujo nuestro tiempo de facturación en un 70%. La integración con Stripe permite que nuestros clientes paguen al instante.",
        highlight: "redujo nuestro tiempo de facturación en un 70%",
        name: "Carlos Martínez",
        title: "Fundador",
        company: "Diseño Digital CM",
        location: "Madrid, España",
      },
      {
        quote: "Por fin una herramienta financiera potente y sencilla. Nuestro equipo estuvo operativo en un día y los informes fiscales nos ahorran horas cada trimestre.",
        highlight: "operativo en un día",
        name: "María García",
        title: "Directora Financiera",
        company: "García Consultoría",
        location: "Barcelona, España",
      },
      {
        quote: "El seguimiento de gastos por sí solo nos ha ahorrado miles de euros. Recomiendo Invoicemonk a todos los autónomos que conozco.",
        highlight: "ahorrado miles de euros",
        name: "Alejandro López",
        title: "CEO",
        company: "Bloom Agencia Digital",
        location: "Valencia, España",
      },
    ],
    faqs: [
      {
        question: "¿Qué métodos de pago soporta Invoicemonk en España?",
        answer: "Invoicemonk se integra con Stripe para pagos en España. Tus clientes pueden pagar con tarjeta de crédito/débito y transferencia bancaria directamente desde la factura.",
      },
      {
        question: "¿Cumple Invoicemonk con los requisitos de la AEAT?",
        answer: "Sí. Invoicemonk genera facturas conformes con la normativa de la Agencia Tributaria. Todas las facturas incluyen los campos obligatorios para la declaración fiscal en España.",
      },
      {
        question: "¿Cuánto cuesta Invoicemonk?",
        answer: "Invoicemonk ofrece un plan gratuito con 5 facturas al mes. Los planes de pago comienzan en 5€/mes (Profesional) y 19€/mes (Empresa). La facturación anual ahorra un 20%.",
      },
      {
        question: "¿Gestiona Invoicemonk el IVA?",
        answer: "Sí. Invoicemonk soporta tipos de IVA configurables para que puedas establecer el tipo correcto. Los importes de IVA se detallan claramente en cada factura.",
      },
      {
        question: "¿Soporta Invoicemonk la facturación electrónica?",
        answer: "Sí. Invoicemonk soporta facturación electrónica con formatos estructurados. Está preparado con firmas digitales y números de referencia únicos para el cumplimiento normativo completo.",
      },
    ],
    blog: {
      ctaHeadline: "¿Listo para simplificar tu facturación?",
      ctaSubtext: "Únete a miles de empresas que usan Invoicemonk para gestionar sus finanzas.",
      ctaButtonText: "Comienza Tu Prueba Gratis",
    },
    socialProofHeadline: "Elegido por empresas hispanohablantes",
  },
  pricing: {
    free: 0,
    professional: 5,
    business: 19,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Ahorra 20%",
    starterAvailable: false,
  },
  urlPrefix: "es",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "IVA", rate: "21%" },
};