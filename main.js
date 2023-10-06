  // Função para adicionar classe 'scrolled' ao menu quando a página for rolada
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Função para alternar a exibição do menu responsivo
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});