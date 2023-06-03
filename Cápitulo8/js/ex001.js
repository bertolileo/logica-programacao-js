function trocarClube() {
    
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");
    
    var clubes = ["Brasil", "Pelotas", "Farroupilha"];
    
    for (var i = 0; i < 4; i++) {
        if (inputsRadio[i].checked) { 
            var selecao = i; 
            break; 
        }
    }
    if (selecao <= 2) { 

        divTitulo.className = "row cores" + clubes[selecao]; 
        cores(divTitulo)
        imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
        imgClube.className = "exibe"; 
        imgClube.alt = "Símbolo do " + clubes[selecao];
        alternativo
        localStorage.setItem("clube", clubes[selecao]); 
    } else { 
        divTitulo.className = "row"; // tira a classe de cores da
        divTitulo
        imgClube.className = "oculta";
        imgClube.alt = "";
        localStorage.removeItem("clube");
    }
}

//---
var inputsRadio = document.getElementsByTagName('input')
for (let i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].addEventListener('change', trocarClube)
}
//---
function verificarClube() {
    if (localStorage.clube) {
        var clube = localStorage.clube

        if (clube == 'Brasil') {
            inputsRadio[0].checked = true
        } else if (clube == 'Pelotas') {
            inputsRadio[1].checked = true
        } else {
            inputsRadio[2].checked = true
        }
    }
    trocarClube()
}
verificarClube()


