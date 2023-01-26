package com.br.produto.controller.moto;

import com.br.produto.model.motocicletas.Moto;
import com.br.produto.service.moto.MotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/moto")
public class MotoController {

    @Autowired
    private MotoService motoService;

    @GetMapping("/list")
    public List<Moto> getAll(){
        return motoService.motos();
    }

    @GetMapping("/{id}")
    public Optional<Moto> getAll(@PathVariable Long id){
        return motoService.findyMotobyId(id);
    }

    @GetMapping("/list/honda")
    public List<Moto> getVeiculosByMarca_honda() {
        return motoService.motoByMarca_honda();
    }

    @GetMapping("/list/yamaha")
    public List<Moto> getVeiculosByMarca_yamaha() {
        return motoService.motoByMarca_yamaha();
    }

    @GetMapping("/list/bmw")
    public List<Moto> getVeiculosByMarca_bmw() {
        return motoService.motoByMarca_bmw();
    }


}
