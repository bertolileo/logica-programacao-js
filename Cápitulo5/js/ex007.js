var candidatos = [];

function adicionarCandidatos() {
    var inNome = document.getElementById('inNome');
    var inAcertos = document.getElementById('inAcertos');
    var nome = inNome.value;
    var acertos = Number(inAcertos.value);

    candidatos.push({ nome: nome, acertos: acertos });
    inNome.value = '';
    inAcertos.value = '';
    inNome.focus();

    listarCandidatos();
}
//----------------------------------------------------------------------------------------------
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarCandidatos);

function listarCandidatos() {
    var lista = '';
    for (let i = 0; i < candidatos.length; i++) {
        lista += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos\n`;
    }
    document.getElementById('outLista').textContent = lista;
}
var btListar = document.getElementById('btListar');
btListar.addEventListener('click', listarCandidatos);
//----------------------------------------------------------------------------------------------
function listarAprovados() {
    var corte = Number(prompt('Número de Acertos para Aprovação?'))
    const copia = candidatos.slice()
    copia.sort((a, b) => { a.acertos - b.acertos })
    copia.reverse()

    let aprovados = ""

    for (const candidato of copia) {
        if (candidato.acertos >= corte) {
            aprovados += candidato.nome + " - " + candidato.acertos + " acertos\n"
        }
    }

    if (aprovados == "") {
        document.getElementById('outLista').textContent = "Não há candidatos aprovados..."
    } else {
        document.getElementById('outLista').textContent = aprovados
    }
}
var btAprovados = document.getElementById('btAprovados')
btAprovados.addEventListener('click', listarAprovados)