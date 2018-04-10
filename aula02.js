var cidade = "Curitiba";

//Vetor em JS (sem limite pra tipo de dado)
var cidades = new Array("Curitiba","Pinhais","Colombo", 123);

//Add valor ao vetor
cidades.push("Batata");

console.log(cidades);

var ini = 0;
var final = cidades.length;
var count = 0;
/*
while (count != final){
    console.log(cidades[count]);
    count ++; //Incrementando contador em JS
}

for (var ini=0;ini!=final;ini++){
    console.log(cidades[ini]);
}
*/
var final = 0;
for (var ini=cidades.length;ini>=final;ini--){
    console.log(cidades[ini]);
}
