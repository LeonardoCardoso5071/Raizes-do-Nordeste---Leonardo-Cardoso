/* ============================================================
   RAÍZES DO NORDESTE — delivery.js
   Sistema completo de delivery com carrinho, frete, cupons e pix
   ============================================================ */

// ================================================================
// CARDÁPIO — lista de produtos separados por categoria
// ================================================================
const CARDAPIO = {
  entradas: [
    { id: 'e1', nome: "Dadinho de Tapioca com Geleia de Pimenta", descricao: "Crocantes cubinhos de tapioca fritos acompanhados de geleia artesanal de pimenta.", preco: 28.90, imagem: "Dadinho.png", etiqueta: "⭐ Popular", categoria: 'entradas' },
    { id: 'e2', nome: "Caldo de Sururu", descricao: "Caldo rico e aromático feito com sururu fresco, azeite de dendê e ervas da caatinga.", preco: 22.90, imagem: "Sururu.png", etiqueta: null, categoria: 'entradas' },
    { id: 'e3', nome: "Macaxeira Frita com Aioli de Coriandro", descricao: "Palitos dourados de macaxeira fresca com molho cremoso de coentro e alho.", preco: 19.90, imagem: "Macaxeira.png", etiqueta: null, categoria: 'entradas' },
    { id: 'e4', nome: "Bruschetta Nordestina", descricao: "Fatias de broa de milho torradas com carne de sol desfiada e queijo coalho grelhado.", preco: 25.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: "🆕 Novo", categoria: 'entradas' }
  ],
  pratos: [
    { id: 'p1', nome: "Baião de Dois Completo", descricao: "Arroz com feijão fradinho, queijo coalho, linguiça, carne de sol e bacon defumado.", preco: 54.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: "⭐ Popular", categoria: 'pratos' },
    { id: 'p2', nome: "Carne de Sol com Macaxeira", descricao: "Macia carne de sol ao ponto, com purê de macaxeira cremoso e manteiga de garrafa.", preco: 62.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: null, categoria: 'pratos' },
    { id: 'p3', nome: "Caldeirada de Frutos do Mar", descricao: "Camarão, peixe, mariscos e lagostim no molho de tomate com coco e ervas.", preco: 78.90, imagem: "Gemini_Generated_Image_qd3an7qd3an7qd3a-Photoroom.png", etiqueta: "🌊 Frutos do Mar", categoria: 'pratos' },
    { id: 'p4', nome: "Frango Caipira Assado", descricao: "Frango caipira marinado 24h, assado lentamente com batata doce e farofa de dendê.", preco: 58.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: null, categoria: 'pratos' },
    { id: 'p5', nome: "Buchada de Bode", descricao: "Ícone da culinária sertaneja, preparada com miúdos temperados e cozida na bucha.", preco: 45.90, imagem: "Gemini_Generated_Image_qd3an7qd3an7qd3a-Photoroom.png", etiqueta: "🐐 Tradicional", categoria: 'pratos' },
    { id: 'p6', nome: "Moqueca de Camarão Nordestina", descricao: "Camarões frescos cozidos em leite de coco, azeite de dendê e coentro abundante.", preco: 72.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: null, categoria: 'pratos' },
    { id: 'p7', nome: "Sarapatel com Pirão", descricao: "Sarapatel com vísceras temperadas com ervas do mato, servido com pirão de fubá.", preco: 48.90, imagem: "Gemini_Generated_Image_qd3an7qd3an7qd3a-Photoroom.png", etiqueta: null, categoria: 'pratos' },
    { id: 'p8', nome: "Costela de Boi na Pedra", descricao: "Costela bovina com 8h de cozimento lento, servida sobre pedra quente com farofa.", preco: 89.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: "🔥 Chef Choice", categoria: 'pratos' },
    { id: 'p9', nome: "Peixe Assado na Folha de Bananeira", descricao: "Peixe fresco do dia marinado com limão e ervas, assado na folha de bananeira.", preco: 68.90, imagem: "Gemini_Generated_Image_qd3an7qd3an7qd3a-Photoroom.png", etiqueta: null, categoria: 'pratos' },
    { id: 'p10', nome: "Feijão Verde com Charque", descricao: "Feijão verde fresquinho cozido com charque, pimenta-de-cheiro e manteiga de garrafa.", preco: 42.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: null, categoria: 'pratos' }
  ],
  sobremesas: [
    { id: 's1', nome: "Cartola", descricao: "Banana frita com queijo coalho derretido, canela e açúcar mascavo.", preco: 18.90, imagem: "Gemini_Generated_Image_qd3an7qd3an7qd3a-Photoroom.png", etiqueta: "⭐ Popular", categoria: 'sobremesas' },
    { id: 's2', nome: "Tapioca com Coco Queimado", descricao: "Tapioca morna com coco queimado, doce de leite caseiro e flor de sal.", preco: 16.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: null, categoria: 'sobremesas' },
    { id: 's3', nome: "Pudim de Rapadura", descricao: "Clássico pudim feito com rapadura pura, ovos caipiras e leite de coco fresco.", preco: 15.90, imagem: "Gemini_Generated_Image_qd3an7qd3an7qd3a-Photoroom.png", etiqueta: null, categoria: 'sobremesas' },
    { id: 's4', nome: "Bolo de Milho Verde com Calda de Goiaba", descricao: "Bolo úmido de milho verde com calda de goiaba fresca artesanal.", preco: 14.90, imagem: "Gemini_Generated_Image_p9m5nzp9m5nzp9m5-Photoroom.png", etiqueta: "🆕 Novo", categoria: 'sobremesas' }
  ]
};

