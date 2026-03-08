import type { HelpGuide } from './helpGuides';
import { registerHelpGuides } from '@/utils/i18nData';

const helpGuidesPT: HelpGuide[] = [
  // ─── Guia 1: Primeiros Passos ───
  {
    slug: 'getting-started',
    title: 'Primeiros passos com o Invoicemonk — Sua primeira fatura em 5 minutos',
    description: 'Configure sua conta, complete seu perfil empresarial e emita sua primeira fatura em conformidade.',
    icon: 'Rocket',
    category: 'getting-started',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Criar sua conta', text: 'Acesse app.invoicemonk.com, clique em "Começar Grátis", preencha seus dados e verifique seu e-mail.' },
      { name: 'Configurar perfil empresarial', text: 'Insira o nome da empresa, razão social, país, CNPJ/CPF, logotipo, endereço e dados fiscais, se aplicável.' },
      { name: 'Escolher seu plano', text: 'Comece com o plano Starter gratuito ou faça upgrade para Starter Pago, Professional ou Business para mais recursos.' },
      { name: 'Configurar métodos de pagamento', text: 'Adicione sua conta bancária ou dados de pagamento para que os clientes saibam como pagar.' },
    ],
    relatedGuides: ['managing-clients', 'creating-invoices', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com/signup',
    faq: [
      { question: 'O Invoicemonk é gratuito?', answer: 'Sim, o plano Starter é totalmente gratuito. Você pode criar faturas, gerenciar clientes e acompanhar despesas básicas sem custo. Faça upgrade para recursos avançados como relatórios, gestão de equipe e personalização de marca.' },
      { question: 'Preciso de CNPJ para usar o Invoicemonk?', answer: 'Não é estritamente necessário para criar uma conta, mas adicionar seu número de identificação fiscal garante que suas faturas estejam em conformidade com as regulamentações locais.' },
      { question: 'Como completo meu perfil empresarial em 100%?', answer: 'Preencha todos os campos: nome da empresa, razão social, CNPJ/CPF, número de inscrição estadual (se aplicável), logotipo, endereço completo, e-mail de contato e telefone. O Invoicemonk mostra sua porcentagem de conclusão e destaca os campos faltantes.' },
    ],
    content: `
      <h2>Passo 1: Criar sua conta</h2>
      <p>Começar com o Invoicemonk leva menos de dois minutos. Acesse <a href="https://app.invoicemonk.com" target="_blank" rel="noopener noreferrer">app.invoicemonk.com</a> e clique em <strong>"Começar Grátis"</strong>.</p>
      <ul>
        <li>Insira seu nome completo, endereço de e-mail e uma senha segura</li>
        <li>Verifique seu endereço de e-mail clicando no link enviado para sua caixa de entrada</li>
        <li>A verificação de e-mail é necessária antes de emitir faturas</li>
      </ul>

      <h2>Passo 2: Configurar seu perfil empresarial</h2>
      <p>Após fazer login, você será solicitado a criar sua empresa. Essas informações aparecem em todas as suas faturas e garantem a conformidade.</p>
      <ul>
        <li>Insira o <strong>nome da empresa</strong> e a <strong>razão social</strong></li>
        <li>Selecione seu <strong>país/jurisdição</strong></li>
        <li>Adicione seu <strong>número de identificação fiscal (CNPJ/CPF)</strong></li>
        <li>Faça upload do <strong>logotipo da empresa</strong> (aparece em todas as faturas)</li>
        <li>Adicione endereço comercial, e-mail de contato e telefone</li>
        <li>Se registrado para impostos, ative a opção e insira seu número de inscrição</li>
      </ul>

      <h2>Passo 3: Escolher seu plano</h2>
      <p>O Invoicemonk oferece um plano Starter gratuito para começar. Conforme sua empresa cresce, faça upgrade para mais recursos:</p>
      <ul>
        <li><strong>Starter (Gratuito)</strong> — Faturamento básico e gestão de clientes</li>
        <li><strong>Starter Pago</strong> — Mais faturas e acompanhamento de despesas</li>
        <li><strong>Professional</strong> — Relatórios, gestão de equipe, modelos personalizados</li>
        <li><strong>Business</strong> — Suite completa com logs de auditoria, multi-moeda e suporte prioritário</li>
      </ul>
      <p>Os preços se ajustam por região. Visite nossa <a href="__LANG__/pricing">página de preços</a> para todos os detalhes.</p>

      <h2>Passo 4: Configurar métodos de pagamento</h2>
      <p>Vá para <strong>Configurações da Empresa</strong> e adicione seus dados de pagamento (conta bancária, etc.). Eles aparecem nas suas faturas para que os clientes saibam exatamente como pagar.</p>

      <div class="callout">
        <strong>Dica:</strong> Complete seu perfil empresarial em 100% — isso garante que todas as suas faturas estejam em total conformidade com as regulamentações locais. O Invoicemonk mostra sua porcentagem de conclusão e destaca campos faltantes.
      </div>
    `,
  },

  // ─── Guia 2: Gestão de Clientes ───
  {
    slug: 'managing-clients',
    title: 'Construir e gerenciar sua base de clientes',
    description: 'Adicione clientes, armazene seus dados e crie faturas rapidamente sem reinserir informações.',
    icon: 'Users',
    category: 'getting-started',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar para Clientes', text: 'Clique em "Clientes" na barra lateral para acessar sua base de clientes.' },
      { name: 'Adicionar novo cliente', text: 'Clique em "Adicionar Cliente", escolha Empresa ou Pessoa Física e insira nome, e-mail, telefone, país e identificação fiscal.' },
      { name: 'Adicionar dados de endereço', text: 'Expanda a seção Endereço para adicionar o endereço comercial completo para conformidade.' },
      { name: 'Pesquisar e gerenciar', text: 'Use a barra de pesquisa para encontrar clientes por nome ou e-mail. Clique em qualquer cartão de cliente para ver detalhes e histórico de faturas.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'notifications-reminders'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Por que a identificação fiscal do cliente é necessária para faturas B2B?', answer: 'Para transações B2B, as regulamentações fiscais exigem o número de identificação fiscal do cliente na fatura. O Invoicemonk avisará se você tentar emitir uma fatura B2B sem ele.' },
      { question: 'Posso importar clientes de uma planilha?', answer: 'Atualmente, os clientes são adicionados individualmente pelo painel. A importação em massa via CSV está planejada para uma versão futura.' },
    ],
    content: `
      <h2>Adicionar um novo cliente</h2>
      <p>Antes de emitir faturas, você precisa adicionar seus clientes. O Invoicemonk armazena todos os dados dos clientes para que você possa criar faturas rapidamente sem reinserir informações.</p>
      <ul>
        <li>Navegue até <strong>Clientes</strong> na barra lateral</li>
        <li>Clique em <strong>Adicionar Cliente</strong></li>
        <li>Escolha o tipo de cliente: <strong>Empresa</strong> ou <strong>Pessoa Física</strong></li>
        <li>Insira nome, e-mail e telefone do cliente</li>
        <li>Selecione o país/localização do cliente</li>
        <li>Para conformidade, adicione a <strong>identificação fiscal</strong> — especialmente importante para transações B2B</li>
        <li>Para empresas, opcionalmente adicione o <strong>número de registro</strong> e pessoa de contato</li>
        <li>Expanda a seção <strong>Endereço</strong> para adicionar o endereço completo</li>
      </ul>

      <h2>Pesquisar e gerenciar clientes</h2>
      <ul>
        <li>Use a <strong>barra de pesquisa</strong> para encontrar clientes rapidamente por nome ou e-mail</li>
        <li>Clique em qualquer cartão de cliente para ver detalhes, histórico de faturas e valor total faturado</li>
        <li>Edite os dados do cliente a qualquer momento na página de detalhes</li>
      </ul>

      <div class="callout">
        <strong>Nota de conformidade:</strong> Para transações B2B, a identificação fiscal do cliente é obrigatória para conformidade. O Invoicemonk avisará se você tentar emitir uma fatura B2B sem a identificação fiscal do cliente.
      </div>
    `,
  },

  // ─── Guia 3: Criação de Faturas ───
  {
    slug: 'creating-invoices',
    title: 'Criar faturas profissionais em conformidade',
    description: 'Crie, emita, envie e baixe faturas verificadas criptograficamente com trilha de auditoria completa.',
    icon: 'FileText',
    category: 'core-features',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Iniciar nova fatura', text: 'Clique em "Criar Fatura" no painel ou navegue até Faturas → Nova Fatura.' },
      { name: 'Selecionar cliente e modelo', text: 'Escolha um cliente da sua base e selecione um modelo de fatura.' },
      { name: 'Adicionar itens', text: 'Insira descrições, quantidades e preços unitários. O imposto é calculado automaticamente para empresas registradas.' },
      { name: 'Salvar ou emitir', text: 'Salve como Rascunho para editar depois, ou Emita para bloquear a fatura, atribuir um número e gerar um código QR de verificação.' },
      { name: 'Enviar ao cliente', text: 'Clique em Enviar para enviar a fatura por e-mail. O cliente recebe um link para visualizá-la online.' },
    ],
    relatedGuides: ['managing-clients', 'payments-receipts', 'invoice-verification', 'credit-notes'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Posso editar uma fatura após emiti-la?', answer: 'Não. Faturas emitidas são bloqueadas para manter a integridade da auditoria. Se precisar fazer alterações, cancele a fatura e crie uma nova, ou emita uma nota de crédito para ajustes.' },
      { question: 'Quais status de fatura estão disponíveis?', answer: 'Rascunho, Emitida, Enviada, Visualizada, Paga, Cancelada e Creditada. Cada status é rastreado com carimbos de data/hora na trilha de auditoria.' },
      { question: 'O imposto é calculado automaticamente?', answer: 'Sim, para empresas registradas, a alíquota aplicável é automaticamente calculada. Você pode marcar itens individuais como isentos, se aplicável.' },
    ],
    content: `
      <h2>Criar uma nova fatura</h2>
      <p>O fluxo de faturamento é o coração do Invoicemonk. Cada fatura é verificada criptograficamente e inclui uma trilha de auditoria imutável.</p>
      <ul>
        <li>Clique em <strong>Criar Fatura</strong> no painel ou navegue até <strong>Faturas → Nova Fatura</strong></li>
        <li>Selecione um <strong>cliente</strong> da sua base (ou adicione um novo inline)</li>
        <li>Escolha um <strong>modelo de fatura</strong> (plano Professional e superiores)</li>
        <li>Defina a <strong>data de emissão</strong> e a <strong>data de vencimento</strong></li>
      </ul>

      <h2>Adicionar itens</h2>
      <ul>
        <li>Insira uma <strong>descrição</strong> para cada item</li>
        <li>Defina a <strong>quantidade</strong> e o <strong>preço unitário</strong></li>
        <li>A alíquota de imposto é calculada automaticamente para empresas registradas</li>
        <li>Marque itens individuais como <strong>isentos</strong>, se aplicável</li>
        <li>Adicione notas, termos e um resumo opcionais</li>
        <li>Selecione o <strong>método de pagamento</strong> a exibir na fatura</li>
      </ul>

      <h2>Salvar vs. Emitir</h2>
      <ul>
        <li><strong>Salvar como Rascunho:</strong> Salva a fatura sem atribuir um número. Você pode editá-la depois.</li>
        <li><strong>Emitir:</strong> Bloqueia a fatura, atribui um número oficial, cria um hash criptográfico e gera um código QR de verificação. Faturas emitidas não podem ser editadas.</li>
      </ul>

      <h2>Status da fatura</h2>
      <ul>
        <li><strong>Rascunho</strong> — Salva, mas ainda não emitida</li>
        <li><strong>Emitida</strong> — Oficialmente emitida com número e código de verificação</li>
        <li><strong>Enviada</strong> — E-mail entregue ao cliente</li>
        <li><strong>Visualizada</strong> — Cliente abriu o link da fatura</li>
        <li><strong>Paga</strong> — Pagamento integral registrado</li>
        <li><strong>Cancelada</strong> — Cancelada (com motivo registrado)</li>
        <li><strong>Creditada</strong> — Uma nota de crédito foi emitida para esta fatura</li>
      </ul>

      <h2>Enviar faturas</h2>
      <p>Na página de detalhes da fatura, clique em <strong>Enviar</strong> para enviar a fatura por e-mail ao seu cliente. O cliente recebe um e-mail profissional com um link para visualizar a fatura online. Você será notificado quando o cliente visualizá-la.</p>

      <h2>Baixar PDFs</h2>
      <p>Clique em <strong>Baixar PDF</strong> em qualquer fatura emitida para obter um PDF profissional com seu logotipo, código QR e todos os detalhes de conformidade.</p>
    `,
  },

  // ─── Guia 4: Pagamentos e Recibos ───
  {
    slug: 'payments-receipts',
    title: 'Registrar pagamentos e gerar recibos',
    description: 'Registre pagamentos totais ou parciais e gere automaticamente recibos verificados criptograficamente.',
    icon: 'CreditCard',
    category: 'core-features',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Abrir a fatura', text: 'Navegue até a página de Faturas e abra a fatura para a qual deseja registrar o pagamento.' },
      { name: 'Registrar pagamento', text: 'Clique em "Registrar Pagamento", insira o valor, data, método de pagamento e opcionalmente faça upload de comprovante.' },
      { name: 'Gerenciar pagamentos parciais', text: 'Registre múltiplos pagamentos parciais para uma única fatura. O status muda para "Paga" somente quando o valor total é recebido.' },
      { name: 'Ver e compartilhar recibos', text: 'Navegue até Recibos para ver todos os recibos gerados. Baixe PDFs ou compartilhe o link de verificação.' },
    ],
    relatedGuides: ['creating-invoices', 'invoice-verification', 'reports-exports'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Os recibos são gerados automaticamente?', answer: 'Sim. Cada vez que você registra um pagamento, um recibo oficial é gerado automaticamente com número único, ID de verificação e todos os detalhes do pagamento.' },
      { question: 'Posso registrar pagamentos parciais?', answer: 'Sim. Você pode registrar múltiplos pagamentos parciais para uma única fatura. A fatura mostra o total acumulado e só atualiza para "Paga" quando o valor total é recebido.' },
    ],
    content: `
      <h2>Registrar um pagamento</h2>
      <p>Quando seu cliente paga, registrar o pagamento no Invoicemonk gera automaticamente um recibo imutável com verificação criptográfica.</p>
      <ul>
        <li>Abra a fatura na página de <strong>Faturas</strong></li>
        <li>Clique em <strong>Registrar Pagamento</strong></li>
        <li>Insira o valor, data e método de pagamento</li>
        <li>Opcionalmente faça upload de comprovante de pagamento (screenshot de transferência, etc.)</li>
        <li>Clique em <strong>Registrar</strong> — o status da fatura muda para "Paga" se totalmente paga</li>
      </ul>

      <h2>Pagamentos parciais</h2>
      <p>Você pode registrar múltiplos pagamentos parciais para uma única fatura. A fatura mostra o total acumulado de pagamentos recebidos vs. o valor devido. O status muda para "Paga" somente quando o valor total é recebido.</p>

      <h2>Recibos automáticos</h2>
      <ul>
        <li>Cada pagamento gera automaticamente um recibo oficial</li>
        <li>Os recibos incluem número único, ID de verificação e todos os detalhes do pagamento</li>
        <li>Navegue até <strong>Recibos</strong> para ver todos os recibos gerados</li>
        <li>Baixe PDFs de recibos ou compartilhe o link de verificação com clientes</li>
      </ul>

      <h2>Verificação de recibos</h2>
      <p>Cada recibo possui um link público de verificação que qualquer pessoa pode usar para confirmar sua autenticidade. Compartilhe o link ou permita que os clientes escaneiem o código QR no PDF.</p>
    `,
  },

  // ─── Guia 5: Verificação de Faturas ───
  {
    slug: 'invoice-verification',
    title: 'Verificação por QR Code — Comprovando a autenticidade da fatura',
    description: 'Entenda como a verificação criptográfica e os códigos QR comprovam a autenticidade dos documentos.',
    icon: 'Shield',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Emitir uma fatura', text: 'Ao emitir uma fatura, o Invoicemonk cria automaticamente um hash criptográfico e gera um ID de verificação único e código QR.' },
      { name: 'Compartilhar com confiança', text: 'Envie a fatura ao seu cliente. O código QR está incorporado no PDF e na visualização online.' },
      { name: 'Verificar autenticidade', text: 'Qualquer pessoa pode escanear o código QR ou visitar a URL de verificação para confirmar que o documento é genuíno e não foi alterado.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: '/compliance',
    faq: [
      { question: 'Qualquer pessoa pode verificar minhas faturas?', answer: 'Sim. A página de verificação é pública. Qualquer pessoa com o código QR ou URL de verificação — clientes, auditores, reguladores — pode confirmar independentemente a autenticidade do documento.' },
      { question: 'O que a página de verificação mostra?', answer: 'A página de verificação exibe o status do documento, valores, datas e confirma que os dados correspondem ao hash criptográfico original, provando que a fatura não foi adulterada.' },
    ],
    content: `
      <h2>Como funciona a verificação</h2>
      <p>Cada fatura e recibo emitido no Invoicemonk possui um ID de verificação único e código QR. Isso permite que qualquer pessoa — seu cliente, um auditor ou um regulador — verifique independentemente a autenticidade do documento.</p>
      <ul>
        <li>Quando uma fatura é emitida, o Invoicemonk cria um <strong>hash criptográfico</strong> de todos os dados da fatura</li>
        <li>Um <strong>ID de verificação único</strong> é atribuído e um <strong>código QR</strong> é gerado</li>
        <li>O código QR direciona para uma página pública de verificação mostrando os detalhes da fatura</li>
        <li>Qualquer pessoa que escaneie o código QR ou visite a URL de verificação pode confirmar que a fatura é genuína e não foi adulterada</li>
      </ul>

      <h2>Verificar uma fatura</h2>
      <ul>
        <li>Escaneie o <strong>código QR</strong> em qualquer fatura ou recibo do Invoicemonk</li>
        <li>Ou visite a <strong>URL de verificação</strong> diretamente</li>
        <li>A página de verificação mostra o status do documento, valores, datas e confirmação de que os dados correspondem</li>
      </ul>
    `,
  },

  // ─── Guia 6: Notas de Crédito ───
  {
    slug: 'credit-notes',
    title: 'Emitir notas de crédito para faturas canceladas ou ajustadas',
    description: 'Reverta ou ajuste faturas emitidas mantendo uma trilha de auditoria completa.',
    icon: 'RotateCcw',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar até a fatura original', text: 'Abra a fatura que precisa ser revertida ou ajustada.' },
      { name: 'Cancelar a fatura', text: 'Clique em "Cancelar" e forneça um motivo. Uma nota de crédito é gerada automaticamente.' },
      { name: 'Ver notas de crédito', text: 'Navegue até Notas de Crédito na barra lateral para ver todas as notas com suas faturas vinculadas.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quando devo emitir uma nota de crédito?', answer: 'Emita uma nota de crédito quando o cliente foi cobrado a mais, serviços não foram prestados, uma fatura foi emitida por engano ou um reembolso parcial é necessário.' },
      { question: 'Posso editar uma nota de crédito após a criação?', answer: 'Não. Assim como as faturas, as notas de crédito são imutáveis após a criação. Elas recebem seu próprio número único e ID de verificação para integridade da auditoria.' },
    ],
    content: `
      <h2>Quando usar notas de crédito</h2>
      <p>Quando você precisa reverter ou ajustar uma fatura emitida, o Invoicemonk suporta notas de crédito que mantêm uma trilha de auditoria completa.</p>
      <ul>
        <li>O cliente foi cobrado a mais</li>
        <li>Serviços não foram prestados</li>
        <li>Fatura foi emitida por engano</li>
        <li>Reembolso parcial necessário</li>
      </ul>

      <h2>Criar uma nota de crédito</h2>
      <ul>
        <li>Navegue até a <strong>fatura original</strong></li>
        <li>Clique em <strong>Cancelar</strong> e forneça um motivo</li>
        <li>Uma nota de crédito é gerada automaticamente referenciando a fatura original</li>
        <li>A nota de crédito recebe seu próprio número único e ID de verificação</li>
      </ul>

      <h2>Ver notas de crédito</h2>
      <ul>
        <li>Navegue até <strong>Notas de Crédito</strong> na barra lateral</li>
        <li>Pesquise por número da nota de crédito, número da fatura original ou nome do cliente</li>
        <li>Clique em qualquer nota de crédito para ver os detalhes completos e a fatura vinculada</li>
      </ul>
    `,
  },

  // ─── Guia 7: Acompanhamento de Despesas ───
  {
    slug: 'expense-tracking',
    title: 'Rastrear e categorizar suas despesas empresariais',
    description: 'Registre despesas, categorize-as e veja para onde seu dinheiro está indo com análises visuais.',
    icon: 'Receipt',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar para Despesas', text: 'Clique em "Despesas" na barra lateral para acessar o rastreador de despesas.' },
      { name: 'Adicionar uma despesa', text: 'Clique em "Adicionar Despesa", insira valor, data, descrição, categoria, nome do fornecedor e notas opcionais.' },
      { name: 'Filtrar e pesquisar', text: 'Filtre por categoria, pesquise por descrição ou fornecedor e alterne entre períodos contábeis.' },
      { name: 'Exportar seus dados', text: 'Exporte despesas como CSV ou JSON para seu contador ou declaração fiscal, delimitado ao período selecionado.' },
    ],
    relatedGuides: ['accounting-overview', 'reports-exports', 'business-settings'],
    targetFeature: '/expenses',
    faq: [
      { question: 'Quais categorias de despesas estão disponíveis?', answer: 'O Invoicemonk oferece categorias padrão incluindo Material de Escritório, Viagens, Software, Marketing, Serviços Profissionais e Utilidades. As categorias ajudam a visualizar para onde seu dinheiro está indo.' },
      { question: 'Posso exportar despesas para meu contador?', answer: 'Sim. Exporte despesas no formato CSV ou JSON. As exportações são delimitadas ao período contábil e conta de moeda selecionados.' },
    ],
    content: `
      <h2>Adicionar uma despesa</h2>
      <p>O rastreador de despesas do Invoicemonk ajuda a registrar despesas empresariais, categorizá-las e ver para onde seu dinheiro está indo — tudo separado por conta de moeda para contabilidade precisa.</p>
      <ul>
        <li>Navegue até <strong>Despesas</strong> na barra lateral</li>
        <li>Clique em <strong>Adicionar Despesa</strong></li>
        <li>Insira valor, data e descrição</li>
        <li>Selecione uma categoria (Material de Escritório, Viagens, Software, Marketing, Serviços Profissionais, Utilidades, etc.)</li>
        <li>Adicione nome do fornecedor e notas opcionais</li>
        <li>Salve a despesa</li>
      </ul>

      <h2>Filtrar e pesquisar</h2>
      <ul>
        <li>Filtre despesas por categoria usando o dropdown</li>
        <li>Pesquise por descrição, fornecedor ou notas</li>
        <li>Alterne entre períodos contábeis (mensal, trimestral, anual)</li>
      </ul>

      <h2>Análise de despesas</h2>
      <p>O painel mostra uma análise visual das despesas por categoria com porcentagens. Veja o total de despesas para o período selecionado rapidamente.</p>

      <h2>Exportar despesas</h2>
      <p>Exporte suas despesas como CSV ou JSON para seu contador ou declaração fiscal. As exportações são delimitadas ao período e conta de moeda selecionados.</p>
    `,
  },

  // ─── Guia 8: Visão Geral Contábil ───
  {
    slug: 'accounting-overview',
    title: 'Sua visão financeira — Receitas, despesas e resultados',
    description: 'Tenha uma visão panorâmica de suas finanças com visualizações de receitas, despesas e lucro/prejuízo.',
    icon: 'Calculator',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Ver receitas contábeis', text: 'Veja toda a receita de faturas pagas, filtrada por período contábil, com tendências de receita ao longo do tempo.' },
      { name: 'Revisar despesas contábeis', text: 'Revise todas as despesas registradas com análises por categoria e comparações entre períodos.' },
      { name: 'Verificar resultados contábeis', text: 'Veja o cálculo de lucro/prejuízo líquido e margem de lucro, tudo delimitado por conta de moeda.' },
    ],
    relatedGuides: ['expense-tracking', 'reports-exports', 'analytics'],
    targetFeature: '/accounting',
    faq: [
      { question: 'O Invoicemonk substitui um software contábil?', answer: 'Os recursos contábeis do Invoicemonk são uma ferramenta de gestão para visibilidade diária de suas finanças. Para contabilidade formal e declaração fiscal, sempre consulte um contador qualificado.' },
      { question: 'Por que os resultados são separados por conta de moeda?', answer: 'Para garantir precisão, todos os dados financeiros são mantidos em uma única moeda por conta. Sem mistura de moedas, seus cálculos de lucro/prejuízo são sempre precisos.' },
    ],
    content: `
      <h2>Receitas contábeis</h2>
      <p>A seção Contabilidade oferece uma visão panorâmica das finanças do seu negócio com três visualizações principais.</p>
      <ul>
        <li>Veja toda a receita de faturas pagas</li>
        <li>Filtre por período contábil</li>
        <li>Visualize tendências de receita ao longo do tempo</li>
      </ul>

      <h2>Despesas contábeis</h2>
      <ul>
        <li>Revise todas as despesas registradas</li>
        <li>Análise por categoria com gráficos visuais</li>
        <li>Comparação entre períodos</li>
      </ul>

      <h2>Resultados contábeis</h2>
      <ul>
        <li>Cálculo de lucro/prejuízo líquido (Receitas menos Despesas)</li>
        <li>Veja sua margem de lucro rapidamente</li>
        <li>Todos os dados delimitados por conta de moeda — sem mistura de moedas</li>
      </ul>

      <div class="callout">
        <strong>Importante:</strong> Os recursos contábeis do Invoicemonk são uma ferramenta de gestão, não um substituto para software contábil profissional. Sempre consulte um contador qualificado para declaração fiscal.
      </div>
    `,
  },

  // ─── Guia 9: Relatórios e Exportações ───
  {
    slug: 'reports-exports',
    title: 'Gerar relatórios em conformidade',
    description: 'Gere relatórios profissionais de receita, recibos, despesas, contabilidade e conformidade.',
    icon: 'BarChart3',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar para Relatórios', text: 'Clique em "Relatórios" na barra lateral para acessar o gerador de relatórios.' },
      { name: 'Selecionar categoria', text: 'Escolha entre Receita, Recibos, Despesas, Contabilidade ou Conformidade.' },
      { name: 'Definir parâmetros', text: 'Selecione o ano e o tipo específico de relatório dentro da categoria.' },
      { name: 'Gerar e baixar', text: 'Clique em "Gerar" para baixar em formato JSON ou CSV. Todos os relatórios são delimitados à sua conta de moeda ativa.' },
    ],
    relatedGuides: ['accounting-overview', 'expense-tracking', 'analytics', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quais formatos de relatório estão disponíveis?', answer: 'Os relatórios podem ser baixados em formato JSON ou CSV. CSV é ideal para planilhas como Excel ou Google Sheets, enquanto JSON funciona bem para integrações.' },
      { question: 'Os relatórios são de moeda única?', answer: 'Sim. Todos os relatórios são delimitados à sua conta de moeda ativa para garantir precisão. Troque de conta de moeda para gerar relatórios para diferentes moedas.' },
    ],
    content: `
      <h2>Categorias de relatórios</h2>
      <p>O Invoicemonk gera relatórios profissionais em cinco categorias. Os relatórios estão disponíveis nos planos Professional e Business.</p>

      <h3>Relatórios de receita</h3>
      <ul>
        <li>Resumo de receita por período</li>
        <li>Receita por cliente</li>
        <li>Análise de vencimento para faturas pendentes</li>
      </ul>

      <h3>Relatórios de recibos</h3>
      <ul>
        <li>Registro de recibos de pagamento</li>
        <li>Auditoria de verificação de recibos</li>
      </ul>

      <h3>Relatórios de despesas</h3>
      <ul>
        <li>Resumo de despesas por categoria</li>
        <li>Despesas por fornecedor</li>
      </ul>

      <h3>Relatórios contábeis</h3>
      <ul>
        <li>Demonstração de lucros e perdas</li>
        <li>Comparação receitas vs. despesas</li>
      </ul>

      <h3>Relatórios de conformidade</h3>
      <ul>
        <li>Relatório resumo de impostos</li>
        <li>Registro de faturas para auditoria</li>
      </ul>

      <h2>Gerar um relatório</h2>
      <ul>
        <li>Navegue até <strong>Relatórios</strong> na barra lateral</li>
        <li>Selecione o ano e a categoria do relatório</li>
        <li>Clique em <strong>Gerar</strong> para baixar em JSON ou CSV</li>
        <li>Todos os relatórios são delimitados à sua conta de moeda ativa</li>
      </ul>

      <div class="callout">
        <strong>Nota de conformidade:</strong> Todas as exportações incluem hashes de verificação e carimbos de data/hora. Os relatórios são de moeda única para garantir precisão.
      </div>
    `,
  },

  // ─── Guia 10: Análises ───
  {
    slug: 'analytics',
    title: 'Entenda seu negócio com análises visuais',
    description: 'Visualize gráficos interativos de receita, status de faturas, vencimento de pagamentos e tendências mensais.',
    icon: 'PieChart',
    category: 'financial-tools',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar para Análises', text: 'Clique em "Análises" na barra lateral para acessar seu painel de insights.' },
      { name: 'Selecionar período', text: 'Escolha o trimestre que deseja analisar no seletor de período.' },
      { name: 'Explorar gráficos', text: 'Veja Receita por Cliente, Distribuição de Status de Faturas, Vencimento de Pagamentos e gráficos de Comparação Mensal com detalhes ao passar o mouse.' },
    ],
    relatedGuides: ['reports-exports', 'accounting-overview', 'payments-receipts'],
    targetFeature: 'https://app.invoicemonk.com',
    content: `
      <h2>Análises disponíveis</h2>
      <p>A página de Análises fornece insights visuais sobre sua atividade de faturamento com gráficos interativos e análises.</p>
      <ul>
        <li><strong>Receita por Cliente</strong> — Gráfico de barras mostrando quais clientes contribuem mais receita</li>
        <li><strong>Distribuição de Status de Faturas</strong> — Gráfico de pizza de faturas em rascunho, emitidas, enviadas, visualizadas, pagas e canceladas</li>
        <li><strong>Vencimento de Pagamentos</strong> — Veja quanto tempo os clientes levam para pagar em média</li>
        <li><strong>Comparação Mensal</strong> — Gráfico de linhas comparando receita mês a mês</li>
      </ul>

      <h2>Usar análises</h2>
      <ul>
        <li>Navegue até <strong>Análises</strong> na barra lateral</li>
        <li>Selecione o período (trimestre)</li>
        <li>Visualize gráficos interativos com detalhes ao passar o mouse</li>
        <li>Use os insights para identificar seus melhores clientes, acompanhar padrões de pagamento e identificar tendências</li>
      </ul>
    `,
  },

  // ─── Guia 11: Gestão de Equipe ───
  {
    slug: 'team-management',
    title: 'Convidar sua equipe e gerenciar funções',
    description: 'Convide membros da equipe, atribua funções e controle o acesso ao seu Invoicemonk.',
    icon: 'UserPlus',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navegar para Equipe', text: 'Clique em "Equipe" na barra lateral para acessar a gestão de equipe.' },
      { name: 'Convidar um membro', text: 'Clique em "Convidar Membro", insira o e-mail e selecione uma função (Proprietário, Admin ou Membro).' },
      { name: 'Gerenciar funções', text: 'Altere a função de um membro, remova membros da equipe ou reenvie convites pendentes na página de equipe.' },
    ],
    relatedGuides: ['business-settings', 'audit-logs', 'getting-started'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quais funções de equipe estão disponíveis?', answer: 'Proprietário tem acesso total incluindo faturamento. Admin pode gerenciar faturas, clientes e configurações, mas não o faturamento. Membro pode criar e visualizar faturas e clientes, mas não pode alterar configurações.' },
      { question: 'Quais planos suportam gestão de equipe?', answer: 'A gestão de equipe está disponível nos planos Professional e Business. Os planos Starter são apenas para usuário único.' },
    ],
    content: `
      <h2>Funções disponíveis</h2>
      <p>Nos planos Professional e Business, você pode convidar membros da equipe para seu Invoicemonk e atribuir funções para controlar o que eles podem fazer.</p>
      <ul>
        <li><strong>Proprietário</strong> — Acesso total a tudo, incluindo faturamento e gestão de equipe</li>
        <li><strong>Admin</strong> — Pode gerenciar faturas, clientes e configurações, mas não o faturamento</li>
        <li><strong>Membro</strong> — Pode criar e visualizar faturas e clientes, mas não pode alterar configurações</li>
      </ul>

      <h2>Convidar membros da equipe</h2>
      <ul>
        <li>Navegue até <strong>Equipe</strong> na barra lateral</li>
        <li>Clique em <strong>Convidar Membro</strong></li>
        <li>Insira o e-mail e selecione uma função</li>
        <li>Eles receberão um e-mail de convite para se juntar à sua empresa</li>
      </ul>

      <h2>Gerenciar membros da equipe</h2>
      <ul>
        <li>Altere a função de um membro na página de equipe</li>
        <li>Remova membros que não precisam mais de acesso</li>
        <li>Veja convites pendentes e reenvie se necessário</li>
      </ul>
    `,
  },

  // ─── Guia 12: Multi-Moeda ───
  {
    slug: 'multi-currency',
    title: 'Gerenciar múltiplas moedas com contas de moeda',
    description: 'Use contas de moeda para manter as finanças separadas de forma limpa entre múltiplas moedas.',
    icon: 'Globe',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Entender contas de moeda', text: 'Sua conta de moeda padrão é criada automaticamente na moeda principal da sua empresa.' },
      { name: 'Adicionar contas de moeda', text: 'Adicione contas de moeda adicionais (USD, GBP, EUR, etc.) para faturamento internacional.' },
      { name: 'Alternar entre contas', text: 'Use o seletor de moeda na barra lateral. Todas as faturas, despesas, relatórios e análises são delimitados à conta ativa.' },
    ],
    relatedGuides: ['business-settings', 'reports-exports', 'creating-invoices'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Por que o Invoicemonk separa moedas em contas?', answer: 'Relatórios financeiros são sempre de moeda única para precisão. Sem cálculos confusos de câmbio nos seus relatórios. Cada conta de moeda tem seus próprios métodos de pagamento.' },
    ],
    content: `
      <h2>Como funcionam as contas de moeda</h2>
      <p>O Invoicemonk suporta múltiplas moedas através de Contas de Moeda. Cada conta de moeda mantém suas finanças separadas de forma limpa — sem mistura de moedas.</p>
      <ul>
        <li>Ao criar uma empresa, uma conta de moeda padrão é criada automaticamente na moeda principal da sua empresa</li>
        <li>Você pode adicionar contas de moeda adicionais (ex.: USD, GBP, EUR) para faturamento internacional</li>
        <li>Alterne entre contas de moeda usando o seletor na barra lateral</li>
        <li>Todas as faturas, despesas, relatórios e análises são delimitados à conta de moeda ativa</li>
      </ul>

      <h2>Por que isso importa</h2>
      <ul>
        <li>Relatórios financeiros são sempre de moeda única para precisão</li>
        <li>Sem cálculos confusos de câmbio nos seus relatórios</li>
        <li>Cada conta de moeda tem seus próprios métodos de pagamento</li>
      </ul>
    `,
  },

  // ─── Guia 13: Notificações e Lembretes ───
  {
    slug: 'notifications-reminders',
    title: 'Automatizar lembretes de pagamento e gerenciar notificações',
    description: 'Configure lembretes automáticos de pagamento e personalize suas preferências de notificação.',
    icon: 'Bell',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Abrir configurações de notificação', text: 'Vá para Configurações → Notificações para configurar suas preferências de lembretes.' },
      { name: 'Ativar lembretes de pagamento', text: 'Ative Lembretes de Pagamento e selecione quando enviá-los (1, 3, 7 ou 14 dias antes do vencimento).' },
      { name: 'Ativar lembretes de atraso', text: 'Ative Lembretes de Atraso para acompanhamento após o vencimento (1, 7, 14 ou 30 dias depois).' },
      { name: 'Personalizar e salvar', text: 'Opcionalmente adicione uma mensagem personalizada aos e-mails de lembrete e clique em Salvar Configurações de Notificação.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Posso personalizar a mensagem do e-mail de lembrete?', answer: 'Sim. Você pode adicionar uma mensagem personalizada que será incluída nos seus e-mails de lembrete de pagamento. Isso permite manter um tom profissional e pessoal com seus clientes.' },
      { question: 'Quais outras notificações estão disponíveis?', answer: 'Além dos lembretes de pagamento, você pode ativar notificações para Fatura Emitida (confirmação), Pagamento Recebido e Alertas de Atraso.' },
    ],
    content: `
      <h2>Configurar lembretes de pagamento</h2>
      <p>O Invoicemonk pode lembrar automaticamente seus clientes sobre pagamentos próximos e atrasados, para que você não precise cobrá-los manualmente.</p>
      <ul>
        <li>Vá para <strong>Configurações → Notificações</strong></li>
        <li>Ative <strong>Lembretes de Pagamento</strong></li>
        <li>Selecione quando enviar lembretes antes do vencimento (1, 3, 7 ou 14 dias antes)</li>
        <li>Ative <strong>Lembretes de Atraso</strong> para acompanhamento após o vencimento (1, 7, 14 ou 30 dias depois)</li>
        <li>Opcionalmente adicione uma mensagem personalizada aos seus e-mails de lembrete</li>
        <li>Clique em <strong>Salvar Configurações de Notificação</strong></li>
      </ul>

      <h2>Outras opções de notificação</h2>
      <ul>
        <li><strong>Fatura Emitida</strong> — Receba uma confirmação quando emitir uma fatura</li>
        <li><strong>Pagamento Recebido</strong> — Seja notificado quando um pagamento é registrado</li>
        <li><strong>Alertas de Atraso</strong> — Receba alertas sobre faturas atrasadas</li>
      </ul>
    `,
  },

  // ─── Guia 14: Configurações da Empresa ───
  {
    slug: 'business-settings',
    title: 'Configurar sua empresa para conformidade',
    description: 'Complete seu perfil empresarial para garantir que todas as faturas atendam aos requisitos regulatórios locais.',
    icon: 'Settings',
    category: 'administration',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Revisar configurações principais', text: 'Garanta que nome da empresa, razão social, identificação fiscal, registro de impostos, logotipo, endereço e dados de contato estejam completos.' },
      { name: 'Verificar conclusão do perfil', text: 'Busque 100% de conclusão. O Invoicemonk destaca campos faltantes para que você saiba exatamente o que preencher.' },
      { name: 'Configurar métodos de pagamento', text: 'Adicione contas bancárias e dados de pagamento. Defina um método de pagamento padrão para novas faturas.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'multi-currency'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'O que acontece se meu perfil estiver incompleto?', answer: 'Suas faturas podem não incluir todos os campos obrigatórios de conformidade. O Invoicemonk mostra uma porcentagem de conclusão e destaca informações faltantes para que você possa corrigi-las rapidamente.' },
      { question: 'Posso ter múltiplos métodos de pagamento?', answer: 'Sim. Adicione quantas contas bancárias ou dados de pagamento precisar. Defina um como padrão que aparece em todas as novas faturas. Os métodos de pagamento são vinculados às contas de moeda.' },
    ],
    content: `
      <h2>Configurações principais</h2>
      <p>Seu Perfil Empresarial é a base do faturamento em conformidade. Complete-o totalmente para garantir que todas as suas faturas atendam às regulamentações locais.</p>
      <ul>
        <li><strong>Nome da Empresa e Razão Social</strong> — Deve corresponder ao seu registro oficial</li>
        <li><strong>Número de Identificação Fiscal</strong> — Seu CNPJ/CPF ou equivalente</li>
        <li><strong>Registro de Impostos</strong> — Ative se registrado e insira seu número</li>
        <li><strong>Logotipo da Empresa</strong> — Aparece em todas as faturas e recibos</li>
        <li><strong>Endereço</strong> — Endereço comercial completo para cabeçalhos de faturas</li>
        <li><strong>Dados de Contato</strong> — E-mail e telefone exibidos nas faturas</li>
        <li><strong>Moeda Padrão</strong> — Defina sua moeda operacional principal</li>
      </ul>

      <h2>Conclusão do perfil</h2>
      <ul>
        <li>O Invoicemonk mostra uma porcentagem de conclusão no seu perfil empresarial</li>
        <li>Busque 100% para conformidade total</li>
        <li>Campos faltantes são destacados para que você saiba exatamente o que preencher</li>
      </ul>

      <h2>Métodos de pagamento</h2>
      <ul>
        <li>Adicione contas bancárias, dados de pagamento ou outros métodos</li>
        <li>Defina um método de pagamento padrão que aparece em todas as novas faturas</li>
        <li>Os métodos de pagamento são vinculados às contas de moeda</li>
      </ul>
    `,
  },

  // ─── Guia 15: Logs de Auditoria ───
  {
    slug: 'audit-logs',
    title: 'Trilha de auditoria completa para cada ação',
    description: 'Revise a trilha de auditoria imutável que registra cada ação para conformidade e auditoria interna.',
    icon: 'ScrollText',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar para Logs de Auditoria', text: 'Clique em "Logs de Auditoria" na barra lateral para acessar a trilha completa de atividades.' },
      { name: 'Pesquisar e filtrar', text: 'Pesquise por tipo de ação, usuário ou descrição. Filtre por categoria de ação para refinar resultados.' },
      { name: 'Revisar entradas', text: 'Cada entrada mostra quem executou a ação, quando ocorreu e exatamente o que mudou.' },
    ],
    relatedGuides: ['invoice-verification', 'creating-invoices', 'team-management'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Quais ações são registradas?', answer: 'Tudo: criação de faturas, emissão, envio, visualização, cancelamento, registro de pagamentos, alterações no perfil empresarial, adições de membros da equipe e mudanças de função, e modificações de configurações.' },
      { question: 'Os logs de auditoria podem ser modificados?', answer: 'Não. Os logs de auditoria são imutáveis por design. Uma vez que uma ação é registrada, não pode ser editada ou excluída. Isso garante integridade completa para revisões de conformidade.' },
    ],
    content: `
      <h2>O que é registrado</h2>
      <p>Cada ação no Invoicemonk é registrada em uma trilha de auditoria imutável. Isso é inestimável para revisões de conformidade e auditoria interna.</p>
      <ul>
        <li>Fatura criada, emitida, enviada, visualizada, cancelada</li>
        <li>Pagamentos registrados</li>
        <li>Alterações no perfil empresarial</li>
        <li>Adições de membros da equipe e mudanças de função</li>
        <li>Modificações de configurações</li>
      </ul>

      <h2>Usar logs de auditoria</h2>
      <ul>
        <li>Navegue até <strong>Logs de Auditoria</strong> na barra lateral</li>
        <li>Pesquise por tipo de ação, usuário ou descrição</li>
        <li>Filtre por categoria de ação</li>
        <li>Cada entrada mostra quem executou a ação, quando e o que mudou</li>
      </ul>
    `,
  },

  // ─── Guia 16: Suporte ───
  {
    slug: 'support',
    title: 'Obter ajuda quando você precisa',
    description: 'Envie tickets de suporte e entre em contato com a equipe Invoicemonk diretamente do seu painel.',
    icon: 'HelpCircle',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navegar para Suporte', text: 'Clique em "Contatar Suporte" na barra lateral para acessar o sistema de tickets.' },
      { name: 'Enviar um ticket', text: 'Escolha uma categoria (Faturamento, Técnico, Solicitação de Recurso, etc.), descreva seu problema e envie.' },
      { name: 'Acompanhar seu ticket', text: 'Visualize e acompanhe o status do ticket na página de Suporte no seu painel.' },
    ],
    relatedGuides: ['getting-started', 'business-settings'],
    targetFeature: '/contact',
    content: `
      <h2>Enviar um ticket de suporte</h2>
      <p>O Invoicemonk oferece um sistema de tickets de suporte no aplicativo para que você possa entrar em contato com nossa equipe diretamente do seu painel.</p>
      <ul>
        <li>Navegue até <strong>Contatar Suporte</strong> na barra lateral</li>
        <li>Escolha uma categoria (Faturamento, Técnico, Solicitação de Recurso, etc.)</li>
        <li>Descreva seu problema em detalhes</li>
        <li>Envie e acompanhe o status do ticket na página de Suporte</li>
      </ul>

      <p>Você também pode nos contatar através da nossa <a href="__LANG__/contact">página de contato</a> ou pelo widget de chat ao vivo em nosso site.</p>
    `,
  },
];

registerHelpGuides('pt', helpGuidesPT);
