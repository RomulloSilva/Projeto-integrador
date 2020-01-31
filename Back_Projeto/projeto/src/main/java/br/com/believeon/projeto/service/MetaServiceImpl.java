package br.com.believeon.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.believeon.projeto.dao.MetaRepo;
import br.com.believeon.projeto.model.Meta;
@Component
public class MetaServiceImpl implements IMetaService{
	
	@Autowired
	private MetaRepo repo;
	
	public void adicionarNovoMeta(Meta meta) {
		repo.save(meta);
}
}
