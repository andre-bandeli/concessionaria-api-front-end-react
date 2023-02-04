package com.br.produto.service.moto;

import com.br.produto.model.motocicletas.Moto;
import com.br.produto.repository.MotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Service
public class MotoService {


    @Autowired
    private MotoRepository motoRepository;

    public List<Moto> motos() {
        return (List<Moto>) motoRepository.findAll();
    }

    public List<Moto> addListaMotos(List<Moto> motoList) {
        return (List<Moto>) motoRepository.saveAll(motoList);
    }

    public Moto addMoto(Moto moto) {
        return motoRepository.save(moto);
    }
    public void deleteMoto(Long id) {
        motoRepository.deleteById(id);
    }

    public Optional<Moto> findyMotobyId(Long id) {
        return motoRepository.findById(id);
    }

    public List<Moto> motoByMarca_honda() {
        return motoRepository.findByMarca("honda");
    }

    public List<Moto> motoByMarca_yamaha() {
        return motoRepository.findByMarca("yamaha");
    }

    public List<Moto> motoByMarca_bmw() {
        return motoRepository.findByMarca("bmw");
    }
}
