function adicionarServico() {
    var inServico = document.getElementById('inServico')
    var servico = inServico.value
    var outNum = document.getElementById('outNum')

    if (servico == '') {
        alert('informe um serviço válido...')
        inServico.focus()
        return
    }

    if (localStorage.getItem('servico')) {
        var listaServico = localStorage.getItem('servico') + ';' + servico
        localStorage.setItem('servico', listaServico)
    } else {
        localStorage.setItem('servico', servico)
    }
    contador()

    inServico.value = ''
    inServico.focus()
}

function contador() {
    if (localStorage.getItem('servico')){
    var listaServico = localStorage.getItem('servico').split(';')
    outNum.textContent = listaServico.length
    } else {
        outNum.textContent = 0
    }
}
contador()

var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarServico)

function executarServico() {
    if (!localStorage.getItem('servico')){
        alert('Não há serviços para executar')
        return
    }
    var outServico = document.getElementById('outServico')
    var listaServico = localStorage.getItem('servico').split(';')
    var executar = listaServico.shift()
    
    outServico.textContent = executar
    localStorage.setItem('servico', listaServico.join(';'))
    outNum.textContent = listaServico.length
}
var btExecutar = document.getElementById('btExecutar')
btExecutar.addEventListener('click', executarServico)