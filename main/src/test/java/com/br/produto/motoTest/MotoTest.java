package com.br.produto.motoTest;

import com.br.produto.model.motocicletas.Moto;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class MotoTest {

    @Test
    public void testGetId() {
        Moto moto = new Moto();
        moto.setId(1L);
        assertEquals(1L, moto.getId());
    }

    @Test
    public void testGetNomeModelo() {
        Moto moto = new Moto();
        moto.setNome_modelo("CB1000R");
        assertEquals("CB1000R", moto.getNome_modelo());
    }

    @Test
    public void testGetMarca() {
        Moto moto = new Moto();
        moto.setMarca("Honda");
        assertEquals("Honda", moto.getMarca());
    }

    @Test
    public void testGetPreco() {
        Moto moto = new Moto();
        moto.setPreco(25000.00);
        assertEquals(25000.00, moto.getPreco());
    }

    @Test
    public void testGetDescricao() {
        Moto moto = new Moto();
        moto.setDescricao("Uma moto esportiva");
        assertEquals("Uma moto esportiva", moto.getDescricao());
    }

    @Test
    public void testGetQuilometragem() {
        Moto moto = new Moto();
        moto.setQuilometragem("5.000 km");
        assertEquals("5.000 km", moto.getQuilometragem());
    }

    @Test
    public void testGetAno() {
        Moto moto = new Moto();
        moto.setAno("2020");
        assertEquals("2020", moto.getAno());
    }

    @Test
    public void testGetInjecao() {
        Moto moto = new Moto();
        moto.setInjecao("Eletrônica");
        assertEquals("Eletrônica", moto.getInjecao());
    }

    @Test
    public void testGetFreio() {
        Moto moto = new Moto();
        moto.setFreio("ABS");
        assertEquals("ABS", moto.getFreio());
    }
}