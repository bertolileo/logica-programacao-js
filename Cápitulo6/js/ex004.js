function criarEmail() {
    var inFuncionario = document.getElementById('inFuncionario');
    var outEmail = document.getElementById('outEmail');
    var funcionario = inFuncionario.value

    var partes = funcionario.split(' ');
    var email = ''

    for (let i = 0; i < partes.length - 1; i++) {
        email += partes[i].charAt(0)
    }
    email += partes[partes.length - 1] + '@empresa.com.br'
    outEmail.textContent = 'E-mail: ' + email.toLowerCase()
}
var btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', criarEmail)
