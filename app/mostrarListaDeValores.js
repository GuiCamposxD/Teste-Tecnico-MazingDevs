const containerResultadoLista = document.querySelector("[data-resultadoLista]");

function mostrarListaLg(dadosFormulario) {

    containerResultadoLista.innerHTML = `
        <div class="resultado-consulta"> 
            <table class="table table-hover m-0">
                <thead class="cabecalho-tabelaPreco text-center">
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Tempo (em minutos)</th>
                        <th>Plano FaleMais</th>
                        <th>Com FaleMais</th>
                        <th>Sem FaleMais</th>
                    </tr>
                </thead>

                <tbody class="corpo-tabelaPreco text-center">
                    <tr>
                        <td>${dadosFormulario.valorOrigem}</td>
                        <td>${dadosFormulario.valorDestino}</td>
                        <td>${dadosFormulario.valorTempo}</td>
                        <td>FaleMais ${dadosFormulario.planoEscolhido}</td>
                        <td>R$ ${dadosFormulario.valorComPlano}</td>
                        <td>R$ ${dadosFormulario.valorSemPlano}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
}

function mostrarLista(dadosFormulario) {
    containerResultadoLista.innerHTML =
        `
            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Origem</h3>
                <p class="py-2 text-center">${dadosFormulario.valorOrigem}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Destino</h3>
                <p class="py-2 text-center">${dadosFormulario.valorDestino}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Tempo (em minutos)</h3>
                <p class="py-2 text-center">${dadosFormulario.valorTempo}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Plano</h3>
                <p class="py-2 text-center">FaleMais ${dadosFormulario.planoEscolhido}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Com FaleMais</h3>
                <p class="py-2 text-center">R$ ${dadosFormulario.valorComPlano}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Sem FaleMais</h3>
                <p class="py-2 text-center">R$ ${dadosFormulario.valorSemPlano}</p>
            </div>
    `
}

export { mostrarListaLg, mostrarLista };