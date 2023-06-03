var pacientes = [];
function adicionarPacientes() {
    var inPaciente = document.getElementById('inPaciente')
    var outLista = document.getElementById('outLista')

    var nome = inPaciente.value
    if (nome == '') {
        alert('Informe o nome do paciente');
        inPaciente.focus();
        return
    }
    pacientes.push(nome)
    var lista = ''
    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + '. ' + pacientes[i] + '\n'
    }
    outLista.textContent = lista
    inPaciente.value = ''
    inPaciente.focus()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarPacientes)

function adicionarUrgencia() {
    var inPaciente = document.getElementById('inPaciente')
    var outLista = document.getElementById('outLista')

    var nome = inPaciente.value
    if (nome == '') {
        alert('Informe o nome do paciente');
        inPaciente.focus();
        return
    }
    pacientes.unshift(nome)
    var lista = ''
    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + '. ' + pacientes[i] + '\n'
    }
    outLista.textContent = lista
    inPaciente.value = ''
    inPaciente.focus()
}
var btUrgencia = document.getElementById('btUrgencia')
btUrgencia.addEventListener('click', adicionarUrgencia)

function atenderPaciente() {
    if (pacientes.length == 0) {
        alert('Todos os pacientes foram atendidos.')
    }

    var outAtendimento = document.getElementById('outAtendimento')
    var outLista = document.getElementById('outLista')

    var atender = pacientes.shift();
    outAtendimento.textContent = atender
    var lista = ''

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + '. ' + pacientes[i] + '\n'
    }
    outLista.textContent = lista
}
var btAtender = document.getElementById('btAtender')
btAtender.addEventListener('click', atenderPaciente)