function adicionarClube() {
    var divClubes = document.getElementById('divClubes')
    var inClube = document.getElementById('inClube')
    var clube = inClube.value
    if (clube == '') {
        alert('Insira o nome do clube corretamente.')
        inClube.focus()
        return
    }

    var h5 = document.createElement('h5')
    var texto = document.createTextNode(clube)
    h5.className = "aDireita"
    h5.appendChild(texto)
    divClubes.appendChild(h5)

    inClube.value = ''
    inClube.focus()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarClube)

function montarTabela() {
    var divClubes = document.getElementById('divClubes');
    var arrH5 = divClubes.getElementsByTagName('h5');
    var numH5 = arrH5.length;

    if (numH5 % 2 != 0) {
        alert('O número de clubes inseridos deve ser par.');
        return;
    }

    var tbClubes = document.createElement('table');
    tbClubes.className = 'table table-striped';
    divClubes.appendChild(tbClubes)
    
    for (let i = 0; i < numH5; i++) {
        if (i % 2 == 0) {
            var linha = tbClubes.insertRow(-1);
            var col1 = linha.insertCell(0)
            col1.textContent = arrH5[i].innerText
        } else {
            var col2 = linha.insertCell(1)
            col2.textContent = arrH5[i].innerText
            linha = tbClubes.insertRow(-1);
        }
    }
}
var btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarTabela)

var btNovos = document.getElementById('btNovos')
btNovos.addEventListener('click', () => {
    window.location.reload()
})