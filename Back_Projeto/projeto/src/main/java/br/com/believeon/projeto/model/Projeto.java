package br.com.believeon.projeto.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="tbl_projeto")
public class Projeto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idProj")
	private int idProj;
	
	@Column(name="nomeProj", length = 100)
	private String nomeProj;
	
	@Column(name="descricaoProj" ,length = 150)
	private String descricaoProj;
	
	@Column(name="valorProj", length = 16)
	private String valorProj;
	
	@Column(name="linkFoto", length = 100)
	private String linkFoto;
	
	@ManyToOne
	@JsonIgnoreProperties ("projetos")
	private Empreendedor empreendedor;
	
	@ManyToOne
	@JsonIgnoreProperties ("projetos")
	private Categoria categoria;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "projeto")
	@JsonIgnoreProperties ("projeto")
	private List<Meta> metas;

	public int getIdProj() {
		return idProj;
	}

	public void setIdProj(int idProj) {
		this.idProj = idProj;
	}

	public String getNomeProj() {
		return nomeProj;
	}

	public void setNomeProj(String nomeProj) {
		this.nomeProj = nomeProj;
	}

	public String getDescricaoProj() {
		return descricaoProj;
	}

	public void setDescricaoProj(String descricaoProj) {
		this.descricaoProj = descricaoProj;
	}

	public String getValorProj() {
		return valorProj;
	}

	public void setValorProj(String valorProj) {
		this.valorProj = valorProj;
	}

	public String getLinkFoto() {
		return linkFoto;
	}

	public void setLinkFoto(String linkFoto) {
		this.linkFoto = linkFoto;
	}

	public Empreendedor getEmpreendedor() {
		return empreendedor;
	}

	public void setEmpreendedor(Empreendedor empreendedor) {
		this.empreendedor = empreendedor;
	}
}