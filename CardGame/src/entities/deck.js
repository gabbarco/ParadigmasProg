import { CARD_LABELS } from "../enums";

export default class Deck {
    constructor() {

    }
    #create() {
        for (let naipe of CARD_NAIPES) {
            for (let v=0;v < CARD_LABELS.length; v++)
        }
    }
    //Embaralhar
    shuffle() {
    
    }
    //Comprar a carta
    //Retra a carta do topo do baralho e a retorna
    draw() {

    }
    
    /**
     * @description Remonta o baralho, apenas com as cartas que não estão nas mãos de nenhum dos jogadores
     * 
     * @param {Array<Card>} hands Arrays de mãos de cartas dos jogadores
     * 
     * @return void 
     */
    reset(hands) {

    }

    print() {
        for (let card of this.#cards) {
            card.print();
        }
    }
}