const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao-lua")

botaoAlterarTema.addEventListener("click", () => {

    const modoClaroEstaAtivo = body.classList.contains("modo-claro");

    if (modoClaroEstaAtivo) {
        body.classList.remove("modo-claro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/logo-lua.png")
    } else {
        body.classList.add("modo-claro")

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/logo-sol.png")
    }




});