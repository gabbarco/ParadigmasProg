// validadores,js

// CEP: 00000-000 ou 00000000
// Email: xxxxxxxx@xxxxx.xxx
// CPF: 999999999-99
// Data: DD/MM/YYYY


const padraoCEP = /^[0-9]{5}-?[0-9]{3}$/;
let entradaCep = document.getElementById("cep");
const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let entradaEmail = document.getElementById("email");
const padraoCPF = /^([0-9]{3}){2}[0-9]{3}-[0-9]{2}$/;
let entradaCPF = document.getElementById("cpf");
const padraoData = /^([0-9]{2}\/){2}[0-9]{4}$/;
let entradaData = document.getElementById("data");
const padraoCartao = /^(?:\d{4}[ ]){3}\d{4}|\d{16}$/;
let entradaCartao = document.getElementById("cartao");

function validaCep() {

    let cep = entradaCep.value;

    if (padraoCEP.test(cep)) {
        printa("O CEP é válido.", true);
    }else{
        if(cep == ""){
            printa("**O CEP não pode ser vazio.", true)
        }else {
            printa("*O CEP é inválido.", true);
        }
        
    }

}
function validaEmail() {

    let email = entradaEmail.value;

    if (padraoEmail.test(email)) {
        printa("O endereço de email é válido");
    } else {
        if(email == ""){
            printa("**O endereço de email não pode ser vazio.")
        }else {
            printa("*O endereço de email é inválido");
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
                printa("*¹CPF inválido")
            }else {
                j = 2;
                soma = 0;
                for (let i = 9; i >= 0 ; i--) {
                    soma += j * i;
                    j++;
                }

                if(soma%11 <= 2) {
                    if(cpf[10] != 0) {
                        printa("*²CPF inválido");
                    }
                }else {
                    if (cpf[10] == (11 - (soma%11))) {
                        printa("O CPF é válido");
                    } else {
                        printa("*³CPF inválido");
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
                else {
                    printa("O CPF é válido");
                }
            }else {
                if (cpf[10] == (11 - (soma%11))) {
                    printa("O CPF é válido");
                } else {
                    printa("*CPF inválido");
                }
            }
        }
    } else {
        if(cpf == ""){
            printa("**O CPF não pode ser vazio.")
        } else {
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
                printa("A data é válida");
            }else if((mes >= 1 || mes <= 12) && mes != 2) {
                if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && dia <=31){
                    printa("A data é válida");
                }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia <= 30) {
                    printa("A data é válida");
                }else {
                    printa("*A data é inválida");
                }
            }else {
                printa("*A data é inválida");
            }
        }else {

            if((mes >= 1 || mes <= 12) && mes != 2) {
                if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12 && dia <=31) {
                    printa("A data é válida");
                }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia <= 30) {
                    printa("A data é válida");
                }else {
                    printa("*A data é inválida");
                }
            }else {
                if(mes == 2 && dia <= 28) {
                    printa("A data é válida");
                }else {
                    printa("*A data é inválida");
                }
            }
        }
        
    }else {
        if(data == ""){
            printa("**A data não pode ser vazia.")
        }else {
            printa("*A data é inválida");
        }
        
    }

}
function validaCartao() {
    
    let cartao = entradaCartao.value;

    if (padraoCartao.test(cartao)) {

        cartao = cartao.split(" ");
        cartao = cartao.join("");
        cartao = cartao.split("");
        cartao = cartao.map(x=>parseInt(x));

        let impar = [];
        let par = [];
        let maior =[];
        let tot = 0;
        let mult = 0;
        let sum = 0;
        let diff = 0

        for (let i = 0; i < (cartao.length - 1); i++) {
            if (i % 2 == 0) {
                mult = cartao[i] * 2;
                if (mult >= 10) {
                    maior.push(mult);
                }else {
                    par.push(mult);
                }
            }else{
                impar.push(cartao[i]);
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

        if ((tot % 10 == 0) && (cartao[15] == tot%10)) {
            printa("O número do cartão é válido")
        } else {
            diff = 10 - (tot%10);

            if (diff == cartao[15]) {
                printa("O número do cartão é válido");
            }else {
                printa("*Número do cartão inválido");
            }
        }
        
    }else {
        if(cartao == ""){
            printa("**O número do cartão não pode ser vazio.")
        }else {
            printa("*Número do cartão inválido");
        }
        
    }
}

function validar() {

    validaCep();
    validaEmail();
    validaCPF();
    validaData();
    validaCartao();

}



function printa(txt, clear=false){

    let box = document.getElementById("box");

    if ( clear )
        box.innerHTML = "";

    box.innerHTML += txt + "<br />";
}