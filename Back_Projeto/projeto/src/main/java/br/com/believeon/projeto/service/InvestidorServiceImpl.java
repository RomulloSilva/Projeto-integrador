package br.com.believeon.projeto.service;

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
}