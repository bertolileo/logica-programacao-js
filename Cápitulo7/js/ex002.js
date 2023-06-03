var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', function() {
    var inPreco = document.getElementById('inPreco')
    var outParcela = document.getElementById('outParcela')
    var preco = Number(inPreco.value)

    parcelas = ''

    for (let i = 1; i <= 10; i++) {
        parcelas += `${i}x de R$: ${(preco / i).toFixed(2)}\n`
    }
    outParcela.textContent = 'Opções de Pagamento\n\n' + parcelas
})