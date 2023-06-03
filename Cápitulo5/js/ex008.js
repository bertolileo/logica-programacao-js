
var noticias = [];
function adicionarNoticias() {
    var inNoticia = document.getElementById('inNoticia')
    var news = inNoticia.value

    noticias.push(news)
    inNoticia.value = ''
    inNoticia.focus();

    var lista = []
    for (let i = 0; i < noticias.length; i++) {
        lista.push(noticias[i])
    }
    document.getElementById('outNumero').textContent = `Notícias Cadastradas: ${lista.length}`
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarNoticias)


function listarNoticias() {
    var num = Number(prompt('Quantas notícias recentes deseja ver?'))
    var copia = noticias.slice()
    copia.reverse()

    var lista = `${num} Últimas Notícias \n----------------------------------------------\n`
    var max = 0
    for (let i = 0; i < num; i++) {
        lista += `${copia.length - i}) ${copia[i]}\n`
        max++
    }
    
    if (max > noticias.length) {
        alert('Não há esse número de notícias atualmente.')
    }else {
    document.getElementById('outNoticias').textContent = lista
    }
}
var btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarNoticias)