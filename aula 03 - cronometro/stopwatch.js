class Stopwatch {
    #elapsedTimeInSeconds = 0;
    #intervalID = null;

    start() {
        this.#intervalID = setInterval(() => {
            console.log(
                Stopwatch.formatTime(this.#elapsedTimeInSeconds)
            );

            this.checkTimerToStopScript();

            this.#elapsedTimeInSeconds++;
        }, 1000);
    }

    stop() {
        clearInterval(this.#intervalID);
    }

    restart() {
        this.#elapsedTimeInSeconds = 0;
    }

    checkTimerToStopScript() {
        if (this.#elapsedTimeInSeconds === 61) {
            this.stop();
        }
    }

    static formatTime(timeInSeconds) {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds - hours * 3600 - minutes * 60;

        return `${Stopwatch.addZeros(hours)
            }:${Stopwatch.addZeros(minutes)
            }:${Stopwatch.addZeros(seconds)
            }`;
    }

    static addZeros(originalNumber) {
        let originalNumberAsString = originalNumber.toString();

        if (originalNumberAsString.length === 1) {
            originalNumberAsString = `0${originalNumberAsString}`;
        }

        return originalNumberAsString;
    }
}

const stopwatch = new Stopwatch();
stopwatch.start();
