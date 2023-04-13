// validadores,js

// CEP: 00000-000 ou 00000000

const padraoCEP = /^[0-9]{5}-?[0-9]{3}$/;
const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const padraoCPF = /^([0-9]{3}){2}[0-9]{3}-[0-9]{2}$/;
const padraoData = /^([0-9]{2}\/){2}[0-9]{4}$/;
const padraoCard = /^(?:\d{4}[ ]){3}\d{4}|\d{16}$/;
let entradaCep = document.getElementById("cep");
let entradaEmail = document.getElementById("email");
let entradaCPF = document.getElementById("cpf");
let entradaData = document.getElementById("data");
let entradaCard = document.getElementById("card");

function validaCep() {

    let cep = entradaCep.value;

    if (padraoCEP.test(cep)) {
        printa("CEP válido.", true);
    }else{
        if(cep == ""){
            printa("**CEP não pode ser vazio.", true)
        }else {
            printa("*CEP inválido.", true);
        }
        
    }

}
function validaEmail() {

    let email = entradaEmail.value;

    if (padraoEmail.test(email)) {
        printa("Email válido");
    }else {
        if(email == ""){
            printa("**Email não pode ser vazio.")
        }else {
            printa("*Email inválido");
        }
        
    }

}
function validaCPF() {

    let cpf = entradaCPF.value;

    if (padraoCPF.test(cpf)) {

        cpf = cpf.split("-");
        cpf = cpf.join("");
        cpf = cpf.split("");
        cpf = cpf.map(x=>parseInt(x));
        let j = 2;
        let soma = 0;

        for (let i = 8; i >= 0; i--) {
            soma += j * cpf[i];
            j++;
        }   

        if (soma%11 < 2) {
            if (cpf[9] != 0) {
                printa("*1CPF inválido")
            }else {
                j = 2;
                soma = 0;

                for (let i = 9; i >= 0 ; i--) {
                    soma += j * i;

                    j++;
                }

                if(soma%11 <= 2) {
                    if(cpf[10] != 0) {
                        printa("*2CPF inválido");
                    }
                }else {
                    if (cpf[10] == (11 - (soma%11))) {
                        printa("CPF válido");
                    } else {
                        printa("*3CPF inválido");
                    }
                }
            }
        }else {
            j = 2;
            soma = 0;

            for (let i = 9; i >= 0 ; i--) {
                soma += j * cpf[i];

                j++;
            }

            if(soma%11 <= 2) {
                if(cpf[10] != 0) {
                    printa("*CPF inválido");
                }
            }else {
                if (cpf[10] == (11 - (soma%11))) {
                    printa("CPF válido");
                } else {
                    printa("*CPF inválido");
                }
            }
        }
    }else {
        if(cpf == ""){
            printa("**CPF não pode ser vazio.")
        }else {
            printa("*CPF inválido");
        }
        
    }

}
function validaData() {

    let data = entradaData.value;

    if (padraoData.test(data)) {
        let date = data.split("/");
        let dia = parseInt(date[0]);
        let mes = parseInt(date[1]);
        let ano = parseInt(date[2], 10);
        let b = ano%4
        if(b == 0) {
            if(mes == 2 && dia <= 29) {
                printa("Data válida");
            }else if((mes >= 1 || mes <= 12) && mes != 2) {
                if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && dia <=31){
                    printa("Data válida");
                }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia <= 30) {
                    printa("Data válida");
                }else {
                    printa("*Data inválida");
                }
            }else {
                printa("*Data inválida");
            }
        }else {

            if((mes >= 1 || mes <= 12) && mes != 2) {
                if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && dia <=31) {
                    printa("Data válida");
                }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia <= 30) {
                    printa("Data válida");
                }else {
                    printa("*Data inválida");
                }
            }else {
                if(mes == 2 && dia <= 28) {
                    printa("Data válida");
                }else {
                    printa("*Data inválida");
                }
            }
        }
        
    }else {
        if(data == ""){
            printa("**Data não pode ser vazia.")
        }else {
            printa("*Data inválida");
        }
        
    }

}
function validaCard() {
    
    let card = entradaCard.value;

    if (padraoCard.test(card)) {

        card = card.split(" ");
        card = card.join("");
        card = card.split("");
        card = card.map(x=>parseInt(x));

        let impar = [];
        let par = [];
        let maior =[];
        let tot = 0;
        let mult = 0;
        let sum = 0;
        let diff = 0

        for (let i = 0; i < (card.length - 1); i++) {
            if (i % 2 == 0) {
                mult = card[i] * 2;
                if (mult >= 10) {
                    maior.push(mult);
                }else {
                    par.push(mult);
                }
            }else{
                impar.push(card[i]);
            }
            mult = 0;
        }

        maior = maior.join("");
        maior = maior.split("");
        maior = maior.map(x=>parseInt(x));

        for (let i = 0; i < maior.length; i+=2) {
            sum = maior[i] + maior[i+1]

            par.push(sum);

            sum = 0;
        }

        for (let i = 0; i < par.length; i++) {
            
            tot += par[i];
            
        }
        for (let i = 0; i < impar.length; i++) {
            
            tot += impar[i];
            
        }

        if ((tot % 10 == 0) && (card[15] == tot%10)) {
            printa("Cartão válido")
        } else {
            diff = 10 - (tot%10);

            if (diff == card[15]) {
                printa("Cartão válido");
            }else {
                printa("*Cartão inválido");
            }
        }
        
    }else {
        if(card == ""){
            printa("**Cartão não pode ser vazio.")
        }else {
            printa("*Cartão inválido");
        }
        
    }
}

function validar() {

    validaCep();
    validaEmail();
    validaCPF();
    validaData();
    validaCard();

}



function printa(txt, clear=false){

    let box = document.getElementById("box");

    if ( clear )
        box.innerHTML = "";

    box.innerHTML += txt + "<br />";
}