$(document).ready(function(){
    $("#servicios").mouseenter(function(){
        $("#servicios").css("background-color", "#8FC0A9");
    });

    $("#servicios").mouseleave(function(){
        $("#servicios").css("background-color", "#C8D5B9");
    });

    $("#tasaciones").hover(function(){
        $("#tasaciones").animate({
            height:'+=30px'
        });
    },
    function(){
        $("#tasaciones").animate({
            height:'-=30px'
        });
    });

    $("#venta").hover(function(){
        $("#venta").animate({
            height:'+=30px'
        });
    },
    function(){
        $("#venta").animate({
            height:'-=30px'
        });
    });

    $("#loteos").hover(function(){
        $("#loteos").animate({
            height:'+=30px'
        });
    },
    function(){
        $("#loteos").animate({
            height:'-=30px'
        });
    });

    $("#centenario").click(function(){
        $("#flipCentenario").slideDown("slow");
      });
    $("#centenario").dblclick(function(){
        $("#flipCentenario").slideUp("slow");
      });

    $("#vicente").click(function(){
        $("#flipVicente").slideDown("slow");
    });
    $("#vicente").dblclick(function(){
        $("#flipVicente").slideUp("slow");
    });

    $("#rosales").click(function(){
        $("#flipRosales").slideDown("slow");
      });
    $("#rosales").dblclick(function(){
        $("#flipRosales").slideUp("slow");
      });
    
    $("#debe").click(function(){
        $("#flipDebe").slideDown("slow");
      });
    $("#debe").dblclick(function(){
        $("#flipDebe").slideUp("slow");
      });

    $("#dehe").click(function(){
        $("#flipDehe").slideDown("slow");
      });
    $("#dehe").dblclick(function(){
        $("#flipDehe").slideUp("slow");
      });

    $("#bruno").click(function(){
        $("#flipBruno").slideDown("slow");
      });
    $("#bruno").dblclick(function(){
        $("#flipBruno").slideUp("slow");
      });

    $("#bruno").mouseenter(function(){
        $("#bruno").css("background-color", "#8FC0A9");
    });

    $("#bruno").mouseleave(function(){
        $("#bruno").css("background-color", "#C8D5B9");
    });
    
    $("#dehe").mouseenter(function(){
        $("#dehe").css("background-color", "#8FC0A9");
    });

    $("#dehe").mouseleave(function(){
        $("#dehe").css("background-color", "#C8D5B9");
    });

    $("#debe").mouseenter(function(){
        $("#debe").css("background-color", "#8FC0A9");
    });

    $("#debe").mouseleave(function(){
        $("#debe").css("background-color", "#C8D5B9");
    });

    $("#rosales").mouseenter(function(){
        $("#rosales").css("background-color", "#8FC0A9");
    });

    $("#rosales").mouseleave(function(){
        $("#rosales").css("background-color", "#C8D5B9");
    });

    $("#vicente").mouseenter(function(){
        $("#vicente").css("background-color", "#8FC0A9");
    });

    $("#vicente").mouseleave(function(){
        $("#vicente").css("background-color", "#C8D5B9");
    });

    $("#centenario").mouseenter(function(){
        $("#centenario").css("background-color", "#8FC0A9");
    });

    $("#centenario").mouseleave(function(){
        $("#centenario").css("background-color", "#C8D5B9");
    });
});