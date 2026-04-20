"use strict";


    let isFlipped = false;
function cardFlipper() {
    if (isFlipped === false) {
        document.getElementById('c1').style.transform = `rotateY(180deg)`;
        console.log(isFlipped)
        isFlipped = true;
    } else { (isFlipped === true)
        document.getElementById('c1').style.transform = `rotateY(0deg)`;
        console.log(isFlipped)
        isFlipped = false;  
    }
}