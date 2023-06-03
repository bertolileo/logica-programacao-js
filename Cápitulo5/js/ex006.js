var numeros = []
function adicionarNumeros() {
    var inNumero = document.getElementById('inNumero')
    var num = Number(inNumero.value)

    if (numeros.includes(num)) {
        alert('Esse número já foi adicionado.')
        inNumero.focus()
        return
    } else {
        numeros.push(num)
        inNumero.value = ''
        inNumero.focus()
    }
    var lista = numeros.join(', ')
    
    document.getElementById('outNumeros').textContent = 'Números: ' + lista + '.'
}
var btAdicionar =  document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarNumeros)
//----------------------------------------------------------------------------------------
function verificarOrdem() {
    var outResposta = document.getElementById('outResposta')
    /* MEU MÉTODO ----------
    var copia = numeros.slice()
    copia.sort(function(a, b) {return a - b})
    if (JSON.stringify(numeros) === JSON.stringify(copia)) {
        outResposta.textContent = 'Os números estão em ordem crescente!!'
    } else {
        outResposta.textContent = 'Atenção... Os números não estão em ordem crescente.'
    }   
    */
    var flag = true
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeros[i + 1]) {
            flag = false
            break
        }
    }
    outResposta.textContent = flag ? 'Os números estão em ordem crescente!!' : 'Atenção... Os números não estão em ordem crescente.'
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarOrdem)