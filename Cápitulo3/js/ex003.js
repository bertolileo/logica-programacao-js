function fusoHorario() {
    var inHoraBrasil = document.getElementById('inHoraBrasil')
    var outHoraFranca = document.getElementById('outHoraFranca')

    var horaBrasil = Number(inHoraBrasil.value)

    if (inHoraBrasil.value == '' || isNaN(horaBrasil)) {
        alert('Informe o horário no Brasil corretamente')
        inHoraBrasil.focus()
        return
    }
    var horaFranca = horaBrasil + 5
    if (horaFranca >= 24){
    horaFranca = horaFranca - 24
    }
    outHoraFranca.textContent = `Hora na França: ${horaFranca.toFixed(2)}`    
}
var btExibirHora = document.getElementById('btExibirHora')
btExibirHora.addEventListener('click', fusoHorario)