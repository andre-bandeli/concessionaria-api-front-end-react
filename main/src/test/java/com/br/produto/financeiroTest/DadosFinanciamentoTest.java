package com.br.produto.financeiroTest;

import com.br.produto.model.financeiro.DadosFinanciamento;
import org.junit.Test;
import static org.junit.Assert.*;

public class DadosFinanciamentoTest {

    @Test
    public void testGetId() {
        DadosFinanciamento df = new DadosFinanciamento();
        df.setId(1L);
        assertEquals(1L, df.getId().longValue());
    }

    @Test
    public void testGetNome() {
        DadosFinanciamento df = new DadosFinanciamento();
        df.setNome("John Doe");
        assertEquals("John Doe", df.getNome());
    }

    @Test
    public void testGetDdd() {
        DadosFinanciamento df = new DadosFinanciamento();
        df.setDdd(11);
        assertEquals(11, df.getDdd());
    }

    @Test
    public void testSetId() {
        DadosFinanciamento dadosFinanciamento = new DadosFinanciamento();
        dadosFinanciamento.setId(1L);
        assertEquals(1L, dadosFinanciamento.getId().longValue());
    }

    @Test
    public void testSetNome() {
        DadosFinanciamento dadosFinanciamento = new DadosFinanciamento();
        dadosFinanciamento.setNome("João");
        assertEquals("João", dadosFinanciamento.getNome());
    }

    @Test
    public void testSetDdd() {
        DadosFinanciamento dadosFinanciamento = new DadosFinanciamento();
        dadosFinanciamento.setDdd(11);
        assertEquals(11, dadosFinanciamento.getDdd());
    }

    @Test
    public void testSetNumero() {
        DadosFinanciamento dadosFinanciamento = new DadosFinanciamento();
        dadosFinanciamento.setNumero(123456789);
        assertEquals(123456789, dadosFinanciamento.getNumero());
    }

    @Test
    public void testSetEmail() {
        DadosFinanciamento dadosFinanciamento = new DadosFinanciamento();
        dadosFinanciamento.setEmail("joao@email.com");
        assertEquals("joao@email.com", dadosFinanciamento.getEmail());
    }

    @Test
    public void testSetSalario() {
        DadosFinanciamento dadosFinanciamento = new DadosFinanciamento();
        dadosFinanciamento.setSalario("3000");
        assertEquals("3000", dadosFinanciamento.getSalario());
    }
}
