
var empresa="Gama Academy - ";
var mensagem="Sejam todos bem vindos!!!";

// alert ("Sejam todos bem vindos!!!");
//alert(empresa + mensagem);

// var nome=prompt ("Seja bem vindo, por favor informe o seu nome");
// alert ("Muito prazer "+nome+ " ,você está convidado a fazer parte do nosso suuuuuper time");

function msn()
{
alert("Rapa como você é curioso!!!");
}


function validar(){
var nome=formuser.nome.value;
var email=formuser.email.value;
var senha=formuser.senha.value;

if(nome==""){
alert("Preencha o campo nome obrigatório");
formuser.nome.focus();
return false;
}

if(email=="" || email.indexOf('@')==-1){
alert ("Preencha o campo obrigatório, com um email válido");
formuser.email.focus();
return false;
}

if(senha=="" || senha.length<=5){
alert("Preencha o campo senha que é obrigatório, com no mínimo 6 dígitos");
formuser.senha.focus();
return false;

}
alert ("Prezado(a) "+nome+ " neste momento iremos lhe enviar os nossos portifólio de cursos para o email "+email);
}
