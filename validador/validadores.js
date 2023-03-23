// validadores,js

// CEP: 00000-000 ou 00000000

let padraoCEP = /^[0-9]{5}-[0-9]{3}$/;
let cep = document.getElementById("cep");

function validaCEP() {

    if (!padraoCEP.test(cep.value)) {
        printa("Não é valido", true)
    } else {
        printa("É valido", true)
    }
    return true
}   



function printa(txt, clear=false){

    let box = document.getElementById("box");

    if ( clear )
        box.innerHTML = "";

    box.innerHTML += txt + "<br />";
}