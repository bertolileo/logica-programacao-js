function verificarPalindromo() {
    var inFrase = document.getElementById('inFrase')
    var outResposta = document.getElementById('outResposta')
    var frase = inFrase.value

    if (frase == '') {
        alert('informe a frase corretamente...')
        inFrase.focus()
        return
    }

    var fraseAgrupada = frase.replace(/ /g, '')
    var inverso = ''
    for (let i = frase.length; i >= 0; i--) {
        inverso += frase.charAt(i)
    }

    if (fraseAgrupada == inverso.replace(/ /g, '')) {
        outResposta.textContent = `${frase.toUpperCase()} é um palíndromo`
    } else {
        outResposta.textContent = `${frase.toUpperCase()} não é um palíndromo`
    }

}
window.onload = function() {
    var btVerificar = document.getElementById('btVerificar')
    btVerificar.addEventListener('click', verificarPalindromo)
}
