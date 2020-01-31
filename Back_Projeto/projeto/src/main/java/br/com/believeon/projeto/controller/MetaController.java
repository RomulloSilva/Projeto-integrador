package br.com.believeon.projeto.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.model.Meta;

import br.com.believeon.projeto.service.IMetaService;

@RestController
@CrossOrigin("*")
public class MetaController {
	
	@Autowired
	private IMetaService service;
	
	@PostMapping("/meta/novo")
	public ResponseEntity<Meta> incluirNovo(@RequestBody Meta meta){
		service.adicionarNovoMeta(meta);
		return ResponseEntity.ok(meta);
	}
}