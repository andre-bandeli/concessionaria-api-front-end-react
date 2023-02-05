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

    @PostMapping("/addList")
    public List<Veiculo> addListaVeiculos(@RequestBody List<Veiculo> veiculoList){
        return veiculosService.addListaMotos(veiculoList);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteVeiculoById(@PathVariable Long id){
        veiculosService.deleteMoto(id);
        return "Veiculo" + id + "removida com sucesso !";
    }
    @GetMapping("/marca/honda")
    public List<Veiculo> getVeiculosByMarca() {
        return veiculosService.veiculosByMarca();
    }

    @GetMapping("/marca/bmw")
    public List<Veiculo> getVeiculosByMarca_bmw() {
        return veiculosService.veiculosByMarca_bmw();
    }

    @GetMapping("/marca/audi")
    public List<Veiculo> getVeiculosByMarca_audi() {
        return veiculosService.veiculosByMarca_audi();
    }


}