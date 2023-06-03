function preencherEstrelas() {
    var inNumero = document.getElementById('inNumero')
    var outEspacos = document.getElementById('outEspacos')

    var num = Number(inNumero.value)
    var estrelas = ''

    for (var i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + '*'
        } else {
            estrelas = estrelas + '-'
        }
    }
    outEspacos.textContent = estrelas
}
var btPreencher = document.getElementById('btPreencher')
btPreencher.addEventListener('click', preencherEstrelas)