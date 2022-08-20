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