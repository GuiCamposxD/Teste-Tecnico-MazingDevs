import { alimentaHistorico } from "./alimentaHistorico.js";
import limparConsultaDaTela from "./limparConsulta.js";
import { mostraHistoricoLg, mostraHistorico, resetaHistorico } from "./mostraHistorico.js";
import { mostrarLista, mostrarListaLg } from "./mostrarListaDeValores.js";
import { inputTempo, obterValoresFormulario } from "./obterValoresFormulario.js";
import tratarValores from "./trataValores.js";

const formulario = document.querySelector("[data-formulario]");
const resultados = document.querySelector("[data-resultadoLista]");
const botaoHistorico = document.querySelector("[data-historico]");
const larguraTela = window.innerWidth;

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();
    limparConsultaDaTela();

    const { valorOrigem, valorDestino, planoEscolhido, valorTempo } = obterValoresFormulario();

    const [valorComPlano, valorSemPlano] = tratarValores(valorOrigem, valorDestino, planoEscolhido, valorTempo);

    const dadosFormulario =
    {
        valorOrigem,
        valorDestino,
        planoEscolhido,
        valorTempo,
        valorComPlano,
        valorSemPlano
    }

    alimentaHistorico(dadosFormulario);

    if (larguraTela <= 992) {

        mostrarLista(dadosFormulario);

        resultados.scrollIntoView(false);

        inputTempo.value = "";
    } else {

        mostrarListaLg(dadosFormulario);

        resultados.scrollIntoView(false);

        inputTempo.value = "";
    }
})

botaoHistorico.addEventListener("click", () => {

    const localConteudoModal = document.querySelector("[data-corpoModal]");

    const historicoCompleto = JSON.parse(localStorage.getItem("historico"));

    resetaHistorico(localConteudoModal);

    if (larguraTela <= 992) {

        historicoCompleto.forEach((item) => {

            mostraHistorico(item);
        })
    } else {

        historicoCompleto.forEach((item) => {

            mostraHistoricoLg(item);
        })
    }
})