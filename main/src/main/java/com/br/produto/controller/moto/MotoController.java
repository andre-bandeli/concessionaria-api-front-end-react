package com.br.produto.controller.moto;

import com.br.produto.model.motocicletas.Moto;
import com.br.produto.service.moto.MotoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    @PostMapping("/addList")
    public List<Moto> addListaMotos(@RequestBody List<Moto> motoList){
        return motoService.addListaMotos(motoList);
    }

    @PostMapping("/add")
    public ResponseEntity<Moto> addMoto(@RequestBody Moto moto) throws IOException {
        return new ResponseEntity<>(motoService.addMoto(moto), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteMotoById(@PathVariable Long id){
        motoService.deleteMoto(id);
        return "Moto" + id + "removida com sucesso !";
    }

    @GetMapping("/{id}")
    public ResponseEntity<Moto> getAll(@PathVariable Long id){
        Optional<Moto> moto = motoService.findyMotobyId(id);
        if (moto.isPresent()) {
            return ResponseEntity.ok(moto.get());
        }
        return ResponseEntity.notFound().build();
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
