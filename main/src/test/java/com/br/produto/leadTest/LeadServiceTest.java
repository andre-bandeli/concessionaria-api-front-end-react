package com.br.produto.leadTest;

import com.br.produto.model.lead.Lead;
import com.br.produto.repository.LeadRepository;
import com.br.produto.service.lead.LeadService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LeadServiceTest {
    @Autowired
    private LeadService leadService;
    @Autowired
    private LeadRepository leadRepository;

    @Test
    public void testAddLeadSuccess() {
        Lead lead = new Lead();
        lead.setNome("John Doe");
        Lead result = leadService.addLead(lead);
        assertNotNull(result);
        assertNotNull(result.getId());
        assertEquals(lead.getNome(), result.getNome());
    }

    @Test
    public void testFindLeadByIdSuccess() {
        Lead lead = new Lead();
        lead.setNome("John Doe");
        lead = leadService.addLead(lead);
        Optional<Lead> result = leadRepository.findById(lead.getId());
        assertTrue(result.isPresent());
    }

    @Test
    public void testFindLeadByIdFailureWhenIdNotExists() {
        Optional<Lead> result = leadRepository.findById(-1L);
        assertFalse(result.isPresent());
    }

}