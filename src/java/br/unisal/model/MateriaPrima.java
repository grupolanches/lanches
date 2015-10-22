/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.unisal.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 *
 * @author Carlos
 */
@Entity
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(propOrder = {"id", "nome", "valor"})
public class MateriaPrima implements Serializable {

    private Long id;
    private String nome;
    private Double valor;
    private List<Estrutura> estruturas;
    private List<EstruturaPedido> estruturasPedido;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    @OneToMany(mappedBy = "materiaPrima")
    public List<Estrutura> getEstruturas() {
        return estruturas;
    }

    public void setEstruturas(List<Estrutura> estruturas) {
        this.estruturas = estruturas;
    }

    @OneToMany(mappedBy = "materiaPrima")
    public List<EstruturaPedido> getEstruturasPedido() {
        return estruturasPedido;
    }

    public void setEstruturasPedido(List<EstruturaPedido> estruturasPedido) {
        this.estruturasPedido = estruturasPedido;
    }

}
