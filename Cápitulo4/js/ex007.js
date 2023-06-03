function chinchilas() {
    var inChinchila = document.getElementById('inChinchila')
    var inAnos = document.getElementById('inAnos')
    var outChinchila = document.getElementById('outChinchila')

    var chinchila = Number(inChinchila.value)
    var anos = Number(inAnos.value)
    var resposta = ''
    total = chinchila

    for (let i = 1; i <=anos; i++){
        resposta = resposta + i + ' Ano: ' + total + ' Chinchilas' + '\n'
        total = total * 3 
    }    
    outChinchila.textContent = resposta
}
var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', chinchilas)