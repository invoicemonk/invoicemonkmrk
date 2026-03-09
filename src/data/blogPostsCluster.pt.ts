import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const clusterPosts: BlogPost[] = [
  {
    slug: 'online-payment-methods-comparison-small-business',
    title: 'Meios de pagamento online comparados: qual é o melhor para seu negócio?',
    excerpt: 'Pix, cartões, boleto, links de pagamento — quais meios aceitar? Comparativo prático.',
    category: 'Finance',
    tags: ['Pagamentos', 'Meios de pagamento', 'Cartões', 'Pix', 'Pequenas empresas'],
    author: defaultAuthor, date: '2026-01-31', readTime: '7 min de leitura',
    featuredImage: '/images/blog/invoicing-software-dashboard.jpg',
    featuredImageAlt: 'Comparativo de meios de pagamento online', pillarContent: false,
    clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: ['comparativo pagamentos', 'aceitar cartão', 'Pix empresarial'],
    priority: 'P2',
    content: `<p>Os meios de pagamento que você aceita influenciam diretamente a rapidez dos seus recebimentos.</p><h2>Pix</h2><p>Instantâneo, sem taxas para pessoa física. O meio de pagamento mais popular no Brasil.</p><h2>Transferência bancária</h2><p>Popular para transações B2B. Taxas baixas mas processo manual.</p><h2>Cartões de crédito/débito</h2><p>Pagamento instantâneo. Taxas de 1,5-3% mas rapidez compensadora.</p><h2>Boleto bancário</h2><p>Popular no Brasil. Prazo de compensação de 1-3 dias úteis.</p><h2>Links de pagamento</h2><p>Enviáveis por e-mail ou WhatsApp. Sem integração técnica necessária.</p><h2>Carteiras digitais</h2><p>PayPal, Google Pay, PicPay — práticos para clientes que já usam.</p><h2>Como escolher</h2><ul><li><strong>Preferências dos clientes:</strong> B2B = transferência/Pix; B2C = cartão/Pix</li><li><strong>Valor:</strong> 3% em R$ 500 é ok; em R$ 50.000 é significativo</li><li><strong>Rapidez:</strong> Se caixa apertado, priorize Pix e cartão</li><li><strong>Mercado:</strong> Adapte aos usos locais</li></ul><h2>Integração</h2><p>Com <a href="/payments">soluções integradas</a>, clientes pagam direto da fatura.</p>`
  },
  {
    slug: 'small-business-tax-deductions-guide',
    title: 'Deduções fiscais que pequenas empresas frequentemente esquecem',
    excerpt: 'Maximize suas economias com este guia de despesas dedutíveis frequentemente esquecidas.',
    category: 'Small Business',
    tags: ['Impostos', 'Deduções', 'PME', 'Conformidade', 'Despesas'],
    author: defaultAuthor, date: '2026-01-31', readTime: '9 min de leitura',
    featuredImage: '/images/blog/tax-deductions.jpg',
    featuredImageAlt: 'Guia de deduções fiscais para PME', pillarContent: false,
    clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: ['deduções fiscais', 'despesas dedutíveis', 'reduzir impostos'],
    priority: 'P2',
    content: `<p>Muitos empreendedores pagam mais impostos que o necessário por não declarar todas as deduções a que têm direito.</p><h2>Home office</h2><p>Se trabalha regularmente de casa: aluguel (proporcional), contas, seguro, manutenção.</p><h2>Despesas com veículo</h2><p>Custos reais ou quilometragem para deslocamentos profissionais.</p><h2>Capacitação</h2><ul><li>Cursos online</li><li>Congressos</li><li>Livros profissionais</li><li>Coaching</li><li>Certificações</li></ul><h2>Software e assinaturas</h2><ul><li><a href="/invoicing">Software de faturamento</a></li><li>Cloud e backup</li><li>Gestão de projetos</li><li>Hospedagem web</li></ul><h2>Serviços profissionais</h2><ul><li>Contador</li><li>Advogado</li><li>Consultores</li><li>Assistentes virtuais</li></ul><h2>Seguros</h2><ul><li>Responsabilidade profissional</li><li>Cyber-seguro</li><li>Plano de saúde (autônomos)</li></ul><h2>Marketing</h2><ul><li>Publicidade online</li><li>Cartões de visita</li><li>Site</li></ul><h2>Taxas bancárias</h2><ul><li>Taxas de conta PJ</li><li>Taxas de processamento</li><li>Juros de empréstimo PJ</li></ul><h2>Equipamentos</h2><ul><li>Computadores e celulares</li><li>Móveis</li><li>Material de escritório</li></ul><h2>Guardar comprovantes</h2><p>Use <a href="/expenses">controle de despesas</a>. Veja nosso <a href="/blog/small-business-tax-compliance-guide">guia de conformidade fiscal</a>.</p>`
  },
  {
    slug: 'how-to-prepare-business-tax-audit',
    title: 'Como se preparar para uma fiscalização',
    excerpt: 'Fiscalizações não precisam ser assustadoras. Saiba o que as causa e como preparar sua documentação.',
    category: 'Small Business',
    tags: ['Impostos', 'Fiscalização', 'Conformidade', 'Armazenamento', 'PME'],
    author: defaultAuthor, date: '2026-01-31', readTime: '8 min de leitura',
    featuredImage: '/images/blog/tax-audit-preparation.jpg',
    featuredImageAlt: 'Preparação para fiscalização', pillarContent: false,
    clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: ['preparação fiscalização', 'defesa auditoria', 'documentos contábeis'],
    priority: 'P2',
    content: `<p>Com boa preparação, fiscalizações se tornam exercícios administrativos.</p><h2>O que causa uma fiscalização</h2><ul><li><strong>Anomalias estatísticas</strong></li><li><strong>Valores arredondados</strong> suspeitos</li><li><strong>Muito dinheiro em espécie</strong></li><li><strong>Grandes variações</strong> ano a ano</li><li><strong>Seleção aleatória</strong></li></ul><h2>Tipos de fiscalização</h2><ul><li><strong>Por correspondência:</strong> Pedido de documentos específicos</li><li><strong>No escritório:</strong> Visita à Receita com documentos</li><li><strong>No local:</strong> Fiscal visita sua empresa</li></ul><h2>Documentos necessários</h2><h3>Receitas</h3><ul><li>Todas as NFs emitidas (<a href="/invoicing">software de faturamento</a>)</li><li>Extratos bancários</li></ul><h3>Despesas</h3><ul><li>Comprovantes de compra</li><li>Faturas de cartão</li><li>NFs de fornecedores</li></ul><h2>Em caso de fiscalização</h2><ol><li>Não entre em pânico — leia o que foi solicitado</li><li>Responda nos prazos</li><li>Forneça apenas o solicitado</li><li>Organize logicamente</li><li>Considere ajuda profissional</li></ol><h2>Prevenção</h2><ul><li>Use <a href="/accounting">software contábil</a></li><li>Capture comprovantes com <a href="/expenses">controle de despesas</a></li><li>Separe finanças PJ e PF</li><li>Documente o propósito comercial das despesas</li></ul><p>Veja nosso <a href="/blog/small-business-tax-compliance-guide">guia de conformidade fiscal</a>.</p>`
  },
  {
    slug: 'how-to-write-winning-business-proposal',
    title: 'Como escrever uma proposta comercial vencedora',
    excerpt: 'Transforme suas propostas em ferramentas de venda persuasivas. Estrutura, psicologia e táticas.',
    category: 'Small Business',
    tags: ['Propostas', 'Desenvolvimento comercial', 'Vendas', 'Precificação'],
    author: defaultAuthor, date: '2026-01-31', readTime: '10 min de leitura',
    featuredImage: '/images/blog/proposal-estimate-quote.jpg',
    featuredImageAlt: 'Escrevendo uma proposta comercial vencedora', pillarContent: false,
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['redação de proposta', 'modelo de proposta', 'ganhar clientes'],
    priority: 'P2',
    content: `<p>Uma proposta comercial é sua chance de convencer um cliente. É um documento persuasivo, não apenas uma lista de preços.</p><h2>Estrutura ideal</h2><h3>1. Resumo executivo</h3><p>Visão geral que decisores podem ler em 60 segundos.</p><h3>2. Entendimento do desafio</h3><p>Mostre que ouviu e entendeu.</p><h3>3. Solução proposta</h3><p>O que fará e como, focado em resultados.</p><h3>4. Entregáveis e cronograma</h3><p>O que o cliente receberá e quando.</p><h3>5. Investimento</h3><p>Preços claros, enquadrados como investimento.</p><h3>6. Sobre você</h3><p>Referências e experiência relevante.</p><h3>7. Próximos passos</h3><p>Como prosseguir claramente.</p><h2>Estratégias de preço</h2><ul><li><strong>Ancorar alto:</strong> Opção premium primeiro</li><li><strong>Valor primeiro:</strong> Benefícios antes do preço</li><li><strong>Três opções:</strong> Bom/Melhor/Excelente</li></ul><h2>Erros comuns</h2><ul><li>Muito longa</li><li>Muito genérica</li><li>Foco em funcionalidades em vez de benefícios</li><li>Sem próximo passo claro</li></ul><h2>Do orçamento ao projeto</h2><ol><li>Aceitação formal escrita</li><li>Cobrar entrada</li><li>E-mail de boas-vindas</li><li>Primeira <a href="/invoicing">fatura</a></li></ol><p>Use <a href="/estimates">ferramentas de orçamento</a> convertíveis em faturas.</p>`
  },
  {
    slug: 'estimate-vs-quote-vs-invoice-difference',
    title: 'Estimativa vs Orçamento vs Fatura: qual a diferença?',
    excerpt: 'Confuso entre estimativas, orçamentos e faturas? As diferenças-chave e quando usar cada um.',
    category: 'Small Business',
    tags: ['Estimativas', 'Orçamentos', 'Faturas', 'Documentos comerciais'],
    author: defaultAuthor, date: '2026-01-31', readTime: '6 min de leitura',
    featuredImage: '/images/blog/estimate-quote-invoice.jpg',
    featuredImageAlt: 'Três documentos comerciais lado a lado', pillarContent: false,
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['estimativa vs orçamento', 'orçamento vs fatura', 'documentos comerciais'],
    priority: 'P2',
    content: `<p>Estimativas, orçamentos e faturas servem propósitos diferentes no fluxo cliente-pagamento.</p><h2>Estimativa: uma aproximação</h2><p>Avaliação de custo não vinculante — o preço final pode variar.</p><h3>Quando usar</h3><ul><li>Escopo não definido</li><li>Investigação necessária</li><li>Variáveis incontroláveis</li></ul><h2>Orçamento: compromisso de preço</h2><p>Preço firme para trabalho definido. Vinculante após aceite.</p><h3>Quando usar</h3><ul><li>Escopo claramente definido</li><li>Trabalho previsível</li><li>Cliente precisa de certeza</li></ul><h2>Fatura: pedido de pagamento</h2><p>Emitida após o trabalho. Documento legal.</p><h3>Boas práticas</h3><ul><li>Enviar rapidamente</li><li>Todos os elementos necessários (<a href="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners">ver guia</a>)</li><li>Referenciar o orçamento original</li><li>Usar <a href="/invoicing">software de faturamento</a></li></ul><h2>Como se encadeiam</h2><ol><li><strong>Estimativa:</strong> \"Quanto mais ou menos?\" → aproximação</li><li><strong>Orçamento:</strong> Escopo definido → preço firme</li><li><strong>Fatura:</strong> Trabalho concluído → pedido de pagamento</li></ol><h2>Resumo</h2><table><tr><th>Documento</th><th>Vinculante?</th><th>Quando</th><th>Objetivo</th></tr><tr><td>Estimativa</td><td>Não</td><td>Antes, escopo vago</td><td>Custo aproximado</td></tr><tr><td>Orçamento</td><td>Sim</td><td>Antes, escopo claro</td><td>Preço firme</td></tr><tr><td>Fatura</td><td>Sim</td><td>Após trabalho</td><td>Pedir pagamento</td></tr></table><p><a href="/estimates">Ferramentas de orçamento</a> convertíveis em faturas com um clique.</p>`
  }
];

registerBlogPosts('pt', clusterPosts);
