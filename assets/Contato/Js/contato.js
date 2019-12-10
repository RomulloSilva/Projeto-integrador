function envia() {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email1 = document.getElementById('email1').value
    let telefone = document.getElementById('telefone').value
    let cidade1 = document.getElementById('cidade1').value
    let mensagem = document.getElementById('mensagem').value



    if (nome.length == 0) {
        alert("Por favor, insira o seu Primeiro Nome.");
    } else {
        if (sobrenome.length == 0) {
            alert("Por favor, insira o seu Sobrenome.");
        } else {
            if (email1.length == 0) {
                alert("Por favor, insira um E-mail válido.");
            } else {
                if (telefone.length == 0) {
                    alert("Preencha o telefone.");
                } else {
                    if (cidade1.length == 0) {
                        alert("Digite sua cidade.");
                    } else {
                        if (mensagem.length == 0) {
                            alert("Preencha o corpo da mensagem.");
                        }
                    }
                }
            }
        }
    }
}



/*function validaNome(){
    var nome = nome.value.innerHTML;
    var email = document.getElementById(email).innerHTMLL;
    var telefone = document.getElementById(telefone).innerHTML;
    var mensagem = document.getElementById(mensagem).innerHTML;
    var sobrenome = document.getElementById(sobrenome).innerHTML;
    if (nome == "") {
        alert('Preencha o campo com seu nome');
        formulario.nome.focus();
        return false;
        }
        if (sobrenome== "") {
            alert('Preencha o campo com seu sobrenome');
            formulario.nome.focus();
            return false;
            }

        if (email == "") {
        alert('Preencha o campo com seu email');
        formulario.email.focus();
        return false;
        }

        if (telefone == "") {
        alert('Preencha o campo com seu numero de telefone');
        formulario.telefone.focus();
        return false;
        }
        if(telefone.length < 9){
            alert('Somente numeros são aceitos');
        formulario.telefone.focus();
        return false;
        }

        if (mensagem == "") {
        alert('Onde está sua mensagem?');
        formulario.mensagem.focus();
        return false;
        }
        if (mensagem.length < 5) {
            alert('Mensagem muito curta');
            formulario.mensagem.focus();
            return false;
            }
}*/


