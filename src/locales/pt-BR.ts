import { LocaleConfig } from './types';

export const ptBR: LocaleConfig = {
  code: "pt-BR",
  country: "Brazil",
  countryCode: "BR",
  flag: "🇧🇷",
  currency: {
    code: "BRL",
    symbol: "R$",
    position: "before",
  },
  content: {
    hero: {
      badge: "FATURAMENTO CONFORME",
      headline: "Faturamento construído em torno da conformidade.",
      headlineAccent: "Não adicionado depois.",
      subheadline: "Invoicemonk é o software de faturamento e contabilidade que mantém freelancers, consultores e pequenas empresas em dia com os impostos, prontos para auditoria e pagos em todos os países onde trabalham.",
      cta: "Comece grátis — sem cartão",
      secondaryCta: "Veja como a conformidade funciona →",
      trustBadge: "Usado por empresas que faturam em mais de 30 países, incluindo o Brasil",
    },
    compliance: {
      authority: "Receita Federal",
      message: "Em conformidade com a Receita Federal e requisitos de NF-e",
    },
    socialProof: "Junte-se a empresas em crescimento no Brasil",
    paymentGateway: "Pix & Boleto",
    seo: {
      siteTitle: "Invoicemonk Brasil - Software de faturamento conforme com a Receita Federal",
      siteDescription: "Software profissional de faturamento e contabilidade para empresas brasileiras. Compatível com NF-e, suporte a Pix e Boleto. Plano gratuito disponível.",
      complianceKeyword: "conforme com NF-e",
      targetAudience: "brasileira",
      region: "Brasil",
      hreflangCode: "pt-BR",
    },
    testimonials: [
      {
        quote: "O Invoicemonk simplificou nosso fluxo de faturamento. A integração com Pix significa pagamentos instantâneos dos nossos clientes em todo o Brasil.",
        highlight: "pagamentos instantâneos dos nossos clientes",
        name: "Carlos Silva",
        title: "Fundador",
        company: "Silva Consultoria",
        location: "São Paulo, Brasil",
      },
      {
        quote: "Gerenciar faturas para nossa agência era um pesadelo antes do Invoicemonk. Agora tudo está organizado e em conformidade.",
        highlight: "tudo está organizado e em conformidade",
        name: "Fernanda Costa",
        title: "CEO",
        company: "Rio Creative Agency",
        location: "Rio de Janeiro, Brasil",
      },
      {
        quote: "O rastreamento de despesas e os relatórios fiscais tornam a declaração trimestral à Receita Federal muito mais fácil.",
        highlight: "declaração trimestral muito mais fácil",
        name: "Roberto Santos",
        title: "Diretor financeiro",
        company: "Santos Tech",
        location: "Belo Horizonte, Brasil",
      },
    ],
    faqs: [
      {
        question: "Quais métodos de pagamento são aceitos no Brasil?",
        answer: "O Invoicemonk suporta Pix, Boleto Bancário, cartões de crédito/débito e transferências bancárias. Os clientes podem pagar diretamente pela fatura.",
      },
      {
        question: "O Invoicemonk é conforme com os requisitos fiscais brasileiros?",
        answer: "Sim. O Invoicemonk gera faturas compatíveis com os requisitos da Receita Federal e suporta integração com NF-e para documentos fiscais eletrônicos.",
      },
      {
        question: "Quanto custa o Invoicemonk no Brasil?",
        answer: "O Invoicemonk oferece um plano gratuito com 5 faturas por mês. Os planos pagos começam em R$ 149/mês (Profissional) e R$ 649/mês (Empresarial). O pagamento anual economiza 20%.",
      },
      {
        question: "O Invoicemonk gerencia impostos brasileiros?",
        answer: "O Invoicemonk suporta cálculos de ISS, ICMS e PIS/COFINS dependendo do tipo de negócio e município.",
      },
      {
        question: "O Invoicemonk suporta faturamento eletrônico?",
        answer: "Sim. O Invoicemonk suporta faturamento eletrônico compatível com NF-e (Nota Fiscal Eletrônica) e requisitos do SEFAZ. Cada fatura pode incluir assinaturas digitais, carimbos criptográficos (CSID) e números de referência únicos (IRN) para conformidade regulatória completa.",
      },
    ],
    blog: {
      ctaHeadline: "Pronto para simplificar seu faturamento?",
      ctaSubtext: "Junte-se a empresas brasileiras que usam o Invoicemonk com integração Pix.",
      ctaButtonText: "Começar a faturar hoje",
    },
    socialProofHeadline: "Amado por empresas brasileiras",
  },
  pricing: {
    free: 0,
    professional: 29,
    sme: 129,
    business: 0,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: "Save ~17%",
    starterAvailable: false,
  },
  urlPrefix: "br",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "ISS/ICMS" },
};
