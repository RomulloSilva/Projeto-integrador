package br.com.believeon.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.believeon.projeto.dao.InvestidorRepo;
import br.com.believeon.projeto.model.Investidor;


@Component
public class InvestidorServiceImpl implements IInvestidorService{
	
	@Autowired
	private InvestidorRepo repo;
	
	public void adicionarNovoInvestidor(Investidor investidor) {
		repo.save(investidor);
}
	@Autowired
	public List<Investidor> recuperarTodos(){
		return (List<Investidor>) repo.findAll();
	}
	
	@Autowired
	public Investidor recuperarInvPorId(int idInv) {
		return repo.findById(idInv).get();
	}
	
	@Autowired
	public void atualizarInvestidor(Investidor investidor) {
		repo.save(investidor);
	}
	
	
	
	
}
