
let s = "Instituto Federal do Triângulo Mineiro"
printa(s)

printa("A string tem " + s.length + " caracteres");

let incF = s.toLowerCase().includes("f");
printa(incF ? 'Existe a letra F' : 'Não existe a letra F');

let primeiro = s.charAt(0);
printa("Primeiro: " + primeiro);
let ultimo = s.charAt(s.length - 1);
printa("Último: " + ultimo);


// aceita indexOf regex
let posF = s.toLowerCase().indexOf('f');
printa( posF != -1 ? 'Está na posição: ' + posF : 'Não encontrei o F');

let posX = s.toLowerCase().indexOf('x');
printa( posX != -1 ? 'Está na posição: ' + posX : 'Não encontrei o X');

let posI = s.toLowerCase().indexOf('f');
printa( posI != -1 ? 'Está na posição: ' + posI : 'Não encontrei I');

let palavras = s.split(" ");
printa(palavras);
printa(s.replace("Mineiro", "Goiano"));
printa(s.replace("o", "a"));
let = trocado = s.split("o").join("a");
printa(trocado);

let email = "nome@gmail.com ";
let cortado = email.trim();
printa("Email: " + email.length + " Cortado: " + cortado.length);

printa(s.substring(10, 15));

function printa(txt, clear=false){

    let box = document.getElementById("box");

    if ( clear )
        box.innerHTML = "";

    box.innerHTML += txt + "<br />";
}