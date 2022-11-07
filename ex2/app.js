import Fatura from "./Fatura.js";

const fatura1 = new Fatura(1, "Coca-Cola 350ml", 12, 2.89)
console.log(fatura1)
console.log(fatura1.obterValorTotal())
console.log(fatura1.ValorTotal)