//Paciência - Gabriel Barco Borges

import Deck from "./src/entities/deck"

//Constantes do Html/Css

const espacos = document.querySelectorAll('.espaco');
const figuraBaralho = document.querySelector('#baralho');
const espacoBaralho = document.querySelector('#espacoBaralho');
const cardAberta = document.querySelector('#card-aberta');
const espacoSeq1 = document.getElementById('sequencia1');
const espacoSeq2 = document.getElementById('sequencia2');
const espacoSeq3 = document.getElementById('sequencia3');
const espacoSeq4 = document.getElementById('sequencia4');
const espacoSeq5 = document.getElementById('sequencia5');
const espacoSeq6 = document.getElementById('sequencia6');
const espacoSeq7 = document.getElementById('sequencia7');
const espacoNaipe1 = document.getElementById('naipe1');
const espacoNaipe2 = document.getElementById('naipe2');
const espacoNaipe3 = document.getElementById('naipe3');
const espacoNaipe4 = document.getElementById('naipe4');

//Variáveis Globais

let cardSegurada; //Carta Segurada pelo mouse
let lastVetor; //Vetor de onde a carta saiu
let newVetor; //Vetor pra onde a carta foi
let localSaida; //Local de origem da carta
let poslastVetor; //Posição no vetor da carta
let numcardsArrastadas; //Número de cartas arrastadas
let baralho  = new Deck(); //Criação do objeto Deck
let retiredCards = []; //Cartas retiradas do baralho
let seq1 = [];
let seq2 = [];
let seq3 = [];
let seq4 = [];
let seq5 = [];
let seq6 = [];
let seq7 = [];
let naipe1  = [];
let naipe2 = [];
let naipe3 = [];
let naipe4 = [];

//Funções de embaralhar e distribuir o baralho
baralho.shuffle()
distribuir(baralho);

//Função de distribuir as cards entre os montes inicias
function distribuir(baralho){
    //Distribuição entre os 7 montes
    for(let i = 0; i < 7; i++){
        let selectedCard;
        if(i == 0){
            selectedCard = baralho.draw();
            seq1.push(selectedCard);
            //Endereço das imagens das cartas
            newCard(`/images/${selectedCard.image()}`,espacoSeq1,30*i,true);
        }
        if(i <= 1){
            selectedCard = baralho.draw();
            seq2.push(selectedCard);
            if(i==1){
                newCard(`/images/${selectedCard.image()}`,espacoSeq2,30*i,true);
            }
            else{
                newCard(`/images/card_back.png`,espacoSeq2,30*i,false);
            }
            
        }
        if(i <= 2){
            selectedCard = baralho.draw();
            seq3.push(selectedCard);
            if(i==2){
                newCard(`/images/${selectedCard.image()}`,espacoSeq3,30*i,true);
            }
            else{
                newCard(`/images/card_back.png`,espacoSeq3,30*i,false);
            }
        }
        if(i <= 3){
            selectedCard = baralho.draw();
            seq4.push(selectedCard);
            if(i==3){
                newCard(`/images/${selectedCard.image()}`,espacoSeq4,30*i,true);
            }
            else{
                newCard(`/images/card_back.png`,espacoSeq4,30*i,false);
            }
        }
        if(i <= 4){
            selectedCard = baralho.draw();
            seq5.push(selectedCard);
            if(i==4){
                newCard(`/images/${selectedCard.image()}`,espacoSeq5,30*i,true);
            }
            else{
                newCard(`/images/card_back.png`,espacoSeq5,30*i,false);
            }
        }
        if(i <= 5){
            selectedCard = baralho.draw();
            seq6.push(selectedCard);
            if(i==5){
                newCard(`/images/${selectedCard.image()}`,espacoSeq6,30*i,true);
            }
            else{
                newCard(`/images/card_back.png`,espacoSeq6,30*i,false);
            }
        }
        if(i <= 6){
            selectedCard = baralho.draw();
            seq7.push(selectedCard);
            if(i==6){
                newCard(`/images/${selectedCard.image()}`,espacoSeq7,30*i,true);
            }
            else{
                newCard(`/images/card_back.png`,espacoSeq7,30*i,false);
            }
        }
    }
    
}

