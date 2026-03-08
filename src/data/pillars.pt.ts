import { registerPillars } from '@/utils/i18nData';
import type { Pillar } from '@/data/topicalMap';

const pillars: Pillar[] = [
  {
    id: 'invoicing-mastery',
    title: 'Dominando a Faturação',
    slug: 'invoicing',
    description: 'Domine a arte da faturação profissional para receber mais rápido e parecer mais profissional.',
    longDescription: 'Tudo o que precisa saber sobre criar faturas profissionais, desde os elementos essenciais até às melhores práticas. Aprenda a faturar corretamente, receber mais rápido e manter a conformidade fiscal em diferentes países.',
    targetProduct: '/invoicing',
    hubPage: '/guides/invoicing',
    blogHubPage: '/blog/complete-guide-to-business-invoicing',
    icon: 'FileText',
    color: 'hsl(var(--primary))',
    keyTopics: [
      { title: 'Elementos Essenciais', description: 'Os elementos indispensáveis de toda fatura profissional.', link: '/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners' },
      { title: 'Modelos de Fatura', description: 'Crie modelos profissionais que reflitam a sua marca.', link: '/blog/invoicemonk-template-how-to-create-a-perfect-invoice-template' },
      { title: 'Faturação Pontual', description: 'Domine o timing para um melhor fluxo de caixa.', link: '/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently' },
      { title: 'Numeração de Faturas', description: 'Implemente um sistema de numeração organizado.', link: '/blog/invoice-numbering-best-practices' },
      { title: 'Condições de Pagamento', description: 'Escreva condições claras que os clientes entendam.', link: '/blog/how-to-write-invoice-payment-terms' },
      { title: 'Faturas Recorrentes', description: 'Automatize a faturação para clientes regulares.', link: '/blog/recurring-invoices-automating-billing' }
    ],
    faq: [
      { question: 'Quais são os elementos essenciais de uma fatura profissional?', answer: 'Uma fatura profissional deve incluir: nome e contactos da empresa, dados do cliente, número único de fatura, data de emissão e vencimento, lista detalhada de produtos/serviços com quantidades e preços, subtotal e total, impostos aplicáveis e métodos de pagamento aceites.' },
      { question: 'Como numerar as faturas corretamente?', answer: 'Use um sistema sequencial fácil de acompanhar. Formatos comuns: sequencial simples (001, 002, 003), baseado em data (2024-001) ou com prefixo de cliente (ABC-001). O essencial é a consistência — nunca reutilize números.' },
      { question: 'Quando devo enviar uma fatura?', answer: 'Para projetos, envie imediatamente após conclusão ou nos marcos acordados. Para serviços recorrentes, estabeleça um calendário regular. Quanto mais rápido faturar, mais rápido recebe.' },
      { question: 'Que condições de pagamento devo usar?', answer: 'Condições comuns incluem Líquido 15, Líquido 30 ou Pagamento à Vista. Para novos clientes, prazos mais curtos reduzem o risco. Considere descontos por antecipação para incentivar pagamentos mais rápidos.' },
      { question: 'Como lidar com faturação internacional?', answer: 'Para clientes internacionais, inclua: moeda, dados bancários internacionais (IBAN, SWIFT), informações fiscais aplicáveis e garanta a conformidade com as regulamentações de ambos os países.' }
    ]
  },
  {
    id: 'getting-paid',
    title: 'Receber Mais Rápido',
    slug: 'getting-paid',
    description: 'Estratégias e ferramentas para acelerar os seus recebimentos e melhorar o fluxo de caixa.',
    longDescription: 'Descubra estratégias comprovadas para reduzir atrasos de pagamento e melhorar o seu fluxo de caixa. De modelos de lembrete à escolha dos meios de pagamento certos, tudo sobre receber mais rápido como pequeno empresário ou freelancer.',
    targetProduct: '/payments',
    hubPage: '/guides/getting-paid',
    blogHubPage: '/blog/ultimate-guide-getting-paid-faster',
    icon: 'Wallet',
    color: 'hsl(142, 76%, 36%)',
    keyTopics: [
      { title: 'Pagamentos em Atraso', description: 'Abordagens profissionais para cobrar valores em atraso.', link: '/blog/how-to-handle-late-payments-professionally' },
      { title: 'Meios de Pagamento', description: 'Compare opções de pagamento online para o seu negócio.', link: '/blog/online-payment-methods-comparison-small-business' },
      { title: 'Lembretes de Pagamento', description: 'Automatize lembretes para reduzir atrasos.', link: '/blog/payment-reminder-email-templates' },
      { title: 'Desconto por Antecipação', description: 'Incentive clientes a pagar mais rápido.', link: '/blog/early-payment-discounts-do-they-work' },
      { title: 'Previsão de Fluxo de Caixa', description: 'Preveja e planeie os seus recebimentos.', link: '/blog/cash-flow-forecasting-for-freelancers' }
    ],
    faq: [
      { question: 'Como cobrar pagamentos em atraso?', answer: 'Comece com um lembrete amigável 1-3 dias após o vencimento. Sem pagamento após uma semana, envie um lembrete mais firme. Após 30 dias, considere contacto telefónico. Mantenha-se sempre profissional e documente toda a comunicação.' },
      { question: 'Devo oferecer desconto por antecipação?', answer: 'Descontos como "2/10 Líquido 30" podem acelerar pagamentos. Calcule o custo anual efetivo — 2% de desconto por 20 dias de antecipação equivale a cerca de 36% anualmente. Funciona melhor para negócios de alta margem.' },
      { question: 'Que meios de pagamento devo aceitar?', answer: 'Aceite vários métodos: transferência bancária (menores taxas), cartões de crédito/débito (conveniente para clientes) e carteiras digitais como PayPal ou Stripe. Considere as preferências locais.' },
      { question: 'Como reduzir atrasos de pagamento?', answer: 'Estratégias-chave: condições claras desde o início, faturação imediata, lembretes automáticos, múltiplos meios de pagamento e adiantamentos para projetos grandes.' }
    ]
  },
  {
    id: 'business-finances',
    title: 'Finanças Empresariais',
    slug: 'business-finances',
    description: 'Conhecimentos essenciais de contabilidade e gestão de despesas para o sucesso de pequenas empresas.',
    longDescription: 'Domine os fundamentos da contabilidade e gestão financeira para pequenas empresas. Da criação de orçamentos à compreensão de relatórios financeiros, adquira conhecimentos para tomar decisões financeiras informadas.',
    targetProduct: '/accounting',
    hubPage: '/guides/business-finances',
    blogHubPage: '/blog/small-business-accounting-guide',
    icon: 'Calculator',
    color: 'hsl(221, 83%, 53%)',
    keyTopics: [
      { title: 'Bases de Contabilidade', description: 'Conceitos fundamentais para todo empresário.', link: '/blog/the-basics-of-small-business-accounting' },
      { title: 'Criação de Orçamento', description: 'Construir um orçamento que impulsione o crescimento.', link: '/blog/how-to-create-a-budget-for-your-small-business' },
      { title: 'Relatórios Financeiros', description: 'Compreender os relatórios essenciais.', link: '/blog/small-business-accounting-guide' },
      { title: 'Margens de Lucro', description: 'Calcular e melhorar a rentabilidade.', link: '/blog/profit-margins-how-to-calculate-and-improve' },
      { title: 'Regime de Caixa vs. Competência', description: 'Escolher o método contabilístico certo.', link: '/blog/cash-vs-accrual-accounting-explained' }
    ],
    faq: [
      { question: 'Regime de caixa ou de competência?', answer: 'O regime de caixa regista receitas ao recebimento e despesas ao pagamento — mais simples para pequenas empresas. O regime de competência regista quando gerado, oferecendo uma imagem financeira mais precisa.' },
      { question: 'Que relatórios financeiros devo acompanhar?', answer: 'Relatórios essenciais: demonstração de resultados para rentabilidade, balanço para ativos e passivos, mapa de fluxos de caixa e antiguidade de saldos de clientes.' },
      { question: 'Como criar um orçamento para a minha empresa?', answer: 'Analise receitas e despesas passadas. Categorize custos fixos (renda, salários) e variáveis (materiais, marketing). Defina metas realistas e reveja mensalmente.' },
      { question: 'Quando devo contratar um contabilista?', answer: 'Considere ajuda profissional quando: o negócio ultrapassa a contabilidade simples, precisa de consultoria fiscal, procura financiamento ou gasta mais tempo com finanças do que com o seu negócio principal.' }
    ]
  },
  {
    id: 'tax-compliance',
    title: 'Impostos & Conformidade',
    slug: 'tax-compliance',
    description: 'Mantenha-se preparado para auditorias e em conformidade com as regulamentações fiscais.',
    longDescription: 'Navegue a conformidade fiscal com confiança na Nigéria, Reino Unido, EUA, Canadá e Austrália. Conheça os requisitos de faturação, deduções fiscais, preparação para auditorias e normas de conservação de documentos.',
    targetProduct: '/compliance',
    hubPage: '/guides/tax-compliance',
    blogHubPage: '/blog/small-business-tax-compliance-guide',
    icon: 'Shield',
    color: 'hsl(271, 91%, 65%)',
    keyTopics: [
      { title: 'Deduções Fiscais', description: 'Maximizar as deduções legítimas.', link: '/blog/small-business-tax-deductions-guide' },
      { title: 'Preparação para Auditoria', description: 'Manter-se pronto para inspeções fiscais.', link: '/blog/how-to-prepare-business-tax-audit' },
      { title: 'Nigéria (FIRS)', description: 'Requisitos de faturação conformes ao NRS.', link: '/blog/firs-invoice-requirements-nigeria' },
      { title: 'UK (HMRC)', description: 'Guia de conformidade Making Tax Digital.', link: '/blog/hmrc-invoicing-rules-uk-mtd-compliance' },
      { title: 'EUA (IRS)', description: 'Conformidade fiscal para PMEs americanas.', link: '/blog/irs-invoice-requirements-us-compliance' },
      { title: 'Conservação de Documentos', description: 'Manter arquivos empresariais em conformidade.', link: '/blog/how-to-prepare-business-tax-audit' }
    ],
    faq: [
      { question: 'Durante quanto tempo devo guardar documentos comerciais?', answer: 'Geralmente 6 a 7 anos. Nigéria (FIRS): 6 anos, UK (HMRC): 6 anos, EUA (IRS): 7 anos, Canadá (CRA): 6 anos, Austrália (ATO): 5 anos. Guardar permanentemente: contas anuais, aquisições de ativos e documentos legais.' },
      { question: 'Que elementos da fatura são legalmente obrigatórios?', answer: 'Os requisitos variam mas tipicamente incluem: nome/morada da empresa, dados do cliente, número único, data, descrição dos bens/serviços, valores, discriminação fiscal (IVA) e número de contribuinte.' },
      { question: 'Como me preparar para uma auditoria fiscal?', answer: 'Mantenha registos organizados e datados. Conserve comprovativos (recibos, contratos, extratos bancários). Reconcilie contas regularmente. Use software de contabilidade para registos precisos e pesquisáveis.' },
      { question: 'Tenho de cobrar IVA nas minhas faturas?', answer: 'Depende do seu regime e dos limites de isenção. No Brasil, os impostos sobre serviços (ISS) e produtos (ICMS) variam por estado e município. Em Portugal, o IVA é obrigatório salvo isenção aplicável.' }
    ]
  },
  {
    id: 'freelancer-success',
    title: 'Sucesso como Freelancer',
    slug: 'freelancing',
    description: 'Construa um negócio freelance próspero com orientação prática e ferramentas.',
    longDescription: 'Tudo o que freelancers precisam para construir um negócio sustentável e lucrativo. Da procura de clientes à definição de preços, passando pela gestão de múltiplos projetos, descubra as estratégias dos freelancers de sucesso.',
    targetProduct: '/freelancers',
    hubPage: '/guides/freelancing',
    blogHubPage: '/blog/freelancer-business-guide',
    icon: 'User',
    color: 'hsl(25, 95%, 53%)',
    keyTopics: [
      { title: 'Encontrar Trabalho', description: 'As melhores plataformas para encontrar clientes.', link: '/blog/top-10-freelance-websites' },
      { title: 'Desenvolver Competências', description: 'Desenvolver competências criativas valorizadas.', link: '/blog/how-to-become-a-good-graphic-designer' },
      { title: 'Definição de Preços', description: 'Definir preços que reflitam o seu valor.', link: '/blog/pricing-your-freelance-services' },
      { title: 'Gestão de Clientes', description: 'Gerir múltiplos clientes eficientemente.', link: '/blog/freelancer-business-guide' },
      { title: 'Contratos', description: 'Proteger-se com acordos sólidos.', link: '/blog/freelance-contract-templates' },
      { title: 'Registo de Tempo', description: 'Faturar com precisão o seu tempo.', link: '/blog/freelance-time-tracking-guide' }
    ],
    faq: [
      { question: 'Como definir os meus preços freelance?', answer: 'Calcule o rendimento anual desejado, adicione despesas e impostos, divida pelas horas faturáveis (60-70% do tempo de trabalho). Pesquise preços de mercado. Considere preços baseados em valor para freelancers experientes.' },
      { question: 'Onde encontrar clientes freelance?', answer: 'Comece com plataformas como Upwork, Fiverr e Toptal. Construa a sua rede no LinkedIn e em eventos do setor. Peça referências a clientes satisfeitos. Crie conteúdo que mostre a sua expertise.' },
      { question: 'Preciso de contrato para cada projeto?', answer: 'Sim! Um contrato protege ambas as partes. Inclua: âmbito do trabalho, entregáveis, cronograma, condições de pagamento, política de revisões, propriedade intelectual e condições de rescisão.' },
      { question: 'Como lidar com o aumento de âmbito?', answer: 'Defina claramente o âmbito no contrato. Quando surgirem pedidos adicionais, explique que estão fora do âmbito original e apresente um orçamento para o trabalho extra.' }
    ]
  },
  {
    id: 'estimates-proposals',
    title: 'Orçamentos & Propostas',
    slug: 'estimates',
    description: 'Conquiste mais clientes com propostas convincentes e orçamentos precisos.',
    longDescription: 'Aprenda a criar propostas vencedoras e orçamentos precisos que convertem prospects em clientes. Da diferença entre orçamento e estimativa ao seguimento eficaz, domine o processo de pré-venda.',
    targetProduct: '/estimates',
    hubPage: '/guides/estimates',
    blogHubPage: '/blog/winning-proposals-estimates-guide',
    icon: 'ClipboardList',
    color: 'hsl(340, 82%, 52%)',
    keyTopics: [
      { title: 'Escrita de Propostas', description: 'Escreva propostas que conquistam clientes.', link: '/blog/how-to-write-winning-business-proposal' },
      { title: 'Orçamento vs. Estimativa', description: 'Entenda quando usar cada documento.', link: '/blog/estimate-vs-quote-vs-invoice-difference' },
      { title: 'Precificação de Projetos', description: 'Precifique projetos com precisão e rentabilidade.', link: '/blog/how-to-price-project-work' },
      { title: 'Seguimento', description: 'Aumente a aceitação com follow-ups inteligentes.', link: '/blog/following-up-on-proposals' },
      { title: 'Lidar com Rejeições', description: 'Aprender com propostas recusadas.', link: '/blog/proposal-rejection-next-steps' }
    ],
    faq: [
      { question: 'Qual a diferença entre estimativa, orçamento e fatura?', answer: 'Uma estimativa é uma aproximação de custos que pode mudar. Um orçamento é um compromisso de preço fixo para um âmbito definido. Uma fatura é um pedido de pagamento após conclusão do trabalho.' },
      { question: 'Como escrever uma proposta vencedora?', answer: 'Comece por compreender profundamente o problema do cliente. Estruture: compreensão do desafio, solução proposta, experiência relevante, preço e cronograma claros, e próximos passos.' },
      { question: 'Quando devo fazer follow-up de uma proposta?', answer: 'Faça follow-up 3-5 dias após o envio se não obteve resposta. Envie uma mensagem breve e com valor acrescentado. Após duas tentativas sem resposta, siga em frente.' },
      { question: 'Como lidar com objeções de preço?', answer: 'Não baixe imediatamente o preço. Compreenda as restrições orçamentais, ajuste o âmbito se necessário, destaque o ROI e ofereça planos de pagamento.' }
    ]
  },
  {
    id: 'expense-management',
    title: 'Gestão de Despesas',
    slug: 'expenses',
    description: 'Acompanhe, categorize e otimize as suas despesas empresariais sem esforço.',
    longDescription: 'Domine a gestão de despesas, da digitalização de recibos às categorias dedutíveis. Aprenda a acompanhar despesas, eliminar o papel, separar gastos pessoais e profissionais, e criar relatórios prontos para auditoria.',
    targetProduct: '/expenses',
    hubPage: '/guides/expenses',
    blogHubPage: '/blog/complete-guide-expense-management',
    icon: 'Receipt',
    color: 'hsl(173, 80%, 40%)',
    keyTopics: [
      { title: 'Acompanhamento de Despesas', description: 'Métodos e ferramentas para registar despesas.', link: '/blog/expense-tracking-methods-small-business' },
      { title: 'Gestão de Recibos', description: 'Gestão digital de recibos sem papel.', link: '/blog/digital-receipt-management-guide' },
      { title: 'Categorias de Despesas', description: 'Categorizar com um plano de contas adequado.', link: '/blog/business-expense-categories-guide' },
      { title: 'Digitalização de Recibos', description: 'Comparar as melhores apps de digitalização.', link: '/blog/receipt-scanning-apps-comparison' },
      { title: 'Profissional vs. Pessoal', description: 'Separar corretamente as despesas.', link: '/blog/separate-business-personal-expenses' },
      { title: 'Deduções Fiscais', description: 'Identificar e deduzir despesas elegíveis.', link: '/blog/tax-deductible-business-expenses' }
    ],
    faq: [
      { question: 'Qual a forma mais fácil de acompanhar despesas?', answer: 'Use software que permita fotografar recibos, categorizar automaticamente e sincronizar com contas bancárias. Isto elimina a introdução manual de dados.' },
      { question: 'Como categorizar despesas profissionais?', answer: 'Categorias comuns: material de escritório, deslocações, refeições de negócios, prestações de serviços, software e subscrições, marketing, seguros e utilidades.' },
      { question: 'Preciso de guardar recibos em papel?', answer: 'A maioria das autoridades fiscais aceita cópias digitais. Use uma app de digitalização e conserve os recibos durante 5-7 anos conforme a sua jurisdição.' },
      { question: 'Que despesas empresariais são dedutíveis?', answer: 'Geralmente, qualquer despesa ordinária e necessária ao negócio é dedutível: renda, material, deslocações, formação, software, seguros e marketing.' }
    ]
  },
  {
    id: 'client-management',
    title: 'Gestão de Clientes',
    slug: 'client-management',
    description: 'Construa relações mais fortes com os clientes e otimize os seus processos.',
    longDescription: 'Aprenda a gerir relações com clientes eficazmente, do onboarding à retenção. Descubra modelos de comunicação, estratégias para clientes difíceis e abordagens CRM simples para freelancers e pequenas empresas.',
    targetProduct: '/client-management',
    hubPage: '/guides/client-management',
    blogHubPage: '/blog/client-management-guide-small-business',
    icon: 'Users',
    color: 'hsl(199, 89%, 48%)',
    keyTopics: [
      { title: 'Onboarding de Clientes', description: 'Processo de integração fluido para novos clientes.', link: '/blog/client-onboarding-process' },
      { title: 'Clientes Difíceis', description: 'Lidar profissionalmente com situações desafiantes.', link: '/blog/managing-difficult-clients' },
      { title: 'Modelos de Comunicação', description: 'Templates profissionais para comunicação.', link: '/blog/client-communication-templates' },
      { title: 'Retenção de Clientes', description: 'Estratégias para manter os clientes.', link: '/blog/client-retention-strategies' },
      { title: 'CRM Simples', description: 'Acompanhar clientes sem software complexo.', link: '/blog/crm-for-freelancers-small-business' }
    ],
    faq: [
      { question: 'Freelancers precisam de CRM?', answer: 'Não necessariamente um CRM completo, mas um sistema para acompanhar dados de clientes, histórico de projetos e seguimentos. Uma folha de cálculo serve para menos de 10 clientes; além disso, considere um CRM leve.' },
      { question: 'Como fazer o onboarding de um novo cliente?', answer: 'Um bom processo inclui: e-mail de boas-vindas, questionário de requisitos, contrato assinado, configuração de condições de pagamento e chamada de arranque.' },
      { question: 'Como lidar com um cliente difícil?', answer: 'Mantenha-se profissional e documente tudo. Defina limites claros, comunique por escrito e refira-se ao contrato. Se a relação for irrecuperável, termine-a educadamente.' },
      { question: 'Quais as melhores estratégias de retenção?', answer: 'Entregue trabalho consistentemente excelente, comunique proativamente, peça feedback regular, ofereça descontos de fidelidade e mantenha-se presente com check-ins regulares.' }
    ]
  }
];

registerPillars('pt', pillars);
