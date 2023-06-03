var clubes = []
function adicionarClubes() {
    var inClubes = document.getElementById('inClubes')
    var times = inClubes.value
    
    clubes.push(times)
    inClubes.value = ''
    inClubes.focus()
    listarClubes()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarClubes)
//-----------------------------------------------------------------------
function listarClubes() {
    lista = ''
    for (let i = 0; i < clubes.length; i++) {
        lista += `${i + 1}. ${clubes[i]}\n`
    }
    document.getElementById('outLista').textContent = lista
}
var btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarClubes)
//-----------------------------------------------------------------------
function montarTabela() {
    var copia = clubes.slice();
    var tabela = ''
    for (let i = 0; i < copia.length; i++){
        let last = copia.pop()
        tabela += `${copia[i]} x ${last}\n`
    }
    document.getElementById('outLista').textContent = tabela
}
var btTabela = document.getElementById('btTabela')
btTabela.addEventListener('click', montarTabela)