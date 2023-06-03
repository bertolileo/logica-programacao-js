function converterDuracao() {
    var inTitulo = document.getElementById('inTitulo')
    var inDuracao = document.getElementById('inDuracao')
    var outTitulo = document.getElementById('outTitulo')
    var outResposta = document.getElementById('outResposta')

    var duracao = Number(inDuracao.value)
    var titulo = inTitulo.value

    var horas = Math.floor(duracao / 60)
    var minutos =  duracao % 60 

    outTitulo.textContent = titulo
    outResposta.textContent = horas + ' Hora(s) ' + minutos + ' minuto(s)'
}

var btconverter = document.getElementById('btConverter')
btconverter.addEventListener('click', converterDuracao)


