function numeroPrimo(){
    var inNumero = document.getElementById('inNumero')
    var outPrimo = document.getElementById('outPrimo')

    var numero = Number(inNumero.value)
    var divisores = 0

    for (var i = 1; i <= numero / 2; i++) {
        if (numero % i == 0) {
            divisores++
            if (divisores > 2) {
                break
            }
        }
    }
    if (divisores > 2){
        outPrimo.textContent = numero + ' Não é Primo...'
    } else {
        outPrimo.textContent = numero + ' É Primo!'
    }
    
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', numeroPrimo)