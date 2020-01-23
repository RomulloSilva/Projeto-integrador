package br.com.believeon.believeon.security;
import javax.xml.bind.DatatypeConverter;

import br.com.believeon.believeon.model.Administrador;

public class Validacao {
	
	private static final String PREFIXO = "&BELIEVEON&";
	
	
	
	
	
	
	/*Aqui codificamos o token*/
	public static String generateToken(Administrador administrador) {
	String texto = PREFIXO + administrador.toString();
	String Token = DatatypeConverter.printHexBinary(texto.getBytes());
	return Token;
	}
	
	/*Método que decodifica o token e verifica se o prefixo é valido*/
	public static boolean temPrefixo(String token) {
		byte[] matriz = DatatypeConverter.parseHexBinary(token);
		String novoTexto = new String(matriz);
		System.out.println("Debug = "+novoTexto);
		if(novoTexto.startsWith(PREFIXO)) {
			return true;
		}
		return false;
	}

}
