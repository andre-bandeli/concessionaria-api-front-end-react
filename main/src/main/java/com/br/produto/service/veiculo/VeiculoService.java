package com.br.produto.service.veiculo;

import com.br.produto.model.veiculos.Veiculo;
import com.br.produto.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculosRepository;

    public List<Veiculo> veiculos() {
        return veiculosRepository.findAll();
    }

    public List<Veiculo> veiculosByMarca() {
        return veiculosRepository.findByMarca("Honda");
    }
}
