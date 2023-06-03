function mostrarDados() {
    var inModelo = document.getElementById('inModelo')
    var inAno = document.getElementById('inAno')
    var inPreco = document.getElementById('inPreco')
    var outClassif = document.getElementById('outClassif')
    var outPrecoVenda = document.getElementById('outPrecoVenda')

    var modelo = inModelo.value
    var ano = Number(inAno.value)
    var preco = Number(inPreco.value)

    var classificacao = classificarCarro(ano)
    var valorTotal = verificarPreco(preco, classificacao)

    outClassif.textContent = `${modelo} - ${classificacao}`
    outPrecoVenda.textContent = `Preço de Venda R$: ${valorTotal.toFixed(2)}`
}
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', mostrarDados)
//-
function classificarCarro(ano) {
    var anoAtual = new Date().getFullYear()
    var classif
    if (ano == anoAtual) {
        classif = 'Novo'
    }else if (ano == anoAtual - 1 || ano == anoAtual - 2){
        classif = 'Seminovo'
    }else {
        classif = 'Usado'
    }
    return classif;
}
//-
function verificarPreco(valor, status) {
    var preco = (status.toLowerCase() == 'novo') ? valor * 1.08 : valor * 1.10
    return preco
}