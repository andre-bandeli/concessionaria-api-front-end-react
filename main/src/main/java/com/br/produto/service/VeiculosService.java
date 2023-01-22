package com.br.produto.service;

import com.br.produto.model.Marca;
import com.br.produto.model.Veiculos;
import com.br.produto.repository.VeiculosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class VeiculosService {

    @Autowired
    private VeiculosRepository veiculosRepository;

    public List<Veiculos> veiculos() {
        return veiculosRepository.findAll();
    }

    public List<Veiculos> veiculosByMarca() {
        return veiculosRepository.findByMarca("Honda");
    }
}
