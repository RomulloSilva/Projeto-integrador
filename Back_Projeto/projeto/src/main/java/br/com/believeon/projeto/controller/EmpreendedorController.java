package br.com.believeon.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.model.Empreendedor;
import br.com.believeon.projeto.service.IEmpreendedorService;


@RestController
@CrossOrigin("*")
public class EmpreendedorController {
	
	@Autowired
	private IEmpreendedorService service;
	

	@PostMapping("/empreendedor/novo")
	public ResponseEntity<Empreendedor> incluirNovo(@RequestBody Empreendedor empreendedor){
		service.adicionarNovoEmpreendedor(empreendedor);
		return ResponseEntity.ok(empreendedor);
	}
	
	

	@GetMapping("/empreendedor/todos")
	public ResponseEntity<List<Empreendedor>> listarTodos(){
		return ResponseEntity.ok(service.recuperarTodos());
	}
	
	@GetMapping("/empreendedor/{idEmp}")
	public ResponseEntity<Empreendedor> listarDetalhes(@PathVariable int idEmp){
		Empreendedor empreendedor = service.recuperarDetalhes(idEmp);
		if(empreendedor != null){
			return ResponseEntity.ok(empreendedor);
	}
		return ResponseEntity.notFound().build();
}

	
}