function incluirAposta() {
    var inNome = document.getElementById('inNome')
    var inPeso = document.getElementById('inPeso')
    var nome = inNome.value
    var peso = Number(inPeso.value)

    if (nome == '' || peso == 0 || isNaN(peso)) {
        alert('Informe os dados corretamente...')
        inNome.focus()
        return
    }

    if (verificarPeso(peso)) {
        alert('Alguém já apostou este peso, informe outro...')
        inPeso.focus()
        return
    }

    if (localStorage.getItem('melanciaNome')) {
        var melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome
        var melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + peso

        localStorage.setItem('melanciaNome', melanciaNome)
        localStorage.setItem('melanciaPeso', melanciaPeso)
    } else {
        localStorage.setItem('melanciaNome', nome)
        localStorage.setItem('melanciaPeso', peso)
    }
    mostrarAposta()
    inNome.value = ''
    inPeso.value = ''
    inNome.focus()
}
var btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', incluirAposta)
//---
function verificarPeso(peso) {
    var existe = false
    if (localStorage.getItem('melanciaPeso')){
        var pesos = localStorage.getItem('melanciaPeso').split(';')
        if(pesos.indexOf(peso.toString()) >= 0) {
            existe = true
        }
    }
    return existe
}
//---
function mostrarAposta() {
    var outApostas = document.getElementById('outApostas')
    if (!localStorage.getItem('melanciaNome')) {
        outApostas.textContent = ''
        return
    }
    var linha = ''
    var pesos = localStorage.getItem('melanciaPeso').split(';')
    var nomes = localStorage.getItem('melanciaNome').split(';')
    
    for (let i = 0; i < nomes.length; i++) {
        linha += `${nomes[i]} - ${pesos[i]}gr\n`
    }
    outApostas.textContent = linha
}
mostrarAposta()
//---
function verificarVencedor () {
    if (!localStorage.getItem('melanciaNome')) {
        alert('Não há apostas cadastradas.') 
        return
    }
    var pesoCorreto = Number(prompt('Qual o peso correto da melancia?'))
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }
    var pesos = localStorage.getItem('melanciaPeso').split(';')
    var nomes = localStorage.getItem('melanciaNome').split(';')
    var vencedorNome = nomes[0]
    var vencedorPeso = Number(pesos[0])

    for (let i = 0; i < nomes.length; i++) {
        difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]
            vencedorPeso = Number(pesos[i])
        }
    }
    var mensagem = ''
    mensagem += `Resultado - Peso Correto: ${pesoCorreto}gr`
    mensagem += '\n----------------------------------------\n'
    mensagem += `Vencedor: ${vencedorNome}\nAposta: ${vencedorPeso}gr`
    alert(mensagem)
}
var btVencedor = document.getElementById('btVencedor')
btVencedor.addEventListener('click', verificarVencedor)

var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', () => {
    if (confirm('Confirma a exclusão de todas as apostas?')){
        localStorage.removeItem('melanciaNome')
        localStorage.removeItem('melanciaPeso')
        mostrarAposta()
    }
})