// ================================================================
// ESTADO DA APLICAÇÃO
// ================================================================
let carrinho = {};         // { itemId: { item, quantidade } }
let categoriaAtual = 'entradas';
let cupomSelecionado = null;
let taxaEntregaCalculada = 8.00;

// chave pix do restaurante
const CHAVE_PIX = '11948338287';

// ================================================================
// REFERÊNCIAS DE ELEMENTOS DO DOM
// ================================================================
const gradeItens = document.getElementById('gradeItens');
const abasCardapio = document.getElementById('abasCardapio');
const painelCarrinho = document.getElementById('painelCarrinho');
const fundoCarrinho = document.getElementById('fundoCarrinho');
const botaoCarrinho = document.getElementById('botaoCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const contagemCarrinho = document.getElementById('contagemCarrinho');
const corpoCarrinho = document.getElementById('corpoCarrinho');
const carrinhoVazio = document.getElementById('carrinhoVazio');
const listaCarrinho = document.getElementById('listaCarrinho');
const rodapeCarrinho = document.getElementById('rodapeCarrinho');
const subtotalCarrinho = document.getElementById('subtotalCarrinho');
const totalCarrinho = document.getElementById('totalCarrinho');
const taxaEntregaTexto = document.getElementById('taxaEntregaTexto');
const btnFinalizar = document.getElementById('btnFinalizar');
const btnLimpar = document.getElementById('btnLimpar');
const modalCheckout = document.getElementById('modalCheckout');
const modalSucesso = document.getElementById('modalSucesso');
const numeroPedidoSucesso = document.getElementById('numeroPedidoSucesso');
const btnNovosPedido = document.getElementById('btnNovosPedido');
const avisoLoginNecessario = document.getElementById('avisoLoginNecessario');
const campoEnderecoEntrega = document.getElementById('campoEnderecoEntrega');
const resultadoFrete = document.getElementById('resultadoFrete');
const selectEnderecoSalvo = document.getElementById('selectEnderecoSalvo');

// ================================================================
// SESSÃO DE USUÁRIO
// ================================================================
function buscarUsuarioLogado() {
  return JSON.parse(localStorage.getItem('raizes_usuario') || 'null');
}

function buscarDadosCompletosUsuario(id) {
  const lista = JSON.parse(localStorage.getItem('raizes_usuarios_db') || '[]');
  return lista.find(u => u.id === id) || null;
}

function salvarDadosUsuario(usuario) {
  const lista = JSON.parse(localStorage.getItem('raizes_usuarios_db') || '[]');
  const idx = lista.findIndex(u => u.id === usuario.id);
  if (idx >= 0) lista[idx] = usuario;
  localStorage.setItem('raizes_usuarios_db', JSON.stringify(lista));
  const semSenha = { ...usuario }; delete semSenha.senha;
  localStorage.setItem('raizes_usuario', JSON.stringify(semSenha));
}

function obterEnderecoSalvo(usuario) {
  if (!usuario || !Array.isArray(usuario.enderecos) || usuario.enderecos.length === 0) return null;
  return usuario.enderecos[0];
}

function normalizarListaEnderecos(usuario) {
  const lista = usuario && Array.isArray(usuario.enderecos) ? usuario.enderecos : [];
  return lista
    .map((endereco, idx) => {
      if (!endereco) return null;
      if (typeof endereco === 'string') {
        return { apelido: idx === 0 ? 'Principal' : 'Secundário', texto: endereco };
      }
      const apelido = endereco.apelido || endereco.nome || (idx === 0 ? 'Principal' : 'Secundário');
      const texto = endereco.texto || endereco.endereco || [endereco.rua, endereco.numero, endereco.bairro, endereco.cidade, endereco.cep].filter(Boolean).join(', ');
      return texto ? { apelido, texto, ...endereco } : null;
    })
    .filter(Boolean)
    .slice(0, 2);
}

function enderecoParaTexto(endereco) {
  if (!endereco) return '';
  if (typeof endereco === 'string') return endereco;
  if (endereco.texto) return endereco.texto;
  return [endereco.rua, endereco.numero, endereco.bairro, endereco.cidade, endereco.cep]
    .filter(Boolean)
    .join(', ');
}

function preencherEnderecoEntregaSalvo() {
  const usuario = buscarUsuarioLogado();
  const listaEnderecos = normalizarListaEnderecos(usuario);
  const endereco = listaEnderecos[0] || JSON.parse(localStorage.getItem('raizes_endereco_entrega') || 'null');
  if (campoEnderecoEntrega && endereco) {
    campoEnderecoEntrega.value = enderecoParaTexto(endereco);
  }

  if (selectEnderecoSalvo) {
    selectEnderecoSalvo.innerHTML = '';
    if (listaEnderecos.length === 0) {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'Nenhum endereço salvo';
      selectEnderecoSalvo.appendChild(option);
      selectEnderecoSalvo.disabled = true;
      return;
    }

    selectEnderecoSalvo.disabled = false;
    listaEnderecos.forEach((item, idx) => {
      const option = document.createElement('option');
      option.value = String(idx);
      option.textContent = `${item.apelido} - ${item.texto}`;
      selectEnderecoSalvo.appendChild(option);
    });
    selectEnderecoSalvo.value = '0';
  }
}

function carregarEnderecoSelecionadoCheckout(indice) {
  const usuario = buscarUsuarioLogado();
  const listaEnderecos = normalizarListaEnderecos(usuario);
  const endereco = listaEnderecos[Number(indice) || 0];
  if (!endereco) return;

  if (campoEnderecoEntrega) {
    campoEnderecoEntrega.value = endereco.texto || '';
  }

  const rua = document.getElementById('checkRua');
  const bairro = document.getElementById('checkBairro');
  const cidade = document.getElementById('checkCidade');
  const cep = document.getElementById('checkCep');
  const numero = document.getElementById('checkNumero');
  const complemento = document.getElementById('checkComplemento');

  if (rua) rua.value = endereco.rua || '';
  if (bairro) bairro.value = endereco.bairro || '';
  if (cidade) cidade.value = endereco.cidade || '';
  if (cep) cep.value = endereco.cep || '';
  if (numero) numero.value = endereco.numero || '';
  if (complemento) complemento.value = endereco.complemento || '';

  if (!endereco.rua && !endereco.bairro && !endereco.cidade && !endereco.cep) {
    exibirToast('Endereço carregado. Você pode editar os campos antes de finalizar.');
  }
}

function salvarEnderecoEntrega(mostrarMensagem = true) {
  if (!campoEnderecoEntrega) return false;
  const texto = campoEnderecoEntrega.value.trim();
  if (!texto) {
    if (mostrarMensagem) exibirToast('Informe seu endereço.');
    return false;
  }

  const registro = { texto, atualizadoEm: Date.now() };
  localStorage.setItem('raizes_endereco_entrega', JSON.stringify(registro));

  const usuario = buscarUsuarioLogado();
  if (usuario) {
    const dadosCompletos = buscarDadosCompletosUsuario(usuario.id) || usuario;
    dadosCompletos.enderecos = Array.isArray(dadosCompletos.enderecos) ? dadosCompletos.enderecos : [];
    dadosCompletos.enderecos = [registro, ...dadosCompletos.enderecos.filter(e => enderecoParaTexto(e) !== texto)].slice(0, 2);
    salvarDadosUsuario(dadosCompletos);
  }

  if (resultadoFrete) {
    resultadoFrete.classList.add('visivel');
    resultadoFrete.innerHTML = `📍 <strong>Endereço salvo:</strong> ${texto}`;
  }

  if (mostrarMensagem) exibirToast('✅ Endereço salvo.');
  return true;
}

// configura o header de navegação conforme sessão
(function configurarNavSessao() {
  const usuario = buscarUsuarioLogado();
  if (usuario) {
    document.getElementById('navLoginDelivery').style.display = 'none';
    document.getElementById('navUserDelivery').style.display = 'inline-flex';
    document.getElementById('navNomeDelivery').textContent = usuario.nome.split(' ')[0];
    const avatar = document.getElementById('navAvatarDelivery');
    avatar.src = usuario.foto || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(usuario.nome) + '&background=C4522A&color=fff';
  } else {
    // mostra aviso de login mas ainda permite ver o cardápio
    avisoLoginNecessario.style.display = 'block';
  }

  preencherEnderecoEntregaSalvo();
})();

// ================================================================
// UTILITÁRIOS
// ================================================================

// formata valor em reais: 28.9 → "R$ 28,90"
function formatarPreco(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

// exibe um toast rapidinho na tela
function exibirToast(mensagem) {
  let toast = document.getElementById('toastApp');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastApp';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = mensagem;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// ================================================================
// CALCULADORA DE FRETE
// ================================================================

function calcularFretePorQuantidade(totalItens) {
  const base = 8.00;
  if (totalItens <= 2) return base;
  return base + ((totalItens - 2) * 2.00);
}

// ================================================================
// BUSCA DE CEP (ViaCEP)
// ================================================================
async function buscarCep(cep) {
  const numerosApenas = cep.replace(/\D/g, '');
  if (numerosApenas.length !== 8) return;

  // formata enquanto digita: 01310100 → 01310-100
  document.getElementById('checkCep').value = numerosApenas.replace(/(\d{5})(\d{3})/, '$1-$2');

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${numerosApenas}/json/`);
    const dados = await resposta.json();
    if (dados.erro) { exibirToast('CEP não encontrado.'); return; }

    document.getElementById('checkRua').value = dados.logradouro || '';
    document.getElementById('checkBairro').value = dados.bairro || '';
    document.getElementById('checkCidade').value = `${dados.localidade} / ${dados.uf}`;
    document.getElementById('checkNumero').focus();
    exibirToast('✅ Endereço preenchido!');
  } catch {
    exibirToast('Erro ao buscar CEP. Verifique a conexão.');
  }
}

// ================================================================
// RENDERIZAÇÃO DO CARDÁPIO
// ================================================================

// monta os cards dos produtos da categoria ativa na grade
function renderizarGrade() {
  const itens = CARDAPIO[categoriaAtual];
  gradeItens.innerHTML = '';
  itens.forEach(item => {
    const card = document.createElement('div');
    card.className = 'd-card';
    card.innerHTML = `
      <div class="d-card-img-wrap">
        <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
        ${item.etiqueta ? `<span class="d-card-badge">${item.etiqueta}</span>` : ''}
      </div>
      <div class="d-card-body">
        <h3 class="d-card-name">${item.nome}</h3>
        <p class="d-card-desc">${item.descricao}</p>
        <div class="d-card-footer">
          <span class="d-card-price">${formatarPreco(item.preco)}</span>
          <button class="add-btn" data-id="${item.id}" aria-label="Adicionar ${item.nome}">+</button>
        </div>
      </div>
    `;
    gradeItens.appendChild(card);
  });

  // animação de entrada dos cards
  requestAnimationFrame(() => {
    gradeItens.querySelectorAll('.d-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity .35s ${i * 0.06}s ease, transform .35s ${i * 0.06}s ease`;
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });
}

// troca de categoria ao clicar nas abas
abasCardapio.addEventListener('click', e => {
  const aba = e.target.closest('.d-tab');
  if (!aba) return;
  document.querySelectorAll('.d-tab').forEach(t => t.classList.remove('active'));
  aba.classList.add('active');
  categoriaAtual = aba.dataset.cat;
  renderizarGrade();
});

// ================================================================
// ADICIONAR ITEM AO CARRINHO
// ================================================================
gradeItens.addEventListener('click', e => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;

  const id = btn.dataset.id;
  // procura o item em todas as categorias
  let itemEncontrado = null;
  for (const lista of Object.values(CARDAPIO)) {
    const achou = lista.find(i => i.id === id);
    if (achou) { itemEncontrado = achou; break; }
  }
  if (!itemEncontrado) return;

  if (carrinho[id]) {
    carrinho[id].quantidade += 1;
  } else {
    carrinho[id] = { item: itemEncontrado, quantidade: 1 };
  }

  atualizarCarrinho();
  exibirToast(`✓ ${itemEncontrado.nome.split(' ').slice(0, 3).join(' ')} adicionado!`);

  // animação de feedback no botão
  btn.style.transform = 'scale(1.4)';
  setTimeout(() => { btn.style.transform = ''; }, 200);
});

