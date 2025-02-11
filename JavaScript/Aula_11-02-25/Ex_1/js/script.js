function exibir() {
  let numero = document.getElementById('digitado');
  let saida = document.getElementById('resultado');

  if (numero instanceof HTMLInputElement) {
    let num = parseInt(numero.value);

    if (num != null) {
      if (saida != null) {
        if (num > 0) {
          saida.textContent = 'O número é positivo';
        } else if (num < 0) {
          saida.textContent = 'O número é negativo';
        } else {
          saida.textContent = 'O número é zero (neutro)';
        }
      }
    }
  }
}
