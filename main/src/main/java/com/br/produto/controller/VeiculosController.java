package com.br.produto.controller;

import com.br.produto.model.Marca;
import com.br.produto.model.Veiculos;
import com.br.produto.service.VeiculosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/veiculo")
public class VeiculosController {

    @Autowired
    private VeiculosService veiculosService;

    @GetMapping("/list")
    public List<Veiculos> getAll() {
        return veiculosService.veiculos();
    }

    @GetMapping("/marca/honda")
    public List<Veiculos> getVeiculosByMarca() {
        return veiculosService.veiculosByMarca();
    }
}