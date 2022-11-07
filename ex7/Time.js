export default class Time {
    vitorias = 0
    derrotas = 0
    empates = 0
    golsMarcados = 0
    golsSofridos = 0
    constructor(nome, sigla){
        this.nome = nome
        this.sigla = sigla
    }
    numeroDeJogos(){
        return this.vitorias+this.derrotas+this.empates
    }
    numeroDePontos(){
        return (this.vitorias*3)+(this.empates*1)
    }
    computaPartida(partida){
        let golsMarcados = 0
        let golsSofridos = 0
        if (partida.siglaTimeA === this.sigla){
            golsMarcados = partida.golsTimeA
            golsSofridos = partida.golsTimeB
        } else if(partida.siglaTimeB === this.sigla){
            golsMarcados = partida.golsTimeB
            golsSofridos = partida.golsTimeA
        } else {
            return
        }
        if (golsMarcados > golsSofridos){
            this.vitorias++
        } else if (golsSofridos > golsMarcados){
            this.derrotas++
        } else {
            this.empates++
        }

        this.golsMarcados += golsMarcados
        this.golsSofridos += golsSofridos
    }
    exibirSituacao(){
        console.log(`Time: ${this.nome} (${this.sigla})`);
        console.log(`Vitórias: ${this.vitorias}`);
        console.log(`Derrotas: ${this.derrotas}`);
        console.log(`Empates: ${this.empates}`);
        console.log(`Gols Marcados: ${this.golsMarcados}`);
        console.log(`Gols Sofridos: ${this.golsSofridos}`);
    }
}
