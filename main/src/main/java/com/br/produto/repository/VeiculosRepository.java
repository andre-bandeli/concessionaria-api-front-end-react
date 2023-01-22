package com.br.produto.repository;

import com.br.produto.model.Marca;
import com.br.produto.model.Veiculos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VeiculosRepository extends JpaRepository<Veiculos, Long> {
    List<Veiculos> findByMarca(String marca);
}
