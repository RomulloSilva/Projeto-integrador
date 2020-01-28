package br.com.believeon.believeon.model;

public class Projeto {
	
	private int id;
	private String imagens;
	private String titulo;
	private String descricao;
	private String resumo;
	private String meta;
	private String empreendedor;
	private String email;
	private String telefone;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImagens() {
		return imagens;
	}
	public void setImagens(String imagens) {
		this.imagens = imagens;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getResumo() {
		return resumo;
	}
	public void setResumo(String resumo) {
		this.resumo = resumo;
	}
	public String getMeta() {
		return meta;
	}
	public void setMeta(String meta) {
		this.meta = meta;
	}
	public String getEmpreendedor() {
		return empreendedor;
	}
	public void setEmpreendedor(String empreendedor) {
		this.empreendedor = empreendedor;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String toString() {
		return "{\"id\":"+this.id+", \"imagens\":"+this.imagens+", \"titulo\":"+this.titulo+", \"descricao\":"+this.descricao+",\"resumo\":"+this.resumo+",\"meta\":"+this.meta+",\"empreendedor\":"+this.empreendedor+",\"email\":"+this.email+",\"telefone\":"+this.telefone+"}";
	}

}
