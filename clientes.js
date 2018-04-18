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
});