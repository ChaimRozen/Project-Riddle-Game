export default class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask(prompt){
        let correct = false;
        while (!correct){
            console.log(`Riddle name: ${this.name}`)
            const userAnswer = prompt(this.taskDescription)
            if (this.correctAnswer == userAnswer){
                console.log(`you right! the answer is ${this.correctAnswer}`);
                correct = true;
            }
            else{
            console.log("wrong answer! try again! ");
            }
}}}
