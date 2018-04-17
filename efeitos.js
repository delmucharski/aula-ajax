$(function(){
    $(".box-azul").click(function(){

        var tam = $(this).css("width");
        
        var mod = {};

        if (tam=="100px"){            
                mod.width = "200px";
            }else{
                mod.width = "100px";
            }

            $(this).animate(mod);
    });

    $(".box-verde").click(function(){

        var left = $(document).width();
        
        left -= 130;

        var css = {
            "left":left
        }
        
        $(this).animate(css, 1500);
    });

    $(document).keydown(function(ev){
        
        var left = parseInt($(".box-pink").css("left"));

        if (left >= 0){

            if (ev.keyCode == 39){
                
                var css = {
                    "left":"+=10"
                };
            }else if(ev.keyCode == 37){
                var css = {
                    "left":"+=-10"
                };
            }
            $(".box-pink").animate(css, 100);
        }
    });

    $("#btn-vai").click(function(){
        $(".box-azul").slideToggle();
    });
    
    $(document).mousemove(function(ev){
        $(".box-gold").css("left",ev.clientX-60);
    });

});