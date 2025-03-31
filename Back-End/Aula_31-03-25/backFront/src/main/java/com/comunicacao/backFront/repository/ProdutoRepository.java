package com.comunicacao.backFront.repository;

import com.comunicacao.backFront.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
