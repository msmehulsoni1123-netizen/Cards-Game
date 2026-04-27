"use strict";

for (let i = 1; i <= 30; i++) {
    document.getElementById('cardBox').innerHTML += `<button class="card" id="c${i}" title="Tap to Flip" onclick="cardFlipper(c${i})"><div id="backFace"><div id="frontFace"></div></div></button>`
}


let cardFlip;
cardFlip = false;
function cardFlipper(cardId) {
    if (cardFlip === false) {
        document.getElementById(cardId).style.transform = `rotateY(180deg)`;
        cardFlip = true;
    } else if (cardFlip === true) {
        document.getElementById(cardId).style.transform = `rotateY(0deg)`;
        cardFlip = false;
    }
}
cardFlipper("c1")