class GeradorNumeros {
    constructor(minimo, maximo) {
        this.minimo = parseInt(minimo);
        this.maximo = parseInt(maximo);
    }

    gerarNumeros(qtd) {
        // Calcula o tamanho do intervalo
        const intervalo = this.maximo - this.minimo + 1;

        // Verifica se a quantidade solicitada é maior que o intervalo disponível
        if (qtd > intervalo) {
            throw new Error(`Não é possível gerar ${qtd} números únicos no intervalo de ${this.minimo} a ${this.maximo}.`);
        }

        const numeros = new Set();

        // Gera números únicos até atingir a quantidade desejada
        while (numeros.size < qtd) {
            const numero = Math.floor(Math.random() * (this.maximo - this.minimo + 1)) + this.minimo;
            numeros.add(numero);
        }

        // Converte o Set para array
        return Array.from(numeros);
    }
}

function gerarNumeros() {
    // Obtém os valores dos inputs
    const minimo = document.getElementById('minimo').value;
    const maximo = document.getElementById('maximo').value;

    // Valida os inputs
    if (!minimo || !maximo || isNaN(minimo) || isNaN(maximo)) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores numéricos válidos.';
        return;
    }

    // Garante que minimo <= maximo
    const min = Math.min(parseInt(minimo), parseInt(maximo));
    const max = Math.max(parseInt(minimo), parseInt(maximo));

    try {
        // Instancia a classe e gera 15 números
        const gerador = new GeradorNumeros(min, max);
        const numeros = gerador.gerarNumeros(15);

        // Ordena o array
        numeros.sort((a, b) => a - b);

        // Exibe o resultado
        document.getElementById('resultado').innerText = `Números gerados (ordenados): ${numeros.join(', ')}`;
    } catch (error) {
        document.getElementById('resultado').innerText = error.message;
    }
}