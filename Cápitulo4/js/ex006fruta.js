function repetirFruta() {
    var inFruta = document.getElementById('inFruta')
    var inNumero = document.getElementById('inNumero')
    var outFruta = document.getElementById('outFruta')

    var num = Number(inNumero.value)
    var fruta = inFruta.value
    var resposta = ''

    for (let i = 1; i < num; i++) {
        resposta = resposta + fruta + ' * '
    }
    outFruta.textContent = resposta + fruta
}
var btRepetir = document.getElementById('btRepetir')
btRepetir.addEventListener('click', repetirFruta)