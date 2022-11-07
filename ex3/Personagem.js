export default class Personagem {
    constructor(nome){
        this.nome = nome;
        this.percentualVida = 100;
    }
    perdeuVida(dano){
        if (this.percentualVida - dano < 0){
            this.percentualVida = 0;
            return this.percentualVida
        } else{
            this.percentualVida -= dano;
            return this.percentualVida
        }
        
    }
    usouKitMedico(){
        if (this.percentualVida + 10 > 100){
            this.percentualVida = 100;
            return this.percentualVida
        }else{
            this.percentualVida += 10;
            return this.percentualVida
        }
        
    }
}
