import Deck from "./src/entities/deck";

let deck = new Deck();

console.log(deck)

deck.shuffle()

let hands= [];

hands.push(deck.draw());
hands.push(deck.draw());
hands.push(deck.draw());

console.log(deck)

console.log(hands)

deck.top()

deck.insertLast()

console.log(deck)

console.log(deck.top())
