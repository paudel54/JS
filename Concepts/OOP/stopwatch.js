function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        //validation check
        if (running) {
            throw new Error('Stopwatch has already started')
        }
        running = true;
        //start time is current date time 
        startTime = new Date();
    };

    this.stop = function () {
        //validation check
        if (!running) {
            throw new Error('Stopwatch has already stopped')
        }
        running = false;
        //start time is current date time 
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;

    }

    //defining read only property for duration
    Object.defineProperty(this, 'duration', {
        get: function () {
            //duration is local variabl
            return duration;
        }
    });
}