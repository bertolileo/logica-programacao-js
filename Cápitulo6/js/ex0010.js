const DESCONTO_MULTA = 20 / 100
function multaDeTransito() {
    var inData = document.getElementById('inData')
    var inMulta = document.getElementById('inMulta')
    var outData = document.getElementById('outData')
    var outDesconto = document.getElementById('outDesconto')

    var dataVenc = inData.value
    partes = dataVenc.split("-")
    var multa = Number(inMulta.value)
    var data = new Date();
    data.setDate(Number(partes[2]));
    data.setMonth(Number(partes[1]) - 1);
    data.setFullYear(Number(partes[0]));

    var dataDesconto = new Date(data.getTime() + (90 * 86400000))
    var dia = dataDesconto.getDate()
    var mes = dataDesconto.getMonth() + 1
    var ano = dataDesconto.getFullYear()

    diaZero = dia < 10 ? '0' + dia : dia
    mesZero = mes < 10 ? '0' + mes : mes

    var multaDesc = multa - (multa * DESCONTO_MULTA) 
 
    outData.textContent = `Data Limite para Pagamento com Desconto: ${diaZero}/${mesZero}/${ano}`
    outDesconto.textContent = `Valor Com Desconto R$: ${multaDesc.toFixed(2)}`
}
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', multaDeTransito)