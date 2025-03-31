package com.comunicacao.backFront.controller;

import com.comunicacao.backFront.entity.Produto;
import com.comunicacao.backFront.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    ProdutoRepository pr;
    @PostMapping
    public ResponseEntity<String> criarProduto(@RequestBody Produto p) {
        pr.save(p);
        return ResponseEntity.ok("Produto criado com sucesso!");
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listarProduto() {
        List<Produto> produtos = pr.findAll();
        if(produtos.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } return ResponseEntity.ok(produtos);
    }
}
