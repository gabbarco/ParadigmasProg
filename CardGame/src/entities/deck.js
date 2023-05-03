import { CARD_NAIPES } from "../enums";
import Card from "./card/card";

export default class Deck {

    #cards= []

    constructor() {
        this.#card = this.#create();
    }
    #create() {
        let deck= []

        for(let naipe of CARD_NAIPES){
            for(let index=0; index < 13; index++){
                deck.push(new Card(index, naipe));
            }
        }
    }
    //Embaralhar
    shuffle() {
        
    }
    //Comprar a carta
    //Retira a carta do topo do baralho e a retorna
    draw() {
        return this.#cards.pop();
    }
    
    /**
     * @description Remonta o baralho, apenas com as cartas que não estão nas mãos de nenhum dos jogadores
     * 
     * @param {Array<Card>} hands Arrays de mãos de cartas dos jogadores
     * 
     * @return void 
     */
    reset(hands) {
        let deck = this.#create();

		for(let i=0; i<hands.length; ++i){
			for(let card of hands[i]){
				let index = deck.findIndex((el)=>el.label===card.label && el.value===card.value);
				deck.splice(index, 1);
			}
        }
		this.#cards = deck;
    }

    print() {
        for (let card of this.#cards) {
            card.print();
        }
    }
}