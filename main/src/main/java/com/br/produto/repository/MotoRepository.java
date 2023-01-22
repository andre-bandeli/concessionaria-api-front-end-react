package com.br.produto.repository;

import com.br.produto.model.motocicletas.Moto;
import com.br.produto.model.veiculos.Veiculo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MotoRepository extends CrudRepository<Moto, Long> {
    List<Moto> findByMarca(String marca);
}
