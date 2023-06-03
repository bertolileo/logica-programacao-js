function calcularValor() {
    var inValor15 = document.getElementById('inValor15')
    var inTempo = document.getElementById('inTempo')
    var outTotal = document.getElementById('outTotal')

    var valor15 = Number(inValor15.value)
    var tempo = Number(inTempo.value)
    var calculo = Math.ceil((tempo / 15)) * valor15
    

    outTotal.textContent = 'Valor a Pagar R$: ' + calculo.toFixed(2)
}
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularValor)
