package com.br.produto.repository;

import com.br.produto.model.financeiro.DadosFinanciamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DadosFinanciamentoRepository extends JpaRepository<DadosFinanciamento, Long> {
}
