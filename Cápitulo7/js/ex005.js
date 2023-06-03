var btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', () => {
    var inNome = document.getElementById('inNome')
    var outSenha = document.getElementById('outSenha')
    var nome = inNome.value
    if (validarNome(nome) == false) {
        alert('Informe o nome COMPLETO.')
        inNome.focus()
        return
    }
    outSenha.textContent = `Senha Inicial: ${obterSobrenome(nome)}${contarVogais(nome)}`
})
//--
function contarVogais(nome) {
    var vogais = nome.match(/[aeiou]/gi)
    return vogais.length < 10 ? '0' + vogais.length : vogais.length
}
//--
function obterSobrenome(nome) {
    let i = nome.lastIndexOf(' ')
    var lastName = nome.substr(i)
    return lastName.toLowerCase()
}
//--
function validarNome(nome) {

    if (obterSobrenome(nome).match(/[A-Z]/gi)){
        return true
    }else {
        return false
    }
}