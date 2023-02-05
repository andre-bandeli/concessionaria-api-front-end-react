package com.br.produto.service.veiculo;

import com.br.produto.model.motocicletas.Moto;
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

    public List<Veiculo> addListaMotos(List<Veiculo> veiculoList) {
        return (List<Veiculo>) veiculosRepository.saveAll(veiculoList);
    }

    public void deleteMoto(Long id) {
        veiculosRepository.deleteById(id);
    }

    public List<Veiculo> veiculosByMarca() {
        return veiculosRepository.findByMarca("Honda");
    }

    public List<Veiculo> veiculosByMarca_bmw() {
        return veiculosRepository.findByMarca("bmw");
    }

    public List<Veiculo> veiculosByMarca_audi() {
        return veiculosRepository.findByMarca("audi");
    }
}
