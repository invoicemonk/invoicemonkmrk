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
    featuredImage: '/images/blog/invoice-payment-terms.jpg',
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
    featuredImage: '/images/blog/recurring-invoices.jpg',
    featuredImageAlt: 'Workflow de faturamento recorrente automatizado',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/invoicing',
    semanticKeywords: ['faturas recorrentes', 'faturamento automático', 'faturamento assinatura'],
    priority: 'P2',
    relatedTools: [
      { label: 'Faturamento recorrente', url: '/use-cases/recurring-billing', description: 'Automatize seu ciclo de faturamento' },
      { label: 'Software de faturamento', url: '/invoicing', description: 'Crie faturas profissionais' },
    ],
    content: `
      <p>Se seus clientes pagam o mesmo valor regularmente, criar faturas manualmente a cada mês é perda de tempo. Faturas recorrentes automatizam esse processo, garantindo faturamento consistente sem dor de cabeça administrativa. Seja você um consultor com retainers mensais, um prestador de serviços com contratos de manutenção ou uma empresa SaaS com clientes de assinatura, faturas recorrentes podem transformar seu fluxo de faturamento.</p>

      <h2>O que são faturas recorrentes?</h2>
      <p>Faturas recorrentes são faturas geradas e enviadas automaticamente em intervalos definidos — semanal, mensal, trimestral ou anual. Uma vez configurado o modelo e o cronograma, seu <a href="/invoicing">software de faturamento</a> cuida do resto.</p>
      <p>Recursos principais:</p>
      <ul>
        <li>Geração automática conforme seu cronograma</li>
        <li>Formatação e itens consistentes</li>
        <li>Envio automático por e-mail</li>
        <li>Numeração sequencial de faturas</li>
        <li>Rastreamento de pagamentos e lembretes automáticos</li>
      </ul>

      <h2>Quando usar</h2>
      <h3>Retainers mensais</h3>
      <p>Consultores, agências e profissionais liberais que trabalham com retainers mensais. Em vez de criar uma nova fatura todo mês, configure uma recorrente que seja enviada automaticamente no dia 1 (ou na data de sua preferência). Você nunca esquece de cobrar e seu cliente sabe exatamente quando esperar a fatura.</p>

      <h3>Assinaturas</h3>
      <p>Se você oferece serviços contínuos — assinaturas de software, planos de manutenção, mensalidades — faturas recorrentes mantêm seu faturamento consistente. Clientes apreciam a previsibilidade e você garante um fluxo de caixa estável.</p>

      <h3>Contratos de manutenção</h3>
      <p>Suporte de TI, gestão predial, manutenção de equipamentos — qualquer contrato com valor fixo recorrente é candidato ideal para automação.</p>

      <h2>Configuração em 5 passos</h2>
      <ol>
        <li><strong>Dados do cliente:</strong> Informações de contato, preferências de pagamento e observações</li>
        <li><strong>Serviços e valores:</strong> Definir itens, quantidades e preços unitários</li>
        <li><strong>Intervalo de faturamento:</strong> Semanal, mensal, trimestral ou anual</li>
        <li><strong>Condições de pagamento:</strong> Data de vencimento, métodos aceitos (Pix, boleto, cartão), multa e juros por atraso</li>
        <li><strong>Lembretes automáticos:</strong> Pré-vencimento, no vencimento e pós-vencimento</li>
      </ol>

      <h2>Boas práticas</h2>
      <ul>
        <li><strong>Informar o cliente:</strong> Comunique que o faturamento será automático antes da primeira fatura</li>
        <li><strong>Anunciar reajustes:</strong> Com pelo menos 30 dias de antecedência</li>
        <li><strong>Configurar lembretes:</strong> Para pagamentos atrasados, evitando cobranças manuais</li>
        <li><strong>Revisar periodicamente:</strong> Verifique trimestralmente se serviços, valores e dados de contato estão atualizados</li>
        <li><strong>Definir datas de encerramento:</strong> Para contratos com prazo determinado, programe a finalização automática</li>
      </ul>

      <h2>Erros comuns</h2>
      <ul>
        <li><strong>Falta de comunicação:</strong> O cliente é surpreendido por uma fatura automática</li>
        <li><strong>Dados desatualizados:</strong> Preços antigos ou dados de contato errados enviados por meses</li>
        <li><strong>Sem estratégia de saída:</strong> O que acontece quando o contrato termina?</li>
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
      <p>Disputas de faturamento são uma parte desconfortável mas inevitável dos negócios. Seja um mal-entendido sobre o escopo, um desacordo sobre preço ou preocupações com a qualidade, como você lida com esses conflitos determina não apenas se você recebe — mas se preserva o relacionamento com o cliente para trabalhos futuros.</p>
      <p>Este guia apresenta uma abordagem profissional e sistemática para resolver desentendimentos de faturamento. Você aprenderá quando se manter firme, quando ceder e como prevenir disputas antes que aconteçam.</p>

      <h2>Por que surgem disputas</h2>
      <p>Entender as causas raiz ajuda a resolver mais rápido e prevenir conflitos futuros. A maioria das disputas se enquadra nestas categorias:</p>
      <ul>
        <li><strong>Mal-entendido sobre o escopo:</strong> O cliente esperava algo diferente do que foi entregue. Isso acontece quando o escopo do projeto não é documentado com precisão no início.</li>
        <li><strong>Desacordo no preço:</strong> O valor final é superior ao esperado, geralmente devido a alterações ou trabalho adicional não comunicado claramente como extra.</li>
        <li><strong>Preocupações com qualidade:</strong> O cliente não está satisfeito com a qualidade, mesmo que atenda às especificações técnicas.</li>
        <li><strong>Problemas de prazo:</strong> O trabalho foi entregue com atraso, ou o cliente esqueceu os detalhes do projeto quando a fatura chegou.</li>
        <li><strong>Erros simples:</strong> Cálculos incorretos, cobrança duplicada ou informações erradas na fatura.</li>
      </ul>

      <h2>Processo de resolução em 6 passos</h2>
      <h3>Passo 1: Manter a calma e profissionalismo</h3>
      <p>Sua primeira resposta define o tom de toda a resolução. Resista ao impulso de ficar na defensiva — mesmo que a disputa pareça injusta. Reconheça que recebeu a preocupação e que vai levá-la a sério.</p>

      <h3>Passo 2: Ouvir ativamente</h3>
      <p>Deixe o cliente explicar sua perspectiva completamente. Muitas vezes, simplesmente se sentir ouvido reduz significativamente a tensão.</p>

      <h3>Passo 3: Revisar a documentação</h3>
      <p>Antes de responder com sua posição, revise toda a documentação relevante: contrato original, e-mails de aprovação de alterações, entregáveis e a fatura em questão.</p>

      <h3>Passo 4: Responder com fatos</h3>
      <p>Prepare uma resposta clara que aborde cada ponto da reclamação com documentação de suporte. Faça referência a datas, acordos e entregáveis específicos.</p>

      <h3>Passo 5: Propor uma solução</h3>
      <p>Dependendo da situação, considere: crédito parcial por trabalho insatisfatório, plano de pagamento para valores disputados, revisão ou correção sem custo, ou desconto para preservar o relacionamento.</p>

      <h3>Passo 6: Documentar o acordo</h3>
      <p>Uma vez alcançado um acordo, formalize por escrito. Envie um e-mail de confirmação resumindo os termos acordados.</p>

      <h2>Modelo de e-mail para disputas</h2>
      <p>«Prezado(a) [nome], agradeço por comunicar sua preocupação sobre a fatura [número]. Revisei a documentação do projeto e gostaria de abordar cada ponto. [Detalhes]. Valorizo nosso relacionamento profissional e quero garantir que cheguemos a uma resolução justa.»</p>

      <h2>Prevenção de disputas</h2>
      <ul>
        <li><strong>Orçamentos detalhados:</strong> Com escopo claro, entregáveis específicos e critérios de aceitação</li>
        <li><strong>Alterações sempre por escrito:</strong> Qualquer mudança no escopo original deve ser confirmada por e-mail com o impacto no custo</li>
        <li><strong>Faturas detalhadas:</strong> Use <a href="/invoicing">software de faturamento</a> para criar faturas discriminadas que mostrem exatamente o que está sendo cobrado</li>
        <li><strong>Comunicação regular:</strong> Atualizações de progresso durante o projeto evitam surpresas no final</li>
        <li><strong>Faturamento oportuno:</strong> Fature enquanto o trabalho está fresco na memória do cliente</li>
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
