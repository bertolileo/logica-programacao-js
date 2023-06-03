function verificarVelocidade() {
    var inVelPermitida = document.getElementById('inVelPermitida')
    var inVelCondutor = document.getElementById('inVelCondutor')
    var outMulta = document.getElementById('outMulta')

    var velPermitida = Number(inVelPermitida.value)
    var velCondutor = Number(inVelCondutor.value)
    
    if (velPermitida == 0 || isNaN(velPermitida) || velCondutor == 0 || isNaN(velCondutor)){
        alert('Insira uma velocidade válida...')
        inVelPermitida.focus();
        return
    }
    if (velCondutor <= velPermitida) {
        outMulta.textContent = `Situação: Sem Multa.`
    }
    var velLimite = (velPermitida * 0.20) + velPermitida
    if (velCondutor <= velLimite && velCondutor > velPermitida) {
        outMulta.textContent = 'Situação: Multa Leve.'
    } 
    if (velCondutor > velLimite) {
        outMulta.textContent = 'Situação: Multa Grave.'

    }
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarVelocidade)