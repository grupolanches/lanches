/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisal;

import br.unisal.dao.GenericDao;
import br.unisal.model.Cliente;
import junit.framework.Assert;
import org.junit.Test;

/**
 *
 * @author Carlos
 */
public class ClienteTest extends TestBase {
    
    private GenericDao dao = new GenericDao();
    
    @Test
    public void testSalvar() {
        Cliente c = new Cliente();
        c.setNome("Cliente 1");
        Long save = this.dao.save(c);
        
        Cliente clienteEncontrado = this.dao.getById(Cliente.class, save);
        
        Assert.assertEquals("Cliente 1", clienteEncontrado.getNome());
    }
}
