let abas = document.querySelectorAll('section.aba');
for(let i=0; i<abas.length; i++){
  let itensMenu = document.querySelectorAll('#menu-inicial a');
  for(let j=0; j<itensMenu.length; j++){
    itensMenu[j].addEventListener('click', function() {
      let hrefItem = event.target.href;
      let idAba = hrefItem.substr(hrefItem.lastIndexOf('#'));
      console.log(idAba);
      abas[i].classList.remove('atual');
      let abaAtualEl = document.querySelector('section' + idAba);
      abaAtualEl.classList.add('atual');
    });
  }
}
