function mostrarPromocao() {
    var inVeiculo = document.getElementById('inVeiculo')
    var inPreco = document.getElementById('inPreco')
    var outVeiculo = document.getElementById('outVeiculo')
    var outEntrada = document.getElementById('outEntrada')
    var outParcela = document.getElementById('outParcela')
 
    var veiculo = inVeiculo.value
    var preco = Number(inPreco.value)
    var entrada = preco * 0.50
    var parcela = (preco * 0.50) / 12
 
     outVeiculo.textContent = 'Promoção: ' + veiculo
     outEntrada.textContent = 'Entrada: ' + entrada
     outParcela.textContent = '12x de: ' + parcela
}

var btVerPromocao = document.getElementById('btVerPromocao')
btVerPromocao.addEventListener('click', mostrarPromocao)