/*
  O que precisamos fazer?
   Quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente.

   OBJETIVO 1 - Quando clicar no botão do personagemna lista, marcar o botão como selecionado.
       PASSO 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.
       PASSO 2 - Adicionar a classe  "selecionado" no botão que o usuário clicou.
       PASSO 3 - Verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele.

   OBJETIVO 2 - Quando clicar no botão personagem mostrar as informações do personagem.
       PASSO 1 - Pegar o personagem no JS pra poder mostrar ou esconder ele.
       PASSO 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou.
       PASSO 3 - Verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele.
*/
        
// OBJETIVO 1 - PASSO 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.
const botoes = document.querySelectorAll('.botao');


//OBJETIVO 2 - PASSO 1 - Pegar o personagem no JS pra poder mostrar ou esconder ele.
const personagem = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //OBJETIVO 1 - PASSO 3 - Verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele.
        desselecionarBotao();

        //OBJETIVO 1 - PASSO 2 - Adicionar a classe  "selecionado" no botão que o usuário clicou.
        botao.classList.add("selecionado");

        //OBJETIVO 2 - PASSO 3 - Verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele.
        desselecionarPersonagem();

       //OBJETIVO 2 - PASSO 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou.
       personagem[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
