function toggleMode() {
    const html = document.documentElement

    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(html.classList.contains('light') && prefersDarkMode) {
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    }
}

/* O toggleMode é uma função que vai verificar se o usuario 
prefere o dark mode automaticamente, mas se o usuario
preferir trocar vai ter o botão para a troca dos temas.*/