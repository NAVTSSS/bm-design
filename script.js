/* ================================================================
   BRUNO DESIGN — PORTFÓLIO
   script.js
   ================================================================

   ÍNDICE:
   1. DADOS DOS CLIENTES  ← EDITE AQUI para adicionar / trocar projetos
   2. Header scroll + menu mobile
   3. Animações de entrada (Intersection Observer)
   4. Portfólio — abrir / fechar modal
   5. Formulário de contato (feedback visual)

================================================================ */


/* ================================================================
   1. DADOS DOS CLIENTES
   ================================================================

   ✏️ COMO ADICIONAR UM NOVO CLIENTE:
   -------------------------------------------------
   a) Copie um bloco { id: "clienteX", ... } abaixo
   b) Troque o "id" por um ID único (ex: "cliente7")
   c) Preencha os campos: nome, categoria, descricao, tags, logo, link
   d) Em galeria[], coloque os caminhos das imagens do projeto
      (se não tiver imagens ainda, deixe o array vazio: galeria: [])
   e) No index.html, adicione um novo <div class="portfolio__item">
      com data-client="cliente7" (o mesmo ID que você escolheu aqui)

================================================================ */
const clientes = {

  /* ─── CLIENTE 1 ─── */
  cliente1: {
    nome: "Estúdio Forma",

    /* ✏️ Categoria exibida no topo do modal */
    categoria: "Identidade Visual",

    /* ✏️ Texto descritivo do projeto */
    descricao: `
      Projeto completo de identidade visual para o Estúdio Forma, 
      escritório de design de interiores minimalista. 
      O desafio era criar uma marca elegante e sofisticada que transmitisse 
      precisão, bom gosto e cuidado com os detalhes.
      
      Desenvolvemos logotipo, paleta de cores, tipografia, papelaria 
      e guia de marca completo.
    `,

    /* ✏️ Tags de serviços — adicione ou remova à vontade */
    tags: ["Branding", "Papelaria", "Guia de Marca"],

    /* ✏️ Caminho da logo usada no modal */
    logo: "LOGO_PNG_4.png",

    /* ✏️ Link externo do cliente (deixe "" se não houver) */
    link: "https://exemplo.com/estudoforma",

    /* ✏️ Imagens da galeria — adicione caminhos de imagens reais
         Exemplo: ["projetos/forma-1.jpg", "projetos/forma-2.jpg"]
         Deixe [] se não tiver imagens por enquanto */
    galeria: []
  },

  /* ─── CLIENTE 2 ─── */
  cliente2: {
    nome: "Botânica Verde",
    categoria: "Branding & Social Media",
    descricao: `
      Criação de identidade visual para a Botânica Verde, 
      loja de plantas e produtos naturais. 
      A marca precisava transmitir naturalidade, acolhimento e conexão 
      com a natureza, sem cair em clichês do segmento.
      
      Entregamos: logotipo, variações de logo, paleta completa, 
      tipografia e templates para Instagram.
    `,
    tags: ["Branding", "Social Media", "Instagram"],
    logo: "LOGO_PNG_3.png",
    link: "",
    galeria: []
  },

  /* ─── CLIENTE 3 ─── */
  cliente3: {
    nome: "Arquitetura Nova",
    categoria: "Identidade Visual",
    descricao: `
      Rebranding para o escritório de arquitetura Arquitetura Nova. 
      A identidade anterior estava desatualizada e não refletia mais 
      a maturidade e a qualidade dos projetos do escritório.
      
      O novo posicionamento é moderno, clean e premium — 
      transmitindo confiança e excelência técnica.
    `,
    tags: ["Rebranding", "Identidade Visual", "Papelaria"],
    logo: "LOGO_PNG_2.png",
    link: "https://exemplo.com/arquiteturanova",
    galeria: []
  },

  /* ─── CLIENTE 4 ─── */
  cliente4: {
    nome: "Café Origem",
    categoria: "Branding Completo",
    descricao: `
      Identidade visual completa para o Café Origem, 
      cafeteria especializada em grãos de origem única.
      
      Do conceito ao material final: nome, logotipo, embalagens, 
      cardápio, sinalização interna e kit boas-vindas para franqueados.
    `,
    tags: ["Branding", "Embalagem", "Sinalização"],
    logo: "LOGO_PNG.png",
    link: "",
    galeria: []
  },

  /* ─── CLIENTE 5 ─── */
  cliente5: {
    nome: "Tech Simples",
    categoria: "Logo & Identidade",
    descricao: `
      Criação de logo e identidade visual para a Tech Simples, 
      startup de tecnologia focada em simplificar processos para 
      pequenas empresas.
      
      A marca precisava ser moderna, acessível e transmitir 
      confiança sem ser intimidadora.
    `,
    tags: ["Logo", "Identidade Visual", "Digital"],
    logo: "LOGO_PNG_4.png",
    link: "https://exemplo.com/techsimples",
    galeria: []
  },

  /* ─── CLIENTE 6 ─── */
  cliente6: {
    nome: "Marca Livre",
    categoria: "Branding & Estratégia",
    descricao: `
      Projeto de branding estratégico para a Marca Livre, 
      consultoria de marketing digital.
      
      Trabalhamos desde o posicionamento de marca até a entrega 
      dos materiais visuais: identidade, apresentações, templates 
      e brand book completo.
    `,
    tags: ["Branding", "Brand Book", "Estratégia"],
    logo: "LOGO_PNG_3.png",
    link: "",
    galeria: []
  },

  /*
  ──────────────────────────────────────────────────────────────────
  ✏️ MODELO PARA NOVO CLIENTE — copie e cole este bloco, depois
     preencha os dados e adicione o card no index.html

  cliente7: {
    nome: "Nome do Cliente",
    categoria: "Tipo de Projeto",
    descricao: `
      Descreva o projeto aqui.
      Pode usar múltiplas linhas.
    `,
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    logo: "caminho/para/logo-cliente.png",
    link: "https://siteocliente.com",
    galeria: [
      "caminho/imagem1.jpg",
      "caminho/imagem2.jpg"
    ]
  },
  ──────────────────────────────────────────────────────────────────
  */

};


