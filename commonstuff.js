"use strict";

// Function Area here:

function assignName() {
    let currentUserName;
    currentUserName = document.getElementById("name").value || "Player 1";
    localStorage.setItem("playerName",currentUserName);
}
document.getElementById("intro").innerText = "Welcome " + localStorage.getItem("playerName") + ", Tap to Flip!";