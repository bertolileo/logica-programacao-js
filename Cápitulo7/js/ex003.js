var itens = []
var inPizza = document.getElementById('inPizza')
var inBebida = document.getElementById('inBebida')
function trocarItem() {
    if (rbPizza.checked) {
        inBebida.className = 'oculta'
        inPizza.className = 'exibe'
    }else {
        inPizza.className = 'oculta'
        inBebida.className = 'exibe'
    }
}
var rbPizza = document.getElementById('rbPizza')
rbPizza.addEventListener('change', trocarItem)

var rbBebida = document.getElementById('rbBebida')
rbBebida.addEventListener('change', trocarItem)

function mostrarNumSabores() {
    if (rbPizza.checked) {
        var pizza = inPizza.value
        var num = (pizza == 'media') ? 2 : (pizza == 'grande') ? 3 : 4
        inDetalhes.placeholder = `Até ${num} sabores`
    }
}
var inDetalhes = document.getElementById('inDetalhes')
inDetalhes.addEventListener('focus', mostrarNumSabores)
inDetalhes.addEventListener('blur', () => {
    inDetalhes.placeholder = ''
})
inDetalhes.addEventListener('keypress', (tecla) => {
    if (tecla.keyCode == 13 ) {
        adicionarItem()
    }
})
function adicionarItem() {
    var outPedido = document.getElementById('outPedido')
    if (rbPizza.checked) {
        var num = inPizza.selectedIndex
        var produto = inPizza.options[num].text
    } else {
        var num = inBebida.selectedIndex
        var produto = inBebida.options[num].text
    }
    itens.push(`${produto} (${inDetalhes.value})`)
    outPedido.textContent = itens.join('\n')
    limparCampos()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarItem)
function limparCampos() {
    inDetalhes.value = ''
    rbPizza.checked = true	
    inBebida.className = 'oculta'
    inPizza.className = 'exibe'
    inPizza.selectedIndex = 0
    rbPizza.focus()
}
var btMandar = document.getElementById('btMandar')
btMandar.addEventListener('click', () => {
    var outPedido = document.getElementById('outPedido')
    itens.shift()
    outPedido.textContent = itens.join('\n')

})
