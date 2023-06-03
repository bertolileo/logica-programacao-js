function validarSenha() {
    var inSenha = document.getElementById('inSenha')
    var outResposta = document.getElementById('outResposta')
    var senha = inSenha.value

    var erros = []

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }
    if (senha.match(/[0-9]/g) == null) {
        erros.push('conter no mínimo, 1 numero')
    }
    if (senha.match(/[a-z]/g) == null) {
        erros.push('ao menos 1 letra minúscula')
    }
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push('conter 2 letras maiúsculas ou mais')
    }
    if (senha.match(/\W|_/g) == null) {
        erros.push('haver pelo menos 1 símbolo')
    }
    if (erros.length == 0) {
        outResposta.textContent = 'Ok! Senha Válida'
    }else {
        outResposta.textContent = 'Erro... A senha deve ' + erros.join(', ')
    }
}
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', validarSenha)