function parquimetro() {
    var inValor = document.getElementById('inValor')
    var outTempo = document.getElementById('outTempo')
    var outTroco = document.getElementById('outTroco')

    var valor = Number(inValor.value)
    let tempo
    let troco

    if (valor < 1){
        alert('Valor Insuficiente...')
    }

    if (valor >= 3) {
        tempo = 120
        troco = valor - 3
    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1
    }

    if (troco > 0){ outTroco.textContent = `Troco R$: ${troco.toFixed(2)}` }
    outTempo.textContent = `Tempo: ${tempo} min`
    

}
var btDeposito = document.getElementById('btDeposito')
btDeposito.addEventListener('click', parquimetro)