function trocarConvenio() {
    if (rbNao.checked){
        pConvenio.className = 'oculta'
    }else {
        pConvenio.className = 'exibe'
    }
}
var rbNao = document.getElementById('rbNao')
var rbSim = document.getElementById('rbSim')
rbNao.addEventListener('change', trocarConvenio)
rbSim.addEventListener('change', trocarConvenio)

function calcularDesconto(valor, convenio) {
    var taxaDesc
    if (rbNao.checked) {
        taxaDesc = 0.10
    } else if(convenio == 'amigoDosAnimais') {
        taxaDesc = 0.20
    } else {
        taxaDesc = 0.50
    }
    return valor * taxaDesc
}
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', () => {
    var selConvenio = document.getElementById('selConvenio')
    var valor = Number(document.getElementById('inValor').value)
    var outDesconto = document.getElementById('outDesconto')
    var outPreco = document.getElementById('outPreco')
    var convenio = selConvenio.value
    
    var desconto = calcularDesconto(valor, convenio)
    
    outDesconto.textContent = `Desconto R$: ${desconto.toFixed(2)}`
    outPreco.textContent = `A Pagar R$: ${(valor - desconto).toFixed(2)}`
})