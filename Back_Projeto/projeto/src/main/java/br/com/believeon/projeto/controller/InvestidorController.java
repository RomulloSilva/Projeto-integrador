package br.com.believeon.projeto.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
	public ResponseEntity<Investidor> incluirNovo(@RequestBody Investidor investidor){
		service.adicionarNovoInvestidor(investidor);
		return ResponseEntity.ok(investidor);
	}
}