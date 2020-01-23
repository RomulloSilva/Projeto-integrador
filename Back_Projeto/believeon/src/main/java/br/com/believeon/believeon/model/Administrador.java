package br.com.believeon.believeon.model;

public class Administrador {
	
	private String emailADM;
	private String senhaADM;
	private int id;
	private String nome;
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmailADM() {
		return emailADM;
	}
	public void setEmailADM(String emailADM) {
		this.emailADM = emailADM;
	}
	public String getSenhaADM() {
		return senhaADM;
	}
	public void setSenhaADM(String senhaADM) {
		this.senhaADM = senhaADM;
	}
	
	public String toString() {
		return"{\"emailADM\":"+this.emailADM+", \"senhaADM\":"+this.senhaADM+", \"id\":"+this.id+", \"nome\":"+this.nome+"}";
	}

}
