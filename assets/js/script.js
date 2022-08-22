// mybutton = document.getElementById("myBtn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


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
  document.getElementById("demo").innerHTML = "<i class='fab fa-js icone-perfil'></i> <i class='fab icone-perfil fa-html5'></i> <i class='fab icone-perfil fa-css3-alt'></i> <i class='fab icone-perfil fa-python'></i> <i class='icone-perfil fab fa-java'></i> <i class='fas icone-perfil fa-server'></i> "
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


let section = document.querySelectorAll('section');
        let lists = document.querySelectorAll('.lista');
        function activeLink(li) {
            lists.forEach((item) => item.classList.remove('ativo'));
            li.classList.add('ativo');
        }
        lists.forEach((item) =>
            item.addEventListener('click', function(){
                activeLink(this);
            }));

        window.onscroll = () => {
            section.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 50;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    const target = document.querySelector(`[href='#${id}']`).parentElement;
                    activeLink(target);
                }
            })
        };


/*==================== SHOW SCROLL UP ====================*/ 
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
