var nav = document.getElementById('nav');
var botao = document.getElementById('botaomenu');

botao.addEventListener('click', () => {
    if(nav.classList.contains("aberto")){
        nav.classList.remove("aberto");
        nav.classList.add("fechado")
        nav.classList.add("hidden")
        botao.innerText = "menu"
    }

    else if(nav.classList.contains("fechado")){
        nav.classList.remove("fechado");
        nav.classList.remove("hidden")
        nav.classList.add("aberto")
        botao.innerText = "close"
    }
});