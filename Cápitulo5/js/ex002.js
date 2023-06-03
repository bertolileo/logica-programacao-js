var erros = [];
var sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

function apostarNumero() {
    var inNumero = document.getElementById("inNumero")
    var outDica = document.getElementById('outDica')
    var outErros = document.getElementById('outErros')
    var outChances = document.getElementById('outChances')

    var num = Number(inNumero.value)
    if (num <= 0 || num > 100 || isNaN(num)) {
        alert('Coloque um número válido...')
        inNumero.focus()
        return
    }
    if (num == sorteado) {
        alert('Parabéns!! Você Acertou!!')
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = 'Parabéns!! Número sorteado: ' + sorteado
    } else {
        if (erros.includes(num)) {
            alert(`Você já apostou o número ${num}. Tente outro...`)
            inNumero.focus()
        } else {
            erros.push(num)
            var numErros = erros.length
            var numChances = CHANCES - numErros
        }
    }
    outErros.textContent = numErros + ` (${erros.join(', ')})`
    outChances.textContent = numChances
    if (numChances == 0) {
        alert('Suas chances acabaram...')
        outDica.textContent = `Game Over!! Número Sorteado: ${sorteado}`
        btApostar.disabled = true;
        btJogar.className = "exibe";
    } else {
        var dica = num < sorteado ? 'maior' : 'menor'
        outDica.textContent = `Tente um número ${dica} que ${num}`
    }
    inNumero.value = ''
    inNumero.focus()
}
var btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', apostarNumero)
