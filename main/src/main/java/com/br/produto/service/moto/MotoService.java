package com.br.produto.service.moto;

import com.br.produto.model.motocicletas.Moto;
import com.br.produto.model.veiculos.Veiculo;
import com.br.produto.repository.MotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MotoService {

    @Autowired
    private MotoRepository motoRepository;

    public List<Moto> motos() {
        return (List<Moto>) motoRepository.findAll();
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
