package com.br.produto.leadTest;

import com.br.produto.model.lead.Lead;
import org.junit.Test;
import static org.junit.Assert.*;

public class LeadTest {

    @Test
    public void testLeadObjectCreationWithValidInformation() {
        Lead lead = new Lead(1L, "John Doe", "johndoe@example.com");
        assertNotNull(lead);
        assertEquals(1L, lead.getId().longValue());
        assertEquals("John Doe", lead.getNome());
        assertEquals("johndoe@example.com", lead.getEmail());
    }

    @Test
    public void testLeadObjectCreationWithNullName() {
        Lead lead = new Lead(1L, null, "johndoe@example.com");
    }

    @Test
    public void testLeadObjectCreationWithEmptyName() {
        Lead lead = new Lead(1L, "", "johndoe@example.com");
    }

    @Test
    public void testLeadObjectCreationWithNullEmail() {
        Lead lead = new Lead(1L, "John Doe", null);
    }

    @Test
    public void testLeadObjectCreationWithEmptyEmail() {
        Lead lead = new Lead(1L, "John Doe", "");
    }

    @Test
    public void testLeadObjectCreationWithInvalidEmail() {
        Lead lead = new Lead(1L, "John Doe", "invalidemail");
    }

    @Test
    public void testIdAttribute() {
        Lead lead = new Lead();
        lead.setId(1L);
        assertEquals(1L, lead.getId().longValue());
    }

    @Test
    public void testNameAttribute() {
        Lead lead = new Lead();
        lead.setNome("John Doe");
        assertEquals("John Doe", lead.getNome());
    }

}
