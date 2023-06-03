function calcularPromocao() {
    var inProduto = document.getElementById('inProduto')
    var inPreco = document.getElementById('inPreco')
    var outProduto = document.getElementById('outProduto')
    var outPromocao = document.getElementById('outPromocao')
    
    var produto = inProduto.value
    var preco = Number(inPreco.value)
    var promocao = (preco + preco) + preco / 2
    var precoMetade = preco / 2

    outProduto.textContent = `${produto} - Promoção!! Leve 3 por apenas R$: ${promocao.toFixed(2)}`
    outPromocao.textContent = `O Terceiro produto custa apenas R$: ${precoMetade.toFixed(2)}`

}
var btVerPromocao = document.getElementById('btVerPromocao')
btVerPromocao.addEventListener('click', calcularPromocao)
