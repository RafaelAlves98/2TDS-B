function exibirMes() {
  let mes = document.getElementById('mesDoAno');
  let saida = document.getElementById('saida');

  if (mes instanceof HTMLSelectElement) {
    if (saida instanceof HTMLParagraphElement) {
      let i = mes.selectedIndex;
      let mesSelecionado = mes.options[i].value;
      saida.textContent = `Mês Selecionado: ${mesSelecionado}`;
    }
  }
}
