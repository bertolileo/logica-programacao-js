function triangulo() {
    var inLadoA = document.getElementById('inLadoA')
    var inLadoB = document.getElementById('inLadoB')
    var inLadoC = document.getElementById('inLadoC')
    var outResposta = document.getElementById('outResposta')
    var outTipo = document.getElementById('outTipo')

    var ladoa = Number(inLadoA.value)
    var ladob = Number(inLadoB.value)
    var ladoc = Number(inLadoC.value)

    if (ladoa > ladob + ladoc || ladob > ladoc + ladoa || ladoc > ladoa + ladob) {
        outResposta.textContent = 'Lados não podem formar um triangulo'
        outTipo.textContent = ''
    } else if(ladoa == ladob && ladoa == ladoc) {
        outResposta.textContent = 'Lados podem formar um triangulo'
        outTipo.textContent = 'Tipo: Equilátero'
    } else if(ladoa == ladob || ladoa == ladoc || ladob == ladoc){
        outResposta.textContent = 'Lados podem formar um triangulo'
        outTipo.textContent = 'Tipo: Isósceles'
    } else {
        outResposta.textContent = 'Lados podem formar um triangulo'
        outTipo.textContent = 'Tipo: Escaleno'
    }
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', triangulo)