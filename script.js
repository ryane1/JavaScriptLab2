"use strict";
let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;
let userDamage = 0;
let grantDamage = 0;
let userName = undefined;
let userChoice;
let play = prompt("Would you like to play?");

function startGame() {
    if (play === "yes") {
        userName = prompt("choose a username");
        startCombat();
    }
}

function startCombat() {
    while (grantWins < 1 && userWins < 3) {
        userChoice = prompt("Would you like to attack or quit?")
        if (userChoice === "attack") {
            userDamage = getDamage();
            grantDamage = getDamage();
            userHealth -= userDamage;
            console.log(`${userName} suffered ${userDamage} and health is now ${userHealth}`);
            grantHealth -= grantDamage;
            console.log(`Grant suffered ${grantDamage} and Grant's health is now ${grantHealth}`);
            if (grantHealth <= 0) {
                console.log("You beat grant");
                userWins++;
                grantHealth = 10;
            }
            if (userWins === 3) {
                console.log("You win");
                break;
            }
            if (userHealth <= 0) {
                console.log("Grant wins");
                grantWins++;
                break;
            }
        } else {
            return;
        }

    }


}

function getDamage() {
    return Math.floor((Math.random() * 5) + 1);
}
startGame();