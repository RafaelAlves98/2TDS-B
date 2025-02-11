// Espera o DOM carregar antes de adicionar os event listeners
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('exibirAno');
  botao.addEventListener('click', exibir);
});

function exibir() {
  const entrada = document.getElementById('anoEntrada');
  const saida = document.getElementById('anoSaida');

  const ano = Number(entrada.value);

  // Validação da entrada
  if (isNaN(ano) || entrada.value.trim() === '') {
    saida.textContent = 'Por favor, digite um ano válido.';
    return;
  }

  // Verifica se o ano é bissexto
  if (isBissexto(ano)) {
    saida.textContent = `O ano ${ano} é bissexto.`;
  } else {
    saida.textContent = `O ano ${ano} não é bissexto.`;
  }
}

// Função que verifica se o ano é bissexto
function isBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}
