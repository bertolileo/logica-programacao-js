var carros = [];

function adicionarCarros() {
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");
    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    if (modelo == '' || preco == 0 || isNaN(preco)) {
        alert('Informe os dados corretamente.');
        inModelo.focus();
        return
    }
    carros.push({ modelo: modelo, preco: preco })
    inModelo.value = ''
    inPreco.value = ''
    inModelo.focus()

    listarCarros()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarCarros)

function listarCarros() {
    if (carros.length == 0) {
        alert('Não há carros para se listar...')
        return
    }
    var lista = ''
    for (let i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + '\n'
    }
    document.getElementById('outLista').textContent = lista
}
var btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarCarros)

function filtrarCarros() {
    var maximo = Number(prompt('Informe o valor máximo que deseja pagar:'))
    if (maximo == '' || isNaN(maximo)) {
        alert('Informe um valor válido.')
        return
    }
    var lista = ''
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].preco <= maximo) {
            lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + '\n'

        }

    }
    if (lista == '') {
        alert('Não foi possível encontrar nenhum carro abaixo deste valor...')
    } else {
        document.getElementById('outLista').textContent = `Carros até R$: ${maximo.toFixed(2)}\n --------------------------- \n${lista}`
    }
}
var btFiltrar = document.getElementById('btFiltrar')
btFiltrar.addEventListener('click', filtrarCarros)