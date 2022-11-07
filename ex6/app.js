import Juros from "./Juros.js";

const juros1 = new Juros(10000, 0.07, 24)
console.log(juros1.calcularJurosSimples(), juros1.calcularJurosCompostos())

const juros2 = new Juros(10000, 0.15, 10)
console.log(juros2.calcularJurosSimples(), juros2.calcularJurosCompostos())