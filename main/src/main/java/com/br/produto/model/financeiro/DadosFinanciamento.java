package com.br.produto.model.financeiro;

import javax.persistence.*;

@Entity
@Table(name = "_dados_financiamento")
public class DadosFinanciamento {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nome;

    private int ddd;

    private int numero;

    private String email;

    private String salario;

    private String possuiVeiculo;

    private String estadoCivil;

    private String dependentes;

    private String valorEntrada;

    private String modeloInteresse;

    private String fiador;

    private String cidade;

    public DadosFinanciamento(Long id, String nome, int ddd, int numero, String email, String salario, String possuiVeiculo, String estadoCivil, String dependentes, String valorEntrada, String modeloInteresse, String fiador, String cidade) {
        this.id = id;
        this.nome = nome;
        this.ddd = ddd;
        this.numero = numero;
        this.email = email;
        this.salario = salario;
        this.possuiVeiculo = possuiVeiculo;
        this.estadoCivil = estadoCivil;
        this.dependentes = dependentes;
        this.valorEntrada = valorEntrada;
        this.modeloInteresse = modeloInteresse;
        this.fiador = fiador;
        this.cidade = cidade;
    }

    public DadosFinanciamento() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getDdd() {
        return ddd;
    }

    public void setDdd(int ddd) {
        this.ddd = ddd;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSalario() {
        return salario;
    }

    public void setSalario(String salario) {
        this.salario = salario;
    }

    public String getPossuiVeiculo() {
        return possuiVeiculo;
    }

    public void setPossuiVeiculo(String possuiVeiculo) {
        this.possuiVeiculo = possuiVeiculo;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public String getDependentes() {
        return dependentes;
    }

    public void setDependentes(String dependentes) {
        this.dependentes = dependentes;
    }

    public String getValorEntrada() {
        return valorEntrada;
    }

    public void setValorEntrada(String valorEntrada) {
        this.valorEntrada = valorEntrada;
    }

    public String getModeloInteresse() {
        return modeloInteresse;
    }

    public void setModeloInteresse(String modeloInteresse) {
        this.modeloInteresse = modeloInteresse;
    }

    public String getFiador() {
        return fiador;
    }

    public void setFiador(String fiador) {
        this.fiador = fiador;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
}
