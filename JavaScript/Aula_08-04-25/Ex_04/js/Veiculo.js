class Veiculo {
    constructor(placa, modelo, tempo) {
        this.placa = placa.toUpperCase();
        this.modelo = modelo;
        this.tempo = parseFloat(tempo);
    }

    calcularValor() {
        const valorPorHora = 5;
        return (this.tempo * valorPorHora).toFixed(2);
    }

    static filtrarPorPlaca(veiculos, placa) {
        return veiculos.filter(veiculo => 
            veiculo.placa === placa.toUpperCase()
        );
    }
}