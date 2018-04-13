$(document).ready(function(){

    $("#btn").click(function(){

        var cor = $("#selcolor").val();

        $("h1.azul").css("color",cor);

        
    });

    $("#selcolor").change(function (){

        var cor = $(this).val();

        $("h1.azul").css("color",cor);
    });

    $("#btnadd").click(function(){
        var cor = $("#novacor").val();
        var opt = '<option value="'+ cor + '" >'+ cor +'</option>';

        $("#selcolor").append(opt);

    });
});