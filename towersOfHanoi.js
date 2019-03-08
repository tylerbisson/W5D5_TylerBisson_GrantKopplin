const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class towersOfHanoi {

  constructor(){
    this.towers = [[1,2,3],[],[]];
  }

  run(){
    //until game = won 
    //prompt player for start and end peg 
    //move disc 
  }

  promptMove(callback) {
    console.log(this.towers);
    reader.question("Select start and end towers", answer => {
      const startTowerIdx = parseInt(answer[0]);
      const endTowerIdx = parseInt(answer[answer.length -1]);
      callback(startTowerIdx, endTowerIdx);
    });
  }

  isValidMove(startTowerIdx, endTowerIdx){
    this.towers[startTowerIdx][0] < this.towers[endTowerIdx][0] || 
  }
}

towers = new towersOfHanoi();
towers.promptMove((startTowerIdx, endTowerIdx) => {
  console.log(startTowerIdx, endTowerIdx);
});