// ================================================================
// ATUALIZAR CARRINHO NA TELA
// ================================================================
function atualizarCarrinho() {
  const itens = Object.values(carrinho);
  const totalQtd = itens.reduce((s, ci) => s + ci.quantidade, 0);
  const subtotal = itens.reduce((s, ci) => s + ci.item.preco * ci.quantidade, 0);
  const total = subtotal;

  // atualiza bolinha de quantidade
  contagemCarrinho.textContent = totalQtd;
  contagemCarrinho.style.transform = 'scale(1.4)';
  setTimeout(() => { contagemCarrinho.style.transform = ''; }, 200);

  // mostra ou esconde estados vazio / com itens
  carrinhoVazio.style.display = itens.length === 0 ? 'block' : 'none';
  listaCarrinho.style.display = itens.length === 0 ? 'none' : 'block';
  rodapeCarrinho.style.display = itens.length === 0 ? 'none' : 'block';

  if (btnFinalizar) {
    btnFinalizar.disabled = itens.length === 0;
    btnFinalizar.textContent = itens.length === 0 ? 'Adicione itens para finalizar' : 'Finalizar Pedido';
  }

  if (btnLimpar) {
    btnLimpar.disabled = itens.length === 0;
  }

  // desenha os itens do carrinho
  listaCarrinho.innerHTML = '';
  itens.forEach(ci => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.dataset.id = ci.item.id;
    li.innerHTML = `
      <img class="cart-item-img" src="${ci.item.imagem}" alt="${ci.item.nome}">
      <div class="cart-item-info">
        <div class="cart-item-name">${ci.item.nome}</div>
        <div class="cart-item-price">${formatarPreco(ci.item.preco * ci.quantidade)}</div>
      </div>
      <div class="cart-qty">
        <button class="qty-btn" data-acao="diminuir" data-id="${ci.item.id}" aria-label="Diminuir">−</button>
        <span class="qty-val">${ci.quantidade}</span>
        <button class="qty-btn" data-acao="aumentar" data-id="${ci.item.id}" aria-label="Aumentar">+</button>
      </div>
    `;
    listaCarrinho.appendChild(li);
  });

  subtotalCarrinho.textContent = formatarPreco(subtotal);
  if (taxaEntregaTexto) {
    taxaEntregaTexto.textContent = itens.length === 0 ? 'R$ 0,00' : `Calculado no checkout (${formatarPreco(calcularFretePorQuantidade(totalQtd))})`;
  }
  totalCarrinho.textContent = formatarPreco(total);
}

