function tabuada(){
    var inNumero = document.getElementById('inNumero')
    var outTabuada = document.getElementById('outTabuada')

    var numero = Number(inNumero.value)
    var resposta = ''

    for (i = 1; i<=10; i++) {
        var resposta = resposta + numero + 'x' + i + '=' + numero*i + '\n'
    }
    outTabuada.textContent = resposta
}
var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', tabuada)