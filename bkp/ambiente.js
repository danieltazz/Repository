function getAllAtuadores() {
    $.ajax({
        type: "POST",
        url: 'http://' + iplab + '/sap/getLuzes.php',
        crossDomain: true,
        cache: false,
        success: function (data) {
            var data = $.parseJSON(data);
            $(".divlistaambiente").html("");
            $.each(data, function (i, field) {
                field.LOG_STATUS = (field.LOG_STATUS == 1) ? 'on' : '';
                $(".ullistaambiente").append(
                    "<li class=\"divlistaambiente\"><div class=\"col-xs-6\"><div class= \"nomelistaambiente\"><p>"
                    +field.LOG_IDLUZ + "</p></div><form method=\"post\" class=\"editarnomelistaambiente\"><input class=\"inputdoeditarnome\""
                    +"type= \"text\" placeholder=\""+field.LOG_IDLUZ+"\"/></form></div><div class= \"col-xs-6\"><div class=\"statusdoaparelho\">"
                    +"<button class=\"onoff\" style=\"display:"+displaydoatudadorOFF+";\"><p>OFF</p></button>"
                    +"<button class=\"offon\" style=\"display:"+displaydoatudadorON+";\"><p>ON</p></button>"
                    +"</div><div class=\"editardoaparelho\" style=\"display:none;\"><button class=\"excluireditardoaparelho\"><p>Excluir</p></button></div></div></li>"
                    );
            });
            
            
            
        },
        error: function () {
            alert("Falha na conexão!\nTente novamente.");
            document.location.href = 'index.html';
        },
    });
}