// botões de aumentar/diminuir quantidade dentro do carrinho
listaCarrinho.addEventListener('click', e => {
  const btn = e.target.closest('.qty-btn');
  if (!btn) return;
  const id = btn.dataset.id;
  const acao = btn.dataset.acao;
  if (!carrinho[id]) return;

  if (acao === 'aumentar') {
    carrinho[id].quantidade += 1;
  } else if (acao === 'diminuir') {
    carrinho[id].quantidade -= 1;
    if (carrinho[id].quantidade <= 0) delete carrinho[id];
  }
  atualizarCarrinho();
});

// ================================================================
// ABRIR / FECHAR CARRINHO
// ================================================================
function abrirCarrinho() {
  const usuario = buscarUsuarioLogado();
  if (!usuario) {
    sessionStorage.setItem('raizes_redirecionarPara', 'delivery.html');
    window.location.href = 'login.html';
    return;
  }
  painelCarrinho.classList.add('open');
  fundoCarrinho.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function fecharPainelCarrinho() {
  painelCarrinho.classList.remove('open');
  fundoCarrinho.classList.remove('visible');
  document.body.style.overflow = '';
}

botaoCarrinho.addEventListener('click', abrirCarrinho);
fecharCarrinho.addEventListener('click', fecharPainelCarrinho);
fundoCarrinho.addEventListener('click', fecharPainelCarrinho);
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharPainelCarrinho(); });

