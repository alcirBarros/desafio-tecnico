package br.com.veiculo.service.initialize;

import br.com.veiculo.service.model.Veiculo;
import br.com.veiculo.service.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class VeiculoInitialize implements CommandLineRunner {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Override
    public void run(String... args) throws Exception {

        {
            Veiculo veiculo = new Veiculo();
            veiculo.setVeiculo("VEICULO");
            veiculo.setMarca("MARCA");
            veiculo.setAno("2000");
            veiculo.setDescricao("Descrição");
            veiculoRepository.save(veiculo);
        }

        {
            Veiculo veiculo = new Veiculo();
            veiculo.setVeiculo("VEICULO");
            veiculo.setMarca("MARCA");
            veiculo.setAno("2000");
            veiculo.setDescricao("Descrição");
            veiculoRepository.save(veiculo);
        }
        {
            Veiculo veiculo = new Veiculo();
            veiculo.setVeiculo("VEICULO");
            veiculo.setMarca("MARCA");
            veiculo.setAno("2000");
            veiculo.setDescricao("Descrição");
            veiculoRepository.save(veiculo);
        }

    }
}
