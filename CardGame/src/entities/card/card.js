import { CARD_LABELS, CARD_NAIPES } from "../../enums";

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
            this.#label= this.#label ?? 'A';
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

    print(){
        console.log(`${this.value} (${this.label}) de ${this.naipe}`)
    }

    //Retorna o nome do arquivo da imagem atual
    image() {
        return `card_${this.#naipe}_${this.#label}.png`
    }

}