// limpar carrinho
btnLimpar.addEventListener('click', () => {
  if (Object.keys(carrinho).length === 0) return;
  carrinho = {};
  atualizarCarrinho();
  exibirToast('Carrinho limpo.');
});

// ================================================================
// FINALIZAR PEDIDO — abre modal de checkout
// ================================================================
btnFinalizar.addEventListener('click', () => {
  if (Object.keys(carrinho).length === 0) return;

  // usuário precisa estar logado para finalizar
  const usuario = buscarUsuarioLogado();
  if (!usuario) {
    sessionStorage.setItem('raizes_redirecionarPara', 'delivery.html');
    window.location.href = 'login.html';
    return;
  }

  fecharPainelCarrinho();
  // pré-preenche os dados com info do usuário logado
  document.getElementById('checkNome').value = usuario.nome || '';
  document.getElementById('checkEmail').value = usuario.email || '';
  preencherDadosCheckoutEndereco(usuario);

  // carrega cupons do usuário
  carregarCuponsCheckout(usuario);

  modalCheckout.style.display = 'flex';
  trocarPainelCheckout('dados');
});

function preencherDadosCheckoutEndereco(usuario) {
  const listaEnderecos = normalizarListaEnderecos(usuario);
  const endereco = listaEnderecos[0] || JSON.parse(localStorage.getItem('raizes_endereco_entrega') || 'null');
  if (!endereco) return;

  const enderecoTexto = enderecoParaTexto(endereco);
  if (campoEnderecoEntrega && enderecoTexto) {
    campoEnderecoEntrega.value = enderecoTexto;
  }

  const rua = document.getElementById('checkRua');
  const bairro = document.getElementById('checkBairro');
  const cidade = document.getElementById('checkCidade');
  const cep = document.getElementById('checkCep');
  const numero = document.getElementById('checkNumero');
  const complemento = document.getElementById('checkComplemento');

  if (endereco.rua && rua) rua.value = endereco.rua;
  if (endereco.bairro && bairro) bairro.value = endereco.bairro;
  if (endereco.cidade && cidade) cidade.value = endereco.cidade;
  if (endereco.cep && cep) cep.value = endereco.cep;
  if (endereco.numero && numero) numero.value = endereco.numero;
  if (endereco.complemento && complemento) complemento.value = endereco.complemento;

  if (selectEnderecoSalvo && listaEnderecos.length > 0) {
    selectEnderecoSalvo.value = '0';
  }
}

