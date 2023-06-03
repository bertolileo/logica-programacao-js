function exibirVelas() {
    var inIdade = document.getElementById('inIdade')
    var divVelas = document.getElementById('divVelas')
    var idade = inIdade.value
    if(Number(idade) > 120) {
        alert('O valor deve ser menor ou igual a 120.')
        inIdade.focus()
        return
    }
    var arrIdade = idade.split('')
    for (let i = 0; i < arrIdade.length; i++) {
        var novaVela = document.createElement('img')
        novaVela.src = `img/${arrIdade[i]}.jpg`
        novaVela.textoAlt = `Vela de número ${arrIdade[i]}`
        divVelas.appendChild(novaVela)
    }
}
var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', exibirVelas)

var btNovas = document.getElementById('btNovas')
btNovas.addEventListener('click', () => {
    window.location.reload()
})