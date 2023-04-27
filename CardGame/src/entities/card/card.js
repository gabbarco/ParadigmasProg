import { NAIPE_CLUBS, NAIPE_DIAMONDS, NAIPE_HEARTS, NAIPE_SPADES } from "../../enums";

export default class Card {

    #value;
    #label;
    #naipe;

    constructor(value,naipe) {
        this.value = value;
        this.#naipe = naipe;
    }

    image() {
        let v;
        if (this.value > 1 && this.value < 10) {
            v='0' + this.label;
        } else {
            v= this.label;
        }
        // v= (this.value > 1 && this.value < 10) ? '0'+this.label: this.label;
        
        return `card_${this.naipe}_${v}.png`
    }

    print() {
        console.log(`${this.#value} (${this.#label}) de ${this.#naipe}`);
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

        const labels = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

        this.#value = newValue;
        this.#label = labels[newValue-1]

        this.#value = newValue
    }

    get label() {
        return this.#label
    }

    get naipe() {
        return this.#naipe
    }

    set naipe(newNaipe) {
        const naipes = [NAIPE_CLUBS, NAIPE_DIAMONDS, NAIPE_HEARTS, NAIPE_SPADES];

        if (!naipes.includes(newNaipe)) {
            this.#naipe = this.#naipe ?? NAIPE_CLUBS;
            return
        }

        this.#naipe= newNaipe;
    }
}