// ================================================================
// CUPONS NO CHECKOUT
// ================================================================
function carregarCuponsCheckout(usuario) {
  const dadosCompletos = buscarDadosCompletosUsuario(usuario.id) || usuario;
  const cupons = dadosCompletos.cupons || [];
  const container = document.getElementById('listaCuponsCheckout');
  cupomSelecionado = null;

  if (cupons.length === 0) {
    container.innerHTML = '<div style="padding:1.5rem;text-align:center;color:#bbb;font-size:.88rem">Nenhum cupom disponível. Complete missões no seu perfil!</div>';
    return;
  }

  container.innerHTML = '';
  cupons.forEach((c, idx) => {
    const div = document.createElement('div');
    div.className = 'cupom-checkout-item';
    div.innerHTML = `
      <div>
        <div class="cupom-checkout-codigo">${c.codigo}</div>
        <div class="cupom-checkout-desc">${c.descricao}</div>
      </div>
      <div style="font-size:.8rem;color:var(--muted)">Válido até ${c.validade}</div>
    `;
    div.addEventListener('click', () => {
      document.querySelectorAll('.cupom-checkout-item').forEach(el => el.classList.remove('selecionado'));
      if (cupomSelecionado === idx) {
        cupomSelecionado = null;
      } else {
        cupomSelecionado = idx;
        div.classList.add('selecionado');
      }
    });
    container.appendChild(div);
  });
}

