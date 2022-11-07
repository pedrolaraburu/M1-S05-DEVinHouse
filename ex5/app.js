import CalculadoraDeArea from "./CalculadoraDeArea.js";

const quadrado = new CalculadoraDeArea("quadrado", 6, 2);
const areaQuad = quadrado.calcular();
console.log(areaQuad);

const ret = new CalculadoraDeArea("retangulo", 12, 18);
const areaRet = ret.calcular();
console.log(areaRet);

const triangulo = new CalculadoraDeArea("triangulo", 12, 4);
const areaTri = triangulo.calcular();
console.log(areaTri); 

const cone = new CalculadoraDeArea("cone", 12, 18);
const areaCone = cone.calcular();
console.log(areaCone);
