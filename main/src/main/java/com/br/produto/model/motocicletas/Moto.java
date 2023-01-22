package com.br.produto.model.motocicletas;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "_moto")
public class Moto {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull
    private String nome_modelo;

    @NotNull
    private String marca;

    @NotNull
    private Double preco;

    private String descricao;

    public Moto(Long id, String nome_modelo, String marca, Double preco, String descricao) {
        this.id = id;
        this.nome_modelo = nome_modelo;
        this.marca = marca;
        this.preco = preco;
        this.descricao = descricao;
    }

    public Moto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome_modelo() {
        return nome_modelo;
    }

    public void setNome_modelo(String nome_modelo) {
        this.nome_modelo = nome_modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
