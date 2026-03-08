import type { GlossaryTerm } from './glossaryTerms';
import { registerGlossaryTerms } from '@/utils/i18nData';

const glossaryTermsPT: GlossaryTerm[] = [
  // Faturamento
  {
    term: 'Fatura',
    slug: 'invoice',
    definition: 'Um documento comercial emitido por um vendedor a um comprador, detalhando produtos ou serviços fornecidos, quantidades, preços e condições de pagamento.',
    extendedDescription: 'Uma fatura serve como registro legal de uma transação e uma solicitação formal de pagamento. Faturas profissionais incluem elementos essenciais como números de fatura, datas, descrições detalhadas e informações fiscais. São cruciais para a gestão de fluxo de caixa, conformidade fiscal e manutenção de relações comerciais profissionais.',
    relatedTerms: ['credit-note', 'pro-forma-invoice', 'recurring-invoice', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['complete-guide-to-business-invoicing', '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners']
  },
  {
    term: 'Nota de Crédito',
    slug: 'credit-note',
    definition: 'Um documento emitido por um vendedor para reduzir o valor devido por um comprador, tipicamente usado para devoluções, cobranças excessivas ou correções de faturamento.',
    extendedDescription: 'Notas de crédito funcionam como faturas negativas, reduzindo o valor total devido pelo cliente. São essenciais para manter registros contábeis precisos quando ajustes são necessários. Uma nota de crédito deve referenciar a fatura original e indicar claramente o motivo do crédito.',
    relatedTerms: ['invoice', 'debit-note', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['credit-notes-how-and-when-to-use-them']
  },
  {
    term: 'Fatura Pro Forma',
    slug: 'pro-forma-invoice',
    definition: 'Uma fatura preliminar enviada antes da entrega de mercadorias ou prestação de serviços, descrevendo termos e custos estimados.',
    extendedDescription: 'Faturas pro forma são usadas como cotações ou estimativas e não são solicitações de pagamento. Ajudam os clientes a entender os custos esperados e são comumente usadas no comércio internacional para fins aduaneiros. Ao contrário das faturas regulares, podem ser modificadas antes da emissão da fatura final.',
    relatedTerms: ['invoice', 'estimate', 'quote'],
    category: 'invoicing',
    relatedArticles: ['proforma-invoice-vs-commercial-invoice']
  },
  {
    term: 'Fatura Recorrente',
    slug: 'recurring-invoice',
    definition: 'Uma fatura gerada automaticamente em intervalos regulares para serviços contínuos ou assinaturas.',
    extendedDescription: 'Faturas recorrentes economizam tempo para empresas com clientes em contrato ou serviços por assinatura. Podem ser configuradas para envio automático semanal, mensal, trimestral ou anual. A automação reduz a carga administrativa e garante faturamento consistente.',
    relatedTerms: ['invoice', 'retainer', 'subscription-billing'],
    category: 'invoicing',
    relatedArticles: ['recurring-invoices-automating-billing']
  },
  {
    term: 'Número da Fatura',
    slug: 'invoice-number',
    definition: 'Um identificador único atribuído a cada fatura para rastreamento, referência e fins contábeis.',
    extendedDescription: 'Sistemas de numeração de faturas ajudam a organizar registros, simplificam a reconciliação de pagamentos e atendem aos requisitos das autoridades fiscais. Formatos comuns incluem números sequenciais (001, 002), códigos baseados em data (2024-001) ou identificadores com prefixo do cliente (ABC-001). Números de fatura nunca devem ser reutilizados.',
    relatedTerms: ['invoice', 'purchase-order'],
    category: 'invoicing',
    relatedArticles: ['invoice-numbering-best-practices']
  },
  {
    term: 'Condições de Pagamento',
    slug: 'payment-terms',
    definition: 'Condições que especificam quando e como o pagamento é esperado, como data de vencimento, métodos aceitos e descontos por pagamento antecipado.',
    extendedDescription: 'Condições de pagamento comuns incluem Líquido 15, Líquido 30, Pagamento à Vista e 2/10 Líquido 30 (2% de desconto se pago em 10 dias). Condições claras definem expectativas, reduzem disputas e podem incentivar pagamentos mais rápidos. As condições devem ser acordadas antes do início do trabalho e claramente indicadas nas faturas.',
    relatedTerms: ['net-30', 'due-on-receipt', 'early-payment-discount'],
    category: 'payments',
    relatedArticles: ['how-to-write-invoice-payment-terms', 'understanding-payment-terms-guide']
  },
  {
    term: 'Líquido 30',
    slug: 'net-30',
    definition: 'Condição de pagamento indicando que o valor total da fatura é devido em 30 dias a partir da data da fatura.',
    extendedDescription: 'Líquido 30 é uma das condições de pagamento mais comuns nos negócios. Variações incluem Líquido 15, Líquido 60 e Líquido 90 para prazos mais curtos ou mais longos. O "líquido" refere-se ao valor total devido sem deduções.',
    relatedTerms: ['payment-terms', 'due-on-receipt', 'accounts-receivable'],
    category: 'payments'
  },
  {
    term: 'Pagamento à Vista',
    slug: 'due-on-receipt',
    definition: 'Condição de pagamento que exige pagamento imediato ao receber a fatura.',
    extendedDescription: 'A condição de pagamento à vista solicita pagamento assim que a fatura é recebida, embora na prática isso geralmente signifique dentro de alguns dias. Essas condições são comuns para novas relações com clientes, valores menores ou quando o vendedor precisa de fluxo de caixa imediato.',
    relatedTerms: ['payment-terms', 'net-30', 'cash-on-delivery'],
    category: 'payments'
  },
  {
    term: 'Desconto por Pagamento Antecipado',
    slug: 'early-payment-discount',
    definition: 'Uma redução percentual oferecida a clientes que pagam antes da data de vencimento padrão.',
    extendedDescription: 'Comumente expresso como "2/10 Líquido 30", significando 2% de desconto se pago em 10 dias, caso contrário valor total devido em 30 dias. Descontos por pagamento antecipado melhoram o fluxo de caixa, mas devem ser calculados com cuidado — um desconto de 2% por 20 dias de antecipação equivale a aproximadamente 36% ao ano.',
    relatedTerms: ['payment-terms', 'cash-flow', 'accounts-receivable'],
    category: 'payments',
    relatedArticles: ['early-payment-discounts-do-they-work']
  },
  // Contabilidade
  {
    term: 'Contas a Receber',
    slug: 'accounts-receivable',
    definition: 'Dinheiro devido a uma empresa por clientes por bens ou serviços entregues mas ainda não pagos.',
    extendedDescription: 'Contas a receber aparecem como ativo no balanço patrimonial. A gestão eficaz inclui faturamento oportuno, condições de pagamento claras, acompanhamento sistemático de contas atrasadas e análise de vencimento para identificar problemas de cobrança.',
    relatedTerms: ['accounts-payable', 'invoice', 'cash-flow', 'aging-report'],
    category: 'accounting',
    relatedArticles: ['ultimate-guide-getting-paid-faster']
  },
  {
    term: 'Contas a Pagar',
    slug: 'accounts-payable',
    definition: 'Dinheiro que uma empresa deve a fornecedores por bens ou serviços recebidos mas ainda não pagos.',
    extendedDescription: 'Contas a pagar é um passivo no balanço patrimonial representando obrigações de curto prazo. A gestão eficaz envolve acompanhar datas de vencimento, aproveitar descontos por pagamento antecipado e manter boas relações com fornecedores otimizando o fluxo de caixa.',
    relatedTerms: ['accounts-receivable', 'vendor', 'cash-flow'],
    category: 'accounting'
  },
  {
    term: 'Fluxo de Caixa',
    slug: 'cash-flow',
    definition: 'O movimento de dinheiro entrando e saindo de uma empresa, medindo liquidez e capacidade de pagar obrigações.',
    extendedDescription: 'Fluxo de caixa positivo significa mais dinheiro entrando do que saindo. Mesmo empresas lucrativas podem falir com má gestão de fluxo de caixa. Estratégias-chave incluem faturamento oportuno, cobrança eficiente, gestão de condições de pagamento com fornecedores e manutenção de reservas de caixa.',
    relatedTerms: ['accounts-receivable', 'accounts-payable', 'working-capital'],
    category: 'accounting',
    relatedArticles: ['cash-flow-forecasting-for-freelancers']
  },
  {
    term: 'Plano de Contas',
    slug: 'chart-of-accounts',
    definition: 'Uma listagem completa de todas as contas usadas por uma empresa para categorizar transações financeiras.',
    extendedDescription: 'O plano de contas organiza transações em categorias como ativos, passivos, patrimônio líquido, receitas e despesas. Um plano de contas bem estruturado permite relatórios financeiros precisos, preparação fiscal e análise empresarial.',
    relatedTerms: ['general-ledger', 'double-entry-bookkeeping', 'financial-statements'],
    category: 'accounting',
    relatedArticles: ['chart-of-accounts-setup-guide']
  },
  {
    term: 'Margem de Lucro',
    slug: 'profit-margin',
    definition: 'A porcentagem da receita restante após a dedução dos custos, indicando a lucratividade do negócio.',
    extendedDescription: 'A margem de lucro bruta mede a receita menos o custo dos produtos vendidos. A margem de lucro líquida considera todas as despesas incluindo overhead, impostos e juros. Margens mais altas indicam melhor eficiência e poder de precificação. Os benchmarks variam significativamente por setor.',
    relatedTerms: ['gross-profit', 'net-profit', 'revenue'],
    category: 'accounting',
    relatedArticles: ['profit-margins-how-to-calculate-and-improve']
  },
  {
    term: 'Contabilidade de Caixa',
    slug: 'cash-basis-accounting',
    definition: 'Um método contábil que registra receitas quando o dinheiro é recebido e despesas quando o dinheiro é pago.',
    extendedDescription: 'A contabilidade de caixa é mais simples que a contabilidade por competência e é comumente usada por pequenas empresas e autônomos. Fornece uma imagem clara do dinheiro disponível, mas pode não refletir com precisão a posição financeira de longo prazo.',
    relatedTerms: ['accrual-accounting', 'revenue-recognition'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  {
    term: 'Contabilidade por Competência',
    slug: 'accrual-accounting',
    definition: 'Um método contábil que registra receitas quando ganhas e despesas quando incorridas, independentemente de quando o dinheiro muda de mãos.',
    extendedDescription: 'A contabilidade por competência fornece uma imagem mais precisa da saúde financeira de uma empresa, associando receitas com despesas relacionadas. É exigida para empresas maiores e aquelas que buscam investimento externo.',
    relatedTerms: ['cash-basis-accounting', 'revenue-recognition', 'matching-principle'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  // Impostos
  {
    term: 'IVA (Imposto sobre Valor Acrescentado)',
    slug: 'vat',
    definition: 'Um imposto sobre consumo adicionado em cada estágio de produção ou distribuição, pago pelo consumidor final.',
    extendedDescription: 'O IVA é usado em mais de 160 países incluindo UE, Reino Unido, Nigéria e Austrália (como GST). Empresas registradas coletam IVA nas vendas e podem recuperar o IVA pago em compras comerciais. As taxas e limites variam por país.',
    relatedTerms: ['sales-tax', 'gst', 'tax-invoice'],
    category: 'tax',
    relatedArticles: ['hmrc-invoicing-rules-uk-mtd-compliance']
  },
  {
    term: 'Fatura Fiscal',
    slug: 'tax-invoice',
    definition: 'Uma fatura que inclui informações fiscais específicas exigidas pelas autoridades fiscais para fins de IVA/GST.',
    extendedDescription: 'Faturas fiscais devem conter elementos como números de registro fiscal, valores de imposto e, em algumas jurisdições, textos específicos. Permitem que empresas solicitem créditos de imposto sobre insumos e são essenciais para conformidade fiscal.',
    relatedTerms: ['vat', 'invoice', 'input-tax-credit'],
    category: 'tax'
  },
  {
    term: 'Dedução Fiscal',
    slug: 'tax-deduction',
    definition: 'Uma despesa empresarial que pode ser subtraída da renda tributável, reduzindo o valor do imposto devido.',
    extendedDescription: 'Deduções comuns incluem despesas de escritório, equipamentos, viagens, serviços profissionais e seguros. Documentação adequada é essencial — guarde recibos e registros pelo período de retenção exigido. Consulte um contador para regras específicas da sua jurisdição.',
    relatedTerms: ['taxable-income', 'business-expense', 'depreciation'],
    category: 'tax',
    relatedArticles: ['small-business-tax-deductions-guide']
  },
  {
    term: 'Imposto Retido na Fonte',
    slug: 'withholding-tax',
    definition: 'Imposto deduzido na fonte sobre rendimentos, dividendos ou pagamentos a entidades estrangeiras.',
    extendedDescription: 'Os requisitos de retenção na fonte variam por país e tipo de pagamento. Em algumas jurisdições, as empresas devem reter imposto sobre pagamentos a prestadores acima de determinados limites. O valor retido é pago diretamente às autoridades fiscais em nome do beneficiário.',
    relatedTerms: ['income-tax', 'tax-compliance'],
    category: 'tax'
  },
  // Negócios
  {
    term: 'Orçamento',
    slug: 'estimate',
    definition: 'Uma aproximação de custos para um projeto ou serviço, não vinculante legalmente e sujeita a alterações.',
    extendedDescription: 'Orçamentos dão aos clientes uma ideia dos custos esperados antes do compromisso. Diferem de cotações (que são tipicamente fixas) e devem indicar claramente premissas e condições que podem afetar o preço final. Converter orçamentos aceitos em faturas simplifica o faturamento.',
    relatedTerms: ['quote', 'proposal', 'pro-forma-invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Cotação',
    slug: 'quote',
    definition: 'Uma oferta de preço fixo para bens ou serviços específicos, tipicamente válida por um período determinado.',
    extendedDescription: 'Ao contrário dos orçamentos, cotações são geralmente consideradas vinculantes uma vez aceitas. Devem especificar exatamente o que está incluído, o período de validade, condições de pagamento e quaisquer condições. Cotações profissionais constroem confiança do cliente.',
    relatedTerms: ['estimate', 'proposal', 'invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Proposta Comercial',
    slug: 'proposal',
    definition: 'Um documento detalhado apresentando soluções, abordagem, cronograma e preços para conquistar novos negócios.',
    extendedDescription: 'Propostas comerciais vão além da precificação para demonstrar compreensão das necessidades do cliente, metodologia proposta, experiência relevante e resultados esperados. Propostas eficazes são personalizadas, profissionais e articulam claramente o valor.',
    relatedTerms: ['estimate', 'quote', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['how-to-write-winning-business-proposal']
  },
  {
    term: 'Contrato de Prestação Contínua',
    slug: 'retainer',
    definition: 'Uma taxa contínua paga para garantir serviços regulares, frequentemente cobrada mensalmente por um número definido de horas ou entregas.',
    extendedDescription: 'Contratos de prestação contínua fornecem renda previsível para prestadores e acesso prioritário para clientes. Tipicamente especificam horas/entregas mínimas, políticas de acúmulo e limites de escopo. Contratos mensais são comuns em consultoria, jurídico e serviços criativos.',
    relatedTerms: ['recurring-invoice', 'service-agreement', 'scope-of-work'],
    category: 'business'
  },
  {
    term: 'Escopo do Trabalho',
    slug: 'scope-of-work',
    definition: 'Um documento que define as tarefas específicas, entregas, cronograma e limites de um projeto ou engajamento.',
    extendedDescription: 'Um escopo de trabalho claro previne mal-entendidos e expansão do escopo. Deve detalhar o que está e não está incluído, marcos, critérios de aceitação e como mudanças serão tratadas. Ambas as partes devem concordar com o escopo antes do início do trabalho.',
    relatedTerms: ['proposal', 'contract', 'deliverable'],
    category: 'business',
    relatedArticles: ['freelance-contract-templates']
  },
  {
    term: 'Ordem de Compra',
    slug: 'purchase-order',
    definition: 'Um documento comercial emitido por um comprador a um vendedor, autorizando uma transação de compra.',
    extendedDescription: 'Ordens de compra formalizam a intenção de compra e criam obrigação contratual quando aceitas. Especificam produtos/serviços, quantidades, preços e condições de entrega. Em transações B2B, faturas frequentemente referenciam o número da ordem de compra correspondente.',
    relatedTerms: ['invoice', 'vendor', 'procurement'],
    category: 'business'
  },
  // Freelancing
  {
    term: 'Horas Faturáveis',
    slug: 'billable-hours',
    definition: 'Tempo gasto em trabalho para o cliente que pode ser cobrado, em oposição a tempo administrativo ou não faturável.',
    extendedDescription: 'O rastreamento preciso de horas faturáveis é essencial para freelancers e consultores. Tipicamente, apenas 60-70% do tempo total de trabalho é faturável devido a administração, marketing e desenvolvimento de negócios. As tarifas devem considerar essa realidade para manter a lucratividade.',
    relatedTerms: ['time-tracking', 'hourly-rate', 'utilization-rate'],
    category: 'freelancing',
    relatedArticles: ['freelance-time-tracking-guide']
  },
  {
    term: 'Expansão do Escopo',
    slug: 'scope-creep',
    definition: 'A expansão gradual de um projeto além de seus limites originais, frequentemente sem ajustes correspondentes de orçamento ou cronograma.',
    extendedDescription: 'A expansão do escopo corrói a lucratividade e prejudica as relações com clientes. Previna com definições claras de escopo, processos de solicitação de mudança e revisões regulares do projeto. Quando trabalho adicional é solicitado, documente e discuta implicações orçamentárias antes de prosseguir.',
    relatedTerms: ['scope-of-work', 'change-order', 'project-management'],
    category: 'freelancing'
  },
  {
    term: 'Pagamento por Marco',
    slug: 'milestone-payment',
    definition: 'Uma estrutura de pagamento onde porções do valor total são pagas ao completar fases definidas do projeto.',
    extendedDescription: 'Pagamentos por marco reduzem o risco para ambas as partes vinculando pagamentos a entregas. Estruturas comuns incluem 50% antecipado/50% na conclusão, ou terços (33% início, 33% meio, 34% conclusão). Defina marcos claros e mensuráveis em seu contrato.',
    relatedTerms: ['payment-terms', 'project-management', 'deliverable'],
    category: 'freelancing'
  },
  // Gestão de Despesas
  {
    term: 'Relatório de Despesas',
    slug: 'expense-report',
    definition: 'Um documento listando despesas empresariais incorridas por um funcionário ou prestador, tipicamente submetido para reembolso ou fins fiscais.',
    extendedDescription: 'Relatórios de despesas tipicamente incluem data, fornecedor, valor, categoria e documentação de recibos. Servem tanto para rastreamento interno quanto para conformidade fiscal. Software moderno automatiza a criação de relatórios importando transações e anexando recibos digitalizados.',
    relatedTerms: ['tax-deduction', 'accounts-payable', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Digitalização de Recibos (OCR)',
    slug: 'receipt-scanning',
    definition: 'O processo de usar tecnologia de Reconhecimento Óptico de Caracteres para digitalizar e extrair dados de recibos em papel.',
    extendedDescription: 'A tecnologia OCR lê texto impresso em recibos e converte em dados digitais estruturados — nomes de fornecedores, datas, valores e informações fiscais são extraídos automaticamente. Isso elimina entrada manual de dados, reduz erros e cria registros digitais pesquisáveis aceitos pelas autoridades fiscais.',
    relatedTerms: ['expense-report', 'tax-deduction'],
    category: 'accounting',
    relatedArticles: ['receipt-scanning-apps-comparison', 'digital-receipt-management-guide']
  },
  {
    term: 'Categoria de Despesa',
    slug: 'expense-category',
    definition: 'Um agrupamento de classificação para despesas empresariais que mapeia para o plano de contas e linhas de declaração fiscal.',
    extendedDescription: 'A categorização correta de despesas é essencial para relatórios financeiros precisos e declaração fiscal. Categorias comuns incluem material de escritório, viagens, serviços profissionais, software/assinaturas e marketing.',
    relatedTerms: ['chart-of-accounts', 'tax-deduction', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['business-expense-categories-guide']
  },
  {
    term: 'Despesa Reembolsável',
    slug: 'reimbursable-expense',
    definition: 'Uma despesa empresarial paga por um funcionário ou prestador que é elegível para reembolso pelo cliente ou empregador.',
    extendedDescription: 'Despesas reembolsáveis diferem de despesas dedutíveis. Enquanto despesas dedutíveis reduzem sua renda tributável, despesas reembolsáveis são custos pagos em nome de um cliente que podem ser cobrados de volta. Exemplos comuns incluem despesas de viagem, materiais comprados para um projeto e licenças de software.',
    relatedTerms: ['expense-report', 'invoice', 'accounts-receivable'],
    category: 'accounting',
    relatedArticles: ['expense-reports-freelancers']
  },
  {
    term: 'Acompanhamento de Despesas',
    slug: 'expense-tracking',
    definition: 'O processo sistemático de registro, categorização e monitoramento de todas as despesas empresariais.',
    extendedDescription: 'O acompanhamento eficaz de despesas envolve capturar cada compra empresarial em tempo real, categorizá-la corretamente e manter documentação de suporte como recibos. Métodos variam de planilhas simples a software automatizado sincronizado com contas bancárias.',
    relatedTerms: ['expense-category', 'receipt-scanning', 'cash-flow'],
    category: 'accounting',
    relatedArticles: ['expense-tracking-methods-small-business']
  },
  {
    term: 'Recibo Digital',
    slug: 'digital-receipt',
    definition: 'Uma versão eletrônica de um recibo de compra, recebida digitalmente ou criada pela digitalização de um recibo em papel.',
    extendedDescription: 'Recibos digitais são aceitos por praticamente todas as autoridades fiscais do mundo como prova de compra válida. Oferecem vantagens sobre o papel: não desbotam, são pesquisáveis instantaneamente, não ocupam espaço físico e podem ser automaticamente associados a registros de despesas.',
    relatedTerms: ['receipt-scanning', 'expense-tracking', 'expense-report'],
    category: 'accounting',
    relatedArticles: ['digital-receipt-management-guide']
  },
  // Gestão de Clientes
  {
    term: 'Onboarding de Cliente',
    slug: 'client-onboarding',
    definition: 'O processo estruturado de recepção e integração de um novo cliente no seu fluxo de trabalho.',
    extendedDescription: 'Um processo de onboarding profissional define expectativas, constrói confiança e reduz falhas de comunicação desde o primeiro dia. Elementos-chave incluem pacote de boas-vindas, questionário do projeto, contrato assinado, configuração de condições de pagamento, reunião de kickoff e cronograma compartilhado.',
    relatedTerms: ['scope-of-work', 'proposal', 'retainer'],
    category: 'business',
    relatedArticles: ['client-onboarding-process']
  },
  {
    term: 'Retenção de Clientes',
    slug: 'client-retention',
    definition: 'As estratégias e práticas usadas para manter relacionamentos contínuos com clientes existentes e incentivar negócios recorrentes.',
    extendedDescription: 'A retenção de clientes é tipicamente 5-7x mais econômica que a aquisição de novos clientes. Estratégias-chave incluem comunicação consistente, superar expectativas, oferecer pacotes de contrato contínuo, coletar feedback por pesquisas NPS e facilitar o trabalho dos clientes com ferramentas como portais e faturamento automatizado.',
    relatedTerms: ['retainer', 'client-onboarding', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['client-retention-strategies']
  },
  {
    term: 'CRM (Gestão de Relacionamento com Cliente)',
    slug: 'crm',
    definition: 'Um sistema ou software para gerenciar interações com clientes atuais e potenciais, rastrear comunicações e organizar dados de clientes.',
    extendedDescription: 'Sistemas CRM variam de planilhas simples a software empresarial como Salesforce. Para freelancers e pequenas empresas, um CRM leve que rastreia dados de contato, histórico de projetos, registros de comunicação e status de pagamento geralmente é suficiente. Muitas plataformas de faturamento incluem recursos básicos de CRM.',
    relatedTerms: ['client-onboarding', 'client-retention'],
    category: 'business',
    relatedArticles: ['crm-for-freelancers-small-business']
  },
  {
    term: 'Comunicação com Cliente',
    slug: 'client-communication',
    definition: 'A troca estruturada de informações entre um prestador de serviços e seu cliente durante um projeto ou engajamento.',
    extendedDescription: 'Comunicação eficaz com o cliente inclui atualizações regulares de status, resposta clara a solicitações de mudança de escopo, lembretes profissionais de pagamento e relato proativo de problemas. O uso de modelos para comunicações comuns economiza tempo mantendo a consistência.',
    relatedTerms: ['client-onboarding', 'scope-of-work', 'scope-creep'],
    category: 'business',
    relatedArticles: ['client-communication-templates']
  }
];

registerGlossaryTerms('pt', glossaryTermsPT);
