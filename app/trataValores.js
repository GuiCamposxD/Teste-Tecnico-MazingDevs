import { validaCampoDestino } from "./validaFormulario.js";
import { selectDestino } from "./obterValoresFormulario.js";

const listaValores = [
    {
        "origem": "011",
        "destinosComValores": [
            {
                "destino": "016",
                "valor": 1.90
            },
            {
                "destino": "017",
                "valor": 1.70
            },
            {
                "destino": "018",
                "valor": 0.90
            }
        ],

    },
    {
        "origem": "016",
        "destinosComValores": [
            {
                "destino": "011",
                "valor": 2.90
            }
        ],

    },
    {
        "origem": "017",
        "destinosComValores": [
            {
                "destino": "011",
                "valor": 2.70
            }
        ],

    },
    {
        "origem": "018",
        "destinosComValores": [
            {
                "destino": "011",
                "valor": 1.90
            }
        ],
    }
]

function buscaTaxa(origem, destino) {

    try {

        const dadosOrigem = listaValores.find((elemento) => elemento.origem === origem);
        const dadosDestino = dadosOrigem.destinosComValores.find((elemento) => elemento.destino === destino);

        const taxa = dadosDestino.valor;

        return taxa;
    } catch (e) {

        validaCampoDestino(selectDestino)
    }
}

function calcularValorDaTaxa(origem, destino, tempo, plano) {

    const tempoRestante = tempo - plano;

    let taxaComPlanoFaleMais = buscaTaxa(origem, destino) * 1.1 * tempoRestante;
    let taxaSemPlanoFaleMais = buscaTaxa(origem, destino) * tempo;

    if (tempoRestante < 0) taxaComPlanoFaleMais = 0.00

    taxaComPlanoFaleMais = taxaComPlanoFaleMais.toFixed(2);
    taxaSemPlanoFaleMais = taxaSemPlanoFaleMais.toFixed(2);

    return [taxaComPlanoFaleMais, taxaSemPlanoFaleMais];
}

function tratarValores(valorOrigem, valorDestino, planoEscolhido, valorTempo,) {


    const [valorComPlano, valorSemPlano] = calcularValorDaTaxa(valorOrigem, valorDestino, valorTempo, planoEscolhido)

    return [valorComPlano, valorSemPlano];
}

export default tratarValores;