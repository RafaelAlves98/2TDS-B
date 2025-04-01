class Produto {
    constructor(nome, quantidade, precoUnitario) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    adicionarQuantidade(qtd) {
        this.quantidade += qtd;
    }

    removerQuantidade(qtd) {
        if (this.quantidade - qtd < 0) {
            alert('Quantidade insuficiente em estoque!');
            return false;
        }
        this.quantidade -= qtd;
        return true;
    }

    calcularValorTotal() {
        return this.quantidade * this.precoUnitario;
    }
}

let estoque = [];

function cadastrarProduto(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const preco = parseFloat(document.getElementById('preco').value);

    // Validar entradas
    if (quantidade < 0 || preco < 0) {
        alert('Quantidade e preço devem ser valores positivos!');
        return;
    }

    // Verificar se produto já existe
    if (estoque.some(prod => prod.nome.toLowerCase() === nome.toLowerCase())) {
        alert('Produto já cadastrado!');
        return;
    }

    const produto = new Produto(nome, quantidade, preco);
    estoque.push(produto);
    
    document.getElementById('formProduto').reset();
    atualizarListaEstoque();
}

function adicionarQuantidade() {
    const nome = document.getElementById('nomeAtualizar').value;
    const produto = estoque.find(prod => prod.nome.toLowerCase() === nome.toLowerCase());
    
    if (!produto) {
        alert('Produto não encontrado!');
        return;
    }

    const qtd = prompt('Digite a quantidade a adicionar:');
    const quantidade = parseInt(qtd);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }

    produto.adicionarQuantidade(quantidade);
    atualizarListaEstoque();
}

function removerQuantidade() {
    const nome = document.getElementById('nomeAtualizar').value;
    const produto = estoque.find(prod => prod.nome.toLowerCase() === nome.toLowerCase());
    
    if (!produto) {
        alert('Produto não encontrado!');
        return;
    }

    const qtd = prompt('Digite a quantidade a remover:');
    const quantidade = parseInt(qtd);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }

    if (produto.removerQuantidade(quantidade)) {
        atualizarListaEstoque();
    }
}

function atualizarListaEstoque() {
    const produtosDiv = document.getElementById('produtos');
    const totalDiv = document.getElementById('totalEstoque');
    
    produtosDiv.innerHTML = '';
    
    estoque.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto-item';
        div.innerHTML = `
            Nome: ${produto.nome} | 
            Quantidade: ${produto.quantidade} | 
            Preço Unitário: R$ ${produto.precoUnitario.toFixed(2)} | 
            Total: R$ ${produto.calcularValorTotal().toFixed(2)}
        `;
        produtosDiv.appendChild(div);
    });

    const valorTotalEstoque = estoque.reduce((total, prod) => 
        total + prod.calcularValorTotal(), 0);
    totalDiv.innerHTML = `<strong>Valor Total do Estoque: R$ ${valorTotalEstoque.toFixed(2)}</strong>`;
}