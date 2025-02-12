package com.senai.projectendpoint.controller;

import com.senai.projectendpoint.db.BancoDeProdutos;
import com.senai.projectendpoint.model.Produto;

import java.util.List;

public class ProdutoController {

    BancoDeProdutos bc = new BancoDeProdutos();

    public void inserirNoBanco(Produto p){
        bc.insert(p);
    }

    public List<Produto> pegarTodosOsProdutos(){
        return bc.findAll();
    }

    public void setIdProduto(int idProduto) {
    }

    public void setNomeProduto(String nomeProduto) {
    }

    public void setDescricao(String descricao) {
    }

    public void setPreco(double preco) {
    }

    public void setQuantidade(int quantidade) {
    }

    public void setPontoDeVenda(String pontoDeVenda) {
    }
}
