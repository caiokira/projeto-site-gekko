// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
      botao.addEventListener('click', () => {

        //passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marca o botão clicando como se estivesse selecionada
        selecionarBotaoCarrosel(botao);

        // passo 5 - esconder a imagem ativa  de fundo
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostraImagemDeFundo(indice);
    })
}) 

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function mostraImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
