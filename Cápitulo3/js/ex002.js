function calcularPeso() {
    var inNome = document.getElementById('inNome')
    var rbMasculino = document.getElementById('rbMasculino')
    var rbFeminino = document.getElementById('rbFeminino')
    var inAltura = document.getElementById('inAltura')
    var outPesoIdeal = document.getElementById('outPesoIdeal')

    var nome = inNome.value
    var altura = Number(inAltura.value)
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked

    // verifica se nome foi preenchido e sexo selecionado
    if (nome == '' || (masculino == false && feminino == false)) {
        alert('Por Favor, infome o nome e o sexo...')
        inNome.focus() // posiciona (joga o foco) no campo de edição inNome
        return
    } if (altura == 0 || isNaN(altura)) {
        alert('Por Favor, insira uma altura válida...')
        inAltura.focus()
        return
    } if (masculino) {
        let pesoIdeal = 22 * (altura ** 2)
        outPesoIdeal.textContent = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)}`
    } if (feminino) {
        let pesoIdeal = 21 * (altura ** 2)
        outPesoIdeal.textContent = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)}`
    }
   
} 
var btCalcularPeso = document.getElementById('btCalcularPeso')
btCalcularPeso.addEventListener('click', calcularPeso)

function limparCampos() {
    document.getElementById('inNome').value = ''
    document.getElementById('rbMasculino').checked = false
    document.getElementById('rbFeminino').checked = false
    document.getElementById('inAltura').value = ''
    document.getElementById('outPesoIdeal').textContent = ''
    document.getElementById('inNome').focus()
}
var btLimparCampos = document.getElementById('btLimparCampos')
btLimparCampos.addEventListener('click', limparCampos)