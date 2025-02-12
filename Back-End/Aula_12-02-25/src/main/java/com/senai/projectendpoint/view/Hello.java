package com.senai.projectendpoint.view;

import com.senai.projectendpoint.controller.ProdutoController;
import com.senai.projectendpoint.model.Produto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class Hello {

    // Instancia o objeto com valores padrão
    ProdutoController pc = new ProdutoController();

    // GET - retorna os dados do usuário
    @GetMapping
    public List<Produto> getAllProdutos() {
        return pc.pegarTodosOsProdutos();
    }

    // POST - cria ou substitui o usuário com os dados enviados na requisição
    @PostMapping
    public String postNovoProduto(@RequestBody Produto p) {
        pc.inserirNoBanco(p);

        return "Sucesso";
    }

    // PUT - atualiza os dados do usuário
    @PutMapping
    public ProdutoController atualizarProduto(@RequestBody Produto p) {
        if (this.pc != null) {
            this.pc.setIdProduto(p.getIdProduto());
            this.pc.setNomeProduto(p.getNomeProduto());
            this.pc.setDescricao(p.getDescricao());
            this.pc.setPreco(p.getPreco());
            this.pc.setQuantidade(p.getQuantidade());
            this.pc.setPontoDeVenda(p.getPontoDeVenda());
        }
        return this.pc;
    }

    // DELETE - "deleta" o usuário (neste exemplo, apenas setamos o objeto como null)
    @DeleteMapping
    public String deletarUsuario() {
        this.pc = null;
        return "Usuário deletado!";
    }
}