//Criação do elemento da nova carta
function newCard(src,posicao, top,draggable){
    let newCardAberta = document.createElement('img');
    newCardAberta.style.position  ='absolute';
    newCardAberta.style.top = `${top}px`;
    newCardAberta.src = src;
    newCardAberta.draggable = draggable;
    newCardAberta.addEventListener('dragstart',dragStart);
    posicao.appendChild(newCardAberta);
}

//Função para identificar o vetor de onde a carta foi arrastada
function localDrag(src){
    let split = src.split('/');
    for(let i in retiredCards){
        if(retiredCards[i].image() == split[split.length-1]){
            poslastVetor = i;
            return retiredCards;
        }
    }
    for(let i in seq1){
        if(seq1[i].image() == split[split.length-1]){
            poslastVetor = i;
            return seq1;
        }
    }
    for(let i in seq2){
        if(seq2[i].image() == split[split.length-1]){
            poslastVetor = i;
            return seq2;
        }
    }
    for(let i in seq3){
        if(seq3[i].image() == split[split.length-1]){
            poslastVetor = i;
            return seq3;
        }
    }
    for(let i in seq4){
        if(seq4[i].image() == split[split.length-1]){
            poslastVetor = i;
            return seq4;
        }
    }
    for(let i in seq5){
        if(seq5[i].image() == split[split.length-1]){
            poslastVetor = i;
            return seq5;
        }
    }
    for(let i in seq6){
        if(seq6[i].image() == split[split.length-1]){
            poslastVetor = i;
            return seq6;
        }
    }
    for(let i in seq7){
        if(seq7[i].image() == split[split.length-1]){
            poslastVetor = i;
            return seq7;
        }
    }
    for(let i in naipe1){
        if(naipe1[i].image() == split[split.length-1]){
            poslastVetor = i;
            return naipe1;
        }
    }
    for(let i in naipe2){
        if(naipe2[i].image() == split[split.length-1]){
            poslastVetor = i;
            return naipe2;
        }
    }
    for(let i in naipe3){
        if(naipe3[i].image() == split[split.length-1]){
            poslastVetor = i;
            return naipe3;
        }
    }
    for(let i in naipe4){
        if(naipe4[i].image() == split[split.length-1]){
            poslastVetor = i;
            return naipe4;
        }
    }
}

//Função de final de jogo
function endGame(){
    alert('Parabéns! Você venceu!')
    location.reload();
}

//Função para tirar uma carta do baralho
espacoBaralho.addEventListener('click',function(){
    if(baralho.length() == 0){
        let cont = retiredCards.length;
        
        while(cont > 0){
            baralho.insertLast(retiredCards)
            cont--;
            figuraBaralho.style.visibility = 'visible';
            cardAberta.removeChild(cardAberta.childNodes[0]);
        }
    }
    else{
        let selectedCard = baralho.draw();
        newCard(`/images/${selectedCard.image()}`,cardAberta, 0,true);
        retiredCards.push(selectedCard);
        if(baralho.length == 0){
            figuraBaralho.style.visibility = 'hidden';
        }
    }
    
});

//Todos os lugares onde é possível soltar uma card
for(const espaco of espacos){
    espaco.addEventListener('dragover', dragOver);
    espaco.addEventListener('drop', dragFinal);
}

//Função para segurar a carta
function dragStart(){
    cardSegurada = this;
    lastVetor  = localDrag(cardSegurada.src);
    console.log(lastVetor)
    localSaida = cardSegurada.parentElement;
}

function dragOver(e){
    e.preventDefault();
}

