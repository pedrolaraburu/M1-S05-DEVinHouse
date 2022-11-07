export default class Funcionario {
    #cpf
    constructor(cpf, nomeCompleto, salario){
        this.#cpf = cpf;
        this.nomeCompleto = nomeCompleto;
        this.salario = salario;
    }
    get cpf(){
        return this.#cpf;
    }
    set novoCPF(cpfnovo){
        if (Funcionario.validaCPF(cpfnovo) == true){
            console.log("CPF válido!");
            this.#cpf = cpfnovo;
        } else{
            console.log("CPF inválido");
        }
    }

    promover(percentual){
        this.salario = this.salario *(1+(percentual/100));
    }


    static validaCPF(strCPF) {
        const cpf = strCPF.replaceAll('.', '').replaceAll('-', '')
        let Soma;
        let Resto;
        Soma = 0;
        if (cpf == "00000000000"){
            return false;
        } 
        for (let i = 1; i<=9; i++){
            Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        }
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11)){
            Resto = 0;
        }  
        if (Resto != parseInt(cpf.substring(9, 10)) ) {
            return false;
        }
    
        Soma = 0;
        for (let i = 1; i <= 10; i++) {
            Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        }
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  {
            Resto = 0;
        }
        if (Resto != parseInt(cpf.substring(10, 11) ) ) {
            return false;
        } 

        return true;
    }
}
