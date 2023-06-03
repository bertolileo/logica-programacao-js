function gerarCracha() { 
    var inParticipante = document.getElementById('inParticipante')
    var outCracha = document.getElementById('outCracha')
    var participante = inParticipante.value
    
    var firstName = participante.indexOf(" ")
    var lastName = participante.lastIndexOf(" ")
    var cracha = `Crachá: ${participante.substr(0, firstName)} ${participante.substr(lastName)}`

    outCracha.textContent = cracha
}
var btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarCracha)