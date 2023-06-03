function criptografar() {
    var inMensagem = document.getElementById('inMensagem')
    var outResposta = document.getElementById('outResposta')
    var msg = inMensagem.value

    var resposta = ''
    var tam = msg.length
    for (let i = 1; i < tam; i = i + 2) {
        resposta += msg.charAt(i)
    }
    for (let i = 0; i < tam; i = i + 2) {
        resposta += msg.charAt(i)
    }

    outResposta.textContent = resposta
}
var btCriptografar = document.getElementById('btCriptografar')
btCriptografar.addEventListener('click', criptografar)

function Decriptografar() {
    var inMensagem = document.getElementById('inMensagem')
    var outResposta = document.getElementById('outResposta')
    var msg = inMensagem.value

    const tam = msg.length
    const metade = Math.floor(tam / 2)
    let resposta = ""

    if (tam % 2 == 0) {
        for (let i = metade; i < tam; i++) {
            resposta += msg.charAt(i)
            resposta += msg.charAt(i - metade)
        }
    } else {
        for (let i = metade; i < tam - 1; i++) {
            resposta += msg.charAt(i)
            resposta += msg.charAt(i - metade)
        }
        resposta += msg.charAt(tam - 1)
    }

    outResposta.textContent = resposta
}
var btDecriptografar = document.getElementById('btDecriptografar')
btDecriptografar.addEventListener('click', Decriptografar)