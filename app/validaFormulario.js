const erroContainer = document.querySelector("[data-msgErro]");

function validaCampoTempo(campo) {

    if (campo.value < 0 || campo.value.length > 6) {

        erroContainer.classList.remove("d-none");
        erroContainer.classList.add("msg-erro");

        setTimeout(function () {
            campo.classList.add("border-red");
        }, 25)
        
        erroContainer.innerHTML = "Insira um valor positivo de até 6 digítos."

        throw new Error("Valor positivo inválido, insira um valor menor de até 6 digitos");
    }
}

function validaCampoDestino(campo) {

    erroContainer.classList.remove("d-none");
    erroContainer.classList.add("msg-erro");

    setTimeout(function() {
        campo.classList.add("border-red");
    }, 25);

    erroContainer.innerHTML = "Selecione um destino válido, cheque a tabela de preços";

    throw new Error("Não foi possível concluir a consulta, origem ou destino incompativeis. Confira a tabela de preços em caso de dúvida");
}

export { validaCampoTempo, validaCampoDestino };