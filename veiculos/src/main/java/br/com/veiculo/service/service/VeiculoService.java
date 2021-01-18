package br.com.veiculo.service.service;

import br.com.veiculo.service.model.Veiculo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import br.com.veiculo.service.repository.VeiculoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    public Veiculo save(Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    public Page<Veiculo> findAll(Pageable pageable) {
        return veiculoRepository.findAll(pageable);
    }

    public Optional<Veiculo> findById(Integer id) {
        return veiculoRepository.findById(id);
    }

    public void deleteById(Integer id) {
        veiculoRepository.deleteById(id);
    }
}
