export default class Player {
  constructor(name) {
    this.name = name;
    this.times = [];
  }

  recordTime(start, end) {
    this.times.push(end - start);
  }

  showStats() {
    const total = this.times.reduce((a, b) => a + b, 0);
    const avg = total / this.times.length;
    console.log(`\n Game Over ${this.name}`);
    console.log(`Total time: ${total}`);
    console.log(`Average time per riddle: ${avg}`);
  }
}

