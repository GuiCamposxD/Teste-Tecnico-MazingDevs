import { validaCampoTempo } from "./validaFormulario.js";

const selectOrigem = document.querySelector("[data-opcaoOrigem]");
const selectDestino = document.querySelector("[data-opcaoDestino]");
const selectPlano = document.querySelector("[data-opcaoPlano]");
const inputTempo = document.querySelector("[data-inputTempo]");

function obterValoresFormulario() {

    validaCampoTempo(inputTempo);

    const valorOrigem = selectOrigem.options[selectOrigem.selectedIndex].value;
    const valorDestino = selectDestino.options[selectDestino.selectedIndex].value;
    const planoEscolhido = selectPlano.options[selectPlano.selectedIndex].value;

    return (
        {
            valorOrigem,
            valorDestino,
            planoEscolhido,
            "valorTempo": inputTempo.value
        }
    )
}

export { obterValoresFormulario, selectDestino, inputTempo };