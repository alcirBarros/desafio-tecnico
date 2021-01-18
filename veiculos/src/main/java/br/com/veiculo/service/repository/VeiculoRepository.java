package br.com.veiculo.service.repository;

import br.com.veiculo.service.model.Veiculo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeiculoRepository extends PagingAndSortingRepository<Veiculo, Integer> {

}
