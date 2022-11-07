import Funcionario from "./Funcionario.js";

const pessoa1 = new Funcionario("273.844.503-90", "Maria Silva", 1000)
console.log(pessoa1)

pessoa1.promover(50)
console.log(pessoa1.salario)
console.log(Funcionario.validaCPF("273.844.503-90"))