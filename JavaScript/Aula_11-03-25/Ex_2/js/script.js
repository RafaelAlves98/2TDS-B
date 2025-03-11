function calcularDesconto(preco, desconto = 0.1) {
  if (typeof preco !== 'number' || isNaN(preco) || preco < 0) {
    return 'Por favor, forneça um preço válido';
  }
  const valorDesconto = preco * desconto;
  return preco - valorDesconto;
}

function calcular() {
  const preco = Number(document.getElementById('preco').value);
  const descontoInput = document.getElementById('desconto').value;
  const desconto = descontoInput ? Number(descontoInput) / 100 : undefined;

  const resultado = calcularDesconto(preco, desconto);
  document.getElementById('resultado').innerHTML =
    typeof resultado === 'number'
      ? `Preço com desconto: R$ ${resultado.toFixed(2)}`
      : resultado;
}
