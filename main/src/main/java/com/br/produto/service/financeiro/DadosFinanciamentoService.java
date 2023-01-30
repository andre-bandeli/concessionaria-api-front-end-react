package com.br.produto.service.financeiro;

import com.br.produto.model.financeiro.DadosFinanciamento;
import com.br.produto.model.lead.Lead;
import com.br.produto.repository.DadosFinanciamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DadosFinanciamentoService {

    @Autowired
    private DadosFinanciamentoRepository dadosFinanciamentoRepository;

    public DadosFinanciamento addDadosFinanciamento(DadosFinanciamento dadosFinanciamento) {
        return dadosFinanciamentoRepository.save(dadosFinanciamento);
    }

}
