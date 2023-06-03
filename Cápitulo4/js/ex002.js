function decrescer() {
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    var numero = Number(inNumero.value)
    var resposta = ''
    var i = numero

    /*for (var i = numero - 1; i >= 1; i--){
        var resposta = resposta + ', ' + i
    }
    */
    while(i >=1) {
        var resposta = resposta + ', ' + i 

        i--
    }
    resposta = resposta + '.'

    outResposta.textContent = `Entre ${numero} e 1: ${numero} ` + resposta
}
var btDecrescer = document.getElementById('btDecrescer')
btDecrescer.addEventListener('click', decrescer)