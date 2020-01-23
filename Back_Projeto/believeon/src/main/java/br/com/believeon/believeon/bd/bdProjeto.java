package br.com.believeon.believeon.bd;

import java.util.ArrayList;

import br.com.believeon.believeon.model.Projeto;

public class bdProjeto {

	private ArrayList<Projeto> lista;
	
	public bdProjeto() {
		lista = new ArrayList<Projeto>();
	}
	
	//Criando Create
	public void gravar(Projeto p) {
		this.lista.add(p);
	}
	
	
	//Criando Read.
	public Projeto buscar(int id) {
		Projeto p = null;
		for(Projeto pro: lista) {
			if(pro.getId() == id) {
				p = pro;
				break;
			}
		}
		return p;
	}
	
	
	//Criando o Update.
	public void atualizar(Projeto p) {
		int posicao = -1;
		for(int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getId() == p.getId()) {
				posicao = i;
				break;
			}
		}
		if(posicao >= 0) {
			lista.set(posicao, p);
		}
	}
	
	
	
	//Criando o Delete.
	public boolean apagar(int id) {
		int posicao = -1;
		for(int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getId() == id) {
				posicao = i;
				break;
			}
		}
		if(posicao >= 0) {
			lista.remove(posicao);
			return true;
		}
		return false;
	}
	
	
	public ArrayList<Projeto> buscarTodos(){
		return lista;
	}
	
	
	
	
}
