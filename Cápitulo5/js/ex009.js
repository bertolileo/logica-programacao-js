function montarQuadrado() {
    var inNumero = document.getElementById('inNumero')
    var num = Number(inNumero.value)

    var estrelas = '*'
    var espaco = ' '
    var quadrado = ''

    quadrado += estrelas.repeat(num) + '\n'
    for (let i = 0; i <= num - 2; i++) {
        quadrado += '*' + espaco.repeat(num - 2) + '*' + '\n'
    }
    quadrado += estrelas.repeat(num) + '\n'

    document.getElementById('outQuadrado').textContent = quadrado
}
var btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarQuadrado)