package br.com.veiculo.service;

import br.com.veiculo.service.model.Veiculo;
import br.com.veiculo.service.service.VeiculoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collection;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@SpringBootTest
class VeiculoServiceTest {

    @Autowired
    private VeiculoService veiculoService;

    @Test
    public void test01() {
        Pageable unpaged = Pageable.unpaged();
        Page<Veiculo> findAll = veiculoService.findAll(unpaged);
        assertThat(((Collection<?>) findAll).size()).isEqualTo(3);
    }

    @Test
    public void test02() {
        Optional<Veiculo> optional = veiculoService.findById(1);
        assertThat(optional).isNotEmpty();
    }
}
