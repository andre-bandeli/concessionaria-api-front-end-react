package com.br.produto.veiculoTest;
import com.br.produto.model.veiculos.Veiculo;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class VeiculoTest {

    @Test
    public void testConstructor() {
        Veiculo veiculo = new Veiculo(1L, "modelo", "marca", 10000.0, "descricao", "100km", "2021", "injecao", "freio", "100cc");
        assertEquals(1L, veiculo.getId().longValue());
        assertEquals("modelo", veiculo.getNome_modelo());
        assertEquals("marca", veiculo.getMarca());
        assertEquals(10000.0, veiculo.getPreco(), 0.0);
        assertEquals("descricao", veiculo.getDescricao());
        assertEquals("100km", veiculo.getQuilometragem());
        assertEquals("2021", veiculo.getAno());
        assertEquals("injecao", veiculo.getInjecao());
        assertEquals("freio", veiculo.getFreio());
        assertEquals("100cc", veiculo.getCilindradas());
    }

    @Test
    public void testGetId() {
        Veiculo veiculo = new Veiculo();
        veiculo.setId(1L);
        assertEquals(1L, veiculo.getId().longValue());
    }

    @Test
    public void testSetId() {
        Veiculo veiculo = new Veiculo();
        veiculo.setId(1L);
        assertEquals(1L, veiculo.getId().longValue());
    }

    @Test
    public void testGetNome_modelo() {
        Veiculo veiculo = new Veiculo();
        veiculo.setNome_modelo("modelo");
        assertEquals("modelo", veiculo.getNome_modelo());
    }

    @Test
    public void testSetNome_modelo() {
        Veiculo veiculo = new Veiculo();
        veiculo.setNome_modelo("modelo");
        assertEquals("modelo", veiculo.getNome_modelo());
    }

    @Test
    public void testGetMarca() {
        Veiculo veiculo = new Veiculo();
        veiculo.setMarca("marca");
        assertEquals("marca", veiculo.getMarca());
    }

    @Test
    public void testSetMarca() {
        Veiculo veiculo = new Veiculo();
        veiculo.setMarca("marca");
        assertEquals("marca", veiculo.getMarca());
    }
}