class GuessingGame {
   constructor() {
      this.result = 0;
      this.begin = 0;
      this.end = 0;
   }

   setRange(min, max) {
      this.begin = min;
      this.end = max;
   }

   guess() {
      this.result = this.begin + Math.ceil((this.end - this.begin) / 2)
      return this.result;
   }

   lower() {
      this.end = this.result;
   }

   greater() {
      this.begin = this.result;
   }
}

module.exports = GuessingGame;
