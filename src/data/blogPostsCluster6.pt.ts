import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const posts: BlogPost[] = [
  {
    slug: 'freelance-contract-templates',
    title: 'Modelos de contratos para freelancers: proteja você e seus clientes',
    excerpt: 'Obtenha modelos essenciais de contratos freelancer e saiba quais cláusulas protegem seu negócio.',
    category: 'Freelancing',
    tags: ['freelancer', 'contratos', 'jurídico', 'modelos'],
    author: defaultAuthor,
    date: '2026-01-28',
    readTime: '11 min de leitura',
    featuredImage: '/images/blog/freelance-contracts.jpg',
    featuredImageAlt: 'Modelos de contratos para freelancers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['contrato freelancer', 'modelo de contrato', 'contrato com cliente'],
    priority: 'P2',
    content: `
      <p>Um bom contrato protege tanto você quanto seu cliente. Ele previne mal-entendidos, estabelece expectativas claras e oferece respaldo jurídico caso algo dê errado.</p>

      <h2>Por que todo freelancer precisa de um contrato</h2>
      <ul>
        <li><strong>Mudança de escopo:</strong> Clientes adicionam trabalho sem pagamento extra</li>
        <li><strong>Disputas de pagamento:</strong> Sem comprovação dos termos acordados</li>
        <li><strong>Confusão de propriedade intelectual:</strong> Quem é dono do trabalho?</li>
        <li><strong>Exposição à responsabilidade:</strong> Sem limites à sua responsabilidade</li>
      </ul>

      <h2>Elementos essenciais do contrato</h2>
      <h3>1. Escopo do trabalho</h3>
      <p>Defina exatamente o que será entregue e o que <em>não</em> está incluído.</p>

      <h3>2. Cronograma e marcos</h3>
      <p>Estabeleça datas de início, marcos e consequências por atrasos.</p>

      <h3>3. Condições de pagamento</h3>
      <p>Honorários, cronograma (50% de entrada, 50% na entrega), vencimentos e multas por atraso.</p>

      <h3>4. Política de revisões</h3>
      <p>Defina o número de rodadas incluídas e o custo de revisões extras.</p>

      <h3>5. Propriedade intelectual</h3>
      <p>Cláusula crítica: os direitos só são transferidos após pagamento integral.</p>

      <h3>6. Confidencialidade</h3>
      <p>Proteja informações sensíveis dos seus clientes.</p>

      <h3>7. Condições de rescisão</h3>
      <p>Aviso prévio, remuneração pelo trabalho realizado e cláusula de cancelamento.</p>

      <h2>Sinais de alerta</h2>
      <ul>
        <li>Revisões ilimitadas</li>
        <li>Pagamento apenas com «satisfação do cliente»</li>
        <li>Cláusulas de não-competição abrangentes</li>
        <li>Transferência de direitos antes do pagamento</li>
      </ul>

      <h2>Próximos passos</h2>
      <p>Crie um modelo com todos os elementos essenciais. Mais em nossos guias sobre <a href="/__LANG__/blog/pricing-your-freelance-services">precificação</a> e <a href="/__LANG__/blog/freelancer-business-guide">criação de um negócio freelancer</a>.</p>
    `
  },
  {
    slug: 'pricing-your-freelance-services',
    title: 'Precificação freelancer: estratégias para cobrar o que você vale',
    excerpt: 'Aprenda a calcular suas tarifas e comunicar seu valor aos clientes com confiança.',
    category: 'Freelancing',
    tags: ['freelancer', 'precificação', 'tarifas', 'preço baseado em valor'],
    author: defaultAuthor,
    date: '2026-01-27',
    readTime: '12 min de leitura',
    featuredImage: '/images/blog/pricing-freelance.jpg',
    featuredImageAlt: 'Estratégias de preços para freelancers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['preços freelancer', 'taxa hora freelancer', 'precificação por valor'],
    priority: 'P2',
    content: `
      <p>A maioria dos freelancers cobra menos do que deveria. Aprender a precificar corretamente é uma das habilidades mais impactantes para o sucesso a longo prazo.</p>

      <h2>Por que freelancers cobram menos</h2>
      <ul>
        <li><strong>Síndrome do impostor:</strong> Não acreditamos totalmente no valor do nosso trabalho</li>
        <li><strong>Medo de rejeição:</strong> Preços mais baixos parecem mais seguros</li>
        <li><strong>Comparação com emprego CLT:</strong> Tarifas freelancer devem ser maiores (você cobre INSS, IR e custos operacionais)</li>
      </ul>

      <h2>Calcule sua tarifa mínima</h2>
      <p>Some todos os custos anuais (despesas do negócio + pessoais + margem + impostos) e divida pelas horas faturáveis (típico: 1.000–1.500/ano).</p>

      <h2>Modelos de precificação</h2>
      <ul>
        <li><strong>Taxa por hora:</strong> Simples mas limita sua renda</li>
        <li><strong>Preço por projeto:</strong> Recompensa eficiência</li>
        <li><strong>Baseado em valor:</strong> Cobrança pelo resultado para o cliente</li>
        <li><strong>Retainer:</strong> Mensalidade fixa por disponibilidade contínua</li>
      </ul>

      <h2>Próximos passos</h2>
      <p>Calcule sua tarifa mínima, pesquise preços do mercado e aumente com seu próximo cliente. Mais em nossos guias sobre <a href="/__LANG__/blog/freelance-contract-templates">modelos de contratos</a> e <a href="/__LANG__/blog/freelance-time-tracking-guide">controle de horas</a>.</p>
    `
  },
  {
    slug: 'freelance-time-tracking-guide',
    title: 'Controle de horas freelancer: fature corretamente e entenda sua produtividade',
    excerpt: 'Registre seu tempo de forma eficaz para faturar corretamente e entender onde suas horas estão indo.',
    category: 'Freelancing',
    tags: ['freelancer', 'controle de horas', 'produtividade', 'faturamento'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '7 min de leitura',
    featuredImage: '/images/blog/time-tracking.jpg',
    featuredImageAlt: 'Guia de controle de horas para freelancers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/freelancers',
    semanticKeywords: ['controle de horas', 'horas freelancer', 'faturamento por hora'],
    priority: 'P2',
    content: `
      <p>Mesmo com preços por projeto, o controle de horas revela onde suas horas realmente vão e se seus preços fazem sentido.</p>

      <h2>Por que registrar seu tempo</h2>
      <ul>
        <li><strong>Faturamento preciso:</strong> Sem registro, profissionais subfaturam 10–30%</li>
        <li><strong>Custos reais:</strong> Um projeto de R$ 25.000 em 20 h = R$ 1.250/h. Em 50 h = R$ 500/h</li>
        <li><strong>Melhores orçamentos:</strong> Dados passados para estimativas mais precisas</li>
      </ul>

      <h2>Como registrar eficazmente</h2>
      <ul>
        <li>Registre em tempo real — não reconstrua no fim do dia</li>
        <li>Seja específico: «Design web — layout homepage» em vez de «trabalho para cliente»</li>
        <li>Inclua tudo: admin, emails, ligações</li>
        <li>Revisão semanal de 15 minutos</li>
      </ul>

      <h2>Próximos passos</h2>
      <p>Escolha uma ferramenta e use por um mês. Mais em nossos guias sobre <a href="/__LANG__/blog/pricing-your-freelance-services">precificação</a> e <a href="/__LANG__/blog/cash-flow-forecasting-for-freelancers">previsão de fluxo de caixa</a>.</p>
    `
  },
  {
    slug: 'cash-flow-forecasting-for-freelancers',
    title: 'Previsão de fluxo de caixa para freelancers: antecipe seus rendimentos',
    excerpt: 'Técnicas simples de previsão de fluxo de caixa para freelancers preverem rendimentos e construírem estabilidade financeira.',
    category: 'Finance',
    tags: ['fluxo de caixa', 'freelancer', 'previsão', 'planejamento financeiro'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '10 min de leitura',
    featuredImage: '/images/blog/cash-flow-forecasting.jpg',
    featuredImageAlt: 'Previsão de fluxo de caixa para freelancers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/payments',
    semanticKeywords: ['previsão fluxo de caixa', 'renda freelancer', 'planejamento financeiro'],
    priority: 'P2',
    content: `
      <p>A renda freelancer flutua, mas os gastos são constantes. A previsão de fluxo de caixa consiste em projetar receitas e despesas futuras para antecipar problemas com semanas de antecedência.</p>

      <h2>Método simples de previsão</h2>
      <ol>
        <li>Liste receitas esperadas: notas fiscais pendentes, projetos confirmados, retainers</li>
        <li>Liste todas as despesas: fixas, variáveis, trimestrais</li>
        <li>Detalhe semana a semana: saldo inicial → receitas → despesas → saldo final</li>
        <li>Identifique zonas de perigo</li>
      </ol>

      <h2>Construir uma reserva de caixa</h2>
      <ul>
        <li><strong>Mínimo:</strong> 3 meses de custos operacionais</li>
        <li><strong>Confortável:</strong> 6 meses</li>
        <li><strong>Seguro:</strong> 12 meses para setores voláteis</li>
      </ul>

      <h2>Estratégias para suavizar o fluxo de caixa</h2>
      <ul>
        <li>Exigir adiantamentos (30–50% antecipado)</li>
        <li>Faturar imediatamente após o serviço</li>
        <li>Encurtar prazos de pagamento</li>
        <li>Oferecer retainers mensais</li>
      </ul>

      <h2>Próximos passos</h2>
      <p>Abra uma planilha e projete seus próximos 3 meses. Mais em nosso <a href="/__LANG__/blog/freelancer-business-guide">guia completo para freelancers</a>.</p>
    `
  },
  {
    slug: 'profit-margins-how-to-calculate-and-improve',
    title: 'Margens de lucro: como calcular, analisar e melhorar',
    excerpt: 'Aprenda a calcular margens brutas e líquidas, comparar com seu setor e melhorar a rentabilidade.',
    category: 'Small Business',
    tags: ['lucro', 'margens', 'rentabilidade', 'preços'],
    author: defaultAuthor,
    date: '2026-01-26',
    readTime: '9 min de leitura',
    featuredImage: '/images/blog/profit-margins.jpg',
    featuredImageAlt: 'Calcular e melhorar margens de lucro',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['margem de lucro', 'margem bruta', 'margem líquida', 'rentabilidade'],
    priority: 'P2',
    content: `
      <p>Faturamento é vaidade, lucro é sanidade. Entender suas margens revela se seu modelo de negócio é sustentável.</p>

      <h2>Tipos de margens</h2>
      <h3>Margem bruta</h3>
      <p><strong>Fórmula:</strong> (Receita − CPV) ÷ Receita × 100</p>

      <h3>Margem operacional</h3>
      <p><strong>Fórmula:</strong> Resultado operacional ÷ Receita × 100</p>

      <h3>Margem líquida</h3>
      <p><strong>Fórmula:</strong> Lucro líquido ÷ Receita × 100</p>

      <h2>Margens saudáveis por setor</h2>
      <ul>
        <li><strong>Software/SaaS:</strong> 70–85% bruta, 15–25% líquida</li>
        <li><strong>Serviços profissionais:</strong> 50–70% bruta, 10–20% líquida</li>
        <li><strong>Varejo:</strong> 25–50% bruta, 2–10% líquida</li>
      </ul>

      <h2>Estratégias de melhoria</h2>
      <ul>
        <li>Aumentar preços gradualmente</li>
        <li>Reduzir custos de produção</li>
        <li>Otimizar despesas operacionais</li>
        <li>Focar em produtos/serviços de alta margem</li>
      </ul>

      <h2>Próximos passos</h2>
      <p>Calcule suas margens atuais com um <a href="/__LANG__/accounting">software de contabilidade</a>. Mais em nosso guia para <a href="/__LANG__/blog/how-to-create-a-budget-for-your-small-business">criar um orçamento</a>.</p>
    `
  },
  {
    slug: 'cash-vs-accrual-accounting-explained',
    title: 'Regime de caixa vs competência: qual método é o certo para seu negócio?',
    excerpt: 'Entenda as principais diferenças entre o regime de caixa e o regime de competência na contabilidade.',
    category: 'Small Business',
    tags: ['contabilidade', 'regime de caixa', 'regime de competência', 'escrituração'],
    author: defaultAuthor,
    date: '2026-01-27',
    readTime: '8 min de leitura',
    featuredImage: '/images/blog/cash-vs-accrual.jpg',
    featuredImageAlt: 'Regime de caixa vs competência',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['regime de caixa', 'regime de competência', 'escrituração contábil'],
    priority: 'P2',
    content: `
      <p>A escolha do regime contábil impacta como você registra receitas, paga impostos e avalia a saúde financeira do seu negócio. No Brasil, MEIs e empresas do Simples Nacional podem optar pelo regime de caixa, enquanto empresas maiores devem adotar o regime de competência.</p>

      <h2>Regime de caixa</h2>
      <p>Receitas registradas no recebimento, despesas no pagamento.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Mais simples de gerenciar</li>
        <li>Reflete o dinheiro real disponível</li>
        <li>Tributação só quando o dinheiro entra</li>
      </ul>

      <h2>Regime de competência</h2>
      <p>Receitas registradas na emissão da NF, despesas na ocorrência — independente do pagamento.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Imagem mais fiel da situação econômica</li>
        <li>Melhor planejamento de longo prazo</li>
        <li>Obrigatório para empresas com Lucro Real</li>
      </ul>

      <h2>Quando usar cada método?</h2>
      <p>No Brasil, empresas optantes pelo Simples Nacional e MEIs podem adotar o regime de caixa para apuração de impostos. Empresas no Lucro Real são obrigadas ao regime de competência conforme a legislação da Receita Federal.</p>

      <h2>Próximos passos</h2>
      <p>Consulte seu contador sobre o regime mais adequado. Mais em nosso <a href="/__LANG__/blog/small-business-accounting-guide">guia de contabilidade</a>.</p>
    `
  },
  {
    slug: 'tax-software-integration-guide',
    title: 'Guia de integração de software fiscal: otimize seu fluxo tributário',
    excerpt: 'Aprenda a conectar seu software de faturamento e contabilidade com ferramentas fiscais. Reduza erros e economize tempo.',
    category: 'Tax and Compliance',
    tags: ['software fiscal', 'integração', 'automatização fiscal', 'contabilidade'],
    author: defaultAuthor,
    date: '2025-07-12',
    dateModified: '2026-02-04',
    readTime: '8 min de leitura',
    featuredImage: '/images/blog/tax-software-integration.jpg',
    featuredImageAlt: 'Painel de integração de software fiscal',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['integração software fiscal', 'automatização contábil', 'fluxo tributário'],
    priority: 'P2',
    content: `
      <p>Transferir dados manualmente entre seu software de faturamento, contabilidade e ferramentas fiscais é tedioso e propenso a erros. Integrações modernas automatizam esses fluxos.</p>

      <h2>Pontos de integração chave</h2>
      <h3>Faturamento → Contabilidade</h3>
      <p>Notas fiscais do <a href="/__LANG__/invoicing">Invoicemonk</a> alimentam automaticamente sua contabilidade.</p>

      <h3>Despesas → Contabilidade</h3>
      <p>Comprovantes auto-categorizados, extratos bancários importados automaticamente.</p>

      <h3>Contabilidade → Obrigações fiscais</h3>
      <p>Resumos de receitas mapeados para declarações, depreciações calculadas, DARF e DAS pré-preenchidos.</p>

      <h2>Benefícios</h2>
      <ul>
        <li>5–10 horas por mês de entrada manual economizadas</li>
        <li>Redução de erros em dados financeiros</li>
        <li>Visibilidade fiscal em tempo real</li>
        <li>Fiscalizações da Receita Federal mais tranquilas</li>
      </ul>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/__LANG__/blog/small-business-tax-compliance-guide">Guia completo de conformidade fiscal</a></li>
        <li><a href="/__LANG__/blog/quarterly-tax-payment-guide">Guia de pagamentos trimestrais de impostos</a></li>
      </ul>
    `
  }
];

registerBlogPosts('pt', posts);
