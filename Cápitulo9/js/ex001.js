function adicionarTarefa() {
    var inTarefa = document.getElementById('inTarefa')
    var tarefa = inTarefa.value

    if (tarefa == 0) {
        alert('Informe a tarefa') 
        inTarefa.focus()
        return
    }

    var divQuadro = document.getElementById('divQuadro')
    var h5 = document.createElement('h5')
    var texto = document.createTextNode(tarefa)
    h5.appendChild(texto)
    divQuadro.appendChild(h5)

    inTarefa.value = ''
    inTarefa.focus()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarTarefa)

var btSelecionar = document.getElementById('btSelecionar')
btSelecionar.addEventListener('click', () => {
    var h5 = document.getElementsByTagName('h5')
    var numH5 = h5.length
    if (numH5 === 0) {
        alert('Não há tarefas para selecionar.')
        return
    }
    var aux = - 1
    for (let i = 0; i < numH5; i++) {
        if (h5[i].className == 'tarefaSelecionada') {
            h5[i].className = 'tarefaNormal'
            aux = i
            break
        }
        if (aux == numH5 - 1) {
            aux = -1
        }
    }
    h5[aux + 1].className = 'tarefaSelecionada'
})
var btRetirar = document.getElementById('btRetirar')
btRetirar.addEventListener('click', () => {
    var divQuadro = document.getElementById("divQuadro")
    var h5 = document.getElementsByTagName('h5')
    var numH5 = h5.length

    var aux = -1
    for (let i = 0; i < numH5; i++) {
        if (h5[i].className == 'tarefaSelecionada') {
            aux = i
            break
        }
    }
    if (aux == -1) {
        alert('Selecione uma tarefa para remover...') 
        return
    }

    if (confirm(`Confirmar a exclusão de ${h5[aux].textContent}?`)) {
        divQuadro.removeChild(h5[aux])
    }
})

var btGravar = document.getElementById('btGravar')
btGravar.addEventListener('click', () => {
    var h5 = document.getElementsByTagName('h5')
    var numH5 = h5.length
    if (numH5 === 0) {
        alert('Não há tarefas para salvar.') 
        return
    }
    var tarefas = ''
    for (let i = 0; i < numH5; i++) {
        tarefas += h5[i].textContent + ';'

    }
    localStorage.setItem('tarefas', tarefas.substr(0, tarefas.length - 1))
    if (localStorage.getItem('tarefas')) {
        alert('Ok! Tarefas salvas.')
    }
})

function recuperarTarefas() {
    if (localStorage.getItem('tarefas')) {
        var tarefa = localStorage.getItem('tarefas').split(';')
        var divQuadro = document.getElementById("divQuadro")

        for (let i = 0; i < tarefa.length; i++) {
            var h5 = document.createElement('h5')
            var texto = document.createTextNode(tarefa[i])
            h5.appendChild(texto)
            divQuadro.appendChild(h5)
        }
    }
}
recuperarTarefas()