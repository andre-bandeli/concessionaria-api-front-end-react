package com.br.produto.controller.financeiro;

import com.br.produto.model.financeiro.DadosFinanciamento;
import com.br.produto.model.lead.Lead;
import com.br.produto.service.financeiro.DadosFinanciamentoService;
import com.br.produto.service.lead.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/financeiro")
@CrossOrigin
public class FinanceiroController {

    @Autowired
    private DadosFinanciamentoService dadosFinanciamentoService;

    @PostMapping("/add")
    public DadosFinanciamento save(@RequestBody DadosFinanciamento dadosFinanciamento) {
        return dadosFinanciamentoService.addDadosFinanciamento(dadosFinanciamento);
    }

}
