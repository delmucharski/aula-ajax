$(function(){
    //Carregar o JSON
    $.getJSON("/lista-clientes.json",function(valores){

        //USANDO FOR
        // for(var i = 0; i<valores.length;i++){
        //     var tr = '<tr>'
        //     +'<td>'+valores[i].nome+'</td>'
        //     +'<td>'+valores[i].email+'</td>'
        //     +'<td>'+valores[i].cep+'</td>'
        //     +'<td>'+valores[i].datanasc+'</td>'
        //     +'</tr>';

        //     $("tbody").append(tr);
        // }
        
        // USANDO FOREACH
        $("tbody").empty();
        valores.forEach(function(val,idx){
            var tr = '<tr>'
                    +'<td>'+val.nome+'</td>'
                    +'<td>'+val.email+'</td>'
                    +'<td>'+val.cep+'</td>'
                    +'<td>'+val.datanasc+'</td>'
                    +'</tr>';
            $("tbody").append(tr);
        });
    });

    //ADICIONA NO CADASTRO
    $("fieldset button").click(function(){

        var n = $("input[name=nome]").val();
        var e = $("input[name=email]").val();
        var c = $("input[name=cep]").val();
        var d = $("input[name=data-nasc]").val();

        var tr = '<tr>'
                +'<td>'+ n +'</td>'
                +'<td>'+ e +'</td>'
                +'<td>'+ c +'</td>'
                +'<td>'+ d +'</td>'
                +'</tr>';
        var tr2 = $(tr).hide().fadeIn(1500);
        $("tbody").append(tr2);
    });

    //CEP DIGITAR SOMENTE NUMEROS
    $("input[name=cep]").keydown(function(ev){
        if ((ev.keyCode >= 48 && ev.keyCode <= 57) || ev.keyCode == 8 || ev.keyCode == 9){
            return true;        
        }else{
            return false;
        }
    });

    //FUNÇÃO DE PLUGIN DE JQUERY PRA DATA E FORMATO
    $("input[name=data-nasc]").datepicker({dateFormat: "dd/mm/yy"});

    //FUNÇÃO DE VALIDAÇÃO DE EMAIL
    $("input[name=email]").blur(function(){
        var valor = $(this).val();

        var regex = /^[a-zA-Z0-9\.\-\_]*@[a-z0-9]*\.[a-z\.]*$/gm;
        
        if (regex.test(valor)==false){
            alert("Email inválido");
        }
    });
});