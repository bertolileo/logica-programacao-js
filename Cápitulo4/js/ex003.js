var numContas = 0;
var numTotal = 0;
var resposta = ''

function registrarConta(){
    var inDescricao = document.getElementById('inDescricao')
    var inValor = document.getElementById('inValor')
    var outListaContas = document.getElementById('outListaContas')
    var outTotal = document.getElementById('outTotal')

    var descricao = inDescricao.value
    var valor = Number(inValor.value)

    numContas++
    numTotal = numTotal + valor

    resposta = resposta + descricao + ' - R$: ' + valor.toFixed(2) + '\n'
    outListaContas.textContent = resposta + '-----------------------------------------'
    outTotal.textContent = numContas + ' conta(s) - Total R$: ' + numTotal.toFixed(2)

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}
var btRegistrar = document.getElementById('btRegistrar')
btRegistrar.addEventListener('click', registrarConta)