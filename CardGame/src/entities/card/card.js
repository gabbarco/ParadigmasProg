import { CARD_LABELS, CARD_NAIPES, NAIPE_CLUBS, NAIPE_DIAMONDS, NAIPE_HEARTS, NAIPE_SPADES } from "../../enums";

export default class Card {

    #value;
    #label;
    #naipe;

    constructor(value,naipe) {
        this.value = value;
        this.naipe = naipe;
    }

    get value(){
        return this.#value;
    }
    set value(newValue) {
        if ( isNaN(newValue) || newValue < 1 || newValue > 13) {
            this.#value= this.#value ?? 1;
            this.#label- this.#label ?? 'A';
            return;
        }

        this.#value = newValue;
        this.#label = CARD_LABELS[newValue-1]
    }

    get label() {
        return this.#label
    }

    get naipe() {
        return this.#naipe
    }

    set naipe(newNaipe) {
        if (!CARD_NAIPES.includes(newNaipe)) {
            this.#naipe = this.#naipe ?? CARD_NAIPES[0];
            return
        }

        this.#naipe= newNaipe;
    }

    image() {
        let v;
        if (this.value > 1 && this.value < 10) {
            v='0' + this.label;
        } else {
            v= this.label;
        }
        
        return `card_${this.#naipe}_${this.#label}.png`
    }

}

