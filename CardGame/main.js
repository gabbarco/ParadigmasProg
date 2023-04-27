import Card from "./src/entities/card/card";

const carta = new Card(8, '4', 'spades')
const mesa = document.getElementById('mesa')

showCard(mesa,carta)

function showCard(el, card) {
  const html =`
    <img src="${PATH_CARD_IMG + card.image()}"/>
  `;
  el.insertAdjacentHTML('beforeend',html);
}