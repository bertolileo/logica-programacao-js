var inNome = document.getElementById('inNome')
var inIdade = document.getElementById('inIdade')

var btCategorizar = document.getElementById('btCategorizar')
btCategorizar.addEventListener('click', () => {
    var nome = inNome.value
    var idade = Number(inIdade.value)
    var outCategoria = document.getElementById('outCategoria')
    
    var categoria = categorizarAluno(idade)
    var tracos = retornarTracos(nome)
    
    outCategoria.textContent = `${nome}\n${tracos}\nCategoria: ${categoria}`
})
//--
function retornarTracos(nome) {
    var partes = nome.split(' ')
    var tracos = []
    var risco = '-'
    
    for (let i = 0; i < partes.length; i++) {
        let tam = partes[i].length
        tracos.push(risco.repeat(tam))
    }
    tracos = tracos.join(' ')
    return tracos
}
//--
function categorizarAluno(idade) {
    var categoria
    if (idade <= 12) {
        categoria = 'Infantil'
    } else if (idade <= 18) {
        categoria = 'Juvenil'
    } else {
        categoria = 'Adulto'
    }
    return categoria
}