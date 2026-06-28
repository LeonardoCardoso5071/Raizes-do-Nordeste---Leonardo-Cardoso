/* ============================================================
   RAÍZES DO NORDESTE — script.js  (v2)
   Nav: Início · Restaurante · Cardápio · Chef · Delivery
   ============================================================ */

// ---- DATA ----
// Cardápio base separado por categoria.
const MENU = {
  entradas: [
    { name: "Dadinho de Tapioca com Geleia de Pimenta", desc: "Crocantes cubinhos de tapioca fritos acompanhados de geleia artesanal de pimenta — entrada clássica que conquistou o Brasil.", price: "R$ 28,90", img: "IMG/Dadinho.png" },
    { name: "Caldo de Sururu", desc: "Caldo rico e aromático feito com sururu fresco, azeite de dendê e ervas da caatinga. Reconfortante e autêntico.", price: "R$ 22,90", img: "IMG/Sururu.png" },
    { name: "Macaxeira Frita com Aioli de Coriandro", desc: "Palitos dourados de macaxeira fresca com molho cremoso de coentro e alho — rusticidade encontra sofisticação.", price: "R$ 19,90", img: "IMG/Macaxeira.png" },
    { name: "Bruschetta Nordestina", desc: "Fatias de broa de milho torradas com carne de sol desfiada, queijo coalho grelhado e pico de gallo de tomate.", price: "R$ 25,90", img: "IMG/Bruschetta.png" }
  ],
  pratos: [
    { name: "Baião de Dois Completo", desc: "O clássico dos clássicos: arroz com feijão fradinho, queijo coalho, linguiça, carne de sol e bacon defumado.", price: "R$ 54,90", img: "IMG/Pratodochef.png" },
    { name: "Carne de Sol com Macaxeira", desc: "Macia carne de sol ao ponto, com purê de macaxeira cremoso, manteiga de garrafa e vinagrete.", price: "R$ 62,90", img: "IMG/Carnedesol.png" },
    { name: "Caldeirada de Frutos do Mar", desc: "Caldeirada encorpada com camarão, peixe, mariscos e lagostim no molho de tomate com coco e ervas.", price: "R$ 78,90", img: "IMG/Caldeirada.png" },
    { name: "Frango Caipira Assado", desc: "Frango caipira marinado 24h em tempero nordestino, assado lentamente com batata doce e farofa de dendê.", price: "R$ 58,90", img: "IMG/Frango.png" },
    { name: "Buchada de Bode", desc: "Ícone da culinária sertaneja, preparada com miúdos temperados e cozida na própria bucha do animal.", price: "R$ 45,90", img: "IMG/Buchada.png" },
    { name: "Moqueca de Camarão Nordestina", desc: "Camarões frescos cozidos em leite de coco, azeite de dendê, tomate, pimentão e coentro abundante.", price: "R$ 72,90", img: "IMG/Moqueca.png" },
    { name: "Sarapatel com Pirão", desc: "Sarapatel com vísceras temperadas com ervas do mato, servido com pirão de fubá dourado.", price: "R$ 48,90", img: "IMG/Sarapatel.png" },
    { name: "Costela de Boi na Pedra", desc: "Costela bovina com 8h de cozimento lento, servida sobre pedra quente com vinagrete de baião e farofa.", price: "R$ 89,90", img: "IMG/Costela.png" },
    { name: "Peixe Assado na Folha de Bananeira", desc: "Peixe fresco do dia marinado com limão e ervas, assado na folha de bananeira com acompanhamentos.", price: "R$ 68,90", img: "IMG/Peixe.png" },
    { name: "Feijão Verde com Charque", desc: "Feijão verde fresquinho cozido com charque, pimenta-de-cheiro, tomate e um fio de manteiga de garrafa.", price: "R$ 42,90", img: "IMG/Feijao.png" }
  ],
  sobremesas: [
    { name: "Cartola", desc: "A rainha das sobremesas nordestinas: banana frita com queijo coalho derretido, canela e açúcar mascavo.", price: "R$ 18,90", img: "IMG/Cartola.png" },
    { name: "Tapioca com Coco Queimado", desc: "Tapioca morna recheada com coco queimado, doce de leite caseiro e uma pitada de flor de sal.", price: "R$ 16,90", img: "IMG/Tapioca.png" },
    { name: "Pudim de Rapadura", desc: "Clássico pudim nordestino feito com rapadura pura, ovos caipiras e leite de coco fresco.", price: "R$ 15,90", img: "IMG/Pudim.png" },
    { name: "Bolo de Milho Verde com Calda de Goiaba", desc: "Bolo úmido de milho verde com calda de goiaba fresca artesanal. Puro afeto em forma de fatia.", price: "R$ 14,90", img: "IMG/Bolo.png" }
  ]
};

// ---- STATE ----
// Estado atual dos carrosséis (categoria/prato) e trava de animação.
const CATEGORIES = ['entradas', 'pratos', 'sobremesas'];
let currentCat = 0;
let currentDish = 0;
let isAnimating = false;

// ---- DOM refs ----
// Pegando os elementos do HTML que o JS vai mexer.
const categoryTrack = document.getElementById('categoryTrack');
const dishStage = document.getElementById('dishStage');
const dishName = document.getElementById('dishName');
const dishDesc = document.getElementById('dishDesc');
const dishPrice = document.getElementById('dishPrice');
const dishDots = document.getElementById('dishDots');
const navbar = document.getElementById('navbar');
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

// ---- NAV: scroll shadow ----
// Quando rola a página, coloca sombra na navbar e atualiza link ativo.
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  highlightNavLink();
});

// ---- NAV: burger ----
// Abre/fecha o menu mobile no clique do hambúrguer.
navBurger.addEventListener('click', () => navMobile.classList.toggle('open'));

// ---- NAV: smooth scroll for all [data-scroll] links ----
// Sections mapped: hero → #hero | restaurante → #restaurante | cardapio → #cardapio | chef → #chef
// Faz scroll suave até a seção clicada e fecha menu mobile.
document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.dataset.scroll;
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    navMobile.classList.remove('open');
  });
});

// ---- NAV: active link highlight on scroll ----
const NAV_SECTIONS = ['hero', 'restaurante', 'cardapio', 'chef'];
// Marca no menu qual seção está "valendo" na tela agora.
function highlightNavLink() {
  const scrollY = window.scrollY + 120;
  let current = 'hero';
  NAV_SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });
  document.querySelectorAll('.nav-links a[data-scroll]').forEach(a => {
    a.classList.toggle('nav-active', a.dataset.scroll === current);
  });
}
highlightNavLink();

// ================================================================
//   CATEGORY CAROUSEL
// ================================================================
// Troca de categoria com animação lateral e reset do prato selecionado.
function renderCategory(newIdx, direction) {
  if (isAnimating) return;
  isAnimating = true;

  const slides = categoryTrack.querySelectorAll('.category-slide');
  const prev = slides[currentCat];
  const next = slides[newIdx];

  next.style.transform = direction > 0 ? 'translateX(100%)' : 'translateX(-100%)';
  next.style.opacity = '0';
  next.style.transition = 'none';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      prev.style.transition = 'transform .5s cubic-bezier(.77,0,.18,1), opacity .4s';
      prev.style.transform = direction > 0 ? 'translateX(-100%)' : 'translateX(100%)';
      prev.style.opacity = '0';

      next.style.transition = 'transform .5s cubic-bezier(.77,0,.18,1), opacity .4s';
      next.style.transform = 'translateX(0)';
      next.style.opacity = '1';

      setTimeout(() => {
        prev.classList.remove('active');
        prev.style.cssText = '';
        next.classList.add('active');
        next.style.cssText = '';
        currentCat = newIdx;
        currentDish = 0;
        renderDishes();
        isAnimating = false;
      }, 520);
    });
  });

  // Depois da troca, garante foco na seção do cardápio.
  const section = document.getElementById('cardapio');
  if (section) {
    setTimeout(() => {
      const y = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 80);
  }
}

