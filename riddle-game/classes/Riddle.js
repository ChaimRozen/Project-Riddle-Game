export default class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask(ridAnswer){
        let bool = false;
        while (!bool){
            console.log(`Riddle name: ${this.name}`)
            const getInput = require('prompt-sync')();
            let userAnswer = getInput(this.taskDescription);
            if (this.correctAnswer == userAnswer){
                console.log(`you right! the answer is ${this.correctAnswer}`);
                bool = true;
            }
            else{
            console.log("wrong answer! try again! ");
            }
}}}
