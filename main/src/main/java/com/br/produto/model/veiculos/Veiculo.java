package com.br.produto.model.veiculos;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "_veiculo")
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull
    private String nome_modelo;

    private String marca;

    @NotNull
    private Double preco;

    private String descricao;

    private String quilometragem;

    private String ano;

    private String injecao;

    private String freio;

    private String cilindradas;

    public Veiculo(Long id, String nome_modelo, String marca, Double preco, String descricao,
                   String quilometragem, String ano, String injecao, String freio, String cilindradas) {
        this.id = id;
        this.nome_modelo = nome_modelo;
        this.marca = marca;
        this.preco = preco;
        this.descricao = descricao;
        this.quilometragem = quilometragem;
        this.ano = ano;
        this.injecao = injecao;
        this.freio = freio;
        this.cilindradas = cilindradas;
    }

    public Veiculo() {
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

    public String getQuilometragem() {
        return quilometragem;
    }

    public void setQuilometragem(String quilometragem) {
        this.quilometragem = quilometragem;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

    public String getInjecao() {
        return injecao;
    }

    public void setInjecao(String injecao) {
        this.injecao = injecao;
    }

    public String getFreio() {
        return freio;
    }

    public void setFreio(String freio) {
        this.freio = freio;
    }

    public String getCilindradas() {
        return cilindradas;
    }

    public void setCilindradas(String cilindradas) {
        this.cilindradas = cilindradas;
    }
}