function parImpar() {
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    if (isNaN(inNumero.value)){
        alert('Por favor, insira um número válido...')
        inNumero.focus()
        return
    }
    var numero = Number(inNumero.value)

    if (numero % 2) {  
        outResposta.textContent = `Resposta: ${numero} é impar`
    } else {
        outResposta.textContent = `Resposta: ${numero} é par`
    }
    
}
var btParOuImpar = document.getElementById('btParOuImpar')
btParOuImpar.addEventListener('click', parImpar)