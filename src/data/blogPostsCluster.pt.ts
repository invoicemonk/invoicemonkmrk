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
    author: defaultAuthor,
    date: '2026-01-31',
    readTime: '7 min de leitura',
    featuredImage: '/images/blog/invoicing-software-dashboard.jpg',
    featuredImageAlt: 'Comparativo de meios de pagamento online',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/payments',
    semanticKeywords: ['comparativo pagamentos', 'aceitar cartão', 'Pix empresarial'],
    priority: 'P2',
    content: `
      <p>Os meios de pagamento que você aceita influenciam diretamente a rapidez com que recebe. Aceite os errados e cria atrito que atrasa pagamentos. Aceite os certos e facilita para os clientes pagarem imediatamente.</p>
      <p>Este guia compara as principais opções de pagamento disponíveis para pequenas empresas, ajudando você a escolher a combinação ideal.</p>

      <h2>Pix</h2>
      <p>O meio de pagamento mais popular no Brasil — instantâneo e sem taxas para pessoa física.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Transferência instantânea, 24/7</li>
        <li>Sem taxas para pessoas físicas, taxas baixas para PJ</li>
        <li>Amplamente adotado por toda a população</li>
        <li>QR Code facilita pagamentos presenciais e remotos</li>
      </ul>
      <h3>Desvantagens</h3>
      <ul>
        <li>Limites de valor podem ser configurados pelo banco</li>
        <li>Conciliação pode ser manual sem software integrado</li>
      </ul>
      <h3>Ideal para</h3>
      <p>Praticamente todas as transações no Brasil, tanto B2B quanto B2C.</p>

      <h2>Transferência bancária</h2>
      <p>Transferências tradicionais continuam populares, especialmente para transações B2B de maior valor.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Taxas baixas ou zero (especialmente domésticas)</li>
        <li>Percebida como segura e profissional</li>
        <li>Adequada para valores altos</li>
        <li>Dinheiro vai direto para sua conta</li>
      </ul>
      <h3>Desvantagens</h3>
      <ul>
        <li>Cliente precisa inserir dados manualmente</li>
        <li>Transferências internacionais podem ser lentas e caras</li>
        <li>Fácil de postergar</li>
        <li>Conciliação pode ser manual</li>
      </ul>

      <h2>Cartões de crédito e débito</h2>
      <p>Pagamentos com cartão oferecem conveniência que frequentemente compensa as taxas.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Pagamento instantâneo com um clique</li>
        <li>Clientes podem pagar de qualquer lugar, a qualquer hora</li>
        <li>Familiar e confiável para consumidores</li>
        <li>Conciliação automática com a maioria dos softwares</li>
      </ul>
      <h3>Desvantagens</h3>
      <ul>
        <li>Taxas de processamento (1,5–3%)</li>
        <li>Risco de chargebacks</li>
        <li>Requer integração com processador de pagamentos</li>
      </ul>

      <h2>Boleto bancário</h2>
      <p>Ainda popular no Brasil, especialmente para valores maiores e clientes sem cartão de crédito.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Não requer cartão de crédito</li>
        <li>Pode ser pago em qualquer banco, lotérica ou app</li>
        <li>Amplamente aceito</li>
      </ul>
      <h3>Desvantagens</h3>
      <ul>
        <li>Prazo de compensação de 1–3 dias úteis</li>
        <li>Taxa de inadimplência mais alta que outros métodos</li>
        <li>Vem sendo substituído pelo Pix</li>
      </ul>

      <h2>Links de pagamento</h2>
      <p>Links de pagamento permitem que clientes paguem via página web segura — combinando a facilidade dos cartões sem precisar de loja virtual.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Sem integração técnica necessária</li>
        <li>Enviáveis por e-mail, SMS ou WhatsApp</li>
        <li>Suportam múltiplos métodos de pagamento</li>
        <li>Experiência profissional e com sua marca</li>
      </ul>

      <h2>Carteiras digitais</h2>
      <p>PayPal, Google Pay, PicPay e serviços similares oferecem outra opção prática.</p>
      <h3>Vantagens</h3>
      <ul>
        <li>Convenientes para clientes que já usam</li>
        <li>Proteção ao comprador gera confiança</li>
        <li>Pagamentos internacionais simplificados</li>
      </ul>
      <h3>Desvantagens</h3>
      <ul>
        <li>Taxas podem ser mais altas que processamento direto</li>
        <li>Fundos podem ficar na conta da carteira</li>
      </ul>

      <h2>Como escolher a combinação certa</h2>
      <p>A maioria dos negócios deveria oferecer múltiplas opções. Considere:</p>
      <ul>
        <li><strong>Preferências dos clientes:</strong> B2B geralmente prefere Pix/transferência; B2C prefere cartão/Pix</li>
        <li><strong>Valor da fatura:</strong> 3% em R$ 500 é ok; em R$ 50.000 é significativo</li>
        <li><strong>Prioridade de rapidez:</strong> Se o caixa está apertado, priorize Pix e cartão</li>
        <li><strong>Seu mercado:</strong> Adapte aos usos locais</li>
      </ul>

      <h2>Integração com faturamento</h2>
      <p>A mágica real acontece quando os meios de pagamento estão integrados nas suas faturas. Com <a href="/payments">soluções de pagamento integradas</a>, clientes pagam diretamente do e-mail da fatura — sem etapas extras, sem pagamentos esquecidos.</p>
      <p>Para uma estratégia completa de recebimento rápido, consulte nosso <a href="/blog/ultimate-guide-getting-paid-faster">guia para receber mais rápido</a>.</p>
    `
  },
  {
    slug: 'small-business-tax-deductions-guide',
    title: 'Deduções fiscais que pequenas empresas frequentemente esquecem',
    excerpt: 'Maximize suas economias com este guia de despesas dedutíveis frequentemente esquecidas.',
    category: 'Small Business',
    tags: ['Impostos', 'Deduções', 'PME', 'Conformidade', 'Despesas'],
    author: defaultAuthor,
    date: '2026-01-31',
    readTime: '9 min de leitura',
    featuredImage: '/images/blog/tax-deductions.jpg',
    featuredImageAlt: 'Guia de deduções fiscais para PME',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/compliance',
    semanticKeywords: ['deduções fiscais', 'despesas dedutíveis', 'reduzir impostos'],
    priority: 'P2',
    content: `
      <p>Muitos empreendedores pagam mais impostos que o necessário — não porque façam algo errado, mas porque não declaram todas as deduções a que têm direito. Dinheiro que poderia ficar no seu negócio acaba na Receita Federal.</p>
      <p>Este guia cobre as deduções mais frequentemente esquecidas e como garantir que você não está deixando dinheiro na mesa.</p>

      <h2>Dedução de home office</h2>
      <p>Se você trabalha de casa regularmente, pode deduzir uma parte dos custos da moradia:</p>
      <ul>
        <li>Aluguel ou juros de financiamento (proporcional ao espaço usado)</li>
        <li>Contas (eletricidade, internet, água)</li>
        <li>Seguro residencial</li>
        <li>Reparos e manutenção</li>
        <li>IPTU</li>
      </ul>
      <p>O requisito-chave é que o espaço seja usado «regularmente e exclusivamente» para o negócio.</p>
      <h3>Como calcular</h3>
      <p>Método mais simples: divida os metros quadrados do escritório pelo total da moradia. Aplique essa porcentagem às despesas elegíveis. Se seu escritório tem 10 m² em uma casa de 100 m², você pode deduzir 10% dos custos qualificados.</p>

      <h2>Despesas com veículo</h2>
      <p>Se usa seu carro para o negócio, há duas opções:</p>
      <ul>
        <li><strong>Despesas reais:</strong> Registre combustível, seguro, manutenção, depreciação. Declare a porcentagem de uso empresarial.</li>
        <li><strong>Quilometragem padrão:</strong> Declare um valor fixo por km de deslocamento profissional.</li>
      </ul>
      <p>Mantenha um registro de quilometragem anotando data, destino, motivo e km de cada viagem de negócio.</p>

      <h2>Capacitação profissional</h2>
      <p>Investir em si mesmo geralmente é dedutível:</p>
      <ul>
        <li>Cursos online e treinamentos relacionados ao negócio</li>
        <li>Congressos e seminários do setor</li>
        <li>Livros e publicações profissionais</li>
        <li>Coaching e consultoria para seu negócio</li>
        <li>Certificações profissionais</li>
      </ul>

      <h2>Software e assinaturas</h2>
      <p>Suas ferramentas digitais são dedutíveis:</p>
      <ul>
        <li><a href="/invoicing">Software de faturamento</a> e ferramentas contábeis</li>
        <li>Armazenamento na nuvem e backups</li>
        <li>Ferramentas de gestão de projetos e colaboração</li>
        <li>Software específico do setor</li>
        <li>Hospedagem web e domínios</li>
        <li>Ferramentas de marketing e e-mail</li>
      </ul>

      <h2>Serviços profissionais</h2>
      <p>Honorários pagos a profissionais que ajudam seu negócio são dedutíveis:</p>
      <ul>
        <li>Contadores e escritórios contábeis</li>
        <li>Advogados para assuntos empresariais</li>
        <li>Consultores de negócio</li>
        <li>Assistentes virtuais e freelancers</li>
        <li>Agências de marketing</li>
      </ul>

      <h2>Seguros</h2>
      <p>Seguros empresariais são despesas dedutíveis:</p>
      <ul>
        <li>Seguro de responsabilidade profissional</li>
        <li>Seguro de responsabilidade geral</li>
        <li>Seguro de bens empresariais</li>
        <li>Cyber-seguro</li>
        <li>Plano de saúde (para autônomos, em algumas jurisdições)</li>
      </ul>

      <h2>Marketing e publicidade</h2>
      <p>Todos os custos de promoção do seu negócio são dedutíveis:</p>
      <ul>
        <li>Publicidade online (Google, redes sociais)</li>
        <li>Publicidade impressa</li>
        <li>Cartões de visita e material promocional</li>
        <li>Patrocínios</li>
        <li>Design e desenvolvimento de site</li>
      </ul>

      <h2>Taxas bancárias e financeiras</h2>
      <p>Não esqueça dos custos de serviços financeiros:</p>
      <ul>
        <li>Taxas de conta bancária PJ</li>
        <li>Taxas de processamento de pagamentos</li>
        <li>Anuidades de cartão empresarial</li>
        <li>Juros de empréstimos com fins empresariais</li>
      </ul>

      <h2>Equipamentos e materiais</h2>
      <p>Itens que você compra para o negócio são dedutíveis:</p>
      <ul>
        <li>Computadores, celulares e tablets</li>
        <li>Móveis de escritório</li>
        <li>Material de escritório</li>
        <li>Ferramentas e equipamentos específicos do seu ofício</li>
      </ul>

      <h2>Guardar comprovantes</h2>
      <p>A chave para maximizar deduções é documentação. Use <a href="/expenses">controle de despesas</a> para capturar recibos instantaneamente. Guarde comprovantes por pelo menos 5 anos conforme sua jurisdição. Para mais informações, veja nosso <a href="/blog/small-business-tax-compliance-guide">guia de conformidade fiscal</a>.</p>
    `
  },
  {
    slug: 'how-to-prepare-business-tax-audit',
    title: 'Como se preparar para uma fiscalização',
    excerpt: 'Fiscalizações não precisam ser assustadoras. Saiba o que as causa e como preparar sua documentação.',
    category: 'Small Business',
    tags: ['Impostos', 'Fiscalização', 'Conformidade', 'Armazenamento', 'PME'],
    author: defaultAuthor,
    date: '2026-01-31',
    readTime: '8 min de leitura',
    featuredImage: '/images/blog/tax-audit-preparation.jpg',
    featuredImageAlt: 'Preparação para fiscalização',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/compliance',
    semanticKeywords: ['preparação fiscalização', 'defesa auditoria', 'documentos contábeis'],
    priority: 'P2',
    content: `
      <p>A palavra «fiscalização» assusta muitos empresários, mas não precisa ser assim. Com preparação adequada e registros organizados, fiscalizações se tornam exercícios administrativos em vez de crises. Este guia explica o que esperar e como se preparar.</p>

      <h2>O que causa uma fiscalização</h2>
      <p>Entender os gatilhos ajuda a evitar sinais de alerta:</p>
      <ul>
        <li><strong>Anomalias estatísticas:</strong> Deduções inusualmente altas para seu setor ou nível de renda</li>
        <li><strong>Valores arredondados:</strong> Números suspeitamente redondos sugerem estimativa em vez de registro real</li>
        <li><strong>Muitas operações em espécie:</strong> Negócios com muito dinheiro vivo recebem mais escrutínio</li>
        <li><strong>Grandes variações:</strong> Mudanças dramáticas ano a ano em receitas ou despesas</li>
        <li><strong>Dedução de home office:</strong> Esta dedução é examinada de perto quando declarada</li>
        <li><strong>Seleção aleatória:</strong> Às vezes não há motivo específico</li>
      </ul>

      <h2>Tipos de fiscalização</h2>
      <p>Nem todas são iguais:</p>
      <ul>
        <li><strong>Por correspondência:</strong> A Receita solicita documentos específicos por carta. Geralmente limitada em escopo.</li>
        <li><strong>No escritório:</strong> Você visita o escritório da Receita com seus registros.</li>
        <li><strong>No local:</strong> Um fiscal visita sua empresa. Mais abrangente mas menos comum para pequenas empresas.</li>
      </ul>

      <h2>Documentos que você deve ter prontos</h2>
      <p>Mantenha registros organizados por pelo menos 5 anos. Documentos essenciais incluem:</p>
      <h3>Documentação de receitas</h3>
      <ul>
        <li>Todas as NFs emitidas (use <a href="/invoicing">software de faturamento</a> para recuperação fácil)</li>
        <li>Extratos bancários mostrando depósitos</li>
        <li>Registros de processadores de pagamento</li>
        <li>Informes de rendimentos recebidos</li>
      </ul>
      <h3>Documentação de despesas</h3>
      <ul>
        <li>Comprovantes de todas as compras do negócio</li>
        <li>Faturas de cartão de crédito</li>
        <li>NFs de fornecedores</li>
        <li>Comprovantes bancários de pagamentos</li>
      </ul>
      <h3>Suporte de deduções</h3>
      <ul>
        <li>Medidas e cálculos de home office</li>
        <li>Registros de quilometragem do veículo</li>
        <li>Itinerários de viagem e documentação de propósito comercial</li>
      </ul>

      <h2>Como se organizar ante uma fiscalização</h2>
      <p>Quando receber notificação:</p>
      <ol>
        <li><strong>Não entre em pânico.</strong> Leia a notificação com cuidado para entender o que está sendo solicitado.</li>
        <li><strong>Responda nos prazos.</strong> Perder prazos cria problemas.</li>
        <li><strong>Forneça apenas o solicitado.</strong> Não ofereça informação extra voluntariamente.</li>
        <li><strong>Organize logicamente.</strong> Apresente documentos em categorias claras com resumos.</li>
        <li><strong>Considere ajuda profissional.</strong> Para fiscalizações significativas, um contador vale a pena.</li>
      </ol>

      <h2>Durante a fiscalização</h2>
      <p>Se reunir com um fiscal:</p>
      <ul>
        <li>Seja profissional e cortês</li>
        <li>Responda perguntas diretamente — não explique demais</li>
        <li>Se não souber algo, diga e ofereça fornecer depois</li>
        <li>Tome notas do que foi discutido e solicitado</li>
        <li>Não assine nada que não entenda</li>
      </ul>

      <h2>Ajustes comuns em fiscalizações</h2>
      <p>Problemas mais frequentes encontrados:</p>
      <ul>
        <li>Comprovantes faltando ou inadequados para despesas declaradas</li>
        <li>Despesas pessoais misturadas com empresariais</li>
        <li>Deduções de home office ou veículo mal calculadas</li>
        <li>Receitas não declaradas</li>
        <li>Trabalhadores classificados incorretamente (autônomo vs. CLT)</li>
      </ul>

      <h2>Prevenção</h2>
      <p>Bons hábitos fazem fiscalizações serem não-eventos:</p>
      <ul>
        <li>Use <a href="/accounting">software contábil</a> para registrar todas as transações</li>
        <li>Capture comprovantes instantaneamente com <a href="/expenses">controle de despesas</a></li>
        <li>Mantenha finanças PJ e PF completamente separadas</li>
        <li>Documente o propósito comercial das despesas quando realizá-las</li>
        <li>Revise sua declaração antes de enviar — procure sinais de alerta você mesmo</li>
      </ul>
      <p>Para mais sobre conformidade o ano todo, veja nosso <a href="/blog/small-business-tax-compliance-guide">guia completo de conformidade fiscal</a>.</p>
    `
  },
  {
    slug: 'how-to-write-winning-business-proposal',
    title: 'Como escrever uma proposta comercial vencedora',
    excerpt: 'Transforme suas propostas em ferramentas de venda persuasivas. Estrutura, psicologia e táticas.',
    category: 'Small Business',
    tags: ['Propostas', 'Desenvolvimento comercial', 'Vendas', 'Precificação'],
    author: defaultAuthor,
    date: '2026-01-31',
    readTime: '10 min de leitura',
    featuredImage: '/images/blog/proposal-estimate-quote.jpg',
    featuredImageAlt: 'Escrevendo uma proposta comercial vencedora',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/estimates',
    semanticKeywords: ['redação de proposta', 'modelo de proposta', 'ganhar clientes'],
    priority: 'P2',
    content: `
      <p>Uma proposta comercial é sua oportunidade de convencer um cliente potencial de que você é a escolha certa para o projeto. Não é apenas uma lista de preços — é um documento persuasivo que deve demonstrar compreensão, gerar confiança e facilitar o «sim».</p>
      <p>Este guia cobre os elementos que separam propostas vencedoras das esquecíveis.</p>

      <h2>O propósito de uma proposta</h2>
      <p>Sua proposta serve múltiplas funções:</p>
      <ul>
        <li><strong>Demonstra compreensão:</strong> Mostra que você ouviu e entendeu as necessidades do cliente</li>
        <li><strong>Apresenta sua solução:</strong> Explica como abordará os desafios</li>
        <li><strong>Gera credibilidade:</strong> Estabelece por que você é qualificado</li>
        <li><strong>Gerencia expectativas:</strong> Define limites claros de escopo, prazo e custo</li>
        <li><strong>Facilita a decisão:</strong> Torna fácil para o cliente dizer sim</li>
      </ul>

      <h2>A estrutura essencial</h2>
      <h3>1. Resumo executivo</h3>
      <p>Comece com uma visão geral concisa que decisores possam ler em 60 segundos. Cubra: o problema que resolve, sua abordagem, resultados esperados e investimento necessário.</p>

      <h3>2. Entendimento do desafio</h3>
      <p>Demonstre que ouviu. Reformule a situação do cliente, desafios e objetivos com suas próprias palavras. Esta seção gera confiança ao mostrar que você entende o mundo dele antes de tentar vender.</p>

      <h3>3. Solução proposta</h3>
      <p>Detalhe o que fará e como. Seja específico o suficiente para demonstrar competência mas evite jargão técnico excessivo. Foque em resultados e benefícios.</p>

      <h3>4. Entregáveis e cronograma</h3>
      <p>Liste exatamente o que o cliente receberá e quando. Entregáveis claros previnem scope creep e definem expectativas corretas.</p>

      <h3>5. Investimento</h3>
      <p>Apresente preços claramente. O enquadramento de «investimento» é intencional — você não está cotando um custo, está mostrando o que obtêm pelo dinheiro.</p>

      <h3>6. Sobre você/sua empresa</h3>
      <p>Credenciais breves, experiência relevante e prova social (depoimentos, cases). Não exagere — o foco deve ser no problema do cliente.</p>

      <h3>7. Próximos passos</h3>
      <p>Deixe cristalino o que acontece depois. «Para prosseguir, assine abaixo e devolva até [data]» é melhor que «Me diga o que acha».</p>

      <h2>Estratégias de apresentação de preço</h2>
      <p>Como apresenta o preço importa tanto quanto o preço em si:</p>
      <ul>
        <li><strong>Ancore alto:</strong> Se oferece opções, apresente a premium primeiro</li>
        <li><strong>Mostre valor primeiro:</strong> Liste benefícios antes de revelar o preço</li>
        <li><strong>Use três opções:</strong> Pacotes Bom/Melhor/Excelente ajudam clientes a se auto-selecionar</li>
        <li><strong>Parcele:</strong> Pagamentos mensais parecem menores que valores anuais</li>
        <li><strong>Contextualize:</strong> Compare seu honorário com o custo de não resolver o problema</li>
      </ul>

      <h2>Erros comuns em propostas</h2>
      <ul>
        <li><strong>Muito longa:</strong> Pessoas ocupadas não leem propostas de 20 páginas para projetos medianos</li>
        <li><strong>Muito genérica:</strong> Propostas copy-paste que não abordam necessidades específicas</li>
        <li><strong>Foco em funcionalidades:</strong> Listar o que faz em vez do que o cliente ganha</li>
        <li><strong>Sem próximo passo claro:</strong> Deixar o cliente sem saber como prosseguir</li>
        <li><strong>Envio tardio:</strong> Esperar demais após a conversa inicial</li>
      </ul>

      <h2>Acompanhamento de propostas</h2>
      <ul>
        <li>Envie e-mail breve confirmando recebimento e oferecendo responder perguntas</li>
        <li>Faça follow-up em 3–5 dias se não teve resposta</li>
        <li>Ofereça uma call rápida para revisar a proposta juntos</li>
        <li>Pergunte se há dúvidas impedindo a decisão</li>
      </ul>

      <h2>Da proposta ao projeto</h2>
      <ol>
        <li>Obtenha aceitação formal por escrito</li>
        <li>Cobre a entrada acordada</li>
        <li>Envie e-mail de boas-vindas com cronograma e expectativas</li>
        <li>Emita a primeira <a href="/invoicing">fatura</a> imediatamente</li>
      </ol>
      <p>Use <a href="/estimates">ferramentas de orçamento</a> que se convertam em faturas com um clique.</p>
    `
  },
  {
    slug: 'estimate-vs-quote-vs-invoice-difference',
    title: 'Estimativa vs Orçamento vs Fatura: qual a diferença?',
    excerpt: 'Confuso entre estimativas, orçamentos e faturas? As diferenças-chave e quando usar cada um.',
    category: 'Small Business',
    tags: ['Estimativas', 'Orçamentos', 'Faturas', 'Documentos comerciais'],
    author: defaultAuthor,
    date: '2026-01-31',
    readTime: '6 min de leitura',
    featuredImage: '/images/blog/estimate-quote-invoice.jpg',
    featuredImageAlt: 'Três documentos comerciais lado a lado',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/estimates',
    semanticKeywords: ['estimativa vs orçamento', 'orçamento vs fatura', 'documentos comerciais'],
    priority: 'P2',
    content: `
      <p>Estimativas, orçamentos e faturas — três documentos que muitos confundem mas que cumprem funções muito diferentes no fluxo desde a captação do cliente até o recebimento. Usar o documento errado no momento errado pode causar confusão, atrasar pagamentos ou até criar problemas legais.</p>
      <p>Este guia esclarece exatamente quando e como usar cada um.</p>

      <h2>Estimativa: uma aproximação</h2>
      <p>Uma estimativa é uma avaliação de custo <strong>não vinculante</strong>. Dá ao cliente uma ideia geral do que um projeto poderia custar, mas o preço final pode variar conforme os detalhes se definem.</p>
      <h3>Quando usar</h3>
      <ul>
        <li>O escopo do projeto ainda não está completamente definido</li>
        <li>Investigação ou descoberta é necessária antes de se comprometer com um preço</li>
        <li>Há variáveis fora do seu controle que afetarão o custo</li>
        <li>O cliente quer uma cifra orientativa antes de avançar</li>
      </ul>
      <h3>O que incluir</h3>
      <ul>
        <li>Faixa de preços (ex: R$ 10.000–15.000)</li>
        <li>Descrição geral do trabalho proposto</li>
        <li>Premissas e condições</li>
        <li>Data de validade</li>
        <li>Aviso claro de que não é preço final</li>
      </ul>

      <h2>Orçamento: compromisso de preço firme</h2>
      <p>Um orçamento é um <strong>preço firme</strong> para um trabalho claramente definido. Uma vez aceito pelo cliente, é vinculante — você não pode mudar o preço a menos que o escopo mude.</p>
      <h3>Quando usar</h3>
      <ul>
        <li>O escopo está claramente definido e acordado</li>
        <li>O trabalho é previsível e você pode estimar com precisão</li>
        <li>O cliente precisa de certeza de preço para aprovação interna</li>
        <li>Você está em processo de licitação competitivo</li>
      </ul>
      <h3>O que incluir</h3>
      <ul>
        <li>Preço exato (não uma faixa)</li>
        <li>Detalhamento de itens com quantidades e preços unitários</li>
        <li>Termos e condições</li>
        <li>Data de validade (tipicamente 30 dias)</li>
        <li>Condições de pagamento</li>
      </ul>

      <h2>Fatura: pedido formal de pagamento</h2>
      <p>Uma fatura é emitida <strong>após o trabalho estar concluído</strong> (ou em marcos acordados). É um documento legal que solicita pagamento por bens ou serviços entregues.</p>
      <h3>Boas práticas</h3>
      <ul>
        <li>Enviar imediatamente após concluir o trabalho ou marco</li>
        <li>Incluir todos os elementos necessários (<a href="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners">ver guia completo</a>)</li>
        <li>Referenciar o orçamento ou número de pedido original</li>
        <li>Usar <a href="/invoicing">software de faturamento profissional</a></li>
        <li>Incluir instruções de pagamento claras</li>
      </ul>

      <h2>Como os três documentos se encadeiam</h2>
      <ol>
        <li><strong>Estimativa:</strong> «Quanto custaria mais ou menos?» → você fornece uma cifra aproximada</li>
        <li><strong>Orçamento:</strong> O escopo se define → você fornece um preço firme e vinculante</li>
        <li><strong>Fatura:</strong> O trabalho é concluído → você solicita o pagamento formalmente</li>
      </ol>
      <p>Nem sempre os três são usados. Para trabalhos simples, pode ir direto de orçamento para fatura. Para clientes habituais, pode nem precisar de orçamento formal.</p>

      <h2>Erros comuns que custam dinheiro</h2>
      <ul>
        <li><strong>Usar estimativa quando deveria usar orçamento:</strong> O cliente espera preço firme e se surpreende quando o custo final é maior</li>
        <li><strong>Não numerar documentos:</strong> Dificulta acompanhamento e cria problemas contábeis</li>
        <li><strong>Faturar sem orçamento prévio:</strong> Pode gerar disputas sobre o que foi acordado</li>
        <li><strong>Misturar terminologia:</strong> Chamar «fatura» de orçamento ou vice-versa causa confusão legal</li>
      </ul>

      <h2>Comparativo rápido</h2>
      <table>
        <thead>
          <tr><th>Documento</th><th>Vinculante?</th><th>Quando</th><th>Objetivo</th></tr>
        </thead>
        <tbody>
          <tr><td>Estimativa</td><td>Não</td><td>Antes, escopo vago</td><td>Custo aproximado</td></tr>
          <tr><td>Orçamento</td><td>Sim (após aceite)</td><td>Antes, escopo definido</td><td>Preço firme</td></tr>
          <tr><td>Fatura</td><td>Sim</td><td>Após trabalho</td><td>Pedir pagamento</td></tr>
        </tbody>
      </table>
      <p>Use <a href="/estimates">ferramentas de orçamento do Invoicemonk</a> para criar estimativas e orçamentos profissionais que se convertem em faturas com um clique.</p>
    `
  }
];

registerBlogPosts('pt', clusterPosts);
