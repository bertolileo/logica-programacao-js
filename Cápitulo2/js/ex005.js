function mostrarPromocao(){
    var inRemedio = document.getElementById('inRemedio')
    var inPreco = document.getElementById('inPreco')
    var outRemedio = document.getElementById('outRemedio')
    var outPromocao = document.getElementById('outPromocao')

    var remedio = inRemedio.value   
    var preco = Number(inPreco.value)
    var promocao = Math.floor(preco * 2)
    
    outRemedio.textContent = 'Promoção de ' + remedio
    outPromocao.textContent = 'Leve 2 por apenas R$: ' + promocao.toFixed(2)
}

var btPromocao = document.getElementById('btPromocao')
btPromocao.addEventListener('click', mostrarPromocao)