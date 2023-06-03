var lista = [];

function gerarReferencia() {
    var inAutor = document.getElementById('inAutor')
    var outCitacao = document.getElementById('outCitacao')
    var autor = inAutor.value

    partes = autor.split(' ')
    citacao = `${partes[partes.length - 1]}, `
    for (let i = 0; i < partes.length - 1; i++) {
        citacao += partes[i].charAt(0) + '. ' 
    }
    citacao = citacao.toUpperCase()
    lista.push(citacao)
    outCitacao.textContent = lista.join('\n')
    inAutor.value = ''
    inAutor.focus()
}
var btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarReferencia)

