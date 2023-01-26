package com.br.produto.controller.financeiro;

import com.br.produto.model.lead.Lead;
import com.br.produto.service.lead.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api/v1/financeiro")
@CrossOrigin
public class FinanceiroController {

    @Autowired
    private LeadService leadService;

    @PostMapping("/add")
    public Lead save(@RequestBody Lead lead) {
        return leadService.addLead(lead);
    }

}
