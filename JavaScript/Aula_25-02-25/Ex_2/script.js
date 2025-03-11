// Função anônima para calcular a raiz quadrada
const calcularRaizQuadrada = function (numero) {
  if (numero < 0) {
    return 'Erro: Não é possível calcular a raiz quadrada de um número negativo.';
  }
  return Math.sqrt(numero);
};

// Função anônima para calcular o exponencial
const calcularExp = function (numero, expoente) {
  return Math.pow(numero, expoente);
};

// Função para calcular e exibir a raiz quadrada
function calcularRaiz() {
  const numero = parseFloat(document.getElementById('numero').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(numero)) {
    resultadoDiv.textContent = 'Por favor, insira um número válido.';
    console.log('Erro: Número inválido fornecido para raiz.');
  } else {
    const resultado = calcularRaizQuadrada(numero);
    resultadoDiv.textContent = `Raiz quadrada: ${resultado}`;
    console.log(`Raiz quadrada de ${numero} é: ${resultado}`);
  }
}

// Função para calcular e exibir o exponencial
function calcularExponencial() {
  const numero = parseFloat(document.getElementById('numero').value);
  const expoente = parseFloat(document.getElementById('expoente').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(numero) || isNaN(expoente)) {
    resultadoDiv.textContent = 'Por favor, insira números válidos.';
    console.log(
      'Erro: Número ou expoente inválido fornecido para exponencial.'
    );
  } else {
    const resultado = calcularExp(numero, expoente);
    resultadoDiv.textContent = `${numero} elevado a ${expoente} é: ${resultado}`;
    console.log(`${numero} elevado a ${expoente} é: ${resultado}`);
  }
}
