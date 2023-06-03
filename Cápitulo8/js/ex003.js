function adicionarProduto() {
    var inProduto = document.getElementById('inProduto')
    var produto = inProduto.value

    if(produto == '') {
        alert('Informe o produto corretamente...')
        inProduto.focus()
        return
    }

    if (localStorage.getItem('lista')) {
        var listaFinal = localStorage.getItem('lista') + ';' + produto
        localStorage.setItem('lista', listaFinal)
    } else {
        localStorage.setItem('lista', produto)
    }

    mostrarLista()
    inProduto.value = ''
    inProduto.focus()
}  
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarProduto)

function mostrarLista() {
    var outLista = document.getElementById('outLista')
    if (!localStorage.getItem('lista')) {
        outLista.textContent = ''
        return
    }
    var linha = 'Produtos Adicionados'
    linha += '\n----------------------------\n'
    var arrProdutos = localStorage.getItem('lista').split(';')
    var listaFinal = arrProdutos.sort()
    for (let i = 0; i < arrProdutos.length; i++) {
        linha += listaFinal[i] + '\n'
    }
    outLista.textContent = linha
}
mostrarLista()

var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', () => {
    if (localStorage.getItem('lista')){
        if (confirm('Tem certeza que deseja limpar a lista?')) {
            localStorage.removeItem('lista')
            mostrarLista()
        }
    }else{
        alert('Não há nenhum produto na lista.')
        inProduto.focus()
        return
    }
})
document.addEventListener('keydown', () => {
    if (event.keyCode === 13) {
        adicionarProduto()
    }
})