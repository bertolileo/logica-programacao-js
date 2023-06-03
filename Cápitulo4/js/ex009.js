function criarEstrelas() {
    var inNumero = document.getElementById('inNumero')
    var outEstrelas = document.getElementById('outEstrelas')

    var num = Number(inNumero.value)
    var estrelas = ''
    var total = 0
    //var str = '*'

    for (let i = 0; i < num; i++) {
        //estrelas = estrelas + str.repeat(i) + '\n' => MÉTODO MAIS CURTO
        for (let index = 0; index <= i; index++){
            estrelas += '*'

        }
        estrelas += '\n'
    }
    outEstrelas.textContent = estrelas
}
var btCriar = document.getElementById('btCriar')
btCriar.addEventListener('click', criarEstrelas)