// ================================================================
// TROCAR PAINEL DO CHECKOUT (dados / cupons / pagamento)
// ================================================================
function trocarPainelCheckout(qual) {
  document.querySelectorAll('.painel-checkout').forEach(p => p.classList.remove('ativo'));
  document.querySelectorAll('.aba-checkout').forEach(b => b.classList.remove('ativa'));

  document.getElementById('painel' + qual.charAt(0).toUpperCase() + qual.slice(1)).classList.add('ativo');
  const abaBtn = document.querySelector(`.aba-checkout[data-painel="${qual}"]`);
  if (abaBtn) abaBtn.classList.add('ativa');

  if (qual === 'pagamento') {
    prepararPainelPagamento();
  }
}

function voltarParaCarrinhoCheckout() {
  modalCheckout.style.display = 'none';
  abrirCarrinho();
}

// ================================================================
// PAINEL DE PAGAMENTO — pix e resumo
// ================================================================
function prepararPainelPagamento() {
  const itens = Object.values(carrinho);
  const subtotal = itens.reduce((s, ci) => s + ci.item.preco * ci.quantidade, 0);
  const totalQtd = itens.reduce((s, ci) => s + ci.quantidade, 0);
  const taxa = calcularFretePorQuantidade(totalQtd);

  // calcula desconto do cupom
  const usuario = buscarUsuarioLogado();
  const dadosCompletos = usuario ? (buscarDadosCompletosUsuario(usuario.id) || usuario) : null;
  const cupons = dadosCompletos ? (dadosCompletos.cupons || []) : [];
  let valorDesconto = 0;
  let textoCupom = '';

  if (cupomSelecionado !== null && cupons[cupomSelecionado]) {
    const cupom = cupons[cupomSelecionado];
    if (cupom.tipo === 'percentual') {
      valorDesconto = subtotal * cupom.desconto;
      textoCupom = `−${Math.round(cupom.desconto * 100)}% (${cupom.codigo})`;
    }
  }

  const total = Math.max(0, subtotal - valorDesconto + taxa);

  // calcula prazo estimado com base nos itens
  const temPratosPrincipais = itens.some(ci => ci.item.categoria === 'pratos');
  const prazoBase = temPratosPrincipais ? '35–50' : '20–35';
  const prazoLabel = window._prazoEntrega || (prazoBase + ' min');

  document.getElementById('textoPrazo').textContent = prazoLabel;
  document.getElementById('prazoSucesso').textContent = prazoLabel;

  // monta o resumo de valores
  const resumoEl = document.getElementById('resumoValores');
  resumoEl.innerHTML = `
    <div class="linha-valor"><span>Subtotal</span><span>${formatarPreco(subtotal)}</span></div>
    ${valorDesconto > 0 ? `<div class="linha-valor desconto"><span>Desconto (${textoCupom})</span><span>−${formatarPreco(valorDesconto)}</span></div>` : ''}
    <div class="linha-valor"><span>Taxa de entrega</span><span>${formatarPreco(taxa)}</span></div>
    <div class="linha-valor total"><span>Total</span><span>${formatarPreco(total)}</span></div>
    <p style="font-size:.8rem;color:var(--muted);margin-top:.5rem;text-align:center">Valor a transferir via Pix: <strong>${formatarPreco(total)}</strong></p>
  `;

  // guarda o total para confirmar pagamento
  window._totalPedidoFinal = total;
  window._descontoCupom = valorDesconto;
  taxaEntregaCalculada = parseFloat(taxa.toFixed(2));
  if (taxaEntregaTexto) taxaEntregaTexto.textContent = formatarPreco(taxaEntregaCalculada);
}

// ================================================================
// COPIAR CHAVE PIX
// ================================================================
function copiarChavePix() {
  navigator.clipboard.writeText(CHAVE_PIX).then(() => {
    exibirToast('✅ Chave Pix copiada!');
  }).catch(() => {
    exibirToast('Chave: ' + CHAVE_PIX + ' (copie manualmente)');
  });
}

// ================================================================
// CONFIRMAR PAGAMENTO PIX
// ================================================================
function confirmarPagamentoPix() {
  // valida formulário de dados antes de confirmar
  const nome = document.getElementById('checkNome').value.trim();
  const email = document.getElementById('checkEmail').value.trim();
  const cep = document.getElementById('checkCep').value.trim();
  const num = document.getElementById('checkNumero').value.trim();

  if (!nome || !email) {
    exibirToast('Preencha seus dados na aba "Dados".');
    trocarPainelCheckout('dados');
    return;
  }
  if (!cep || !num) {
    exibirToast('Preencha o CEP e número do endereço.');
    trocarPainelCheckout('dados');
    return;
  }

  const enderecoEntrega = {
    rua: document.getElementById('checkRua').value.trim(),
    numero: num,
    bairro: document.getElementById('checkBairro').value.trim(),
    cidade: document.getElementById('checkCidade').value.trim(),
    cep,
    complemento: document.getElementById('checkComplemento').value.trim(),
    texto: [document.getElementById('checkRua').value.trim(), num, document.getElementById('checkBairro').value.trim(), document.getElementById('checkCidade').value.trim(), cep].filter(Boolean).join(', '),
    atualizadoEm: Date.now()
  };

  // gera número único do pedido
  const numeroPedido = '#' + Math.floor(100000 + Math.random() * 900000);

  // salva pedido no perfil do usuário e atualiza pontos/missões
  registrarPedidoNoPerfil(numeroPedido, enderecoEntrega);

  // fecha modal de checkout e mostra sucesso
  modalCheckout.style.display = 'none';
  numeroPedidoSucesso.textContent = `Pedido ${numeroPedido}`;
  modalSucesso.style.display = 'flex';
}

// ================================================================
// REGISTRAR PEDIDO NO PERFIL
// ================================================================
function registrarPedidoNoPerfil(numeroPedido, enderecoEntrega = null) {
  const usuario = buscarUsuarioLogado();
  if (!usuario) return;

  const dadosCompletos = buscarDadosCompletosUsuario(usuario.id);
  if (!dadosCompletos) return;

  const itensCarrinho = Object.values(carrinho);
  const pratosPrincipais = itensCarrinho.filter(ci => ci.item.categoria === 'pratos');
  const totalPrincipais = pratosPrincipais.reduce((s, ci) => s + ci.quantidade, 0);

  // pontos: 10 pontos por real gasto
  const pontos = Math.floor(window._totalPedidoFinal || 0);
  dadosCompletos.pontos = (dadosCompletos.pontos || 0) + pontos;

  // contagem de pratos principais para missão
  dadosCompletos.pratosPedidos = (dadosCompletos.pratosPedidos || 0) + totalPrincipais;

  // verifica se completou a missão de 4 pratos principais
  dadosCompletos.missoes = dadosCompletos.missoes || {};
  if ((dadosCompletos.pratosPedidos) >= 4 && !dadosCompletos.missoes.comprar4Pratos?.usada) {
    dadosCompletos.missoes.comprar4Pratos = dadosCompletos.missoes.comprar4Pratos || {};
    dadosCompletos.missoes.comprar4Pratos.concluida = true;
  }

  // remove cupom usado
  if (cupomSelecionado !== null && dadosCompletos.cupons && dadosCompletos.cupons[cupomSelecionado]) {
    dadosCompletos.cupons.splice(cupomSelecionado, 1);
    cupomSelecionado = null;
  }

  // salva pedido no histórico
  const pedidos = dadosCompletos.pedidosRealizados || [];
  pedidos.push({
    numero: numeroPedido,
    data: new Date().toLocaleDateString('pt-BR'),
    total: window._totalPedidoFinal || 0,
    itens: itensCarrinho.map(ci => ({ nome: ci.item.nome, qty: ci.quantidade })),
    enderecoEntrega
  });
  dadosCompletos.pedidosRealizados = pedidos;

  if (enderecoEntrega) {
    dadosCompletos.enderecos = Array.isArray(dadosCompletos.enderecos) ? dadosCompletos.enderecos : [];
    dadosCompletos.enderecos = [enderecoEntrega, ...dadosCompletos.enderecos.filter(e => enderecoParaTexto(e) !== enderecoEntrega.texto)].slice(0, 2);
  }

  salvarDadosUsuario(dadosCompletos);
}

// ================================================================
// MODAL DE SUCESSO — reiniciar
// ================================================================
btnNovosPedido.addEventListener('click', () => {
  modalSucesso.style.display = 'none';
  carrinho = {};
  cupomSelecionado = null;
  atualizarCarrinho();
});

// ================================================================
// INICIALIZAÇÃO
// ================================================================
renderizarGrade();
atualizarCarrinho();
