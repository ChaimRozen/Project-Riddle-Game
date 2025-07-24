import readline from 'readline-sync';

import Riddle from './classes/Riddles.js';
import Player from './classes/Player.js';
import allRiddles from './riddles/allRiddles.js';

console.log("welcome to the game");
let name = readline.question("enter your name ");
let currentPlayer = new Player(name);

const riddlesApp = [];
for (let i = 0; i < allRiddles.length; i++){
    let tempRiddle = new Riddle(allRiddles[i].id, allRiddles[i].name, allRiddles[i].taskDescription, allRiddles[i].correctAnswer);
    riddlesApp.push(tempRiddle);
}

for (let i = 0; i < riddlesApp.length; i++){
    const start = Date.now()
    riddlesApp[i].ask()
    const end = Date.now()
    currentPlayer.recordTime(start, end)
}
currentPlayer.showStats()