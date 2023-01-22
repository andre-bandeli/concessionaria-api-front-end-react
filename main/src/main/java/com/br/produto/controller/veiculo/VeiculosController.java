package com.br.produto.controller.veiculo;

import com.br.produto.model.veiculos.Veiculo;
import com.br.produto.service.veiculo.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/veiculo")
public class VeiculosController {

    @Autowired
    private VeiculoService veiculosService;

    @GetMapping("/list")
    public List<Veiculo> getAll() {
        return veiculosService.veiculos();
    }

    @GetMapping("/marca/honda")
    public List<Veiculo> getVeiculosByMarca() {
        return veiculosService.veiculosByMarca();
    }
}