
    document.onreadystatechange = function () {
            var state = document.readyState
            if (state == 'complete') {
                document.getElementById('interactive');
                document.getElementById('load').style.visibility = "hidden";
            }
        }
        $(document).ready(function () {
            $("#backmenus").click(function (a) {
                a.preventDefault();
                $("#listamenudeconfig").hide();
                $("#listamenudecomodos").hide();
                $("#backmenus").hide();
            });

            $("#btniconeCONFIG").click(function (a) {
                a.preventDefault();
                $("#listamenudeconfig").toggle();
                if (document.getElementById("listamenudecomodos").style.display == "none") {
                    $("#backmenus").toggle();
                } else {
                    $("#backmenus").show();
                }
            });
            $("#btniconeCOMODOS").click(function (a) {
                a.preventDefault();
                $("#listamenudecomodos").toggle();
                if (document.getElementById("listamenudeconfig").style.display == "none") {
                    $("#backmenus").toggle();
                } else {
                    $("#backmenus").show();
                }
            });
        });