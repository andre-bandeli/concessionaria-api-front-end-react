package com.br.produto.controller.lead;

import com.br.produto.model.lead.Lead;
import com.br.produto.service.lead.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/lead")
@CrossOrigin
public class LeadController {

    @Autowired
    private LeadService leadService;

    @PostMapping("/add")
    public Lead save(@RequestBody Lead lead) {
        return leadService.addLead(lead);
    }

}
