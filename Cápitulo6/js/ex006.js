const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

function calcularMultaJuros() {
  var inDataVenc = document.getElementById("inDataVenc");
  var inValor = document.getElementById("inValor");
  var outMulta = document.getElementById("outMulta");
  var outJuros = document.getElementById("outJuros");
  var outTotal = document.getElementById("outTotal");

  var dataVenc = inDataVenc.value;
  var valor = Number(inValor.value);

  const partes = dataVenc.split("-"); // data vem no formato aaaa-mm-dd

  // Cria um objeto Date com a data de vencimento
  var vencto = new Date();
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  const hoje = new Date(); // Cria um objeto Date com a data atual

  const atraso = hoje - vencto; // calcula a diferença de dias entre datas (em ms)
  let multa = 0; // inicializa multa e juros com 0
  let juros = 0;

  if (atraso > 0) {
    // se conta estiver em atraso ...
    // converte ms do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms: 86400000)
    const dias = atraso / 86400000;
    multa = valor * TAXA_MULTA; // calcula multa e juros
    juros = valor * TAXA_JUROS * dias;
  }
  var total = valor + multa + juros;

  outMulta.value = multa.toFixed(2);
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limparCampos() {
  location.reload();
  }
  var btNovaConta = document.getElementById("btNovaConta");
  btNovaConta.addEventListener("click", limparCampos);
