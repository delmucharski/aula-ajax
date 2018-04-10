function pesquisar(){
    var texto = document.getElementById("texto");
    var palavra = document.getElementById("palavra");
    var novo = '<span class="selecionado">'+ palavra.value +'</span>';

    console.log(texto, palavra);

    var atualizado = texto.innerHTML.replace(palavra.value, novo);

    texto.innerHTML = atualizado;
}

function rodaTexto(){
    var letreiro = document.getElementById("letreiro");
    var texto = letreiro.innerHTML;
    var novo = texto.substr(1) + texto.charAt(0);
    letreiro.innerHTML = novo;
}

var painel;

function ligar(){
    painel = setInterval(rodaTexto, 300);
}

function desligar(){
    clearInterval(painel);
}