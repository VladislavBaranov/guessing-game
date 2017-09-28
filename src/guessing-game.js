class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.prevGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.prevGuess = Math.ceil((this.max - this.min) / 2) + this.min;
        return this.prevGuess;
    }

    lower() {
        this.max = this.prevGuess;
    }

    greater() {
        this.min = this.prevGuess;
    }
}

module.exports = GuessingGame;
