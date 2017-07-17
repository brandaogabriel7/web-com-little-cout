linkDosVideos = [
    'ceJjdHE_C30',
    'XihlxlIroww',
    'gph85HDaZ9A',
    'lFVgEqmV8gs',
    'nxc4nJmDdmA',
    'Q5CKn1GSSWk',
    'x4HD0ZC59j0',
    'Q5KJsOTVOQo',
    'RVWzaZafDLY',
    'j_pOMVIyTYQ',
    '2BuQHOV5Da8',
    '4V3aQk2s1wM',
    'fnrga_1FyY8',
    'TPR8TrTEInU',
  ];

legendasDosVideos = [
  'WEB - Introdução à Programação Web',
  'HTML - Plantas Carnívoras, Ingredientes do HTML (tags) e Temperando com CSS',
  'HTML - Code Dojo 🏯, Mais tags HTML e Entendendo regras CSS',
  'HTML - Tabelas, Tesouros 👑 e Piratas',
  'CSS - Selecionando Classes',
  'CSS - História, a Cascata e outros Seletores, Ferramentas e Ninjas 💨',
  'CSS - Div/Span, Box Model, Float e Desafios',
  'CSS - Fontes, Multimídia e Unicórnios 🦄',
  'CSS - Divitite e tags semânticas, display, pseudo-coisas e Assombrações 👻',
  'CSS - Posicionamento e mais Assombrações 👻👻👻',
  'CSS - Especificidade, Centralizando coisas e o Coral 55 🌴',
  'JavaScript - Características da linguagem e Resolvendo equações 📈',
  'JavaScript - Arranjos, Alterando o DOM e Exploração Espacial 👽',
  'JavaScript - História, Estilizando elementos, Eventos de mouse e Depuração',
];

let indiceDoVideo = 0,
    indiceDaLegenda = 0;

let proximo = document.querySelector('#proximo'),
    anterior = document.querySelector('#anterior'),
    videoAtual = document.querySelector('#video'),
    legendaAtual = document.querySelector('#legenda');

const inicioLinks = 'https://www.youtube.com/embed/';

proximo.addEventListener('click', function(p){
    indiceDoVideo = (indiceDoVideo + 1 + linkDosVideos.length) % linkDosVideos.length;
    videoAtual.src = inicioLinks + linkDosVideos[indiceDoVideo];
    indiceDaLegenda = (indiceDaLegenda + 1 + legendasDosVideos.length) % legendasDosVideos.length;
    legendaAtual.innerHTML = legendasDosVideos[indiceDaLegenda];
});
anterior.addEventListener('click', function(p){
  indiceDoVideo = (indiceDoVideo - 1 + linkDosVideos.length) % linkDosVideos.length;
  videoAtual.src = inicioLinks + linkDosVideos[indiceDoVideo];
  indiceDaLegenda = (indiceDaLegenda - 1 + legendasDosVideos.length) % legendasDosVideos.length;
  legendaAtual.innerHTML = legendasDosVideos[indiceDaLegenda];
});
