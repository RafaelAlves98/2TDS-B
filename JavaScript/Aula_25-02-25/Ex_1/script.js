// Define a função anônima para realizar os cálculos
const calcular = function (operacao, num1, num2) {
  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Erro: Divisão por zero!';
      }
      return num1 / num2;
    default:
      return 'Operação inválida!';
  }
};

// Função para obter os valores e calcular o resultado
function calcularResultado() {
  // Obtém os valores dos campos de entrada
  const operacao = document.getElementById('operacao').value;
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Obtém o elemento onde o resultado será exibido
  const resultadoDiv = document.getElementById('resultado');

  // Verifica se as entradas são números válidos
  if (isNaN(num1) || isNaN(num2)) {
    resultadoDiv.textContent = 'Por favor, insira números válidos.';
    console.log('Erro: Entradas inválidas fornecidas.');
  } else {
    // Calcula o resultado usando a função anônima
    const resultado = calcular(operacao, num1, num2);
    // Exibe o resultado na página
    resultadoDiv.textContent = `O resultado é: ${resultado}`;
    // Exibe no console
    console.log(
      `O resultado da operação '${operacao}' entre ${num1} e ${num2} é: ${resultado}`
    );
  }
}
