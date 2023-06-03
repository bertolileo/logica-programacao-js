function calcularMedia() {
    var inNome = document.getElementById('inNome')
    var inNota1 = document.getElementById('inNota1')
    var inNota2 = document.getElementById('inNota2')
    var outMedia = document.getElementById('outMedia')
    var outSituacao = document.getElementById('outSituacao')

    var nome = inNome.value
    var nota1 = Number(inNota1.value)
    var nota2 = Number(inNota2.value)

    if (nota1 > 10 || nota2 > 10) {
        alert('Informe uma nota de 0 a 10')
        inNome.focus()
        return
    }

    var media = (nota1 + nota2) / 2
    outMedia.textContent = 'Média das Notas: ' + media
    
    if (media >= 7) {
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a)`
        outSituacao.style.color = 'blue'
    
    } else {
        outSituacao.textContent = `Que pena ${nome}... Você foi reprovado(a)`
        outSituacao.style.color = 'red'
    }
}

var btMedia = document.getElementById('btMedia')
btMedia.addEventListener('click', calcularMedia)