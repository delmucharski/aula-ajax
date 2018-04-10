var cidades = [];

function cadastrar(){
    var input = document.getElementById("cidade");
    var lista = document.getElementById("lista");
    var total = document.getElementById("total");
    
    if (cidades.includes(input.value) == false){
        cidades.push(input.value);
    }else{
        window.alert("A cidade "+ input.value +" já está cadastrada!");
    }
        
    imprime();
    input.value="";
}

function ordenar(){
    cidades.sort();
    imprime();
    
}

function imprime(){
    total.innerHTML = cidades.length;
    lista.innerHTML = "";
    
    for (var i=0;i!=cidades.length;i++){
        lista.innerHTML += "<li>" + cidades[i]+ "</li>";
    }
}
