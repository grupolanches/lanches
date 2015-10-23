/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisal;

import br.unisal.hibernateutil.HibernateUtil;
import org.junit.Before;

/**
 *
 * @author Carlos
 */
public class TestBase {
    
    
    @Before
    public void setUp() {
        HibernateUtil.getInstance("hibernate.test.cfg.xml");
    }
}
