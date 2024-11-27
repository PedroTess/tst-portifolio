
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


document.addEventListener("DOMContentLoaded", () => {
    // Menu mobile elements
    const btnMenuMob = document.querySelector('#btn-menu-mob');
    const line1 = document.querySelector('.line-menumob-1');
    const line2 = document.querySelector('.line-menumob-2');
    const menuMobile = document.querySelector('#menu-mobile');
    const body = document.querySelector('body');

    // Validate selectors
    if (!btnMenuMob || !line1 || !line2 || !menuMobile) {
        console.error("Menu mobile elements not found in the DOM");
        return;
    }

    // Add click event listener for toggling menu
    btnMenuMob.addEventListener("click", () => {
        line1.classList.toggle('ativo1');
        line2.classList.toggle('ativo2');
        menuMobile.classList.toggle('abrir');
        body.classList.toggle('no-overflow');
    });

    // Close menu when clicking a link inside it
    document.querySelectorAll('#menu-mobile a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', () => {
            line1.classList.remove('ativo1');
            line2.classList.remove('ativo2');
            menuMobile.classList.remove('abrir');
            body.classList.remove('no-overflow');
        });
    });

    // Log for debugging purposes
    console.log("Mobile menu script initialized successfully");
});

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
