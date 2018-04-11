function gravar(){
    var n = document.getElementById("nome");
    var t = document.getElementById("telefone");
    var e = document.getElementById("email");
    var lista = document.getElementById("lista");

    //Insere novo obj no cadastro
    var novo = '<tr>'
             + '<td>'+n.value+'</td>'
             + '<td>'+telefone.value+'</td>'
             + '<td>'+email.value+'</td>'
             + '</tr>';
    lista.innerHTML += novo;
    
    //Reseta o campo de preenchimento
    n.value="";
    t.value="";
    e.value="";
}

function pegar(){

    var dados= [{
    
        nome:"n.value",
        tel:"t.value",
        email:"e.value"
    }];

    var lista = document.getElementById("lista");

    for (var i = 0;i!=dados.length;i++)
    {
        var novo = '<tr>'
             + '<td>'+dados[i].nome+'</td>'
             + '<td>'+dados[i].tel+'</td>'
             + '<td>'+dados[i].email+'</td>'
             + '</tr>';

        lista.innerHTML += novo;
    }
}