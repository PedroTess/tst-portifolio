
let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    }else{
        navBar.classList.remove('rolar')
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// Menu de navegação mobile

let btnMenuMob = document.querySelector ('#btn-menu-mob')
let line1 = document.querySelector ('.line-menumob-1')
let line2 = document.querySelector ('.line-menumob-2')
let menuMobile = document.querySelector ('#menu-mobile') 
let body = document.querySelector ('body')

btnMenuMob.addEventListener("click",()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
    body.classList.toggle('no-overflow')
})

// Fechar o menu mobile ao clicar em um link
document.querySelectorAll('#menu-mobile a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
        // Verifica se o menu está aberto e, se sim, fecha
        if (menuMobile.classList.contains('abrir')) {
            line1.classList.remove('ativo1');
            line2.classList.remove('ativo2');
            menuMobile.classList.remove('abrir');
            body.classList.remove('no-overflow');
        }
    });
});
