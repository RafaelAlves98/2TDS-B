function calcularMedia(event) {
    event.preventDefault();
    
    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value)
    const resultadoDiv = document.getElementById('resultado');

    // Validar se são números
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert('Por favor, insira apenas números válidos nas notas.');
        return;
    }

    // Validar o intervalo das notas (0 a 10)
    if (!validarNota(nota1) || !validarNota(nota2) || !validarNota(nota3) || !validarNota(nota4)) {
        alert('As notas devem estar entre 0 e 10.');
        return;
    }

    // Calcular a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibir o resultado formatado com 2 casas decimais
    resultadoDiv.innerHTML = `${nome} - Média: ${media.toFixed(2)}`;
}

// Função para validar se a nota está no intervalo correto
function validarNota(nota) {
    return nota >= 0 && nota <= 10;
}