import { inputTempo, selectDestino } from "./obterValoresFormulario.js";

const resultadoConsulta = document.querySelector("[data-resultadoLista]");
const containerErro = document.querySelector("[data-msgErro]");
const optionDestino = selectDestino;
const optionTempo = inputTempo;

function limparConsultaDaTela () {

    resultadoConsulta.innerHTML = "";
    containerErro.innerHTML = "";
    containerErro.classList.remove("msg-erro");
    optionDestino.classList.remove("border-red");
    optionTempo.classList.remove("border-red");
}

export default limparConsultaDaTela;