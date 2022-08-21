const lista = document.querySelectorAll('.lista');
const home = document.querySelectorAll('#home');

function ativarLink() {
    lista.forEach((item)=>
    item.classList.remove('ativo'))
    this.classList.add('ativo')
}
lista.forEach((item) =>
item.addEventListener('click', ativarLink))




mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


window.sr = ScrollReveal({reset: true})

sr.reveal('.perfil', { delay: 700 })
sr.reveal('.contatos', { delay: 700 })
sr.reveal('.projetos', { delay: 700 })
sr.reveal('.navbar', { delay: 1000 })


function mouseEnter() {
  document.getElementById("demo").innerHTML = "Tecnólogo em Análise e Desenvolvimento de Sistemas - Fatec João Mod, 2022- <br>Técnico Em Desenvolvimento de Sistemas - Etec Alfredo de Barros Santos, 2019-2021"
}
function mouseEnter2() {
  document.getElementById("demo").innerHTML = "<ion-icon class='icone-perfil' name='logo-javascript'></ion-icon> <ion-icon class='icone-perfil' name='logo-html5'></ion-icon> <ion-icon class='icone-perfil' name='logo-css3'></ion-icon> <ion-icon class='icone-perfil' name='logo-python'></ion-icon> <ion-icon class='icone-perfil' name='server'></ion-icon>"
}
function mouseEnter3() {
  document.getElementById("demo").innerHTML = "IT Essentials - Cisco, 2022"
}
function mouseEnter4() {
  document.getElementById("demo").innerHTML = "Nenhuma experiência no mercado."
}

function mouseLeave() {
  document.getElementById("demo").innerHTML = " "
}