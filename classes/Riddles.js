import readline from 'readline-sync';

export default class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }

    ask() {
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        let playerAnswer;
        while (playerAnswer != this.correctAnswer) {
            playerAnswer = readline.question(`${this.taskDescription}`);
            if (playerAnswer === this.correctAnswer) {
                console.log("Correct");
            } else {
                console.log("Try again");
            }
        }
    }
}