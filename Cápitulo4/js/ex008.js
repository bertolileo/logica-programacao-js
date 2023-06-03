function numPerfeito(){
    var inNumero = document.getElementById('inNumero')
    var outDivisores = document.getElementById('outDivisores')
    var outNumero = document.getElementById('outNumero')

    var num = Number(inNumero.value)
    var divisores = ''
    let total = 0

    for (let i = 1; i <= num / 2; i++) {
        if(num % i == 0) {
            divisores = divisores + i + ', '
            total = total + i 
            if (total === num ) {
                total -= num
                outNumero.textContent = num + ' É um Número Perfeito.'
            } else {
                outNumero.textContent = num + ' Não é um Número Perfeito.'
            }
        }
    }
    outDivisores.textContent = divisores + num +` (Soma: ${total + num}).` 

}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', numPerfeito)