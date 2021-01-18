package br.com.veiculo.service.controller;

import br.com.veiculo.service.dto.VeiculoDTO;
import br.com.veiculo.service.model.Veiculo;
import br.com.veiculo.service.service.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoService veiculoService;

    @RequestMapping(method = {RequestMethod.GET})
    public ResponseEntity<Page<Veiculo>> findAll(Pageable pageable) {
        Page<Veiculo> placaIterable = veiculoService.findAll(pageable);
        return new ResponseEntity<>(placaIterable, HttpStatus.OK);
    }

    @RequestMapping(value = "/find", method = {RequestMethod.GET})
    public ResponseEntity findAll(@RequestBody @Valid VeiculoDTO veiculoDTO, Pageable pageable) {
        Page<Veiculo> veiculoPageable = veiculoService.findAll(pageable);
        return new ResponseEntity<>(veiculoPageable, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = {RequestMethod.GET})
    public ResponseEntity findById(@PathVariable("id") Integer id) {
        return veiculoService.findById(id).map((Veiculo veiculo) -> {
            return ResponseEntity.ok().body(veiculo);
        }).orElse(ResponseEntity.notFound().build());
    }

    @RequestMapping(method = {RequestMethod.POST})
    public ResponseEntity save(@RequestBody @Valid VeiculoDTO veiculoDTO) {
        Veiculo veiculo = veiculoService.save(veiculoDTO.createInstance());
        return new ResponseEntity<>(veiculo, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = {RequestMethod.PUT, RequestMethod.PATCH})
    public ResponseEntity update(@PathVariable("id") Integer id, @RequestBody @Valid VeiculoDTO veiculoDTO) {
        return veiculoService.findById(id).map((Veiculo record) -> {
            record.setVeiculo(veiculoDTO.getVeiculo());
            record.setMarca(veiculoDTO.getMarca());
            record.setAno(veiculoDTO.getAno());
            record.setDescricao(veiculoDTO.getDescricao());
            record.setVendido(veiculoDTO.getVendido());
            Veiculo updated = veiculoService.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "{id}", method = {RequestMethod.DELETE})
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") Integer id) {
        return veiculoService.findById(id).map((Veiculo record) -> {
            veiculoService.deleteById(record.getId());
            return ResponseEntity.ok().body(HttpStatus.OK);
        }).orElse(ResponseEntity.notFound().build());
    }

}
