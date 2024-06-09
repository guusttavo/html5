/*

OBJETIVO 1 - quando clicarmmos na seta de avançar temos que mostrar o proximo cartão da lista

 - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
 - passo 2 - dar um jeito de indetificar o clique do usuário na seta de avançar 
 - passo 3 - fazer aparecer p próximo cartão da lista 
 - passi 4 - buscar o cartão que esta selecionado e esconder

 OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista 

 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar 
 - passo 2 - dar um jeito de indetificar o clique do usuário na seta voltar 
 - passo 3 - fazerr aparecer o cartão anterior da lista 
 - passo 4 - buscar o cartão que esta selecionado e esconder 
*/



const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar= document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;
    
    esconderCartoaselecionado();
    
    cartaoAtual++;
    mostrarCartao();

 });

 btnVoltar.addEventListener("click", function(){
    const ehPimeiroCartao = cartaoAtual === 0;
    if (ehPimeiroCartao) return;

    esconderCartoaselecionado();

    cartaoAtual--;
    mostrarCartao();
 });

 function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoaselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

