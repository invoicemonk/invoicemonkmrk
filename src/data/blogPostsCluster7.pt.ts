import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const posts: BlogPost[] = [
  {
    slug: 'client-onboarding-process',
    title: 'Como criar um processo de onboarding de clientes que impressiona',
    excerpt: 'Um ótimo processo de boas-vindas define o tom de todo o relacionamento. Guia passo a passo com modelos.',
    category: 'Client Management',
    tags: ['onboarding de clientes', 'experiência do cliente', 'freelancer'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '9 min de leitura',
    featuredImage: '/images/blog/client-onboarding-checklist.jpg',
    featuredImageAlt: 'Checklist de onboarding de clientes com pacote de boas-vindas',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['processo onboarding cliente', 'onboarding freelancer', 'checklist novo cliente'],
    priority: 'P1',
    content: `
      <p><strong>As primeiras 48 horas de um novo relacionamento com o cliente definem o tom de tudo que virá.</strong> Um processo estruturado de boas-vindas faz você parecer profissional e reduz mal-entendidos.</p>

      <h2>Por que o onboarding importa</h2>
      <ul>
        <li>Estabelece profissionalismo desde o início</li>
        <li>Cria expectativas claras em ambos os lados</li>
        <li>Reduz trocas desnecessárias em 40–60%</li>
        <li>Aumenta satisfação e indicações</li>
      </ul>

      <h2>Processo de onboarding em 5 passos</h2>
      <h3>Passo 1: Email de boas-vindas (em 24 h)</h3>
      <p>Mensagem profissional com próximos passos, cronograma e dados de contato.</p>

      <h3>Passo 2: Questionário do cliente</h3>
      <p>Colete objetivos, preferências da marca, acessos necessários e contatos.</p>

      <h3>Passo 3: Contrato e faturamento</h3>
      <p>Envie um <a href="/__LANG__/blog/freelance-contract-templates">contrato profissional</a> e configure o faturamento com <a href="/__LANG__/invoicing">Invoicemonk</a>.</p>

      <h3>Passo 4: Reunião de kickoff</h3>
      <p>Discuta objetivos, marcos, canais de comunicação e ritmo de feedback.</p>

      <h3>Passo 5: Cronograma compartilhado</h3>
      <p>Forneça um calendário com marcos acessível para ambas as partes.</p>

      <h2>Próximos passos</h2>
      <p>Um processo profissional faz parte de uma excelente <a href="/__LANG__/blog/client-management-guide-small-business">gestão de clientes</a>. A configuração leva cerca de 2 horas e depois funciona automaticamente.</p>
    `
  },
  {
    slug: 'managing-difficult-clients',
    title: 'Como lidar com clientes difíceis de forma profissional',
    excerpt: 'Estratégias profissionais para gestão de conflitos, estabelecer limites e saber quando encerrar.',
    category: 'Client Management',
    tags: ['clientes difíceis', 'conflitos com clientes', 'limites profissionais'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '10 min de leitura',
    featuredImage: '/images/blog/difficult-clients-management.jpg',
    featuredImageAlt: 'Gestão profissional de clientes difíceis',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['clientes difíceis', 'lidar clientes problemáticos', 'resolução de conflitos'],
    priority: 'P2',
    content: `
      <p>Clientes difíceis fazem parte da vida profissional. O que diferencia freelancers de sucesso é como lidam com conflitos.</p>

      <h2>Tipos de clientes difíceis</h2>
      <ul>
        <li><strong>O «só mais uma coisinha»:</strong> Adiciona escopo constantemente</li>
        <li><strong>O fantasma:</strong> Desaparece por semanas e espera resposta imediata</li>
        <li><strong>O microgerente:</strong> Controla cada passo</li>
        <li><strong>O inadimplente:</strong> Paga sistematicamente atrasado</li>
      </ul>

      <h2>Estratégias profissionais</h2>
      <h3>Limitar mudanças de escopo</h3>
      <p>Use ordens de alteração. Confirme cada mudança por escrito com impacto em prazo e orçamento.</p>

      <h3>Estabelecer limites</h3>
      <p>Defina horários, tempos de resposta e canais de comunicação no contrato.</p>

      <h3>Fazer cumprir os pagamentos</h3>
      <p>Trabalhe com adiantamentos, <a href="/__LANG__/blog/setting-up-automatic-payment-reminders">lembretes automáticos</a> e consequências claras por atraso.</p>

      <h2>Quando encerrar a relação</h2>
      <ul>
        <li>O cliente não respeita sua expertise ou tempo repetidamente</li>
        <li>A colaboração custa mais do que traz</li>
        <li>Os termos do contrato são ignorados sistematicamente</li>
      </ul>

      <h2>Próximos passos</h2>
      <p>Encerre sempre de forma profissional com aviso prévio adequado. Mais em nosso <a href="/__LANG__/blog/client-management-guide-small-business">guia de gestão de clientes</a>.</p>
    `
  },
  {
    slug: 'client-communication-templates',
    title: 'Modelos de comunicação com clientes para freelancers',
    excerpt: 'Modelos de email prontos para uso para atualizações de projeto, mudanças de escopo e lembretes de pagamento.',
    category: 'Client Management',
    tags: ['comunicação com clientes', 'modelos de email', 'freelancer'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '10 min de leitura',
    featuredImage: '/images/blog/client-email-templates.jpg',
    featuredImageAlt: 'Modelos de email profissionais para comunicação com clientes',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['modelos comunicação cliente', 'modelos email freelancer'],
    priority: 'P2',
    content: `
      <p><strong>Modelos de comunicação profissional economizam 3–5 horas por semana</strong> e garantem consistência em cada interação.</p>

      <h2>Modelo 1: Email de início de projeto</h2>
      <p>Conteúdo: resumo do projeto, próximos passos, cronograma, canais de comunicação.</p>

      <h2>Modelo 2: Atualização semanal</h2>
      <p>Conteúdo: realizações da semana, planejado para a próxima, questões pendentes, status do orçamento.</p>

      <h2>Modelo 3: Mudança de escopo</h2>
      <p>Conteúdo: descrição da mudança, impacto em prazo e orçamento, solicitação de aprovação.</p>

      <h2>Modelo 4: Lembrete de pagamento</h2>
      <p>Conteúdo: número da NF, data de vencimento, valor pendente. Use <a href="/__LANG__/invoicing">Invoicemonk</a> para lembretes automáticos.</p>

      <h2>Modelo 5: Encerramento de projeto</h2>
      <p>Conteúdo: resumo das entregas, fatura final, pedido de avaliação/depoimento, abertura para futuras colaborações.</p>

      <h2>Próximos passos</h2>
      <p>Adapte esses modelos ao seu estilo e setor. Mais em nosso <a href="/__LANG__/blog/client-management-guide-small-business">guia de gestão de clientes</a>.</p>
    `
  },
  {
    slug: 'client-retention-strategies',
    title: '7 estratégias de retenção de clientes para negócios de serviços',
    excerpt: '7 estratégias comprovadas que transformam projetos pontuais em receita recorrente de longo prazo.',
    category: 'Client Management',
    tags: ['retenção de clientes', 'receita recorrente', 'fidelização'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '9 min de leitura',
    featuredImage: '/images/blog/client-retention.jpg',
    featuredImageAlt: 'Estratégias de retenção de clientes',
    clusterType: 'cluster',
    targetProduct: '/client-management',
    semanticKeywords: ['estratégias retenção clientes', 'fidelizar clientes', 'receita recorrente'],
    priority: 'P2',
    content: `
      <p>Conquistar um novo cliente custa 5–7x mais que reter um existente. Mesmo assim, a maioria dos freelancers investe a maior parte da energia em captação.</p>

      <h2>1. Superar expectativas</h2>
      <p>Entregue 10% a mais do que o combinado.</p>

      <h2>2. Comunicar proativamente</h2>
      <p>Não espere o cliente perguntar. Atualizações regulares constroem confiança.</p>

      <h2>3. Propor projetos de continuidade</h2>
      <p>Termine cada projeto com 2–3 sugestões para os próximos passos.</p>

      <h2>4. Oferecer retainers mensais</h2>
      <p>Pacotes mensais para manutenção, consultoria ou criação de conteúdo.</p>

      <h2>5. Mostrar atenção pessoal</h2>
      <p>Parabéns por conquistas, notas de agradecimento personalizadas.</p>

      <h2>6. Criar programa de indicação</h2>
      <p>Recompense indicações com descontos ou serviços extras.</p>

      <h2>7. Faturar profissionalmente</h2>
      <p><a href="/__LANG__/invoicing">Faturas</a> claras e pontuais sinalizam profissionalismo.</p>

      <h2>Próximos passos</h2>
      <p>Escolha 2–3 estratégias e aplique com seus 5 melhores clientes. Mais no <a href="/__LANG__/blog/client-management-guide-small-business">guia de gestão de clientes</a>.</p>
    `
  },
  {
    slug: 'the-basics-of-small-business-accounting',
    title: 'Fundamentos de contabilidade para pequenos negócios',
    excerpt: 'Os princípios contábeis fundamentais que todo empresário precisa conhecer.',
    category: 'Small Business',
    tags: ['contabilidade', 'pequeno negócio', 'escrituração', 'demonstrações financeiras'],
    author: defaultAuthor,
    date: '2023-11-20',
    dateModified: '2026-01-30',
    readTime: '9 min de leitura',
    featuredImage: '/images/blog/accounting-books-basics.jpg',
    featuredImageAlt: 'Fundamentos de contabilidade para empresários',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['contabilidade pequeno negócio', 'fundamentos contabilidade', 'demonstrações financeiras'],
    priority: 'P1',
    content: `
      <p>Contabilidade pode parecer intimidante, mas entender os fundamentos é crucial para o sucesso do seu negócio.</p>

      <h2>Por que a contabilidade importa</h2>
      <ul>
        <li>Tomar decisões empresariais informadas</li>
        <li>Cumprir obrigações fiscais junto à Receita Federal</li>
        <li>Entender a saúde financeira do seu negócio</li>
        <li>Obter financiamentos</li>
      </ul>

      <h2>As três demonstrações financeiras essenciais</h2>
      <h3>DRE (Demonstração do Resultado)</h3>
      <p>Mostra receitas, despesas e resultado em um período.</p>

      <h3>Balanço patrimonial</h3>
      <p>Foto instantânea de ativos, passivos e patrimônio líquido.</p>

      <h3>Demonstração de Fluxo de Caixa</h3>
      <p>Acompanha movimentações reais de dinheiro.</p>

      <h2>Próximos passos</h2>
      <p>Abra uma conta bancária PJ e escolha um método contábil. Mais em nosso <a href="/__LANG__/blog/small-business-accounting-guide">guia completo de contabilidade</a>.</p>
    `
  },
  {
    slug: 'accounting-101-small-business-owners',
    title: 'Contabilidade 101 para donos de pequenos negócios',
    excerpt: 'Os conceitos contábeis essenciais que todo empresário precisa, explicados de forma simples.',
    category: 'Small Business',
    tags: ['contabilidade básica', 'contabilidade PME', 'escrituração'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '11 min de leitura',
    featuredImage: '/images/blog/accounting-basics-101.jpg',
    featuredImageAlt: 'Livro de contabilidade com óculos e caneta na mesa',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['contabilidade básica negócios', 'contabilidade 101', 'contabilidade para iniciantes'],
    priority: 'P1',
    content: `
      <p>Você não precisa ser contador para gerenciar as finanças do seu negócio. Entender os conceitos fundamentais te dá o controle.</p>

      <h2>A equação contábil fundamental</h2>
      <p><strong>Ativo = Passivo + Patrimônio Líquido</strong></p>

      <h2>Termos contábeis essenciais</h2>
      <ul>
        <li><strong>Receita:</strong> Dinheiro ganho pela atividade</li>
        <li><strong>Despesas:</strong> Custos de operação</li>
        <li><strong>Lucro:</strong> Receita menos despesas</li>
        <li><strong>Contas a receber:</strong> Dinheiro que clientes devem</li>
        <li><strong>Contas a pagar:</strong> Dinheiro que você deve a fornecedores</li>
      </ul>

      <h2>Plano de contas</h2>
      <p>No Brasil, o plano de contas segue as normas do CPC (Comitê de Pronunciamentos Contábeis), organizado em grupos: ativo, passivo, patrimônio líquido, receitas e despesas.</p>

      <h2>MEI, Simples ou Lucro Presumido</h2>
      <p>MEIs têm obrigações simplificadas. Empresas do Simples Nacional seguem regras intermediárias. No Lucro Presumido ou Real, a contabilidade completa é obrigatória.</p>

      <h2>Próximos passos</h2>
      <p>Configure um <a href="/__LANG__/accounting">software de contabilidade</a> e comece a registrar cada transação. Mais em nosso <a href="/__LANG__/blog/small-business-accounting-guide">guia completo de contabilidade</a>.</p>
    `
  },
  {
    slug: 'how-to-create-a-budget-for-your-small-business',
    title: 'Como criar um orçamento para seu pequeno negócio',
    excerpt: 'Guia passo a passo para criar um orçamento empresarial eficaz que ajuda a planejar e gerenciar seu fluxo de caixa.',
    category: 'Small Business',
    tags: ['orçamento', 'planejamento financeiro', 'pequeno negócio', 'fluxo de caixa'],
    author: defaultAuthor,
    date: '2023-12-01',
    readTime: '8 min de leitura',
    featuredImage: '/images/blog/business-budget-creation.jpg',
    featuredImageAlt: 'Planejamento orçamentário para pequenos negócios',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['orçamento empresarial', 'criar orçamento', 'planejamento financeiro PME'],
    priority: 'P1',
    content: `
      <p>Um orçamento é seu mapa financeiro. Mostra para onde vai seu dinheiro, ajuda a planejar e evita surpresas desagradáveis.</p>

      <h2>Criar orçamento em 5 passos</h2>
      <h3>Passo 1: Registrar receitas</h3>
      <p>Liste todas as fontes de receita esperadas.</p>

      <h3>Passo 2: Custos fixos</h3>
      <p>Aluguel, seguros, assinaturas, contador, empréstimos.</p>

      <h3>Passo 3: Custos variáveis</h3>
      <p>Marketing, viagens, capacitação, material de escritório.</p>

      <h3>Passo 4: Planejar margem de lucro</h3>
      <p>Reserve pelo menos 10–20% como lucro planejado.</p>

      <h3>Passo 5: Revisar mensalmente</h3>
      <p>Compare orçado com realizado e ajuste trimestralmente.</p>

      <h2>Próximos passos</h2>
      <p>Comece com uma planilha ou use um <a href="/__LANG__/accounting">software de contabilidade</a>. Mais sobre <a href="/__LANG__/blog/profit-margins-how-to-calculate-and-improve">margens de lucro</a>.</p>
    `
  },
  {
    slug: 'diy-small-business-accounting',
    title: 'Dá para fazer sua própria contabilidade? Guia prático',
    excerpt: 'Você deveria fazer sua contabilidade sozinho ou contratar um contador? Conselhos honestos sobre quando fazer por conta própria.',
    category: 'Small Business',
    tags: ['contabilidade DIY', 'contabilidade PME', 'contratar contador'],
    author: defaultAuthor,
    date: '2026-02-19',
    readTime: '8 min de leitura',
    featuredImage: '/images/blog/diy-accounting-guide.jpg',
    featuredImageAlt: 'Contabilidade por conta própria na mesa de trabalho',
    clusterType: 'cluster',
    targetProduct: '/accounting',
    semanticKeywords: ['fazer minha própria contabilidade', 'contabilidade DIY', 'contabilidade sem contador'],
    priority: 'P2',
    content: `
      <p>Muitos empreendedores se perguntam: posso fazer minha contabilidade sozinho? No Brasil, MEIs e microempresas podem gerenciar bastante coisa por conta própria com as ferramentas certas.</p>

      <h2>O que você pode fazer sozinho</h2>
      <ul>
        <li>Registro diário com <a href="/__LANG__/accounting">software de contabilidade</a></li>
        <li>Criar e enviar notas fiscais com <a href="/__LANG__/invoicing">Invoicemonk</a></li>
        <li>Digitalizar e classificar comprovantes</li>
        <li>Controle de receitas e despesas</li>
        <li>Emissão do DAS mensal (MEI)</li>
      </ul>

      <h2>Quando você precisa de um contador</h2>
      <ul>
        <li>Ao abrir uma ME, EPP ou LTDA</li>
        <li>Questões tributárias complexas (internacional, holdings)</li>
        <li>Balanço e demonstrações anuais</li>
        <li>Em caso de fiscalização da Receita Federal</li>
        <li>Quando erros custariam mais que o contador</li>
      </ul>

      <h2>Custos: DIY vs. contador</h2>
      <p>Software custa R$ 50–300/mês. Um contador cobra tipicamente R$ 300–1.500/mês dependendo do porte e regime tributário. Avalie o tempo gasto contra o custo.</p>

      <h2>Próximos passos</h2>
      <p>Comece com o básico e contrate ajuda profissional para obrigações acessórias. Mais em nosso <a href="/__LANG__/blog/small-business-accounting-guide">guia completo de contabilidade</a>.</p>
    `
  }
];

registerBlogPosts('pt', posts);
