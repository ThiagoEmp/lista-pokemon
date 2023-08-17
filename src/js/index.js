const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () =>{
    body.classList.add("modo-claro");
});