class Clock {
  constructor(){
    let date = new Date();

    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this),1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    this.seconds = this.seconds % 60;
    if (this.seconds === 0) {
      this.minutes++;
    }

    this.minutes = this.minutes % 60;
    if (this.minutes === 0) {
      this.hours++;
    }

    if (this.hours === 25){
      this.hours = 1;
    }

    this.printTime();
  }
}

const clock = new Clock();