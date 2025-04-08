class GerenciadorEstacionamento {
    constructor() {
        this.veiculos = [];
    }

    adicionarVeiculo(veiculo) {
        this.veiculos.push(veiculo);
    }

    removerVeiculo(placa) {
        this.veiculos = this.veiculos.filter(
            veiculo => veiculo.placa !== placa.toUpperCase()
        );
    }

    listarVeiculos() {
        return this.veiculos;
    }
}