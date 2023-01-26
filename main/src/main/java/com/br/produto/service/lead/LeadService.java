package com.br.produto.service.lead;

import com.br.produto.model.lead.Lead;
import com.br.produto.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LeadService {

    @Autowired
    private LeadRepository leadRepository;

    public Lead addLead(Lead lead) {
        return leadRepository.save(lead);
    }

}
