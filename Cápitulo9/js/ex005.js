function nomeColorido() {
    var divColorido = document.getElementById('divColorido')
    var inNome = document.getElementById('inNome')
    var nome = inNome.value.trim()
    var arrNome = nome.split(' ')

    if (arrNome.length == 1) {
        alert('Informe o nome Completo')
        inNome.focus()
        return
    }

    var listaH3 = document.getElementsByTagName("h3")
    for (let i = listaH3.length-1; i>=0; i--) {
        divColorido.removeChild(listaH3[i])
    }


    const cores = ["blue", "red", "yellow", "green", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"]
    for (let i = 0; i < arrNome.length; i++) {
        var corRnd = Math.ceil(Math.random() * cores.length)
        var h3 = document.createElement('h3')
        var texto = document.createTextNode(arrNome[i])
        h3.appendChild(texto)
        
        h3.style.color = cores[corRnd - 1]
        divColorido.appendChild(h3)
    }
}
var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', nomeColorido)