/* ================================================================
   2. HEADER — scroll effect + menu mobile
================================================================ */
const header     = document.getElementById('header');
const hamburger  = document.getElementById('hamburger');
const nav        = document.getElementById('nav');

/* Adiciona classe "scrolled" quando rola mais de 50px */
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

/* Abre / fecha menu mobile */
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('open');
});

/* Fecha menu ao clicar em um link */
nav.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  });
});


/* ================================================================
   3. ANIMAÇÕES DE ENTRADA (Intersection Observer)
   Elementos com a classe "fade-in" ficam invisíveis até entrarem
   na tela, quando ganham a classe "visible".
================================================================ */

/* Adiciona fade-in em seções e cards automaticamente */
document.querySelectorAll(
  '.hero__content, .hero__visual, .sobre__text, .sobre__visual, ' +
  '.portfolio__item, .contato__info, .contato__form, .portfolio__header'
).forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); /* Para de observar após animar */
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


/* ================================================================
   4. PORTFÓLIO — Modal de detalhes
================================================================ */
const overlay    = document.getElementById('modalOverlay');
const modal      = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

/* Elementos do modal que serão preenchidos */
const modalLogo     = document.getElementById('modalLogo');
const modalCategory = document.getElementById('modalCategory');
const modalTitle    = document.getElementById('modalTitle');
const modalDesc     = document.getElementById('modalDesc');
const modalTags     = document.getElementById('modalTags');
const modalLink     = document.getElementById('modalLink');
const modalGallery  = document.getElementById('modalGallery');

/* Abre o modal ao clicar em um card */
document.querySelectorAll('.portfolio__item').forEach(item => {
  item.addEventListener('click', () => {
    const clienteId = item.getAttribute('data-client');
    const dados = clientes[clienteId];

    if (!dados) {
      console.warn(`Dados do cliente "${clienteId}" não encontrados em script.js`);
      return;
    }

    /* Preenche os dados no modal */
    modalLogo.src        = dados.logo;
    modalLogo.alt        = dados.nome;
    modalCategory.textContent = dados.categoria;
    modalTitle.textContent    = dados.nome;
    modalDesc.textContent     = dados.descricao.trim();

    /* Tags */
    modalTags.innerHTML = dados.tags
      .map(tag => `<span class="modal__tag">${tag}</span>`)
      .join('');

    /* Link externo */
    if (dados.link) {
      modalLink.href = dados.link;
      modalLink.style.display = 'inline-flex';
    } else {
      modalLink.style.display = 'none';
    }

    /* Galeria de imagens */
    if (dados.galeria && dados.galeria.length > 0) {
      modalGallery.innerHTML = dados.galeria
        .map(img => `<img src="${img}" alt="Imagem do projeto ${dados.nome}" loading="lazy" />`)
        .join('');
    } else {
      modalGallery.innerHTML = '';
    }

    /* Abre o modal */
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; /* Trava o scroll da página */
  });
});

/* Fecha o modal */
function fecharModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', fecharModal);

/* Fecha ao clicar fora do modal (no overlay) */
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) fecharModal();
});

/* Fecha com a tecla Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});


/* ================================================================
   5. FORMULÁRIO DE CONTATO — feedback visual
   (Para envio real, conecte ao Formspree ou EmailJS)
================================================================ */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); /* Evita recarregar a página */

  /* Simula envio — troque esta parte pelo código do Formspree/EmailJS */
  const btn = form.querySelector('.btn');
  btn.textContent = 'Enviando...';
  btn.disabled    = true;

  setTimeout(() => {
    btn.textContent = 'Enviar mensagem';
    btn.disabled    = false;
    form.reset();
    formSuccess.classList.add('visible');

    /* Oculta a mensagem após 4 segundos */
    setTimeout(() => formSuccess.classList.remove('visible'), 4000);
  }, 1200);
});
