package com.atividade.banco.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Professor {

    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public Integer getIdade() {
        return idade;
    }

    public Double getSalario() {
        return salario;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    @Id
    private Integer id;
    private String nome;
    private Integer idade;
    private Double salario;
}
