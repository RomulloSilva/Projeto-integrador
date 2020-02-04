package br.com.believeon.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.model.Investidor;
import br.com.believeon.projeto.service.IInvestidorService;

@RestController
@CrossOrigin("*")
public class InvestidorController {

	@Autowired
	private IInvestidorService service;

	@PostMapping("/investidor/novo")
	public ResponseEntity<Investidor> incluirNovo(@RequestBody Investidor investidor) {
		service.adicionarNovoInvestidor(investidor);
		return ResponseEntity.ok(investidor);
	}

	@GetMapping("/investidor/todos")
	public ResponseEntity<List<Investidor>> mostrarTodos() {
		return ResponseEntity.ok(service.recuperarTodos());
	}

	@GetMapping("/investidor/{idInv}")
	public ResponseEntity<Investidor> mostrarInvPorId(@PathVariable int idInv) {
		Investidor a = service.recuperarInvPorId(idInv);
		if (a != null) {
			return ResponseEntity.ok(a);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/investidor/atualizar")
	public ResponseEntity<Investidor> atualizarInvest(@RequestBody Investidor investidor) {
		service.atualizarInvestidor(investidor);
		return ResponseEntity.ok(investidor);
	}

}
