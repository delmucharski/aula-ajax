var nome = "Del"; // string
var idade = 30; // int ->number
var peso = 55.5; // float ->number
var acordado = true; // bool

console.log("Olá" + nome.toUpperCase());

if (acordado == true){
    console.log("Acordado sim");
}else{
    console.log("Acordado não");    
}

function imprimirNome(){
    var input = document.getElementById("nome");
    var h2 = document.getElementById("exibir");
    console.log(input.value);
    h2.innerHTML = (input.value.toUpperCase());
}

function primeiraLetra(){
    var input = document.getElementById("nome");
    var h2 = document.getElementById("exibir");
    var original = input.value.toLowerCase();
    var primeira = original.charAt(0).toUpperCase();
    console.log(primeira);
    h2.innerHTML = primeira + original.slice(1);
}
