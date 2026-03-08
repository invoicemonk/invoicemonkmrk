import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Batch 13a: Estimates & Proposals cluster posts — Portuguese translations
 */
const posts: BlogPost[] = [
  {
    slug: 'proposal-vs-estimate-vs-quote-explained',
    title: 'Proposta vs Orçamento vs Cotação: Qual é a diferença?',
    excerpt: 'Confuso sobre propostas, orçamentos e cotações? Aprenda as diferenças principais, quando usar cada documento e como eles afetam seus relacionamentos com clientes.',
    category: 'Estimates and Proposals',
    tags: ['propostas', 'orçamentos', 'cotações', 'documentos comerciais', 'gestão de clientes', 'precificação'],
    author: defaultAuthor, date: '2025-12-01', dateModified: '2026-02-04', readTime: '8 min de leitura',
    featuredImage: '/blog/proposal-vs-quote.jpg',
    featuredImageAlt: 'Comparação entre proposta, orçamento e cotação',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['proposta vs orçamento', 'orçamento vs cotação', 'proposta comercial', 'cotação de preço'],
    priority: 'P2',
    content: `
      <p>Propostas, orçamentos e cotações — muitos empresários usam esses termos de forma intercambiável, mas na verdade são documentos diferentes com propósitos, implicações legais e casos de uso distintos.</p>
      <p>Usar o documento errado pode levar a aumento de escopo, disputas de preço e clientes perdidos. Este guia esclarece as diferenças para que você sempre envie o documento certo.</p>

      <h2>Comparação rápida</h2>
      <table>
        <thead>
          <tr><th>Característica</th><th>Proposta</th><th>Orçamento</th><th>Cotação</th></tr>
        </thead>
        <tbody>
          <tr><td>Propósito</td><td>Convencer e vender</td><td>Custo aproximado</td><td>Oferta de preço fixo</td></tr>
          <tr><td>Preço vinculante?</td><td>Não</td><td>Não</td><td>Geralmente sim</td></tr>
          <tr><td>Nível de detalhe</td><td>Alto (estratégia + preço)</td><td>Moderado</td><td>Itens específicos</td></tr>
          <tr><td>Inclui escopo?</td><td>Escopo detalhado + abordagem</td><td>Escopo breve</td><td>Entregas específicas</td></tr>
          <tr><td>Comprimento típico</td><td>2–10 páginas</td><td>1–2 páginas</td><td>1 página</td></tr>
          <tr><td>Período de validade</td><td>30 dias típico</td><td>30 dias típico</td><td>14–30 dias</td></tr>
        </tbody>
      </table>

      <h2>O que é uma proposta?</h2>
      <p>Uma proposta é um documento abrangente projetado para convencer um cliente a contratá-lo. Vai além do preço e mostra sua abordagem, expertise e por que você é a melhor escolha.</p>

      <h2>O que é um orçamento?</h2>
      <p>Um orçamento fornece uma estimativa aproximada de custo para um projeto. Não é vinculante e pode mudar conforme o escopo se torna mais claro.</p>

      <h2>O que é uma cotação?</h2>
      <p>Uma cotação é uma oferta de preço fixo e vinculante para um serviço definido. Uma vez aceita pelo cliente, você é obrigado a entregar pelo preço indicado.</p>

      <h2>Diferenças legais</h2>
      <ul>
        <li><strong>Propostas:</strong> Geralmente não vinculantes. São convites para negociação.</li>
        <li><strong>Orçamentos:</strong> Não vinculantes. Definem expectativas mas permitem ajustes.</li>
        <li><strong>Cotações:</strong> Geralmente consideradas vinculantes durante o período de validade. No Brasil, as obrigações variam conforme o Código de Defesa do Consumidor.</li>
      </ul>

      <h2>Escolher o documento certo</h2>
      <ol>
        <li><strong>Cliente pergunta "quanto custa mais ou menos?":</strong> Envie um orçamento</li>
        <li><strong>Cliente pergunta "qual é o preço exato?":</strong> Envie uma cotação</li>
        <li><strong>Cliente pergunta "vocês podem ajudar com este projeto?":</strong> Envie uma proposta</li>
        <li><strong>Licitação:</strong> Sempre uma proposta</li>
        <li><strong>Tarefa pequena e definida:</strong> Uma cotação geralmente é suficiente</li>
      </ol>

      <p>Crie documentos profissionais com <a href="/__LANG__/estimates">as ferramentas de orçamento do Invoicemonk</a> e converta-os em faturas com um clique.</p>
    `,
    faq: [
      { question: 'Uma cotação é juridicamente vinculante?', answer: 'Geralmente sim — uma cotação é considerada vinculante durante seu período de validade. Uma vez que o cliente aceita o preço cotado, espera-se que você entregue pelo preço indicado. Por isso, cotações devem incluir data de validade e definição clara de escopo.' },
      { question: 'Devo enviar um orçamento ou cotação para um novo cliente?', answer: 'Comece com um orçamento se o escopo não está totalmente definido, ou com uma proposta se precisa explicar sua abordagem. Passe para a cotação formal quando o escopo for acordado.' }
    ]
  },
  {
    slug: 'winning-proposal-templates-by-industry',
    title: 'Modelos de propostas vencedoras por setor: Personalize para o sucesso',
    excerpt: 'Obtenha modelos de propostas específicos por setor para consultoria, design, marketing, TI e mais. Aprenda a adaptar suas propostas para conquistar clientes em qualquer área.',
    category: 'Estimates and Proposals',
    tags: ['modelos de propostas', 'propostas comerciais', 'modelos por setor', 'aquisição de clientes'],
    author: defaultAuthor, date: '2025-10-28', dateModified: '2026-02-04', readTime: '10 min de leitura',
    featuredImage: '/blog/proposal-templates-industry.jpg',
    featuredImageAlt: 'Modelos de propostas profissionais para diferentes setores',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['modelo proposta', 'proposta comercial modelo', 'proposta consultoria'],
    priority: 'P2',
    content: `
      <p>A proposta perfeita começa com o entendimento do seu setor. O que funciona em consultoria fracassa em web design — e vice-versa. Este guia oferece modelos comprovados para cada setor.</p>

      <h2>Por que propostas específicas por setor funcionam melhor</h2>
      <p>Propostas genéricas sinalizam que você trata todos os clientes da mesma forma. Propostas específicas demonstram que você entende os desafios únicos do cliente.</p>

      <h2>Modelo de proposta de consultoria</h2>
      <ul>
        <li><strong>Análise da situação:</strong> Mostre compreensão profunda dos desafios do negócio</li>
        <li><strong>Metodologia:</strong> Explique seu framework de consultoria</li>
        <li><strong>Resultados esperados:</strong> Quantifique o ROI sempre que possível</li>
        <li><strong>Estudos de caso:</strong> Clientes similares com resultados mensuráveis</li>
        <li><strong>Biografias da equipe:</strong> Destaque experiência setorial relevante</li>
      </ul>

      <h2>Modelo de web design / desenvolvimento</h2>
      <ul>
        <li><strong>Auditoria do site:</strong> Análise do que funciona e do que não funciona</li>
        <li><strong>Direção de design:</strong> Moodboards ou referências de estilo</li>
        <li><strong>Especificações técnicas:</strong> Plataforma, funcionalidades, integrações</li>
        <li><strong>Plano de conteúdo:</strong> Quem fornece conteúdo e em que formato</li>
        <li><strong>Plano de lançamento:</strong> Testes, migração e suporte pós-lançamento</li>
      </ul>

      <h2>Modelo de marketing / conteúdo</h2>
      <ul>
        <li><strong>Pesquisa de mercado:</strong> Cenário competitivo e oportunidades</li>
        <li><strong>Visão estratégica:</strong> Canais, mensagens e públicos-alvo</li>
        <li><strong>Calendário de conteúdo:</strong> Mês exemplo de conteúdo planejado</li>
        <li><strong>KPIs:</strong> Objetivos específicos e mensuráveis</li>
      </ul>

      <h2>Modelo de TI / serviços técnicos</h2>
      <ul>
        <li><strong>Avaliação de infraestrutura:</strong> Estado atual</li>
        <li><strong>Solução proposta:</strong> Arquitetura técnica e componentes</li>
        <li><strong>Segurança:</strong> Proteção de dados e conformidade</li>
        <li><strong>Plano de migração:</strong> Transição sem interrupções</li>
        <li><strong>SLAs:</strong> Acordos de nível de serviço e suporte</li>
      </ul>

      <p>Crie propostas profissionais com <a href="/__LANG__/estimates">Invoicemonk</a> e converta-as em faturas com um clique.</p>
    `,
    faq: [
      { question: 'Qual deve ser o tamanho de uma proposta comercial?', answer: 'A maioria das propostas eficazes tem 3-8 páginas. Projetos simples precisam de 2-3 páginas; projetos complexos podem exigir 10+ páginas.' },
      { question: 'Devo usar o mesmo modelo para cada cliente?', answer: 'Não. Embora um modelo base economize tempo, cada proposta deve ser personalizada para o cliente e setor específicos.' }
    ]
  },
  {
    slug: 'document-types-comparison-business',
    title: 'Comparação de tipos de documentos comerciais: Faturas, recibos, pedidos de compra e mais',
    excerpt: 'Entenda as diferenças entre faturas, recibos, pedidos de compra, notas de crédito e outros documentos comerciais. Aprenda quando usar cada um.',
    category: 'Estimates and Proposals',
    tags: ['documentos comerciais', 'faturas', 'recibos', 'pedidos de compra', 'notas de crédito'],
    author: defaultAuthor, date: '2025-09-18', dateModified: '2026-02-04', readTime: '9 min de leitura',
    featuredImage: '/blog/business-documents-comparison.jpg',
    featuredImageAlt: 'Diferentes documentos comerciais comparados',
    clusterType: 'cluster', targetProduct: '/estimates',
    semanticKeywords: ['documentos comerciais comparação', 'fatura vs recibo', 'pedido de compra vs fatura'],
    priority: 'P2',
    content: `
      <p>Entender os diferentes documentos comerciais é essencial para uma contabilidade e conformidade adequadas. Este guia explica cada documento e quando usá-lo.</p>

      <h2>Tabela comparativa</h2>
      <table>
        <thead>
          <tr><th>Documento</th><th>Criado por</th><th>Propósito</th><th>Juridicamente vinculante?</th></tr>
        </thead>
        <tbody>
          <tr><td>Fatura/Nota Fiscal</td><td>Vendedor</td><td>Solicitação de pagamento</td><td>Sim</td></tr>
          <tr><td>Recibo</td><td>Vendedor</td><td>Confirmação de pagamento</td><td>Comprovante de pagamento</td></tr>
          <tr><td>Pedido de compra</td><td>Comprador</td><td>Autorizar uma compra</td><td>Sim, quando aceito</td></tr>
          <tr><td>Cotação</td><td>Vendedor</td><td>Oferta de preço fixo</td><td>Vinculante durante a validade</td></tr>
          <tr><td>Orçamento</td><td>Vendedor</td><td>Custo aproximado</td><td>Não</td></tr>
          <tr><td>Proposta</td><td>Vendedor</td><td>Vender solução + preço</td><td>Não</td></tr>
          <tr><td>Fatura proforma</td><td>Vendedor</td><td>Estimativa pré-entrega</td><td>Não</td></tr>
          <tr><td>Nota de crédito</td><td>Vendedor</td><td>Reduzir valor faturado</td><td>Sim</td></tr>
          <tr><td>Nota de entrega</td><td>Vendedor</td><td>Confirmar entrega</td><td>Prova de entrega</td></tr>
        </tbody>
      </table>

      <h2>Faturas / Notas Fiscais</h2>
      <p>Uma fatura é uma solicitação formal de pagamento emitida pelo vendedor após a entrega de bens ou serviços. No Brasil, a Nota Fiscal é obrigatória para todas as transações comerciais conforme regulamentação da Receita Federal.</p>

      <h2>Recibos</h2>
      <p>Um recibo confirma que o pagamento foi recebido. É emitido pelo vendedor ao comprador como comprovante de compra.</p>

      <h2>Pedidos de compra</h2>
      <p>Um pedido de compra é criado pelo comprador para autorizar uma compra junto ao vendedor.</p>

      <h2>Recursos relacionados</h2>
      <ul>
        <li><a href="/__LANG__/blog/complete-guide-to-business-invoicing">Guia completo de faturamento empresarial</a></li>
        <li><a href="/__LANG__/blog/proposal-vs-estimate-vs-quote-explained">Proposta vs Orçamento vs Cotação</a></li>
        <li><a href="/__LANG__/blog/credit-notes-and-invoice-corrections">Notas de crédito e correções</a></li>
      </ul>
    `,
    faq: [
      { question: 'Qual é a diferença entre uma fatura e um recibo?', answer: 'Uma fatura é uma solicitação de pagamento emitida antes do pagamento. Um recibo é uma confirmação após o pagamento. Ambos são importantes para a contabilidade.' },
      { question: 'Preciso de um pedido de compra para cada transação?', answer: 'Não necessariamente. Pedidos de compra são mais comuns em compras corporativas e governamentais. Pequenas empresas geralmente dispensam para compras rotineiras.' }
    ]
  }
];

registerBlogPosts('pt', posts);