// Botão de voltar categoria.
document.getElementById('catPrev').addEventListener('click', () => {
  if (isAnimating) return;
  renderCategory((currentCat - 1 + CATEGORIES.length) % CATEGORIES.length, -1);
});
// Botão de avançar categoria.
document.getElementById('catNext').addEventListener('click', () => {
  if (isAnimating) return;
  renderCategory((currentCat + 1) % CATEGORIES.length, 1);
});

// ================================================================
//   DISH CAROUSEL
// ================================================================
// Pega os pratos da categoria que está ativa.
function getDishes() { return MENU[CATEGORIES[currentCat]]; }

// Decide posição visual de cada card no carrossel.
function getSlotClass(idx, total, center) {
  const d = ((idx - center) % total + total) % total;
  if (d === 0) return 'center';
  if (d === 1) return 'right';
  if (d === total - 1) return 'left';
  if (d === 2) return 'far-right';
  if (d === total - 2) return 'far-left';
  return 'hidden';
}

// Monta os cards dos pratos e as bolinhas de navegação.
function renderDishes() {
  const dishes = getDishes();
  dishStage.innerHTML = '';
  dishDots.innerHTML = '';

  dishes.forEach((dish, idx) => {
    const el = document.createElement('div');
    el.className = 'dish-item ' + getSlotClass(idx, dishes.length, currentDish);
    el.innerHTML = `<img src="${dish.img}" alt="${dish.name}" loading="lazy">`;
    el.addEventListener('click', () => {
      if (idx !== currentDish) { currentDish = idx; updateDishPositions(); }
    });
    dishStage.appendChild(el);

    const dot = document.createElement('div');
    dot.className = 'dot' + (idx === currentDish ? ' active' : '');
    dot.addEventListener('click', () => { currentDish = idx; updateDishPositions(); });
    dishDots.appendChild(dot);
  });

  updateDishInfo();
}

// Atualiza posições dos cards e estado das bolinhas.
function updateDishPositions() {
  const dishes = getDishes();
  dishStage.querySelectorAll('.dish-item').forEach((el, idx) => {
    el.className = 'dish-item ' + getSlotClass(idx, dishes.length, currentDish);
  });
  dishDots.querySelectorAll('.dot').forEach((d, idx) => d.classList.toggle('active', idx === currentDish));
  updateDishInfo();
}

// Atualiza nome, descrição e preço do prato no painel.
function updateDishInfo() {
  const dish = getDishes()[currentDish];
  dishName.textContent = dish.name;
  dishDesc.textContent = dish.desc;
  dishPrice.textContent = dish.price;
}

// Navega para o prato anterior.
document.getElementById('dishPrev').addEventListener('click', () => {
  currentDish = (currentDish - 1 + getDishes().length) % getDishes().length;
  updateDishPositions();
});
// Navega para o próximo prato.
document.getElementById('dishNext').addEventListener('click', () => {
  currentDish = (currentDish + 1) % getDishes().length;
  updateDishPositions();
});

// keyboard navigation
// Atalho no teclado: setas esquerda/direita trocam prato.
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { currentDish = (currentDish - 1 + getDishes().length) % getDishes().length; updateDishPositions(); }
  if (e.key === 'ArrowRight') { currentDish = (currentDish + 1) % getDishes().length; updateDishPositions(); }
});

// ================================================================
//   INIT
// ================================================================
// Render inicial quando a página carrega.
renderDishes();

// Scroll-triggered fade-ins for band / chef panels
// Observer pra animar elementos quando entram na tela.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Aplica estilo inicial e registra os elementos na animação.
document.querySelectorAll('.band-img, .band-copy, .chef-img, .chef-copy, .strip-overlay blockquote').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});
