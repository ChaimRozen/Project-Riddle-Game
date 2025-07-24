export default class Player{
    times = [];
    constructor(name){
        this.name = name;
    }
    recordTime(start, end){
        this.times.push(end - start);
    }
    showStats(){
        let totalTime = 0;
        for (let i = 0; i < this.times.length; i++){
            totalTime += this.times[i]/1000;
        }
        if (this.times.length > 0){
            let averageTime = totalTime/this.times.length;
            console.log(`${this.name} total time is ${totalTime}, average time is ${averageTime} sec `);
        } else {
            console.log(`times list is empty`);
        }
    }
}