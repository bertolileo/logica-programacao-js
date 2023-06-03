function montarDica() {
    var inFruta = document.getElementById('inFruta')
    var outDica = document.getElementById('outDica')
    var fruta = inFruta.value

    var resposta = fruta.charAt(0)
    var tam = fruta.length
    var estrelas = '*'

    for (let i = 1; i < tam; i++) {
        if (fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0)
        } else {
            resposta += '_'
        }
        estrelas += '*'
    }
    outDica.textContent = resposta
    inFruta.value = estrelas
}
var btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarDica)