function clicarResult() {
    // Obtém o valor do input
    const input = document.getElementById('numero').value;
    
    // Converte a string de números separados por vírgula em um array de números
    const numeros = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    // Verifica se o array tem números válidos
    if (numeros.length === 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira uma sequência válida de números.';
        return;
    }
    
    // Encontra o maior e o menor valor
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    
    // Exibe o resultado
    document.getElementById('resultado').innerText = `Maior valor: ${maior}, Menor valor: ${menor}`;
}