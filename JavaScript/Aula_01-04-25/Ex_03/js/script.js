class Pedido {
    constructor() {
        this.itens = [];
        this.quantidades = [];
        this.precos = [];
    }

    adicionarItem(nomeItem, quantidade, preco) {
        this.itens.push(nomeItem);
        this.quantidades.push(quantidade);
        this.precos.push(preco);
    }

    calcularTotal() {
        return this.precos.reduce((total, preco, index) => 
            total + (preco * this.quantidades[index]), 0);
    }

    limparPedido() {
        this.itens = [];
        this.quantidades = [];
        this.precos = [];
    }
}

let pedidoAtual = new Pedido();

function adicionarItem(event) {
    event.preventDefault();
    
    const itemSelect = document.getElementById('item');
    const [nomeItem, precoStr] = itemSelect.value.split('|');
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const preco = parseFloat(precoStr);

    // Validar entradas
    if (!nomeItem || quantidade < 1) {
        alert('Por favor, selecione um item e uma quantidade válida!');
        return;
    }

    pedidoAtual.adicionarItem(nomeItem, quantidade, preco);
    atualizarPedido();

    // Resetar o formulário
    document.getElementById('formItem').reset();
}

function atualizarPedido() {
    const itensDiv = document.getElementById('itens');
    const totalDiv = document.getElementById('total');
    
    itensDiv.innerHTML = '';
    
    pedidoAtual.itens.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item-pedido';
        const subtotal = pedidoAtual.quantidades[index] * pedidoAtual.precos[index];
        div.innerHTML = `
            ${item} - 
            Quantidade: ${pedidoAtual.quantidades[index]} - 
            Preço Unitário: R$ ${pedidoAtual.precos[index].toFixed(2)} - 
            Subtotal: R$ ${subtotal.toFixed(2)}
        `;
        itensDiv.appendChild(div);
    });

    const total = pedidoAtual.calcularTotal();
    totalDiv.innerHTML = `Total do Pedido: R$ ${total.toFixed(2)}`;
}

function finalizarPedido() {
    if (pedidoAtual.itens.length === 0) {
        alert('O pedido está vazio!');
        return;
    }

    alert(`Pedido finalizado! Total: R$ ${pedidoAtual.calcularTotal().toFixed(2)}`);
    pedidoAtual.limparPedido();
    atualizarPedido();
}