//Função para soltar a carta
//Verifica qual foi o vetor que a carta foi solta
function dragFinal(e){
    let inserir = false;
    numcardsArrastadas = lastVetor.length - poslastVetor;
    if(this == espacoSeq1){
        newVetor = seq1;
    }
    else if(this == espacoSeq2){
        newVetor = seq2;
    }
    else if(this == espacoSeq3){
        newVetor = seq3;
    }
    else if(this == espacoSeq4){
        newVetor = seq4;
    }
    else if(this == espacoSeq5){
        newVetor = seq5;
    }
    else if(this == espacoSeq6){
        newVetor = seq6;
    }
    else if(this == espacoSeq7){
        newVetor = seq7;
    }
    else if(this == espacoNaipe1){
        newVetor = naipe1;
    }
    else if(this == espacoNaipe2){
        newVetor = naipe2;
    }
    else if(this == espacoNaipe3){
        newVetor = naipe3;
    }
    else{
        newVetor = naipe4;
    }
    //Inserção da carta nos montes iniciais
    if(this == espacoSeq1 || this == espacoSeq2 || this == espacoSeq3 || this == espacoSeq4 || this == espacoSeq5 || this == espacoSeq6 || this == espacoSeq7){
        if(this.childElementCount == 0){
            if(lastVetor[poslastVetor].value == 13){
                inserir = true;
            }
           
        }
        else if(newVetor[newVetor.length - 1].value == lastVetor[poslastVetor].value + 1 && (newVetor[newVetor.length - 1].naipe == 'clubs' || newVetor[newVetor.length - 1].naipe == 'spades')){
            if (lastVetor[poslastVetor].naipe == 'diamonds' || lastVetor[poslastVetor].naipe == 'hearts')    
                inserir = true;       
        }
        else if(newVetor[newVetor.length - 1].value == lastVetor[poslastVetor].value + 1 && (newVetor[newVetor.length - 1].naipe == 'diamonds' || newVetor[newVetor.length - 1].naipe == 'hearts')){
            if (lastVetor[poslastVetor].naipe == 'clubs' || lastVetor[poslastVetor].naipe == 'spades')    
                inserir = true;       
        }
        
        if(inserir){
            cardSegurada.style.top = `${0 + (this.childElementCount * 30)}px`;
        }   
    }
    //Inserção da carta nos montes finais
    else{
        if(this.childElementCount == 0){
            if(lastVetor[lastVetor.length - 1].value == 1){
                inserir = true;
            }            
        }
        else if(newVetor[newVetor.length - 1].value + 1 == lastVetor[lastVetor.length - 1].value && newVetor[newVetor.length - 1].naipe == lastVetor[lastVetor.length - 1].naipe){
            inserir = true
        }
        if(inserir){
            cardSegurada.style.top = 0;
        }
    }
    e.preventDefault();
    if(inserir){
        //Inserção da carta no local do mouse
        
        if(localSaida.id == 'card-aberta' || localSaida.id == 'naipe1' || localSaida.id == 'naipe2' || localSaida.id == 'naipe3'|| localSaida.id == 'naipe4'){
            newVetor.push(lastVetor.pop());
            this.append(cardSegurada);
        }
        else{
            let copialastVetor = lastVetor.map((x)=>x);
            let novosElementos = copialastVetor.splice(poslastVetor,copialastVetor.length-poslastVetor);
            while(numcardsArrastadas > 0){
                this.append(cardSegurada);
                cardSegurada = localSaida.childNodes[poslastVetor];
                console.log(cardSegurada)
                numcardsArrastadas--;
                
                if(cardSegurada != null){
                    if(cardSegurada.tagName == 'IMG'){
                        cardSegurada.style.top = `${30*this.childNodes.length}px`;
                    }
                }  
                newVetor.push(novosElementos.shift());
                lastVetor.pop();
            }
        //Verifica se o jogo terminou e chama a função
        if(naipe1.length == 13 && naipe2.length == 13 && naipe3.length == 13 && naipe4.length == 13){
            endGame();
        }    
            
        }
        //Deixa a carta visível quando é a última da sequencia
        if(localSaida == espacoSeq1 || localSaida == espacoSeq2 || localSaida == espacoSeq3 || localSaida == espacoSeq4 || localSaida == espacoSeq5 || localSaida == espacoSeq6 || localSaida == espacoSeq7){
            let quantosFilhos = localSaida.childElementCount;
            if(quantosFilhos > 0){
                localSaida.removeChild(localSaida.childNodes[quantosFilhos - 1]); 
                newCard(`/images/${lastVetor[lastVetor.length-1].image()}`,localSaida,30*(quantosFilhos - 1),true);
            }   
        }        
    }
    
}