var nome = "Edir";

// programação funcional - quando uma função se comporta como um objeto (pode virar uma variável)

var ola = function (){
    alert("Teste");
    return "ok";
}

var soma =  function(){
    return 2 + 2;
}

function teste(fn){
    return fn();
}

function imprime(){
    var nome2 = "Pedro";
    // console.log(nome);
    
    function novo(){
        var nome2 = "João";
        console.log(nome2);
    }
    novo();
}
imprime();

// console.log(teste(ola)); //(olá) ou (soma)