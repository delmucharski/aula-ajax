
var n = document.getElementById("nome");
var t = document.getElementById("telefone");
var e = document.getElementById("email");
var lista = document.getElementById("lista");

function gravar(){


    var divmsg = document.getElementById("msg-erro");
    divmsg.style.display = "none";

    if (n.value=="" || n.value.length< 3){
       exibeErro("O campo NOME é obrigatório. (Min: 3 caracteres)");
       n.focus();
       return; //early return
    }

    var regex = /^\([0-9]+\)[0-9]{4}\-[0-9]{4}$/gm;

    if (regex.exec(t.value) == null ){
        exibeErro("O campo TELEFONE é obrigatório. Exemplo: (xx)xxxx-xxxx");
        t.focus();
        return; //early return
    }

     if (e.value=="" || e.value.search("@")){
        exibeErro("O campo EMAIL é obrigatório. Exemplo:(abc@gmail.com)");
        e.focus();
        return; //early return
    }

    //MODO ALTERNATIVO DE LÓGICA
    // if (n.value=="" || t.value=="" || e.value==""){
    //     alert("Não deixar campo em branco");
    //     //Reseta o campo de preenchimento
    //     n.value="";
    //     t.value="";
    //     e.value="";
    // }else{

    //Insere novo obj no cadastro
    var novo = '<tr>'
             + '<td>'+n.value+'</td>'
             + '<td>'+t.value+'</td>'
             + '<td>'+e.value+'</td>'
             + '</tr>';
    lista.innerHTML += novo;
    
    //Reseta o campo de preenchimento
    n.value="";
    t.value="";
    e.value="";
}

function exibeErro(msg){
    var divmsg = document.getElementById("msg-erro");
    divmsg.innerHTML=msg;
    divmsg.style.display = "block";
}

function pegar(){

    var dados= [{
    
        nome:"n.value",
        tel:"t.value",
        email:"e.value"
    },
    {
        nome:"a",
        tel:"b",
        email:"c"
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