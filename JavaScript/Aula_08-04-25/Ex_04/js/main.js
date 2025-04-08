const gerenciador = new GerenciadorEstacionamento();

document.getElementById('veiculoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const tempo = document.getElementById('tempo').value;

    const veiculo = new Veiculo(placa, modelo, tempo);
    gerenciador.adicionarVeiculo(veiculo);
    atualizarLista();
    this.reset();
});

function buscarVeiculo() {
    const placa = document.getElementById('buscaPlaca').value;
    const veiculosFiltrados = Veiculo.filtrarPorPlaca(gerenciador.listarVeiculos(), placa);
    atualizarLista(veiculosFiltrados);
}

function atualizarLista(veiculos = gerenciador.listarVeiculos()) {
    const lista = document.getElementById('listaVeiculos');
    lista.innerHTML = '';

    veiculos.forEach(veiculo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${veiculo.placa}</td>
            <td>${veiculo.modelo}</td>
            <td>${veiculo.tempo}</td>
            <td>R$ ${veiculo.calcularValor()}</td>
            <td><button class="delete-btn" onclick="removerVeiculo('${veiculo.placa}')">Excluir</button></td>
        `;
        lista.appendChild(tr);
    });
}

function removerVeiculo(placa) {
    gerenciador.removerVeiculo(placa);
    atualizarLista();
}