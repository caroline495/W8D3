
class Clock {
    constructor() {
      // 1. Create a Date object.
    //   const d = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      // 3. Call printTime.
      this.printTime();
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick.bind(this), 1000);
      // we lose the context when we call _tick() as a callback in setInterval, so we need to bind
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      const time = `${this.hours}:${this.minutes}:${this.seconds}`;
      console.log(time);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 24 hour, reset when hour hits 24
      // when seconds hit 60, reset to 0
      // when minutes hit 60, reset to 0
      // add 1 to minute, and 1 to hour

        this.seconds++;
        if (this.seconds === 60){
            this.seconds = 0;
            this.minutes++;
        } 
        if (this.minutes === 60){
            this.minutes = 0;
            this.hours++;
        } 
        if (this.hours === 24){
            this.hours = 0;
        } 
      
      // 2. Call printTime.
        this.printTime();
    }
  }
  
  const clock = new Clock();
