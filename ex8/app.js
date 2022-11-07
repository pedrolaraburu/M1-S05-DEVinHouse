import Usuario from "./Usuario.js";

const userSecreto = new Usuario("Pedro", "Pedro@gmail.com", 123);
console.log("oi")
let uNome = document.getElementById('nome');
let uEmail = document.getElementById('email');
let uSenha = document.getElementById('senha');
let bEnviar = document.getElementById('b-enviar');

bEnviar.addEventListener('click', () => {
	const usuario = uNome.value;
	const usuarioEmail = uEmail.value;
	const senha = uSenha.value;
	if(userSecreto.autenticar(usuarioEmail, senha)){
		alert("Login realizado!");
	} else {
		alert("Credenciais não encontradas!");
	}
})