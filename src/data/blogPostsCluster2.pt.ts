import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 11: Invoicing Mastery cluster posts — Portuguese (BR) translations
 */
const posts: BlogPost[] = [
  {
    slug: 'invoice-numbering-best-practices',
    title: 'Numeração de faturas: boas práticas para sistemas escaláveis',
    excerpt: 'Aprenda a criar um sistema de numeração que mantém suas finanças organizadas, garante conformidade e escala com seu negócio.',
    category: 'Invoicing and Billing Tips',
    tags: ['faturamento', 'números de fatura', 'organização', 'contabilidade', 'conformidade'],
    author: defaultAuthor, date: '2026-01-29', readTime: '7 min de leitura',
    featuredImage: '/images/blog/invoice-numbering.jpg',
    featuredImageAlt: 'Sistemas de numeração de faturas para empresas',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['numeração fatura', 'formato número fatura', 'fatura sequencial'],
    priority: 'P2',
    content: `
      <p>Um sistema de numeração bem projetado é a base de finanças empresariais organizadas. Facilita o rastreamento de pagamentos, conformidade e auditorias.</p>
      <h2>Por que a numeração importa</h2>
      <ul>
        <li><strong>Identificação única:</strong> Cada fatura precisa de um identificador próprio</li>
        <li><strong>Obrigação legal:</strong> A Receita Federal exige números sequenciais e únicos</li>
        <li><strong>Rastreamento de pagamentos:</strong> Associar rapidamente cada pagamento à fatura correta</li>
        <li><strong>Preparação para auditorias:</strong> Auditores esperam um sistema lógico e sem lacunas</li>
      </ul>
      <h2>Sistemas de numeração populares</h2>
      <h3>Numeração sequencial</h3>
      <p>O mais simples: começar em 001 e incrementar. Formato: NF-001, NF-002.</p>
      <h3>Numeração por data</h3>
      <p>Incluir ano e mês. Formato: 2026-01-001.</p>
      <h3>Numeração por cliente</h3>
      <p>Integrar um código de cliente. Formato: ABC-001.</p>
      <h3>Numeração por projeto</h3>
      <p>Usar códigos de projeto. Formato: PROJ-A-001.</p>
      <h3>Sistemas híbridos</h3>
      <p>Combinar elementos. Formato: 2026-ABC-001.</p>
      <h2>Regras essenciais</h2>
      <ol>
        <li><strong>Nunca reutilizar</strong> um número de fatura</li>
        <li><strong>Zeros à esquerda:</strong> 001, não 1</li>
        <li><strong>Evitar caracteres especiais</strong></li>
        <li><strong>Documentar seu sistema</strong></li>
        <li><strong>Planejar o crescimento</strong></li>
      </ol>
      <h2>Faturas canceladas</h2>
      <p>Nunca excluir ou reutilizar um número. Marcar como «Cancelada» e emitir uma nova com o número seguinte.</p>
      <h2>Deixe o software gerenciar</h2>
      <p><a href="/invoicing">Um software de faturamento profissional</a> gera números sequenciais automaticamente e previne duplicatas.</p>
    `
  },
  {
    slug: 'how-to-write-invoice-payment-terms',
    title: 'Como escrever condições de pagamento que fazem você receber no prazo',
    excerpt: 'Condições de pagamento claras são essenciais. Aprenda a formulá-las para proteger seu negócio e incentivar o pagamento pontual.',
    category: 'Invoicing and Billing Tips',
    tags: ['faturamento', 'condições de pagamento', 'Net 30', 'políticas de pagamento', 'fluxo de caixa'],
    author: defaultAuthor, date: '2026-01-28', readTime: '8 min de leitura',
    featuredImage: '/blog/invoice-payment-terms.jpg',
    featuredImageAlt: 'Condições de pagamento eficazes em faturas',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['condições de pagamento', 'Net 30', 'prazo fatura', 'multa por atraso'],
    priority: 'P2',
    content: `
      <p>As condições de pagamento definem quando e como você espera ser pago. Bem redigidas, reduzem mal-entendidos e aceleram os recebimentos.</p>
      <h2>Por que são importantes</h2>
      <ul>
        <li>Definir expectativas claras com o cliente</li>
        <li>Base legal em caso de inadimplência</li>
        <li>Melhor previsão de fluxo de caixa</li>
        <li>Imagem profissional</li>
      </ul>
      <h2>Estruturas comuns</h2>
      <h3>Pagamento à vista / na entrega</h3>
      <p>Pagamento imediato ao receber a fatura. Comum para Pix e boleto.</p>
      <h3>Net 15 / Net 30 / Net 60</h3>
      <ul>
        <li><strong>Net 15:</strong> Cada vez mais popular entre freelancers</li>
        <li><strong>Net 30:</strong> Padrão do mercado</li>
        <li><strong>Net 60:</strong> Comum em grandes empresas</li>
      </ul>
      <h3>Desconto por antecipação</h3>
      <p>2% de desconto se pagar em 10 dias, valor integral em 30 dias.</p>
      <h3>Entrada + parcelas por marco</h3>
      <p>30% na assinatura, 30% no meio, 40% na entrega.</p>
      <h2>O que incluir</h2>
      <ol>
        <li><strong>Data de vencimento:</strong> Data exata, não apenas «30 dias»</li>
        <li><strong>Meios de pagamento aceitos:</strong> Pix, boleto, cartão, transferência</li>
        <li><strong>Dados bancários</strong> ou chave Pix</li>
        <li><strong>Moeda</strong></li>
        <li><strong>Multa e juros por atraso</strong></li>
        <li><strong>Condições de desconto</strong></li>
      </ol>
      <h2>Multa e juros por atraso</h2>
      <p>No Brasil, o Código Civil permite multa de até 2% e juros de mora de 1% ao mês. Sempre incluir essas condições na fatura.</p>
      <h2>Dicas para receber mais rápido</h2>
      <ul>
        <li>Data de vencimento visível e concreta</li>
        <li>Chave Pix ou link de pagamento direto na fatura</li>
        <li>Lembrete antes do vencimento, não só depois</li>
      </ul>
      <p>Automatize suas condições com <a href="/invoicing">software de faturamento profissional</a>.</p>
    `
  },
  {
    slug: 'recurring-invoices-automating-billing',
    title: 'Faturas recorrentes: automatize o faturamento de contratos e assinaturas',
    excerpt: 'Guia passo a passo para automatizar faturas recorrentes. Contratos mensais, retainers e assinaturas.',
    category: 'Invoicing and Billing Tips',
    tags: ['faturamento', 'faturas recorrentes', 'automação', 'assinaturas'],
    author: defaultAuthor, date: '2026-01-27', dateModified: '2026-02-19', readTime: '7 min de leitura',
    featuredImage: '/blog/recurring-invoices.jpg',
    featuredImageAlt: 'Workflow de faturamento recorrente automatizado',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['faturas recorrentes', 'faturamento automático', 'faturamento assinatura'],
    priority: 'P2',
    relatedTools: [
      { label: 'Faturamento recorrente', url: '/use-cases/recurring-billing', description: 'Automatize seu ciclo de faturamento' },
      { label: 'Software de faturamento', url: '/invoicing', description: 'Crie faturas profissionais' },
    ],
    content: `
      <p>Se seus clientes pagam o mesmo valor regularmente, criar faturas manualmente a cada mês é perda de tempo. Faturas recorrentes automatizam o processo.</p>
      <h2>O que são faturas recorrentes?</h2>
      <p>Faturas geradas e enviadas automaticamente em intervalos regulares — semanal, mensal, trimestral ou anual.</p>
      <h2>Quando usar</h2>
      <ul>
        <li><strong>Retainers mensais:</strong> Consultores, agências, contadores</li>
        <li><strong>Assinaturas:</strong> SaaS, membresías</li>
        <li><strong>Contratos de manutenção:</strong> Suporte TI, gestão predial</li>
      </ul>
      <h2>Configuração</h2>
      <ol>
        <li>Cadastrar dados do cliente</li>
        <li>Definir serviços e valores</li>
        <li>Estabelecer intervalo de faturamento</li>
        <li>Configurar condições de pagamento</li>
        <li>Ativar lembretes automáticos</li>
      </ol>
      <h2>Boas práticas</h2>
      <ul>
        <li>Informar o cliente antes da primeira fatura automática</li>
        <li>Comunicar reajustes com 30 dias de antecedência</li>
        <li>Configurar lembretes para pagamentos atrasados</li>
        <li>Revisar periodicamente valores e serviços</li>
      </ul>
      <p>Mais dicas em nosso <a href="/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently">guia de faturamento pontual</a>.</p>
    `
  },
  {
    slug: 'invoice-disputes-how-to-handle-professionally',
    title: 'Disputas de faturamento: como resolver profissionalmente (modelos incluídos)',
    excerpt: 'Cliente contestou sua fatura? Processo passo a passo com modelos de e-mail e roteiros de resposta.',
    category: 'Invoicing and Billing Tips',
    tags: ['faturamento', 'disputas', 'relações com clientes', 'resolução de conflitos'],
    author: defaultAuthor, date: '2026-01-26', readTime: '8 min de leitura',
    featuredImage: '/images/blog/invoice-disputes.jpg',
    featuredImageAlt: 'Resolução profissional de disputas de faturamento',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['disputas fatura', 'contestação fatura', 'desacordo cliente'],
    priority: 'P3',
    content: `
      <p>Disputas de faturamento são desconfortáveis mas inevitáveis. Como você lida com elas determina se receberá e se a relação com o cliente sobrevive.</p>
      <h2>Por que surgem</h2>
      <ul>
        <li><strong>Mal-entendido sobre o escopo:</strong> O cliente esperava algo diferente</li>
        <li><strong>Desacordo no preço:</strong> Valor final acima do esperado</li>
        <li><strong>Insatisfação com a qualidade</strong></li>
        <li><strong>Problemas de prazo:</strong> Entrega atrasada</li>
        <li><strong>Erros simples:</strong> Cálculos incorretos ou cobrança duplicada</li>
      </ul>
      <h2>Processo de resolução</h2>
      <ol>
        <li><strong>Ouvir:</strong> Deixar o cliente se expressar</li>
        <li><strong>Documentar:</strong> Tudo por escrito</li>
        <li><strong>Verificar:</strong> Revisar fatura e acordos originais</li>
        <li><strong>Responder:</strong> De forma objetiva e profissional</li>
        <li><strong>Propor solução:</strong> Crédito, pagamento parcial ou acordo</li>
      </ol>
      <h2>Prevenção</h2>
      <ul>
        <li>Orçamentos detalhados com escopo claro</li>
        <li>Alterações sempre confirmadas por escrito</li>
        <li>Faturas detalhadas com <a href="/invoicing">software de faturamento</a></li>
        <li>Acompanhamento regular durante o projeto</li>
      </ul>
      <p>Veja também nosso <a href="/blog/credit-notes-and-invoice-corrections">guia de notas de crédito e correções</a>.</p>
    `
  },
  {
    slug: 'credit-notes-and-invoice-corrections',
    title: 'Notas de crédito e correções de fatura: quando e como usar (Guia 2026)',
    excerpt: 'O que é uma nota de crédito? Quando emitir uma em vez de reembolso? Guia passo a passo com exemplos.',
    category: 'Invoicing and Billing Tips',
    tags: ['faturamento', 'notas de crédito', 'correções', 'conformidade'],
    author: defaultAuthor, date: '2026-01-25', dateModified: '2026-02-19', readTime: '6 min de leitura',
    featuredImage: '/images/blog/credit-notes-corrections.jpg',
    featuredImageAlt: 'Nota de crédito em fatura para correções',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['nota de crédito', 'correção fatura', 'cancelamento fatura', 'estorno'],
    priority: 'P2',
    content: `
      <p>Erros de faturamento acontecem. Uma nota de crédito é a ferramenta profissional para corrigir erros sem apagar a fatura original.</p>
      <h2>O que é uma nota de crédito?</h2>
      <p>Um documento que reduz total ou parcialmente o valor de uma fatura já emitida, referenciando a fatura original e mantendo a escrituração limpa.</p>
      <h2>Quando emitir</h2>
      <ul>
        <li><strong>Devoluções de mercadoria</strong></li>
        <li><strong>Entrega parcial:</strong> Menos que o combinado</li>
        <li><strong>Erro de faturamento:</strong> Valores, quantidades ou itens incorretos</li>
        <li><strong>Desconto posterior à emissão</strong></li>
        <li><strong>Cancelamento do pedido</strong></li>
      </ul>
      <h2>Nota de crédito vs cancelamento vs reembolso</h2>
      <ul>
        <li><strong>Nota de crédito:</strong> Reduz o saldo devedor — pode ser compensada em faturas futuras</li>
        <li><strong>Cancelamento:</strong> Anula completamente a fatura original</li>
        <li><strong>Reembolso:</strong> Devolução efetiva de dinheiro já recebido</li>
      </ul>
      <h2>Dados obrigatórios</h2>
      <ul>
        <li>Número sequencial próprio</li>
        <li>Referência à fatura original</li>
        <li>Data de emissão</li>
        <li>Motivo da correção</li>
        <li>Valor corrigido com ajuste de impostos</li>
      </ul>
      <h2>Impacto fiscal</h2>
      <p>A nota de crédito reduz os impostos do período. O ajuste tributário deve ser indicado separadamente. Guardar durante o prazo legal (5 anos no Brasil).</p>
      <h2>Erros comuns</h2>
      <ul>
        <li>Não referenciar a fatura original</li>
        <li>Cálculo de impostos incorreto</li>
        <li>Documentação insuficiente</li>
        <li>Emissão tardia</li>
      </ul>
      <p>Com <a href="/invoicing">Invoicemonk</a>, crie notas de crédito com um clique a partir da fatura original.</p>
    `
  }
];

registerBlogPosts('pt', posts);
