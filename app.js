import PromptSync from 'prompt-sync';

import Player from './classes/Player.js';
import Riddle from './classes/Riddle.js';
import riddles from './riddles/index.js';

const prompt = PromptSync();

console.log("Welcome to the Riddle Game!");

const playerName = prompt("What is your name? ");
const player = new Player(playerName);

for (const data of riddles) {
  const riddle = new Riddle(data.id, data.name, data.taskDescription, data.correctAnswer);
  const start = Date.now();
  riddle.ask();
  const end = Date.now();
  player.recordTime(start, end);
}

player.showStats();