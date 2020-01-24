package br.com.believeon.believeon.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.believeon.bd.bdProjeto;
import br.com.believeon.believeon.model.Projeto;

@RestController
@CrossOrigin("*")
public class ProjetoController {
	
	//Criei o meu banco de dados bdProjeto.
	private bdProjeto bd = new bdProjeto();
	
	@PostMapping("/ajuste/projeto/novo")
	public ResponseEntity<Projeto> novoProjeto(@RequestBody Projeto projeto){
		bd.gravar(projeto);
		return ResponseEntity.ok(projeto);
	}
	
	
	@GetMapping("/ajuste/projeto/{id}")
	public ResponseEntity<Projeto> getProjeto(@PathVariable int id){
		Projeto pro = bd.buscar(id);
		if(pro != null) {//Encontrei um cliente
			return ResponseEntity.ok(pro);
			
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	@GetMapping("/ajuste/projeto/todos")
	public ResponseEntity<ArrayList<Projeto>> getTodos(){
		return ResponseEntity.ok(bd.buscarTodos());
	}
	
	
	@PutMapping("/ajuste/projeto")
	public ResponseEntity<Projeto> alteraProjeto(@RequestBody Projeto projeto){
		bd.atualizar(projeto);
		return ResponseEntity.ok(projeto);
	}
	
	
	@DeleteMapping("/ajuste/projeto/{id}")
	public ResponseEntity<String> removeProjeto(@PathVariable int id){
		if(bd.apagar(id)) {
			return ResponseEntity.ok("Deletado com sucesso");
		}else {
			return ResponseEntity.notFound().build();
		}
		
	}
	

}
