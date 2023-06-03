var criancas = []
function adicionarCriancas() {
    var inNome = document.getElementById('inNome')
    var inIdade = document.getElementById('inIdade')
    var nome = inNome.value
    var idade = Number(inIdade.value)

    if (nome == '' || idade == 0 || isNaN(idade)) {
        alert('Informe os dados corretamente.')
        inNome.focus()
        return
    }
    criancas.push({ nome: nome, idade: idade })
    inNome.value = ''
    inIdade.value = ''
    inNome.focus()

    listarCriancas()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarCriancas)
//---------------------------------------------------------------------------
function listarCriancas() {
    if (criancas.length == 0) {
        alert('Não há crianças para listar.')
        return
    }
    var lista = ''

    for (let i = 0; i < criancas.length; i++) {
        lista += `${criancas[i].nome} - ${criancas[i].idade} anos \n`
    }
    document.getElementById('outLista').textContent = lista
}
var btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarCriancas)
//---------------------------------------------------------------------------
function resumirLista() {
    // verifica se vetor está vazio
    if (criancas.length == 0) {
        alert("Não há crianças na lista");
        return;
    }
    // cria uma cópia do vetor crianças
    var copia = criancas.slice();
    // ordena o vetor copia pela idade
    copia.sort(function (a, b) { return a.idade - b.idade });
    var resumo = ""; // para concatenar saída
    var aux = copia[0].idade; // menor idade do vetor ordenado
    var nomes = []; // vetor para inserir nomes de cada idade
    // percorre os elementos do vetor (classificado por idade)
    for (var i = 0; i < copia.length; i++) {
        // se é da mesma idade auxiliar, adiciona ao vetor
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            // senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) +
                "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade; // obtém a nova idade na ordem
            nomes = []; // limpa o vetor dos nomes
            nomes.push(copia[i].nome); // adiciona o primeiro da nova idade
        }
    }
    // adiciona os nomes da última idade ordenada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    // altera conteúdo de outLista
    document.getElementById("outLista").textContent = resumo;
}
var btResumir = document.getElementById('btResumir')
btResumir.addEventListener('click', resumirLista)