function resetaHistorico(campo) {

    campo.innerHTML = "";
}

function mostraHistorico(dadosHistorico) {

    const localConteudoModal = document.querySelector("[data-corpoModal]");

    localConteudoModal.innerHTML += `

            <div class="col-12 historico-consulta-sm" data-resultadoLista>
                <h3 class="mb-0 w-100 pt-2">Origem</h3>
                <p class="pb-2 text-center">${dadosHistorico.origem}</p>

                <h3 class="mb-0 w-100">Destino</h3>
                <p class="pb-2 text-center">${dadosHistorico.destino}</p>

                <h3 class="mb-0 w-100">Tempo (em minutos)</h3>
                <p class="pb-2 text-center">${dadosHistorico.tempo}</p>

                <h3 class="mb-0 w-100">Plano</h3>
                <p class="pb-2 text-center">FaleMais ${dadosHistorico.planoEscolhido}</p>

                <h3 class="mb-0 w-100">Com FaleMais</h3>
                <p class="pb-2 text-center">R$ ${dadosHistorico.taxaComFaleMais}</p>

                <h3 class="mb-0 w-100">Sem FaleMais</h3>
                <p class="pb-2 text-center">R$ ${dadosHistorico.taxaSemFaleMais}</p>
            </div>
    `
}

function mostraHistoricoLg(dadosHistorico) {

    const localConteudoModal = document.querySelector("[data-corpoModal]");

    localConteudoModal.innerHTML += `
    
        <div class="resultado-consulta-modal mt-2"> 
            <table class="table table-hover m-0">
                <thead class="cabecalho-tabelaPreco text-center">
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Tempo <br>(em minutos)</th>
                        <th>Plano FaleMais</th>
                        <th>Com FaleMais</th>
                        <th>Sem FaleMais</th>
                    </tr>
                </thead>

                <tbody class="corpo-tabelaPreco text-center">
                    <tr>
                        <td>${dadosHistorico.origem}</td>
                        <td>${dadosHistorico.destino}</td>
                        <td>${dadosHistorico.tempo}</td>
                        <td>FaleMais ${dadosHistorico.planoEscolhido}</td>
                        <td>R$ ${dadosHistorico.taxaComFaleMais}</td>
                        <td>R$ ${dadosHistorico.taxaSemFaleMais}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
}

export { mostraHistoricoLg, mostraHistorico, resetaHistorico };