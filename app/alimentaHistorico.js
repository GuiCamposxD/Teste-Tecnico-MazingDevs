const itens = JSON.parse(localStorage.getItem("historico")) || [];

function alimentaHistorico(dadosFormulario) {

    const existe = itens.find((elemento) => 
    elemento.origem === dadosFormulario.valorOrigem && 
    elemento.destino === dadosFormulario.valorDestino &&
    elemento.planoEscolhido === dadosFormulario.planoEscolhido &&
    elemento.tempo === dadosFormulario.valorTempo &&
    elemento.taxaComFaleMais === dadosFormulario.valorComPlano &&
    elemento.taxaSemFaleMais === dadosFormulario.valorSemPlano);

    if (!existe) {

        const itemAtual =
        {
            "origem": dadosFormulario.valorOrigem,
            "destino": dadosFormulario.valorDestino,
            "planoEscolhido": dadosFormulario.planoEscolhido,
            "tempo": dadosFormulario.valorTempo,
            "taxaComFaleMais": dadosFormulario.valorComPlano,
            "taxaSemFaleMais": dadosFormulario.valorSemPlano,
        }

        itens.push(itemAtual);
        localStorage.setItem("historico", JSON.stringify(itens));
    }
}

export {alimentaHistorico, itens};