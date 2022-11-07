import Animal from "./Animal.js";
import Cachorro  from "./Cachorro.js";
import Gato from "./Gato.js";

const vaca = new Animal("Bob", 6, "Mugido")
console.log(vaca)
const thor = new Cachorro('Thor', 6);
console.log(thor)
console.log(thor.som); 
const pinky = new Gato('Pinky', 4);
console.log(pinky)
console.log(pinky.som);   
