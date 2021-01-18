package br.com.veiculo.service.dto;

import br.com.veiculo.service.model.Veiculo;

public class VeiculoDTO {

    private String veiculo;

    private String marca;

    private String ano;

    private String descricao;

    private Boolean vendido = Boolean.FALSE;

    public Veiculo createInstance() {
        Veiculo veiculo = new Veiculo();
        veiculo.setVeiculo(this.veiculo);
        veiculo.setMarca(this.marca);
        veiculo.setAno(this.ano);
        veiculo.setDescricao(this.descricao);
        veiculo.setVendido(this.vendido);
        return veiculo;
    }

    public String getVeiculo() {
        return veiculo;
    }

    public void setVeiculo(String veiculo) {
        this.veiculo = veiculo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Boolean getVendido() {
        return vendido;
    }

    public void setVendido(Boolean vendido) {
        this.vendido = vendido;
    }
    
    
}
